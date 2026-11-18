import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Info,
  CalendarHeart,
  MessageCircle,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { MenuCatalog } from "@/components/menu/MenuCatalog";
import { cakeCategories, servingGuides, flavorCatalog } from "@/data/cakes";
import { businessData } from "@/data/business";

export const metadata: Metadata = {
  title: "Cake Menu & Flavor Guide | Cakes by Sia Calgary",
  description:
    "Explore our custom cake menu, flavors, and serving guides. Handcrafted celebration cakes, wedding tiers, cupcakes, and brownies in Livingston Hill NE, Calgary.",
  keywords: [
    "Cakes by Sia menu",
    "Calgary custom cake flavors",
    "birthday cake sizes Calgary",
    "wedding cake pricing guide Calgary",
    "cupcake flavors Calgary",
    "Livingston bakery menu",
  ],
  openGraph: {
    title: "Cake Menu & Flavor Guide | Cakes by Sia Calgary",
    description: "Browse custom celebration cakes, tiered wedding designs, artisan cupcakes & flavors.",
    url: "https://cakesbysia.example.com/menu",
  },
};

export default function MenuPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 bg-[#FFF9F3]">
        {/* Streamlined Menu Catalog (Unified header, search & reference-style filter bar) */}
        <section className="pt-4 pb-12 sm:pt-6 sm:pb-16 border-b border-[#EADCD2]">
          <div className="site-container">
            <MenuCatalog initialCategories={cakeCategories} />
          </div>
        </section>

        {/* Compact Flavor Catalog Section */}
        <section className="py-12 sm:py-16 bg-[#FAF1EF] border-b border-[#EADCD2]">
          <div className="site-container">
            <div className="max-w-xl mx-auto text-center space-y-2 mb-8">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C87D7E]">
                Taste Profiles
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#382824]">
                Signature Flavors & Fillings
              </h2>
              <p className="text-xs sm:text-sm text-[#6B5550]">
                Baked fresh with real butter, pure extracts, and premium chocolate.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {flavorCatalog.map((flavor) => (
                <div
                  key={flavor.name}
                  className="bg-white rounded-2xl p-5 border border-[#EADCD2] shadow-sm space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-base font-semibold text-[#382824]">
                      {flavor.name}
                    </h3>
                    <Sparkles className="w-3.5 h-3.5 text-[#C87D7E]" />
                  </div>
                  <p className="text-xs text-[#6B5550] leading-relaxed">
                    {flavor.notes}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center text-xs text-[#9B827C] max-w-lg mx-auto">
              <span>
                * Eggless options and nut-free accommodations available upon request. Please note we operate in a kitchen that handles nuts and gluten.
              </span>
            </div>
          </div>
        </section>

        {/* Compact Dimension & Serving Guide */}
        <section id="dimension-guide" className="py-12 sm:py-16 border-b border-[#EADCD2]">
          <div className="site-container">
            <div className="max-w-xl mx-auto text-center space-y-2 mb-8">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C87D7E]">
                Portion Planning
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#382824]">
                Cake Dimension & Serving Guide
              </h2>
              <p className="text-xs sm:text-sm text-[#6B5550]">
                Portion estimates based on generous dessert servings.
              </p>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-[#EADCD2] bg-white shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#FAF1EF] text-[#382824] border-b border-[#EADCD2]">
                    <th className="py-3.5 px-4 sm:px-6 font-semibold">Tier Size</th>
                    <th className="py-3.5 px-4 sm:px-6 font-semibold">Servings</th>
                    <th className="py-3.5 px-4 sm:px-6 font-semibold hidden md:table-cell">Recommended Event</th>
                    <th className="py-3.5 px-4 sm:px-6 font-semibold">Design Detail</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EADCD2]/70 text-[#6B5550]">
                  {servingGuides.map((guide, idx) => (
                    <tr key={idx} className="hover:bg-[#FAF1EF]/50 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-medium text-[#382824]">{guide.tiers}</td>
                      <td className="py-3 px-4 sm:px-6 font-semibold text-[#C87D7E]">{guide.servings}</td>
                      <td className="py-3 px-4 sm:px-6 hidden md:table-cell">{guide.recommendedEvent}</td>
                      <td className="py-3 px-4 sm:px-6 text-xs">{guide.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-[#9B827C] px-2">
              <span className="inline-flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-[#C87D7E]" />
                All tiers are 4–5 inches tall, featuring 3 generous sponge layers and 2 filling layers.
              </span>
              <Link href="/quote" className="text-[#C87D7E] font-semibold hover:underline">
                Ask About Custom Tier Heights →
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom Menu CTA */}
        <section className="py-12 md:py-16 bg-[#382824] text-[#FFF9F3] text-center">
          <div className="site-container max-w-2xl space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal">
              Ready to Order Your Dream Cake?
            </h2>
            <p className="text-xs sm:text-sm text-[#FFF9F3]/80 leading-relaxed">
              Every celebration cake is custom-quoted based on your chosen size, sponge flavor, and sugarcraft complexity.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#C87D7E] text-white hover:bg-[#A96162] text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
              >
                <CalendarHeart className="w-4 h-4 text-white" />
                <span>Request Custom Quote</span>
              </Link>
              <a
                href={businessData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#25D366] text-white hover:bg-[#20ba59] text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </>
  );
}
