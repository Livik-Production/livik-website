"use client";

import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";

import { SiHp, SiZoho, SiTata, SiWipro, SiAccenture } from "react-icons/si";
import { FaApple, FaSpotify, FaAmazon, FaGoogle, FaMicrosoft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const ZohoLogo = () => (
  <svg viewBox="0 0 160 55" className="h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g strokeWidth="5.5">
      <rect x="16" y="8" width="28" height="28" rx="5" stroke="#E31837" transform="rotate(-14 30 22)" />
      <rect x="48" y="8" width="28" height="28" rx="5" stroke="#229342" transform="rotate(14 62 22)" />
      <rect x="80" y="8" width="28" height="28" rx="5" stroke="#006BB6" transform="rotate(-14 94 22)" />
      <rect x="112" y="8" width="28" height="28" rx="5" stroke="#F5A900" transform="rotate(14 126 22)" />
    </g>
    <text x="30" y="52" fill="#000" fontSize="14" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">Z</text>
    <text x="62" y="52" fill="#000" fontSize="14" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">O</text>
    <text x="94" y="52" fill="#000" fontSize="14" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">H</text>
    <text x="126" y="52" fill="#000" fontSize="14" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">O</text>
  </svg>
);

// Using real brand logos for the grid with original brand colors
const clients = [
  { name: "HP", logo: SiHp, color: "#0096D6" },
  { name: "Zoho", customLogo: <ZohoLogo /> },
  { name: "Tata", logo: SiTata, color: "#0033A0" },
  { name: "Wipro", logo: SiWipro, color: "#000000" },
  { name: "Accenture", logo: SiAccenture, color: "#A100FF" },
  { name: "Apple", logo: FaApple, color: "#000000" },
  { name: "Google", logo: FcGoogle },
  { name: "Microsoft", logo: FaMicrosoft, color: "#00A4EF" },
  { name: "Amazon", customLogo: <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-8 w-auto mt-2" /> },
  { name: "Spotify", logo: FaSpotify, color: "#1ED760" },
];

const metrics = [
  {
    value: "50+",
    title: "Projects Delivered",
    description: "We bring products to market with structured clarity and robust engineering that define true digital presence."
  },
  {
    value: "10+",
    title: "Industries Served",
    description: "Elevating identity with scalable solutions. We craft experiences that extend far beyond visual form."
  },
  {
    value: "95%",
    title: "Client Satisfaction",
    description: "Through precision and intention, we transform ideas into cohesive platforms that define modern business."
  },
  {
    value: "100%",
    title: "On-Time Delivery",
    description: "Blending modern aesthetics with functional design, delivering refined solutions that push boundaries."
  },
];

export default function OurClients() {
  return (
    <section className="py-16 md:py-24 bg-[#FAFAFA] text-gray-900 overflow-hidden">
      <div className="container-custom">
        {/* Top Section: Heading + Grid */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-snug">
              Trusted by the world&apos;s fastest growing company
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 max-w-5xl mx-auto">
            {clients.map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="flex flex-col items-center justify-center gap-3 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                {client.customLogo ? (
                  client.customLogo
                ) : (
                  <client.logo className="w-10 h-10 md:w-12 md:h-12" style={{ color: client.color }} />
                )}
                <span className="font-bold text-[#111111] text-sm tracking-wide uppercase">{client.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Metrics in a single row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col border-t border-gray-200 pt-4 relative group"
            >
              <div className="absolute top-6 right-0 opacity-50 group-hover:opacity-100 transition-opacity">
                {/* Custom arrow mimicking the top-right corner arrow from the image */}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1H11V11" stroke="#A3A3A3" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="text-6xl md:text-7xl font-medium tracking-tighter text-[#111111] mb-6">
                {metric.value}
              </div>
              <div className="text-[15px] font-semibold text-[#111111] mb-3">
                {metric.title}
              </div>
              <div className="text-[13px] text-gray-500 leading-relaxed pr-6">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
