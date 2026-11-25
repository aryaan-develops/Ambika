"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import confetti from "canvas-confetti";

export function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeItem,
    clearCart,
    subtotal,
    totalItemsCount,
  } = useCart();

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);

  const freeDeliveryThreshold = 499;
  const progressToFreeDelivery = Math.min(
    100,
    (subtotal / freeDeliveryThreshold) * 100
  );

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderCompleted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      setTimeout(() => {
        clearCart();
        setOrderCompleted(false);
        setIsCartOpen(false);
      }, 3500);
    }, 1200);
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF5EE] text-[#22130C] shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="px-6 py-5 border-b border-[#22130C]/10 flex items-center justify-between bg-white">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#E5A83B] flex items-center justify-center text-[#22130C]">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-base text-[#22130C]">
                  Your Bakery Bag
                </h3>
                <p className="text-xs text-[#8C7366]">
                  {totalItemsCount} {totalItemsCount === 1 ? "item" : "items"} selected
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full text-[#8C7366] hover:text-[#22130C] hover:bg-stone-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="px-6 py-3 bg-[#FCEFE3] border-b border-[#22130C]/5 text-xs">
            {subtotal >= freeDeliveryThreshold ? (
              <p className="text-[#1C4532] font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                You&apos;ve unlocked Free Handcrafted Delivery!
              </p>
            ) : (
              <p className="text-[#873600]">
                Add{" "}
                <span className="font-bold">
                  ₹{(freeDeliveryThreshold - subtotal).toFixed(0)}
                </span>{" "}
                more to qualify for Free Delivery
              </p>
            )}
            <div className="w-full h-1.5 bg-white/80 rounded-full mt-2 overflow-hidden">
              <div
                className="h-full bg-[#E5A83B] rounded-full transition-all duration-300"
                style={{ width: `${progressToFreeDelivery}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {orderCompleted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold font-serif">Order Confirmed!</h4>
                <p className="text-xs text-[#8C7366] max-w-xs">
                  Your fresh bakes are being prepared in our Seattle oven. A confirmation
                  SMS &amp; tracking code has been dispatched.
                </p>
              </div>
            ) : items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-3">
                <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-base text-[#22130C]">
                  Your bag is currently empty
                </h4>
                <p className="text-xs text-[#8C7366] max-w-xs">
                  Explore our freshly baked cookies, doughnuts, and artisan breads to get started.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 px-5 py-2.5 rounded-full bg-[#22130C] text-white text-xs font-semibold hover:bg-[#382015] transition-colors"
                >
                  Explore Creations
                </button>
              </div>
            ) : (
              items.map(({ item, quantity }) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 bg-white p-3.5 rounded-2xl border border-[#22130C]/5 shadow-xs"
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-stone-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h5 className="font-bold text-sm text-[#22130C] truncate">
                      {item.name}
                    </h5>
                    <p className="text-xs text-[#8C7366] font-medium">
                      ₹{item.price} each
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-[#22130C]/15 rounded-lg overflow-hidden bg-stone-50">
                        <button
                          onClick={() => updateQuantity(item.id, quantity - 1)}
                          className="px-2 py-1 text-stone-600 hover:bg-stone-200 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 py-0.5 text-xs font-bold text-[#22130C]">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, quantity + 1)}
                          className="px-2 py-1 text-stone-600 hover:bg-stone-200 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-stone-400 hover:text-red-600 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-bold text-sm text-[#22130C]">
                      ₹{(item.price * quantity).toFixed(0)}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Action */}
          {!orderCompleted && items.length > 0 && (
            <div className="p-6 bg-white border-t border-[#22130C]/10 space-y-4">
              <div className="space-y-1.5 text-xs text-[#8C7366]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#22130C]">
                    ₹{subtotal.toFixed(0)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="font-semibold text-[#22130C]">
                    {subtotal >= freeDeliveryThreshold ? "FREE" : "₹40"}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#22130C] pt-2 border-t border-stone-100">
                  <span>Total</span>
                  <span className="text-[#E5A83B]">
                    ₹
                    {(
                      subtotal +
                      (subtotal >= freeDeliveryThreshold ? 0 : 40)
                    ).toFixed(0)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full py-3.5 rounded-full bg-[#E5A83B] text-[#22130C] font-bold text-sm tracking-wide uppercase hover:bg-[#D49323] transition-all flex items-center justify-center gap-2 shadow-md active:scale-98 disabled:opacity-50"
              >
                {isCheckingOut ? (
                  <span>Processing Oven Batch...</span>
                ) : (
                  <>
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-[#8C7366]">
                🔒 256-bit Encrypted Checkout • Same-Day Fresh Guarantee
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
