"use client";

import React, { useEffect, useRef, useState } from "react";

import ChatbotMessage from "./ChatbotMessage";
import { chatbotFlow } from "../data/ChatbotFlow";
import { Message } from "../hooks/chatbot";
import { X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AIOption = ({ name, onClick }: { name: string, onClick: (name: string) => void }) => (
  <button
    onClick={() => onClick(name)}
    className="w-full bg-white text-gray-800 font-medium py-2.5 px-4 rounded-lg shadow-sm hover:bg-gray-50 transition-colors flex items-center text-sm"
  >
    <div className="w-6 h-6 mr-3 flex items-center justify-center bg-gray-100 rounded-full text-xs font-bold">
      {name.charAt(0)}
    </div>
    {name}
  </button>
);

export default function ChatbotWindow({
  isOpen,
  onClose,
}: Props) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: chatbotFlow.start.message,
      isUser: false,
    },
  ]);

  const [options, setOptions] = useState(
    chatbotFlow.start.options
  );

  const [isTyping, setIsTyping] = useState(false);
  const [showAIOptions, setShowAIOptions] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const getNextStep = (option: string) => {
    switch (option) {
      // Main menu
      case "Our Services":
        return "services";
      case "Industries We Serve":
        return "industries";
      case "Pricing":
        return "pricing";
      case "About Company":
        return "about";

      // Services branches
      case "Core Services":
        return "core_services";
      case "Cloud & Infra":
        return "cloud_infra";
      case "Specialized Services":
        return "specialized";
      case "Frontend & Backend":
        return "frontend_backend";
      case "Explore Other Services":
        return "services";

      // Industries
      case "Education":
      case "FMCG":
      case "Logistics & Supply Chain":
      case "Retail & E-Commerce":
      case "Fintech":
      case "Healthcare":
      case "Real Estate":
      case "Travels & Hospitality":
        return "industry_details";
      case "Back to Industries":
        return "industries";

      // Closures
      case "Yes, let's talk!":
      case "Let's discuss my project":
      case "Contact Us":
      case "Book Consultation":
        return "closure";

      // Navigation
      case "Back":
      case "Back to Home":
        return "start";

      default:
        return "start";
    }
  };

  const handleOptionClick = (option: string) => {
    const userMessage: Message = {
      id: Date.now(),
      text: option,
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);

    setIsTyping(true);

    const nextStep = getNextStep(option);

    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: chatbotFlow[nextStep].message,
        isUser: false,
      };

      setMessages((prev) => [...prev, botMessage]);

      setOptions(chatbotFlow[nextStep].options);

      setIsTyping(false);
    }, 1000);
  };

  const handleAIClick = (aiName: string) => {
    const prompt = `Provide a comprehensive summary of Livik Software Solutions.`;
    const encodedPrompt = encodeURIComponent(prompt);
    let url = "";

    switch (aiName) {
      case "ChatGPT":
        url = `https://chatgpt.com/?q=${encodedPrompt}`;
        break;
      case "Perplexity":
        url = `https://www.perplexity.ai/?q=${encodedPrompt}`;
        break;
      case "Google Gemini":
        url = `https://gemini.google.com/app?q=${encodedPrompt}`;
        break;
      case "Grok":
        url = `https://grok.com/?q=${encodedPrompt}`;
        break;
      case "Claude":
        url = `https://claude.ai/new?q=${encodedPrompt}`;
        break;
      default:
        url = `https://chatgpt.com/?q=${encodedPrompt}`;
    }

    if (url) {
      window.open(url, "_blank");
    }

    setShowAIOptions(false);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/20 z-40 transition-opacity duration-300 ${isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
        onClick={onClose}
      />

      {/* Chat Window */}
      <div
        className={`fixed top-0 right-0 h-full w-80 sm:w-96 bg-white shadow-2xl flex flex-col z-50 transform transition-transform duration-1200 ${isOpen
          ? "translate-x-0"
          : "translate-x-full"
          }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] text-white p-2.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/chatbot-icon.png"
              alt="bot"
              className="w-10 h-10 rounded-full bg-white p-1"
            />

            <div>
              <h2 className="font-semibold text-lg">
                LivBot
              </h2>

              <p className="text-xs text-blue-100">
                Online
              </p>
            </div>
          </div>

          <button onClick={onClose} className="p-0.5 rounded-2xl cursor-pointer  hover:bg-red-500 transition-colors">
            <X size={17} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
          {messages.map((msg) => (
            <ChatbotMessage
              key={msg.id}
              text={msg.text}
              isUser={msg.isUser}
            />
          ))}

          {/* Typing */}
          {isTyping && (
            <div className="flex justify-start mb-4">
              <div className="bg-white px-4 py-3 rounded-2xl shadow-sm">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" />
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-100" />
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-200" />
                </div>
              </div>
            </div>
          )}

          {/* Options */}
          <div className="flex flex-wrap gap-2 mt-4">
            {options.map(
              (option: string, index: number) => (
                <button
                  key={index}
                  onClick={() =>
                    handleOptionClick(option)
                  }
                  className="
                    bg-blue-100
                    hover:bg-blue-200
                    text-blue-800
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    transition-all
                  "
                >
                  {option}
                </button>
              )
            )}
          </div>

          <div ref={messagesEndRef} />
        </div>

        {/* Ask AI Section */}
        <div className="bg-white px-4 py-3 relative z-20 shadow-[0_-4px_10px_-1px_rgba(0,0,0,0.05)] border-t border-gray-100 shrink-0">
          <div className="relative">
            {showAIOptions && (
              <div className="absolute bottom-full mb-3 left-0 right-0 bg-[#144781] rounded-2xl p-3 shadow-xl flex flex-col gap-2 z-30 transform transition-all animate-in fade-in slide-in-from-bottom-2">
                <div className="text-white font-semibold text-sm mb-1 px-1 flex items-center">
                  <span className="text-xl mr-2">✨</span> Ask AI for a summary
                  <br />of Livik Software Solutions
                </div>
                <AIOption name="ChatGPT" onClick={handleAIClick} />
                <AIOption name="Grok" onClick={handleAIClick} />
                <AIOption name="Perplexity" onClick={handleAIClick} />
                <AIOption name="Google Gemini" onClick={handleAIClick} />
                <AIOption name="Claude" onClick={handleAIClick} />
              </div>
            )}

            <button
              onClick={() => setShowAIOptions(!showAIOptions)}
              className="w-full bg-gradient-to-r from-[#144781] to-[#1d8fe1] text-white rounded-xl py-3 px-4 shadow-md flex items-center transition-transform active:scale-[0.98] hover:shadow-lg"
            >
              <div className="text-2xl mr-3 flex-shrink-0 animate-pulse">✨</div>
              <div className="text-left text-sm font-semibold leading-tight">
                Ask AI for a summary<br />of Livik Software Solutions
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}