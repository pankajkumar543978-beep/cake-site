"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const toggleVisibility = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldShow = window.scrollY > 300;
          setVisible((prev) => (prev !== shouldShow ? shouldShow : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Go to top of page"
      className={`fixed bottom-20 right-4 sm:right-6 lg:bottom-8 lg:right-8 z-40 p-3 rounded-full bg-[#C87D7E] text-[#FFF9F3] hover:bg-[#A96162] hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl border-2 border-white/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C87D7E] focus:ring-offset-2 translate-z-0 will-change-transform [backface-visibility:hidden] ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      title="Go to top"
    >
      <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3] stroke-linecap-round stroke-linejoin-round" />
    </button>
  );
};
