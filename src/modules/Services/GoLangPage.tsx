"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import {
  ArrowRight,
  Check,
  CheckCircle,
  CheckCircle2,
  Search,
  Layout,
  Cpu,
  Activity,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import "./HeroBackend.css";
import "./WhyChoose.css";
import { Button } from "@/components/ui/button";

const deliverables = [
  {
    title: "High-Performance Backend Development",
    description:
      "Build backend systems optimized for speed, concurrency and efficient execution.",
  },
  {
    title: "Microservices Architecture",
    description:
      "Develop scalable, independent services that improve flexibility and system resilience.",
  },
  {
    title: "High-Speed API Development",
    description:
      "Create lightweight APIs capable of handling high request volumes with low latency.",
  },
  {
    title: "Real-Time Data Processing Systems",
    description:
      "Handle streaming data, concurrent workflows and real-time operations efficiently.",
  },
  {
    title: "Cloud-Native & Distributed Systems",
    description:
      "Build systems designed for modern cloud environments and scalable infrastructure.",
  },
  {
    title: "Backend Optimization & Migration",
    description:
      "Refactor or migrate existing systems to Golang to improve performance and efficiency.",
  },
];

const gains = [
  {
    title: "Faster Response Times",
    description: "Improve system performance and reduce delays under load.",
  },
  {
    title: "Better Scalability",
    description:
      "Handle growing traffic and workloads without system breakdowns.",
  },
  {
    title: "Lower Infrastructure Costs",
    description: "Efficient resource usage reduces unnecessary cloud expenses.",
  },
  {
    title: "More Stable Systems",
    description:
      "Reliable performance even during peak usage and high concurrency.",
  },
];

const whyChoose = [
  {
    title: "Performance-Focused Engineering",
    description:
      "We don’t just build systems—we optimize them for real-world performance.",
  },
  {
    title: "Designed for High-Concurrency Systems",
    description:
      "We build applications that handle scale without complexity or instability.",
  },
  {
    title: "Practical, Production-Ready Solutions",
    description:
      "No overengineering—just systems that work efficiently in real environments.",
  },
  {
    title: "Built to Scale with Your Business",
    description:
      "Your backend is designed to grow without becoming a bottleneck again.",
  },
];

const whoIsItFor = [
  "SaaS platforms handling high user traffic",
  "High-performance API-driven systems",
  "Startups scaling backend infrastructure",
  "Businesses facing performance issues in existing systems",
  "Teams moving toward microservices or distributed architectures",
];

const buildSteps = [
  {
    icon: Search,
    title: "Identify Performance Bottlenecks",
    description: "Analyze your current system and pinpoint inefficiencies",
  },
  {
    icon: Layout,
    title: "Design Efficient Backend Architecture",
    description: "Plan a system optimized for concurrency and scalability",
  },
  {
    icon: Cpu,
    title: "Develop High-Performance Services",
    description: "Build APIs and backend systems using Golang",
  },
  {
    icon: Activity,
    title: "Optimize for Load & Performance",
    description: "Test and improve latency, throughput and reliability",
  },
  {
    icon: Rocket,
    title: "Deploy & Continuously Improve",
    description: "Monitor real-world performance and scale as needed",
  },
];

const Breadcrumb = () => (
  <nav
    className="be-hero__crumb reveal"
    style={{ "--d": "0ms" } as React.CSSProperties}
  >
    <Link href="/" className="hover:text-white transition-colors">
      Home
    </Link>
    <span className="be-hero__sep mx-2">›</span>
    <Link href="/services" className="hover:text-white transition-colors">
      Services
    </Link>
    <span className="be-hero__sep mx-2">›</span>
    <span className="text-gray-500">Backend</span>
    <span className="be-hero__sep mx-2">›</span>
    <span className="be-hero__crumb-active">GoLang</span>
  </nav>
);

