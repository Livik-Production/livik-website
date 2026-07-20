"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  TrendingUp,
  Rocket,
  Search,
  CheckCircle2,
  Brain,
  Sparkles,
  BarChart3,
  Puzzle,
  Bot,
  FileSearch,
  Server,
  PieChart,
  Lightbulb,
  ArrowUpRight,
  Database,
  Code,
  LayoutGrid,
  Activity,
  UserCog,
  Smartphone,
} from "lucide-react";
import CoreServiceHero from "@/components/CoreServiceHero";
import "./HeroReact.css";
import "./WhyChoose.css";

const solutions = [
  {
    title: "AI Native Development",
    description:
      "Build high-performance native mobile and desktop applications with deeply integrated AI capabilities. Implement on-device processing for real-time responsiveness and enhanced data privacy.",
    icon: Smartphone,
  },
  {
    title: "Custom AI & Machine Learning Development",
    description:
      "Build AI models tailored to your data and business goals. Data preparation, model training and deployment with scalable ML pipelines.",
    icon: Brain,
  },
  {
    title: "Generative AI & LLM Applications",
    description:
      "Build advanced AI systems that understand context and perform tasks. From AI assistants and copilots to content automation using LLMs.",
    icon: Sparkles,
  },
  {
    title: "Predictive Analytics & Forecasting",
    description:
      "Use data to predict trends and make proactive decisions. Demand forecasting, customer behavior prediction and risk detection.",
    icon: BarChart3,
  },
  {
    title: "AI-Powered Automation Systems",
    description:
      "Automate repetitive and complex workflows with intelligent process automation and AI-driven decision systems.",
    icon: Zap,
  },
  {
    title: "AI Integration & Deployment",
    description:
      "Embed AI into your existing systems and products with API integration, cloud deployment and performance monitoring.",
    icon: Puzzle,
  },
];

const capabilities = [
  {
    title: "AI Agents for Workflow Automation",
    description:
      "Go beyond chatbots with AI agents that execute multi-step workflows and interact with business systems.",
    icon: Bot,
  },
  {
    title: "RAG (Retrieval-Augmented Generation)",
    description:
      "Build AI that uses your internal documents and databases for accurate, context-aware responses without hallucinations.",
    icon: FileSearch,
  },
  {
    title: "MCP-Based AI Architectures",
    description:
      "Build structured, production-grade AI systems that connect models with real-time tools for enterprise readiness.",
    icon: Server,
  },
];

const gains = [
  {
    title: "Improved Efficiency",
    description:
      "Reduce manual work through intelligent automation and streamlined AI-driven processes.",
    icon: Zap,
  },
  {
    title: "Better Decision-Making",
    description:
      "Use data-driven insights and predictive intelligence to guide your core business strategy.",
    icon: PieChart,
  },
  {
    title: "Faster Innovation",
    description:
      "Launch AI-powered features quickly and stay ahead of the curve in a rapidly evolving market.",
    icon: Lightbulb,
  },
  {
    title: "Scalable AI Systems",
    description:
      "Grow your AI capabilities seamlessly as your data and business requirements evolve.",
    icon: TrendingUp,
  },
];

const whyChoose = [
  {
    title: "Production-Ready AI Systems",
    description:
      "We build AI that works in real environments—not just prototypes. Our focus is on reliability and real-world impact.",
  },
  {
    title: "Business-Focused Approach",
    description:
      "Every AI solution we develop is directly aligned with your specific workflows, goals and business outcomes.",
  },
  {
    title: "End-to-End Development",
    description:
      "From data engineering and model training to deployment and continuous optimization—we handle the full lifecycle.",
  },
  {
    title: "Scalable & Maintainable Architecture",
    description:
      "Your AI systems are built to evolve, ensuring they remain valuable as your business grows and data changes.",
  },
];

const whoIsFor = [
  "Startups building AI-powered products",
  "SaaS companies integrating AI features",
  "Businesses with large datasets",
  "Teams looking to automate operations",
  "Companies moving from AI experiments to production",
];

