import React from "react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Categories } from "@/components/sections/Categories";
import { FeaturedGallery } from "@/components/sections/FeaturedGallery";
import { OrderingProcess } from "@/components/sections/OrderingProcess";
import { Reviews } from "@/components/sections/Reviews";
import { InstagramGallery } from "@/components/sections/InstagramGallery";
import { ContactLocation } from "@/components/sections/ContactLocation";
import { PromotionalModal } from "@/components/ui/PromotionalModal";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <Categories />
        <FeaturedGallery />
        <OrderingProcess />
        <Reviews />
        <InstagramGallery />
        <ContactLocation />
      </main>

      <Footer />
      <MobileStickyBar />
      <PromotionalModal />
    </>
  );
}