export default function GoLangPage() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const titleText =
    "Golang Development for High-Performance, Scalable and Efficient Backend Systems";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="be-hero be-hero--reversed">
        <div className="be-hero__diag" />
        <div
          className="be-hero__blob"
          style={{ right: "auto", left: "-5%" } as React.CSSProperties}
        />

        <div className="w-full px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Art & Terminal */}
            <div
              className="relative reveal order-2 lg:order-1"
              style={{ "--d": "600ms" } as React.CSSProperties}
            >
              <div className="be-hero__art">
                <svg
                  width="480"
                  height="450"
                  viewBox="0 -50 480 450"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="be-hero__svg w-full h-auto"
                >
                  <defs>
                    <linearGradient
                      id="be-stroke"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#1d8fe1" />
                      <stop offset="100%" stopColor="#004475" />
                    </linearGradient>
                  </defs>
                  <g transform="translate(240, 170)">
                    <defs>
                      <radialGradient
                        id="go-fade"
                        cx="50%"
                        cy="50%"
                        r="50%"
                        fx="50%"
                        fy="50%"
                      >
                        <stop offset="40%" stopColor="white" stopOpacity="1" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                      </radialGradient>
                      <mask id="go-blend-mask">
                        <circle cx="0" cy="0" r="210" fill="url(#go-fade)" />
                      </mask>
                    </defs>
                    {/* High-Tech Go Hero Image with Seamless Blending */}
                    <image
                      href="/go-be.png"
                      x="-200"
                      y="-240"
                      width="400"
                      height="400"
                      mask="url(#go-blend-mask)"
                      style={{ mixBlendMode: "screen" } as React.CSSProperties}
                    />
                  </g>

                  {/* Connecting Paths */}
                  <path
                    d="M240 -15 V140 M240 200 V320 M120 170 H200 M280 170 H360"
                    stroke="#1d8fe1"
                    strokeOpacity="0.45"
                    strokeWidth="1.5"
                    strokeDasharray="3 4"
                  />
                </svg>

                {/* Terminal Card */}
                <div
                  className="be-hero__code"
                  style={
                    { bottom: "60px", left: "-30px" } as React.CSSProperties
                  }
                >
                  <div className="be-hero__code-bar">
                    <div className="be-hero__dot be-hero__dot--r" />
                    <div className="be-hero__dot be-hero__dot--y" />
                    <div className="be-hero__dot be-hero__dot--g" />
                    <span className="be-hero__code-name">main.go</span>
                  </div>
                  <div className="be-hero__code-body">
                    <div>
                      <span className="be-kw">package</span> main
                    </div>
                    <div>
                      <span className="be-kw">func</span>{" "}
                      <span className="be-fn">main</span>() &#123;
                    </div>
                    <div className="pl-4">
                      go <span className="be-fn">process</span>()
                    </div>
                    <div>&#125;</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="text-center lg:text-right order-1 lg:order-2">
              <Breadcrumb />

              <h1
                className="be-hero__title reveal"
                style={{ "--d": "120ms" } as React.CSSProperties}
              >
                {titleText.split(" ").map((word, i) => (
                  <span
                    key={i}
                    style={
                      {
                        "--wd": `${(titleText.split(" ").length - i) * 60}ms`,
                      } as React.CSSProperties
                    }
                  >
                    {word}{" "}
                  </span>
                ))}
              </h1>

              <p
                className="be-hero__intro reveal mb-4"
                style={{ "--d": "240ms" } as React.CSSProperties}
              >
                If your system struggles with high traffic, slow response times,
                or inefficient scaling—your backend is holding you back.
              </p>

              <p
                className="be-hero__para reveal mb-8"
                style={{ "--d": "300ms" } as React.CSSProperties}
              >
                At Livik, we build Golang-based backend systems designed for
                high concurrency, low latency and real-world performance. We
                help you move from slow, resource-heavy systems to fast,
                efficient architectures that scale without breaking.
              </p>

              <div
                className="flex flex-col items-center lg:items-end mb-10 reveal"
                style={{ "--d": "360ms" } as React.CSSProperties}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
                  {[
                    "Handle thousands of concurrent requests efficiently",
                    "Reduce latency and improve response times",
                    "Optimize infrastructure and resource usage",
                    "Build systems that stay stable under load",
                  ].map((point, i) => (
                    <div key={i} className="be-hero__chip">
                      <Check className="be-hero__chip-icon w-4 h-4" />
                      <span>{point.trim()}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="be-hero__btn-group reveal"
                style={{ "--d": "480ms" } as React.CSSProperties}
              >
                <Link
                  href="/contact"
                  className="be-hero__btn be-hero__btn--primary"
                >
                  Start Your Golang Project
                </Link>
                {/* <Link href="/contact" className="be-hero__btn be-hero__btn--secondary">
                  Get a Backend Performance Review
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="heading-section max-w-4xl mx-auto">
                Not Every System Needs Golang—But When Performance Matters, It’s
                the Right Choice
              </h2>
              <p className="text-lead text-muted-foreground mt-8 max-w-3xl mx-auto">
                Golang isn’t for everything. But when your system needs to
                process high volumes, run concurrent operations, or scale
                efficiently, it becomes one of the most practical choices.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {/* Problem Statement */}
              <div className="lg:col-span-2 bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                      <Activity size={20} />
                    </div>
                    Warning Signs Your Backend Needs Go
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { title: "Slow APIs under load", icon: Activity },
                      { title: "High infrastructure costs", icon: Cpu },
                      {
                        title: "Performance bottlenecks in Node/Java systems",
                        icon: ShieldCheck,
                      },
                      {
                        title: "Difficulty scaling microservices",
                        icon: Layout,
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/60 shadow-sm"
                      >
                        <CheckCircle className="w-5 h-5 text-primary   flex-shrink-0" />
                        <span className="font-medium text-slate-700 leading-tight">
                          {item.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* The Go Advantage Callout */}
              <div className="bg-primary rounded-3xl p-8 md:p-10 text-white flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-white/20 transition-all" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">The Go Advantage</h3>
                  <p className="text-white/80 mb-8 leading-relaxed">
                    Then Golang gives you a simpler, faster and more efficient
                    backend foundation to build upon.
                  </p>
                  <div className="flex items-center gap-3 text-white font-bold text-lg">
                    <span>Performance Redefined</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Middle Context - Color 1 */}
      <section className="section-padding bg-muted overflow-hidden relative">
        <div className="container-custom max-w-6xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-center heading-section !text-primary mb-12">
              Build Systems That Perform Under Real-World Load
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
              <div className="space-y-6">
                <p className="text-2xl font-medium text-slate-800 leading-snug">
                  We use Golang to develop backend systems that don’t just work
                  in staging—but perform reliably in production.
                </p>
                <p className="text-lg text-muted-foreground">
                  From high-traffic APIs to distributed systems, we build
                  applications that.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    title: "Process data faster",
                    desc: "Compiled execution for lightning-fast performance.",
                    icon: Activity,
                  },
                  {
                    title: "Handle concurrency",
                    desc: "Native goroutines for efficient parallel processing.",
                    icon: Cpu,
                  },
                  {
                    title: "Stay stable under load",
                    desc: "Robust error handling and memory management.",
                    icon: ShieldCheck,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-5 p-5 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/50 shadow-sm hover:shadow-md transition-all hover:translate-x-2"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Deliverables - Dark */}
      <section className="pt-10 md:pt-14 pb-16 md:pb-24 relative overflow-hidden bg-[#004475] text-white">
        {/* Subtle grid pattern for depth */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff 0.5px, transparent 0.5px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="container-custom relative z-10">
          <ScrollReveal className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-center heading-section text-white flex items-center justify-center flex-wrap gap-2">
              What We{" "}
              <span className="relative px-7 py-2.5 inline-flex items-center justify-center group overflow-hidden rounded-2xl">
                {/* Premium Glass Background with Diagonal Gradient */}
                <span className="absolute inset-0 bg-gradient-to-br from-[#004475]/40 via-[#1d8fe1]/20 to-white/10 backdrop-blur-xl border border-white/30 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]" />

                {/* Animated Shimmer Overlay */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />

                {/* Text with Diagonal Gradient and Continuous Animation */}
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-[#004475] via-white to-[#1d8fe1] bg-[length:200%_200%] animate-[gradShift_4s_linear_infinite] font-black tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                  Deliver
                </span>

                {/* Subtle outer glow */}
                <span className="absolute inset-0 rounded-2xl shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] pointer-events-none" />
              </span>{" "}
              with Golang
            </h2>
          </ScrollReveal>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deliverables.map((item, index) => (
                <StaggerItem key={index} className="h-full">
                  <div className="group h-full flex flex-col rounded-2xl bg-white p-8 border border-gray-300 transition-all duration-[450ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-[10px] hover:border-[#1d8fe1] hover:bg-gradient-to-b hover:from-white hover:to-[#f4faff] shadow-[0_4px_20px_rgba(0,68,117,0.06)] hover:shadow-[0_8px_30px_rgba(0,68,117,0.28),0_0_0_1px_rgba(29,143,225,0.25),0_0_20px_rgba(29,143,225,0.35)] cursor-pointer relative overflow-hidden">
                    {/* Radial Glow Highlight */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(29,143,225,0.18)_0%,transparent_100%)] opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100 pointer-events-none" />

                    {/* Top gradient bar sliding in */}
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#004475] via-[#1d8fe1] to-[#cfe6f7] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]" />

                    {/* Icon Tile */}
                    <div className="wc-icon-tile mb-6 z-10 !h-14 !w-14">
                      <CheckCircle size={26} strokeWidth={2} />
                    </div>

                    <h3 className="heading-card text-[#004475] mb-4 relative z-10">
                      {item.title}
                    </h3>
                    <p className="text-body font-medium text-[#506478] mb-8 flex-grow relative z-10">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Who This Is For & What You Gain */}
      <section className="section-padding bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-20">
          {/* Who This Is For */}
          <div>
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-[#004475] mb-8">
                Who This Is For
              </h2>
              <div className="space-y-4">
                {whoIsItFor.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100"
                  >
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-[#004475]" />
                    </div>
                    <p className="text-[#004475] font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* What You Gain (Timeline Style) */}
          <div>
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-[#004475] mb-8">
                What You Gain
              </h2>
              <div className="relative space-y-12 before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-100">
                {gains.map((item, i) => (
                  <div key={i} className="relative pl-16">
                    <div className="absolute left-0 w-12 h-12 bg-white rounded-full border-2 border-[#004475] flex items-center justify-center text-[#004475] z-10">
                      <CheckCircle size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-[#004475] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose - Slate */}
      <section className="wc-section section-padding bg-muted">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-16">
            <h2 className="wc-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#004475]">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
                Livik
              </span>{" "}
              for Golang Development
            </h2>
          </ScrollReveal>

          <StaggerContainer>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChoose.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="wc-feature-card group flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-slate-100 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2">
                    <div className="wc-icon-tile mb-6 w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <CheckCircle2 size={24} />
                    </div>
                    <h3 className="wc-feature-title text-xl font-bold mb-4 text-[#004475]">
                      {item.title}
                    </h3>
                    <p className="wc-feature-desc text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* How We Build - White */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-center heading-section text-[#004475]">
              How We Build{" "}
              <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
                High-Performance
              </span>{" "}
              Golang Systems
            </h2>
          </ScrollReveal>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {buildSteps.map((step, index) => (
                <StaggerItem key={index}>
                  <div className="group h-full flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-gray-300 transition-all duration-[450ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-[10px] hover:border-[#1d8fe1] hover:bg-gradient-to-b hover:from-white hover:to-[#f4faff] shadow-[0_4px_20px_rgba(0,68,117,0.06)] hover:shadow-[0_12px_40px_rgba(0,68,117,0.15)] relative overflow-hidden">
                    {/* Background shade/glow on hover */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(29,143,225,0.08)_0%,transparent_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

                    {/* Icon Container */}
                    <div className="w-16 h-16 rounded-2xl bg-white border-2 border-[#cfe6f7] flex items-center justify-center mb-6 group-hover:border-[#1d8fe1] group-hover:shadow-[0_0_0_6px_rgba(29,143,225,0.1)] transition-all duration-500 relative z-10 group-hover:-translate-y-2">
                      {/* Inner Pulse Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-[#1d8fe1] opacity-0 group-hover:animate-ping-slow pointer-events-none" />

                      <step.icon
                        size={32}
                        className="text-[#004475] group-hover:text-[#1d8fe1] transition-all duration-500 group-hover:scale-110 relative z-20"
                      />
                    </div>

                    <h3 className="text-lg font-bold text-[#004475] mb-3 relative z-10 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm font-medium text-[#506478] leading-relaxed relative z-10 group-hover:text-[#334155] transition-colors duration-300">
                      {step.description}
                    </p>

                    {/* Step Number Badge */}
                    <div className="absolute top-4 right-4 text-xs font-bold text-[#cfe6f7] group-hover:text-[#1d8fe1]/20 transition-colors duration-500 select-none z-10">
                      0{index + 1}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-hero text-white">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-center heading-section">
              Ready to Fix Your Backend Performance Issues?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto mt-4">
              If your backend is slowing down your growth, it’s time to upgrade
              your architecture. Let’s build a system that performs when it
              matters.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" asChild className="px-10">
                <Link href="/contact">
                  Book a Free Strategy Call{" "}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
