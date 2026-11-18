"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Sparkles, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryCakes, GalleryCake } from "@/data/gallery";
import { Lightbox } from "@/components/ui/Lightbox";

export const FeaturedGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedCake, setSelectedCake] = useState<GalleryCake | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filterTabs = [
    { id: "all", label: "All Creations" },
    { id: "birthday", label: "Birthday Cakes" },
    { id: "wedding", label: "Wedding Cakes" },
    { id: "baby-shower", label: "Baby Shower" },
    { id: "cupcakes", label: "Cupcakes" },
    { id: "brownies-dry", label: "Brownies & Dry Cakes" },
  ];

  const filteredCakes =
    activeCategory === "all"
      ? galleryCakes
      : galleryCakes.filter((cake) => cake.category === activeCategory);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Auto-carousel on mobile/tablet (only when container has horizontal overflow)
  useEffect(() => {
    if (isPaused) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (container.scrollWidth > container.clientWidth) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        const scrollStep = 320;
        if (container.scrollLeft >= maxScroll - 20) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollStep, behavior: "smooth" });
        }
      }
    }, 3800);

    return () => clearInterval(interval);
  }, [isPaused, activeCategory]);

  return (
    <section id="gallery" className="py-14 md:py-20 bg-[#FFF9F3] border-b border-[#EADCD2]">
      <div className="site-container">
        {/* Section Header with Carousel Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="space-y-1.5 max-w-xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C87D7E]">
              Visual Inspiration
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#382824]">
              Featured Cake Gallery
            </h2>
            <p className="text-xs sm:text-sm text-[#6B5550]">
              Swipe or browse our recent custom cake designs. Click any cake for design details.
            </p>
          </div>

          {/* Carousel Arrow Controls */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous cake slide"
              className="p-2.5 rounded-full border border-[#EADCD2] bg-white hover:bg-[#FAF1EF] text-[#382824] transition-colors shadow-sm focus:outline-none focus:ring-1 focus:ring-[#C87D7E]"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next cake slide"
              className="p-2.5 rounded-full border border-[#EADCD2] bg-white hover:bg-[#FAF1EF] text-[#382824] transition-colors shadow-sm focus:outline-none focus:ring-1 focus:ring-[#C87D7E]"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-6">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                activeCategory === tab.id
                  ? "bg-[#382824] text-[#FFF9F3] shadow-sm"
                  : "bg-white border border-[#EADCD2] text-[#6B5550] hover:text-[#382824] hover:bg-[#FAF1EF]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Swipeable Carousel with Auto-Scroll on Mobile & Responsive Grid on Desktop */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-4 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible"
        >
          {filteredCakes.map((cake) => (
            <article
              key={cake.id}
              onClick={() => setSelectedCake(cake)}
              className="w-[78vw] sm:w-[42vw] lg:w-auto flex-shrink-0 snap-center group cursor-pointer bg-white rounded-3xl overflow-hidden border border-[#EADCD2] shadow-sm hover-lift flex flex-col justify-between"
            >
              {/* Photo with Shimmer Loading Placeholder */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#FAF1EF] shimmer-card photo-frame">
                <Image
                  src={cake.image}
                  alt={cake.title}
                  fill
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#382824]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-3 left-3 bg-[#382824]/75 backdrop-blur-sm text-[#FFF9F3] text-[10px] uppercase font-semibold tracking-wider px-2.5 py-1 rounded-full">
                  {cake.categoryLabel}
                </div>
              </div>

              {/* Title & Servings */}
              <div className="p-4 space-y-1">
                <h3 className="font-serif text-lg font-medium text-[#382824] group-hover:text-[#C87D7E] transition-colors line-clamp-1">
                  {cake.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-[#9B827C]">
                  <span>{cake.servings}</span>
                  <span className="text-[#C87D7E] font-medium text-[11px]">View Details →</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Swipe Cue */}
        <div className="sm:hidden flex items-center justify-center gap-1.5 pt-2 text-[11px] text-[#9B827C]">
          <span>👈 Swipe to explore designs 👉</span>
        </div>

        {/* Note on custom references */}
        <div className="mt-8 text-center text-xs text-[#9B827C] max-w-lg mx-auto">
          <span>
            Looking for a specific theme or Pinterest design? Share your reference in our quote form.
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox cake={selectedCake} onClose={() => setSelectedCake(null)} />
    </section>
  );
};
