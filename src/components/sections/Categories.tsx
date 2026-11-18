"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, ChevronLeft, ChevronRight, UtensilsCrossed, X, Users, Sparkles } from "lucide-react";
import { cakeCategories, CakeCategory } from "@/data/cakes";

interface CategoriesProps {
  onSelectCategory?: (categoryId: string) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategoryModal, setActiveCategoryModal] = useState<CakeCategory | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 300;
      const scrollAmount = direction === "left" ? -(cardWidth + 20) : (cardWidth + 20);
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveCategoryModal(null);
    };
    if (activeCategoryModal) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCategoryModal]);

  // Auto-carousel on mobile and tablet (only when container has horizontal overflow)
  useEffect(() => {
    if (isPaused || activeCategoryModal) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (container.scrollWidth > container.clientWidth) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        const cardWidth = container.firstElementChild?.clientWidth || 300;
        
        if (container.scrollLeft >= maxScroll - 20) {
          container.scrollTo({ left: 0, behavior: "smooth" });
          setCurrentIndex(0);
        } else {
          container.scrollBy({ left: cardWidth + 20, behavior: "smooth" });
          setCurrentIndex((prev) => (prev + 1) % cakeCategories.length);
        }
      }
    }, 3600);

    return () => clearInterval(interval);
  }, [isPaused, activeCategoryModal]);

  return (
    <section id="categories" className="py-14 md:py-20 bg-[#FAF1EF] border-b border-[#EADCD2]">
      <div className="site-container">
        {/* Section Header with Carousel Navigation Controls for Mobile/Tablet */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="space-y-1.5 max-w-xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C87D7E]">
              Artisanal Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#382824]">
              Signature Cake Categories
            </h2>
            <p className="text-xs sm:text-sm text-[#6B5550]">
              Explore our range of freshly baked creations in Livingston Hill NE, Calgary.
            </p>
          </div>

          {/* Arrow Navigation Controls (Visible on Mobile & Tablet Carousel) */}
          <div className="flex lg:hidden items-center gap-2 self-start sm:self-auto">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous category"
              className="p-2.5 rounded-full border border-[#EADCD2] bg-white hover:bg-[#FAF1EF] text-[#382824] transition-colors shadow-sm focus:outline-none focus:ring-1 focus:ring-[#C87D7E]"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next category"
              className="p-2.5 rounded-full border border-[#EADCD2] bg-white hover:bg-[#FAF1EF] text-[#382824] transition-colors shadow-sm focus:outline-none focus:ring-1 focus:ring-[#C87D7E]"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Categories: Clean Compact Cards (Detail opened in modal on tap) */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex lg:grid lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-none pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {cakeCategories.map((cat) => (
            <article
              key={cat.id}
              onClick={() => setActiveCategoryModal(cat)}
              className="w-[80vw] sm:w-[48vw] md:w-[42vw] lg:w-auto flex-shrink-0 snap-center group bg-white rounded-3xl overflow-hidden border border-[#EADCD2] shadow-sm hover-lift flex flex-col justify-between cursor-pointer transition-all hover:border-[#C87D7E]/50"
            >
              <div>
                {/* Category Image with Servings Badge */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F7E8E7] shimmer-card photo-frame">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3.5 right-3.5 bg-white/92 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-[#382824] shadow-sm">
                    {cat.recommendedServings}
                  </div>
                </div>

                {/* Streamlined, Compact Content Part */}
                <div className="p-4 sm:p-5 space-y-1.5">
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-[#382824] group-hover:text-[#C87D7E] transition-colors leading-snug">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#6B5550] leading-relaxed line-clamp-1">
                    {cat.shortDesc}
                  </p>
                </div>
              </div>

              {/* Clean Single Action Button */}
              <div className="p-4 sm:p-5 pt-0">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveCategoryModal(cat);
                  }}
                  className="w-full inline-flex items-center justify-between py-2 px-3.5 rounded-xl bg-[#FAF1EF] group-hover:bg-[#F7E8E7] text-xs font-semibold text-[#382824] transition-colors"
                >
                  <span>View Details & Options</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C87D7E] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Carousel Swipe Hint */}
        <div className="lg:hidden flex items-center justify-center gap-1.5 pt-1 text-[11px] text-[#9B827C]">
          <span>👈 Swipe to explore categories 👉</span>
        </div>

        {/* Category Detailed Information Modal */}
        {activeCategoryModal && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="category-modal-title"
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setActiveCategoryModal(null)}
          >
            <div
              className="bg-[#FFF9F3] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#EADCD2] max-h-[92vh] flex flex-col animate-scale-up"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F7E8E7] shrink-0">
                <Image
                  src={activeCategoryModal.image}
                  alt={activeCategoryModal.name}
                  fill
                  sizes="500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <button
                  onClick={() => setActiveCategoryModal(null)}
                  className="absolute top-3 right-3 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors z-10"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <span className="text-[10px] tracking-wider uppercase font-semibold text-[#D99A9B]">
                    Signature Category Detail
                  </span>
                  <h3 id="category-modal-title" className="font-serif text-2xl sm:text-3xl font-normal leading-tight text-white drop-shadow">
                    {activeCategoryModal.name}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
                {/* Full Narrative */}
                <p className="text-xs sm:text-sm text-[#6B5550] leading-relaxed">
                  {activeCategoryModal.fullDesc}
                </p>

                {/* Key Specifications Grid */}
                <div className="grid grid-cols-2 gap-2.5 p-3 rounded-2xl bg-white border border-[#EADCD2]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF1EF] flex items-center justify-center text-[#C87D7E] shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-[#9B827C]">Servings</p>
                      <p className="text-xs font-semibold text-[#382824]">{activeCategoryModal.recommendedServings}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF1EF] flex items-center justify-center text-[#C87D7E] shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-[#9B827C]">Notice Required</p>
                      <p className="text-xs font-semibold text-[#382824]">{activeCategoryModal.leadTime}</p>
                    </div>
                  </div>
                </div>

                {/* Popular Themes & Styles */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#9B827C]">
                    <Sparkles className="w-3.5 h-3.5 text-[#C6A36A]" />
                    <span>Popular Themes & Styling Options</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeCategoryModal.popularThemes.map((theme) => (
                      <span
                        key={theme}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white border border-[#EADCD2] text-[#382824] shadow-xs"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="pt-3 border-t border-[#EADCD2]/70 flex flex-col sm:flex-row gap-2.5">
                  <Link
                    href={`/quote?category=${encodeURIComponent(activeCategoryModal.name)}`}
                    onClick={() => setActiveCategoryModal(null)}
                    className="flex-1 py-3 px-4 rounded-xl bg-[#382824] text-white text-xs font-semibold uppercase tracking-wider text-center hover:bg-[#523A34] transition-colors shadow-sm"
                  >
                    Request Custom Quote
                  </Link>
                  <Link
                    href="/menu"
                    onClick={() => setActiveCategoryModal(null)}
                    className="py-3 px-4 rounded-xl bg-white border border-[#EADCD2] text-[#382824] text-xs font-semibold uppercase tracking-wider text-center hover:bg-[#FAF1EF] transition-colors"
                  >
                    View Menu & Flavors
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Full Menu Link Banner */}
        <div className="mt-10 sm:mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-[#EADCD2] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#382824]">
              Looking for Complete Flavors & Portion Details?
            </h3>
            <p className="text-xs sm:text-sm text-[#6B5550]">
              Browse our sponge flavors, fillings, dimension guide, and tier servings on our dedicated menu.
            </p>
          </div>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#382824] text-[#FFF9F3] hover:bg-[#523A34] text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm flex-shrink-0"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#D99A9B]" />
            <span>Open Complete Cake Menu</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D99A9B]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
