"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Check,
  Copy,
  ExternalLink,
  Link2,
  Share2,
  Upload,
} from "lucide-react";
import {
  DEFAULT_FLOWERS,
  FLOWER_CATALOG,
  FlowerId,
  InvitationData,
  InviteMode,
  InviteOccasion,
  OCCASION_PRESETS,
} from "@/types/invite";
import {
  encodeInvitePayload,
  saveInviteLocal,
  slugifyInviteTitle,
} from "@/lib/invite-storage";
import { DigiBouquetCard } from "@/components/DigiBouquetCard";

export default function CelebrateStudioPage() {
  const [mode, setMode] = useState<InviteMode>("bouquet");
  const [occasion, setOccasion] = useState<InviteOccasion>("Marriage");
  const [title, setTitle] = useState(OCCASION_PRESETS.Marriage.defaultTitle);
  const [dearLine, setDearLine] = useState("Dear Beloved,");
  const [hostName, setHostName] = useState("Secret Admirer");
  const [date, setDate] = useState("2026-12-14");
  const [time, setTime] = useState("18:30");
  const [venue, setVenue] = useState("Ambika Garden Lounge, Checkpost");
  const [message, setMessage] = useState(
    "I have so much to tell you, but only this much space on this card! Sending you fresh blooms and warm wishes."
  );
  const [flowers, setFlowers] = useState<FlowerId[]>(DEFAULT_FLOWERS);
  const [coverImage, setCoverImage] = useState(OCCASION_PRESETS.Marriage.image);
  const [notifyEmail, setNotifyEmail] = useState("");
  const [notifyOnWishes, setNotifyOnWishes] = useState(true);

  const [sharePath, setSharePath] = useState("");
  const [shareUrl, setShareUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleModeChange = (nextMode: InviteMode) => {
    setMode(nextMode);
    setShareUrl("");
    setSharePath("");
    if (nextMode === "invite") {
      const preset = OCCASION_PRESETS[occasion];
      setTitle(preset.defaultTitle);
      setDearLine(preset.defaultDear);
      setMessage(preset.defaultMessage);
      setCoverImage(preset.image);
      if (hostName === "Secret Admirer") setHostName("Aarav & Meera");
    } else {
      setDearLine("Dear Beloved,");
      setMessage(
        "I have so much to tell you, but only this much space on this card! Sending you fresh blooms and warm wishes."
      );
      if (hostName === "Aarav & Meera") setHostName("Secret Admirer");
    }
  };

  const handleOccasionSelect = (occ: InviteOccasion) => {
    const preset = OCCASION_PRESETS[occ];
    setOccasion(occ);
    setTitle(preset.defaultTitle);
    setDearLine(preset.defaultDear);
    setMessage(preset.defaultMessage);
    setCoverImage(preset.image);
    setShareUrl("");
  };

  const toggleFlower = (id: FlowerId) => {
    setFlowers((prev) =>
      prev.includes(id)
        ? prev.length > 2
          ? prev.filter((f) => f !== id)
          : prev
        : [...prev, id]
    );
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setCoverImage(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFieldChange = <K extends keyof InvitationData>(
    key: K,
    value: InvitationData[K]
  ) => {
    if (key === "dearLine" && typeof value === "string") setDearLine(value);
    if (key === "message" && typeof value === "string") setMessage(value);
    if (key === "hostName" && typeof value === "string") setHostName(value);
  };

  const currentInvite: InvitationData = {
    slug: "preview",
    mode,
    occasion,
    title,
    dearLine,
    hostName,
    date,
    time,
    venue,
    message,
    flowers,
    coverImage,
    notifyEmail: notifyEmail.trim() || undefined,
    notifyOnWishes,
    createdAt: new Date().toISOString(),
  };

  const handleCreateLink = (e: React.FormEvent) => {
    e.preventDefault();
    const baseName = mode === "invite" ? title : `bouquet-for-${dearLine}`;
    const slug = slugifyInviteTitle(baseName);
    const payload: InvitationData = {
      ...currentInvite,
      slug,
      createdAt: new Date().toISOString(),
    };

    saveInviteLocal(payload);
    const encoded = encodeInvitePayload(payload);
    const path = `/invite/${slug}?e=${encoded}`;
    setSharePath(path);
    setShareUrl(
      typeof window !== "undefined" ? `${window.location.origin}${path}` : path
    );

    confetti({
      particleCount: 70,
      spread: 75,
      origin: { y: 0.65 },
      colors: ["#E5A83B", "#22130C", "#F2B5A7", "#A7D3D4"],
    });
  };

  const handleCopy = async () => {
    if (!shareUrl) return;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard fallback ignored
    }
  };

  const whatsappHref = shareUrl
    ? `https://wa.me/?text=${encodeURIComponent(
        mode === "invite"
          ? `You're invited to ${title}! View your floral invite & send wishes here: ${shareUrl}`
          : `I made a digital floral bouquet & note for you! Open it here: ${shareUrl}`
      )}`
    : "#";

  return (
    <div className="min-h-screen bg-[#FAF8F2] text-[#22130C] pb-20">
      {/* Top Minimal Header */}
      <header className="sticky top-0 z-30 bg-[#FAF8F2]/90 backdrop-blur-md border-b border-[#22130C]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link
            href="/#invite"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#22130C] hover:text-[#D49323] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Bakery</span>
          </Link>
          <span
            className="text-xl sm:text-2xl font-extrabold italic tracking-tight font-serif text-[#22130C]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            DigiBouquet
          </span>
          <span className="font-mono text-[11px] text-[#8C7366] hidden sm:inline">
            by Ambika
          </span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <form onSubmit={handleCreateLink} className="space-y-8 sm:space-y-10">
          {/* Mode Switcher */}
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="inline-flex p-1 border-[1.5px] border-[#22130C] bg-[#FFFEFA] shadow-[3px_3px_0px_#22130C]">
              <button
                type="button"
                onClick={() => handleModeChange("bouquet")}
                className={`px-4 py-2 font-mono text-xs font-bold transition-colors cursor-pointer ${
                  mode === "bouquet"
                    ? "bg-[#22130C] text-white"
                    : "text-[#6B5A4E] hover:text-[#22130C]"
                }`}
              >
                💐 Send Bouquet + Note
              </button>
              <button
                type="button"
                onClick={() => handleModeChange("invite")}
                className={`px-4 py-2 font-mono text-xs font-bold transition-colors cursor-pointer ${
                  mode === "invite"
                    ? "bg-[#22130C] text-white"
                    : "text-[#6B5A4E] hover:text-[#22130C]"
                }`}
              >
                💌 Share Event Invitation
              </button>
            </div>
          </div>

          {/* Event Occasion & Details (Only in Invitation Mode) */}
          {mode === "invite" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto border-[1.5px] border-[#22130C] bg-[#FFFEFA] p-5 sm:p-6 shadow-[4px_4px_0px_rgba(34,19,12,0.08)] space-y-4"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#6B5A4E]">
                  Choose Celebration Type
                </p>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#22130C] hover:text-[#D49323] cursor-pointer"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Custom Photo</span>
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(Object.keys(OCCASION_PRESETS) as InviteOccasion[]).map((occKey) => {
                  const p = OCCASION_PRESETS[occKey];
                  const active = occasion === occKey;
                  return (
                    <button
                      key={occKey}
                      type="button"
                      onClick={() => handleOccasionSelect(occKey)}
                      className={`px-2.5 py-2 border font-mono text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                        active
                          ? "border-[#22130C] bg-[#E5A83B]/25 text-[#22130C] shadow-[2px_2px_0px_#22130C]"
                          : "border-[#22130C]/20 bg-white text-[#6B5A4E] hover:border-[#22130C]"
                      }`}
                    >
                      <span>{p.emoji}</span>
                      <span className="truncate">{occKey}</span>
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 font-mono text-xs">
                <div className="sm:col-span-2">
                  <label className="block text-[10px] uppercase tracking-wider text-[#8C7366] mb-1">
                    Event Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Aarav & Meera's Wedding"
                    className="w-full px-3 py-2 border border-[#22130C] bg-white text-[#22130C] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#8C7366] mb-1">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 border border-[#22130C] bg-white text-[#22130C] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#8C7366] mb-1">
                    Time *
                  </label>
                  <input
                    type="time"
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2 border border-[#22130C] bg-white text-[#22130C] focus:outline-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[10px] uppercase tracking-wider text-[#8C7366] mb-1">
                    Venue / Location *
                  </label>
                  <input
                    type="text"
                    required
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                    placeholder="e.g. Ambika Garden Lounge, Checkpost"
                    className="w-full px-3 py-2 border border-[#22130C] bg-white text-[#22130C] focus:outline-none"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Pick Bouquet Stems */}
          <div className="text-center space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#22130C]">
              PICK YOUR BOUQUET
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {FLOWER_CATALOG.map((flower) => {
                const selected = flowers.includes(flower.id);
                return (
                  <button
                    key={flower.id}
                    type="button"
                    onClick={() => toggleFlower(flower.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 border font-mono text-xs transition-all cursor-pointer ${
                      selected
                        ? "border-[#22130C] bg-[#FFFEFA] text-[#22130C] font-bold shadow-[2px_2px_0px_#22130C]"
                        : "border-[#22130C]/20 bg-white/60 text-[#8C7366] hover:border-[#22130C]"
                    }`}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-[#22130C]/40"
                      style={{ backgroundColor: flower.accent }}
                    />
                    <span>{flower.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Centerpiece: WRITE THE CARD (Editable Digibouquet Card + Flanking Flowers) */}
          <div className="space-y-4">
            <p className="text-center font-mono text-xs uppercase tracking-[0.22em] text-[#22130C]">
              WRITE THE CARD
            </p>
            <DigiBouquetCard
              invite={currentInvite}
              editable
              onChangeField={handleFieldChange}
            />
          </div>

          {/* Bottom Email + Notification Toggle + Generate Link (Matches Reference) */}
          <div className="max-w-sm mx-auto space-y-4 text-center">
            <div className="space-y-1.5 text-left">
              <label className="block text-center font-mono text-xs tracking-wider text-[#22130C]">
                YOUR EMAIL <span className="text-[#8C7366]">(optional)</span>
              </label>
              <input
                type="email"
                value={notifyEmail}
                onChange={(e) => setNotifyEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-3.5 py-2.5 border-[1.5px] border-[#22130C] bg-[#FFFEFA] font-mono text-xs sm:text-sm text-[#22130C] placeholder-[#8C7366]/60 focus:outline-none"
              />
            </div>

            <label className="flex items-center justify-between gap-3 text-left font-mono text-[11px] text-[#22130C] cursor-pointer">
              <span>Keep me updated when guests send wishes &amp; bouquets</span>
              <button
                type="button"
                role="switch"
                aria-checked={notifyOnWishes}
                onClick={() => setNotifyOnWishes((v) => !v)}
                className="w-9 h-5 border-[1.5px] border-[#22130C] bg-white p-0.5 flex items-center cursor-pointer shrink-0"
              >
                <span
                  className={`block w-3.5 h-3.5 bg-[#22130C] transition-transform ${
                    notifyOnWishes ? "translate-x-3.5" : "translate-x-0"
                  }`}
                />
              </button>
            </label>

            <button
              type="submit"
              className="w-full py-3.5 px-6 bg-[#22130C] text-white font-mono text-xs sm:text-sm font-bold hover:bg-[#382117] active:translate-x-[1px] active:translate-y-[1px] shadow-[4px_4px_0px_#E5A83B] transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <Link2 className="w-4 h-4 text-[#E5A83B]" />
              <span>
                {mode === "invite"
                  ? "Create & Share Invite URL"
                  : "Create & Share Bouquet URL"}
              </span>
            </button>

            {/* Generated URL Share Panel */}
            {shareUrl && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-[1.5px] border-[#22130C] bg-[#FFFEFA] p-4 shadow-[4px_4px_0px_rgba(34,19,12,0.1)] space-y-3 text-left"
              >
                <div className="flex items-center justify-between gap-2 font-mono text-xs">
                  <span className="font-bold text-emerald-700 inline-flex items-center gap-1">
                    <Check className="w-4 h-4" /> Ready to share!
                  </span>
                  <Link
                    href={sharePath}
                    className="font-bold text-[#D49323] hover:text-[#22130C] inline-flex items-center gap-1"
                  >
                    <span>Open Link</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>

                <div className="px-2.5 py-2 border border-[#22130C]/20 bg-[#FAF8F2] font-mono text-[11px] text-[#6B5A4E] truncate select-all">
                  {shareUrl}
                </div>

                <div className="grid grid-cols-2 gap-2 font-mono text-xs font-bold">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="py-2 px-3 bg-[#E5A83B] text-[#22130C] border border-[#22130C] hover:bg-[#D49323] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "Copied!" : "Copy URL"}</span>
                  </button>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 bg-[#1C4532] text-white border border-[#22130C] hover:bg-[#143325] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </form>
      </main>
    </div>
  );
}
