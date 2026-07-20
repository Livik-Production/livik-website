"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle, LucideIcon } from "lucide-react";
import { coreServices } from "@/data/coreServices";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CoreServiceHeroProps {
  slug: keyof typeof coreServices;
  customBreadcrumb?: React.ReactNode;
  className?: string;
  iconScale?: number;
  centerScale?: number;
}

const TOKENS = {
  bg: "#030b1a",
  accent: "#38bdf8",
  textHi: "#ffffff",
  textMid: "rgba(226, 232, 240, 0.9)",
  textLow: "#94a3b8",
};

export default function CoreServiceHero({
  slug,
  customBreadcrumb,
  className,
  iconScale = 1,
  centerScale = 1,
}: CoreServiceHeroProps) {
  const data = coreServices[slug];
  if (!data) return null;

  return (
    <section
      className="relative isolate overflow-hidden bg-[#030b1a] text-white flex items-center justify-center pt-32 pb-16 md:pt-36 md:pb-20"
    >
      {/* AMBIENT — corner glows + faint grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full opacity-[0.18] blur-3xl"
          style={{
            background: "radial-gradient(circle, #38bdf8 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute -bottom-40 right-[-10%] h-[620px] w-[620px] rounded-full opacity-[0.14] blur-3xl"
          style={{
            background: "radial-gradient(circle, #38bdf8 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,.4) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
      </div>

      {/* CONSTELLATION — absolute, centered, behind content */}
      <div
        className="group/const absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[min(110vmin,1200px)] aspect-square opacity-[0.85]"
      >
        <Constellation
          accent={TOKENS.accent}
          ringOne={data.ringOneIcons}
          ringTwo={data.ringTwoIcons}
          iconScale={iconScale}
          centerScale={centerScale}
        />
      </div>

      {/* VIGNETTE — radial darkener for text readability */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(3,11,26,0.72) 0%, rgba(3,11,26,0.55) 35%, rgba(3,11,26,0.25) 60%, transparent 85%)",
        }}
      />

      {/* CONTENT (centered, z-stacks above bg via relative) */}
      <div
        className={cn(
          "relative mx-auto max-w-5xl px-6 lg:px-10 text-center flex flex-col items-center",
          className,
        )}
      >
        {/* Breadcrumb */}
        <div className="animate-csh-fade-up [animation-delay:0.1s]">
          {customBreadcrumb || (
            <nav className="flex items-center justify-center gap-2 text-md font-medium text-[#94a3b8] mb-8">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-gray-600">›</span>
              <Link
                href="/services"
                className="hover:text-white transition-colors"
              >
                Services
              </Link>
              <span className="mx-2">›</span>
              <span className="text-gray-500">Core Services</span>
              <span className="mx-2">›</span>
              <span className="text-white capitalize">
                {slug.replace("-", " ")}
              </span>
            </nav>
          )}
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-6 animate-csh-fade-up [animation-delay:0.2s] max-w-4xl leading-[1.1]">
          {data.title}
        </h1>

        {/* Subtitle */}
        <p className="text-md md:text-lg text-[rgba(226,232,240,0.9)] max-w-3xl mb-10 leading-relaxed animate-csh-fade-up [animation-delay:0.3s]">
          {data.subtitle}
        </p>

        {/* Bullets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-12 animate-csh-fade-up [animation-delay:0.4s]">
          {data.bullets.map((bullet, i) => (
            <div key={i} className="flex items-center gap-3 text-left">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-sky-400/20 flex items-center justify-center">
                <CheckCircle className="w-3.5 h-3.5 text-sky-400" />
              </div>
              <span className="text-slate-300 font-medium text-sm md:text-base">
                {bullet}
              </span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 animate-csh-fade-up [animation-delay:0.5s]">
          <Button
            size="lg"
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 h-14 rounded-xl shadow-lg shadow-sky-500/20 transition-all active:scale-95"
            asChild
          >
            <Link href={data.primaryCTA.href}>{data.primaryCTA.label}</Link>
          </Button>
          {/* <Button
            size="lg"
            variant="outline"
            className="border-slate-700 text-white bg-white/5 font-bold px-8 h-14 rounded-xl transition-all active:scale-95"
            asChild
          >
            <Link href={data.secondaryCTA.href}>{data.secondaryCTA.label}</Link>
          </Button> */}
        </div>
      </div>
    </section>
  );
}

