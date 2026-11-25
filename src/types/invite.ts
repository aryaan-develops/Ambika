export type InviteMode = "bouquet" | "invite";

export type InviteOccasion =
  | "Marriage"
  | "Birthday"
  | "Anniversary"
  | "Baby Shower";

export type FlowerId =
  | "daisy"
  | "lily"
  | "anemone"
  | "peony"
  | "sunflower"
  | "rose";

export interface InviteWish {
  id: string;
  guestName: string;
  attending: boolean;
  guestsCount: number;
  message: string;
  flowers: FlowerId[];
  createdAt: string;
}

export interface InvitationData {
  slug: string;
  mode: InviteMode;
  occasion: InviteOccasion;
  title: string;
  dearLine: string;
  hostName: string;
  date: string;
  time: string;
  venue: string;
  message: string;
  flowers: FlowerId[];
  coverImage: string;
  notifyEmail?: string;
  notifyOnWishes?: boolean;
  createdAt: string;
}

export const FLOWER_CATALOG: {
  id: FlowerId;
  name: string;
  accent: string;
}[] = [
  { id: "daisy", name: "Chamomile Daisy", accent: "#F3D250" },
  { id: "lily", name: "Violet Lily", accent: "#7B68B8" },
  { id: "anemone", name: "Mist Anemone", accent: "#A7D3D4" },
  { id: "peony", name: "Blush Peony", accent: "#F2B5A7" },
  { id: "sunflower", name: "Golden Sunflower", accent: "#E5A83B" },
  { id: "rose", name: "Coral Rose", accent: "#D96B78" },
];

export const DEFAULT_FLOWERS: FlowerId[] = [
  "daisy",
  "lily",
  "anemone",
  "peony",
  "sunflower",
  "rose",
];

export const OCCASION_PRESETS: Record<
  InviteOccasion,
  {
    id: InviteOccasion;
    emoji: string;
    label: string;
    image: string;
    defaultTitle: string;
    defaultDear: string;
    defaultMessage: string;
  }
> = {
  Marriage: {
    id: "Marriage",
    emoji: "💍",
    label: "Marriage Invitation",
    image: "/images/invite-marriage.jpg",
    defaultTitle: "Aarav & Meera's Wedding",
    defaultDear: "Dear Loved Ones,",
    defaultMessage:
      "With joyful hearts, we invite you to bless our union and celebrate an evening of love, vows, and sweet treats together.",
  },
  Birthday: {
    id: "Birthday",
    emoji: "🎂",
    label: "Birthday Party",
    image: "/images/invite-birthday.jpg",
    defaultTitle: "Riya's 6th Birthday Party",
    defaultDear: "Dear Friends & Family,",
    defaultMessage:
      "Come cut the cake, make a wish, and share warm laughter and freshly baked treats with us!",
  },
  Anniversary: {
    id: "Anniversary",
    emoji: "🥂",
    label: "Anniversary",
    image: "/images/invite-anniversary.jpg",
    defaultTitle: "Celebrating 10 Sweet Years",
    defaultDear: "Dear Closest Friends,",
    defaultMessage:
      "Join us for candlelight, warm pastries, and a joyful toast to the memories we've shared.",
  },
  "Baby Shower": {
    id: "Baby Shower",
    emoji: "🧸",
    label: "Baby Shower",
    image: "/images/invite-baby-shower.jpg",
    defaultTitle: "Little Miracle Baby Shower",
    defaultDear: "Dear Well-Wishers,",
    defaultMessage:
      "We are welcoming a sweet little bundle of joy and would love your warm blessings over tea and cake.",
  },
};

export const QUICK_WISH_CHIPS = [
  "Wishing you a lifetime of sweetness & joy!",
  "So excited to celebrate with you!",
  "Sending you flowers, hugs, and warm blessings.",
  "Save me a slice of cake — wouldn't miss it!",
];
