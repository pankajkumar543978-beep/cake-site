import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Sparkles,
  MapPin,
  Clock,
  CheckCircle2,
  CalendarHeart,
  MessageCircle,
  ChevronRight,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { businessData } from "@/data/business";
import { reviewsData } from "@/data/reviews";

export const metadata: Metadata = {
  title: "About Sia & Our Livingston Cake Studio | Cakes by Sia Calgary",
  description:
    "Meet Sia, the artisan baker behind Cakes by Sia in Livingston Hill NE, Calgary. Learn about our commitment to custom celebration cakes, attention to detail, and rush-order baking.",
  keywords: [
    "About Cakes by Sia",
    "Sia baker Calgary",
    "Livingston custom cake studio",
    "Calgary baker story",
    "rush cake baker Calgary",
  ],
  openGraph: {
    title: "About Sia & Our Livingston Cake Studio | Cakes by Sia Calgary",
    description: "Handcrafted custom celebration & wedding cakes made with love in Livingston Hill NE, Calgary.",
    url: "https://cakesbysia.example.com/about",
  },
};

export default function AboutPage() {
  const principles = [
    {
      title: "Artisanal & Fresh to Order",
      desc: "We never use frozen pre-made sponge bases. Every cake is mixed, baked, filled, and crumb-coated fresh for your event date.",
    },
    {
      title: "Short-Notice & Rush Orders",
      desc: "Celebrations sometimes come together spontaneously. We do everything possible to accommodate urgent 24–48h cake requests without sacrificing design quality.",
    },
    {
      title: "Obsession with Piping Detail",
      desc: "From delicate vintage lambeth borders and watercolor buttercream to edible gold leaf specks, every cake receives focused, patient artistry.",
    },
    {
      title: "Honest Hospitality",
      desc: "We adjust pickup windows for busy party planners, coordinate safe transport boxes, and provide direct, personalized communication.",
    },
  ];

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 bg-[#FFF9F3]">
        {/* Compact Breadcrumb Bar (No redundant upside hero) */}
        <div className="bg-[#FAF1EF] border-b border-[#EADCD2] py-3.5">
          <div className="site-container">
            <nav className="flex items-center gap-2 text-xs text-[#9B827C]">
              <Link href="/" className="hover:text-[#382824] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#382824] font-semibold">Our Story & Baker</span>
            </nav>
          </div>
        </div>

        {/* Meet Sia Section */}
        <section className="py-12 md:py-20 border-b border-[#EADCD2]">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Photo Showcase */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white photo-frame aspect-[4/5] relative shimmer-card">
                  <Image
                    src="/images/gmaps-cake-real.jpg"
                    alt="Authentic Cakes by Sia custom cake creation"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#382824]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-2xl bg-[#382824]/85 backdrop-blur-sm border border-white/10 flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#D99A9B] flex-shrink-0 shimmer-card">
                      <Image
                        src="/images/logo.png"
                        alt="Cakes by Sia Logo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-serif italic text-lg text-[#FFF9F3]">Sia</p>
                      <p className="text-xs text-[#D99A9B]">Founder, Baker & Sugarcraft Artist ({businessData.bakerTag})</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-md border border-[#EADCD2] flex items-center gap-2 text-xs font-semibold text-[#382824]">
                  <ShieldCheck className="w-4 h-4 text-[#C87D7E]" />
                  <span>Livingston Studio</span>
                </div>
              </div>

              {/* Story Narrative */}
              <div className="lg:col-span-7 space-y-5">
                <div className="space-y-2">
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#C87D7E]">
                    The Baker Behind the Whisk
                  </span>
                  <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#382824] leading-tight">
                    Custom cakes made to order right here in Livingston Hill NE.
                  </h1>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm text-[#6B5550] leading-relaxed font-normal">
                  <p>
                    Cakes by Sia is a dedicated custom home bakery studio based in Livingston Hill NE, Calgary.
                    Every single cake, cupcake box, and treat is baked fresh to order using quality butter, genuine extracts,
                    and premium chocolates — never frozen supermarket sponges.
                  </p>
                  <p>
                    Whether it&apos;s a short-notice birthday cake needed in 24 hours, a vintage Lambeth piping masterpiece,
                    a dreamy milestone celebration, or Indian fusion sponge favorites like Cardamom Pistachio, Sia works directly
                    with each family to match their theme, color scheme, and guest count.
                  </p>
                  <p>
                    With flexible daily studio pickup windows (7 AM – 8 PM) and Calgary delivery coordination, your cake arrives
                    intact, on time, and tasting just as memorable as it looks.
                  </p>
                </div>

                <div className="pt-1 flex flex-wrap gap-4 text-xs font-semibold text-[#382824]">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF1EF] border border-[#EADCD2] whitespace-nowrap">
                    <Star className="w-3.5 h-3.5 text-[#C6A36A] fill-current shrink-0" />
                    <span className="whitespace-nowrap">4.9★ Google Rating ({businessData.googleMaps.reviewCount} Reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Baking Principles */}
        <section className="py-12 md:py-16 bg-[#FAF1EF] border-b border-[#EADCD2]">
          <div className="site-container">
            <div className="max-w-xl mx-auto text-center space-y-2 mb-10">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C87D7E]">
                Our Commitments
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#382824]">
                The Principles We Bake By
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {principles.map((p, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-3xl border border-[#EADCD2] shadow-sm hover-lift space-y-2.5"
                >
                  <div className="w-9 h-9 rounded-2xl bg-[#FAF1EF] flex items-center justify-center text-[#C87D7E]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#382824]">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#6B5550] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Words Highlight */}
        <section className="py-12 md:py-16 border-b border-[#EADCD2]">
          <div className="site-container max-w-3xl text-center space-y-6">
            <div className="flex justify-center text-[#C6A36A]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <blockquote className="font-serif text-xl sm:text-2xl text-[#382824] leading-relaxed italic">
              &ldquo;She is truly a perfectionist and prepared on a short notice. It was delicious.
              At first glance, it was jaw dropping because we thought there might be difference in the presentation but nope. AMAZING!! Loved it!&rdquo;
            </blockquote>
            <p className="text-xs font-semibold text-[#6B5550]">
              — Sonia Sharma, Calgary Client (Google Review)
            </p>
          </div>
        </section>

        {/* CTA Bar */}
        <section className="py-12 bg-[#382824] text-[#FFF9F3] text-center">
          <div className="site-container max-w-md space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#FFF9F3]">
              Have an Idea in Mind?
            </h2>
            <p className="text-xs sm:text-sm text-[#FFF9F3]/80">
              Message Sia directly with your reference photos, date, and preferred cake size.
            </p>
            <div className="pt-1 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FFF9F3] text-[#382824] hover:bg-[#FAF1EF] text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <CalendarHeart className="w-4 h-4 text-[#C87D7E]" />
                <span>Request Custom Quote</span>
              </Link>
              <a
                href={businessData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white hover:bg-[#20ba59] text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <MessageCircle className="w-4 h-4" />
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
