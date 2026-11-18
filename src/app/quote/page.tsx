import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { EnquiryForm } from "@/components/sections/EnquiryForm";

export const metadata: Metadata = {
  title: "Request a Custom Cake Quote | Cakes by Sia Calgary",
  description:
    "Get a custom cake quote from Cakes by Sia. Tell us about your celebration, guest count, and design preferences. We respond directly with pricing and availability.",
  keywords: [
    "custom cake quote Calgary",
    "Cakes by Sia order",
    "cake pricing Calgary",
    "wedding cake quote",
    "birthday cake order Calgary",
  ],
  openGraph: {
    title: "Request a Custom Cake Quote | Cakes by Sia Calgary",
    description:
      "Tell us about your celebration and get a custom cake quote from Cakes by Sia in Livingston Hill NE, Calgary.",
    url: "https://cakesbysia.example.com/quote",
  },
};

export default function QuotePage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 bg-[#FFF9F3]">
        {/* Compact Breadcrumb */}
        <div className="bg-[#FAF1EF] border-b border-[#EADCD2] py-4">
          <div className="site-container">
            <nav className="flex items-center gap-2 text-xs text-[#9B827C]">
              <Link href="/" className="hover:text-[#382824] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#382824] font-semibold">Custom Quote</span>
            </nav>
          </div>
        </div>

        {/* EnquiryForm component (already has its own section wrapper) */}
        <EnquiryForm />
      </main>

      <Footer />
      <MobileStickyBar />
    </>
  );
}
