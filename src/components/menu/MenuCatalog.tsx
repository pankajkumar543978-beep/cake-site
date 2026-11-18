"use client";

import React, { useState, useTransition, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  X,
  Clock,
  MessageCircle,
  CalendarHeart,
  SlidersHorizontal,
  Sparkles,
  Zap,
  RotateCcw,
  Check,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { cakeCategories, CakeCategory } from "@/data/cakes";
import { MenuSkeletonCard } from "./MenuSkeletonCard";

interface MenuCatalogProps {
  initialCategories?: CakeCategory[];
}

type QuickFilterType = "all" | "rush" | "tier" | "treats";

export const MenuCatalog: React.FC<MenuCatalogProps> = ({
  initialCategories = cakeCategories,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [quickFilter, setQuickFilter] = useState<QuickFilterType>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isPending, startTransition] = useTransition();
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Primary Category options
  const categoryTabs = [
    { id: "all", label: "All Creations" },
    { id: "birthday", label: "Birthday Cakes" },
    { id: "wedding", label: "Wedding & Events" },
    { id: "baby-shower", label: "Baby Shower" },
    { id: "celebration", label: "Milestone Cakes" },
    { id: "cupcakes", label: "Artisan Cupcakes" },
    { id: "brownies-dry", label: "Brownies & Dry Cakes" },
  ];

  // Quick Filter Pills
  const quickFilters: { id: QuickFilterType; label: string; icon: React.ReactNode }[] = [
    { id: "all", label: "All Types", icon: null },
    {
      id: "rush",
      label: "Short-Notice (1–3 Days)",
      icon: <Zap className="w-3.5 h-3.5 text-[#C87D7E]" />,
    },
    {
      id: "tier",
      label: "Tiered & Large Events",
      icon: <Sparkles className="w-3.5 h-3.5 text-[#C6A36A]" />,
    },
    {
      id: "treats",
      label: "Cupcakes & Boxes",
      icon: null,
    },
  ];

  const handleCategoryChange = (catId: string) => {
    startTransition(() => {
      setSelectedCategory(catId);
    });
  };

  const handleQuickFilterChange = (filterId: QuickFilterType) => {
    startTransition(() => {
      setQuickFilter(filterId);
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    startTransition(() => {
      setSearchQuery(val);
    });
  };

  const clearFilters = () => {
    startTransition(() => {
      setSelectedCategory("all");
      setQuickFilter("all");
      setSearchQuery("");
    });
  };

  // Filter Logic
  const filteredCakes = useMemo(() => {
    return initialCategories.filter((cat) => {
      // 1. Primary Category Filter
      if (selectedCategory !== "all" && cat.id !== selectedCategory) {
        return false;
      }

      // 2. Quick Filter
      if (quickFilter === "rush") {
        const isRush =
          cat.leadTime.toLowerCase().includes("rush") ||
          cat.leadTime.includes("1–3") ||
          cat.leadTime.includes("2–4") ||
          cat.id === "birthday" ||
          cat.id === "cupcakes" ||
          cat.id === "brownies-dry";
        if (!isRush) return false;
      } else if (quickFilter === "tier") {
        const isTier =
          cat.id === "wedding" ||
          cat.id === "celebration" ||
          cat.recommendedServings.includes("150") ||
          cat.recommendedServings.includes("50");
        if (!isTier) return false;
      } else if (quickFilter === "treats") {
        const isTreat = cat.id === "cupcakes" || cat.id === "brownies-dry";
        if (!isTreat) return false;
      }

      // 3. Search Query Filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const inName = cat.name.toLowerCase().includes(query);
        const inShort = cat.shortDesc.toLowerCase().includes(query);
        const inFull = cat.fullDesc.toLowerCase().includes(query);
        const inThemes = cat.popularThemes.some((t) => t.toLowerCase().includes(query));
        if (!inName && !inShort && !inFull && !inThemes) return false;
      }

      return true;
    });
  }, [initialCategories, selectedCategory, quickFilter, searchQuery]);

  const hasActiveFilters =
    selectedCategory !== "all" || quickFilter !== "all" || searchQuery.trim() !== "";

  const activeFilterCount =
    (selectedCategory !== "all" ? 1 : 0) +
    (quickFilter !== "all" ? 1 : 0) +
    (searchQuery.trim() !== "" ? 1 : 0);

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Unified Compact Header Area (Zero Wasted Vertical Space on Mobile) */}
      <div className="space-y-1.5">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-[#9B827C]">
          <Link href="/" className="hover:text-[#382824] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#382824] font-medium">Cake Menu</span>
        </nav>

        {/* Title & Custom Quote Link */}
        <div className="flex items-baseline justify-between gap-3">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#382824] tracking-tight">
            Cake Menu & <span className="italic text-[#C87D7E]">Flavors</span>
          </h1>
          <Link
            href="/quote"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-[#C87D7E] hover:underline"
          >
            <span>Request Custom Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-[#6B5550]">
          6 artisanal categories handcrafted to order in Livingston Hill NE, Calgary
        </p>

        {/* Mobile Search Bar: Sleek input directly under title (matches John's Breakfast reference) */}
        <div className="lg:hidden pt-1.5">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9B827C]" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search cakes (e.g. birthday, lambeth, chocolate)..."
              className="w-full pl-10 pr-9 py-2.5 rounded-2xl bg-white border border-[#EADCD2] text-xs sm:text-sm text-[#382824] placeholder-[#9B827C] focus:outline-none focus:ring-2 focus:ring-[#C87D7E]/50 shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#9B827C] hover:text-[#382824]"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Mobile Reference Filter Bar: [Filters (N)] + Quick Category Pills */}
        <div className="lg:hidden pt-1">
          <div className="border-t border-[#EADCD2]/70 my-2" />
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {/* Filter Toggle Button (opens slide-up sheet) */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border text-xs font-semibold whitespace-nowrap transition-colors shadow-xs shrink-0 ${
                hasActiveFilters
                  ? "bg-[#382824] text-white border-[#382824]"
                  : "bg-white border-[#EADCD2] text-[#382824] hover:bg-[#FAF1EF]"
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#C87D7E]" />
              <span>Filters ({activeFilterCount})</span>
            </button>

            {/* Quick Horizontal Category Pills */}
            <div className="flex items-center gap-1.5">
              {categoryTabs.map((tab) => {
                const isActive = selectedCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleCategoryChange(tab.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                      isActive
                        ? "bg-[#C87D7E] text-white shadow-xs font-semibold"
                        : "bg-white border border-[#EADCD2] text-[#6B5550]"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main 2-Column Layout: Left = Filter Sidebar (Desktop), Right = Cake Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: Desktop Sticky Filter Sidebar */}
        <aside
          aria-label="Menu Filters"
          className="hidden lg:block lg:col-span-4 xl:col-span-3 sticky top-24 space-y-5"
        >
          <div className="bg-white rounded-3xl p-5 border border-[#EADCD2] shadow-sm space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#EADCD2]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#382824]">
                <SlidersHorizontal className="w-4 h-4 text-[#C87D7E]" />
                <span>Filters</span>
              </div>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-[11px] text-[#C87D7E] font-medium hover:underline"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Search Input on Left Sidebar */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#382824]">Search Menu</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#9B827C]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Vintage, gold, fudge..."
                  className="w-full pl-9 pr-8 py-2 rounded-xl bg-[#FAF1EF] border border-[#EADCD2] text-xs text-[#382824] placeholder-[#9B827C] focus:outline-none focus:ring-2 focus:ring-[#C87D7E]/50 focus:bg-white transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#9B827C] hover:text-[#382824]"
                    aria-label="Clear search"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>

            {/* Categories List */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#382824]">Categories</label>
              <div className="space-y-1">
                {categoryTabs.map((tab) => {
                  const isActive = selectedCategory === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleCategoryChange(tab.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all text-left ${
                        isActive
                          ? "bg-[#382824] text-[#FFF9F3] shadow-sm font-semibold"
                          : "text-[#6B5550] hover:bg-[#FAF1EF] hover:text-[#382824]"
                      }`}
                    >
                      <span>{tab.label}</span>
                      {isActive && <Check className="w-3.5 h-3.5 text-[#D99A9B]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Filter Pills */}
            <div className="space-y-2 pt-2 border-t border-[#EADCD2]/70">
              <label className="text-xs font-semibold text-[#382824]">Quick Filter</label>
              <div className="space-y-1">
                {quickFilters.map((qf) => {
                  const isActive = quickFilter === qf.id;
                  return (
                    <button
                      key={qf.id}
                      onClick={() => handleQuickFilterChange(qf.id)}
                      className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs transition-colors text-left ${
                        isActive
                          ? "bg-[#FAF1EF] text-[#C87D7E] font-semibold border border-[#C87D7E]/30"
                          : "text-[#6B5550] hover:bg-[#FAF1EF]"
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        {qf.icon}
                        <span>{qf.label}</span>
                      </div>
                      {isActive && <Check className="w-3 h-3 text-[#C87D7E]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sidebar Helper Banner */}
            <div className="p-3.5 rounded-2xl bg-[#FAF1EF] border border-[#EADCD2] space-y-1 text-xs text-[#6B5550]">
              <p className="font-semibold text-[#382824]">Custom Theme in Mind?</p>
              <p className="text-[11px] leading-relaxed">
                Bring your Pinterest or Instagram reference to life with Sia.
              </p>
              <Link
                href="/quote"
                className="inline-block text-[11px] font-semibold text-[#C87D7E] hover:underline pt-1"
              >
                Request Custom Quote →
              </Link>
            </div>
          </div>
        </aside>

        {/* RIGHT COLUMN: Cake Cards Grid */}
        <div className="lg:col-span-8 xl:col-span-9 space-y-4">
          {/* Top Bar for Grid: Status & Reset button if filtered */}
          {hasActiveFilters && (
            <div className="flex items-center justify-between text-xs text-[#6B5550] bg-white px-4 py-2.5 rounded-2xl border border-[#EADCD2]">
              <span>Active filters applied</span>
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-1 text-[#C87D7E] font-semibold hover:underline"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Filters</span>
              </button>
            </div>
          )}

          {/* Cards Grid or Skeletons */}
          {isPending ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <MenuSkeletonCard key={i} />
              ))}
            </div>
          ) : filteredCakes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
              {filteredCakes.map((cat) => {
                const isImageLoaded = loadedImages[cat.id];
                return (
                  <article
                    key={cat.id}
                    className="bg-white rounded-3xl overflow-hidden border border-[#EADCD2] shadow-sm hover-lift flex flex-col justify-between group transition-all"
                  >
                    <div>
                      {/* Image Container with Shimmer placeholder */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF1EF] photo-frame shimmer-card">
                        {!isImageLoaded && (
                          <div className="absolute inset-0 shimmer-card z-10" />
                        )}
                        <Image
                          src={cat.image}
                          alt={cat.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className={`object-cover transition-opacity duration-300 ${
                            isImageLoaded ? "opacity-100" : "opacity-0"
                          }`}
                          onLoad={() =>
                            setLoadedImages((prev) => ({ ...prev, [cat.id]: true }))
                          }
                        />
                        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-[#382824] shadow-sm z-20">
                          {cat.recommendedServings}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 space-y-2.5">
                        <h3 className="font-serif text-xl font-medium text-[#382824] group-hover:text-[#C87D7E] transition-colors line-clamp-1">
                          {cat.name}
                        </h3>
                        <p className="text-xs text-[#6B5550] leading-relaxed line-clamp-2">
                          {cat.shortDesc}
                        </p>

                        <div className="pt-2 border-t border-[#EADCD2]/60 flex items-center gap-1.5 text-[11px] text-[#9B827C]">
                          <Clock className="w-3 h-3 text-[#C87D7E] flex-shrink-0" />
                          <span>{cat.leadTime}</span>
                        </div>

                        {/* Theme tags */}
                        <div className="flex flex-wrap gap-1 pt-1">
                          {cat.popularThemes.slice(0, 3).map((theme) => (
                            <span
                              key={theme}
                              className="text-[9px] uppercase font-medium tracking-wider px-1.5 py-0.5 rounded bg-[#FAF1EF] text-[#6B5550]"
                            >
                              {theme}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Order Actions */}
                    <div className="p-5 pt-0 flex gap-2">
                      <Link
                        href={`/quote?category=${encodeURIComponent(cat.id)}`}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#382824] hover:bg-[#523A34] text-[#FFF9F3] text-xs font-semibold uppercase tracking-wider transition-colors"
                      >
                        <CalendarHeart className="w-3.5 h-3.5 text-[#D99A9B]" />
                        <span>Order Custom</span>
                      </Link>

                      <a
                        href={`https://wa.me/13683997686?text=${encodeURIComponent(
                          `Hi Sia! I'm interested in ordering from your ${cat.name} menu in Calgary.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center p-2.5 rounded-xl bg-[#FAF1EF] hover:bg-[#F7E8E7] text-[#25D366] transition-colors"
                        title="Inquire on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 px-4 bg-white rounded-3xl border border-[#EADCD2] space-y-3">
              <Sparkles className="w-8 h-8 text-[#C87D7E] mx-auto opacity-70" />
              <h3 className="font-serif text-xl font-medium text-[#382824]">
                No matching creations found
              </h3>
              <p className="text-xs text-[#6B5550] max-w-sm mx-auto">
                Try clearing your search or filters to see all available categories.
              </p>
              <button
                onClick={clearFilters}
                className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#382824] text-[#FFF9F3] text-xs font-semibold uppercase tracking-wider"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Slide-Up Filters Bottom Sheet / Modal (Matches John's Breakfast Image 2) */}
      {isMobileFilterOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Filter Cake Menu"
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in"
          onClick={() => setIsMobileFilterOpen(false)}
        >
          <div
            className="w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl max-h-[85vh] overflow-y-auto space-y-5 animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#EADCD2]">
              <div className="flex items-center gap-2 font-serif text-lg text-[#382824]">
                <SlidersHorizontal className="w-4 h-4 text-[#C87D7E]" />
                <span>Filters ({activeFilterCount})</span>
              </div>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-1 rounded-full text-[#9B827C] hover:text-[#382824]"
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#9B827C]">
                Categories
              </label>
              <div className="grid grid-cols-2 gap-2">
                {categoryTabs.map((tab) => {
                  const isActive = selectedCategory === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleCategoryChange(tab.id)}
                      className={`py-2 px-3 rounded-xl text-xs text-left transition-colors font-medium ${
                        isActive
                          ? "bg-[#382824] text-white font-semibold"
                          : "bg-[#FAF1EF] text-[#382824] hover:bg-[#F7E8E7]"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Filters */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#9B827C]">
                Event & Order Type
              </label>
              <div className="flex flex-wrap gap-2">
                {quickFilters.map((qf) => {
                  const isActive = quickFilter === qf.id;
                  return (
                    <button
                      key={qf.id}
                      onClick={() => handleQuickFilterChange(qf.id)}
                      className={`py-1.5 px-3 rounded-full text-xs font-medium transition-colors ${
                        isActive
                          ? "bg-[#C87D7E] text-white"
                          : "bg-[#FAF1EF] text-[#6B5550] hover:bg-[#F7E8E7]"
                      }`}
                    >
                      {qf.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Modal Bottom Buttons */}
            <div className="pt-2 border-t border-[#EADCD2] flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  clearFilters();
                  setIsMobileFilterOpen(false);
                }}
                className="text-xs text-[#9B827C] hover:text-[#382824] font-medium"
              >
                Clear All
              </button>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="flex-1 py-3 rounded-xl bg-[#382824] text-white text-xs font-semibold uppercase tracking-wider text-center"
              >
                Show {filteredCakes.length} Categories
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
