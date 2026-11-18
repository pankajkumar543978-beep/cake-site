export interface BusinessInfo {
  name: string;
  tagline: string;
  baker: string;
  bakerTag: string;
  phone: string;
  phoneFormatted: string;
  whatsappUrl: string;
  instagram: {
    handle: string;
    url: string;
    followers: string;
    postsCount: string;
  };
  googleMaps: {
    url: string;
    directionsUrl: string;
    plusCode: string;
    rating: number;
    reviewCount: number;
  };
  address: {
    district: string;
    street: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
    fullFormatted: string;
  };
  hours: {
    days: string;
    time: string;
    isOpen: boolean;
  }[];
  announcements: string[];
  features: string[];
  unverifiedNotes: string[];
}

export const businessData: BusinessInfo = {
  name:
    process.env.NEXT_PROD_BUSINESS_NAME ||
    process.env.NEXT_PUBLIC_BUSINESS_NAME ||
    "Cakes by Sia",
  tagline: "Custom Cakes & Sweet Treats Handcrafted with Love in Calgary",
  baker: "Sia",
  bakerTag: "@sia2910",
  phone:
    process.env.NEXT_PROD_BUSINESS_PHONE ||
    process.env.NEXT_PUBLIC_BUSINESS_PHONE ||
    "+13683997686",
  phoneFormatted:
    process.env.NEXT_PROD_BUSINESS_PHONE_FORMATTED ||
    process.env.NEXT_PUBLIC_BUSINESS_PHONE_FORMATTED ||
    "+1 (368) 399-7686",
  whatsappUrl:
    process.env.NEXT_PROD_WHATSAPP_URL ||
    process.env.NEXT_PUBLIC_WHATSAPP_URL ||
    "https://wa.me/13683997686?text=Hi%20Sia,%20I%20would%20like%20to%20inquire%20about%20a%20custom%20cake!",
  instagram: {
    handle:
      process.env.NEXT_PROD_INSTAGRAM_HANDLE ||
      process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE ||
      "@cakesbysia47",
    url:
      process.env.NEXT_PROD_INSTAGRAM_URL ||
      process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
      "https://www.instagram.com/cakesbysia47/",
    followers: "709",
    postsCount: "179",
  },
  googleMaps: {
    url:
      process.env.NEXT_PROD_GOOGLE_MAPS_URL ||
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ||
      "https://maps.app.goo.gl/NFsJFUsd3qfGAYJd7",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=51.1865651,-114.0556996",
    plusCode: "5WPV+JP Calgary, Alberta, Canada",
    rating: 4.9,
    reviewCount: 35,
  },
  address: {
    district: "Livingston Hill NE",
    street: "Livingston Hill NE",
    city: "Calgary",
    province: "Alberta",
    postalCode: "T3P 1P1",
    country: "Canada",
    fullFormatted: "Livingston Hill NE, Calgary, AB T3P 1P1, Canada",
  },
  hours: [
    { days: "Monday – Sunday", time: "7:00 AM – 8:00 PM", isOpen: true },
  ],
  announcements: [
    "🎂 Livingston NE Studio Open Daily 7 AM – 8 PM",
    "⚡ Short-Notice & Last-Minute Orders Accepted (Subject to Schedule)",
    "📍 Handcrafted in Calgary, AB · Pick-up & Delivery Inquiries Welcome",
  ],
  features: [
    "100% Bespoke Sugar & Buttercream Art",
    "Last-Minute & Rush Order Capacity",
    "Punctual Delivery & Flexible Studio Pickup",
    "Signature Cakes, Cupcakes, Brownies & Dry Cakes",
    "Rated 4.9/5 by 35+ Calgary Celebrants",
  ],
  unverifiedNotes: [
    "Base prices per tier to be verified with Sia before final commercial launch",
    "Flavor selection reflects standard client favorites; custom requests available on inquiry",
    "Delivery radius covers Calgary quadrants (NW, NE, SE, SW) upon quote confirmation",
  ],
};

