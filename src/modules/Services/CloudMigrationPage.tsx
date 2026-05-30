"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
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
  CheckCircle,
  CheckCircle2,
  Zap,
  Check,
  Search,
  Map,
  Rocket,
  BarChart,
  Server,
  Globe,
} from "lucide-react";
import "./CloudMigration.css";
import "./WhyChoose.css";
import { useState, useRef, useEffect } from "react";

const capabilities = [
  {
    title: "Assessment & Discovery",
    description:
      "Infrastructure and application dependency mapping. Risk and complexity analysis. Cloud readiness assessment.",
    icon: Search,
  },
  {
    title: "Migration Strategy Design",
    description:
      "Rehost, Replatform, Refactor, or Rebuild. Cost and performance optimization planning. Downtime minimization and rollback strategy.",
    icon: Map,
  },
  {
    title: "Migration Execution",
    description:
      "Secure data and workload migration. Automated tools and proven frameworks. Near-zero downtime migration techniques.",
    icon: Rocket,
  },
  {
    title: "Validation & Optimization",
    description:
      "Data reconciliation and integrity checks. Performance tuning post-migration. Cost optimization and monitoring.",
    icon: BarChart,
  },
  {
    title: "What We Migrate",
    description:
      "Enterprise applications and workloads. Databases (SQL Server, MySQL, PostgreSQL, Oracle). On-premise data centers to AWS or Azure.",
    icon: Server,
  },
  {
    title: "Cloud Platforms We Work With",
    description:
      "We specialize in seamless migrations to Amazon Web Services (AWS) and Microsoft Azure, optimizing for each platform's unique capabilities.",
    icon: Globe,
  },
];

const benefits = [
  {
    title: "Reduced Infrastructure Costs",
    description: "Lower licensing and operational overhead",
  },
  {
    title: "Improved Scalability & Performance",
    description: "Handle growing workloads efficiently",
  },
  {
    title: "Enhanced Security & Compliance",
    description: "Leverage cloud-native protection and governance",
  },
  {
    title: "Faster Deployment Cycles",
    description: "Enable quicker releases and updates",
  },
];

const Breadcrumb = () => (
  <nav className="flex flex-col items-center mb-8 text-sm font-semibold text-gray-400">
    <div className="flex items-center justify-center flex-wrap gap-2 mb-2 px-4">
      <Link href="/" className="hover:text-white transition-colors">
        Home
      </Link>
      <span className="opacity-50">›</span>
      <Link href="/services" className="hover:text-white transition-colors">
        Services
      </Link>
      <span className="opacity-50">›</span>
      <div className="flex items-center gap-2 whitespace-nowrap">
        <span className="text-gray-500">Cloud & Infra</span>
        <span className="opacity-50">›</span>
      </div>
    </div>
    <span className="text-white text-lg md:text-xl font-bold tracking-tight">
      Cloud Migration
    </span>
  </nav>
);

const CloudCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rx = ((y - centerY) / centerY) * -8;
    const ry = ((x - centerX) / centerX) * 8;

    setTilt({ rx, ry });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0 });
  };

  return (
    <div
      ref={cardRef}
      className="cl-hero__card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        {
          "--rx": `${tilt.rx}deg`,
          "--ry": `${tilt.ry}deg`,
        } as React.CSSProperties
      }
    >
      <svg
        className="cl-hero__card-svg"
        viewBox="0 0 800 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="cl-glow" cx="50%" cy="50%" r="50%">
            <stop offset="45%" stopColor="#1d8fe1" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#1d8fe1" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="cl-vignette" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(11,18,32,0)" />
            <stop offset="100%" stopColor="rgba(11,18,32,0.92)" />
          </linearGradient>
        </defs>
        <rect width="800" height="450" fill="url(#cl-glow)" />
        <g stroke="#1d8fe1" strokeOpacity="0.25">
          <line x1="0" y1="80" x2="800" y2="80" />
          <line x1="0" y1="160" x2="800" y2="160" />
          <line x1="0" y1="240" x2="800" y2="240" />
          <line x1="120" y1="0" x2="120" y2="450" />
          <line x1="320" y1="0" x2="320" y2="450" />
          <line x1="520" y1="0" x2="520" y2="450" />
          <line x1="660" y1="0" x2="660" y2="450" />
        </g>
        <g
          fill="#0f1a2e"
          stroke="#1d8fe1"
          strokeOpacity="0.6"
          strokeWidth="1.5"
        >
          <path d="M150 200 Q180 160 210 200 Q250 200 250 240 Q250 280 210 280 L150 280 Q110 280 110 240 Q110 200 150 200 Z" />
          <path d="M500 120 Q540 80 580 120 Q630 120 630 170 Q630 220 580 220 L500 220 Q450 220 450 170 Q450 120 500 120 Z" />
          <path d="M300 300 Q330 270 360 300 Q400 300 400 340 Q400 380 360 380 L300 380 Q260 380 260 340 Q260 300 300 300 Z" />
        </g>
        <g stroke="#1d8fe1" strokeOpacity="0.5" strokeDasharray="3 5">
          <path d="M120 240 L320 160 L520 170 L660 340" fill="none" />
          <path d="M120 80 L320 240 L520 120" fill="none" />
          <path d="M320 450 L520 240 L660 160" fill="none" />
          <path d="M120 320 L320 380 L520 340" fill="none" />
        </g>
        <g fill="#1d8fe1">
          <circle cx="120" cy="240" r="5" />
          <circle cx="320" cy="160" r="5" />
          <circle cx="520" cy="170" r="5" />
          <circle cx="660" cy="340" r="5" />
        </g>
        <rect width="800" height="450" fill="url(#cl-vignette)" />
      </svg>

      <div className="cl-hero__content flex flex-col items-center text-center">
        <ScrollReveal>
          <div
            className="reveal"
            style={{ "--d": "100ms" } as React.CSSProperties}
          >
            <Breadcrumb />
          </div>
          <h1
            className="cl-hero__intro text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-4 reveal max-w-4xl mx-auto text-white"
            style={{ "--d": "200ms" } as React.CSSProperties}
          >
            {"Cloud Migration That Reduces Costs, Improves Performance and Eliminates Downtime"
              .split(" ")
              .map((word, i) => (
                <span
                  key={i}
                  className="cl-hero__word inline-block mr-[0.25em]"
                  style={{ "--wd": `${i * 30}ms` } as React.CSSProperties}
                >
                  {word}
                </span>
              ))}
          </h1>
          <p
            className="cl-hero__para text-md md:text-lg font-medium mb-8 reveal max-w-2xl mx-auto text-blue-100/80"
            style={{ "--d": "300ms" } as React.CSSProperties}
          >
            {"Legacy systems limit performance, increase costs and slow your ability to scale."
              .split(" ")
              .map((word, i) => (
                <span
                  key={i}
                  className="cl-hero__word inline-block mr-[0.25em]"
                  style={{ "--wd": `${i * 30}ms` } as React.CSSProperties}
                >
                  {word}
                </span>
              ))}
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default function CloudMigrationPage() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className={`cl-hero flex flex-col pt-10 pb-10 bg-[#051121] ${isVisible ? "is-visible" : ""}`}
      >
        <div className="container-custom">
          <div className="mb-16">
            <CloudCard />
          </div>
          <div
            className="max-w-4xl mx-auto text-center reveal"
            style={{ "--d": "400ms" } as React.CSSProperties}
          >
            <p className="cl-hero__para text-gray-400 text-lg md:text-xl leading-relaxed mb-12 mx-auto">
              {"At Livik, we deliver end-to-end cloud migration services that help enterprises move from legacy infrastructure to secure, scalable and high-performance cloud environments—without disruption."
                .split(" ")
                .map((word, i) => (
                  <span
                    key={i}
                    className="cl-hero__word inline-block mr-[0.25em]"
                    style={{ "--wd": `${i * 15}ms` } as React.CSSProperties}
                  >
                    {word}
                  </span>
                ))}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                "Seamless migration with near-zero downtime",
                "Secure data transfer with zero-loss assurance",
                "Optimized performance and infrastructure cost",
                "Scalable cloud architecture built for growth",
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 px-5 py-2.5 rounded-full bg-[#0b1628] border border-blue-500/10 text-gray-300 text-sm font-semibold hover:border-blue-500/30 transition-colors shadow-lg text-left"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.5)] mt-1.5 flex-shrink-0"></div>
                  {badge}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 h-14 rounded-full shadow-xl shadow-blue-600/20 transition-all active:scale-95"
                asChild
              >
                <Link href="/contact">Start Your Cloud Migration</Link>
              </Button>
              {/* <Button size="lg" className="bg-white text-[#051121] hover:bg-gray-100 font-bold px-10 h-14 rounded-full transition-all active:scale-95" asChild>
                <Link href="/contact">Get a Free Cloud Assessment</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
              Move to the Cloud with Confidence
            </h2>
            <p className="text-lead text-muted-foreground mt-8">
              Cloud migration is not just about moving systems—it’s about
              improving performance, reliability and scalability.We ensure your
              migration is planned, controlled and optimized, so your systems
              perform better immediately after the transition.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What We Deliver */}
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
          <div className="text-center mb-16">
            <ScrollReveal>
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
                </span>
              </h2>
            </ScrollReveal>
          </div>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="group h-full flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-gray-300 hover:border-[#1d8fe1] transition-all duration-[450ms] shadow-[0_4px_20px_rgba(0,68,117,0.06)] hover:shadow-xl hover:-translate-y-[10px]">
                    <div className="wc-icon-tile mb-6 w-14 h-14 rounded-2xl bg-[#004475]/5 flex items-center justify-center text-[#004475] group-hover:bg-[#004475] group-hover:text-white transition-all duration-300">
                      <item.icon size={26} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-[#004475]">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 font-medium">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="wc-section section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-16">
            <h2 className="wc-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#004475]">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
                Livik{" "}
              </span>
              for Cloud Migration
            </h2>
          </ScrollReveal>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="wc-feature-card group flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-gray-300 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2">
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

      {/* CTA Section */}
      <section className="section-padding gradient-hero text-white">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Ready to Modernize Your Infrastructure?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto mt-4 text-blue-50">
              If your legacy systems are slowing you down, it’s time to move
              forward.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                size="lg"
                variant="secondary"
                className="px-6 h-10 rounded-full text-md"
                asChild
              >
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
