"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, ArrowRight } from "lucide-react";
import { MENU_CATEGORIES, CRAFTED_MENU_ITEMS } from "@/data/bakery-data";
import { useCart } from "@/context/CartContext";
import { BakeryItem } from "@/types/bakery";

export function CraftedMenu() {
  const [activeCategory, setActiveCategory] = useState<string>("Desserts");
  const { addItem } = useCart();

  const currentItems = CRAFTED_MENU_ITEMS[activeCategory] || [];

  const handleAddMenuItem = (menuItem: (typeof currentItems)[0]) => {
    // Map MenuItem to BakeryItem schema for Cart
    const bakeryItem: BakeryItem = {
      id: menuItem.id,
      name: menuItem.name,
      category: "pastries",
      price: menuItem.price,
      rating: 4.9,
      reviewsCount: 45,
      description: menuItem.description,
      image: menuItem.image,
      backdropColor: "bg-[#F7EDE2]",
      textColor: "text-[#22130C]",
      ingredients: ["Artisan ingredients", "Organic dairy", "Pure leaven"],
      allergens: ["Gluten", "Dairy"],
      calories: 280,
      weight: "120g",
    };
    addItem(bakeryItem, 1);
  };

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#FAF5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card Container with Peach/Sand Hue */}
        <div className="bg-[#F7EDE2] border border-[#22130C]/10 rounded-3xl sm:rounded-[36px] p-6 sm:p-12 lg:p-16 relative overflow-hidden shadow-sm">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2
              className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#22130C] font-serif flex items-center justify-center flex-wrap gap-2.5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span>Crafted Menus for Every</span>
              <span className="inline-block px-3.5 py-1 rounded-xl bg-[#22130C] text-white text-2xl sm:text-4xl shadow-sm">
                Moment
              </span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#8C7366] leading-relaxed">
              From savory appetizers to indulgent desserts, every dish is made to
              tantalize your taste buds.
            </p>
          </div>

          {/* Interactive Layout: Left Tabs + Center Doughnut Stack + Right Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Category Buttons */}
            <div className="lg:col-span-3 flex flex-col gap-3 order-2 lg:order-1">
              {MENU_CATEGORIES.slice(0, 3).map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`flex items-center justify-between px-5 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-200 cursor-pointer text-left ${
                      isActive
                        ? "bg-[#22130C] text-white shadow-md translate-x-1"
                        : "bg-white/80 text-[#22130C] hover:bg-white border border-[#22130C]/5"
                    }`}
                  >
                    <span>{category}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        isActive
                          ? "bg-[#E5A83B] text-[#22130C]"
                          : "bg-stone-100 text-[#8C7366]"
                      }`}
                    >
                      {CRAFTED_MENU_ITEMS[category]?.length || 0} items
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Center Visual: Vibrant 3-Stack Doughnut Tower */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
              <div className="relative group max-w-[280px] sm:max-w-[340px]">
                {/* Backlight Glow */}
                <div className="absolute inset-0 bg-[#E5A83B]/25 rounded-full blur-2xl group-hover:scale-105 transition-transform duration-500" />

                <div className="relative z-10 p-2 transition-transform duration-500 group-hover:-translate-y-2">
                  <Image
                    src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=85"
                    alt="Centerpiece Stack of Glazed Doughnuts"
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover rounded-3xl drop-shadow-[0_20px_25px_rgba(34,19,12,0.25)]"
                  />
                </div>
              </div>
            </div>

            {/* Right Category Buttons */}
            <div className="lg:col-span-3 flex flex-col gap-3 order-3">
              {MENU_CATEGORIES.slice(3, 6).map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`flex items-center justify-between px-5 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-200 cursor-pointer text-left ${
                      isActive
                        ? "bg-[#22130C] text-white shadow-md -translate-x-1"
                        : "bg-white/80 text-[#22130C] hover:bg-white border border-[#22130C]/5"
                    }`}
                  >
                    <span>{category}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        isActive
                          ? "bg-[#E5A83B] text-[#22130C]"
                          : "bg-stone-100 text-[#8C7366]"
                      }`}
                    >
                      {CRAFTED_MENU_ITEMS[category]?.length || 0} items
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Category Items Grid */}
          <div className="mt-12 pt-8 border-t border-[#22130C]/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-lg text-[#22130C]">
                Featured in {activeCategory}
              </h3>
              <span className="text-xs text-[#8C7366]">
                Click item to add directly to order
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {currentItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/90 rounded-2xl p-4 border border-[#22130C]/5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                >
                  <div className="flex gap-3.5">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-stone-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-bold text-sm text-[#22130C] truncate">
                          {item.name}
                        </h4>
                        <span className="font-bold text-sm text-[#E5A83B] flex-shrink-0">
                          ₹{item.price}
                        </span>
                      </div>
                      <p className="text-xs text-[#8C7366] line-clamp-2 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between">
                    {item.badge ? (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-[#FAF5EE] text-[#8C7366]">
                        {item.badge}
                      </span>
                    ) : (
                      <span className="text-[10px] text-stone-400">
                        Fresh Daily
                      </span>
                    )}

                    <button
                      onClick={() => handleAddMenuItem(item)}
                      className="px-3 py-1 rounded-full bg-[#E5A83B] text-[#22130C] text-xs font-bold hover:bg-[#D49323] transition-colors flex items-center gap-1 active:scale-95 shadow-xs"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom "Explore the Menu" CTA */}
            <div className="text-center mt-10">
              <a
                href="#creations"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#22130C] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#382015] transition-all shadow-md hover:scale-105"
              >
                Explore Full Bakery Creations
                <ArrowRight className="w-4 h-4 text-[#E5A83B]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
