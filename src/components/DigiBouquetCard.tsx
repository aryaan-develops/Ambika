"use client";

import React from "react";
import { Calendar, Clock, Heart, MapPin, Users } from "lucide-react";
import { FlowerId, InvitationData, OCCASION_PRESETS } from "@/types/invite";
import { formatInviteDate, formatInviteTime } from "@/lib/invite-storage";
import { BotanicalFlower } from "./BotanicalFlower";

interface DigiBouquetCardProps {
  invite: InvitationData;
  wishesCount?: number;
  goingCount?: number;
  editable?: boolean;
  onChangeField?: <K extends keyof InvitationData>(
    key: K,
    value: InvitationData[K]
  ) => void;
}

export function DigiBouquetCard({
  invite,
  wishesCount = 0,
  goingCount = 0,
  editable = false,
  onChangeField,
}: DigiBouquetCardProps) {
  const flowers: FlowerId[] =
    invite.flowers.length > 0
      ? invite.flowers
      : ["daisy", "lily", "peony", "sunflower"];

  const mid = Math.ceil(flowers.length / 2);
  const leftFlowers = flowers.slice(0, mid);
  const rightFlowers = flowers.slice(mid);

  const occasionMeta = OCCASION_PRESETS[invite.occasion];

  return (
    <div className="w-full flex flex-col items-center">
      {/* Occasion Artwork Banner (Marriage Couple, Birthday Kid Cutting Cake, etc.) */}
      {invite.mode === "invite" && (
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-[1.5px] border-[#22130C]/20 bg-[#FAF8F2] shadow-[4px_4px_0px_rgba(34,19,12,0.08)] mb-3.5">
            <img
              src={invite.coverImage || occasionMeta.image}
              alt={occasionMeta.label}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8C7366]">
            {occasionMeta.emoji} {occasionMeta.label}
          </span>
          <h2
            className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#22130C] font-serif tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {invite.title.trim() || occasionMeta.defaultTitle}
          </h2>
        </div>
      )}

      {/* Flanking Botanical Bouquet + Center Stationery Note Card (Digibouquet Aesthetic) */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6">
        {/* Left Botanical Cluster */}
        <div className="flex items-end justify-center -space-x-4 sm:-space-x-3 shrink-0 order-2 lg:order-1">
          {leftFlowers.map((flowerId, idx) => (
            <div
              key={`${flowerId}-l-${idx}`}
              className="transition-transform duration-300 hover:-translate-y-1.5"
              style={{
                transform: `rotate(${idx % 2 === 0 ? -5 : 4}deg) translateY(${
                  idx === 1 ? -10 : 0
                }px)`,
              }}
            >
              <BotanicalFlower
                id={flowerId}
                className="w-16 h-32 sm:w-20 sm:h-40"
              />
            </div>
          ))}
        </div>

        {/* Center Bordered Stationery Card */}
        <div className="w-full max-w-[380px] border-[1.5px] border-[#22130C] bg-[#FFFEFA] p-6 sm:p-8 shadow-[6px_6px_0px_rgba(34,19,12,0.08)] order-1 lg:order-2">
          <div className="font-mono text-xs sm:text-sm text-[#22130C] space-y-4">
            {/* Salutation */}
            <div className="flex items-baseline gap-1.5">
              {editable && onChangeField ? (
                <input
                  type="text"
                  value={invite.dearLine}
                  onChange={(e) => onChangeField("dearLine", e.target.value)}
                  placeholder="Dear Beloved,"
                  aria-label="Greeting line"
                  className="w-full bg-transparent border-b border-dashed border-[#22130C]/25 pb-1 font-mono font-bold text-[#22130C] focus:outline-none focus:border-[#22130C]"
                />
              ) : (
                <p className="font-bold">
                  {invite.dearLine.trim() || "Dear Beloved,"}
                </p>
              )}
            </div>

            {/* Message Body */}
            {editable && onChangeField ? (
              <textarea
                rows={4}
                value={invite.message}
                onChange={(e) => onChangeField("message", e.target.value)}
                placeholder="Write your heartfelt note or invitation message..."
                aria-label="Card message"
                className="w-full bg-transparent border border-dashed border-[#22130C]/20 p-2 font-mono text-xs sm:text-sm leading-relaxed text-[#4A3528] placeholder-[#8C7366]/60 focus:outline-none focus:border-[#22130C] resize-none"
              />
            ) : (
              <p className="leading-relaxed text-[#4A3528] min-h-[76px] whitespace-pre-line">
                {invite.message.trim() ||
                  "I have so much to tell you, and warm wishes to share on this special day!"}
              </p>
            )}

            {/* Signature */}
            <div className="pt-2 text-right space-y-0.5">
              <p className="font-bold text-[#22130C]">Sincerely,</p>
              {editable && onChangeField ? (
                <input
                  type="text"
                  value={invite.hostName}
                  onChange={(e) => onChangeField("hostName", e.target.value)}
                  placeholder="Your Name"
                  aria-label="Sender name"
                  className="w-full text-right bg-transparent border-b border-dashed border-[#22130C]/25 pb-0.5 font-mono text-[#6B5A4E] focus:outline-none focus:border-[#22130C]"
                />
              ) : (
                <p className="text-[#6B5A4E]">
                  {invite.hostName.trim() || "With Love"}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Right Botanical Cluster */}
        {rightFlowers.length > 0 && (
          <div className="flex items-end justify-center -space-x-4 sm:-space-x-3 shrink-0 order-3">
            {rightFlowers.map((flowerId, idx) => (
              <div
                key={`${flowerId}-r-${idx}`}
                className="transition-transform duration-300 hover:-translate-y-1.5"
                style={{
                  transform: `rotate(${idx % 2 === 0 ? 4 : -5}deg) translateY(${
                    idx === 1 ? -10 : 0
                  }px)`,
                }}
              >
                <BotanicalFlower
                  id={flowerId}
                  className="w-16 h-32 sm:w-20 sm:h-40"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Event Details Strip when Sharing an Invitation */}
      {invite.mode === "invite" && (
        <div className="mt-6 w-full max-w-2xl grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 border border-[#22130C]/20 bg-[#FFFEFA]">
            <Calendar className="w-4 h-4 text-[#D49323] shrink-0" />
            <div className="min-w-0">
              <p className="font-mono text-[10px] uppercase text-[#8C7366]">Date</p>
              <p className="text-xs font-bold text-[#22130C] truncate">
                {formatInviteDate(invite.date)}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 px-3.5 py-2.5 border border-[#22130C]/20 bg-[#FFFEFA]">
            <Clock className="w-4 h-4 text-[#D49323] shrink-0" />
            <div className="min-w-0">
              <p className="font-mono text-[10px] uppercase text-[#8C7366]">Time</p>
              <p className="text-xs font-bold text-[#22130C] truncate">
                {formatInviteTime(invite.time)}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 px-3.5 py-2.5 border border-[#22130C]/20 bg-[#FFFEFA]">
            <MapPin className="w-4 h-4 text-[#D49323] shrink-0" />
            <div className="min-w-0">
              <p className="font-mono text-[10px] uppercase text-[#8C7366]">Venue</p>
              <p className="text-xs font-bold text-[#22130C] truncate">
                {invite.venue.trim() || "Ambika Garden Lounge, Checkpost"}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Wishes / RSVP Counter Pill */}
      {(wishesCount > 0 || goingCount > 0) && (
        <div className="mt-4 inline-flex items-center gap-4 px-4 py-1.5 border border-[#22130C]/15 bg-[#FFFEFA] text-xs font-mono text-[#6B5A4E]">
          {invite.mode === "invite" && (
            <span className="inline-flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#D49323]" />
              <span>{goingCount} Attending</span>
            </span>
          )}
          <span className="inline-flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-[#D96B78] fill-[#D96B78]" />
            <span>
              {wishesCount} {wishesCount === 1 ? "Bouquet & Wish" : "Bouquets & Wishes"}
            </span>
          </span>
        </div>
      )}
    </div>
  );
}
