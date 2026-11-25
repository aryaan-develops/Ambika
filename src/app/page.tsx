"use client";

import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CreationsCarousel } from "@/components/CreationsCarousel";
import { OurStory } from "@/components/OurStory";
import { CraftedMenu } from "@/components/CraftedMenu";
import { BakingPassion } from "@/components/BakingPassion";
import { SweetDeals } from "@/components/SweetDeals";
import { PartyInviteSection } from "@/components/PartyInviteSection";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { ReservationModal } from "@/components/ReservationModal";
import { ProductModal } from "@/components/ProductModal";
import { SearchModal } from "@/components/SearchModal";

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#FAF5EE] text-[#22130C] flex flex-col selection:bg-[#E5A83B] selection:text-[#22130C]">
        {/* Sticky Header */}
        <Navbar />

        {/* Hero Section */}
        <main className="flex-1">
          <Hero />
          <CreationsCarousel />
          <OurStory />
          <CraftedMenu />
          <BakingPassion />
          <SweetDeals />
          <PartyInviteSection />
          <Testimonials />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Drawers & Overlays */}
        <CartDrawer />
        <ReservationModal />
        <ProductModal />
        <SearchModal />
      </div>
    </CartProvider>
  );
}
