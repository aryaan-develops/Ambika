"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Heart, Minus, Plus, Send, Sparkles } from "lucide-react";
import {
  FLOWER_CATALOG,
  FlowerId,
  InviteWish,
  QUICK_WISH_CHIPS,
} from "@/types/invite";
import { BotanicalFlower } from "./BotanicalFlower";

interface WishComposerAndWallProps {
  wishes: InviteWish[];
  onAddWish: (wish: InviteWish) => void;
  isInviteMode?: boolean;
}

export function WishComposerAndWall({
  wishes,
  onAddWish,
  isInviteMode = true,
}: WishComposerAndWallProps) {
  const [guestName, setGuestName] = useState("");
  const [attending, setAttending] = useState(true);
  const [guestsCount, setGuestsCount] = useState(1);
  const [selectedFlowers, setSelectedFlowers] = useState<FlowerId[]>([
    "daisy",
    "peony",
    "sunflower",
  ]);
  const [message, setMessage] = useState("");
  const [justSent, setJustSent] = useState(false);

  const toggleFlower = (id: FlowerId) => {
    setSelectedFlowers((prev) =>
      prev.includes(id)
        ? prev.length > 1
          ? prev.filter((f) => f !== id)
          : prev
        : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !message.trim()) return;

    const newWish: InviteWish = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      guestName: guestName.trim(),
      attending: isInviteMode ? attending : false,
      guestsCount: isInviteMode && attending ? guestsCount : 0,
      message: message.trim(),
      flowers: selectedFlowers,
      createdAt: new Date().toISOString(),
    };

    onAddWish(newWish);
    setGuestName("");
    setMessage("");
    setGuestsCount(1);
    setJustSent(true);
    setTimeout(() => setJustSent(false), 3000);

    confetti({
      particleCount: 55,
      spread: 65,
      origin: { y: 0.7 },
      colors: ["#E5A83B", "#22130C", "#F2B5A7", "#A7D3D4"],
    });
  };

  return (
    <div className="space-y-8">
      {/* Send a Reply Bouquet & Wish Card */}
      <form
        onSubmit={handleSubmit}
        className="border-[1.5px] border-[#22130C] bg-[#FFFEFA] p-5 sm:p-7 shadow-[5px_5px_0px_rgba(34,19,12,0.08)] space-y-5"
      >
        <div className="flex items-center justify-between gap-2 border-b border-[#22130C]/15 pb-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8C7366]">
              Send Back a Note
            </p>
            <h3
              className="text-xl sm:text-2xl font-extrabold text-[#22130C] font-serif mt-0.5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Send a Bouquet &amp; Wish
            </h3>
          </div>
          <Sparkles className="w-5 h-5 text-[#E5A83B] shrink-0" />
        </div>

        {/* Mini Flower Bouquet Picker */}
        <div>
          <label className="block font-mono text-[11px] uppercase tracking-wider text-[#8C7366] mb-2">
            Pick Flowers for Your Wish Card
          </label>
          <div className="flex flex-wrap gap-2">
            {FLOWER_CATALOG.map((f) => {
              const active = selectedFlowers.includes(f.id);
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => toggleFlower(f.id)}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 border text-xs font-mono transition-all cursor-pointer ${
                    active
                      ? "border-[#22130C] bg-[#FAF8F2] text-[#22130C] font-bold shadow-[2px_2px_0px_#22130C]"
                      : "border-[#22130C]/20 bg-white text-[#8C7366] hover:border-[#22130C]"
                  }`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-[#22130C]/40"
                    style={{ backgroundColor: f.accent }}
                  />
                  <span>{f.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* RSVP Toggle (shown for Invitations) */}
        {isInviteMode && (
          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => setAttending(true)}
              className={`px-3 py-2 border text-xs font-mono font-bold transition-all cursor-pointer ${
                attending
                  ? "bg-[#22130C] text-white border-[#22130C]"
                  : "bg-[#FAF8F2] text-[#8C7366] border-[#22130C]/20 hover:text-[#22130C]"
              }`}
            >
              🎉 Attending
            </button>
            <button
              type="button"
              onClick={() => setAttending(false)}
              className={`px-3 py-2 border text-xs font-mono font-bold transition-all cursor-pointer ${
                !attending
                  ? "bg-[#22130C] text-white border-[#22130C]"
                  : "bg-[#FAF8F2] text-[#8C7366] border-[#22130C]/20 hover:text-[#22130C]"
              }`}
            >
              💐 Warm Wishes Only
            </button>
          </div>
        )}

        {/* Guest Name & Party Size */}
        <div className="flex flex-col sm:flex-row gap-2.5">
          <input
            type="text"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            placeholder="Sincerely, Your Name *"
            required
            className="flex-1 px-3.5 py-2.5 border border-[#22130C] bg-white font-mono text-xs sm:text-sm text-[#22130C] placeholder-[#8C7366]/70 focus:outline-none focus:ring-1 focus:ring-[#22130C]"
          />
          {isInviteMode && attending && (
            <div className="flex items-center justify-between sm:justify-start gap-2 px-3 py-2 border border-[#22130C] bg-[#FAF8F2] font-mono">
              <span className="text-xs text-[#6B5A4E]">Guests:</span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setGuestsCount((c) => Math.max(1, c - 1))}
                  aria-label="Decrease guests"
                  className="w-6 h-6 border border-[#22130C]/30 bg-white flex items-center justify-center text-[#22130C] hover:bg-[#E5A83B]/20 cursor-pointer"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-5 text-center text-xs font-bold text-[#22130C]">
                  {guestsCount}
                </span>
                <button
                  type="button"
                  onClick={() => setGuestsCount((c) => Math.min(10, c + 1))}
                  aria-label="Increase guests"
                  className="w-6 h-6 border border-[#22130C]/30 bg-white flex items-center justify-center text-[#22130C] hover:bg-[#E5A83B]/20 cursor-pointer"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Quick Wish Chips */}
        <div className="flex flex-wrap gap-1.5">
          {QUICK_WISH_CHIPS.map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => setMessage(chip)}
              className="px-2.5 py-1 bg-[#FAF8F2] hover:bg-[#FEF2E4] border border-[#22130C]/15 text-[11px] font-mono text-[#4A3528] transition-colors cursor-pointer text-left"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Wish Note Body */}
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your note to attach with these flowers *"
          required
          className="w-full px-3.5 py-2.5 border border-[#22130C] bg-white font-mono text-xs sm:text-sm text-[#22130C] placeholder-[#8C7366]/70 focus:outline-none focus:ring-1 focus:ring-[#22130C] resize-none"
        />

        <div className="flex items-center justify-between gap-3">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#22130C] text-white font-mono text-xs sm:text-sm font-bold hover:bg-[#382117] active:translate-x-[1px] active:translate-y-[1px] shadow-[3px_3px_0px_#E5A83B] transition-all cursor-pointer"
          >
            <Send className="w-3.5 h-3.5 text-[#E5A83B]" />
            <span>Send Bouquet &amp; Wish</span>
          </button>

          {justSent && (
            <span className="inline-flex items-center gap-1 font-mono text-xs font-bold text-emerald-700">
              <CheckCircle2 className="w-4 h-4" /> Delivered!
            </span>
          )}
        </div>
      </form>

      {/* Bouquets & Wishes Wall */}
      <div className="space-y-3">
        <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#6B5A4E] flex items-center gap-1.5">
          <Heart className="w-3.5 h-3.5 text-[#D96B78] fill-[#D96B78]" />
          <span>Bouquets &amp; Wishes Received ({wishes.length})</span>
        </h4>

        {wishes.length === 0 ? (
          <div className="border border-dashed border-[#22130C]/25 bg-[#FFFEFA] p-6 text-center">
            <p className="font-mono text-xs text-[#8C7366]">
              No bouquets or wishes yet — send the first floral note above!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AnimatePresence initial={false}>
              {wishes.map((wish) => (
                <motion.div
                  key={wish.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="border-[1.5px] border-[#22130C] bg-[#FFFEFA] p-4 shadow-[3px_3px_0px_rgba(34,19,12,0.08)] flex flex-col justify-between gap-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-end -space-x-2">
                      {(wish.flowers?.length ? wish.flowers : ["daisy", "peony"]).slice(0, 3).map(
                        (fid, idx) => (
                          <BotanicalFlower
                            key={`${wish.id}-${fid}-${idx}`}
                            id={fid as FlowerId}
                            className="w-8 h-14"
                          />
                        )
                      )}
                    </div>
                    {isInviteMode && (
                      <span
                        className={`px-2 py-0.5 font-mono text-[10px] font-bold uppercase border ${
                          wish.attending
                            ? "bg-[#E8F3EB] border-[#1C4532]/25 text-[#1C4532]"
                            : "bg-[#FEF2E4] border-[#873600]/20 text-[#873600]"
                        }`}
                      >
                        {wish.attending ? `Going (${wish.guestsCount})` : "Wishes"}
                      </span>
                    )}
                  </div>

                  <p className="font-mono text-xs text-[#4A3528] leading-relaxed">
                    &ldquo;{wish.message}&rdquo;
                  </p>

                  <p className="font-mono text-[11px] font-bold text-[#22130C] text-right">
                    — {wish.guestName}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
