"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, CalendarHeart, Clock, Users } from "lucide-react";
import { GalleryCake } from "@/data/gallery";

interface LightboxProps {
  cake: GalleryCake | null;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ cake, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (cake) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [cake, onClose]);

  if (!cake) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={cake.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#382824]/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col md:flex-row border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close image viewer"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-[#382824] shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#C87D7E]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Cake Image Left Column */}
        <div className="relative w-full md:w-3/5 h-64 sm:h-80 md:h-auto min-h-[300px] md:min-h-[460px] bg-[#FAF1EF]">
          <Image
            src={cake.image}
            alt={cake.title}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover"
          />
        </div>

        {/* Cake Details Right Column */}
        <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#FFF9F3] overflow-y-auto">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F7E8E7] text-[#C87D7E]">
              {cake.categoryLabel}
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#382824] leading-snug">
              {cake.title}
            </h3>

            <p className="text-sm text-[#6B5550] leading-relaxed">
              {cake.description}
            </p>

            <div className="pt-2 space-y-2 border-t border-[#EADCD2] text-xs text-[#6B5550]">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#C87D7E]" />
                <span>Servings: <strong className="text-[#382824]">{cake.servings}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C87D7E]" />
                <span>Typical Lead Time: <strong className="text-[#382824]">{cake.leadTime}</strong></span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {cake.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[11px] bg-white border border-[#EADCD2] text-[#6B5550]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-[#EADCD2]">
            <a
              href="/quote"
              onClick={onClose}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#382824] text-[#FFF9F3] hover:bg-[#523A34] text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
            >
              <CalendarHeart className="w-4 h-4 text-[#D99A9B]" />
              <span>Request Similar Design</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

