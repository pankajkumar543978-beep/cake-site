"use client";

import React, { useState } from "react";
import {
  Calendar,
  Send,
  MessageCircle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { businessData } from "@/data/business";
import { cakeCategories, flavorCatalog } from "@/data/cakes";

interface FormData {
  name: string;
  phone: string;
  eventDate: string;
  servings: string;
  category: string;
  flavor: string;
  designNotes: string;
  fulfillment: "pickup" | "delivery";
}

export const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    eventDate: "",
    servings: "20-25 Servings (8-inch single tier)",
    category: "Birthday Cakes",
    flavor: "Madagascar Vanilla Bean",
    designNotes: "",
    fulfillment: "pickup",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isRush, setIsRush] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }

    if (name === "eventDate" && value) {
      const selected = new Date(value);
      const today = new Date();
      const diffDays = Math.ceil(
        (selected.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
      );
      setIsRush(diffDays >= 0 && diffDays <= 2);
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.phone.trim()) newErrors.phone = "Please enter your phone number";
    if (!formData.eventDate) newErrors.eventDate = "Please choose a date";
    if (!formData.designNotes.trim())
      newErrors.designNotes = "Please tell us what cake design or theme you have in mind";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateMessageText = (): string => {
    return (
      `Hi Sia! I'd like to get a quote for a custom cake:%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Event Date:* ${encodeURIComponent(formData.eventDate)}${isRush ? " (⚡ LAST-MINUTE RUSH)" : ""}%0A` +
      `*Guest Count / Size:* ${encodeURIComponent(formData.servings)}%0A` +
      `*Cake Style:* ${encodeURIComponent(formData.category)}%0A` +
      `*Flavor:* ${encodeURIComponent(formData.flavor)}%0A` +
      `*Order Type:* ${formData.fulfillment === "pickup" ? "Studio Pickup (Livingston NE)" : "Calgary Delivery"}%0A` +
      `*Design Idea:* ${encodeURIComponent(formData.designNotes)}`
    );
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    const text = generateMessageText();
    const whatsappNum = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "13683997686";
    const url = `https://wa.me/${whatsappNum}?text=${text}`;
    window.open(url, "_blank");
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    const subject = encodeURIComponent(
      `Cake Inquiry: ${formData.name} (${formData.eventDate})`
    );
    const body = generateMessageText().replace(/%0A/g, "\n");
    const emailTo = process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "contact@cakesbysia.ca";
    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="enquiry" className="py-12 md:py-20 bg-[#FFF9F3] border-b border-[#EADCD2]">
      <div className="site-container">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-2 mb-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#382824]">
              Request a Custom Quote
            </h2>
            <p className="text-xs sm:text-sm text-[#6B5550]">
              Tell Sia your date, guest count, and design idea. We will confirm pricing and availability directly.
            </p>
          </div>

          {submitted && (
            <div className="mb-6 p-4 rounded-2xl bg-[#FAF1EF] border border-[#C87D7E]/40 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#C87D7E] flex-shrink-0 mt-0.5" />
              <div className="text-xs text-[#6B5550] space-y-1">
                <p className="font-semibold text-[#382824]">Quote details ready!</p>
                <p>
                  If your chat didn&apos;t open, you can also reach Sia directly at{" "}
                  <a href={`tel:${businessData.phone}`} className="font-semibold text-[#382824] underline">
                    {businessData.phoneFormatted}
                  </a>.
                </p>
              </div>
            </div>
          )}

          {/* Simple Clean Form */}
          <form
            onSubmit={handleWhatsAppSubmit}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EADCD2] shadow-sm space-y-5"
          >
            {isRush && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#FAF1EF] border border-[#C6A36A] text-[#382824] text-xs">
                <Sparkles className="w-4 h-4 text-[#C6A36A] flex-shrink-0" />
                <span>
                  <strong>Short-Notice Order:</strong> Your event is within 48 hours. Sia accommodates rush orders based on schedule!
                </span>
              </div>
            )}

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#382824]">
                  Your Name <span className="text-[#C87D7E]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Sonia Sharma"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#382824] focus:outline-none focus:ring-2 focus:ring-[#C87D7E] transition-all ${
                    errors.name ? "border-red-400 bg-red-50/20" : "border-[#EADCD2] bg-[#FAF1EF]/40"
                  }`}
                />
                {errors.name && <p className="text-[11px] text-red-500">{errors.name}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#382824]">
                  Phone Number <span className="text-[#C87D7E]">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 403-000-0000"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#382824] focus:outline-none focus:ring-2 focus:ring-[#C87D7E] transition-all ${
                    errors.phone ? "border-red-400 bg-red-50/20" : "border-[#EADCD2] bg-[#FAF1EF]/40"
                  }`}
                />
                {errors.phone && <p className="text-[11px] text-red-500">{errors.phone}</p>}
              </div>
            </div>

            {/* Event Date & Servings */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#382824]">
                  Event Date <span className="text-[#C87D7E]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#382824] focus:outline-none focus:ring-2 focus:ring-[#C87D7E] transition-all ${
                      errors.eventDate ? "border-red-400 bg-red-50/20" : "border-[#EADCD2] bg-[#FAF1EF]/40"
                    }`}
                  />
                  <Calendar className="w-4 h-4 text-[#9B827C] absolute right-3 top-3 pointer-events-none" />
                </div>
                {errors.eventDate && <p className="text-[11px] text-red-500">{errors.eventDate}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#382824]">
                  Estimated Guests / Servings
                </label>
                <select
                  name="servings"
                  value={formData.servings}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADCD2] bg-[#FAF1EF]/40 text-sm text-[#382824] focus:outline-none focus:ring-2 focus:ring-[#C87D7E] transition-all"
                >
                  <option value="6-10 Servings (Mini cake / Cupcakes)">6 – 10 Servings (Mini cake / Cupcakes)</option>
                  <option value="12-15 Servings (6-inch tall single tier)">12 – 15 Servings (6-inch tall single tier)</option>
                  <option value="20-25 Servings (8-inch single tier)">20 – 25 Servings (8-inch single tier)</option>
                  <option value="30-40 Servings (Two-tier celebration)">30 – 40 Servings (Two-tier celebration)</option>
                  <option value="50-75 Servings (Grand Two-tier / Three-tier)">50 – 75 Servings (Grand Two-tier / Three-tier)</option>
                  <option value="80+ Servings (Large Wedding / Event)">80+ Servings (Large Wedding / Event)</option>
                </select>
              </div>
            </div>

            {/* Cake Category & Flavor */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#382824]">
                  Cake Style
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADCD2] bg-[#FAF1EF]/40 text-sm text-[#382824] focus:outline-none focus:ring-2 focus:ring-[#C87D7E] transition-all"
                >
                  {cakeCategories.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#382824]">
                  Flavor Preference
                </label>
                <select
                  name="flavor"
                  value={formData.flavor}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADCD2] bg-[#FAF1EF]/40 text-sm text-[#382824] focus:outline-none focus:ring-2 focus:ring-[#C87D7E] transition-all"
                >
                  {flavorCatalog.map((f, idx) => (
                    <option key={idx} value={f.name}>
                      {f.name}
                    </option>
                  ))}
                  <option value="Indian Fusion (Rasmalai, Gulab Jamun, Saffron)">Indian Fusion (Rasmalai, Gulab Jamun, Saffron)</option>
                  <option value="Eggless / Custom Flavor">Eggless / Other Custom Flavor</option>
                </select>
              </div>
            </div>

            {/* Pickup or Delivery */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#382824]">
                Pickup or Delivery
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label
                  className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${
                    formData.fulfillment === "pickup"
                      ? "border-[#C87D7E] bg-[#FAF1EF] text-[#382824] font-medium"
                      : "border-[#EADCD2] bg-white text-[#6B5550]"
                  }`}
                >
                  <input
                    type="radio"
                    name="fulfillment"
                    value="pickup"
                    checked={formData.fulfillment === "pickup"}
                    onChange={() =>
                      setFormData((prev) => ({ ...prev, fulfillment: "pickup" }))
                    }
                    className="accent-[#C87D7E]"
                  />
                  <div className="text-xs">
                    <p className="font-semibold text-[#382824]">Livingston Pickup</p>
                    <p className="text-[10px] text-[#9B827C]">Daily 7 AM – 8 PM</p>
                  </div>
                </label>

                <label
                  className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${
                    formData.fulfillment === "delivery"
                      ? "border-[#C87D7E] bg-[#FAF1EF] text-[#382824] font-medium"
                      : "border-[#EADCD2] bg-white text-[#6B5550]"
                  }`}
                >
                  <input
                    type="radio"
                    name="fulfillment"
                    value="delivery"
                    checked={formData.fulfillment === "delivery"}
                    onChange={() =>
                      setFormData((prev) => ({ ...prev, fulfillment: "delivery" }))
                    }
                    className="accent-[#C87D7E]"
                  />
                  <div className="text-xs">
                    <p className="font-semibold text-[#382824]">Calgary Delivery</p>
                    <p className="text-[10px] text-[#9B827C]">Coordinated with order</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Design Notes */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#382824]">
                Cake Design Idea & Special Requests <span className="text-[#C87D7E]">*</span>
              </label>
              <textarea
                name="designNotes"
                rows={3}
                value={formData.designNotes}
                onChange={handleChange}
                placeholder="Mention cake colors, theme, text on cake, age, floral accents, or attach a photo when chatting on WhatsApp..."
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#382824] focus:outline-none focus:ring-2 focus:ring-[#C87D7E] transition-all ${
                  errors.designNotes ? "border-red-400 bg-red-50/20" : "border-[#EADCD2] bg-[#FAF1EF]/40"
                }`}
              />
              {errors.designNotes && (
                <p className="text-[11px] text-red-500">{errors.designNotes}</p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#25D366] text-white hover:bg-[#20ba59] text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send via WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleEmailSubmit}
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#382824] text-[#FFF9F3] hover:bg-[#523A34] text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
              >
                <Send className="w-3.5 h-3.5 text-[#D99A9B]" />
                <span>Email Draft</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
