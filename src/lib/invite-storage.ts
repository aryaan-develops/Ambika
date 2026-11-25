import { InvitationData, InviteWish, OCCASION_PRESETS } from "@/types/invite";

const STORAGE_PREFIX = "ambika_invite_v2_";
const WISHES_PREFIX = "ambika_wishes_v2_";

/** Creates a URL-safe slug from the event title with a short random suffix. */
export function slugifyInviteTitle(title: string): string {
  const base = title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 32);
  const suffix = Math.random().toString(36).slice(2, 6);
  return `${base || "celebration"}-${suffix}`;
}

/** Encodes invitation data into a URL-safe base64 string (omitting large data-URI uploads). */
export function encodeInvitePayload(invite: InvitationData): string {
  const fallbackImage =
    OCCASION_PRESETS[invite.occasion]?.image ?? OCCASION_PRESETS.Marriage.image;
  const shareablePayload: InvitationData = {
    ...invite,
    coverImage: invite.coverImage.startsWith("data:")
      ? fallbackImage
      : invite.coverImage,
  };
  const json = JSON.stringify(shareablePayload);
  const bytes = new TextEncoder().encode(json);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

/** Decodes an invitation payload from the URL query parameter. */
export function decodeInvitePayload(encoded: string): InvitationData | null {
  try {
    const padded = encoded.replace(/-/g, "+").replace(/_/g, "/");
    const binary = atob(padded);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    const json = new TextDecoder().decode(bytes);
    const parsed = JSON.parse(json) as InvitationData;
    if (!parsed || typeof parsed.title !== "string" || typeof parsed.slug !== "string") {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function saveInviteLocal(invite: InvitationData): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(`${STORAGE_PREFIX}${invite.slug}`, JSON.stringify(invite));
  } catch {
    // Ignore storage quota issues gracefully
  }
}

export function loadInviteLocal(slug: string): InvitationData | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(`${STORAGE_PREFIX}${slug}`);
    return raw ? (JSON.parse(raw) as InvitationData) : null;
  } catch {
    return null;
  }
}

export function loadWishesLocal(slug: string): InviteWish[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(`${WISHES_PREFIX}${slug}`);
    return raw ? (JSON.parse(raw) as InviteWish[]) : [];
  } catch {
    return [];
  }
}

export function saveWishLocal(slug: string, wish: InviteWish): InviteWish[] {
  const existing = loadWishesLocal(slug);
  const updated = [wish, ...existing];
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(`${WISHES_PREFIX}${slug}`, JSON.stringify(updated));
    } catch {
      // Ignore storage quota issues gracefully
    }
  }
  return updated;
}

/** Formats YYYY-MM-DD cleanly for display, returning fallback when empty. */
export function formatInviteDate(dateStr: string): string {
  if (!dateStr) return "Date to be announced";
  const parsed = new Date(`${dateStr}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return dateStr;
  return parsed.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/** Formats HH:MM 24h string into 12-hour readable time. */
export function formatInviteTime(timeStr: string): string {
  if (!timeStr) return "Time TBA";
  const [hoursRaw, minsRaw] = timeStr.split(":");
  const hours = Number(hoursRaw);
  const mins = Number(minsRaw);
  if (Number.isNaN(hours) || Number.isNaN(mins)) return timeStr;
  const period = hours >= 12 ? "PM" : "AM";
  const h12 = hours % 12 || 12;
  return `${h12}:${String(mins).padStart(2, "0")} ${period}`;
}
