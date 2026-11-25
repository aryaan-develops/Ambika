"use client";

import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { TESTIMONIALS } from "@/data/bakery-data";
import { CookieDoodle } from "./CookieDoodle";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#FAF5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#22130C] font-serif flex items-center justify-center flex-wrap gap-2.5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span>Sweet Words from Our</span>
            <span className="inline-block px-3.5 py-1 rounded-xl border-2 border-[#22130C] bg-[#E8F3EB] text-[#1C4532] text-2xl sm:text-4xl shadow-[3px_3px_0px_#22130C]">
              Community
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#8C7366] leading-relaxed">
            Whether you&apos;re pausing for a morning cappuccino or taking a box of
            warm cookies home, here is what our neighbors say.
          </p>
        </div>

        {/* Customer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-3xl p-6 border border-[#22130C]/10 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Cookie Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5">
                    {[...Array(test.rating)].map((_, i) => (
                      <CookieDoodle
                        key={i}
                        size={22}
                        className="hover:scale-110 transition-transform"
                      />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-[#E5A83B] bg-[#22130C]/5 px-2.5 py-0.5 rounded-full">
                    {test.rating}.0
                  </span>
                </div>
              </div>

              {/* Customer Avatar & Meta */}
              <div className="pt-4 border-t border-stone-100 flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#E5A83B]">
                  <Image
                    src={test.avatar}
                    alt={test.name}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-sm text-[#22130C] truncate">
                    {test.name}
                  </h4>
                  <p className="text-xs text-[#8C7366] truncate">{test.role}</p>
                  <p className="text-[10px] text-[#E5A83B] font-medium flex items-center gap-1 mt-0.5">
                    <Heart className="w-2.5 h-2.5 fill-[#E5A83B]" />
                    Loves: {test.favoriteItem}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
