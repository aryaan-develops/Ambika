"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Copy, Check, Percent } from "lucide-react";

export function SweetDeals() {
  const [copied, setCopied] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const promoCode = "AMBIKA10";

  const handleCopy = () => {
    navigator.clipboard.writeText(promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const categories = ["All", "Cakes", "Cookies", "Doughnuts", "Breads"];

  return (
    <section id="deals" className="py-16 sm:py-20 bg-[#FAF5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Warm Peach/Apricot Promo Card */}
        <div className="bg-[#FCEFE3] border border-[#22130C]/10 rounded-3xl sm:rounded-[36px] overflow-hidden p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Cheerful Kids Eating Cake Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden max-w-[340px] w-full aspect-[4/5] shadow-md border-4 border-white">
                <Image
                  src="/images/kids-eating-cake.png"
                  alt="Happy kids wearing party caps eating delicious cake"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-3 text-center text-xs text-[#22130C] font-semibold">
                  🎂 &quot;Celebrations taste sweetest with Ambika birthday cakes!&quot;
                </div>
              </div>
            </div>

            {/* Right: Headline, Discount Ticket Voucher & Promo Filter */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2
                  className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#22130C] font-serif"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Sweet Deals, Fresh Savings
                </h2>
                <p className="mt-3 text-sm text-[#8C7366] leading-relaxed max-w-xl">
                  Enjoy our daily discounts and seasonal promotions. Because good
                  food always tastes better when it&apos;s a handcrafted deal.
                </p>
              </div>

              {/* Dashed Border Discount Voucher Card */}
              <div className="bg-white rounded-2xl p-6 border-2 border-dashed border-[#22130C]/25 relative shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#E5A83B] flex items-center justify-center text-[#22130C]">
                        <Percent className="w-4 h-4 font-bold" />
                      </div>
                      <h3 className="font-extrabold text-lg sm:text-xl text-[#22130C]">
                        10% Off All Cakes &amp; Pastries
                      </h3>
                    </div>
                    <p className="text-xs text-[#8C7366] pl-9">
                      Valid Friday through Sunday for both online orders &amp; in-store pickup.
                    </p>
                  </div>

                  {/* Promo Code Copy Pill */}
                  <div className="flex items-center gap-2 sm:self-center">
                    <button
                      onClick={handleCopy}
                      className="px-4 py-2.5 rounded-xl bg-[#22130C] text-white font-mono text-xs font-bold tracking-widest flex items-center gap-2 hover:bg-[#3d2114] transition-colors shadow-xs active:scale-95"
                    >
                      <span>{promoCode}</span>
                      {copied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-[#E5A83B]" />
                      )}
                    </button>
                    {copied && (
                      <span className="text-xs text-emerald-700 font-bold animate-fade-in">
                        Copied!
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Filter Pills */}
              <div className="pt-2">
                <span className="text-xs font-semibold text-[#8C7366] block mb-2">
                  Browse Offers by Category:
                </span>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveFilter(cat)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                        activeFilter === cat
                          ? "bg-[#22130C] text-white shadow-xs"
                          : "bg-white/80 text-[#22130C] hover:bg-white border border-[#22130C]/10"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
