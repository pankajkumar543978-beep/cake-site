# Cakes by Sia — Artisanal Cake Studio Website

A luxury, high-converting custom website demo built for **Cakes by Sia**, a boutique artisanal cake studio based in Livingston Hill NE, Calgary, AB.

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Playwright](https://img.shields.io/badge/Playwright-Tested-green?style=flat&logo=playwright)](https://playwright.dev/)

---

## 🌟 Key Highlights & Features

- **Artisanal Heritage Design**: Anti-slop warm bakery aesthetic with Cormorant Garamond display serif and DM Sans typography, soft champagne-rose highlights, and authentic Livingston Calgary neighborhood references.
- **Screen-Fit Hero Showcase**: Responsive rotating cake showcase engineered to fit 100% above the fold on laptop viewports (1366×768 / 1280×800) and scale up on larger 1080p+ monitors.
- **Signature Cake Categories with Detail Modals**: Streamlined, compact category cards that open an accessible detail modal on tap with complete specifications, serving guidelines, lead times, and theme styling tags.
- **Mobile-First Experience**:
  - Compact breadcrumb & inline search on `/menu` matching modern food catalog references.
  - Slide-up bottom filter drawer with multi-category and rush order toggles.
  - Mobile touch auto-carousels on Signature Categories and Instagram feed.
  - Floating translucent glassmorphic navigation dropdown with inside `✕` close control.
- **Site-Wide Skeleton Shimmers**: Warm champagne-rose loading placeholders across all image containers for slow connections.
- **Interactive Inquiries**: Short-notice rush detection, automatic WhatsApp pre-filled messages, and email inquiry generators.

---

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/pankajkumar543978-beep/cake-site.git
cd cake-site
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy the `.env.example` template to `.env.local` to customize business contacts or URLs:
```bash
cp .env.example .env.local
```

| Variable | Description | Default Fallback |
|---|---|---|
| `NEXT_PROD_SITE_URL` | Public production URL | `https://cakes-by-sia.vercel.app` |
| `NEXT_PROD_BUSINESS_NAME` | Business brand name | `Cakes by Sia` |
| `NEXT_PROD_BUSINESS_PHONE` | Direct call phone number | `+13683997686` |
| `NEXT_PROD_BUSINESS_PHONE_FORMATTED` | Display phone format | `+1 (368) 399-7686` |
| `NEXT_PROD_BUSINESS_EMAIL` | Contact & inquiry email | `contact@cakesbysia.ca` |
| `NEXT_PROD_WHATSAPP_NUMBER` | WhatsApp messaging number | `13683997686` |
| `NEXT_PROD_WHATSAPP_URL` | Pre-filled WhatsApp link | `https://wa.me/13683997686...` |
| `NEXT_PROD_INSTAGRAM_HANDLE` | Instagram handle | `@cakesbysia47` |
| `NEXT_PROD_INSTAGRAM_URL` | Verified Instagram profile | `https://www.instagram.com/cakesbysia47/` |
| `NEXT_PROD_GOOGLE_MAPS_URL` | Google Maps location profile | `https://maps.app.goo.gl/NFsJFUsd3qfGAYJd7` |

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Testing & Quality Assurance

A comprehensive 36-test suite verifying layout, responsiveness, accessibility, image loading, and forms across Desktop Chrome, Mobile Chrome, and Tablet Viewports:

```bash
# Run all Playwright tests
npx playwright test

# View HTML test report
npx playwright show-report
```

---

## 📦 Production Build

```bash
npm run build
npm run start
```

---

## 🔒 Security & Git Hygiene

- No API keys, passwords, or personal secrets are committed to this repository.
- Sensitive environment files (`.env`, `.env*.local`) and build artifacts (`.next`, `node_modules`, `playwright-report`) are strictly ignored via `.gitignore`.
