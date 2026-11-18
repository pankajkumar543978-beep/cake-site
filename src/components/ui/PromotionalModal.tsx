"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Sparkles, MessageCircle, CalendarHeart } from "lucide-react";
import { businessData } from "@/data/business";

export const PromotionalModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if dismissed previously in session
    const dismissed = sessionStorage.getItem("plum_cake_promo_dismissed");
    if (dismissed) return;

    // Trigger after 2 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("plum_cake_promo_dismissed", "true");
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Festive Announcement: Exotic Plum Cake"
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
          aria-label="Close festive announcement"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-white text-[#382824] shadow-md transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Banner Photo Container */}
          <div className="relative aspect-[4/3] sm:aspect-auto sm:min-h-[340px] bg-[#FAF1EF]">
            <Image
              src="/images/exotic-plum-cake-banner.jpg"
              alt="Cakes by Sia - Exotic Plum Cake Festive Pre-Order"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-3 left-3 bg-[#382824]/80 backdrop-blur-sm text-[#FFF9F3] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#C6A36A]" />
              <span>Seasonal Special</span>
            </div>
          </div>

          {/* Text & Action */}
          <div className="p-6 sm:p-7 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C87D7E]">
                Limited Holiday Reserve
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#382824] leading-tight">
                The wait is officially over!
              </h3>
              <p className="text-xs text-[#6B5550] leading-relaxed italic">
                &ldquo;Exotic dry fruits and raisins for our legendary plum cakes have been maturing, soaking up all that rich festive goodness, and we are now ready for reservations.&rdquo;
              </p>
              <div className="pt-2 text-[11px] text-[#9B827C]">
                Hand-baked in Livingston Hill NE · Pre-orders now open for Calgary celebrations.
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={`https://wa.me/13683997686?text=${encodeURIComponent(
                  "Hi Sia! I saw the Exotic Plum Cake announcement and would like to pre-order / reserve one!"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#25D366] text-white hover:bg-[#20ba59] text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pre-Order via WhatsApp</span>
              </a>

              <Link
                href="/quote"
                onClick={handleClose}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-white hover:bg-[#FAF1EF] text-[#382824] border border-[#EADCD2] text-xs font-semibold uppercase tracking-wider transition-colors"
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
