"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Flower2, Mail, Sparkles } from "lucide-react";
import { BotanicalFlower } from "./BotanicalFlower";

export function PartyInviteSection() {
  return (
    <section
      id="invite"
      className="py-16 sm:py-24 bg-[#FAF5EE] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl border-[1.5px] border-[#22130C] bg-[#FAF8F2] px-5 py-10 sm:px-10 sm:py-14 shadow-[6px_6px_0px_#22130C]"
        >
          {/* Top Brand / Section Label */}
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 border border-[#22130C]/25 bg-white font-mono text-[11px] uppercase tracking-[0.18em] text-[#22130C] mb-3">
              <Flower2 className="w-3.5 h-3.5 text-[#D49323]" />
              <span>Ambika Digital Stationery</span>
            </span>
            <h2
              className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#22130C] font-serif"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Send a Bouquet &amp; Invite
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#8C7366] leading-relaxed">
              Compose a hand-illustrated floral note card or share an online
              Marriage &amp; Birthday invitation link — guests can open your
              URL, send back flowers, and leave heartfelt wishes.
            </p>
          </div>

          {/* Digibouquet Visual Teaser */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 sm:gap-8 mb-9">
            {/* Left Flowers */}
            <div className="flex items-end -space-x-4 shrink-0">
              <BotanicalFlower id="daisy" className="w-14 h-28 sm:w-18 sm:h-36 -rotate-6" />
              <BotanicalFlower id="lily" className="w-14 h-28 sm:w-18 sm:h-36 rotate-3 -translate-y-2" />
            </div>

            {/* Center Stationery Card Teaser */}
            <div className="w-full max-w-[330px] border-[1.5px] border-[#22130C] bg-[#FFFEFA] p-5 sm:p-6 shadow-[4px_4px_0px_rgba(34,19,12,0.08)] font-mono text-xs text-[#22130C] space-y-3">
              <p className="font-bold">Dear Beloved,</p>
              <p className="text-[#6B5A4E] leading-relaxed">
                Pick a bouquet, attach a note or celebration invite, and send one
                link to collect warm wishes from everyone you love.
              </p>
              <p className="text-right font-bold pt-1">
                Sincerely, <span className="font-normal text-[#8C7366]">Ambika</span>
              </p>
            </div>

            {/* Right Flowers */}
            <div className="hidden md:flex items-end -space-x-4 shrink-0">
              <BotanicalFlower id="peony" className="w-14 h-28 sm:w-18 sm:h-36 -rotate-3 -translate-y-2" />
              <BotanicalFlower id="sunflower" className="w-14 h-28 sm:w-18 sm:h-36 rotate-6" />
            </div>
          </div>

          {/* Occasion Chips + Primary Redirect CTA Button */}
          <div className="flex flex-col items-center gap-5">
            <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-[11px] text-[#4A3528]">
              <span className="px-2.5 py-1 bg-white border border-[#22130C]/15">
                💐 Bouquet + Note
              </span>
              <span className="px-2.5 py-1 bg-white border border-[#22130C]/15">
                💍 Marriage Invitation
              </span>
              <span className="px-2.5 py-1 bg-white border border-[#22130C]/15">
                🎂 Birthday Party
              </span>
            </div>

            <Link
              href="/celebrate"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#22130C] text-white font-bold text-sm hover:bg-[#382117] active:translate-x-[1px] active:translate-y-[1px] shadow-[4px_4px_0px_#E5A83B] transition-all"
            >
              <Mail className="w-4 h-4 text-[#E5A83B]" />
              <span>Create Bouquet or Invite</span>
              <ArrowRight className="w-4 h-4 text-[#E5A83B] group-hover:translate-x-1 transition-transform" />
            </Link>

            <p className="font-mono text-[11px] text-[#8C7366] flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#D49323]" />
              <span>Opens our Digibouquet-style studio &amp; invite builder</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
