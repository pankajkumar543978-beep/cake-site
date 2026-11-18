import React from "react";
import { Star, MessageSquareQuote, CheckCircle, ExternalLink } from "lucide-react";
import { reviewsData } from "@/data/reviews";
import { businessData } from "@/data/business";

export const Reviews: React.FC = () => {
  const topics = [
    { label: "Tasty Cake", count: 5 },
    { label: "Beautifully Made", count: 4 },
    { label: "Short Notice / Urgent", count: 4 },
    { label: "Birthday Masterpiece", count: 6 },
    { label: "Gender Reveal", count: 3 },
    { label: "Custom Details", count: 2 },
  ];

  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#FFF9F3] border-b border-[#EADCD2]">
      <div className="site-container">
        {/* Section Header with Overall Rating */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C87D7E]">
              Client Testimonials
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#382824]">
              Loved by Celebrants Across Calgary
            </h2>
            <p className="text-sm sm:text-base text-[#6B5550]">
              Every cake tells a story. Here is what real clients in Calgary say about their custom orders.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="bg-[#FAF1EF] p-4 sm:p-5 rounded-3xl border border-[#EADCD2] flex items-center gap-3.5 sm:gap-5 shrink-0 max-w-full">
            <div className="text-center shrink-0">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#382824]">
                4.9
              </span>
              <div className="flex text-[#C6A36A] mt-1 shrink-0">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-current" />
                ))}
              </div>
            </div>
            <div className="border-l border-[#EADCD2] pl-3.5 sm:pl-4 text-xs text-[#6B5550] space-y-0.5 min-w-0">
              <p className="font-semibold text-[#382824] text-xs sm:text-sm">Google Verified Rating</p>
              <p className="text-[11px] sm:text-xs text-[#6B5550]">
                {businessData.googleMaps.reviewCount} Reviews <span className="text-[#C6A36A] font-semibold">(33 ★★★★★)</span>
              </p>
              <a
                href={businessData.googleMaps.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#C87D7E] font-medium hover:underline pt-0.5 text-[11px] sm:text-xs"
              >
                <span>View all reviews on Google</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Review Topics Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          <span className="text-xs font-medium text-[#9B827C] mr-2">Frequently praised for:</span>
          {topics.map((t, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-xs bg-white border border-[#EADCD2] text-[#382824] flex items-center gap-1.5"
            >
              <span>{t.label}</span>
              <span className="text-[10px] text-[#C87D7E] font-bold">({t.count})</span>
            </span>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="bg-white p-5 rounded-3xl border border-[#EADCD2] shadow-sm hover-lift flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex text-[#C6A36A]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#9B827C]">
                    {review.timeAgo}
                  </span>
                </div>

                {/* Cake Badge */}
                <span className="inline-block text-[10px] font-semibold text-[#C87D7E] bg-[#FAF1EF] px-2.5 py-0.5 rounded-full">
                  {review.cakeOrdered}
                </span>

                {/* Quote (Clamped to 3 lines with ...) */}
                <p className="text-xs sm:text-sm text-[#382824] leading-relaxed italic line-clamp-3">
                  &ldquo;{review.reviewText}&rdquo;
                </p>
              </div>

              {/* Author & Source */}
              <div className="pt-3 mt-3 border-t border-[#EADCD2]/60 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#382824]">{review.name}</p>
                  <p className="text-[10px] text-[#9B827C]">Calgary Client · {review.source}</p>
                </div>
                <CheckCircle className="w-3.5 h-3.5 text-[#C87D7E]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

