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
  Layout,
  Database,
  Activity,
  ShieldCheck,
  Code,
} from "lucide-react";
import "./CloudMigration.css";
import "./WhyChoose.css";
import { useState, useRef, useEffect } from "react";

const capabilities = [
  {
    title: "SAP Implementation & Customization",
    description:
      "Deploy SAP solutions aligned with your business processes to improve efficiency and reduce manual work.",
    details: [],
    icon: Layout,
  },
  {
    title: "SAP S/4HANA Migration",
    description:
      "Upgrade from legacy systems to S/4HANA for better performance, real-time analytics and scalability.",
    details: [],
    icon: Activity,
  },
  {
    title: "SAP System Integration",
    description:
      "Connect SAP with enterprise systems and third-party tools to eliminate data silos and improve workflows.",
    details: [],
    icon: Database,
  },
  {
    title: "SAP Cloud Migration",
    description:
      "Move your SAP workloads to the cloud for greater flexibility, scalability and cost efficiency.",
    details: [],
    icon: Zap,
  },
  {
    title: "Custom ABAP Development",
    description:
      "Extend SAP functionality with tailored ABAP solutions designed around your business needs.",
    details: [],
    icon: Code,
  },
  {
    title: "24/7 SAP Support & Maintenance",
    description:
      "Ensure system stability, performance and continuous optimization with proactive support.",
    details: [],
    icon: ShieldCheck,
  },
];

const gains = [
  {
    title: "Improved Operational Efficiency",
    desc: "Streamline processes and reduce manual work",
  },
  {
    title: "Better Business Visibility",
    desc: "Access real-time data across your organization",
  },
  {
    title: "Faster Decision-Making",
    desc: "Turn data into actionable insights",
  },
  {
    title: "Scalable SAP Systems",
    desc: "Support business growth without system limitations",
  },
];

const benefits = [
  {
    title: "Business-Focused SAP Solutions",
    description:
      "We align SAP with your business goals—not just technical requirements.",
  },
  {
    title: "Process Optimization That Reduces Costs",
    description:
      "Streamline workflows, eliminate inefficiencies and improve overall productivity.",
  },
  {
    title: "Seamless Integration Across Systems",
    description:
      "Ensure smooth data flow between SAP and your entire technology ecosystem.",
  },
  {
    title: "Continuous Optimization & Support",
    description:
      "We don’t stop at implementation—we continuously improve your SAP performance.",
  },
];

const Breadcrumb = () => (
  <nav className="flex flex-wrap mb-8 text-sm font-semibold text-gray-400 justify-center items-center gap-y-2 px-4">
    <Link href="/" className="hover:text-white transition-colors">
      Home
    </Link>
    <span className="mx-2">›</span>
    <Link href="/services" className="hover:text-white transition-colors">
      Services
    </Link>
    <span className="mx-2">›</span>
    <span className="text-gray-500">Specialized</span>
    <span className="mx-2">›</span>
    <span className="text-white text-center">SAP Services</span>
  </nav>
);

