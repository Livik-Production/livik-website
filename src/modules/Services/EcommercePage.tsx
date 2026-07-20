"use client";

import React, { useState, useEffect, useRef } from "react";
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
  ShoppingCart,
  CheckCircle2,
  LayoutTemplate,
  ShieldCheck,
  Globe,
  Zap,
  Briefcase,
  Layers,
  Laptop,
  Network,
  Users,
  UserPlus,
  HeartHandshake,
  ShoppingBag,
  Store,
  Gauge,
  CloudUpload,
  Monitor,
  Code2,
  Headphones,
  CreditCard,
  Package,
  Truck,
  Megaphone,
  Calculator,
  Mail,
  MessageSquare,
  Shirt,
  Home,
  Heart,
  BarChart3,
  Lock,
  ArrowUpRight,
  Smartphone,
  Factory,
  Activity,
  Coffee,
  Archive,
  Car,
  Gem,
  Star,
  Settings,
  LayoutGrid,
  Search,
  PenTool,
  Rocket,
  TestTube,
  TrendingUp,
  Smile,
  Tag,
  Eye,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./WhyChoose.css";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CoreServiceHero from "@/components/CoreServiceHero";

const capabilities = [
  {
    title: "Custom E-Commerce Development",
    description:
      "Fast, scalable and fully customized storefronts built with modern frameworks (React, Next.js, headless architecture).",
  },
  {
    title: "Headless Commerce Solutions",
    description:
      "Decouple your frontend and backend for ultimate flexibility, speed and omnichannel scalability.",
  },
  {
    title: "Payment Gateway Integration",
    description:
      "Secure, seamless integrations with global and Indian payment gateways for smooth transactions and higher conversions.",
  },
  {
    title: "Product & Inventory Management Systems",
    description:
      "Automate product updates, stock tracking and order workflows to reduce errors and improve efficiency.",
  },
  {
    title: "Omnichannel Commerce Experiences",
    description:
      "Deliver consistent shopping across web, mobile, marketplaces and social commerce platforms.",
  },
  {
    title: "Performance Optimization",
    description:
      "Improve load speed, Core Web Vitals and conversion rates with advanced optimization techniques.",
  },
];

const benefits = [
  {
    title: "Business-First Approach",
    description:
      "We begin by understanding your business processes before recommending technology.",
    icon: Briefcase,
  },
  {
    title: "Scalable Architecture",
    description:
      "Our solutions are designed to support future growth without expensive rebuilds.",
    icon: Layers,
  },
  {
    title: "Modern Technology Stack",
    description:
      "We leverage proven technologies that deliver performance, security, and flexibility.",
    icon: Laptop,
  },
  {
    title: "Seamless Integrations",
    description:
      "Connect your ecommerce platform with the tools your business already uses.",
    icon: Network,
  },
  {
    title: "Dedicated Development Team",
    description:
      "Our experienced engineers work as an extension of your internal team.",
    icon: UserPlus,
  },
  {
    title: "Long-Term Technology Partner",
    description:
      "Beyond development, we provide ongoing enhancements, maintenance, and technical support.",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: "How long does it take to build a custom e-commerce store?",
    answer:
      "Timelines vary based on complexity. A standard storefront typically takes 8-12 weeks, while enterprise-grade solutions with custom integrations may take 16-24 weeks. We follow an agile approach to deliver incremental value throughout the project.",
  },
  {
    question: "Which e-commerce platforms do you work with?",
    answer:
      "We specialize in Shopify, Shopify Plus, WooCommerce, Magento and headless commerce solutions using frameworks like Next.js with Shopify Hydrogen or Medusa. We recommend the best platform based on your specific business needs and growth plans.",
  },
  {
    question: "Can you migrate my existing store to a new platform?",
    answer:
      "Absolutely. We handle full migrations including product data, customer accounts, order history and SEO preservation. Our migration process ensures zero downtime and minimal disruption to your business operations.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes, we offer comprehensive post-launch support packages including maintenance, performance monitoring, security updates and feature enhancements. Our team is available for both scheduled maintenance and urgent issues.",
  },
  {
    question: "How do you ensure my e-commerce site is secure?",
    answer:
      "Security is built into every layer. We implement SSL certificates, PCI-DSS compliance for payments, secure authentication, regular security audits and follow OWASP best practices. We also set up automated monitoring for potential threats.",
  },
  {
    question: "Can you integrate my store with existing business systems?",
    answer:
      "Yes, we specialize in API integrations with ERPs (SAP, Oracle, NetSuite), CRMs (Salesforce, HubSpot), inventory management systems, shipping providers and marketing automation tools to create a unified commerce ecosystem.",
  },
];

