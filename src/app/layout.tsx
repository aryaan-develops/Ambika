import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { AgentationProvider } from "@/components/AgentationProvider";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ambika | Artisan Bakery & Cafe - Freshly Baked Goodness",
  description:
    "Freshly baked goodness every day. Artisanal breads, cookies, cupcakes, donuts, and decadent pastries handcrafted with pure ingredients and love.",
  keywords: [
    "Ambika bakery",
    "artisan bakery",
    "fresh cookies",
    "pastries",
    "cupcakes",
    "gourmet sourdough",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${outfit.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#FAF5EE] text-[#22130C]">
        {children}
        <AgentationProvider />
      </body>
    </html>
  );
}
