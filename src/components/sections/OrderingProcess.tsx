import React from "react";
import { MessageSquareText, Palette, ChefHat, Truck, Info } from "lucide-react";
import { servingGuides } from "@/data/cakes";

export const OrderingProcess: React.FC = () => {
  const steps = [
    {
      num: "01",
      icon: MessageSquareText,
      title: "Inquire & Share Vision",
      desc: "Fill our custom cake form with your event date, estimated guest count, theme ideas, and any reference photos you love.",
    },
    {
      num: "02",
      icon: Palette,
      title: "Design & Flavor Quote",
      desc: "We review your requirements, confirm date availability, recommend tier sizes, and provide a clear, transparent quote.",
    },
    {
      num: "03",
      icon: ChefHat,
      title: "Handcrafted with Care",
      desc: "Your cake is baked fresh to order in our Livingston Hill NE studio, sculpted, and decorated with patient artisanal attention.",
    },
    {
      num: "04",
      icon: Truck,
      title: "Studio Pickup or Delivery",
      desc: "Carefully boxed with internal support dowels for safe transport. Pick up at our Calgary studio or arrange local delivery.",
    },
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-[#FAF1EF] border-b border-[#EADCD2]">
      <div className="site-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C87D7E]">
            Effortless Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#382824]">
            How Custom Ordering Works
          </h2>
          <p className="text-sm sm:text-base text-[#6B5550]">
            From your initial inspiration to the first delicious slice, here is our simple four-step process.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white p-7 rounded-3xl border border-[#EADCD2] shadow-sm hover-lift flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-bold text-[#EADCD2] group-hover:text-[#C87D7E] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-[#FAF1EF] flex items-center justify-center text-[#C87D7E]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#382824]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#6B5550] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cake Serving Guide Table */}
        <div className="mt-16 bg-white rounded-3xl p-6 sm:p-10 border border-[#EADCD2] shadow-sm">
          <div className="max-w-xl mb-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C87D7E]">
              Planning Your Party
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#382824] mt-1">
              Serving Size & Tier Guide
            </h3>
            <p className="text-xs sm:text-sm text-[#6B5550] mt-1">
              Unsure which size fits your gathering? Use our guide below as a reference.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[#EADCD2] text-xs font-semibold uppercase tracking-wider text-[#9B827C]">
                  <th className="py-3 px-4">Cake Dimensions</th>
                  <th className="py-3 px-4">Portions / Servings</th>
                  <th className="py-3 px-4">Recommended Event</th>
                  <th className="py-3 px-4">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EADCD2]/70 text-[#382824]">
                {servingGuides.map((guide, idx) => (
                  <tr key={idx} className="hover:bg-[#FFF9F3]/60 transition-colors">
                    <td className="py-4 px-4 font-semibold text-[#382824]">
                      {guide.tiers}
                    </td>
                    <td className="py-4 px-4 tabular-nums text-[#C87D7E] font-medium">
                      {guide.servings}
                    </td>
                    <td className="py-4 px-4 text-[#6B5550]">
                      {guide.recommendedEvent}
                    </td>
                    <td className="py-4 px-4 text-xs text-[#9B827C]">
                      {guide.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs text-[#9B827C]">
            <Info className="w-4 h-4 text-[#C87D7E] flex-shrink-0" />
            <span>Serving counts are based on standard 1&quot; × 2&quot; event slices. For dessert-portion sizes (larger slices), we recommend sizing up one tier.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

