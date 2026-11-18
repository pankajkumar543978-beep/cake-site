import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { businessData } from "@/data/business";
import { ScrollToTop } from "@/components/common/ScrollToTop";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FFF9F3",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Cakes by Sia | Custom Cake Studio in Calgary, AB",
  description:
    "Artisanal custom cakes, birthday cakes, tiered wedding cakes, and sweet treats handcrafted in Livingston Hill NE, Calgary. Rush orders accepted. 4.9★ rating.",
  keywords: [
    "Cakes by Sia",
    "Calgary custom cakes",
    "Livingston Calgary bakery",
    "birthday cakes Calgary",
    "wedding cakes Calgary",
    "baby shower cake Calgary",
    "last minute cakes Calgary",
    "artisan cupcakes Calgary",
  ],
  authors: [{ name: "Cakes by Sia", url: "https://www.instagram.com/cakesbysia47/" }],
  creator: "Cakes by Sia",
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/images/logo.png" },
    ],
  },
  openGraph: {
    title: "Cakes by Sia | Custom Cake Studio in Calgary, AB",
    description:
      "Every celebration deserves something sweet. Handcrafted custom cakes & celebration treats in Livingston Hill NE, Calgary.",
    url: "https://cakesbysia.example.com",
    siteName: "Cakes by Sia",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Cakes by Sia Custom Celebration Cake",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cakes by Sia | Custom Cake Studio in Calgary",
    description: "Custom celebration & wedding cakes made with love in Calgary, AB.",
    images: ["https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1200&auto=format&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: businessData.name,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1200&auto=format&fit=crop",
    telephone: businessData.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessData.address.street,
      addressLocality: businessData.address.city,
      addressRegion: businessData.address.province,
      postalCode: businessData.address.postalCode,
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.1865651,
      longitude: -114.0556996,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:00",
        closes: "20:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "35",
      bestRating: "5",
      worstRating: "1",
    },
    priceRange: "$$",
    servesCuisine: "Custom Cakes, Cupcakes, Brownies, Bakery",
    sameAs: [businessData.instagram.url, businessData.googleMaps.url],
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FFF9F3] text-[#382824] selection:bg-[#F7E8E7] selection:text-[#382824]">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
