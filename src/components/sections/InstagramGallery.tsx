"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { businessData } from "@/data/business";

export const InstagramGallery: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 180;
      const scrollAmount = direction === "left" ? -(cardWidth + 14) : (cardWidth + 14);
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Auto-carousel on mobile/tablet (every 3 seconds)
  useEffect(() => {
    if (isPaused) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (container.scrollWidth > container.clientWidth) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        const cardWidth = container.firstElementChild?.clientWidth || 180;

        if (container.scrollLeft >= maxScroll - 20) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: cardWidth + 14, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const instagramFeed = [
    {
      id: "ig-1",
      title: "Custom Birthday Piping & Floral Rosettes",
      image: "/images/instagram/ig-cake-1.jpg",
      url: "https://www.instagram.com/cakesbysia47/",
      likes: "Recent Post",
    },
    {
      id: "ig-2",
      title: "Royal Crown & Candle Pink Birthday Cake",
      image: "/images/instagram/ig-royal-crown-cake.png",
      url: "https://www.instagram.com/cakesbysia47/",
      likes: "Recent Post",
    },
    {
      id: "ig-3",
      title: "Bespoke Textured Buttercream Design",
      image: "/images/instagram/ig-cake-3.jpg",
      url: "https://www.instagram.com/cakesbysia47/",
      likes: "Recent Post",
    },
    {
      id: "ig-4",
      title: "Elegant Tiered Cake with Sugar Craft",
      image: "/images/instagram/ig-cake-4.jpg",
      url: "https://www.instagram.com/cakesbysia47/",
      likes: "Recent Post",
    },
    {
      id: "ig-5",
      title: "Class of 2026 Graduation Balloon Cake",
      image: "/images/instagram/ig-graduation-cake.png",
      url: "https://www.instagram.com/cakesbysia47/",
      likes: "Recent Post",
    },
    {
      id: "ig-6",
      title: "Milestone Celebration Custom Cake",
      image: "/images/instagram/ig-cake-6.jpg",
      url: "https://www.instagram.com/cakesbysia47/",
      likes: "Recent Post",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAF1EF] border-b border-[#EADCD2]">
      <div className="site-container">
        {/* Instagram Profile Header Strip */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EADCD2] shadow-sm mb-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#C87D7E] shadow-sm flex-shrink-0 shimmer-card">
              <Image
                src="/images/logo.png"
                alt="Sia - Baker & Cake Artist"
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#382824]">
                  {businessData.instagram.handle}
                </h3>
                <span className="text-xs bg-[#FAF1EF] text-[#6B5550] px-2 py-0.5 rounded-full font-medium">
                  Calgary Baker
                </span>
              </div>
              <p className="text-xs text-[#6B5550] mt-0.5">
                👩‍🍳 {businessData.baker} ({businessData.bakerTag})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            {/* Mobile Carousel Arrow Controls */}
            <div className="flex sm:hidden items-center gap-1.5">
              <button
                onClick={() => scroll("left")}
                aria-label="Previous Instagram post"
                className="p-2 rounded-full border border-[#EADCD2] bg-[#FAF1EF] text-[#382824] hover:bg-[#F7E8E7] transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Next Instagram post"
                className="p-2 rounded-full border border-[#EADCD2] bg-[#FAF1EF] text-[#382824] hover:bg-[#F7E8E7] transition-colors"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <a
              href={businessData.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#382824] text-[#FFF9F3] hover:bg-[#523A34] text-xs font-semibold uppercase tracking-wider transition-all shadow-sm flex-shrink-0"
            >
              <InstagramIcon className="w-4 h-4 text-[#D99A9B]" />
              <span>Follow on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </div>

        {/* 6 Images: Mobile & Tablet Auto-Carousel & Desktop 6-Column Grid */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-3.5 pb-2 sm:grid sm:grid-cols-3 lg:grid-cols-6 sm:overflow-visible -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {instagramFeed.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[44vw] sm:w-auto flex-shrink-0 snap-center group relative aspect-square rounded-2xl overflow-hidden bg-white shimmer-card border border-[#EADCD2] shadow-sm photo-frame"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#382824]/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-2 text-center">
                <InstagramIcon className="w-5 h-5 text-[#D99A9B] mb-1" />
                <span className="text-[11px] font-medium line-clamp-1">{post.title}</span>
                <span className="text-[10px] text-[#FFF9F3]/80">{post.likes}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
