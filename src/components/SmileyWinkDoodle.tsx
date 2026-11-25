"use client";

import React, { useState, useEffect } from "react";

export function SmileyWinkDoodle({ className = "" }: { className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isWinking, setIsWinking] = useState(false);

  const runWinkSequence = () => {
    setIsVisible(true);

    // After 350ms of appearing, wink
    const winkStart = setTimeout(() => {
      setIsWinking(true);
    }, 350);

    // After 1800ms, reopen eye
    const winkEnd = setTimeout(() => {
      setIsWinking(false);
    }, 1800);

    // After 2700ms total, hide back into the 30s interval
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2700);

    return () => {
      clearTimeout(winkStart);
      clearTimeout(winkEnd);
      clearTimeout(hideTimer);
    };
  };

  useEffect(() => {
    // Initial friendly greeting 1s after page load
    const initialTimer = setTimeout(() => {
      runWinkSequence();
    }, 1000);

    // Recurring 30-second interval (hidden in between)
    const interval = setInterval(() => {
      runWinkSequence();
    }, 30000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <span
      onMouseEnter={() => {
        if (!isVisible) runWinkSequence();
      }}
      className={`relative inline-flex items-center justify-center select-none shrink-0 w-8 h-8 sm:w-9 sm:h-9 cursor-pointer transition-all duration-400 ease-out ${
        isVisible
          ? "opacity-100 scale-100 pointer-events-auto"
          : "opacity-0 scale-70 pointer-events-none"
      } ${isWinking ? "is-winking" : ""} ${className}`}
      aria-label="Ambika friendly bakery wink"
    >
      <svg
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full block overflow-visible"
      >
        <g className="head-doodle-group">
          {/* Left Eye (Open happy dot) */}
          <circle cx="8" cy="9.5" r="2.2" fill="#FFFFFF" />

          {/* Right Eye - Open State (Dot) */}
          <circle className="open-eye-dot" cx="20" cy="9.5" r="2.2" fill="#FFFFFF" />

          {/* Right Eye - Winking State (Cheeky upward arc) */}
          <path
            className="wink-eye-arc"
            d="M 17 9.5 Q 20 5.5 23 9.5"
            stroke="#FFFFFF"
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
          />

          {/* Sparkle Twinkle above winking eye */}
          <path
            className="wink-sparkle"
            d="M 24 1.5 Q 24 4 21.5 4 Q 24 4 24 6.5 Q 24 4 26.5 4 Q 24 4 24 1.5 Z"
            fill="#FFFFFF"
          />

          {/* Lowered warm expressive wide smile curve */}
          <path
            d="M 6.5 17 Q 14 24 21.5 17"
            stroke="#FFFFFF"
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
          />
        </g>
      </svg>

      <style jsx>{`
        .head-doodle-group {
          transform-origin: 14px 14px;
          transition: transform 0.3s ease;
        }

        .wink-eye-arc {
          opacity: 0;
          transform-origin: 20px 9.5px;
        }

        .wink-sparkle {
          opacity: 0;
          transform-origin: 24px 4px;
        }

        /* Active Winking State */
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
      `}</style>
    </span>
  );
}
