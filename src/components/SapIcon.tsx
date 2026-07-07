import React from "react";
import Image from "next/image";

export const SapIcon = ({ className, size = 18 }: { className?: string; size?: number }) => {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 80"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <mask id="sap-mask">
            <rect width="100" height="80" fill="white" />
            <text
              x="42"
              y="53"
              fontFamily="Arial Black, Arial, sans-serif"
              fontWeight="900"
              fontSize="44"
              textAnchor="middle"
              fill="black"
              letterSpacing="-2"
            >
              SAP
            </text>
          </mask>
        </defs>
        <path
          d="M5 15 H95 L65 65 H5 V15 Z"
          fill="currentColor"
          mask="url(#sap-mask)"
        />
      </svg>
    </div>
  );
};
