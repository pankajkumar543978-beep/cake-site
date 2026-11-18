import React from "react";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  ExternalLink,
  Navigation,
  Sparkles,
} from "lucide-react";
import { businessData } from "@/data/business";

export const ContactLocation: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FFF9F3]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Contact Cards & Operating Hours */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C87D7E]">
                Livingston Studio
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#382824]">
                Location & Ordering Hours
              </h2>
              <p className="text-sm sm:text-base text-[#6B5550]">
                We operate from Livingston Hill NE in Northeast Calgary. In-person pickups and local delivery coordination available daily.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-4">
              {/* Address Card */}
              <div className="bg-white p-5 rounded-2xl border border-[#EADCD2] shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF1EF] flex items-center justify-center text-[#C87D7E] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-sm">
                  <p className="font-semibold text-[#382824]">Studio Location</p>
                  <p className="text-[#6B5550]">{businessData.address.fullFormatted}</p>
                  <p className="text-xs text-[#9B827C]">Plus Code: {businessData.googleMaps.plusCode}</p>
                  <a
                    href={businessData.googleMaps.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#C87D7E] hover:underline pt-1"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp Card */}
              <div className="bg-white p-5 rounded-2xl border border-[#EADCD2] shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF1EF] flex items-center justify-center text-[#C87D7E] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-sm">
                  <p className="font-semibold text-[#382824]">Direct Phone & Inquiries</p>
                  <p className="text-[#6B5550]">
                    Call or text:{" "}
                    <a
                      href={`tel:${businessData.phone}`}
                      className="font-bold text-[#382824] hover:text-[#C87D7E]"
                    >
                      {businessData.phoneFormatted}
                    </a>
                  </p>
                  <div className="pt-2 flex items-center gap-3">
                    <a
                      href={businessData.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#25D366]/15 text-[#128C7E] hover:bg-[#25D366]/25 text-xs font-semibold transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours Table */}
              <div className="bg-white p-5 rounded-2xl border border-[#EADCD2] shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF1EF] flex items-center justify-center text-[#C87D7E] flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-2 text-sm w-full">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-[#382824]">Operating Schedule</p>
                    <span className="text-[11px] font-semibold text-[#25D366] bg-[#25D366]/10 px-2 py-0.5 rounded-full">
                      Open 7 Days / Week
                    </span>
                  </div>
                  <div className="text-xs space-y-1 text-[#6B5550] border-t border-[#EADCD2] pt-2">
                    <div className="flex justify-between py-1">
                      <span>Monday – Sunday</span>
                      <span className="font-semibold text-[#382824]">7:00 AM – 8:00 PM</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#C87D7E] pt-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Last-minute orders accommodated based on baking schedule.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Location Card */}
          <div className="lg:col-span-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EADCD2] shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-medium text-[#382824]">
                    Find Cakes by Sia
                  </h3>
                  <p className="text-xs text-[#9B827C]">Livingston Hill NE, Calgary, AB</p>
                </div>
                <a
                  href={businessData.googleMaps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#382824] text-[#FFF9F3] text-xs font-medium hover:bg-[#523A34] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#D99A9B]" />
                  <span>Directions</span>
                </a>
              </div>

              {/* Map Embed Frame */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#EADCD2] bg-[#FAF1EF]">
                <iframe
                  title="Cakes by Sia Calgary Google Maps Location"
                  src="https://maps.google.com/maps?q=51.1865651,-114.0556996&hl=en&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="p-4 rounded-xl bg-[#FAF1EF] text-xs text-[#6B5550] flex items-center justify-between">
                <span>Livingston NE, Calgary, AB T3P 1P1</span>
                <a
                  href={businessData.googleMaps.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C87D7E] font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

