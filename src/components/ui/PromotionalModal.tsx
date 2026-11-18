"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Sparkles, MessageCircle, CalendarHeart, Clock, Star, MapPin } from "lucide-react";
import { businessData } from "@/data/business";

export const PromotionalModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    sessionStorage.setItem("cakes_by_sia_promo_dismissed", "true");
    sessionStorage.setItem("plum_cake_promo_dismissed", "true");
  }, []);

  useEffect(() => {
    // Check if dismissed previously in session
    const dismissed =
      sessionStorage.getItem("cakes_by_sia_promo_dismissed") ||
      sessionStorage.getItem("plum_cake_promo_dismissed");
    if (dismissed) return;

    // Trigger after 2.5 seconds for pleasant entrance
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Keyboard accessibility: ESC closes modal
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const whatsappInquiryUrl = `https://wa.me/${
    process.env.NEXT_PROD_WHATSAPP_NUMBER ||
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
    "13683997686"
  }?text=${encodeURIComponent(
    "Hi Sia! I'm planning a special celebration in Calgary and would love to check availability and get a quote for a custom cake."
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Planning a Special Celebration with Cakes by Sia"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#382824]/60 backdrop-blur-sm animate-fade-in"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FFF9F3] rounded-3xl overflow-hidden border border-[#EADCD2] shadow-2xl animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close celebration consultation modal"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-white text-[#382824] shadow-md transition-all hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#C87D7E]"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Authentic Handcrafted Cake Photo Showcase */}
          <div className="relative aspect-[4/3] sm:aspect-auto sm:min-h-[380px] bg-[#FAF1EF] overflow-hidden">
            <Image
              src="/images/gmaps/gmaps-photo-8.jpg"
              alt="Two-Tier Fresh Rose & Handcrafted Pearl Cake by Sia Calgary"
              fill
              sizes="(max-width: 640px) 100vw, 360px"
              className="object-cover"
              priority
            />
            {/* Top Badge: Verified 4.9 Rating */}
            <div className="absolute top-3 left-3 bg-[#382824]/85 backdrop-blur-md text-[#FFF9F3] text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
              <Star className="w-3 h-3 text-[#C6A36A] fill-[#C6A36A]" />
              <span>4.9★ Calgary Bakery</span>
            </div>

            {/* Bottom Caption: Studio Location */}
            <div className="absolute bottom-3 left-3 right-3 bg-[#FFF9F3]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#EADCD2]/80 flex items-center gap-1.5 text-[10px] text-[#382824] font-medium shadow-xs">
              <MapPin className="w-3 h-3 text-[#C87D7E] shrink-0" />
              <span className="truncate">Handcrafted in Livingston Hill NE, Calgary</span>
            </div>
          </div>

          {/* Business Content & Quick Action */}
          <div className="p-6 sm:p-7 flex flex-col justify-between space-y-4">
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#C87D7E] bg-[#FAF1EF] px-2.5 py-0.5 rounded-full border border-[#C87D7E]/20">
                <Sparkles className="w-3 h-3 text-[#C87D7E]" />
                <span>Custom Cake Studio</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-[26px] font-normal text-[#382824] leading-snug">
                Planning a Special Celebration?
              </h3>

              <p className="text-xs text-[#6B5550] leading-relaxed">
                From whimsical birthdays and milestone anniversaries to multi-tier wedding centerpieces, Sia bakes fresh to order with patient sugarcraft and pure butter.
              </p>

              {/* Business Value Highlights */}
              <div className="pt-1 space-y-1.5 text-[11px] text-[#6B5550]">
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C87D7E] mt-1 shrink-0" />
                  <span><strong>100% Custom Designs:</strong> Tailored to your theme & color palette</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C87D7E] mt-1 shrink-0" />
                  <span><strong>Rush Orders:</strong> Urgent 24–48h requests accommodated</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C87D7E] mt-1 shrink-0" />
                  <span><strong>Convenient Pickup:</strong> Livingston Hill NE studio or Calgary delivery</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-2">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm hover:shadow active:scale-98"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Sia on WhatsApp</span>
              </a>

              <Link
                href="/quote"
                onClick={handleClose}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-white hover:bg-[#FAF1EF] text-[#382824] border border-[#EADCD2] hover:border-[#C87D7E]/50 text-xs font-semibold uppercase tracking-wider transition-colors active:scale-98"
              >
                <CalendarHeart className="w-3.5 h-3.5 text-[#C87D7E]" />
                <span>Request Custom Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
