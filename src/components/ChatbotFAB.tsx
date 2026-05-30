"use client";

import React, { useState } from "react";
import ChatbotWindow from "./ChatbotWindow";

export default function ChatbotFAB() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chatbot Window */}
      <ChatbotWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {/* Chatbot Button */}
      <div className="relative z-50 flex flex-col items-center">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative flex items-center justify-center cursor-pointer select-none transition-all duration-300 hover:scale-110 active:scale-95 group"
          aria-label="Chatbot"
          title="Chat with us"
        >
          <img
            src="/chatbot-icon.png"
            alt="Chatbot"
            width={52}
            height={52}
            className="drop-shadow-lg transform transition-all duration-300 group-hover:rotate-[8deg] group-hover:scale-105"
          />
        </button>
      </div>
    </>
  );
}
