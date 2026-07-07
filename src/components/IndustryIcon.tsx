import React from "react";

export const IndustryIcon = ({ className, size = 24 }: { className?: string; size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Factory Body */}
      <path d="M2 21h20" />
      <path d="M2 21V17L12 14V21" />
      <path d="M12 21V9H22V21" />
      
      {/* Chimneys */}
      <path d="M5 17L4 8H8L7 17" />
      <path d="M10 14L9 7H13L12 14" />
      
      {/* Smoke Clouds */}
      <circle cx="6" cy="4" r="1.5" />
      <circle cx="8" cy="3" r="2" />
      <circle cx="4" cy="3" r="1.5" />
      
      <circle cx="11" cy="3" r="1.5" />
      <circle cx="13" cy="2" r="2" />
      <circle cx="9" cy="2" r="1.5" />
      
      {/* Top vent/roof part */}
      <path d="M18 6L22 6V9" />
      
      {/* Windows */}
      <rect x="14" y="11" width="6" height="2" />
      <rect x="14" y="14" width="2" height="2" />
      <rect x="18" y="14" width="2" height="2" />
      <rect x="14" y="17" width="2" height="2" />
      <rect x="18" y="17" width="2" height="2" />
      
      {/* Door */}
      <path d="M16 21V19H18V21" />
    </svg>
  );
};
