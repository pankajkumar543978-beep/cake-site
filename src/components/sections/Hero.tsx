"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Sparkles, MapPin, ArrowRight, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { businessData } from "@/data/business";

const heroSlides = [
  {
    image: "/images/gmaps/gmaps-photo-1.jpg",
    title: "30th Milestone Gold & Black Cake",
    location: "Livingston Hill NE, Calgary",
    tag: "Custom Birthday",
    rating: "4.9★ Google",
    quote: "“Truly a perfectionist and prepared on a short notice... jaw-dropping presentation!”",
    author: "Sonia Sharma (Google Review)",
  },
  {
    image: "/images/instagram/ig-cake-1.jpg",
    title: "Grand Monogram 'A & N' Wedding Tier",
    location: "Livingston Hill NE, Calgary",
    tag: "Two-Tier Wedding",
    rating: "4.9★ Google",
    quote: "“The cake was amazing, both in looks and taste. Exactly how we wanted!”",
    author: "Smriti Kharb (Google Review)",
  },
  {
    image: "/images/gmaps/gmaps-photo-4.jpg",
    title: "Bella Red Velvet Crown Piped Cake",
    location: "Livingston Hill NE, Calgary",
    tag: "Artisan Buttercream",
    rating: "4.9★ Google",
    quote: "“It looked beautiful, tasted delicious, and was exactly what we hoped for!”",
    author: "Manpreet Dhaliwal (Google Review)",
  },
  {
    image: "/images/gmaps/gmaps-photo-8.jpg",
    title: "Two-Tier Fresh Red Rose & Pearls",
    location: "Livingston Hill NE, Calgary",
    tag: "Bridal Centerpiece",
    rating: "4.9★ Google",
    quote: "“You adjusted the timing for late pick up, you have done an amazing job.”",
    author: "Saleshni Sharma (Google Review)",
  },
  {
    image: "/images/gmaps/gmaps-photo-6.jpg",
    title: "Lotus Biscoff Spiced Caramel Cake",
    location: "Livingston Hill NE, Calgary",
    tag: "Indulgence Cakes",
    rating: "4.9★ Google",
    quote: "“Rich flavors, perfectly balanced sweetness, highly recommend!”",
    author: "Verified Client (Google Maps)",
  },
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  // Auto-advance slides every 3.5 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  // Touch swipe handling for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    touchStartX.current = null;
    setIsPaused(false);
  };

  const active = heroSlides[currentSlide];

  return (
    <section className="relative overflow-hidden bg-[#FFF9F3] pt-3 pb-6 md:pt-4 md:pb-8 lg:pt-3 lg:pb-6 xl:pt-6 xl:pb-12 2xl:pt-8 2xl:pb-16 border-b border-[#EADCD2]">
      {/* Subtle Warm Background Ambient Circle */}
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#F7E8E7]/50 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 xl:gap-8 items-center">
          {/* Left Column: Headline, Mobile Rotating Carousel Card, Buttons & Trust */}
          <div className="lg:col-span-7 space-y-3 lg:space-y-3.5 xl:space-y-4">
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF1EF] border border-[#EADCD2] text-xs font-medium text-[#382824]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C87D7E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C87D7E]"></span>
              </span>
              <span className="font-semibold tracking-wide uppercase text-[10px] text-[#A96162]">
                Custom Cakes Made with Love
              </span>
              <span className="text-[#382824]/30">|</span>
              <span className="text-[#6B5550]">Calgary, AB</span>
            </div>

            {/* Headline */}
            <div className="space-y-1.5 xl:space-y-2.5">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-[50px] 2xl:text-[58px] leading-[1.1] font-normal tracking-tight text-[#382824]">
                Every Celebration <br className="hidden sm:inline" />
                Deserves Something{" "}
                <span className="italic font-normal text-[#C87D7E]">Sweet.</span>
              </h1>
              <p className="text-xs sm:text-sm xl:text-base text-[#6B5550] max-w-xl font-normal leading-relaxed">
                Beautifully designed cakes and sweet treats handcrafted to order in Livingston Hill NE, Calgary.
              </p>
            </div>

            {/* MOBILE ONLY: Interactive Rotating Cake Carousel Card */}
            <div
              className="lg:hidden relative rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-[16/10] my-2 group select-none shimmer-card"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Stacked Images for Seamless Crossfade */}
              {heroSlides.map((slide, idx) => (
                <div
                  key={slide.image}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={idx === 0}
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              ))}

              {/* Gradient Vignette for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#382824]/75 via-[#382824]/10 to-black/20 z-10" />

              {/* Top Bar: Google Rating */}
              <div className="absolute top-2.5 right-3 z-20">
                <span className="bg-[#C87D7E] px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-white shadow-sm">
                  {active.rating}
                </span>
              </div>

              {/* Bottom Bar: Slide Info & Dot Indicators */}
              <div className="absolute bottom-2.5 left-3 right-3 z-20 flex items-end justify-between">
                <div className="text-white space-y-0.5 max-w-[70%]">
                  <p className="font-serif text-sm font-medium leading-tight truncate drop-shadow-sm">
                    {active.title}
                  </p>
                  <p className="text-[10px] text-white/80">{active.location}</p>
                </div>

                {/* Dot Indicators */}
                <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Go to cake slide ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === currentSlide ? "w-4 bg-[#D99A9B]" : "w-1.5 bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Quick Left / Right Arrow Buttons on Mobile */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                aria-label="Previous cake"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-black/40 text-white backdrop-blur-sm opacity-70 active:opacity-100 transition-opacity"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                aria-label="Next cake"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-black/40 text-white backdrop-blur-sm opacity-70 active:opacity-100 transition-opacity"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Action Buttons: 2 side-by-side buttons on mobile to save vertical space */}
            <div className="grid grid-cols-2 sm:flex sm:flex-row items-stretch sm:items-center gap-2.5 pt-1">
              <Link
                href="/menu"
                className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#382824] text-[#FFF9F3] hover:bg-[#523A34] text-xs font-semibold tracking-wider uppercase transition-all shadow-sm"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D99A9B]" />
              </Link>

              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-[#382824] hover:bg-[#FAF1EF] border border-[#EADCD2] text-xs font-semibold tracking-wider uppercase transition-all"
              >
                <span>Custom Quote</span>
              </Link>
            </div>

            {/* Verified Trust Strip */}
            <div className="pt-3 border-t border-[#EADCD2]/70 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#6B5550]">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <div className="flex items-center text-[#C6A36A] shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-[#382824] whitespace-nowrap">4.9 Google Rating</span>
                <span className="text-[#9B827C] whitespace-nowrap">({businessData.googleMaps.reviewCount} Reviews)</span>
              </div>

              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <Sparkles className="w-3.5 h-3.5 text-[#C87D7E]" />
                <span>Rush Orders Accepted</span>
              </div>

              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <MapPin className="w-3.5 h-3.5 text-[#C87D7E]" />
                <span>Livingston NE Pickup</span>
              </div>
            </div>
          </div>

          {/* Desktop Right Column: Rotating Cake Showcase with Seamless Crossfade */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div
              className="relative mx-auto max-w-[360px] xl:max-w-[420px] 2xl:max-w-[460px] group select-none"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Main Rotating Cake Showcase Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white photo-frame">
                <div className="relative aspect-[4/4.6] xl:aspect-[4/5] max-h-[390px] xl:max-h-[470px] 2xl:max-h-[530px] w-full shimmer-card">
                  {heroSlides.map((slide, idx) => (
                    <div
                      key={slide.image}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                      }`}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        priority={idx === 0}
                        sizes="(max-width: 1200px) 400px, 460px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#382824]/75 via-transparent to-black/20 z-10" />

                  {/* Top Right Rating Badge */}
                  <div className="absolute top-3 right-3 xl:top-4 xl:right-4 z-20">
                    <span className="bg-[#C87D7E] text-white text-[10px] xl:text-xs px-2.5 py-1 xl:px-3 xl:py-1 rounded-full font-semibold shadow-sm">
                      {active.rating}
                    </span>
                  </div>

                  {/* Desktop Prev / Next Navigation Arrows on Card Hover */}
                  <div className="absolute inset-x-2.5 top-1/2 -translate-y-1/2 flex items-center justify-between z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={prevSlide}
                      aria-label="Previous cake image"
                      className="p-1.5 xl:p-2 rounded-full bg-white/85 hover:bg-white text-[#382824] shadow-md transition-all hover:scale-105"
                    >
                      <ChevronLeft className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                    </button>
                    <button
                      onClick={nextSlide}
                      aria-label="Next cake image"
                      className="p-1.5 xl:p-2 rounded-full bg-white/85 hover:bg-white text-[#382824] shadow-md transition-all hover:scale-105"
                    >
                      <ChevronRight className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                    </button>
                  </div>
                </div>

                {/* Scraped Caption Overlay */}
                <div className="absolute bottom-3 left-3 right-3 xl:bottom-4 xl:left-4 xl:right-4 text-white p-2.5 xl:p-3.5 rounded-2xl bg-[#382824]/85 backdrop-blur-md border border-white/10 space-y-1 xl:space-y-1.5 z-20">
                  <div className="flex items-center justify-between text-[11px] xl:text-xs text-[#FFF9F3]/80">
                    <span className="font-serif italic text-xs xl:text-sm text-[#FFF9F3] truncate pr-2">
                      {active.title}
                    </span>
                    <span className="bg-[#C87D7E] text-white text-[9px] xl:text-[10px] px-2 py-0.5 rounded-full font-medium shrink-0">
                      Livingston, Calgary
                    </span>
                  </div>
                  <p className="text-[11px] xl:text-xs text-[#FFF9F3]/90 leading-tight italic line-clamp-2">
                    {active.quote}
                  </p>
                  <div className="flex items-center justify-between pt-0.5 text-[9px] xl:text-[10px] text-[#C6A36A]">
                    <span className="font-medium truncate pr-2">— {active.author}</span>

                    {/* Desktop Carousel Indicators */}
                    <div className="flex items-center gap-1 shrink-0">
                      {heroSlides.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentSlide(idx)}
                          aria-label={`Slide ${idx + 1}`}
                          className={`h-1.5 rounded-full transition-all ${
                            idx === currentSlide ? "w-3.5 xl:w-4 bg-[#D99A9B]" : "w-1.5 bg-white/40"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Accent Badge: Daily 7 AM - 8 PM */}
              <div className="absolute -top-3 -left-3 xl:-top-4 xl:-left-5 bg-white p-2 xl:p-3 rounded-2xl shadow-lg border border-[#EADCD2] flex items-center gap-2.5 xl:gap-3 animate-fade-in z-30">
                <div className="w-8 h-8 xl:w-9 xl:h-9 rounded-xl bg-[#F7E8E7] flex items-center justify-center text-[#C87D7E]">
                  <ShieldCheck className="w-4 h-4 xl:w-5 xl:h-5" />
                </div>
                <div>
                  <p className="text-[10px] xl:text-[11px] font-bold text-[#382824]">Daily Studio Hours</p>
                  <p className="text-[9px] xl:text-[10px] text-[#6B5550]">7:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