function Constellation({
  accent,
  ringOne,
  ringTwo,
  iconScale = 1,
  centerScale = 1,
}: {
  accent: string;
  ringOne: LucideIcon[];
  ringTwo: LucideIcon[];
  iconScale?: number;
  centerScale?: number;
}) {
  const R1 = 42,
    R2 = 26; // ring radii in % of container

  const ring1Positions = ringOne.map((_, i) => {
    const a = (i / ringOne.length) * Math.PI * 2 - Math.PI / 2;
    return { x: 50 + R1 * Math.cos(a), y: 50 + R1 * Math.sin(a) };
  });
  const ring2Positions = ringTwo.map((_, i) => {
    const a =
      (i / ringTwo.length) * Math.PI * 2 -
      Math.PI / 2 +
      Math.PI / ringTwo.length;
    return { x: 50 + R2 * Math.cos(a), y: 50 + R2 * Math.sin(a) };
  });

  return (
    <div className="relative h-full w-full">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full overflow-visible"
      >
        <defs>
          <linearGradient id="csh-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.9" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.05" />
          </linearGradient>
          <radialGradient id="csh-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.55" />
            <stop offset="60%" stopColor={accent} stopOpacity="0.08" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="50" cy="50" r="30" fill="url(#csh-glow)" />
        <circle
          cx="50"
          cy="50"
          r={R1}
          fill="none"
          stroke={accent}
          strokeOpacity="0.45"
          strokeWidth="0.25"
          strokeDasharray="0.6 1.2"
          className="transition-[stroke-opacity] duration-500"
        />
        <circle
          cx="50"
          cy="50"
          r={R2}
          fill="none"
          stroke={accent}
          strokeOpacity="0.4"
          strokeWidth="0.25"
          strokeDasharray="0.6 1.2"
          className="transition-[stroke-opacity] duration-500"
        />

        <g className="opacity-80 transition-opacity duration-500">
          {[...ring1Positions, ...ring2Positions].map((p, i) => (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={p.x}
              y2={p.y}
              stroke="url(#csh-line)"
              strokeWidth="0.3"
              strokeDasharray="1 1.5"
              className="csh-dash"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </g>
      </svg>

      <div className="absolute inset-0 animate-csh-spin-slow">
        {ring1Positions.map((p, i) => (
          <IconNode
            key={i}
            Icon={ringOne[i]}
            left={p.x}
            top={p.y}
            size="lg"
            accent={accent}
            scale={iconScale}
            counterClass="animate-csh-spin-slow-rev"
          />
        ))}
      </div>

      <div className="absolute inset-0 animate-csh-spin-mid-rev">
        {ring2Positions.map((p, i) => (
          <IconNode
            key={i}
            Icon={ringTwo[i]}
            left={p.x}
            top={p.y}
            size="md"
            accent={accent}
            scale={iconScale}
            counterClass="animate-csh-spin-mid"
          />
        ))}
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="relative h-28 w-28 sm:h-32 sm:w-32 animate-csh-float"
          style={{ transform: `scale(${centerScale})` }}
        >
          <span className="absolute inset-0 rounded-full bg-sky-400/20 blur-2xl animate-csh-pulse" />
          <span className="absolute inset-0 rounded-full border border-sky-300/40" />
          <span className="absolute -inset-2 rounded-full border border-sky-400/20" />
          <div
            className="relative flex h-full w-full items-center justify-center rounded-full
                          bg-gradient-to-br from-sky-400/30 via-sky-500/10 to-transparent
                          ring-1 ring-sky-300/50 backdrop-blur-sm
                          shadow-[0_0_40px_rgba(56,189,248,0.35)]
                          transition-transform duration-500"
          >
            <BrandMark accent={accent} />
          </div>
          <span className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 animate-csh-spin-fast">
            <span
              className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full"
              style={{
                background: accent,
                boxShadow: `0 0 12px ${accent}, 0 0 24px ${accent}`,
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

function IconNode({
  Icon,
  left,
  top,
  size = "md",
  accent,
  counterClass,
  scale = 1,
}: any) {
  const dim =
    size === "lg" ? "h-14 w-14 sm:h-16 sm:w-16" : "h-11 w-11 sm:h-12 sm:w-12";
  const iconDim = size === "lg" ? "h-6 w-6 sm:h-7 sm:w-7" : "h-5 w-5";

  return (
    <div
      className="absolute"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className={counterClass}>
        <div style={{ transform: `scale(${scale})` }}>
          <div
            className={`relative ${dim} flex items-center justify-center
                         rounded-2xl bg-[#071428] ring-1 ring-sky-400/25
                         shadow-[0_8px_30px_-10px_rgba(56,189,248,0.35)]
                         transition-all duration-500`}
          >
            <Icon
              className={`${iconDim} relative text-sky-300 transition-all duration-500`}
              strokeWidth={1.6}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function BrandMark({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12 sm:h-14 sm:w-14">
      <defs>
        <linearGradient id="csh-brand" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#bae6fd" />
          <stop offset="100%" stopColor={accent} />
        </linearGradient>
      </defs>
      <g
        fill="none"
        stroke="url(#csh-brand)"
        strokeWidth="2.2"
        strokeLinejoin="round"
      >
        <polygon points="32,6 56,20 56,44 32,58 8,44 8,20" />
        <polygon points="32,18 46,26 46,42 32,50 18,42 18,26" opacity="0.7" />
        <path d="M32,18 L32,50 M18,26 L46,42 M46,26 L18,42" opacity="0.5" />
      </g>
      <circle cx="32" cy="34" r="3.2" fill={accent} />
    </svg>
  );
}
