export interface CakeCategory {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  leadTime: string;
  recommendedServings: string;
  popularThemes: string[];
}

export interface ServingGuide {
  tiers: string;
  servings: string;
  recommendedEvent: string;
  description: string;
}

export const cakeCategories: CakeCategory[] = [
  {
    id: "birthday",
    name: "Birthday Cakes",
    shortDesc: "From magical children's fantasy designs to modern vintage lambeth and crown cakes.",
    fullDesc: "Bespoke birthday masterpieces tailored to the celebrant's passion, style, and favorite flavors. Hand-piped with silky buttercream, delicate wafer paper, custom toppers, and elegant macaron garnishes.",
    image: "/images/gmaps/gmaps-photo-1.jpg",
    leadTime: "3–5 days (Rush available)",
    recommendedServings: "10 – 35 guests",
    popularThemes: ["Floral Elegance", "Crown & Pearl Vintage", "Cartoon / Character", "Minimalist Palette Knife"],
  },
  {
    id: "wedding",
    name: "Wedding & Special Events",
    shortDesc: "Multi-tiered romantic centerpieces designed with timeless sophistication.",
    fullDesc: "Grand multi-tiered cakes crafted to anchor your reception. Featuring subtle edible gold leaf, deckled-edge textured buttercream, and cascading fresh florals tailored to your wedding palette.",
    image: "/images/instagram/ig-cake-1.jpg",
    leadTime: "2–4 weeks (Advance booking recommended)",
    recommendedServings: "40 – 150+ guests",
    popularThemes: ["Textured Buttercream", "Edible Gold Accent", "Fresh Floral Cascade", "Modern Minimalist Stacks"],
  },
  {
    id: "baby-shower",
    name: "Baby Shower & Gender Reveal",
    shortDesc: "Whimsical pastels, teddy bear accents, and secret colored sponge reveals.",
    fullDesc: "Celebrate the arrival of little ones with charming cloud-soft textures, pastel ombre finishes, and delicate sugar craft modeling that turns every baby shower into a cherished photo memory.",
    image: "/images/instagram/ig-cake-4.jpg",
    leadTime: "4–7 days",
    recommendedServings: "15 – 40 guests",
    popularThemes: ["Storybook Teddy Bear", "Ombre Pastel Swirl", "Secret Color Sponge Reveal", "Little Star Dreams"],
  },
  {
    id: "celebration",
    name: "Custom Milestone Cakes",
    shortDesc: "Graduations, anniversaries, promotions, and family milestone celebrations.",
    fullDesc: "Every achievement deserves a bespoke centerpiece. We translate your story into edible art with customized toppers, tailored colorways, and sculptural fondant details.",
    image: "/images/gmaps/gmaps-photo-10.jpg",
    leadTime: "3–6 days",
    recommendedServings: "12 – 50 guests",
    popularThemes: ["Graduation Elegance", "Silver & Golden Anniversaries", "Milestone 30th/40th/50th", "Corporate Milestones"],
  },
  {
    id: "cupcakes",
    name: "Artisan Cupcakes",
    shortDesc: "Neat, beautifully piped individual treats perfect for dessert tables and gifting.",
    fullDesc: "Moist sponge bases generously crowned with silky Swiss meringue buttercream rosettes, pearls, and seasonal berry accents. Sold in boxes of 6, 12, or custom party towers.",
    image: "/images/gmaps/gmaps-photo-8.jpg",
    leadTime: "2–4 days",
    recommendedServings: "Boxes of 6, 12, 24+",
    popularThemes: ["Floral Bouquets", "Gold Pearl Assortment", "Chocolate Drizzle", "Pastel Party Boxes"],
  },
  {
    id: "brownies-dry",
    name: "Brownies & Dry Cakes",
    shortDesc: "Fudgy rich cocoa brownies, Lotus Biscoff cakes, and comforting tea-time dry sponge loaves.",
    fullDesc: "Indulgent treats baked with premium cocoa, real butter, and toasted nuts. Ideal for everyday celebrations, hostess gifts, and relaxed family gatherings with hot chai or coffee.",
    image: "/images/gmaps/gmaps-photo-6.jpg",
    leadTime: "1–3 days",
    recommendedServings: "Gift boxes & Party Platters",
    popularThemes: ["Lotus Biscoff Spiced", "Fudgy Dark Chocolate", "Walnut Fudge Slice", "Festive Treat Boxes"],
  },
];

export const servingGuides: ServingGuide[] = [
  {
    tiers: "Single Tier (6-inch)",
    servings: "10 – 12 Servings",
    recommendedEvent: "Intimate birthdays, small family dinners",
    description: "Generous 3-layer cake offering tall, dramatic slices for cozy gatherings.",
  },
  {
    tiers: "Single Tier (8-inch)",
    servings: "20 – 24 Servings",
    recommendedEvent: "Standard birthday parties, office milestones",
    description: "The classic crowd-pleaser with abundant decorating surface for custom text and florals.",
  },
  {
    tiers: "Two-Tier (6-inch + 8-inch)",
    servings: "32 – 38 Servings",
    recommendedEvent: "Baby showers, engagements, milestone birthdays",
    description: "Striking height and presence with two contrasting or harmonized flavor sponges.",
  },
  {
    tiers: "Three-Tier (6-inch + 8-inch + 10-inch)",
    servings: "65 – 80+ Servings",
    recommendedEvent: "Weddings, grand celebrations, anniversary galas",
    description: "Showstopping architectural presence with internal structural food-grade dowels.",
  },
];

export const flavorCatalog = [
  { name: "Madagascar Vanilla Bean", notes: "Fluffy sponge infused with natural vanilla and light vanilla bean buttercream" },
  { name: "Belgian Dark Chocolate Fudge", notes: "Rich cocoa layers layered with decadent dark chocolate ganache" },
  { name: "Red Velvet & Cream Cheese", notes: "Traditional tender crumb paired with tangy whipped cream cheese frosting" },
  { name: "Salted Caramel Buttercream", notes: "Caramel sponge with sea salt drizzle and house-made caramel filling" },
  { name: "Cardamom & Pistachio (Dry / Spiced)", notes: "Fragrant aromatic sponge with finely crushed roasted pistachios" },
  { name: "Strawberry Shortcake Infusion", notes: "Vanilla sponge with fresh summer strawberry compote and whipped cream" },
];

