"use client";

import React from "react";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-[#22130C] text-white pt-24 sm:pt-28 overflow-hidden min-h-[580px] sm:min-h-[700px] lg:min-h-[780px] flex flex-col justify-between"
    >
      {/* Background Images: Responsive Desktop & Mobile */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Desktop Version (Landscape: 2140x1204) */}
        <div className="relative w-full h-full hidden md:block">
          <Image
            src="/images/hero-desktop.png"
            alt="Ambika birthday celebration"
            fill
            priority
            className="object-cover object-[center_35%]"
          />
        </div>

        {/* Mobile Version (Portrait: 941x1672) */}
        <div className="relative w-full h-full md:hidden">
          <Image
            src="/images/hero-mobile.png"
            alt="Ambika birthday celebration"
            fill
            priority
            className="object-cover object-[center_20%]"
          />
        </div>

        {/* Extended top gradient scrim so headline remains crisp over bright balloons */}
        <div className="absolute top-0 left-0 right-0 h-64 sm:h-72 bg-gradient-to-b from-[#180C07]/80 via-[#180C07]/45 to-transparent z-10" />
      </div>

      {/* Main Headline placed in the open upper space above the children */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-4 sm:pt-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1
            className="text-2xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.25] font-serif text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.95)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Fresh{" "}
            <span className="inline-block bg-[#22130C]/75 text-[#FFD166] px-3 py-0.5 rounded-2xl border border-[#E5A83B]/40 backdrop-blur-xs">
              Cakes &amp; Sweets
            </span>
            <br />
            Baked Daily for You
          </h1>
        </div>
      </div>

      {/* Organic Smooth Animated SVG Wave Cutout Transition (Rhythmic Tides, Up & Down Motion, 15s Speed) */}
      <div className="relative w-full overflow-hidden leading-none z-20 pointer-events-none -mb-1">
        <div
          className="w-[200%] h-16 sm:h-20 lg:h-24 will-change-transform"
          style={{
            animation: "curtainWaveMotion 15s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite",
            transformOrigin: "bottom center",
          }}
        >
          <svg
            viewBox="0 0 2880 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full block"
            preserveAspectRatio="none"
          >
            {/* Multiple rhythmic tides with deep solid skirt base anchored to bottom */}
            <path
              d="M0,45 C80,22 160,22 240,38 C320,68 400,68 480,45 C560,22 640,22 720,38 C800,68 880,68 960,45 C1040,22 1120,22 1200,38 C1280,68 1360,68 1440,45 C1520,22 1600,22 1680,38 C1760,68 1840,68 1920,45 C2000,22 2080,22 2160,38 C2240,68 2320,68 2400,45 C2480,22 2560,22 2640,38 C2720,68 2800,68 2880,45 L2880,150 L0,150 Z"
              fill="#FAF5EE"
            />
          </svg>
        </div>

        {/* Up-and-down tide surge & sway animation keyframes anchored to bottom */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @keyframes curtainWaveMotion {
                0% {
                  transform: translate3d(0, 0, 0) scaleY(1);
                }
                25% {
                  transform: translate3d(-3%, 0, 0) scaleY(1.22);
                }
                50% {
                  transform: translate3d(-6%, 0, 0) scaleY(0.88);
                }
                75% {
                  transform: translate3d(-3%, 0, 0) scaleY(1.14);
                }
                100% {
                  transform: translate3d(0, 0, 0) scaleY(1);
                }
              }
            `,
          }}
        />
      </div>

      {/* Solid grounding apron: guarantees zero subpixel gap or background image leak at the section seam */}
      <div className="absolute bottom-0 left-0 right-0 h-4 sm:h-6 bg-[#FAF5EE] pointer-events-none z-10" />
    </section>
  );
}
