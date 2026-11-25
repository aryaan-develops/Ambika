"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Plus, Eye, Star } from "lucide-react";
import { FEATURED_CREATIONS } from "@/data/bakery-data";
import { useCart } from "@/context/CartContext";

const MARQUEE_ITEMS = [...FEATURED_CREATIONS, ...FEATURED_CREATIONS];
const MARQUEE_DURATION_MS = 26000;

export function CreationsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const exploreTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isExploring, setIsExploring] = useState(false);
  const { addItem, setSelectedProduct } = useCart();

  useEffect(() => {
    return () => {
      if (exploreTimerRef.current) clearTimeout(exploreTimerRef.current);
    };
  }, []);

  const shiftMarquee = (deltaMs: number) => {
    const anim = trackRef.current?.getAnimations()[0];
    if (!anim) return;
    const current = typeof anim.currentTime === "number" ? anim.currentTime : 0;
    const next = current + deltaMs;
    anim.currentTime =
      ((next % MARQUEE_DURATION_MS) + MARQUEE_DURATION_MS) % MARQUEE_DURATION_MS;
  };

  const scroll = (direction: "left" | "right") => {
    shiftMarquee(direction === "right" ? 4000 : -4000);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    trackRef.current?.getAnimations()[0]?.pause();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartRef.current || !trackRef.current) return;
    const touch = e.touches[0];
    const dx = touchStartRef.current.x - touch.clientX;
    const dy = touchStartRef.current.y - touch.clientY;

    if (Math.abs(dx) > Math.abs(dy)) {
      const halfWidth = trackRef.current.scrollWidth / 2 || 1900;
      shiftMarquee((dx / halfWidth) * MARQUEE_DURATION_MS);
    }
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchRelease = () => {
    touchStartRef.current = null;
    trackRef.current?.getAnimations()[0]?.play();
  };

  const handleExploreClick = () => {
    if (exploreTimerRef.current) clearTimeout(exploreTimerRef.current);
    setIsExploring(true);
    scroll("right");
    exploreTimerRef.current = setTimeout(() => {
      setIsExploring(false);
    }, 320);
  };

  return (
    <section id="creations" className="py-16 sm:py-24 bg-[#FAF5EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <button
                type="button"
                onClick={handleExploreClick}
                aria-label="Explore next creation"
                className={`relative inline-flex items-center px-3 py-1 rounded-lg border-2 border-[#22130C] font-semibold text-xs tracking-wider uppercase text-[#22130C] cursor-pointer select-none transition-all duration-150 ${
                  isExploring
                    ? "translate-x-[2px] translate-y-[2px] shadow-none bg-[#E5A83B] scale-95"
                    : "bg-white/60 shadow-[2px_2px_0px_#22130C] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#22130C] hover:bg-[#FEF2E4] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                }`}
              >
                {isExploring && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-1 rounded-xl border-2 border-[#E5A83B] animate-ping opacity-75"
                  />
                )}
                <span>Explore</span>
              </button>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8C7366]">
                Our Daily Artisanal Bakes
              </span>
            </div>
            <h2
              className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#22130C] font-serif"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our Delicious Creations
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <p className="max-w-md text-sm text-[#8C7366] leading-relaxed">
              Since our first loaf came out of the oven, we&apos;ve been dedicated to
              bringing you fresh, wholesome, and delicious baked goods.
            </p>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                onClick={() => scroll("left")}
                aria-label="Previous item"
                className="w-10 h-10 rounded-full bg-white border border-[#22130C]/10 text-[#22130C] flex items-center justify-center hover:bg-[#E5A83B] hover:text-[#22130C] transition-all duration-200 shadow-sm active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Next item"
                className="w-10 h-10 rounded-full bg-white border border-[#22130C]/10 text-[#22130C] flex items-center justify-center hover:bg-[#E5A83B] hover:text-[#22130C] transition-all duration-200 shadow-sm active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Seamless Infinite Horizontal Self-Scrolling Marquee */}
      <div
        className="relative w-full overflow-hidden pb-8 pt-4"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchRelease}
        onTouchCancel={handleTouchRelease}
      >
        {/* Subtle edge fades on larger screens */}
        <div className="hidden md:block pointer-events-none absolute inset-y-0 left-0 w-12 lg:w-20 bg-gradient-to-r from-[#FAF5EE] to-transparent z-10" />
        <div className="hidden md:block pointer-events-none absolute inset-y-0 right-0 w-12 lg:w-20 bg-gradient-to-l from-[#FAF5EE] to-transparent z-10" />

        <div
          ref={trackRef}
          className="flex w-max gap-6 pr-6 will-change-transform creations-marquee-track"
        >
          {MARQUEE_ITEMS.map((product, index) => {
            const isDuplicate = index >= FEATURED_CREATIONS.length;
            return (
              <div
                key={`${product.id}-${index}`}
                aria-hidden={isDuplicate}
                className="flex-shrink-0 w-[260px] sm:w-[280px] lg:w-[300px] group"
              >
                {/* Pastel Card Backdrop */}
                <div
                  className={`relative rounded-3xl p-6 ${product.backdropColor} transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl border border-black/5 flex flex-col items-center justify-center min-h-[320px]`}
                >
                  {/* Badge if available */}
                  {product.badge && (
                    <span className="absolute top-4 left-4 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/80 text-[#22130C] shadow-xs">
                      {product.badge}
                    </span>
                  )}

                  {/* Rating pill */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/80 px-2 py-0.5 rounded-full text-xs font-semibold text-[#22130C]">
                    <Star className="w-3 h-3 fill-[#E5A83B] text-[#E5A83B]" />
                    <span>{product.rating}</span>
                  </div>

                  {/* Baked Good Image */}
                  <div
                    onClick={() => setSelectedProduct(product)}
                    className="relative w-44 h-44 sm:w-48 sm:h-48 my-2 cursor-pointer transition-transform duration-300 group-hover:scale-105"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover rounded-2xl drop-shadow-md"
                      sizes="(max-width: 640px) 180px, 200px"
                    />
                  </div>

                  {/* Hover overlay quick buttons */}
                  <div className="flex items-center gap-2 mt-2 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
                    <button
                      tabIndex={isDuplicate ? -1 : undefined}
                      onClick={() => setSelectedProduct(product)}
                      className="px-3 py-1.5 rounded-full bg-white/90 text-[#22130C] text-xs font-semibold hover:bg-white flex items-center gap-1 shadow-sm transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" /> Details
                    </button>
                    <button
                      tabIndex={isDuplicate ? -1 : undefined}
                      onClick={() => addItem(product, 1)}
                      className="px-3 py-1.5 rounded-full bg-[#E5A83B] text-[#22130C] text-xs font-bold hover:bg-[#D49323] flex items-center gap-1 shadow-sm transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add (₹{product.price})
                    </button>
                  </div>
                </div>

                {/* Title & Category Label Below */}
                <div className="mt-4 text-center">
                  <h3
                    className="text-lg font-bold text-[#22130C] tracking-tight hover:text-[#D49323] transition-colors cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#8C7366] capitalize mt-0.5">
                    Handcrafted {product.category} • ₹{product.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Component-scoped marquee keyframes for instant HMR and reliable compositor motion */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes creationsMarquee {
              0% {
                transform: translate3d(0, 0, 0);
              }
              100% {
                transform: translate3d(-50%, 0, 0);
              }
            }
            .creations-marquee-track {
              animation: creationsMarquee 26s linear infinite;
            }
            @media (hover: hover) {
              .creations-marquee-track:hover {
                animation-play-state: paused;
              }
            }
          `,
        }}
      />
    </section>
  );
}
