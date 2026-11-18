import React from "react";
import { Sparkles, MapPin, Clock } from "lucide-react";
import { businessData } from "@/data/business";

export const AnnouncementBar: React.FC = () => {
  return (
    <aside
      aria-label="Bakery announcement"
      className="bg-[#382824] text-[#FFF9F3] text-xs py-1.5 px-4 border-b border-[#382824]/20 transition-all"
    >
      <div className="site-container flex items-center justify-between gap-4">
        <div className="hidden sm:flex items-center gap-2 text-[#FFF9F3]/80">
          <MapPin className="w-3.5 h-3.5 text-[#D99A9B]" />
          <span>{businessData.address.district}, Calgary, AB</span>
        </div>

        <div className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 text-center font-medium">
          <Sparkles className="w-3.5 h-3.5 text-[#C6A36A] flex-shrink-0" />
          <span className="sm:hidden text-[11px] tracking-tight whitespace-nowrap">
            Livingston Studio · Open Daily 7 AM – 8 PM
          </span>
          <span className="hidden sm:inline">
            Livingston Studio Open Daily 7 AM – 8 PM · Last-Minute Orders Accepted
          </span>
        </div>

        <div className="hidden md:flex items-center gap-1.5 text-[#FFF9F3]/80">
          <Clock className="w-3.5 h-3.5 text-[#D99A9B]" />
          <span>Open Today</span>
        </div>
      </div>
    </aside>
  );
};