export default function EcommercePage() {
  const [hoveredIntegration, setHoveredIntegration] = useState<number | null>(
    null,
  );
  // Scroll animation for process circle
  const processSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: processSectionRef,
    offset: ["start start", "end end"],
  });
  // Rotates enough to reveal the last items without looping infinitely
  const circleRotation = useTransform(scrollYProgress, [0, 1], [0, -196]);

  return (
    <div className="min-h-screen">
      {/* Parallax Hero Section */}
      <div className="sticky top-0 h-[90vh] md:h-[90vh] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80")',
          }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-xs" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto -mt-10">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-3 drop-shadow-sm">
            E-commerce
          </h1>
          <p className="text-xl text-white">
            "Capture the essence of online success"
          </p>
          {/* <div className="text-center space-y-6 text-gray-800 text-base md:text-lg leading-relaxed">
            <p className="text-xl md:text-2xl font-bold text-white">
              Build Scalable Ecommerce Solutions That Drive Growth
            </p>
            <p className="text-white">
              Your ecommerce platform should do more than sell products—it should streamline operations, deliver exceptional customer experiences, and scale as your business grows.
            </p>
            <p className="text-white">
              At <span className="font-bold">Livik Tech</span>, we provide top-tier <span className="font-semibold">Ecommerce Software Development</span> and <span className="font-semibold">Ecommerce Application Development</span> for B2B, B2C, D2C, and multi-vendor marketplaces. Whether you're launching a new online store, modernizing an existing platform, or developing a custom commerce solution, we help you create an ecommerce experience that is fast, secure, and built for long-term success.
            </p>
            <p className="text-white">
              From strategy and design to development, integrations, and ongoing support, we become your trusted technology partner. We specialize in modern tech stacks, including <span className="font-semibold">Medusa.js Development</span> and <span className="font-semibold">Shopify Development</span>, to deliver high-performance digital storefronts.
            </p>
          </div> */}
        </div>
      </div>

      {/* Main Content Wrapper (Scrolls over the hero) */}
      <div className="relative z-20 -mt-10 md:-mt-14 bg-white/75 backdrop-blur-md rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        {/* Overview */}
        <section
          id="overview"
          className="scroll-mt-36 section-padding relative overflow-hidden pt-14 md:pt-14 pb-16 md:pb-20 bg-white/5 backdrop-blur-md rounded-t-[3rem] "
        >
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent -z-10"></div>
          <div className="container-custom max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            {/* Centered Heading Badge */}
            <ScrollReveal>
              <div className="flex justify-center mb-8 md:mb-12">
                <div className="flex items-center justify-center px-4 text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-center">
                  <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
                    ECOMMERCE DEVELOPMENT COMPANY
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <ScrollReveal>
                <div className="flex flex-col items-start text-left">
                  <h2 className="text-2xl md:text-3xl lg:text-[40px] font-extrabold text-[#1A1A40] leading-[1.1] mb-6">
                    Build Scalable
                    <br className="hidden md:block" /> Ecommerce{" "}
                    <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
                      Solutions
                    </span>
                    <br className="hidden md:block" /> That Drive Growth
                  </h2>

                  <div className="w-16 h-1 bg-blue-600 mb-8 rounded-full"></div>

                  <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed">
                    <p>
                      Your ecommerce platform should do more than sell
                      products—it should streamline operations, deliver
                      exceptional customer experiences, and scale as your
                      business grows.
                    </p>
                    <p>
                      At{" "}
                      <span className="font-bold text-[#1A1A40]">
                        Livik Tech
                      </span>
                      , we provide top-tier{" "}
                      <span className="font-bold text-[#1A1A40]">
                        Ecommerce Software Development
                      </span>{" "}
                      and{" "}
                      <span className="font-bold text-[#1A1A40]">
                        Ecommerce Application Development
                      </span>{" "}
                      for B2B, B2C, D2C, and multi-vendor marketplaces. Whether
                      you're launching a new online store, modernizing an
                      existing platform, or developing a custom commerce
                      solution, we help you create an ecommerce experience that
                      is fast, secure, and built for long-term success.
                    </p>
                    <p>
                      From strategy and design to development, integrations, and
                      ongoing support, we become your trusted technology
                      partner.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right Content - UI Mockup */}
              <ScrollReveal direction="right">
                <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center mt-10 lg:mt-0">
                  {/* Background Circles */}
                  <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none opacity-50">
                    <div className="w-[120%] h-[120%] border border-blue-50 rounded-full absolute"></div>
                    <div className="w-[100%] h-[100%] border border-blue-50 rounded-full absolute"></div>
                    <div className="w-[80%] h-[80%] border border-blue-50 rounded-full absolute"></div>
                    <div className="w-[60%] h-[60%] border border-blue-50 rounded-full absolute"></div>
                  </div>

                  {/* Floating Elements Background */}
                  <div className="absolute top-10 right-20 w-16 h-16 bg-[#0088FF] rounded-full shadow-lg shadow-blue-200 flex items-center justify-center z-20 hover:scale-110 transition-transform hidden sm:flex">
                    <ShoppingCart className="w-8 h-8 text-white" />
                  </div>

                  <div className="absolute bottom-40 -right-6 w-14 h-14 bg-[#4B22F4] rounded-full shadow-lg shadow-indigo-200 flex items-center justify-center z-20 hover:scale-110 transition-transform">
                    <BarChart3 className="w-7 h-7 text-white" />
                  </div>

                  <div className="absolute -bottom-2 right-24 w-12 h-12 bg-black rounded-full shadow-lg flex items-center justify-center z-20 hover:scale-110 transition-transform hidden sm:flex overflow-hidden">
                    <img
                      src="https://github.com/medusajs.png"
                      alt="Medusa.js"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="absolute bottom-8 right-40 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-20 hover:scale-110 transition-transform hidden sm:flex">
                    <img
                      src="https://cdn.worldvectorlogo.com/logos/shopify.svg"
                      alt="Shopify"
                      className="w-7 h-7"
                    />
                  </div>

                  <div className="absolute top-1/2 -left-4 w-14 h-14 bg-[#FF4D8D] rounded-full shadow-lg shadow-pink-200 flex items-center justify-center z-20 hover:scale-110 transition-transform hidden sm:flex">
                    <Lock className="w-6 h-6 text-white" />
                  </div>

                  <div className="absolute top-20 left-10 text-blue-200 flex gap-2">
                    {/* Dots decoration */}
                    <div className="grid grid-cols-4 gap-2">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-1.5 h-1.5 bg-blue-200 rounded-full"
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-10 right-0 text-blue-100 hidden sm:flex gap-2">
                    <div className="grid grid-cols-4 gap-2">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-1 h-1 bg-blue-100 rounded-full"
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Main UI Card */}
                  <div className="w-[95%] sm:w-[85%] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transform sm:rotate-2 hover:rotate-0 transition-transform duration-500 flex flex-col z-10 relative">
                    {/* UI Header */}
                    <div className="px-4 sm:px-6 py-4 border-b border-gray-50 flex items-center justify-between">
                      <div className="font-black text-sm">LOGO</div>
                      <div className="hidden sm:flex items-center gap-4 text-[10px] text-gray-500 font-medium">
                        <span className="text-gray-900">Home</span>
                        <span className="text-blue-600">Shop</span>
                        <span>Categories</span>
                        <span>About</span>
                        <span>Contact</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Search className="w-3 h-3 text-gray-600" />
                        <Heart className="w-3 h-3 text-gray-600" />
                        <div className="relative">
                          <ShoppingCart className="w-3 h-3 text-gray-600" />
                          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-blue-600 rounded-full text-[6px] text-white flex items-center justify-center font-bold">
                            2
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* UI Body */}
                    <div className="p-4 sm:p-6 flex flex-col sm:flex-row gap-6">
                      {/* Product Image Area */}
                      <div className="flex-1 bg-[#F4F7FE] rounded-xl p-4 flex flex-col items-center justify-center relative overflow-hidden group">
                        <img
                          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80"
                          alt="Sneaker"
                          className="w-full h-auto max-h-[150px] sm:max-h-[200px] object-contain transform group-hover:scale-110 transition-transform duration-500 drop-shadow-xl rotate-[-15deg]"
                        />
                        <div className="absolute bottom-2 flex gap-1">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded border border-blue-600 p-0.5 sm:p-1">
                            <img
                              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80"
                              alt="Thumb"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded border border-transparent p-0.5 sm:p-1 opacity-60">
                            <img
                              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80"
                              alt="Thumb"
                              className="w-full h-full object-cover grayscale"
                            />
                          </div>
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded border border-transparent p-0.5 sm:p-1 opacity-60">
                            <img
                              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80"
                              alt="Thumb"
                              className="w-full h-full object-cover grayscale"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Product Details Area */}
                      <div className="flex-1 flex flex-col">
                        <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1">
                          Premium Sneaker
                        </h4>
                        <div className="text-blue-600 font-black text-sm sm:text-base mb-3">
                          $129.99
                        </div>
                        <p className="text-[8px] sm:text-[10px] text-gray-500 mb-4 leading-relaxed">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore at
                          dolore magna aliqua.
                        </p>

                        <div className="text-[10px] font-semibold text-gray-800 mb-2">
                          Size
                        </div>
                        <div className="flex gap-1.5 mb-4">
                          {[7, 8, 9, 10, 11].map((s) => (
                            <div
                              key={s}
                              className={`w-5 h-5 sm:w-6 sm:h-6 rounded border flex items-center justify-center text-[8px] sm:text-[10px] ${s === 9 ? "bg-blue-600 text-white border-blue-600" : "border-gray-200 text-gray-600"}`}
                            >
                              {s}
                            </div>
                          ))}
                        </div>

                        <div className="text-[10px] font-semibold text-gray-800 mb-2">
                          Color
                        </div>
                        <div className="flex gap-2 mb-4 sm:mb-6">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-600 ring-2 ring-offset-1 ring-blue-600"></div>
                          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gray-300"></div>
                          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black"></div>
                        </div>

                        <button className="w-full bg-blue-600 text-white text-[10px] sm:text-xs font-semibold py-1.5 sm:py-2 rounded-lg flex items-center justify-center gap-2 mb-2 hover:bg-blue-700 transition-colors">
                          <ShoppingCart className="w-3 h-3" /> Add to Cart
                        </button>
                        <button className="w-full text-gray-500 text-[8px] sm:text-[10px] font-medium py-1 flex items-center justify-center gap-1 hover:text-gray-800 transition-colors">
                          <Heart className="w-3 h-3" /> Add to Wishlist
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Floating Sales Card */}
                  <div className="absolute -bottom-6 sm:-bottom-10 -left-2 sm:left-4 w-48 sm:w-60 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] p-4 sm:p-5 border border-gray-100 z-30 transform sm:-rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="text-[10px] sm:text-xs font-semibold text-gray-500 mb-1">
                      Total Sales
                    </div>
                    <div className="flex items-end gap-2 mb-4">
                      <div className="text-lg sm:text-2xl font-black text-gray-900">
                        $45,231.89
                      </div>
                      <div className="text-[8px] sm:text-[10px] font-bold text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center mb-1">
                        <ArrowUpRight className="w-2 h-2 mr-0.5" /> 24.5%
                      </div>
                      <div className="text-[8px] text-gray-400 mb-1">
                        vs last month
                      </div>
                    </div>
                    {/* SVG Sparkline */}
                    <div className="w-full h-8 flex items-end">
                      <svg
                        className="w-full h-full"
                        preserveAspectRatio="none"
                        viewBox="0 0 100 20"
                      >
                        <path
                          d="M0,15 Q10,5 20,10 T40,5 T60,15 T80,10 T100,5"
                          fill="none"
                          stroke="#2563EB"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Trusted Technologies Section */}
        <section className="py-8 md:py-8 bg-[#fafdf8] relative overflow-hidden">
          <div className="w-full relative overflow-hidden">
            <p className="text-sm md:text-base font-bold text-[#1A1A40] uppercase tracking-widest text-center mb-8 px-4">
              Trusted by modern brands & powered by leading technologies
            </p>

            <div className="relative w-full overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

              <style>{`
                  @keyframes marquee-normal {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                  }
                `}</style>
              <div
                className="flex w-max hover:[animation-play-state:paused] items-center"
                style={{ animation: "marquee-normal 30s linear infinite" }}
              >
                {[...Array(2)].map((_, i) => (
                  <div
                    key={i}
                    className="flex gap-12 md:gap-20 px-6 py-3 items-center"
                  >
                    {[
                      {
                        name: "Medusa.js",
                        src: "https://cdn.simpleicons.org/medusa",
                        color: "#111827",
                        font: "Inter, sans-serif",
                        weight: "800",
                        size: "text-2xl",
                      },
                      {
                        name: "shopify",
                        src: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
                        color: "#95BF47",
                        font: "Helvetica Neue, Helvetica, Arial, sans-serif",
                        weight: "700",
                        size: "text-3xl tracking-tighter",
                      },
                      {
                        name: "Commerce",
                        src: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg",
                        color: "#96588A",
                        font: "Roboto, sans-serif",
                        weight: "700",
                        size: "text-2xl",
                      },
                      {
                        name: "Magento",
                        src: "/magento.png",
                        color: "#EE672F",
                        font: "Montserrat, sans-serif",
                        weight: "800",
                        size: "text-2xl tracking-tight",
                      },
                      {
                        name: "BIGCOMMERCE",
                        src: "https://cdn.worldvectorlogo.com/logos/bigcommerce-1.svg",
                        color: "#121118",
                        font: "Arial, sans-serif",
                        weight: "900",
                        size: "text-2xl tracking-tighter",
                      },
                      {
                        name: "Payload CMS",
                        src: "https://cdn.simpleicons.org/payloadcms",
                        color: "#000000",
                        font: "Inter, sans-serif",
                        weight: "800",
                        size: "text-2xl",
                      },
                      {
                        name: "Strapi",
                        src: "https://cdn.worldvectorlogo.com/logos/strapi-2.svg",
                        color: "#8E75FF",
                        font: "Inter, sans-serif",
                        weight: "700",
                        size: "text-2xl",
                      },
                      {
                        name: "NEXT.js",
                        src: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
                        color: "#000000",
                        font: "Inter, sans-serif",
                        weight: "900",
                        size: "text-2xl tracking-tighter",
                      },
                      {
                        name: "React",
                        src: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                        height: "h-10",
                        color: "#61DAFB",
                        font: "Segoe UI, sans-serif",
                        weight: "700",
                        size: "text-2xl",
                      },
                      {
                        name: "node.js",
                        src: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
                        color: "#339933",
                        font: "Helvetica Neue, Helvetica, Arial, sans-serif",
                        weight: "600",
                        size: "text-3xl tracking-tight",
                      },
                      {
                        name: "PostgreSQL",
                        src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
                        color: "#336791",
                        font: "Inter, sans-serif",
                        weight: "700",
                        size: "text-2xl",
                      },
                      {
                        name: "MongoDB",
                        src: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
                        color: "#47A248",
                        font: "Inter, sans-serif",
                        weight: "700",
                        size: "text-2xl",
                      },
                    ].map((stack, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1 justify-center shrink-0 transition-all duration-300 hover:scale-105 cursor-pointer"
                      >
                        {stack.src && (
                          <img
                            src={stack.src}
                            alt={stack.name}
                            className={`object-contain ${stack.height || "h-8 md:h-10"} w-auto`}
                            loading="lazy"
                          />
                        )}
                        {stack.name && (
                          <span
                            className={`${stack.size} select-none`}
                            style={{
                              color: stack.color,
                              fontFamily: stack.font,
                              fontWeight: stack.weight,
                            }}
                          >
                            {stack.name}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ecommerce Services Section */}
        <section
          id="services"
          className="scroll-mt-36 py-14 md:py-14 bg-white relative overflow-hidden"
        >
          <div className="container-custom mx-auto relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              {/* <div className="inline-flex items-center gap-2 text-[#004475] font-semibold tracking-wider uppercase mb-4">
                OUR SERVICES <ShoppingBag className="w-5 h-5" />
              </div> */}
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#1A1A40] mb-4">
                Ecommerce Development Services
              </h2>
              <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto">
                End-to-end ecommerce solutions to build, scale, and grow your
                online business.
                <br className="hidden md:block" />
                From custom stores to marketplaces — we deliver what your
                business needs.
              </p>
            </div>

            {/* Top 4 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full relative group">
                <div className="absolute top-4 left-4 bg-orange-100 text-[#FF6B6B] font-bold px-3 py-1 rounded-lg text-sm">
                  01
                </div>
                <div className="w-20 h-20 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Monitor className="w-10 h-10 text-[#FF6B6B]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A40] text-center mb-4 whitespace-pre-line">
                  {"Custom Ecommerce\nDevelopment"}
                </h3>
                <p className="text-gray-600 text-center text-sm flex-grow">
                  Build fully customized ecommerce platforms tailored to your
                  unique business workflows, customer journey, and operational
                  requirements.
                </p>
                {/* <Link href="#" className="text-[#FF6B6B] font-semibold text-center flex items-center justify-center hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link> */}
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full relative group">
                <div className="absolute top-4 left-4 bg-blue-100 text-[#3B82F6] font-bold px-3 py-1 rounded-lg text-sm">
                  02
                </div>
                <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShoppingBag className="w-10 h-10 text-[#3B82F6]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A40] text-center mb-4 whitespace-pre-line">
                  {"B2B Ecommerce\nDevelopment"}
                </h3>
                <p className="text-gray-600 text-center text-sm flex-grow">
                  Create powerful B2B commerce solutions with customer-specific
                  pricing, quotation management, bulk ordering, purchase
                  approvals, sales channels, and ERP integrations.
                </p>
                {/* <Link href="#" className="text-[#FF6B6B] font-semibold text-center flex items-center justify-center hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link> */}
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full relative group">
                <div className="absolute top-4 left-4 bg-green-100 text-[#10B981] font-bold px-3 py-1 rounded-lg text-sm">
                  03
                </div>
                <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShoppingCart className="w-10 h-10 text-[#10B981]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A40] text-center mb-4 whitespace-pre-line">
                  {"B2C Ecommerce\nDevelopment"}
                </h3>
                <p className="text-gray-600 text-center text-sm flex-grow">
                  Deliver engaging online shopping experiences with intuitive
                  navigation, personalized recommendations, secure checkout, and
                  optimized performance.
                </p>
                {/* <Link href="#" className="text-[#FF6B6B] font-semibold text-center flex items-center justify-center hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link> */}
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full relative group">
                <div className="absolute top-4 left-4 bg-purple-100 text-[#8B5CF6] font-bold px-3 py-1 rounded-lg text-sm">
                  04
                </div>
                <div className="w-20 h-20 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Store className="w-10 h-10 text-[#8B5CF6]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A40] text-center mb-4 whitespace-pre-line">
                  {"D2C Ecommerce\nDevelopment"}
                </h3>
                <p className="text-gray-600 text-center text-sm flex-grow">
                  Help brands connect directly with customers while maintaining
                  complete control over pricing, inventory, promotions,
                  subscriptions, and customer relationships.
                </p>
                {/* <Link href="#" className="text-[#FF6B6B] font-semibold text-center flex items-center justify-center hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link> */}
              </div>
            </div>

            {/* Bottom 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4 max-w-5xl mx-auto">
              {/* Card 5 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full relative group">
                <div className="absolute top-4 left-4 bg-yellow-100 text-[#F59E0B] font-bold px-3 py-1 rounded-lg text-sm">
                  05
                </div>
                <div className="w-20 h-20 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Network className="w-10 h-10 text-[#F59E0B]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A40] text-center mb-4 whitespace-pre-line">
                  {"Marketplace\nDevelopment"}
                </h3>
                <p className="text-gray-600 text-center text-sm flex-grow">
                  Launch marketplace platforms where multiple sellers can manage
                  products, orders, inventory, commissions, and payouts from a
                  single system.
                </p>
                {/* <Link href="#" className="text-[#FF6B6B] font-semibold text-center flex items-center justify-center hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link> */}
              </div>

              {/* Card 6 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full relative group">
                <div className="absolute top-4 left-4 bg-rose-100 text-[#F43F5E] font-bold px-3 py-1 rounded-lg text-sm">
                  06
                </div>
                <div className="w-20 h-20 mx-auto bg-rose-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Gauge className="w-10 h-10 text-[#F43F5E]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A40] text-center mb-4 whitespace-pre-line">
                  {"Headless Commerce\nDevelopment"}
                </h3>
                <p className="text-gray-600 text-center text-sm flex-grow">
                  Separate your storefront from the backend to create
                  lightning-fast shopping experiences across websites, mobile
                  apps, kiosks, and other digital channels.
                </p>
                {/* <Link href="#" className="text-[#FF6B6B] font-semibold text-center flex items-center justify-center hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link> */}
              </div>

              {/* Card 7 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full relative group">
                <div className="absolute top-4 left-4 bg-sky-100 text-[#0EA5E9] font-bold px-3 py-1 rounded-lg text-sm">
                  07
                </div>
                <div className="w-20 h-20 mx-auto bg-sky-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CloudUpload className="w-10 h-10 text-[#0EA5E9]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A40] text-center mb-4 whitespace-pre-line">
                  {"Ecommerce Migration &\nModernization"}
                </h3>
                <p className="text-gray-600 text-center text-sm flex-grow">
                  Upgrade legacy ecommerce platforms with minimal disruption
                  while preserving valuable business data, SEO rankings, and
                  customer information.
                </p>
                {/* <Link href="#" className="text-[#FF6B6B] font-semibold text-center flex items-center justify-center hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link> */}
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve Section */}
        <section className="py-6 md:py-6 bg-slate-50 overflow-hidden">
          <div className="w-full px-4 md:px-10">
            {/* Industries We Serve */}
            <div
              id="industries"
              className="scroll-mt-36 w-full pt-4 max-w-[1600px] mx-auto"
            >
              <p className="text-lg md:text-2xl font-bold text-[#1A1A40] uppercase tracking-widest text-center px-4">
                INDUSTRIES WE SERVE
              </p>

              <div className="flex flex-nowrap md:justify-between items-end gap-3 md:gap-4 px-2 md:px-10 pt-8 pb-4 w-full overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {[
                  { name: "Fashion & Apparel", img: "/images/3d-fashion-dress.png" },
                  { name: "Furniture", img: "/images/3d-furniture.png" },
                  { name: "Electronics", img: "/images/3d-headset.png" },
                  { name: "Manufacturing", emoji: "🏭" },
                  { name: "Healthcare", img: "/images/3d-healthcare.png" },
                  { name: "Food & Beverage", img: "/images/3d-food.png" },
                  { name: "Wholesale Distribution", img: "/images/3d-wholesale.png" },
                  { name: "Automotive", img: "/images/3d-automotive.png" },
                  { name: "Jewelry", img: "/images/3d-jewelry.png" },
                  { name: "Lifestyle Brands", emoji: "👜" },
                  { name: "Consumer Goods", emoji: "🛍️" },
                ].map((ind, idx) => (
                  <div
                    key={idx}
                    className="bg-white shrink-0 min-w-[110px] md:min-w-0 rounded-xl flex-1 max-w-[150px] h-28 md:h-36 flex flex-col items-center justify-center shadow-[0_2px_15px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
                  >
                    {ind.img ? (
                      <img
                        src={ind.img}
                        alt={ind.name}
                        className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-3 object-contain mix-blend-multiply hover:scale-110 transition-transform duration-300"
                      />
                    ) : ind.emoji ? (
                      <span className="text-3xl md:text-4xl mb-2 md:mb-3 hover:scale-110 transition-transform duration-300">
                        {ind.emoji}
                      </span>
                    ) : null}
                    <span
                      className="text-[10.5px] md:text-[13px] font-bold text-gray-700 text-center px-1 md:px-2 leading-tight line-clamp-2"
                      title={ind.name}
                    >
                      {ind.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Platforms & Integrations Section */}
        <section className="py-6 md:py-6 bg-[#fdfaf5] relative overflow-hidden">
          <div className="container-custom mx-auto px-4 relative z-10">
            <div
              id="integrations"
              className="scroll-mt-36 max-w-6xl mx-auto mb-10"
            >
              <div className="text-center mb-12">
                {/* <div className="inline-flex items-center gap-2 text-[#10B981] font-semibold tracking-wider uppercase mb-4">
                  <Network className="w-5 h-5" /> ECOSYSTEM
                </div> */}
                <h3 className="text-3xl md:text-4xl font-bold text-[#004475] mb-3">
                  Ecommerce Integration Services
                </h3>
                <p className="text-gray-600 mb-8 text-md max-w-2xl mx-auto">
                  Modern ecommerce businesses depend on connected systems. We
                  seamlessly integrate your store with:
                </p>
              </div>

              {(() => {
                const integrationItems = [
                  {
                    name: "Payment Gateways",
                    icon: CreditCard,
                    color: "text-blue-500",
                    bg: "bg-blue-100",
                    dot: "#3b82f6",
                  },
                  {
                    name: "ERP Systems",
                    icon: Layers,
                    color: "text-indigo-500",
                    bg: "bg-indigo-100",
                    dot: "#6366f1",
                  },
                  {
                    name: "CRM Platforms",
                    icon: Users,
                    color: "text-emerald-500",
                    bg: "bg-emerald-100",
                    dot: "#10b981",
                  },
                  {
                    name: "Inventory Management",
                    icon: Package,
                    color: "text-orange-500",
                    bg: "bg-orange-100",
                    dot: "#f97316",
                  },
                  {
                    name: "Shipping & Logistics",
                    icon: Truck,
                    color: "text-amber-500",
                    bg: "bg-amber-100",
                    dot: "#f59e0b",
                  },
                  {
                    name: "Marketing Automation",
                    icon: Megaphone,
                    color: "text-rose-500",
                    bg: "bg-rose-100",
                    dot: "#f43f5e",
                  },
                  {
                    name: "Accounting Software",
                    icon: Calculator,
                    color: "text-teal-500",
                    bg: "bg-teal-100",
                    dot: "#14b8a6",
                  },
                  {
                    name: "Marketplace Channels",
                    icon: Store,
                    color: "text-purple-500",
                    bg: "bg-purple-100",
                    dot: "#a855f7",
                  },
                  {
                    name: "Email Platforms",
                    icon: Mail,
                    color: "text-sky-500",
                    bg: "bg-sky-100",
                    dot: "#0ea5e9",
                  },
                  {
                    name: "AI Customer Support",
                    icon: MessageSquare,
                    color: "text-pink-500",
                    bg: "bg-pink-100",
                    dot: "#ec4899",
                  },
                ];

                return (
                  <>
                    {/* Mobile Layout (Grid) */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:hidden">
                      {integrationItems.map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all group border border-gray-50"
                        >
                          <div
                            className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4 ${item.bg} group-hover:scale-110 transition-transform`}
                          >
                            <item.icon className={`w-7 h-7 ${item.color}`} />
                          </div>
                          <h4 className="font-semibold text-gray-800 text-sm md:text-base leading-tight">
                            {item.name}
                          </h4>
                        </div>
                      ))}
                    </div>

                    {/* Desktop Layout (Hub Diagram) */}
                    <div className="hidden lg:flex justify-between items-center w-full max-w-[1000px] mx-auto relative h-[500px] mt-10">
                      {/* SVG Connections */}
                      <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        viewBox="0 0 1000 500"
                        preserveAspectRatio="none"
                      >
                        {/* Left Paths */}
                        {[30, 140, 250, 360, 470].map((y, i) => {
                          const isHovered = hoveredIntegration === i;
                          const isAnyHovered = hoveredIntegration !== null;
                          return (
                            <g key={`left-path-${i}`}>
                              <path
                                d={`M 250 ${y} C 325 ${y}, 325 250, 400 250`}
                                stroke={integrationItems[i].dot}
                                strokeWidth={isHovered ? "3" : "2"}
                                strokeDasharray={isHovered ? "none" : "6 6"}
                                fill="none"
                                className={`transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-50"}`}
                              />
                              <circle
                                cx="250"
                                cy={y}
                                r={isHovered ? "6" : "5"}
                                fill={integrationItems[i].dot}
                                className={`transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-80"}`}
                              />
                              <circle cx="400" cy="250" r="3" fill="#cbd5e1" />
                            </g>
                          );
                        })}

                        {/* Right Paths */}
                        {[30, 140, 250, 360, 470].map((y, i) => {
                          const idx = i + 5;
                          const isHovered = hoveredIntegration === idx;
                          const isAnyHovered = hoveredIntegration !== null;
                          return (
                            <g key={`right-path-${i}`}>
                              <path
                                d={`M 750 ${y} C 675 ${y}, 675 250, 600 250`}
                                stroke={integrationItems[idx].dot}
                                strokeWidth={isHovered ? "3" : "2"}
                                strokeDasharray={isHovered ? "none" : "6 6"}
                                fill="none"
                                className={`transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-50"}`}
                              />
                              <circle
                                cx="750"
                                cy={y}
                                r={isHovered ? "6" : "5"}
                                fill={integrationItems[idx].dot}
                                className={`transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-80"}`}
                              />
                              <circle cx="600" cy="250" r="3" fill="#cbd5e1" />
                            </g>
                          );
                        })}
                      </svg>

                      {/* Left Column */}
                      <div className="flex flex-col justify-between h-full w-[250px] z-10">
                        {integrationItems.slice(0, 5).map((item, idx) => {
                          const isHovered = hoveredIntegration === idx;
                          const isAnyHovered = hoveredIntegration !== null;
                          return (
                            <div
                              key={idx}
                              onMouseEnter={() => setHoveredIntegration(idx)}
                              onMouseLeave={() => setHoveredIntegration(null)}
                              className={`bg-white rounded-2xl p-3 flex items-center gap-4 shadow-sm transition-all border group h-[60px] cursor-pointer ${isHovered ? "border-blue-300 ring-2 ring-blue-50 scale-105 shadow-md" : "border-gray-100 hover:shadow-md"}`}
                            >
                              <div
                                className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center ${item.bg} transition-transform ${isHovered ? "scale-110" : "group-hover:scale-110"}`}
                              >
                                <item.icon
                                  className={`w-5 h-5 ${item.color}`}
                                />
                              </div>
                              <h4 className="font-semibold text-gray-800 text-sm leading-tight text-left">
                                {item.name}
                              </h4>
                            </div>
                          );
                        })}
                      </div>

                      {/* Center Hub */}
                      <div
                        className={`w-[200px] h-[200px] rounded-full bg-white transition-all duration-300 border flex items-center justify-center z-10 relative group ${hoveredIntegration !== null ? "border-blue-300 scale-105 shadow-[0_8px_40px_rgba(59,130,246,0.2)]" : "border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"}`}
                      >
                        <div
                          className={`absolute inset-0 rounded-full bg-blue-50/50 -z-10 transition-transform duration-500 ${hoveredIntegration !== null ? "scale-[1.25]" : "scale-[1.15] group-hover:scale-[1.25]"}`}
                        ></div>
                        <div
                          className={`absolute inset-0 rounded-full bg-blue-50/30 -z-20 transition-transform duration-700 ${hoveredIntegration !== null ? "scale-[1.45]" : "scale-[1.3] group-hover:scale-[1.45]"}`}
                        ></div>
                        <ShoppingCart
                          className={`w-20 h-20 transition-colors duration-300 ${hoveredIntegration !== null ? "text-blue-600" : "text-[#3B82F6]"}`}
                          strokeWidth={1.5}
                        />
                      </div>

                      {/* Right Column */}
                      <div className="flex flex-col justify-between h-full w-[250px] z-10">
                        {integrationItems.slice(5, 10).map((item, localIdx) => {
                          const idx = localIdx + 5;
                          const isHovered = hoveredIntegration === idx;
                          const isAnyHovered = hoveredIntegration !== null;
                          return (
                            <div
                              key={idx}
                              onMouseEnter={() => setHoveredIntegration(idx)}
                              onMouseLeave={() => setHoveredIntegration(null)}
                              className={`bg-white rounded-2xl p-3 flex items-center gap-4 shadow-sm transition-all border group h-[60px] cursor-pointer ${isHovered ? "border-blue-300 ring-2 ring-blue-50 scale-105 shadow-md" : "border-gray-100 hover:shadow-md"}`}
                            >
                              <div
                                className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center ${item.bg} transition-transform ${isHovered ? "scale-110" : "group-hover:scale-110"}`}
                              >
                                <item.icon
                                  className={`w-5 h-5 ${item.color}`}
                                />
                              </div>
                              <h4 className="font-semibold text-gray-800 text-sm leading-tight text-left">
                                {item.name}
                              </h4>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </section>

        {/* Features We Develop Section */}
        <section className="py-6 md:py-12 bg-slate-50 relative overflow-hidden">
          <div className="container-custom mx-auto px-4 relative z-10">
            {/* Features We Develop */}
            <div id="capabilities" className="scroll-mt-36 max-w-6xl mx-auto">
              <div className="text-center mb-12">
                {/* <div className="inline-flex items-center gap-2 text-[#8B5CF6] font-semibold tracking-wider uppercase mb-4">
                  <Settings className="w-5 h-5" /> CAPABILITIES
                </div> */}
                <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A40]">
                  Features We
                  <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
                    {" "}
                    Develop
                  </span>
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  "Product Catalog Management",
                  "Smart Search & Filtering",
                  "Inventory Management",
                  "Order Management",
                  "Customer Accounts",
                  "Wishlist & Favorites",
                  "Secure Checkout",
                  "Multiple Payment Methods",
                  "Coupons & Promotions",
                  "Subscription Commerce",
                  "Loyalty Programs",
                  "Multi-language Support",
                  "Multi-currency Support",
                  "Analytics Dashboard",
                  "Role-Based Administration",
                  "Sales Channel Management",
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-start gap-3 hover:border-[#8B5CF6] hover:shadow-md transition-all cursor-default"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#8B5CF6] shrink-0 mt-0.5" />
                    <span className="font-medium text-gray-700 text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section
          id="process"
          ref={processSectionRef}
          className="scroll-mt-36 bg-[#fdfaf5] relative h-[250vh] hidden md:block"
        >
          <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
            {/* Wrapper to define the circle's position on screen */}
            <div className="absolute top-1/2 left-[-500px] lg:left-[-400px] -translate-y-1/2 w-[1100px] h-[1100px] z-0">
              {/* The Rotating Circle */}
              <motion.div
                style={{ rotate: circleRotation }}
                className="absolute inset-0 rounded-full border-[3px] border-dashed border-[#e6d5b8]"
              >
                {[
                  {
                    title: "Discovery & Business Analysis",
                    desc: "Understand business goals and requirements.",
                    icon: Search,
                    color: "bg-[#b1b2d6]",
                  },
                  {
                    title: "Solution Architecture",
                    desc: "Define scalable technical solution.",
                    icon: Layers,
                    color: "bg-[#a9ded6]",
                  },
                  {
                    title: "UI/UX Design",
                    desc: "Create intuitive user experiences.",
                    icon: PenTool,
                    color: "bg-[#eac4b9]",
                  },
                  {
                    title: "Development",
                    desc: "Agile building of the platform.",
                    icon: Code2,
                    color: "bg-[#e8cda1]",
                  },
                  {
                    title: "Third-Party Integrations",
                    desc: "Connecting 3rd party systems.",
                    icon: Network,
                    color: "bg-[#eeb197]",
                  },
                  {
                    title: "Testing & Quality Assurance",
                    desc: "Rigorous QA for bug-free release.",
                    icon: ShieldCheck,
                    color: "bg-[#b1b2d6]",
                  },
                  {
                    title: "Deployment",
                    desc: "Smooth go-live process.",
                    icon: Rocket,
                    color: "bg-[#a9ded6]",
                  },
                  {
                    title: "Continuous Support & Optimization",
                    desc: "Ongoing maintenance and growth.",
                    icon: Headphones,
                    color: "bg-[#eac4b9]",
                  },
                ].map((step, idx) => {
                  // Span items over a partial arc (28 deg spacing) so it doesn't close the loop.
                  // Starting at 0 ensures the first item starts exactly at the 3 o'clock position.
                  const angle = idx * 28;
                  return (
                    <div
                      key={idx}
                      className="absolute top-1/2 left-1/2 w-24 h-24 -mt-12 -ml-12 flex items-center justify-center"
                      style={{
                        transform: `rotate(${angle}deg) translate(550px)`,
                      }}
                    >
                      <motion.div
                        className="relative flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24"
                        style={{
                          rotate: useTransform(
                            circleRotation,
                            (r) => -r - angle,
                          ),
                        }}
                      >
                        {/* Icon */}
                        <div
                          className={`w-full h-full rounded-full ${step.color} flex items-center justify-center shadow-lg z-10`}
                        >
                          <step.icon className="w-10 h-10 lg:w-12 lg:h-12 text-[#333]" />
                        </div>

                        {/* Text (Absolute, pinned to the right) */}
                        <div className="absolute left-full ml-4 lg:ml-6 w-56 lg:w-64">
                          <h4 className="font-bold text-lg lg:text-xl text-[#333] mb-1 lg:mb-2">
                            {step.title}
                          </h4>
                          <p className="text-xs lg:text-sm text-gray-600 font-medium leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>

              {/* Title inside the circle center (not rotating) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-left w-[400px] pl-20 z-10 pointer-events-none">
                <h2 className="text-5xl lg:text-6xl font-extrabold text-[#333] leading-tight">
                  Ecommerce
                  <br />
                  Development
                  <br />
                  Process
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Development Process (Visible only on small screens) */}
        <section className="md:hidden py-16 bg-[#fdfaf5] px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-extrabold text-[#333] leading-tight">
              Ecommerce
              <br />
              Development
              <br />
              Process
            </h2>
          </div>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-12 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#e6d5b8] before:to-transparent">
            {[
              {
                title: "Discovery & Business Analysis",
                desc: "Understand business goals and requirements.",
                icon: Search,
                color: "bg-[#b1b2d6]",
              },
              {
                title: "Solution Architecture",
                desc: "Define scalable technical solution.",
                icon: Layers,
                color: "bg-[#a9ded6]",
              },
              {
                title: "UI/UX Design",
                desc: "Create intuitive user experiences.",
                icon: PenTool,
                color: "bg-[#eac4b9]",
              },
              {
                title: "Development",
                desc: "Agile building of the platform.",
                icon: Code2,
                color: "bg-[#e8cda1]",
              },
              {
                title: "Third-Party Integrations",
                desc: "Connecting 3rd party systems.",
                icon: Network,
                color: "bg-[#eeb197]",
              },
              {
                title: "Testing & Quality Assurance",
                desc: "Rigorous QA for bug-free release.",
                icon: ShieldCheck,
                color: "bg-[#b1b2d6]",
              },
              {
                title: "Deployment",
                desc: "Smooth go-live process.",
                icon: Rocket,
                color: "bg-[#a9ded6]",
              },
              {
                title: "Continuous Support & Optimization",
                desc: "Ongoing maintenance and growth.",
                icon: Headphones,
                color: "bg-[#eac4b9]",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="relative flex items-center justify-between group is-active"
              >
                <div
                  className={`flex items-center justify-center w-20 h-20 rounded-full border-4 border-[#fdfaf5] ${step.color} shrink-0 z-10 shadow shadow-[#e6d5b8]`}
                >
                  <step.icon className="w-8 h-8 text-[#333]" />
                </div>
                <div className="w-[calc(100%-6rem)] p-4 rounded-xl bg-white shadow-sm border border-gray-100 z-10">
                  <h4 className="font-bold text-lg text-[#333] mb-1">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Section */}
        <section
          id="why-choose"
          className="scroll-mt-36 wc-section section-padding bg-blue-50/40"
        >
          <div className="container-custom">
            <ScrollReveal className="text-center mb-16">
              <h2 className="wc-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#004475]">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
                  Livik
                </span>{" "}
                for E-Commerce Development
              </h2>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                {benefits.map((item, index) => (
                  <StaggerItem key={index}>
                    <div className="wc-feature-card group flex flex-col items-start text-left p-8 rounded-2xl bg-white border border-gray-300 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 h-full">
                      <div className="wc-icon-tile mb-6 w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <item.icon size={24} />
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

        {/* Why Modern Ecommerce Matters */}
        <section className="py-8 md:py-8 bg-slate-50 relative overflow-hidden">
          <div className="container-custom mx-auto max-w-6xl px-4">
            <div className="text-center mb-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1A40] mb-5">
                Why Modern Ecommerce{" "}
                <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
                  Matters
                </span>
              </h2>
              <p className="text-md md:text-md text-gray-500 max-w-3xl mx-auto">
                Today's customers expect fast, personalized, and seamless
                shopping experiences across every device.
              </p>
            </div>

            <div className="bg-[#f8fafc] rounded-3xl p-5 md:p-6 max-w-6xl mx-auto relative">
              <div className="text-center mb-3">
                <p className="text-xl md:text-2xl font-bold text-[#1A1A40]">
                  A modern ecommerce platform helps you:
                </p>
                <div className="flex justify-center items-center gap-1.5 mt-3">
                  {/* <div className="w-8 h-1 bg-blue-500 rounded-full"></div> */}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ">
                {[
                  {
                    title: "Increase online sales",
                    desc: "Convert more visitors into loyal customers and boost your revenue.",
                    icon: TrendingUp,
                  },
                  {
                    title: "Improve customer satisfaction",
                    desc: "Deliver personalized, seamless experiences that keep customers coming back.",
                    icon: Smile,
                  },
                  {
                    title: "Automate manual processes",
                    desc: "Save time and reduce human errors with smart automation.",
                    icon: Settings,
                  },
                  {
                    title: "Reduce operational costs",
                    desc: "Streamline operations and cut costs without compromising quality.",
                    icon: Tag,
                  },
                  {
                    title: "Scale confidently as your business grows",
                    desc: "Handle more orders, customers, and growth without limits.",
                    icon: Rocket,
                  },
                  {
                    title: "Gain real-time visibility",
                    desc: "Track orders and inventory in real-time to make smarter decisions.",
                    icon: Eye,
                  },
                  {
                    title: "Expand across multiple sales channels",
                    desc: "Sell everywhere your customers are — online store, marketplaces, and beyond.",
                    icon: Network,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-[#004475]" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#1A1A40] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding gradient-hero text-white">
          <div className="container-custom text-center">
            <ScrollReveal>
              <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
                Let's Build Your Next Ecommerce Platform
              </h2>
              <p className="text-lg text-justify opacity-90 mb-8 max-w-4xl mx-auto mt-5">
                Whether you're launching a new online business, expanding into
                new markets, or modernizing an existing ecommerce system, Livik
                Tech can help you build a secure, scalable and future-ready
                commerce solution.
                <br />
                <span className="flex justify-center mt-5">
                  {" "}
                  Ready to transform your ecommerce business? Let's discuss your
                  project.
                </span>{" "}
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </div>
  );
}
