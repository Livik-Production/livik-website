"use client";

import React from "react";

export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/918220907614"
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-center cursor-pointer select-none transition-all duration-300 hover:scale-110 active:scale-95 group"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <img
        src="/whatsapp-icon.png"
        alt="WhatsApp"
        width={38}
        height={38}
        className="drop-shadow-lg transform transition-all duration-300 group-hover:rotate-[8deg] group-hover:scale-105"
      />
    </a>
  );
}