const SAPHeroCard = () => {
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

      <div className="relative z-10 flex flex-col items-center text-center justify-center py-10 md:py-0 w-full">
        <ScrollReveal>
          <div
            className="reveal"
            style={{ "--d": "100ms" } as React.CSSProperties}
          >
            <Breadcrumb />
          </div>
          <h1
            className="cl-hero__intro text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-4 reveal max-w-4xl mx-auto text-white px-4"
            style={{ "--d": "200ms" } as React.CSSProperties}
          >
            {"SAP Consulting That Simplifies Operations, Cuts Costs and Scales Your Business"
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
            className="cl-hero__para text-md md:text-lg font-medium mb-8 reveal max-w-2xl mx-auto text-blue-100/80 px-4"
            style={{ "--d": "300ms" } as React.CSSProperties}
          >
            {"SAP is powerful—but only if it’s implemented and optimized correctly."
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

function SAPIntroSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Turn SAP Into a Growth Engine—Not a Bottleneck
          </h1>
        </div>

        <div className="space-y-6 text-gray-700 text-base leading-relaxed">
          <p>
            Most SAP implementations fail to deliver ROI because they’re overly
            complex and poorly aligned with business needs.
          </p>

          <p>
            We design and implement SAP solutions tailored to your workflows,
            helping you automate processes, improve decision-making and increase
            operational efficiency.
          </p>

          <p>
            Whether you’re implementing SAP for the first time or optimizing an
            existing system, we help you maximize ROI and reduce system
            friction.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function SAPPage() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className={`cl-hero flex flex-col items-center justify-center pt-10 pb-10 bg-[#051121] ${isVisible ? "is-visible" : ""}`}
      >
        <div className="container-custom w-full flex flex-col items-center">
          <div className="flex justify-center mb-8 md:mb-16">
            <SAPHeroCard />
          </div>

          <div
            className="max-w-4xl mx-auto text-center reveal"
            style={{ "--d": "400ms" } as React.CSSProperties}
          >
            <p className="cl-hero__para text-gray-400 text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-12 mx-auto text-center px-4">
              {"At Livik, we help you unlock real business value from SAP by streamlining processes, improving visibility and eliminating inefficiencies. From implementation to optimization, we ensure your SAP environment drives performance—not complexity."
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

            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12 px-2">
              {[
                "Faster, more efficient business processes",
                "Real-time visibility across operations",
                "Reduced operational costs through automation",
                "Scalable SAP systems built for growth",
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0b1628] border border-blue-500/10 text-gray-300 text-xs md:text-sm font-semibold hover:border-blue-500/30 transition-colors shadow-lg"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.5)] flex-shrink-0"></div>
                  <span className="leading-tight">{badge}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 px-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 h-14 rounded-full shadow-xl shadow-blue-600/20 transition-all active:scale-95"
                asChild
              >
                <Link href="/contact">Start Your SAP Project</Link>
              </Button>
              {/* <Button size="lg" className="bg-white text-[#051121] hover:bg-gray-100 font-bold px-10 h-14 rounded-full transition-all active:scale-95" asChild>
                <Link href="/contact">Get a Free Consultation</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <SAPIntroSection />

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
                  <div className="group h-full flex flex-col p-8 rounded-2xl bg-white border border-gray-300 hover:border-[#1d8fe1] transition-all duration-[450ms] shadow-[0_4px_20px_rgba(0,68,117,0.06)] hover:shadow-xl hover:-translate-y-[10px]">
                    <div className="flex flex-col items-center text-center">
                      <div className="wc-icon-tile mb-6 w-14 h-14 rounded-2xl bg-[#004475]/5 flex items-center justify-center text-[#004475] group-hover:bg-[#004475] group-hover:text-white transition-all duration-300">
                        <item.icon size={26} />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-[#004475]">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600 font-medium mb-6">
                        {item.description}
                      </p>
                    </div>

                    {item.details && item.details.length > 0 && (
                      <div className="mt-auto pt-6 border-t border-slate-100">
                        <ul className="space-y-3">
                          {item.details.map((detail, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-[13px] text-slate-600"
                            >
                              <CheckCircle2 className="h-4 w-4 text-[#004475]   flex-shrink-0" />
                              <span className="leading-tight">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="wc-section section-padding bg-slate-100/50">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-16">
            <h2 className="wc-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#004475]">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
                Livik{" "}
              </span>
              for SAP Development
            </h2>
          </ScrollReveal>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <StaggerItem key={index}>
                  <div className="wc-feature-card group flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-gray-300 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2">
                    <div className="wc-icon-tile mb-6 w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <CheckCircle2 size={24} />
                    </div>
                    <h3 className="wc-feature-title text-xl font-bold mb-4 text-[#004475]">
                      {benefit.title}
                    </h3>
                    <p className="wc-feature-desc text-sm leading-relaxed text-slate-600">
                      {benefit.description}
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
              Ready to Get More ROI from Your SAP Investment?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto mt-4 text-blue-50">
              If your SAP system is complex, slow, or underperforming—you’re
              losing value. Let’s fix that.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                size="lg"
                variant="secondary"
                className="px-6 h-10 rounded-full text-md"
                asChild
              >
                <Link href="/contact">Talk to an App Expert</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
