"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  Layers,
  Activity,
  Shield,
  Zap,
  Cpu,
  Settings,
  Filter,
} from "lucide-react";
import "./CloudMigration.css";
import "./WhyChoose.css";
import { useState, useRef, useEffect } from "react";

const capabilities = [
  {
    title: "Data Ingestion & Integration",
    description:
      "We build scalable pipelines to ingest data from APIs, databases, files and streaming sources using Azure Data Factory (ADF).",
    icon: Layers,
  },
  {
    title: "Data Transformation with Databricks",
    description:
      "Using Azure Databricks, we perform PySpark-based transformations, data cleansing and enrichment for large-scale structured and semi-structured data.",
    icon: Cpu,
  },
  {
    title: "Lakehouse Architecture",
    description:
      "We implement modern Medallion Architecture (Bronze, Silver, Gold) using Delta Lake for reliable and high-performance data processing.",
    icon: Database,
  },
  {
    title: "Pipeline Orchestration",
    description:
      "We automate workflows using ADF and Microsoft Fabric with scheduling, dependency management and real-time monitoring.",
    icon: Activity,
  },
  {
    title: "Data Quality & Governance",
    description:
      "We ensure high data quality with validation frameworks and governance best practices to maintain a single source of truth.",
    icon: Shield,
  },
  {
    title: "Performance & Cost Optimization",
    description:
      "We optimize Spark jobs, pipelines and storage for maximum efficiency and reduced cloud expenditure.",
    icon: Zap,
  },
];

const technologies = [
  { name: "Azure Data Factory", description: "Data ingestion & orchestration" },
  { name: "Azure Databricks", description: "Large-scale Spark processing" },
  { name: "Microsoft Fabric", description: "Unified analytics solution" },
  { name: "Azure Data Lake Gen2", description: "Scalable secure storage" },
  { name: "Azure Synapse", description: "Data warehousing & reporting" },
];