const processSteps = [
  {
    title: "Define Use Case & Goals",
    desc: "Identify where AI creates real impact",
    icon: Search,
  },
  {
    title: "Prepare & Structure Data",
    desc: "Build reliable data pipelines",
    icon: Database,
  },
  {
    title: "Develop & Train Models",
    desc: "Create models tailored to your use case",
    icon: Code,
  },
  {
    title: "Integrate into Systems",
    desc: "Embed AI into your workflows",
    icon: LayoutGrid,
  },
  {
    title: "Monitor & Improve",
    desc: "Optimize performance as data evolves",
    icon: Activity,
  },
];

export default function AiDevelopmentPage() {
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <CoreServiceHero
        slug="AI"
        className="-mt-12"
        iconScale={1.3}
        centerScale={1.4}
      />

      {/* Overview Section */}
      {/* <section className={`hero-react ${isVisible ? "is-visible" : ""}`}>
        <div className="container-custom max-w-4xl mx-auto text-center relative z-10">
          <h2 className="hero-react__title reveal">
            AI is Not About Experiments—It’s About Results.
          </h2>
          <div className="mt-14 space-y-10">
            <p className="hero-react__para reveal">
              At Livik, we build production-ready AI systems that help you automate processes, improve decision-making and unlock real value from your data. From machine learning models to AI-powered applications, we focus on solutions that actually work in real-world environments.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 text-left max-w-3xl mx-auto">
              {[
                "Automate repetitive processes and reduce manual effort",
                "Build intelligent systems that learn and improve over time",
                "Turn data into actionable insights and predictions",
                "Deploy scalable AI solutions integrated into your products"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-blue-50/50 border border-blue-100">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="text-sm font-medium text-[#004475]">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <Button asChild size="lg" className="bg-[#004475] hover:bg-[#1d8fe1] text-white rounded-full px-8 h-14 font-bold shadow-lg">
                <Link href="/contact" className="flex items-center gap-2">
                  Start Your AI Project <ArrowUpRight size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[#004475] text-[#004475] hover:bg-blue-50 rounded-full px-8 h-14 font-bold">
                <Link href="/contact" className="flex items-center gap-2">
                  Get a Free AI Consultation <ArrowUpRight size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Real Impact Section */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-[#004475] mb-8">
              Move Beyond AI Experiments to Real Impact
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-justify">
              Most AI projects fail because they never go beyond prototypes. We
              help you design and build AI systems that integrate into your
              workflows, ensuring they deliver measurable business outcomes—not
              just proofs of concept.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Improve operations", icon: Activity },
                { title: "Enhance customer experience", icon: Smile },
                { title: "Drive smarter decisions", icon: PieChart },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative p-6 md:p-8 bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center gap-4 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10 hover:border-[#1d8fe1]/20 overflow-hidden"
                >
                  {/* Subtle dot grid pattern on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-[radial-gradient(#004475_1px,transparent_1px)] [background-size:20px_20px]" />

                  {/* Side accent line background */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-100" />

                  {/* Animated side accent line */}
                  <div className="absolute left-0 top-0 w-1 bg-gradient-to-b from-[#004475] to-[#1d8fe1] h-0 group-hover:h-full transition-all duration-700 ease-in-out" />

                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-[#004475] mb-2 group-hover:bg-[#004475] group-hover:text-white transition-all duration-300">
                      <item.icon size={32} />
                    </div>
                    <h3 className="font-bold text-lg text-[#004475] group-hover:text-[#1d8fe1] transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-14 text-xl font-medium text-gray-500 italic">
              "AI should not sit as an isolated model—it must drive real
              results."
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section className="py-14 md:py-14 px-4 md:px-8 relative overflow-hidden bg-[#004475] text-white">
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
          <ScrollReveal className="text-center mb-10 md:mb-16">
            <h2 className="text-center heading-section text-white flex items-center justify-center flex-wrap gap-2">
              AI Solutions We{" "}
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

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="group h-full flex flex-col rounded-2xl bg-white p-6 md:p-8 border border-gray-300 transition-all duration-[450ms] hover:-translate-y-[10px] hover:border-[#1d8fe1] shadow-[0_4px_20px_rgba(0,68,117,0.06)]">
                    <div className="wc-icon-tile mb-6">
                      <item.icon size={26} />
                    </div>
                    <h3 className="text-xl font-bold text-[#004475] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-[#506478] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Advanced Capabilities */}
      <section className="py-14 md:py-16 px-4 md:px-8">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#004475]">
              Advanced AI Capabilities We Build
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="wc-feature-card group flex flex-col items-start text-left p-6 md:p-8 rounded-2xl bg-white border border-gray-300 transition-all duration-300 h-full">
                  <div className="wc-icon-tile mb-6">
                    <item.icon size={26} />
                  </div>
                  <h3 className="wc-feature-title text-xl font-bold mb-4 text-[#004475]">
                    {item.title}
                  </h3>
                  <p className="wc-feature-desc text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What You Gain */}
      <section className="py-14 md:py-16 px-4 md:px-8 bg-slate-200">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#004475]">
              What You Gain
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gains.map((gain, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group h-full flex flex-col rounded-2xl bg-white p-6 md:p-8 border border-gray-300 transition-all duration-[450ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-[10px] hover:border-[#1d8fe1] hover:bg-gradient-to-b hover:from-white hover:to-[#f4faff] shadow-[0_4px_20px_rgba(0,68,117,0.06)] hover:shadow-[0_8px_30px_rgba(0,68,117,0.28),0_0_0_1px_rgba(29,143,225,0.25),0_0_20px_rgba(29,143,225,0.35)] cursor-pointer relative overflow-hidden">
                  {/* Radial Glow Highlight */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(29,143,225,0.18)_0%,transparent_100%)] opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100 pointer-events-none" />

                  {/* Top gradient bar sliding in */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#004475] via-[#1d8fe1] to-[#cfe6f7] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]" />

                  {/* Icon Tile */}
                  <div className="wc-icon-tile mb-6 z-10 !h-14 !w-14">
                    <gain.icon size={26} strokeWidth={2} />
                  </div>

                  <h3 className="text-xl font-bold text-[#004475] mb-4 relative z-10">
                    {gain.title}
                  </h3>
                  <p className="text-sm font-medium text-[#506478] leading-relaxed relative z-10">
                    {gain.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="wc-section section-padding bg-blue-50/40">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-16">
            <h2 className="wc-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#004475]">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
                Livik
              </span>{" "}
              for AI Development
            </h2>
          </ScrollReveal>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {whyChoose.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="wc-feature-card group flex flex-col items-start text-left p-8 rounded-2xl bg-white border border-gray-300 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 h-full">
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

      {/* Who This Is For & How We Build */}
      <section className="py-14 md:py-16 px-4 md:px-8 bg-slate-200/50">
        <div className="container-custom grid lg:grid-cols-2 gap-20">
          <div>
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-[#004475] mb-8">
                Who This Is For
              </h2>
              <div className="space-y-4">
                {whoIsFor.map((item, i) => (
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
          <div>
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-[#004475] mb-8">
                How We Build AI Solutions
              </h2>
              <div className="relative space-y-12 before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-100">
                {processSteps.map((step, i) => (
                  <div key={i} className="relative pl-16">
                    <div className="absolute left-0 w-12 h-12 bg-white rounded-full border-2 border-[#004475] flex items-center justify-center text-[#004475] z-10">
                      <step.icon size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-[#004475] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-10 md:py-12 px-4 md:px-8 gradient-hero text-white">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Ready to Build AI That Actually Works?
            </h2>
            <p className="text-xl text-justify opacity-90 mb-10 max-w-2xl mx-auto mt-6 leading-relaxed">
              If your AI initiative is stuck in experimentation or not
              delivering results, it’s time to fix it.
              <br />
              Let’s build AI systems that create real business impact.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                size="lg"
                variant="secondary"
                className="font-bold px-10 h-14 rounded-xl shadow-xl shadow-blue-900/20 transition-all active:scale-95"
                asChild
              >
                <Link href="/contact">
                  Book a Free Strategy Call{" "}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white font-bold px-10 h-14 rounded-xl transition-all"
                asChild
              >
                <Link href="/contact">Get a Custom AI Roadmap</Link>
              </Button> */}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

// Dummy Smile icon since it wasn't imported
function Smile({ size }: { size: number }) {
  return <UserCog size={size} />;
}
