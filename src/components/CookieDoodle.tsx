import React from "react";

export function CookieDoodle({
  className = "",
  size = 64,
  withBite = false,
}: {
  className?: string;
  size?: number;
  withBite?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Cookie Body */}
      {withBite ? (
        <path
          d="M50 5C74.85 5 95 25.15 95 50C95 52.8 94.75 55.5 94.28 58.15C90.35 55.22 85.38 53.5 80 53.5C67.57 53.5 57.5 63.57 57.5 76C57.5 82.26 60.05 87.93 64.15 92.05C59.7 94 54.8 95 50 95C25.15 95 5 74.85 5 50C5 25.15 25.15 5 50 5Z"
          fill="#D48B47"
          stroke="#1F1109"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
      ) : (
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="#D48B47"
          stroke="#1F1109"
          strokeWidth="3.5"
        />
      )}

      {/* Chocolate Chips */}
      <circle cx="32" cy="30" r="5" fill="#3D1D10" />
      <circle cx="65" cy="28" r="4.5" fill="#3D1D10" />
      <circle cx="48" cy="46" r="6" fill="#3D1D10" />
      <circle cx="30" cy="62" r="5" fill="#3D1D10" />
      <circle cx="68" cy="55" r="4" fill="#3D1D10" />
      <circle cx="45" cy="75" r="4.5" fill="#3D1D10" />
      <circle cx="75" cy="38" r="3.5" fill="#3D1D10" />
      <circle cx="20" cy="45" r="3.5" fill="#3D1D10" />

      {/* Cookie crumbs/texture */}
      <circle cx="40" cy="20" r="1.5" fill="#A86128" />
      <circle cx="58" cy="68" r="1.5" fill="#A86128" />
      <circle cx="24" cy="36" r="1.5" fill="#A86128" />
    </svg>
  );
}
