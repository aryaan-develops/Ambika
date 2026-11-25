"use client";

import React from "react";
import Image from "next/image";
import { CookieDoodle } from "./CookieDoodle";
import { Heart, Sparkles, Award } from "lucide-react";

export function OurStory() {
  return (
    <section id="story" className="py-20 sm:py-28 bg-[#FAF5EE] relative overflow-hidden">
      {/* Decorative Cookie Doodle on Left */}
      <div className="absolute bottom-10 left-4 sm:left-12 opacity-85 animate-float pointer-events-none z-10">
        <CookieDoodle size={80} withBite={true} />
      </div>

      {/* Faint Donut Sketch on Right */}
      <div className="absolute top-12 right-12 w-28 h-28 border border-[#22130C]/10 rounded-full pointer-events-none opacity-40 flex items-center justify-center">
        <div className="w-12 h-12 border border-[#22130C]/10 rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        {/* Section Heading with Framed [Baked] Badge */}
        <div className="inline-flex items-center justify-center mb-6">
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#22130C] font-serif flex items-center flex-wrap justify-center gap-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span>Our Story,</span>
            <span className="inline-block px-3 sm:px-4 py-0.5 sm:py-1 rounded-xl border-2 border-[#22130C] bg-[#FCEFE3] text-[#22130C] text-2xl sm:text-4xl md:text-5xl shadow-[3px_3px_0px_#22130C]">
              Baked
            </span>
            <span>with Love</span>
          </h2>
        </div>

        {/* Editorial Body with Embedded Inline Photo Chips */}
        <div className="mt-8 sm:mt-12 text-lg sm:text-2xl md:text-3xl leading-[2.1] sm:leading-[2.3] text-[#22130C] font-medium max-w-4xl mx-auto text-center sm:text-justify font-sans">
          <span>Since our first loaf </span>
          {/* Inline Photo Chip: Fresh Loaf */}
          <span className="inline-flex items-center align-middle mx-1.5 px-1 py-1 rounded-full bg-white border border-[#22130C]/15 shadow-sm transform -rotate-2 hover:rotate-0 transition-transform duration-200">
            <span className="relative w-10 h-6 sm:w-14 sm:h-8 rounded-full overflow-hidden block">
              <Image
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=200&q=80"
                alt="First baked sourdough loaf"
                fill
                className="object-cover"
              />
            </span>
          </span>
          <span>came out of the oven, </span>

          {/* Inline Icon Chip: Baker's Touch */}
          <span className="inline-flex items-center align-middle mx-1 px-2.5 py-0.5 rounded-full bg-[#E8F3EB] border border-[#22130C]/10 text-xs sm:text-sm font-semibold text-[#1C4532]">
            🧑‍🍳 Est. 2018
          </span>

          <span> we&apos;ve been dedicated to bringing you fresh, wholesome, and delicious baked goods. </span>

          <span>Every single recipe is made </span>
          {/* Inline Photo Chip: Hand Kneading Dough */}
          <span className="inline-flex items-center align-middle mx-1.5 px-1 py-1 rounded-full bg-white border border-[#22130C]/15 shadow-sm transform rotate-3 hover:rotate-0 transition-transform duration-200">
            <span className="relative w-10 h-6 sm:w-14 sm:h-8 rounded-full overflow-hidden block">
              <Image
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=200&q=80"
                alt="Pastry lamination"
                fill
                className="object-cover"
              />
            </span>
          </span>
          <span>from scratch using premium </span>

          {/* Inline Photo Chip: Butter & Farm Flour */}
          <span className="inline-flex items-center align-middle mx-1.5 px-1 py-1 rounded-full bg-white border border-[#22130C]/15 shadow-sm transform -rotate-1 hover:rotate-0 transition-transform duration-200">
            <span className="relative w-10 h-6 sm:w-14 sm:h-8 rounded-full overflow-hidden block">
              <Image
                src="https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=200&q=80"
                alt="Organic baking ingredients"
                fill
                className="object-cover"
              />
            </span>
          </span>
          <span>ingredients, unhurried fermentation, and lots of genuine love.</span>
        </div>

        {/* Value Pillars Row */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-4xl mx-auto pt-6 border-t border-[#22130C]/10">
          <div className="p-5 rounded-2xl bg-white/70 border border-[#22130C]/10 shadow-xs flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#FDEEE9] flex items-center justify-center text-[#7B241C] flex-shrink-0">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#22130C]">100% Pure Butter</h4>
              <p className="text-xs text-[#8C7366] mt-0.5">
                No palm oils or margarine. Only grass-fed, slow-churned butter.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/70 border border-[#22130C]/10 shadow-xs flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#E8F3EB] flex items-center justify-center text-[#1C4532] flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#22130C]">Wild Fermentation</h4>
              <p className="text-xs text-[#8C7366] mt-0.5">
                Slow 36-hour cold proofing for easy digestion and unmatched depth.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/70 border border-[#22130C]/10 shadow-xs flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#FEF2E4] flex items-center justify-center text-[#873600] flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#22130C]">Zero Artificial Additives</h4>
              <p className="text-xs text-[#8C7366] mt-0.5">
                Baked fresh every sunrise, never frozen or pre-packaged.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
