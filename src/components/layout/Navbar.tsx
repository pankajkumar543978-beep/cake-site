"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, CalendarHeart, ChevronRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { businessData } from "@/data/business";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent) => {
    setIsOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Menu & Flavors", href: "/menu" },
    { label: "Our Story", href: "/about" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Custom Quote", href: "/quote" },
    { label: "Location", href: "/#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFF9F3]/78 backdrop-blur-xl shadow-sm border-b border-[#EADCD2]/80"
          : "bg-[#FFF9F3] border-b border-[#EADCD2]/60"
      }`}
    >
      {/* Skip to main content accessibility link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#382824] focus:text-[#FFF9F3] focus:rounded"
      >
        Skip to main content
      </a>

      <div className="site-container flex items-center justify-between h-16 sm:h-[72px] lg:h-20">
        {/* Brand Logo with Authentic Circular Emblem */}
        <Link
          href="/"
          onClick={handleLogoClick}
          aria-label="Cakes by Sia - Return to Home"
          className="group flex items-center gap-2.5 sm:gap-3.5 focus:outline-none focus:ring-2 focus:ring-[#C87D7E] rounded-full pr-2"
        >
          <div className="relative w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-[#C87D7E]/40 shadow-sm flex-shrink-0 group-hover:border-[#C87D7E] transition-all group-hover:scale-105">
            <Image
              src="/images/logo.png"
              alt="Cakes by Sia Calgary Official Logo"
              fill
              sizes="(max-width: 768px) 52px, 56px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-serif text-xl sm:text-2xl md:text-[26px] font-semibold tracking-tight text-[#C87D7E] group-hover:text-[#A96162] transition-colors leading-tight">
              Cakes by Sia
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-widest uppercase font-medium text-[#9B827C] -mt-0.5 sm:mt-0">
              Livingston · Calgary
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#6B5550]"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-[#382824] transition-colors py-2 relative group focus:outline-none focus:ring-1 focus:ring-[#C87D7E] rounded"
            >
              {link.label}
              <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-[#C87D7E] transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${businessData.phone}`}
            className="flex items-center gap-2 text-xs font-semibold text-[#382824] hover:text-[#C87D7E] transition-colors px-3 py-2 border border-[#EADCD2] rounded-full hover:border-[#C87D7E]/50"
            title="Call Cakes by Sia"
          >
            <Phone className="w-3.5 h-3.5 text-[#C87D7E]" />
            <span>{businessData.phoneFormatted}</span>
          </a>

          <a
            href="/quote"
            className="inline-flex items-center gap-2 bg-[#382824] text-[#FFF9F3] hover:bg-[#523A34] text-xs font-medium tracking-wide uppercase px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all"
          >
            <CalendarHeart className="w-3.5 h-3.5 text-[#D99A9B]" />
            <span>Request a Cake</span>
          </a>
        </div>

        {/* Mobile Actions: Phone & Menu Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${businessData.phone}`}
            className="p-2.5 text-[#382824] hover:text-[#C87D7E] rounded-full border border-[#EADCD2] focus:outline-none"
            aria-label="Call Cakes by Sia"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="p-2.5 text-[#382824] hover:text-[#C87D7E] rounded-lg border border-[#EADCD2] focus:outline-none focus:ring-2 focus:ring-[#C87D7E]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown: Compact, Translucent Glassmorphic Menu */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 top-20 z-50 bg-black/20 backdrop-blur-xs lg:hidden animate-fade-in px-4 pt-2"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-sm ml-auto bg-[#FFF9F3]/95 backdrop-blur-xl border border-[#EADCD2] rounded-2xl shadow-2xl p-4 flex flex-col gap-3 animate-slide-down"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Dropdown Header with Brand & Inside Close Button */}
            <div className="flex items-center justify-between pb-2 border-b border-[#EADCD2]/70">
              <Link
                href="/"
                onClick={handleLogoClick}
                className="flex items-center gap-2 group cursor-pointer"
                aria-label="Cakes by Sia - Return to Home"
              >
                <div className="relative w-6 h-6 rounded-full overflow-hidden border border-[#C87D7E]/30 flex-shrink-0">
                  <Image
                    src="/images/logo.png"
                    alt="Cakes by Sia"
                    fill
                    sizes="24px"
                    className="object-cover"
                  />
                </div>
                <span className="font-serif font-semibold text-[#C87D7E] group-hover:text-[#A96162] text-sm transition-colors">
                  Cakes by Sia
                </span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-[#9B827C] hover:text-[#382824] hover:bg-[#382824]/5 transition-colors"
                aria-label="Close navigation menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Compact Nav Links */}
            <nav className="flex flex-col divide-y divide-[#EADCD2]/50">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-2.5 px-2 text-sm font-medium text-[#382824] hover:text-[#C87D7E] hover:bg-white/40 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#9B827C]/60" />
                </Link>
              ))}
            </nav>

            {/* Compact Dual Actions */}
            <div className="pt-2 border-t border-[#EADCD2]/60 grid grid-cols-2 gap-2">
              <a
                href="/quote"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-1.5 bg-[#382824] text-[#FFF9F3] text-xs font-semibold py-2.5 px-3 rounded-xl shadow-sm text-center"
              >
                <CalendarHeart className="w-3.5 h-3.5 text-[#D99A9B]" />
                <span>Quote</span>
              </a>

              <a
                href={businessData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-[#25D366] text-white text-xs font-medium py-2.5 px-3 rounded-xl shadow-sm text-center"
              >
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Discreet Address & Instagram */}
            <div className="flex items-center justify-between pt-1 text-[11px] text-[#6B5550] px-1">
              <span className="truncate pr-2">Livingston Hill NE, Calgary</span>
              <a
                href={businessData.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#382824] hover:text-[#C87D7E]"
                aria-label="Instagram profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
