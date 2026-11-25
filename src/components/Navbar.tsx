"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { SmileyWinkDoodle } from "@/components/SmileyWinkDoodle";

export function Navbar() {
  const { setIsReservationOpen, setIsSearchOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement?.scrollTop ||
        document.body?.scrollTop ||
        0;
      setIsScrolled(scrollY > 15);
    };

    handleScroll();

    // Sentinel Intersection Observer for 100% reliable mobile & desktop scroll detection
    const sentinel = document.getElementById("navbar-scroll-sentinel");
    let observer: IntersectionObserver | null = null;
    if (sentinel && typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        ([entry]) => {
          setIsScrolled(!entry.isIntersecting);
        },
        { threshold: 0 }
      );
      observer.observe(sentinel);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleScroll, { passive: true });
    window.addEventListener("wheel", handleScroll, { passive: true });

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Invisible top sentinel for guaranteed 100% mobile scroll tracking */}
      <div
        id="navbar-scroll-sentinel"
        className="absolute top-0 left-0 w-full h-[15px] pointer-events-none"
        aria-hidden="true"
      />
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 will-change-transform ${
          isScrolled || mobileMenuOpen
            ? "bg-[#22130C]/95 backdrop-blur-md py-3 shadow-lg shadow-black/25"
            : "bg-transparent py-4 sm:py-5"
        }`}
        style={{
          WebkitBackdropFilter:
            isScrolled || mobileMenuOpen ? "blur(12px)" : "none",
        }}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group cursor-pointer shrink-0"
        >
          <span
            className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-serif leading-none shrink-0"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ambika
          </span>
          <SmileyWinkDoodle className="transition-transform group-hover:scale-110 duration-200" />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-200">
          <Link
            href="#home"
            className="hover:text-[#E5A83B] transition-colors relative py-1 text-white"
          >
            Home
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E5A83B] rounded-full scale-100" />
          </Link>
          <Link
            href="#creations"
            className="hover:text-[#E5A83B] transition-colors py-1"
          >
            Products
          </Link>
          <Link
            href="#story"
            className="hover:text-[#E5A83B] transition-colors py-1"
          >
            About Us
          </Link>
          <Link
            href="#menu"
            className="hover:text-[#E5A83B] transition-colors py-1"
          >
            Crafted Menus
          </Link>
          <Link
            href="#deals"
            className="hover:text-[#E5A83B] transition-colors py-1 flex items-center gap-1 text-[#E5A83B]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Special Deals
          </Link>
          <Link
            href="#testimonials"
            className="hover:text-[#E5A83B] transition-colors py-1"
          >
            Reviews
          </Link>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Search Trigger */}
          <button
            onClick={() => setIsSearchOpen(true)}
            aria-label="Search bakery"
            className="p-2 text-stone-200 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Book A Cake CTA Button (Desktop only, mobile accesses via drawer) */}
          <button
            onClick={() => setIsReservationOpen(true)}
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#E5A83B] text-[#22130C] font-semibold text-xs tracking-wider uppercase hover:bg-[#D49323] transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Book a cake
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 text-stone-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#22130C] border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-3 text-base font-medium text-stone-200">
            <Link
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#E5A83B] transition-colors py-1"
            >
              Home
            </Link>
            <Link
              href="#creations"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#E5A83B] transition-colors py-1"
            >
              Products & Creations
            </Link>
            <Link
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#E5A83B] transition-colors py-1"
            >
              About Ambika
            </Link>
            <Link
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#E5A83B] transition-colors py-1"
            >
              Crafted Menus
            </Link>
            <Link
              href="#deals"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#E5A83B] transition-colors py-1 text-[#E5A83B]"
            >
              Special Deals (10% Off)
            </Link>
            <Link
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#E5A83B] transition-colors py-1"
            >
              Customer Reviews
            </Link>
          </nav>
          <div className="pt-2 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsReservationOpen(true);
              }}
              className="w-full py-3 rounded-full bg-[#E5A83B] text-[#22130C] font-semibold text-sm tracking-wider uppercase text-center hover:bg-[#D49323] transition-colors"
            >
              Book a cake
            </button>
          </div>
        </div>
      )}
    </header>
    </>
  );
}
