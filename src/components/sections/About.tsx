import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Sparkles, ArrowRight, Star, Clock } from "lucide-react";
import { businessData } from "@/data/business";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-8 md:py-20 bg-[#FFF9F3] border-b border-[#EADCD2]">
      <div className="site-container">
        {/* MOBILE ONLY: Ultra-Compact Story Card (Zero Vertical Bloat on Phone Screen) */}
        <div className="lg:hidden bg-white rounded-3xl p-5 border border-[#EADCD2] shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold tracking-widest uppercase text-[#C87D7E]">
              Our Story & Philosophy
            </span>
            <span className="text-[10px] bg-[#FAF1EF] border border-[#EADCD2] px-2 py-0.5 rounded-full font-semibold text-[#382824]">
              4.9★ Google
            </span>
          </div>

          <h3 className="font-serif text-lg font-normal text-[#382824] leading-snug">
            Artisanal baking tailored to your memorable celebrations.
          </h3>

          <p className="text-xs text-[#6B5550] leading-relaxed line-clamp-2">
            Every celebration cake is custom-crafted to order in Livingston Hill NE, Calgary with pure butter and patient sugarcraft.
          </p>

          <div className="pt-2 flex items-center justify-between border-t border-[#EADCD2]/70 text-xs">
            <span className="text-[11px] text-[#9B827C]">Daily Pickup · Rush Orders</span>
            <Link
              href="/about"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#C87D7E] hover:underline"
            >
              <span>Read Full Story</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* DESKTOP VIEW: Full Rich 2-Column Showcase */}
        <div className="hidden lg:grid grid-cols-12 gap-14 items-center">
          {/* Left Column: Authentic Dual Image Showcase */}
          <div className="col-span-5 relative">
            <div className="relative max-w-none">
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-white photo-frame aspect-[4/5] relative shimmer-card">
                <Image
                  src="/images/gmaps-cake-real.jpg"
                  alt="Authentic Cakes by Sia custom cake creation"
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#382824]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white p-3.5 rounded-2xl bg-[#382824]/85 backdrop-blur-sm border border-white/10 flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#D99A9B] flex-shrink-0 shimmer-card">
                    <Image
                      src="/images/logo.png"
                      alt="Cakes by Sia Logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-serif italic text-base text-[#FFF9F3]">Sia</p>
                    <p className="text-[11px] text-[#D99A9B]">Founder & Artisan Cake Artist</p>
                  </div>
                </div>
              </div>

              {/* Artisanal Studio Badge */}
              <div className="absolute -top-3 -right-3 bg-white px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#382824] shadow-md border border-[#EADCD2] flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[#C87D7E] fill-current" />
                <span>Livingston NE Studio</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Rich Story */}
          <div className="col-span-7 space-y-5">
            <div className="space-y-1.5">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C87D7E]">
                The Story & Philosophy
              </span>
              <h2 className="font-serif text-3xl lg:text-4xl font-normal text-[#382824] leading-tight">
                Artisanal baking tailored to your memorable moments.
              </h2>
            </div>

            <p className="text-sm text-[#6B5550] leading-relaxed">
              At <strong>Cakes by Sia</strong>, every cake is custom-crafted to order in Livingston Hill NE, Calgary.
              From whimsical children&apos;s birthdays and intricate vintage lambeth piping to tiered wedding centerpieces,
              we bake fresh with pure butter, rich extracts, and patient sugarcraft.
            </p>

            {/* Highlight Badges */}
            <div className="grid grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-2xl bg-[#FAF1EF] border border-[#EADCD2] space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#382824]">
                  <Star className="w-3.5 h-3.5 text-[#C6A36A] fill-current" />
                  <span>4.9★ Google</span>
                </div>
                <p className="text-[11px] text-[#6B5550]">35 Verified client reviews across Calgary</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FAF1EF] border border-[#EADCD2] space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#382824]">
                  <Sparkles className="w-3.5 h-3.5 text-[#C87D7E]" />
                  <span>Rush Orders</span>
                </div>
                <p className="text-[11px] text-[#6B5550]">Urgent 24–48h requests accommodated</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FAF1EF] border border-[#EADCD2] space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#382824]">
                  <Clock className="w-3.5 h-3.5 text-[#C6A36A]" />
                  <span>Daily Pickup</span>
                </div>
                <p className="text-[11px] text-[#6B5550]">Open 7 AM – 8 PM for convenient pickup</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#382824] text-[#FFF9F3] text-xs font-semibold uppercase tracking-wider hover:bg-[#523A34] transition-colors"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D99A9B]" />
              </Link>

              <Link
                href="/quote"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C87D7E] hover:underline px-2 py-1"
              >
                <span>Request Custom Quote →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
