import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  Star,
  ExternalLink,
  Heart,
} from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { businessData } from "@/data/business";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#382824] text-[#FFF9F3] pt-16 pb-24 lg:pb-16 border-t border-[#382824]/40">
      <div className="site-container">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#FFF9F3]/10">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#D99A9B]/40 shadow-sm flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Cakes by Sia Calgary Logo"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[#FFF9F3] group-hover:text-[#D99A9B] transition-colors leading-none">
                  Cakes by Sia
                </span>
                <span className="text-[10px] tracking-widest uppercase font-medium text-[#D99A9B] mt-1">
                  Livingston · Calgary
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#FFF9F3]/80 leading-relaxed">
              Bespoke celebration and tiered wedding cakes handcrafted in Livingston Hill NE, Calgary.
              Translating your special moments into unforgettable edible art.
            </p>
            {/* Google Rating badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFF9F3]/10 border border-[#FFF9F3]/15 text-xs text-[#FFF9F3] whitespace-nowrap">
              <div className="flex items-center text-[#C6A36A] shrink-0">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-semibold whitespace-nowrap">4.9 / 5.0</span>
              <span className="text-[#FFF9F3]/70 whitespace-nowrap">({businessData.googleMaps.reviewCount} Google Reviews)</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-medium text-[#C6A36A] tracking-wide">
              Explore Our Creations
            </h3>
            <ul className="space-y-2 text-sm text-[#FFF9F3]/80">
              <li>
                <Link href="/menu" className="hover:text-[#D99A9B] transition-colors font-medium text-[#FFF9F3]">
                  Full Cake Menu & Flavors →
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D99A9B] transition-colors font-medium text-[#FFF9F3]">
                  About Sia & Studio Story →
                </Link>
              </li>
              <li>
                <Link href="/#categories" className="hover:text-[#D99A9B] transition-colors">
                  Signature Cake Categories
                </Link>
              </li>
              <li>
                <Link href="/menu#dimension-guide" className="hover:text-[#D99A9B] transition-colors">
                  Tier Portions & Dimensions Guide
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-[#D99A9B] transition-colors">
                  Custom Cake Ordering Process
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="hover:text-[#D99A9B] transition-colors">
                  Verified Client Reviews (4.9★)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Pick-up */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-medium text-[#C6A36A] tracking-wide">
              Studio Hours & Pickup
            </h3>
            <div className="space-y-2 text-sm text-[#FFF9F3]/80">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#D99A9B] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[#FFF9F3]">Monday – Sunday</p>
                  <p>7:00 AM – 8:00 PM (Daily)</p>
                  <p className="text-xs text-[#D99A9B] mt-0.5">Short-notice orders accommodated</p>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-2">
                <MapPin className="w-4 h-4 text-[#D99A9B] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[#FFF9F3]">Livingston Hill NE</p>
                  <p>Calgary, AB T3P 1P1, Canada</p>
                  <a
                    href={businessData.googleMaps.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#C6A36A] hover:underline mt-1"
                  >
                    <span>Get Google Maps Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-medium text-[#C6A36A] tracking-wide">
              Get in Touch
            </h3>
            <div className="space-y-3 text-sm text-[#FFF9F3]/80">
              <a
                href={`tel:${businessData.phone}`}
                className="flex items-center gap-2 hover:text-[#D99A9B] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D99A9B]" />
                <span className="font-semibold text-[#FFF9F3]">{businessData.phoneFormatted}</span>
              </a>

              <a
                href={businessData.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#D99A9B] transition-colors group"
              >
                <InstagramIcon className="w-4 h-4 text-[#D99A9B] group-hover:scale-110 transition-transform" />
                <span>{businessData.instagram.handle} ({businessData.instagram.followers} followers)</span>
              </a>

              <div className="pt-2">
                <a
                  href="/quote"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#FFF9F3] text-[#382824] hover:bg-[#FAF1EF] text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>Request Custom Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Proposal Notice Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FFF9F3]/60">
          <p>
            © {new Date().getFullYear()} Cakes by Sia. Handcrafted in Calgary, Alberta.
          </p>
          <div className="flex items-center gap-1.5 text-center">
            <span>Unofficial custom website design demo & sales proposal</span>
            <span className="text-[#FFF9F3]/40">·</span>
            <span className="inline-flex items-center gap-1">
              Crafted with <Heart className="w-3 h-3 text-[#D99A9B] fill-current" /> for Cakes by Sia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
