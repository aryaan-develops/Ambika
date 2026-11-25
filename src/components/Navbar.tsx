"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { SmileyWinkDoodle } from "@/components/SmileyWinkDoodle";

const DOODLE_BALLOONS = [
  { id: 1, fill: "#F28482", left: "8%", delay: 0.05, duration: 3.4, sway: 12, tilt: -8, size: 32 },
  { id: 2, fill: "#E5A83B", left: "22%", delay: 0.25, duration: 3.8, sway: -14, tilt: 7, size: 36 },
  { id: 3, fill: "#84DCC6", left: "38%", delay: 0.12, duration: 3.2, sway: 10, tilt: -5, size: 30 },
  { id: 4, fill: "#7CC6FE", left: "54%", delay: 0.4, duration: 4.1, sway: -12, tilt: 9, size: 35 },
  { id: 5, fill: "#FF9F68", left: "70%", delay: 0.18, duration: 3.6, sway: 15, tilt: -7, size: 33 },
  { id: 6, fill: "#B5838D", left: "84%", delay: 0.5, duration: 3.9, sway: -10, tilt: 6, size: 31 },
  { id: 7, fill: "#6BCB77", left: "15%", delay: 0.65, duration: 3.5, sway: 14, tilt: -6, size: 28 },
];

export function Navbar() {
  const { setIsReservationOpen } = useCart();
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

  const handleMobileSectionClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Invisible top sentinel for guaranteed 100% mobile scroll tracking */}
      <div
        id="navbar-scroll-sentinel"
        className="absolute top-0 left-0 w-full h-[15px] pointer-events-none"
        aria-hidden="true"
      />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          mobileMenuOpen
            ? "bg-[#FAF5EE]/95 backdrop-blur-xl py-3 shadow-lg shadow-[#22130C]/10 md:bg-[#22130C]/95"
            : isScrolled
              ? "bg-[#22130C]/95 backdrop-blur-md py-3 shadow-lg shadow-black/25"
              : "bg-transparent py-4 sm:py-5"
        }`}
        style={{
          WebkitBackdropFilter:
            isScrolled || mobileMenuOpen ? "blur(16px)" : "none",
        }}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group cursor-pointer shrink-0"
        >
          <span
            className={`text-2xl sm:text-3xl font-bold tracking-tight font-serif leading-none shrink-0 transition-colors ${
              mobileMenuOpen ? "text-[#22130C] md:text-white" : "text-white"
            }`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ambika
          </span>
          <SmileyWinkDoodle
            color={mobileMenuOpen ? "#22130C" : "#FFFFFF"}
            className="transition-transform group-hover:scale-110 duration-200"
          />
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
          {/* Book A Cake CTA Button (Desktop only, mobile accesses via drawer) */}
          <button
            type="button"
            onClick={() => setIsReservationOpen(true)}
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#E5A83B] text-[#22130C] font-semibold text-xs tracking-wider uppercase hover:bg-[#D49323] transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
          >
            Book a cake
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            className={`md:hidden p-2 rounded-lg transition-colors cursor-pointer ${
              mobileMenuOpen
                ? "text-[#22130C] hover:bg-[#22130C]/10"
                : "text-stone-200 hover:text-white hover:bg-white/10"
            }`}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Light Glassy Mobile Drawer + Floating Doodle Color Balloons */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="md:hidden relative overflow-hidden bg-[#FAF5EE]/95 backdrop-blur-xl border-b border-[#22130C]/10 px-6 pb-6 pt-3 space-y-4"
          >
            {/* Colorful Hand-Drawn Doodle Balloons Flying Up & Disappearing Off Top */}
            <div
              className="pointer-events-none absolute inset-0 overflow-hidden z-0"
              aria-hidden="true"
            >
              {DOODLE_BALLOONS.map((b) => (
                <motion.div
                  key={b.id}
                  initial={{ y: 310, opacity: 0, scale: 0.75, rotate: b.tilt }}
                  animate={{
                    y: -95,
                    x: [0, b.sway, -b.sway * 0.55, 0],
                    opacity: [0, 0.95, 0.95, 0],
                    scale: [0.8, 1.05, 1, 0.9],
                    rotate: [b.tilt, -b.tilt, b.tilt * 0.7],
                  }}
                  transition={{
                    duration: b.duration,
                    delay: b.delay,
                    ease: "easeOut",
                  }}
                  style={{ left: b.left, width: b.size }}
                  className="absolute top-0"
                >
                  <svg viewBox="0 0 36 58" fill="none" className="w-full h-auto">
                    <path
                      d="M18 3C10.5 3 5 9.2 5 17.5C5 26 12.2 33.8 18 35.5C23.8 33.8 31 26 31 17.5C31 9.2 25.5 3 18 3Z"
                      fill={b.fill}
                      stroke="#22130C"
                      strokeWidth="1.9"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.5 11.5C12.2 8.8 14.5 7 17.2 6.8"
                      stroke="#FFFFFF"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M16 36L20 36L18 39.5Z"
                      fill={b.fill}
                      stroke="#22130C"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 39.5Q14.5 44.5 18.5 48.5Q22 52.5 17 56.5"
                      stroke="#22130C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </motion.div>
              ))}
            </div>

            <nav className="relative z-10 flex flex-col space-y-1 text-base font-semibold text-[#22130C]">
              <button
                type="button"
                onClick={() => handleMobileSectionClick("home")}
                className="text-left hover:bg-[#E5A83B]/15 rounded-xl px-3 py-2 transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => handleMobileSectionClick("creations")}
                className="text-left hover:bg-[#E5A83B]/15 rounded-xl px-3 py-2 transition-colors cursor-pointer"
              >
                Products &amp; Creations
              </button>
              <button
                type="button"
                onClick={() => handleMobileSectionClick("story")}
                className="text-left hover:bg-[#E5A83B]/15 rounded-xl px-3 py-2 transition-colors cursor-pointer"
              >
                About Ambika
              </button>
              <button
                type="button"
                onClick={() => handleMobileSectionClick("menu")}
                className="text-left hover:bg-[#E5A83B]/15 rounded-xl px-3 py-2 transition-colors cursor-pointer"
              >
                Crafted Menus
              </button>
              <button
                type="button"
                onClick={() => handleMobileSectionClick("deals")}
                className="text-left hover:bg-[#E5A83B]/15 rounded-xl px-3 py-2 transition-colors text-[#B56C2D] font-bold cursor-pointer"
              >
                Special Deals (10% Off)
              </button>
              <Link
                href="/celebrate"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:bg-[#E5A83B]/15 rounded-xl px-3 py-2 transition-colors"
              >
                Bouquets &amp; Invites
              </Link>
              <button
                type="button"
                onClick={() => handleMobileSectionClick("testimonials")}
                className="text-left hover:bg-[#E5A83B]/15 rounded-xl px-3 py-2 transition-colors cursor-pointer"
              >
                Customer Reviews
              </button>
            </nav>
            <div className="relative z-10 pt-2 border-t border-[#22130C]/10">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsReservationOpen(true);
                }}
                className="w-full py-3 rounded-full bg-[#E5A83B] text-[#22130C] font-bold text-sm tracking-wider uppercase text-center hover:bg-[#D49323] shadow-sm transition-colors cursor-pointer"
              >
                Book a cake
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    {mobileMenuOpen && (
      <div
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
        className="md:hidden fixed inset-0 bg-black/45 backdrop-blur-[2px] z-40"
      />
    )}
    </>
  );
}
