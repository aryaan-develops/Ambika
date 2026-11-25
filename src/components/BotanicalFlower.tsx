"use client";

import React from "react";
import { FlowerId } from "@/types/invite";

interface BotanicalFlowerProps {
  id: FlowerId;
  className?: string;
}

/** Hand-inked watercolor botanical stem illustration inspired by stationery bouquets. */
export function BotanicalFlower({ id, className = "w-20 h-36" }: BotanicalFlowerProps) {
  switch (id) {
    case "daisy":
      return (
        <svg viewBox="0 0 90 175" fill="none" className={className} aria-hidden="true">
          <circle cx="45" cy="48" r="32" fill="#DCE8E6" opacity="0.7" />
          <path d="M45 78 C44 115 46 142 45 170" stroke="#2D4A2B" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M45 128 C33 122 25 112 24 103 C34 105 42 114 45 128 Z" fill="#7CA36E" stroke="#22130C" strokeWidth="1.4" />
          <path d="M45 142 C57 137 64 128 66 119 C56 121 49 130 45 142 Z" fill="#6B935E" stroke="#22130C" strokeWidth="1.4" />
          {[0, 24, 48, 72, 96, 120, 144, 168, 192, 216, 240, 264, 288, 312, 336].map((deg) => (
            <ellipse
              key={deg}
              cx="45"
              cy="25"
              rx="4.2"
              ry="13"
              fill="#FFFDF8"
              stroke="#22130C"
              strokeWidth="1.25"
              transform={`rotate(${deg} 45 48)`}
            />
          ))}
          <circle cx="45" cy="48" r="9.5" fill="#F2C14E" stroke="#22130C" strokeWidth="1.4" />
          <circle cx="42" cy="45" r="2" fill="#D49323" opacity="0.65" />
          <circle cx="48" cy="50" r="1.5" fill="#D49323" opacity="0.65" />
        </svg>
      );

    case "lily":
      return (
        <svg viewBox="0 0 95 190" fill="none" className={className} aria-hidden="true">
          <ellipse cx="48" cy="48" rx="34" ry="30" fill="#B6AEDB" opacity="0.5" />
          <path d="M48 76 C49 118 46 150 48 184" stroke="#2D4A2B" strokeWidth="2.3" strokeLinecap="round" />
          <path d="M47 122 C33 114 24 100 22 86 C35 92 43 106 47 122 Z" fill="#6F9A60" stroke="#22130C" strokeWidth="1.4" />
          <path d="M48 136 C63 128 73 114 75 98 C62 104 53 118 48 136 Z" fill="#5D874F" stroke="#22130C" strokeWidth="1.4" />
          <path d="M48 48 C34 26 24 14 48 10 C72 14 62 26 48 48 Z" fill="#7765B8" stroke="#22130C" strokeWidth="1.4" />
          <path d="M48 48 C25 40 12 32 16 18 C30 22 40 34 48 48 Z" fill="#6957A8" stroke="#22130C" strokeWidth="1.4" />
          <path d="M48 48 C71 40 84 32 80 18 C66 22 56 34 48 48 Z" fill="#6957A8" stroke="#22130C" strokeWidth="1.4" />
          <path d="M48 48 C26 52 16 62 24 72 C36 68 42 58 48 48 Z" fill="#8978C9" stroke="#22130C" strokeWidth="1.4" />
          <path d="M48 48 C70 52 80 62 72 72 C60 68 54 58 48 48 Z" fill="#8978C9" stroke="#22130C" strokeWidth="1.4" />
          <path d="M48 48 L48 31 M48 48 L36 36 M48 48 L60 36" stroke="#22130C" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="48" cy="30" r="2.2" fill="#F2C14E" stroke="#22130C" strokeWidth="1" />
          <circle cx="35" cy="35" r="2" fill="#F2C14E" stroke="#22130C" strokeWidth="1" />
          <circle cx="61" cy="35" r="2" fill="#F2C14E" stroke="#22130C" strokeWidth="1" />
        </svg>
      );

    case "anemone":
      return (
        <svg viewBox="0 0 90 175" fill="none" className={className} aria-hidden="true">
          <circle cx="45" cy="48" r="33" fill="#BFE2E1" opacity="0.65" />
          <path d="M45 80 C43 118 47 146 44 170" stroke="#2D4A2B" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M44 114 C31 108 24 98 25 89 C34 92 40 102 44 114 Z" fill="#7DA870" stroke="#22130C" strokeWidth="1.4" />
          <path d="M46 135 C59 130 68 122 69 112 C59 114 51 124 46 135 Z" fill="#69925D" stroke="#22130C" strokeWidth="1.4" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <path
              key={deg}
              d="M45 48 C34 32 35 16 45 14 C55 16 56 32 45 48 Z"
              fill="#EAF6F5"
              stroke="#22130C"
              strokeWidth="1.35"
              transform={`rotate(${deg} 45 48)`}
            />
          ))}
          <circle cx="45" cy="48" r="9" fill="#2A3B3C" stroke="#22130C" strokeWidth="1.4" />
          <circle cx="45" cy="48" r="12.5" stroke="#22130C" strokeWidth="1" strokeDasharray="2 3" />
        </svg>
      );

    case "peony":
      return (
        <svg viewBox="0 0 90 175" fill="none" className={className} aria-hidden="true">
          <circle cx="45" cy="48" r="33" fill="#F7C7BA" opacity="0.65" />
          <path d="M45 78 C46 116 44 146 45 170" stroke="#2D4A2B" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M45 118 C31 112 24 102 23 93 C34 96 41 106 45 118 Z" fill="#6E995F" stroke="#22130C" strokeWidth="1.4" />
          <path d="M45 134 C59 128 67 118 68 109 C58 112 50 122 45 134 Z" fill="#5D874F" stroke="#22130C" strokeWidth="1.4" />
          <circle cx="45" cy="48" r="24" fill="#F8D2C6" stroke="#22130C" strokeWidth="1.4" />
          <path d="M27 42 C32 28 45 25 56 31 C65 36 66 52 57 61 C47 68 31 65 26 53" fill="#F4B7A8" stroke="#22130C" strokeWidth="1.3" />
          <path d="M35 44 C38 35 49 34 54 41 C58 48 53 56 44 57 C37 57 32 50 35 44 Z" fill="#EE9E8C" stroke="#22130C" strokeWidth="1.3" />
          <circle cx="45" cy="46" r="4.5" fill="#E5A83B" stroke="#22130C" strokeWidth="1.2" />
        </svg>
      );

    case "sunflower":
      return (
        <svg viewBox="0 0 95 190" fill="none" className={className} aria-hidden="true">
          <circle cx="48" cy="46" r="35" fill="#FBE38E" opacity="0.7" />
          <path d="M48 78 C47 120 49 152 47 184" stroke="#2D4A2B" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M48 124 C34 118 24 106 23 95 C35 98 44 109 48 124 Z" fill="#6E995F" stroke="#22130C" strokeWidth="1.4" />
          <path d="M48 140 C62 134 72 122 74 111 C61 114 52 125 48 140 Z" fill="#5C854E" stroke="#22130C" strokeWidth="1.4" />
          {[0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340].map((deg) => (
            <path
              key={deg}
              d="M48 46 C43 32 44 16 48 12 C52 16 53 32 48 46 Z"
              fill="#F3BE3A"
              stroke="#22130C"
              strokeWidth="1.2"
              transform={`rotate(${deg} 48 46)`}
            />
          ))}
          <circle cx="48" cy="46" r="14" fill="#5A331C" stroke="#22130C" strokeWidth="1.5" />
          <circle cx="48" cy="46" r="9.5" fill="#3C2010" stroke="#8C5835" strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      );

    case "rose":
      return (
        <svg viewBox="0 0 90 175" fill="none" className={className} aria-hidden="true">
          <circle cx="45" cy="48" r="33" fill="#F29CA3" opacity="0.55" />
          <path d="M45 78 C44 116 46 146 45 170" stroke="#2D4A2B" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M45 120 C31 114 24 104 24 94 C34 97 41 108 45 120 Z" fill="#6C965C" stroke="#22130C" strokeWidth="1.4" />
          <path d="M45 138 C59 132 67 122 68 112 C57 115 50 125 45 138 Z" fill="#5B834C" stroke="#22130C" strokeWidth="1.4" />
          <circle cx="45" cy="48" r="24" fill="#E67A85" stroke="#22130C" strokeWidth="1.4" />
          <path d="M26 45 C30 29 48 24 60 33 C67 42 63 59 49 65 C35 68 25 57 26 45 Z" fill="#D95F6C" stroke="#22130C" strokeWidth="1.3" />
          <path d="M35 46 C37 37 49 35 54 42 C58 50 51 57 42 56 C36 55 33 50 35 46 Z" fill="#C24755" stroke="#22130C" strokeWidth="1.3" />
          <path d="M41 46 C43 42 49 43 49 48 C48 52 42 51 41 46 Z" fill="#9E313E" stroke="#22130C" strokeWidth="1.2" />
        </svg>
      );
  }
}
