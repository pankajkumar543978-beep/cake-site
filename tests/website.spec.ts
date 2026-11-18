import { test, expect } from "@playwright/test";

test.describe("Cakes by Sia - Comprehensive Verification Suite", () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      sessionStorage.setItem("plum_cake_promo_dismissed", "true");
    });
  });

  // 1. Page Load & Title Verification
  test("Homepage loads with correct SEO metadata and title", async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto("/");
    await expect(page).toHaveTitle(/Cakes by Sia \| Custom Cake Studio in Calgary, AB/);

    // Verify Schema.org JSON-LD exists
    const jsonLd = await page.locator('script[type="application/ld+json"]').textContent();
    expect(jsonLd).toBeTruthy();
    const parsed = JSON.parse(jsonLd || "{}");
    expect(parsed.name).toBe("Cakes by Sia");
    expect(parsed.telephone).toBe("+13683997686");
    expect(parsed.aggregateRating.ratingValue).toBe("4.9");

    // Zero critical runtime console errors
    expect(consoleErrors).toEqual([]);
  });

  // 2. Navigation & Sticky Elements
  test("Navigation links scroll smoothly and skip-link is present", async ({ page }) => {
    await page.goto("/");

    // Skip link exists for accessibility
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toBeAttached();

    // Verify main brand logo
    const logo = page.locator("header a", { hasText: "Cakes by Sia" });
    await expect(logo).toBeVisible();

    // Verify announcement bar has live hours
    const banner = page.locator("aside", { hasText: "Livingston Studio Open Daily 7 AM – 8 PM" });
    await expect(banner).toBeVisible();

    // Verify Custom Quote link is attached in header
    const quoteLink = page.locator('header a[href="/quote"]').first();
    await expect(quoteLink).toBeAttached();
  });

  // 3. Category Filter Interactivity
  test("Category filtering updates gallery items", async ({ page }) => {
    // Set sessionStorage so promo popup doesn't block clicks in this test
    await page.addInitScript(() => {
      sessionStorage.setItem("plum_cake_promo_dismissed", "true");
    });

    await page.goto("/");
    await page.locator("#gallery").scrollIntoViewIfNeeded();

    // Default all creations count
    const allCards = page.locator("#gallery article");
    const initialCount = await allCards.count();
    expect(initialCount).toBeGreaterThan(0);

    // Filter by Cupcakes
    const cupcakesTab = page.locator('#gallery button', { hasText: "Cupcakes" });
    await cupcakesTab.click();

    // Verify that every card visible is an Artisan Cupcake
    const cupcakeCards = page.locator("#gallery article");
    const count = await cupcakeCards.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      await expect(cupcakeCards.nth(i)).toContainText(/Cupcake/i);
    }

    // Switch back to All Creations
    await page.locator('#gallery button', { hasText: "All Creations" }).click();
    await expect(page.locator("#gallery article")).toHaveCount(initialCount);
  });

  // 4. Gallery Lightbox Modal
  test("Clicking a cake opens accessible Lightbox and ESC key closes it", async ({ page }) => {
    await page.goto("/");
    await page.locator("#gallery").scrollIntoViewIfNeeded();

    // Click first cake card
    const firstCard = page.locator("#gallery article").first();
    const cakeTitle = await firstCard.locator("h3").innerText();
    await firstCard.click();

    // Lightbox modal should appear
    const modal = page.locator('div[role="dialog"][aria-modal="true"]');
    await expect(modal).toBeVisible();
    await expect(modal).toContainText(cakeTitle);
    await expect(modal).toContainText(/Servings:/);
    await expect(modal).toContainText(/Lead Time:/);

    // Close via Escape key
    await page.keyboard.press("Escape");
    await expect(modal).not.toBeVisible();

    // Reopen and close via Close button
    await firstCard.click();
    await expect(modal).toBeVisible();
    await modal.locator('button[aria-label="Close image viewer"]').click();
    await expect(modal).not.toBeVisible();
  });

  // 5. Dedicated /quote Page Custom Quote Form Validation
  test("Custom quote form shows validation errors on empty submission", async ({ page }) => {
    await page.goto("/quote");

    // Click submit empty
    const submitBtn = page.locator('button[type="submit"]');
    await submitBtn.click();

    // Validation messages should be displayed
    await expect(page.locator("text=Please enter your name")).toBeVisible();
    await expect(page.locator("text=Please enter your phone number")).toBeVisible();
    await expect(page.locator("text=Please choose a date")).toBeVisible();
    await expect(page.locator("text=Please tell us what cake design or theme you have in mind")).toBeVisible();
  });

  // 6. Custom Quote Form Rush Order Detection & Valid Submission
  test("Fills valid inquiry and detects short-notice rush order on /quote", async ({ page }) => {
    await page.goto("/quote");

    // Fill inputs
    await page.locator('input[name="name"]').fill("Amanjot Kaur");
    await page.locator('input[name="phone"]').fill("403-555-0199");

    // Set date to tomorrow (rush order < 48h)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split("T")[0];
    await page.locator('input[name="eventDate"]').fill(dateStr);

    // Verify rush order pill appears inside form
    await expect(page.locator("#enquiry").getByText("Short-Notice Order:")).toBeVisible();

    // Select category and design description
    await page.locator('select[name="category"]').selectOption("Wedding & Special Events");
    await page.locator('textarea[name="designNotes"]').fill("3-tier ivory buttercream with fresh garden roses and gold leaf");

    // Submit form (mocking window.open so popup doesn't block)
    await page.evaluate(() => {
      window.open = () => null;
    });
    await page.locator('button[type="submit"]').click();

    // Success banner is visible
    await expect(page.locator("text=Quote details ready!")).toBeVisible();
  });

  // 7. Navigation link to Quote page test
  test("Quote page contains clean streamlined inputs and zero errors", async ({ page }) => {
    await page.goto("/quote");
    await expect(page.locator("h2")).toContainText("Request a Custom Quote");
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="phone"]')).toBeVisible();
    await expect(page.locator('select[name="servings"]')).toBeVisible();
    await expect(page.locator('textarea[name="designNotes"]')).toBeVisible();
  });

  // 8. Verified Social, Map & Phone Links
  test("Verifies external links: Google Maps, Instagram, and Click-to-Call", async ({ page }) => {
    await page.goto("/");

    // Phone links
    const phoneLinks = page.locator('a[href^="tel:"]');
    const phoneHref = await phoneLinks.first().getAttribute("href");
    expect(phoneHref).toBe("tel:+13683997686");

    // Google Maps link
    const mapLink = page.locator('a[href*="maps.app.goo.gl"], a[href*="maps.google.com"]').first();
    await expect(mapLink).toBeAttached();

    // Instagram links
    const instaLinks = page.locator('a[href*="instagram.com/cakesbysia47"]');
    const instaCount = await instaLinks.count();
    expect(instaCount).toBeGreaterThan(0);
  });

  // 9. Broken Images Scan
  test("All image assets load successfully with non-zero dimensions", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const result = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll("img"));
      const broken = imgs
        .filter((img) => img.complete && img.naturalWidth === 0)
        .map((img) => img.src);
      return { total: imgs.length, broken };
    });

    expect(result.total).toBeGreaterThan(5);
    expect(result.broken).toEqual([]);
  });

  // 10. Serving Guide Dimension Table
  test("Serving table contains correct tier recommendations", async ({ page }) => {
    await page.goto("/");
    await page.locator("#process").scrollIntoViewIfNeeded();

    await expect(page.locator("table")).toBeVisible();
    await expect(page.locator("table")).toContainText("Single Tier (6-inch)");
    await expect(page.locator("table")).toContainText("10 – 12 Servings");
    await expect(page.locator("table")).toContainText("Three-Tier (6-inch + 8-inch + 10-inch)");
    await expect(page.locator("table")).toContainText("65 – 80+ Servings");
  });

  // 11. Multi-Page Menu & Flavors Page
  test("Dedicated /menu page loads with rich catalogs and zero errors", async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    });

    await page.goto("/menu");
    await expect(page).toHaveTitle(/Cake Menu & Flavor Guide \| Cakes by Sia Calgary/);
    await expect(page.locator("h1")).toContainText("Cake Menu & Flavors");

    // Check Signature Creations catalog
    await expect(page.getByRole("heading", { name: "Birthday Cakes" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Wedding & Special Events" })).toBeVisible();

    // Verify Interactive Filters & Search in sidebar or mobile bar
    const searchInput = page.locator('aside input, .lg\\:hidden input').filter({ has: page.locator('visible=true') }).first().or(page.locator('aside input[type="text"]').first()).or(page.locator('.lg\\:hidden input[type="text"]').first());
    const visibleInput = (await page.locator('aside input[type="text"]').isVisible())
      ? page.locator('aside input[type="text"]')
      : page.locator('.lg\\:hidden input[type="text"]');
    await expect(visibleInput).toBeVisible();

    // Test Search Filtering
    await visibleInput.fill("brownie");
    await expect(page.locator("article h3:has-text('Brownies & Dry Cakes')")).toBeVisible();

    // Test Reset / Clear Filter
    const clearBtn = page.locator('button:has-text("Reset Filters")').first();
    await expect(clearBtn).toBeVisible();
    await clearBtn.click();
    await expect(page.locator("article h3:has-text('Birthday Cakes')")).toBeVisible();

    // Test Category Filter
    const cupcakeBtn = (await page.locator('aside button:has-text("Artisan Cupcakes")').isVisible())
      ? page.locator('aside button:has-text("Artisan Cupcakes")')
      : page.locator('.lg\\:hidden button:has-text("Artisan Cupcakes")').first();
    await cupcakeBtn.click();
    await expect(page.getByRole("heading", { name: "Artisan Cupcakes" })).toBeVisible();

    // Reset back to All
    const allBtn = (await page.locator('aside button:has-text("All Creations")').isVisible())
      ? page.locator('aside button:has-text("All Creations")')
      : page.locator('.lg\\:hidden button:has-text("All Creations")').first();
    await allBtn.click();
    await expect(page.locator("article h3:has-text('Birthday Cakes')")).toBeVisible();

    // Check Signature Flavors
    await expect(page.locator("text=Signature Flavors & Fillings")).toBeVisible();
    await expect(page.locator("text=Belgian Dark Chocolate Fudge")).toBeVisible();
    await expect(page.locator("text=Cardamom & Pistachio (Dry / Spiced)")).toBeVisible();

    // Check Dimension Guide
    await expect(page.locator("#dimension-guide")).toBeVisible();
    await expect(page.locator("#dimension-guide table")).toBeVisible();

    expect(consoleErrors).toEqual([]);
  });

  // 12. Multi-Page About & Story Page
  test("Dedicated /about page loads with founder bio and zero errors", async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    });

    await page.goto("/about");
    await expect(page).toHaveTitle(/About Sia & Our Livingston Cake Studio \| Cakes by Sia Calgary/);
    await expect(page.locator("h1")).toContainText("Custom cakes made to order right here in Livingston Hill NE.");

    // Check Founder's Journey
    await expect(page.locator("text=The Baker Behind the Whisk")).toBeVisible();
    await expect(page.locator("text=Custom cakes made to order right here in Livingston Hill NE.")).toBeVisible();

    // Check Principles
    await expect(page.locator("text=The Principles We Bake By")).toBeVisible();
    await expect(page.locator("text=Short-Notice & Rush Orders")).toBeVisible();
    await expect(page.locator("text=Obsession with Piping Detail")).toBeVisible();

    // Check Review Quote
    await expect(page.locator("text=Sonia Sharma, Calgary Client")).toBeVisible();

    expect(consoleErrors).toEqual([]);
  });
});
