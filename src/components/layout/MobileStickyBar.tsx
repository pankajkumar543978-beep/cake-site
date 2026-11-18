"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, CalendarHeart, UtensilsCrossed } from "lucide-react";
import { businessData } from "@/data/business";

export const MobileStickyBar: React.FC = () => {
  return (
    <aside
      aria-label="Mobile quick actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFF9F3]/95 backdrop-blur-md border-t border-[#EADCD2] p-2 shadow-[0_-4px_16px_rgba(56,40,36,0.08)]"
    >
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
        {/* Direct Phone Call */}
        <a
          href={`tel:${businessData.phone}`}
          className="flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl bg-white border border-[#EADCD2] text-[#382824] hover:bg-[#FAF1EF] transition-colors"
          aria-label="Call Cakes by Sia"
        >
          <Phone className="w-4 h-4 text-[#C87D7E]" />
          <span className="text-[10px] font-semibold">Call</span>
        </a>

        {/* WhatsApp Chat */}
        <a
          href={businessData.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#128C7E] hover:bg-[#25D366]/20 transition-colors"
          aria-label="Message on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366]" />
          <span className="text-[10px] font-semibold">WhatsApp</span>
        </a>

        {/* Complete Menu Page */}
        <Link
          href="/menu"
          className="flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl bg-white border border-[#EADCD2] text-[#382824] hover:bg-[#FAF1EF] transition-colors"
          aria-label="View Cake Menu"
        >
          <UtensilsCrossed className="w-4 h-4 text-[#C6A36A]" />
          <span className="text-[10px] font-semibold">Menu</span>
        </Link>

        {/* Request Custom Cake */}
        <Link
          href="/quote"
          className="flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl bg-[#382824] text-[#FFF9F3] hover:bg-[#523A34] transition-colors shadow-sm"
          aria-label="Request Custom Cake"
        >
          <CalendarHeart className="w-4 h-4 text-[#D99A9B]" />
          <span className="text-[10px] font-semibold">Quote</span>
        </Link>
      </div>
    </aside>
  );
};
