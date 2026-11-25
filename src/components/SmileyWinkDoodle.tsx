"use client";

import React, { useEffect, useState } from "react";

type DoodlePhase = "wink" | "cake" | "cookie";

export function SmileyWinkDoodle({
  className = "",
  color = "#FFFFFF",
}: {
  className?: string;
  color?: string;
}) {
  const [phase, setPhase] = useState<DoodlePhase>("wink");
  const [isWinking, setIsWinking] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const schedule = (fn: () => void, ms: number) => {
      const id = setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
      timers.push(id);
    };

    const runCycle = () => {
      setPhase("wink");
      setIsWinking(false);

      // Blink / wink inside the smiley phase
      schedule(() => setIsWinking(true), 250);
      schedule(() => setIsWinking(false), 1850);

      // Transition to Cake doodle
      schedule(() => setPhase("cake"), 2300);

      // Transition to Cookie doodle
      schedule(() => setPhase("cookie"), 4300);

      // Loop seamlessly back to Smiley Wink (no 30s hidden timeout)
      schedule(runCycle, 6300);
    };

    runCycle();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  const badgeClass = (active: boolean) =>
    `absolute inset-0 w-full h-full block overflow-visible transition-all duration-300 ease-out ${active
      ? "opacity-100 scale-100 rotate-0"
      : "opacity-0 scale-50 -rotate-12 pointer-events-none"
    }`;

  return (
    <span
      className={`relative inline-flex items-center justify-center select-none shrink-0 w-8 h-8 sm:w-9 sm:h-9 cursor-pointer ${isWinking && phase === "wink" ? "is-winking" : ""
        } ${className}`}
      aria-label="Ambika playful bakery doodle"
    >
      {/* 1. Smiley Wink / Blink Doodle */}
      <svg
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={badgeClass(phase === "wink")}
      >
        <g className="head-doodle-group">
          <circle cx="8" cy="9.5" r="2.2" fill={color} />
          <circle className="open-eye-dot" cx="20" cy="9.5" r="2.2" fill={color} />
          <path
            className="wink-eye-arc"
            d="M 17 9.5 Q 20 5.5 23 9.5"
            stroke={color}
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
          />
          <path
            className="wink-sparkle"
            d="M 24 1.5 Q 24 4 21.5 4 Q 24 4 24 6.5 Q 24 4 26.5 4 Q 24 4 24 1.5 Z"
            fill={color}
          />
          <path
            d="M 6.5 17 Q 14 24 21.5 17"
            stroke={color}
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
          />
        </g>
      </svg>

      {/* 2. Doodle Birthday Cake with Lit Candle */}
      <svg
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${badgeClass(phase === "cake")} ${phase === "cake" ? "doodle-cake-active" : ""
          }`}
      >
        <g className="cake-doodle-group">
          {/* Plate */}
          <path
            d="M 3.5 24.5 L 24.5 24.5"
            stroke={color}
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          {/* Cake Body */}
          <path
            d="M 6 24.5 L 6 14.5 Q 6 12.5 8 12.5 L 20 12.5 Q 22 12.5 22 14.5 L 22 24.5"
            stroke={color}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Frosting Drip */}
          <path
            d="M 6 16.5 Q 9 19.5 11.5 16.5 Q 14 19.5 16.5 16.5 Q 19.2 19.5 22 16.5"
            stroke={color}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Candle */}
          <path
            d="M 14 12.5 L 14 8"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Candle Flame */}
          <path
            className="cake-flame"
            d="M 14 2 C 16.3 4.3 16.2 6.4 14 7 C 11.8 6.4 11.7 4.3 14 2 Z"
            fill={color}
          />
        </g>
      </svg>

      {/* 3. Doodle Cookie with Bite & Chocolate Chips */}
      <svg
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${badgeClass(phase === "cookie")} ${phase === "cookie" ? "doodle-cookie-active" : ""
          }`}
      >
        <g className="cookie-doodle-group">
          <path
            d="M 15.5 4.2 A 10 10 0 1 0 23.8 12.5 Q 20.5 12.4 19.8 9.8 Q 17.2 9.1 15.5 4.2 Z"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Chocolate Chips */}
          <circle cx="10.2" cy="10.8" r="1.6" fill={color} />
          <circle cx="16.2" cy="14.2" r="1.7" fill={color} />
          <circle cx="10.2" cy="17.8" r="1.5" fill={color} />
          <circle cx="15.2" cy="20.2" r="1.4" fill={color} />
          {/* Playful Crumbs */}
          <circle cx="22.8" cy="5.8" r="1.1" fill={color} />
          <circle cx="25.2" cy="8.4" r="0.9" fill={color} />
        </g>
      </svg>

      <style jsx>{`
        .head-doodle-group,
        .cake-doodle-group,
        .cookie-doodle-group {
          transform-origin: 14px 14px;
        }

        .wink-eye-arc {
          opacity: 0;
          transform-origin: 20px 9.5px;
        }

        .wink-sparkle {
          opacity: 0;
          transform-origin: 24px 4px;
        }

        .cake-flame {
          transform-origin: 14px 6.5px;
        }

        :global(.is-winking) .head-doodle-group {
          animation: winkHeadMotion 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        :global(.is-winking) .open-eye-dot {
          animation: winkEyeMorph 1.5s ease-in-out forwards;
        }

        :global(.is-winking) .wink-eye-arc {
          animation: winkArcMorph 1.5s ease-in-out forwards;
        }

        :global(.is-winking) .wink-sparkle {
          animation: sparkleTwinkle 1.5s ease-out forwards;
        }

        :global(.doodle-cake-active) .cake-doodle-group {
          animation: bakeryPopBounce 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        :global(.doodle-cake-active) .cake-flame {
          animation: flameFlicker 0.65s ease-in-out infinite alternate;
        }

        :global(.doodle-cookie-active) .cookie-doodle-group {
          animation: cookieWobble 1.6s ease-in-out infinite;
        }

        @keyframes winkHeadMotion {
          0% {
            transform: rotate(0deg) scale(1) translateY(0);
          }
          20% {
            transform: rotate(9deg) scale(1.08) translateY(-1.5px);
          }
          50% {
            transform: rotate(7deg) scale(1.06) translateY(-1px);
          }
          75% {
            transform: rotate(-2deg) scale(1.02) translateY(-0.5px);
          }
          100% {
            transform: rotate(0deg) scale(1) translateY(0);
          }
        }

        @keyframes winkEyeMorph {
          0%, 10% {
            opacity: 1;
            transform: scaleY(1);
          }
          20%, 70% {
            opacity: 0;
            transform: scaleY(0);
          }
          80%, 100% {
            opacity: 1;
            transform: scaleY(1);
          }
        }

        @keyframes winkArcMorph {
          0%, 10% {
            opacity: 0;
            transform: scale(0.65);
          }
          20%, 70% {
            opacity: 1;
            transform: scale(1);
          }
          80%, 100% {
            opacity: 0;
            transform: scale(0.65);
          }
        }

        @keyframes sparkleTwinkle {
          0%, 15% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          28%, 62% {
            opacity: 1;
            transform: scale(1.15) rotate(45deg);
          }
          75%, 100% {
            opacity: 0;
            transform: scale(0) rotate(90deg);
          }
        }

        @keyframes bakeryPopBounce {
          0% {
            transform: scale(0.75) translateY(2px);
          }
          60% {
            transform: scale(1.08) translateY(-1px);
          }
          100% {
            transform: scale(1) translateY(0);
          }
        }

        @keyframes flameFlicker {
          0% {
            transform: scale(0.92) rotate(-6deg);
          }
          100% {
            transform: scale(1.12) rotate(6deg);
          }
        }

        @keyframes cookieWobble {
          0%, 100% {
            transform: rotate(-4deg) scale(1);
          }
          50% {
            transform: rotate(7deg) scale(1.06);
          }
        }
      `}</style>
    </span>
  );
}
