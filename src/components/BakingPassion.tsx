"use client";

import React from "react";
import Image from "next/image";
import { Clock, Wheat, CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function BakingPassion() {
  const { setIsReservationOpen } = useCart();

  return (
    <section className="py-16 sm:py-20 bg-[#FAF5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark Cocoa Card Container matching reference */}
        <div className="bg-[#22130C] text-white rounded-3xl sm:rounded-[36px] overflow-hidden p-6 sm:p-12 lg:p-14 shadow-2xl relative">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E5A83B]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Baker Kneading Dough in Flour */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 group shadow-lg">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85"
                    alt="Artisan baker hand-kneading sourdough dough"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#22130C]/80 via-transparent to-transparent" />
                </div>

                {/* Floating Baker Credential Pill */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-3 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Wheat className="w-4 h-4 text-[#E5A83B]" />
                    <span className="font-semibold text-stone-200">
                      Slow 36-Hr Cold Leavening
                    </span>
                  </div>
                  <span className="text-[#E5A83B] font-bold">100% Sourdough</span>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative Copy & Action */}
            <div className="lg:col-span-6 space-y-6">
              <h2
                className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight font-serif"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Baking with <span className="text-[#E5A83B]">Passion</span> &amp;
                Purpose
              </h2>

              <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-light">
                Every pastry and sourdough loaf starts at 4:00 AM with living
                wild leaven, organic unbleached stone-ground flours, and pure
                cultured pasture butter. We believe real bakery craft cannot be
                rushed—it requires patience, instinct, and fire.
              </p>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-center gap-2 text-sm text-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-[#E5A83B] flex-shrink-0" />
                  <span>Single-estate stone milled flours</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-[#E5A83B] flex-shrink-0" />
                  <span>No commercial yeast additives</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-[#E5A83B] flex-shrink-0" />
                  <span>French AOP butter lamination</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-[#E5A83B] flex-shrink-0" />
                  <span>Baked fresh throughout the morning</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsReservationOpen(true)}
                  className="px-7 py-3.5 rounded-full bg-[#E5A83B] text-[#22130C] font-bold text-xs uppercase tracking-wider hover:bg-[#D49323] transition-all shadow-lg hover:scale-105 active:scale-95"
                >
                  Visit Our Bakery &amp; Cafe
                </button>
                <div className="flex items-center gap-2 text-xs text-stone-400">
                  <Clock className="w-4 h-4 text-[#E5A83B]" />
                  <span>Oven fires daily: 7:00 AM – 7:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
