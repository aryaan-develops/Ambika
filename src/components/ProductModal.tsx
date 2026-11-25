"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Star, Plus, Minus, AlertTriangle, Flame, Scale, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function ProductModal() {
  const { selectedProduct, setSelectedProduct, addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!selectedProduct) return null;

  const handleAddToCart = () => {
    addItem(selectedProduct, qty);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setSelectedProduct(null);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center">
        {/* Backdrop */}
        <div
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in"
        />

        <div className="relative w-full max-w-xl transform overflow-hidden rounded-3xl bg-[#FAF5EE] text-left shadow-2xl transition-all border border-[#22130C]/10 z-10 animate-in zoom-in-95 duration-200">
          {/* Close button */}
          <button
            onClick={() => setSelectedProduct(null)}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 text-[#8C7366] hover:text-[#22130C] hover:bg-white shadow-xs transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Left Image Section */}
            <div
              className={`relative ${selectedProduct.backdropColor} flex items-center justify-center p-8 min-h-[260px] sm:min-h-full`}
            >
              <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover rounded-2xl drop-shadow-xl"
                  sizes="(max-width: 640px) 200px, 240px"
                />
              </div>

              {selectedProduct.badge && (
                <span className="absolute top-4 left-4 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 text-[#22130C] shadow-xs">
                  {selectedProduct.badge}
                </span>
              )}
            </div>

            {/* Right Details Section */}
            <div className="p-6 sm:p-7 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-[#E5A83B] font-bold mb-1">
                  <div className="flex items-center">
                    {[...Array(Math.floor(selectedProduct.rating))].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#E5A83B]" />
                    ))}
                  </div>
                  <span>{selectedProduct.rating}</span>
                  <span className="text-stone-400 font-normal">
                    ({selectedProduct.reviewsCount} reviews)
                  </span>
                </div>

                <h3
                  className="text-xl sm:text-2xl font-bold text-[#22130C] font-serif leading-snug"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {selectedProduct.name}
                </h3>

                <p className="text-lg font-extrabold text-[#E5A83B] mt-1">
                  ₹{selectedProduct.price}
                </p>

                <p className="text-xs text-[#8C7366] mt-2 leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Nutritional & Weight Badges */}
                <div className="flex items-center gap-3 mt-3 text-xs text-stone-600">
                  <span className="flex items-center gap-1 bg-stone-100 px-2 py-1 rounded-md">
                    <Flame className="w-3.5 h-3.5 text-amber-500" />
                    {selectedProduct.calories} kcal
                  </span>
                  <span className="flex items-center gap-1 bg-stone-100 px-2 py-1 rounded-md">
                    <Scale className="w-3.5 h-3.5 text-stone-500" />
                    {selectedProduct.weight}
                  </span>
                </div>

                {/* Ingredients */}
                <div className="mt-3">
                  <span className="text-[11px] font-bold uppercase text-[#8C7366] block mb-1">
                    Ingredients
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {selectedProduct.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-white border border-[#22130C]/10 text-stone-700"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Allergens Notice */}
                {selectedProduct.allergens.length > 0 && (
                  <div className="mt-3 flex items-start gap-1.5 text-[11px] text-amber-800 bg-amber-50 p-2 rounded-lg border border-amber-200">
                    <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-amber-600" />
                    <span>
                      Contains: {selectedProduct.allergens.join(", ")}
                    </span>
                  </div>
                )}
              </div>

              {/* Quantity & Add to Cart button */}
              <div className="pt-2 border-t border-stone-200 flex items-center gap-3">
                <div className="flex items-center border border-[#22130C]/20 rounded-xl overflow-hidden bg-white">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="px-2.5 py-2 text-stone-600 hover:bg-stone-100"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="px-3 text-xs font-bold text-[#22130C]">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="px-2.5 py-2 text-stone-600 hover:bg-stone-100"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3 rounded-full bg-[#E5A83B] text-[#22130C] font-bold text-xs uppercase tracking-wider hover:bg-[#D49323] transition-all flex items-center justify-center gap-1.5 shadow-md active:scale-95"
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" /> Added to Bag
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" /> Add ₹{selectedProduct.price * qty}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
