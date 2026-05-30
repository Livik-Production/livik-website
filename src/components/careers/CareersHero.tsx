"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Briefcase,
  TrendingUp,
  Lightbulb,
  Target,
  GraduationCap,
  Network,
  Rocket,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * CareersHero
 * Drop-in replacement for the existing careers hero <section>.
 * - Keeps the same colors (#004475 bg, #33a8d9 accent), same copy & CTA.
 * - Adds subtle, professional, career-themed ambient animations:
 *    • Floating career icons (briefcase, growth, network, lightbulb…)
 *    • Animated growth bar-chart + sparkline (SVG)
 *    • Network-of-nodes constellation with pulsing connections
 *    • Two breathing gradient blobs (your existing palette)
 *    • Soft cursor-parallax on background layers
 *    • Word-by-word headline reveal + underline shimmer
 * - GPU-friendly (transform/opacity), honors prefers-reduced-motion.
 *
 * You can drop the `paperPlaneSrc`, `onCTAClick` and `rocketState` props
 * to integrate with your existing logic untouched.
 */
const FLOATING_ICONS = [
  { Icon: Briefcase, x: "8%", y: "22%", size: 28, delay: 0 },
  { Icon: TrendingUp, x: "88%", y: "30%", size: 30, delay: 0.6 },
  { Icon: Lightbulb, x: "14%", y: "72%", size: 26, delay: 1.1 },
  { Icon: Target, x: "82%", y: "75%", size: 28, delay: 1.6 },
  { Icon: GraduationCap, x: "20%", y: "42%", size: 24, delay: 2.0 },
  { Icon: Network, x: "78%", y: "55%", size: 26, delay: 2.4 },
  { Icon: Rocket, x: "92%", y: "12%", size: 22, delay: 0.9 },
  { Icon: Sparkles, x: "5%", y: "50%", size: 22, delay: 1.4 },
];

const HEADLINE_WORDS = ["Build", "the", "future", "with", "a", "team", "that"];

export default function CareersHero({
  onCTAClick,
  paperPlaneSrc = "/images/paper-plane.png",
}: any) {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Soft cursor parallax
  useEffect(() => {
    if (prefersReducedMotion) return;
    const el = sectionRef.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMouse({ x, y });
    };
    el.addEventListener("mousemove", handler);
    return () => el.removeEventListener("mousemove", handler);
  }, [prefersReducedMotion]);

  const float = (i: number) => ({
    y: [0, -12, 0, 10, 0],
    x: [0, 6, 0, -6, 0],
    rotate: [0, 4, 0, -4, 0],
    transition: {
      duration: 10 + i * 0.8,
      repeat: Infinity,
      ease: "easeInOut",
      delay: FLOATING_ICONS[i].delay,
    },
  });

  return (
    <section
      ref={sectionRef}
      data-testid="careers-hero-section"
      className="py-14 md:py-32 bg-[#004475] text-white relative overflow-hidden"
    >
      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#ffffff 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Soft radial vignette for depth */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, transparent 55%, rgba(0,30,60,0.45) 100%)",
        }}
      />

      {/* Breathing gradient blobs (your palette) */}
      <motion.div
        aria-hidden
        className="absolute top-1/4 left-10 w-64 h-64 md:w-80 md:h-80 bg-[#33a8d9] rounded-full mix-blend-screen filter blur-[110px] opacity-40"
        animate={
          prefersReducedMotion
            ? {}
            : { scale: [1, 1.15, 1], opacity: [0.35, 0.5, 0.35] }
        }
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{
          transform: `translate(${mouse.x * 18}px, ${mouse.y * 18}px)`,
        }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-1/4 right-10 w-72 h-72 md:w-96 md:h-96 bg-[#1d8fe1] rounded-full mix-blend-screen filter blur-[120px] opacity-30"
        animate={
          prefersReducedMotion
            ? {}
            : { scale: [1, 1.1, 1], opacity: [0.25, 0.4, 0.25] }
        }
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          transform: `translate(${mouse.x * -22}px, ${mouse.y * -22}px)`,
        }}
      />

      {/* Network constellation (top-left) */}
      <svg
        aria-hidden
        className="absolute top-6 left-6 md:top-10 md:left-12 opacity-50 hidden sm:block"
        width="220"
        height="160"
        viewBox="0 0 220 160"
        fill="none"
        style={{
          transform: `translate(${mouse.x * 10}px, ${mouse.y * 10}px)`,
        }}
      >
        {[
          [30, 30, 90, 60],
          [90, 60, 160, 35],
          [90, 60, 60, 120],
          [90, 60, 170, 110],
          [170, 110, 200, 60],
        ].map(([x1, y1, x2, y2], i) => (
          <motion.line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#93e0ff"
            strokeWidth="1"
            strokeDasharray="3 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{
              duration: 1.6,
              delay: 0.3 + i * 0.15,
              ease: "easeOut",
            }}
          />
        ))}
        {[
          [30, 30],
          [90, 60],
          [160, 35],
          [60, 120],
          [170, 110],
          [200, 60],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="3"
            fill="#93e0ff"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0.8, 1.3, 0.8],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              delay: i * 0.25,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Growth chart (top-right) */}
      <svg
        aria-hidden
        className="absolute top-6 right-6 md:top-10 md:right-12 opacity-60 hidden sm:block"
        width="200"
        height="120"
        viewBox="0 0 200 120"
        fill="none"
        style={{
          transform: `translate(${mouse.x * -10}px, ${mouse.y * -10}px)`,
        }}
      >
        {/* Baseline */}
        <line
          x1="10"
          y1="100"
          x2="190"
          y2="100"
          stroke="#93e0ff"
          strokeOpacity="0.3"
          strokeWidth="1"
        />
        {/* Bars growing up */}
        {[
          { x: 20, h: 28 },
          { x: 50, h: 44 },
          { x: 80, h: 36 },
          { x: 110, h: 60 },
          { x: 140, h: 78 },
          { x: 170, h: 92 },
        ].map((b, i) => (
          <motion.rect
            key={i}
            x={b.x}
            width="14"
            y={100 - b.h}
            height={b.h}
            rx="2"
            fill="url(#barGrad)"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 0.9 }}
            transition={{
              duration: 0.7,
              delay: 0.4 + i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: `${b.x + 7}px 100px` }}
          />
        ))}
        {/* Sparkline */}
        <motion.path
          d="M 20 80 L 50 64 L 80 70 L 110 48 L 140 32 L 170 18"
          stroke="#ffffff"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.9 }}
          transition={{ duration: 1.8, delay: 1.4, ease: "easeOut" }}
        />
        {/* Arrow tip */}
        <motion.path
          d="M 162 22 L 170 18 L 168 27"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 3.0 }}
          style={{ transformOrigin: "170px 18px" }}
        />
        <defs>
          <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#33a8d9" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating career icons */}
      {FLOATING_ICONS.map(({ Icon, x, y, size }, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            left: x,
            top: y,
            transform: `translate(${mouse.x * (8 + i)}px, ${mouse.y * (8 + i)}px)`,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
        >
          <motion.div
            animate={prefersReducedMotion ? {} : float(i)}
            className="rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-sm p-2.5 shadow-[0_0_30px_rgba(51,168,217,0.15)]"
          >
            <Icon
              size={size as any}
              className="text-[#93e0ff]"
              strokeWidth={1.5}
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Main content */}
      <div className="container-custom relative z-10 text-center mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto -mt-12"
        >
          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-white/20 bg-white/[0.06] backdrop-blur-sm text-sm text-white/90"
            data-testid="careers-hero-eyebrow"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#33a8d9] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#33a8d9]" />
            </span>
            We&rsquo;re hiring — grow with us
          </motion.div>

          <h1
            data-testid="careers-hero-title"
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
          >
            {HEADLINE_WORDS.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + i * 0.07,
                  ease: "easeOut",
                }}
                className="inline-block mr-3"
              >
                {w}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.6,
                delay: 0.15 + HEADLINE_WORDS.length * 0.07,
              }}
              className="inline-block relative"
            >
              <motion.span
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        textShadow: [
                          "0 0 0px rgba(51,168,217,0)",
                          "0 0 24px rgba(51,168,217,0.6)",
                          "0 0 0px rgba(51,168,217,0)",
                        ],
                      }
                }
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#33a8d9] to-white"
              >
                cares
              </motion.span>
              .{/* Shimmer underline */}
              <motion.span
                aria-hidden
                className="absolute left-0 right-0 -bottom-2 h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#33a8d9] to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.9, delay: 1.2, ease: "easeOut" }}
                style={{ transformOrigin: "center" }}
              />
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
            data-testid="careers-hero-subtitle"
          >
            Join a passionate team of engineers, designers, and innovators
            creating impactful digital solutions for businesses worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              data-testid="careers-hero-cta"
              size="lg"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={(e) => {
                if (onCTAClick) {
                  e.preventDefault();
                  onCTAClick();
                }
              }}
              className="group bg-[#33a8d9] hover:bg-[#258ab5] text-white border-none text-lg px-8 h-14 rounded-xl shadow-[0_0_20px_rgba(51,168,217,0.4)] transition-all hover:shadow-[0_0_30px_rgba(51,168,217,0.6)] flex items-center justify-center gap-2.5 relative overflow-hidden"
            >
              <Link href="/careers/resumes">
                {/* Sheen sweep */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1100ms] ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
                <span className="relative z-10">Apply Now</span>
                <motion.div
                  className="relative w-6 h-6 flex items-center justify-center z-10"
                  animate={
                    isHovered
                      ? { x: 6, y: -6, scale: 1.1 }
                      : { x: 0, y: 0, scale: 1 }
                  }
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  <img
                    src={paperPlaneSrc}
                    alt=""
                    className="w-6 h-6 object-contain pointer-events-none"
                    onError={(e) => {
                      // Graceful fallback if image not present
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  {/* Fallback rocket icon if image fails */}
                  <Rocket
                    size={18}
                    className="absolute text-white opacity-0"
                    aria-hidden
                  />
                </motion.div>
              </Link>
            </Button>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.25 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white/70 text-sm"
            data-testid="careers-hero-trust-strip"
          >
            <span className="flex items-center gap-2">
              <TrendingUp size={16} className="text-[#93e0ff]" />
              Continuous Career Growth
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="flex items-center gap-2">
              <GraduationCap size={16} className="text-[#93e0ff]" />
              Learning & Skill Development
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="flex items-center gap-2">
              <Network size={16} className="text-[#93e0ff]" />
              Innovation-Driven Team Culture
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
