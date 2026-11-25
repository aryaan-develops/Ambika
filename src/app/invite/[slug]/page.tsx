"use client";

import React, { Suspense, use, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { ArrowLeft, Flower2, Sparkles } from "lucide-react";
import { InvitationData, InviteWish } from "@/types/invite";
import {
  decodeInvitePayload,
  loadInviteLocal,
  loadWishesLocal,
  saveInviteLocal,
  saveWishLocal,
} from "@/lib/invite-storage";
import { DigiBouquetCard } from "@/components/DigiBouquetCard";
import { WishComposerAndWall } from "@/components/WishComposerAndWall";

function GuestInviteContent({ slug }: { slug: string }) {
  const searchParams = useSearchParams();
  const encoded = searchParams.get("e");
  const queryInvite = useMemo(
    () => (encoded ? decodeInvitePayload(encoded) : null),
    [encoded]
  );

  const [localInvite, setLocalInvite] = useState<InvitationData | null>(null);
  const [wishes, setWishes] = useState<InviteWish[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    queueMicrotask(() => {
      if (!active) return;
      const stored = loadInviteLocal(slug);
      const resolved =
        stored?.coverImage?.startsWith("data:") ? stored : queryInvite ?? stored;

      if (resolved) {
        saveInviteLocal(resolved);
        confetti({
          particleCount: 45,
          spread: 70,
          origin: { y: 0.35 },
          colors: ["#E5A83B", "#22130C", "#F2B5A7", "#A7D3D4"],
        });
      }

      setLocalInvite(stored);
      setWishes(loadWishesLocal(slug));
      setLoaded(true);
    });
    return () => {
      active = false;
    };
  }, [slug, queryInvite]);

  const invite =
    localInvite?.coverImage?.startsWith("data:")
      ? localInvite
      : queryInvite ?? localInvite;

  const handleAddWish = (wish: InviteWish) => {
    const updated = saveWishLocal(slug, wish);
    setWishes(updated);
  };

  if (!loaded && !invite) {
    return (
      <div className="min-h-screen bg-[#FAF8F2] flex items-center justify-center p-6">
        <div className="w-8 h-8 rounded-full border-2 border-[#22130C] border-t-transparent animate-spin" />
      </div>
    );
  }

  if (!invite) {
    return (
      <div className="min-h-screen bg-[#FAF8F2] text-[#22130C] flex items-center justify-center px-4">
        <div className="max-w-md w-full border-[1.5px] border-[#22130C] bg-[#FFFEFA] p-8 text-center shadow-[5px_5px_0px_rgba(34,19,12,0.1)] space-y-4">
          <div className="w-12 h-12 border border-[#22130C] bg-[#FAF8F2] flex items-center justify-center mx-auto">
            <Sparkles className="w-6 h-6 text-[#D49323]" />
          </div>
          <h1
            className="text-2xl font-extrabold font-serif"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Bouquet or Invite Not Found
          </h1>
          <p className="font-mono text-xs text-[#6B5A4E] leading-relaxed">
            This shareable link is incomplete or hasn&apos;t been created yet.
            Design a bouquet or celebration invite in seconds.
          </p>
          <Link
            href="/celebrate"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#22130C] text-white font-mono text-xs font-bold hover:bg-[#382117] shadow-[3px_3px_0px_#E5A83B] transition-all"
          >
            Create Bouquet or Invite
          </Link>
        </div>
      </div>
    );
  }

  const goingCount = wishes.reduce(
    (sum, w) => (w.attending ? sum + Math.max(1, w.guestsCount) : sum),
    0
  );

  return (
    <div className="min-h-screen bg-[#FAF8F2] text-[#22130C] pb-20">
      {/* Minimal Stationery Header */}
      <header className="sticky top-0 z-30 bg-[#FAF8F2]/90 backdrop-blur-md border-b border-[#22130C]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#22130C] hover:text-[#D49323] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Ambika Bakery</span>
          </Link>
          <span
            className="text-lg sm:text-xl font-extrabold italic font-serif text-[#22130C]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            DigiBouquet
          </span>
          <Link
            href="/celebrate"
            className="inline-flex items-center gap-1 font-mono text-[11px] font-bold px-2.5 py-1 border border-[#22130C] bg-[#FFFEFA] hover:bg-[#E5A83B]/20 transition-colors"
          >
            <Flower2 className="w-3 h-3 text-[#D49323]" />
            <span>Send One</span>
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 space-y-12">
        {/* Styled Digibouquet & Event Card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <DigiBouquetCard
            invite={invite}
            wishesCount={wishes.length}
            goingCount={goingCount}
          />
        </motion.div>

        {/* Guest Bouquet Reply & Wishes Wall */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="max-w-3xl mx-auto"
        >
          <WishComposerAndWall
            wishes={wishes}
            onAddWish={handleAddWish}
            isInviteMode={invite.mode === "invite"}
          />
        </motion.div>
      </main>
    </div>
  );
}

export default function InviteGuestPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FAF8F2] flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-[#22130C] border-t-transparent animate-spin" />
        </div>
      }
    >
      <GuestInviteContent slug={slug} />
    </Suspense>
  );
}
