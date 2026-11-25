"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Search, X, Plus, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { FEATURED_CREATIONS, CRAFTED_MENU_ITEMS } from "@/data/bakery-data";
import { BakeryItem } from "@/types/bakery";

export function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, addItem, setSelectedProduct } = useCart();
  const [query, setQuery] = useState("");

  // Flatten all items for unified search
  const allItems: BakeryItem[] = useMemo(() => {
    const list: BakeryItem[] = [...FEATURED_CREATIONS];
    Object.values(CRAFTED_MENU_ITEMS).forEach((categoryItems) => {
      categoryItems.forEach((menuItem) => {
        if (!list.some((existing) => existing.id === menuItem.id)) {
          list.push({
            id: menuItem.id,
            name: menuItem.name,
            category: "pastries",
            price: menuItem.price,
            rating: 4.8,
            reviewsCount: 30,
            description: menuItem.description,
            image: menuItem.image,
            backdropColor: "bg-[#F7EDE2]",
            textColor: "text-[#22130C]",
            ingredients: ["Freshly baked ingredients"],
            allergens: ["Gluten"],
            calories: 250,
            weight: "100g",
          });
        }
      });
    });
    return list;
  }, []);

  const filteredItems = useMemo(() => {
    if (!query.trim()) return allItems.slice(0, 4);
    const q = query.toLowerCase();
    return allItems.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [allItems, query]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-start justify-center p-4 pt-20 text-center">
        {/* Backdrop */}
        <div
          onClick={() => setIsSearchOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in"
        />

        <div className="relative w-full max-w-2xl transform overflow-hidden rounded-3xl bg-[#FAF5EE] p-6 text-left shadow-2xl transition-all border border-[#22130C]/10 z-10 animate-in zoom-in-95 duration-200">
          {/* Search Input Bar */}
          <div className="relative flex items-center border-b border-[#22130C]/15 pb-4">
            <Search className="w-5 h-5 text-[#E5A83B] flex-shrink-0 mr-3" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search cookies, sourdough, doughnuts, pastries, espresso..."
              className="w-full bg-transparent text-base sm:text-lg text-[#22130C] placeholder-[#8C7366] focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="p-1 text-stone-400 hover:text-stone-600 mr-2"
              >
                Clear
              </button>
            )}
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-1 rounded-full text-[#8C7366] hover:text-[#22130C] hover:bg-stone-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Filter Tag Suggestions */}
          <div className="flex items-center gap-2 mt-4 text-xs flex-wrap">
            <span className="text-[#8C7366] font-semibold">Popular:</span>
            {["Cookies", "Doughnuts", "Sourdough", "Cupcakes", "Latte"].map((tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="px-2.5 py-1 rounded-full bg-white border border-[#22130C]/10 hover:border-[#E5A83B] text-[#22130C] transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Results List */}
          <div className="mt-6 max-h-[420px] overflow-y-auto space-y-3 pr-1">
            {filteredItems.length === 0 ? (
              <div className="text-center py-10 text-stone-500 text-sm">
                No baked items found matching &quot;{query}&quot;. Try searching for &quot;cookie&quot; or &quot;croissant&quot;.
              </div>
            ) : (
              filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 rounded-2xl bg-white border border-[#22130C]/5 hover:border-[#E5A83B]/30 hover:shadow-xs transition-all gap-4 group"
                >
                  <div
                    onClick={() => {
                      setSelectedProduct(item);
                      setIsSearchOpen(false);
                    }}
                    className="flex items-center gap-3.5 flex-1 min-w-0 cursor-pointer"
                  >
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-stone-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                        sizes="56px"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-sm text-[#22130C] truncate group-hover:text-[#D49323] transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#8C7366] line-clamp-1">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-2 text-[11px] text-[#E5A83B] font-bold mt-0.5">
                        <span className="flex items-center gap-0.5">
                          <Star className="w-3 h-3 fill-[#E5A83B]" /> {item.rating}
                        </span>
                        <span className="text-stone-300">•</span>
                        <span className="text-[#22130C] font-extrabold">
                          ₹{item.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      addItem(item, 1);
                    }}
                    className="px-3.5 py-2 rounded-full bg-[#E5A83B] text-[#22130C] font-bold text-xs hover:bg-[#D49323] transition-colors flex items-center gap-1 active:scale-95 flex-shrink-0"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
