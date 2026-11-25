"use client";

import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-[#22130C] text-stone-300 pt-0 pb-6 sm:pb-8 overflow-hidden">
      {/* Top Organic Smooth Animated Wave Cutout (Matching Hero Section) */}
      <div className="relative w-full overflow-hidden leading-none z-20 pointer-events-none -mt-px mb-3 sm:mb-5">
        <div
          className="w-[200%] h-11 sm:h-14 will-change-transform"
          style={{
            animation: "curtainWaveMotion 15s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite",
            transformOrigin: "top center",
          }}
        >
          <svg
            viewBox="0 0 2880 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full block"
            preserveAspectRatio="none"
          >
            {/* Wave cutout filled with #FAF5EE transitioning seamlessly into #22130C footer */}
            <path
              d="M0,0 L2880,0 L2880,84 C2800,84 2720,28 2640,28 C2560,28 2480,84 2400,84 C2320,84 2240,28 2160,28 C2080,28 2000,84 1920,84 C1840,84 1760,28 1680,28 C1600,28 1520,84 1440,84 C1360,84 1280,28 1200,28 C1120,28 1040,84 960,84 C880,84 800,28 720,28 C640,28 560,84 480,84 C400,84 320,28 240,28 C160,28 80,84 0,84 Z"
              fill="#FAF5EE"
            />
          </svg>
        </div>
      </div>

      {/* Hairline grounding apron at the very top edge so zero subpixel gap appears without clipping wave crests */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#FAF5EE] pointer-events-none z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-6 border-b border-white/10">
          {/* Brand Info & Socials */}
          <div className="space-y-2.5 max-w-sm">
            <span
              className="text-white font-bold tracking-tight text-xl font-serif block"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ambika
            </span>
            <p className="text-xs text-stone-400 leading-relaxed">
              Small-batch, slow-fermented bakery and sweets made with pure ingredients. Baked fresh daily.
            </p>
            <div className="flex items-center gap-3 pt-0.5 text-stone-400">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-[#E5A83B] transition-colors p-1"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-[#E5A83B] transition-colors p-1"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-[#E5A83B] transition-colors p-1"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Explore
            </h4>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-stone-400">
              <Link href="#home" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link href="#story" className="hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="#creations" className="hover:text-white transition-colors">
                Products
              </Link>
              <Link href="#menu" className="hover:text-white transition-colors">
                Menu
              </Link>
              <Link href="#deals" className="hover:text-white transition-colors">
                Offers
              </Link>
            </div>
          </div>
        </div>

        {/* Compact Bottom Bar (Zero Bloat) */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-stone-500">
          <p>© {new Date().getFullYear()} Ambika. All rights reserved.</p>
          <p>Handmade daily at Checkpost.</p>
        </div>
      </div>
    </footer>
  );
}
