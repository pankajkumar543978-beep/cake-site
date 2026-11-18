import React from "react";

export const MenuSkeletonCard: React.FC = () => {
  return (
    <div
      className="bg-white rounded-3xl overflow-hidden border border-[#EADCD2] shadow-sm flex flex-col justify-between"
      aria-hidden="true"
    >
      <div>
        {/* Shimmer Image Box */}
        <div className="relative aspect-[4/3] w-full shimmer-card border-b border-[#EADCD2]/40" />

        {/* Shimmer Content */}
        <div className="p-6 space-y-4">
          <div className="h-3 w-24 shimmer-line" />
          <div className="h-6 w-3/4 shimmer-line" />
          <div className="space-y-2 pt-1">
            <div className="h-3.5 w-full shimmer-line" />
            <div className="h-3.5 w-5/6 shimmer-line" />
          </div>

          <div className="pt-2 border-t border-[#EADCD2]/70">
            <div className="h-3 w-1/2 shimmer-line" />
          </div>

          {/* Shimmer Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            <div className="h-5 w-16 shimmer-line !rounded-md" />
            <div className="h-5 w-20 shimmer-line !rounded-md" />
            <div className="h-5 w-14 shimmer-line !rounded-md" />
          </div>
        </div>
      </div>

      {/* Shimmer Bottom Actions */}
      <div className="p-6 pt-0 flex gap-2">
        <div className="h-10 flex-1 shimmer-card rounded-xl" />
        <div className="h-10 w-10 shimmer-card rounded-xl" />
      </div>
    </div>
  );
};