const benefits = [
  {
    title: "Azure + Databricks Expertise",
    description:
      "Strong expertise in the Microsoft ecosystem, ensuring seamless integration and maximum performance.",
  },
  {
    title: "End-to-End Delivery",
    description:
      "We handle everything from initial data ingestion to final analytics and business-ready datasets.",
  },
  {
    title: "Scalable Data Pipelines",
    description:
      "Build future-proof pipelines that grow with your data and business requirements.",
  },
  {
    title: "Technical Excellence",
    description:
      "Deep experience in PySpark, Delta Lake and modern data engineering best practices.",
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
    <span className="text-white text-center">Azure Data Engineering</span>
  </nav>
);

const DataHeroCard = () => {
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
          <radialGradient id="data-glow" cx="50%" cy="50%" r="50%">
            <stop offset="45%" stopColor="#0078d4" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0078d4" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="data-vignette" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(11,18,32,0)" />
            <stop offset="100%" stopColor="rgba(11,18,32,0.92)" />
          </linearGradient>
        </defs>
        <rect width="800" height="450" fill="url(#data-glow)" />

        {/* Grid lines representing data flow */}
        <g stroke="#0078d4" strokeOpacity="0.2">
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`v-${i}`} x1={i * 80} y1="0" x2={i * 80} y2="450" />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 80} x2="800" y2={i * 80} />
          ))}
        </g>

        {/* Data pipeline paths */}
        <g stroke="#0078d4" strokeOpacity="0.4" strokeWidth="2">
          <path
            d="M50 225 H200 L300 125 H500 L600 225 H750"
            fill="none"
            className="dash-flow"
          />
          <path
            d="M50 225 H200 L300 325 H500 L600 225"
            fill="none"
            className="dash-flow"
            style={{ animationDelay: "-1s" }}
          />
        </g>

        {/* Medallion Architecture representations */}
        <g transform="translate(300, 125)">
          <circle r="30" fill="#0b1628" stroke="#0078d4" strokeWidth="2" />
          <text
            x="0"
            y="5"
            textAnchor="middle"
            fill="#0078d4"
            fontSize="10"
            fontWeight="bold"
          >
            BRONZE
          </text>
        </g>
        <g transform="translate(500, 125)">
          <circle r="30" fill="#0b1628" stroke="#0078d4" strokeWidth="2" />
          <text
            x="0"
            y="5"
            textAnchor="middle"
            fill="#0078d4"
            fontSize="10"
            fontWeight="bold"
          >
            SILVER
          </text>
        </g>
        <g transform="translate(700, 225)">
          <circle
            r="35"
            fill="#0078d4"
            fillOpacity="0.2"
            stroke="#0078d4"
            strokeWidth="2"
          />
          <text
            x="0"
            y="5"
            textAnchor="middle"
            fill="#fff"
            fontSize="10"
            fontWeight="bold"
          >
            GOLD
          </text>
        </g>

        <rect width="800" height="450" fill="url(#data-vignette)" />
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
            {"Azure Data Engineering & Databricks Services"
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
            {"Transform raw data into actionable insights through robust pipelines, advanced analytics and Lakehouse architectures."
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

export default function AzureDataEngineeringPage() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className={`cl-hero flex flex-col pt-10 pb-20 px-4 md:px-8 bg-[#051121] ${isVisible ? "is-visible" : ""}`}
      >
        <div className="container-custom">
          <div className="flex justify-center mb-12">
            <DataHeroCard />
          </div>
          <div
            className="max-w-4xl mx-auto text-center reveal"
            style={{ "--d": "400ms" } as React.CSSProperties}
          >
            <p className="cl-hero__para text-gray-400 text-lg md:text-xl leading-relaxed mb-12 mx-auto text-center px-4">
              {"At Livik, we specialize in delivering modern, scalable and high-performance data engineering solutions using Microsoft Azure and Azure Databricks. Our solutions help organizations transform raw data into actionable insights through robust pipelines, advanced analytics and Lakehouse architectures."
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
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {technologies.map((tech, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 px-5 py-2.5 rounded-full bg-[#0b1628] border border-blue-500/10 text-gray-300 text-sm font-semibold hover:border-blue-500/30 transition-colors shadow-lg text-left"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.5)] mt-1.5 flex-shrink-0"></div>
                  {tech.name}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-6 px-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 h-14 rounded-full shadow-xl shadow-blue-600/20 transition-all active:scale-95"
                asChild
              >
                <Link href="/contact">Build Your Data Platform</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
              End-to-End Data Platforms Designed for Scale
            </h2>
            <p className="text-lead text-muted-foreground mt-8 text-justify">
              We design and implement comprehensive data solutions that handle
              ingestion, large-scale processing and unified analytics. Our
              approach ensures your data is secure, reliable and ready for
              business decision-making.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Core Capabilities */}
      <section className="pt-10 md:pt-14 pb-16 md:pb-24 px-4 md:px-8 relative overflow-hidden bg-[#004475] text-white">
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
                Our Core{" "}
                <span className="relative px-7 py-2.5 inline-flex items-center justify-center group overflow-hidden rounded-2xl">
                  {/* Premium Glass Background with Diagonal Gradient */}
                  <span className="absolute inset-0 bg-gradient-to-br from-[#004475]/40 via-[#1d8fe1]/20 to-white/10 backdrop-blur-xl border border-white/30 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]" />

                  {/* Animated Shimmer Overlay */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />

                  {/* Text with Diagonal Gradient and Continuous Animation */}
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-[#004475] via-white to-[#1d8fe1] bg-[length:200%_200%] animate-[gradShift_4s_linear_infinite] font-black tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                    Capabilities
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
              for Azure Data Engineering
            </h2>
          </ScrollReveal>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="wc-feature-card group h-full flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-gray-300 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2">
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
              Ready to Transform Your Raw Data?
            </h2>
            <p className="text-xl text-justify opacity-90 mb-8 max-w-2xl mx-auto mt-4 text-blue-50">
              Modernize your data infrastructure with Azure and Databricks
              today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                size="lg"
                variant="secondary"
                className="px-6 h-10 rounded-full text-md"
                asChild
              >
                <Link href="/contact">
                  Start Your Data Journey{" "}
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
