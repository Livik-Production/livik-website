"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GeistSans } from "geist/font/sans";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  ShoppingBag,
  Heart,
  Search,
  ArrowUpRight,
  Lock,
  CheckCircle2,
  Plus,
  Minus,
  ArrowRight,
  PenTool,
  Code2,
  Network,
  Rocket,
  Headphones,
  Monitor,
  Store,
  Plug,
  Box,
  Users,
  Bell,
  ChevronDown,
  ExternalLink,
  Hexagon,
  Armchair
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./WhyChoose.css";

const FAQItem = ({ q, a }: { q: string, a: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left gap-3 group outline-none pb-2 border-b border-gray-100"
      >
        <h3 className="font-medium text-lg text-[#2B2B2B] group-hover:text-black">{q}</h3>
        <div className="flex-shrink-0 text-[#2B2B2B] relative w-5 h-5">
          <Plus
            className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}
          />
          <Minus
            className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'}`}
          />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
        <div className="pr-8">
          <p className="text-gray-600 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
};
import "./WhyChoose.css";

const revenueDays = ["May 1", "May 8", "May 15", "May 22", "May 29", "Jun 5", "Jun 12", "Jun 19", "Jun 26"];

const topProducts = [
  { name: "Basic Tee", qty: "1,429" },
  { name: "Sneaker X", qty: "1,213" },
  { name: "Hoodie", qty: "862" },
  { name: "Cap", qty: "683" },
];

const recentOrders = [
  { id: "#MED-1248", name: "John Doe", amt: "$129.99" },
  { id: "#MED-1247", name: "Jane Smith", amt: "$89.99" },
  { id: "#MED-1246", name: "Robert Fox", amt: "$49.99" },
  { id: "#MED-1245", name: "Cameron Williamson", amt: "$129.99" },
];

const statCards = [
  { label: "Total Revenue", value: "$245,231.89", change: "+24.5%" },
  { label: "Orders", value: "1,286", change: "+18.2%" },
  { label: "Products", value: "329", change: "+8.6%" },
  { label: "Customers", value: "1,024", change: "+13.7%" },
];

const FloatingStat = ({
  icon: Icon,
  iconBg,
  iconColor,
  label,
  value,
  sub,
  change,
  className = "",
}: {
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  label: string;
  value: string;
  sub?: string;
  change?: string;
  className?: string;
}) => (
  <div className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-3 flex items-center gap-3 ${className}`}>
    <div className={`w-9 h-9 rounded-lg ${iconBg} flex items-center justify-center shrink-0`}>
      <Icon className={`w-4 h-4 ${iconColor}`} />
    </div>
    <div className="min-w-0">
      <p className="text-[10px] text-gray-500 font-medium leading-tight">{label}</p>
      <div className="flex items-baseline gap-1.5">
        <span className="text-sm font-bold text-[#1A1A40]">{value}</span>
        {change && <span className="text-[10px] font-semibold text-green-600">{change}</span>}
        {sub && <span className="text-[10px] text-gray-400">{sub}</span>}
      </div>
    </div>
  </div>
);

const MedusaDashboardIllustration = () => (
  <div className="relative w-full max-w-140 mx-auto">
    {/* Decorative background blobs */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-6 left-2 w-28 h-28 bg-blue-100 rounded-full blur-2xl opacity-70"></div>
      <div className="absolute bottom-6 right-2 w-36 h-36 bg-indigo-100 rounded-full blur-2xl opacity-70"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
    </div>

    {/* Shopify badge */}
    <div className="flex justify-center mb-5 relative z-20">
      <div className="flex items-center gap-2 bg-white rounded-full shadow-lg border border-gray-100 px-4 py-2">
        <div className="w-5 h-5 rounded-md bg-[#95BF47] flex items-center justify-center shrink-0">
          <ShoppingBag className="w-3 h-3 text-white" />
        </div>
        <span className="text-xs font-semibold text-[#1A1A40]">Shopify</span>
      </div>
    </div>

    {/* Main content grid: side stats + central dashboard */}
    <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-2 items-center relative z-10">
      {/* Left floating cards */}
      <div className="md:col-span-3 flex flex-row md:flex-col gap-3 md:gap-16">
        <FloatingStat
          icon={ShoppingCart}
          iconBg="bg-blue-50"
          iconColor="text-[#1d8fe1]"
          label="Orders"
          value="1,286"
          change="+18.2%"
          className="flex-1 md:-mr-4"
        />
        <FloatingStat
          icon={ArrowUpRight}
          iconBg="bg-indigo-50"
          iconColor="text-[#004475]"
          label="Revenue"
          value="$245,231.89"
          change="+24.5%"
          className="flex-1 md:-mr-4"
        />
      </div>

      {/* Central Dashboard Card */}
      <div className="md:col-span-6 relative z-20 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 md:p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div className="flex items-center gap-1.5">
            <Hexagon className="w-4 h-4 text-[#1d8fe1]" fill="#e6f2fc" strokeWidth={2.5} />
            <span className="font-bold text-sm text-[#1A1A40]">medusa</span>
            <span className="text-gray-300 mx-1 text-xs">|</span>
            <span className="text-sm font-semibold text-gray-500">Dashboard</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 border border-gray-200 rounded-full px-2.5 py-1 text-[10px] font-medium text-gray-600">
              Last 30 days <ChevronDown className="w-3 h-3" />
            </div>
            <div className="relative w-7 h-7 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0">
              <Bell className="w-3.5 h-3.5 text-gray-500" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-red-500 text-white text-[8px] font-bold flex items-center justify-center">3</span>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-2 mb-4 pb-4 border-b border-gray-100">
          {statCards.map((s) => (
            <div key={s.label} className="min-w-0">
              <p className="text-[9px] text-gray-500 font-medium mb-1 truncate">{s.label}</p>
              <p className="text-xs md:text-sm font-bold text-[#1A1A40] truncate">{s.value}</p>
              <p className="text-[9px] font-semibold text-green-600">{s.change}</p>
            </div>
          ))}
        </div>

        {/* Revenue Overview */}
        <div className="mb-4 pb-4 border-b border-gray-100">
          <div className="flex items-start justify-between mb-2">
            <span className="text-[10px] md:text-xs font-semibold text-gray-500">Revenue Overview</span>
            <div className="text-right">
              <p className="text-sm md:text-base font-bold text-[#1A1A40]">$24,780</p>
              <p className="text-[9px] text-gray-400">Jun 26, 2024</p>
            </div>
          </div>
          <div className="relative h-20 md:h-24 pl-7">
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[7px] text-gray-300 py-0.5">
              <span>$100K</span>
              <span>$50K</span>
              <span>$0K</span>
            </div>
            <svg viewBox="0 0 300 100" preserveAspectRatio="none" className="w-full h-full">
              <defs>
                <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1d8fe1" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#1d8fe1" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,70 Q20,40 40,55 T80,45 T120,60 T160,30 T200,50 T240,35 T280,20 L300,15"
                fill="none"
                stroke="#1d8fe1"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M0,70 Q20,40 40,55 T80,45 T120,60 T160,30 T200,50 T240,35 T280,20 L300,15 L300,100 L0,100 Z"
                fill="url(#revGrad)"
                stroke="none"
              />
            </svg>
          </div>
          <div className="flex justify-between mt-1 pl-7">
            {revenueDays.map((d) => (
              <span key={d} className="text-[6.5px] md:text-[7.5px] text-gray-400 whitespace-nowrap">{d}</span>
            ))}
          </div>
        </div>

        {/* Top Selling Products + Recent Orders */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] md:text-xs font-bold text-[#1A1A40]">Top Selling Products</span>
              <span className="text-[9px] font-medium text-[#1d8fe1] shrink-0">View all</span>
            </div>
            <div className="space-y-1.5">
              {topProducts.map((p) => (
                <div key={p.name} className="flex items-center justify-between gap-1">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <div className="w-4 h-4 rounded bg-gray-100 shrink-0"></div>
                    <span className="text-[9px] text-gray-600 truncate">{p.name}</span>
                  </div>
                  <span className="text-[9px] font-medium text-gray-500 shrink-0">{p.qty}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] md:text-xs font-bold text-[#1A1A40]">Recent Orders</span>
              <span className="text-[9px] font-medium text-[#1d8fe1] shrink-0">View all</span>
            </div>
            <div className="space-y-1.5">
              {recentOrders.map((o) => (
                <div key={o.id} className="flex items-center justify-between gap-1">
                  <div className="min-w-0">
                    <p className="text-[9px] text-gray-500 truncate">{o.id}</p>
                    <p className="text-[9px] text-gray-600 truncate">{o.name}</p>
                  </div>
                  <span className="text-[9px] font-medium text-[#1A1A40] shrink-0">{o.amt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right floating cards */}
      <div className="md:col-span-3 flex flex-row md:flex-col gap-3 md:gap-8">
        <FloatingStat
          icon={Box}
          iconBg="bg-purple-50"
          iconColor="text-purple-600"
          label="Inventory"
          value="329"
          sub="Products"
          className="flex-1 md:-ml-4"
        />
        <FloatingStat
          icon={Network}
          iconBg="bg-purple-50"
          iconColor="text-purple-600"
          label="API"
          value="GraphQL"
          sub="Active"
          className="flex-1 md:-ml-4"
        />
        <FloatingStat
          icon={Users}
          iconBg="bg-blue-50"
          iconColor="text-[#1d8fe1]"
          label="Customers"
          value="1,024"
          change="+12.7%"
          className="flex-1 md:-ml-4"
        />
      </div>
    </div>

    {/* Storefront card */}
    <div className="relative z-20 mt-5 max-w-55 mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold text-[#1A1A40]">Storefront</span>
        <ExternalLink className="w-3 h-3 text-gray-400" />
      </div>
      <div className="bg-gray-50 rounded-lg p-2">
        <div className="h-12 rounded-md bg-linear-to-br from-blue-100 to-indigo-100 mb-1.5 flex items-center justify-center">
          <Armchair className="w-6 h-6 text-[#1d8fe1]" />
        </div>
        <p className="text-[9px] font-semibold text-[#1A1A40]">Modern Chair</p>
        <div className="flex gap-1 mt-1.5">
          <div className="w-5 h-5 rounded bg-gray-200"></div>
          <div className="w-5 h-5 rounded bg-gray-200"></div>
          <div className="w-5 h-5 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>

    {/* Medusa wordmark */}
    <div className="flex justify-center mt-5 relative z-20">
      <div className="flex items-center gap-1.5 bg-white rounded-full shadow-md border border-gray-100 px-3.5 py-1.5">
        <Hexagon className="w-4 h-4 text-[#1d8fe1]" fill="#e6f2fc" strokeWidth={2.5} />
        <span className="font-bold text-xs text-[#1A1A40]">medusa</span>
      </div>
    </div>
  </div>
);

export default function MedusaJSDevelopmentPage() {
  const [hoveredIntegration, setHoveredIntegration] = useState<number | null>(null);

  // Scroll animation for process circle
  const processSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: processSectionRef,
    offset: ["start start", "end end"],
  });
  // Rotates enough to reveal the last items without looping infinitely
  const circleRotation = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <div className="min-h-screen overflow-x-clip">
      {/* Hero Section */}
      <div className="relative w-full h-[90vh]">
        <div
          className="fixed top-0 left-0 w-full h-[90vh] flex items-center overflow-hidden bg-[#f0effb] -z-10"
          style={{
            backgroundImage: 'url("/images/MedusaHead.png")',
            // Change this value to adjust the image size!
            backgroundSize: '1180px',
            // Shifted up by 10px for the parallax positioning
            backgroundPosition: 'right calc(50% - 10px)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#f0effb',
            // This creates the parallax effect!
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="container-custom max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
            <div className="flex flex-col items-start text-left max-w-xl lg:max-w-2xl">
              <h1 className="text-6xl sm:text-7xl lg:text-[75px] font-bold text-[#111111] tracking-tighter mb-6 sm:mb-8">
                Build modern <br />
                <span className="relative inline-block bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent pb-1">commerce</span> <br />
                your way
              </h1>


              <p className="text-base sm:text-md text-[#004475] font-semibold font-Geist mb-10 max-w-[400px] leading-relaxed">
                API-first e-commerce experiences with Medusa.js. </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Wrapper (Scrolls over the hero) */}
      <div className="relative z-20 -mt-10 md:-mt-14 bg-white/75 backdrop-blur-md rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        {/* Overview */}
        <section
          id="overview"
          className="scroll-mt-36 section-padding relative overflow-hidden pt-14 md:pt-12 pb-14 md:pb-14 bg-white/5 backdrop-blur-md rounded-t-[3rem] "
        >
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent -z-10"></div>
          <div className="container-custom max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            {/* Centered Heading Badge */}
            <ScrollReveal>
              <div className="flex justify-center mb-8 md:mb-12">
                <div className="flex items-center justify-center px-4 text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-center">
                  <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
                    MEDUSAJS DEVELOPMENT COMPANY
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <ScrollReveal>
                <div className="flex flex-col items-start text-left">
                  <h2 className="text-2xl md:text-3xl lg:text-[40px] font-extrabold text-[#1A1A40] leading-[1.1] mb-6">
                    Build Scalable Headless
                    <br className="hidden md:block" /> Ecommerce Solutions with{" "}
                    <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
                      MedusaJS Experts
                    </span>
                  </h2>

                  <div className="w-16 h-1 bg-blue-600 mb-8 rounded-full"></div>

                  <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed">
                    <p>
                      As a leading{" "}
                      <span className="font-bold text-[#1A1A40]">
                        MedusaJS development company
                      </span>
                      , Livik Tech helps businesses build modern, API-first
                      ecommerce platforms that are flexible, scalable, and tailored
                      to their unique business needs.
                    </p>
                    <p>
                      Whether you're launching a new ecommerce brand, migrating
                      from Shopify or WooCommerce, or developing a custom B2B
                      marketplace, our MedusaJS developers deliver high-performance
                      commerce solutions that grow with your business.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right Content - Image */}
              <ScrollReveal direction="right">
                <div className="relative w-full max-w-[600px] mx-auto z-10 mt-8 lg:mt-0 flex items-center justify-center">
                  <div className="bg-white rounded-[2rem] p-4 shadow-xl border border-gray-100 w-full hover:shadow-2xl transition-shadow duration-500">
                    <img
                      src="/images/medusa_development_concept.png"
                      alt="Medusa JS Development Company Concept"
                      className="w-full h-auto object-contain rounded-xl"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Why Choose MedusaJS Section */}
        <section className="py-16 md:py-16 bg-[#0B0F19] relative overflow-hidden border-t border-gray-100">
          <div className="container-custom max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-18 items-center">
              <ScrollReveal>
                <div className="flex flex-col items-start text-left">
                  <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-white mb-12 uppercase">
                    Why Choose Medusa JS
                  </h2>

                  <p className="text-base md:text-lg text-white mb-6 leading-relaxed">
                    Modern ecommerce businesses need more than a traditional online store. They need complete control over customer experience, integrations, and scalability.
                  </p>
                  <p className="text-base md:text-lg text-white leading-relaxed">
                    MedusaJS is an open-source, headless commerce platform that enables businesses to build custom ecommerce experiences without the limitations of monolithic platforms.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up">
                <div className="bg-[#F4F7FE] rounded-[3rem] p-8 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-gray-900 relative overflow-hidden bg-white">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-10 -mt-20 opacity-60"></div>

                  <p className="mb-6 font-bold text-lg md:text-xl text-[#004475] relative z-10">
                    With MedusaJS, you can:
                  </p>

                  <div className="flex flex-col gap-y-4 relative z-10">
                    {[
                      "Launch lightning-fast storefronts",
                      "Build custom checkout experiences",
                      "Integrate with any third-party system",
                      "Support multiple sales channels",
                      "Scale without platform restrictions"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4 group">
                        <div className="w-7 h-7 rounded-md border border-gray-300 flex items-center justify-center shrink-0 mt-0.5 bg-white shadow-sm">
                          {/* A small generic icon similar to the wireframe */}
                          <svg viewBox="0 0 24 24" fill="none" stroke="#004475" className="w-4 h-4 text-gray-600">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium text-base md:text-md hover:text-[#004475] hover:scale-105 transition-colors cursor-pointer">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Our MedusaJS Development Services Section - Clean Card Layout */}
        <section className="py-12 md:py-16 bg-[#f0effb] relative overflow-hidden font-sans">
          <div className="container-custom max-w-6xl mx-auto px-4 md:px-8 relative z-10">

            {/* Title Area */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#1A1A40] leading-tight mb-4">
                Our MedusaJS <br className="md:hidden" />
                <span className="relative inline-block bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
                  Development
                  {/* SVG Underline */}
                  <svg className="absolute -bottom-4 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="medusaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#004475" />
                        <stop offset="100%" stopColor="#1d8fe1" />
                      </linearGradient>
                    </defs>
                    <path d="M2 9.5C45.5 4.5 110.5 1 198 3.5" stroke="url(#medusaGradient)" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span> Services
              </h2>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">

              {/* Row 1 (3 Cards) */}
              <div className="lg:col-span-3 bg-white rounded-2xl p-8 border border-gray-300 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-xl transition-shadow duration-300 flex flex-col items-start">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#004475] to-[#1d8fe1] text-white flex items-center justify-center mb-6">
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A40] mb-3">Custom MedusaJS Development</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Build fully customized ecommerce solutions tailored to your business processes and customer journey.
                </p>
              </div>

              <div className="lg:col-span-3 bg-white rounded-2xl p-8 border border-gray-300 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-xl transition-shadow duration-300 flex flex-col items-start">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#004475] to-[#1d8fe1] text-white flex items-center justify-center mb-6">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A40] mb-3">Headless Commerce Development</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Develop high-performance storefronts using Next.js, React, Vue.js, or any frontend framework while leveraging MedusaJS as the commerce engine.
                </p>
              </div>

              <div className="lg:col-span-3 bg-white rounded-2xl p-8 border border-gray-300 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-xl transition-shadow duration-300 flex flex-col items-start">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#004475] to-[#1d8fe1] text-white flex items-center justify-center mb-6">
                  <Store className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A40] mb-3">MedusaJS Marketplace Development</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Create multi-vendor marketplaces with vendor onboarding, commission management, payouts, inventory management, and order workflows.
                </p>
              </div>

              {/* Row 2 (2 Wider Cards) */}
              <div className="lg:col-span-3 bg-white rounded-2xl p-8 border border-gray-300 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-xl transition-shadow duration-300 flex flex-col items-start">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#004475] to-[#1d8fe1] text-white flex items-center justify-center mb-6">
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A40] mb-3">B2B Ecommerce Development</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Develop powerful B2B commerce platforms featuring:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 w-full">
                  <div className="flex items-center text-xs text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 shrink-0 fill-blue-50" />
                    Customer-specific pricing
                  </div>
                  <div className="flex items-center text-xs text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 shrink-0 fill-blue-50" />
                    Bulk ordering
                  </div>
                  <div className="flex items-center text-xs text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 shrink-0 fill-blue-50" />
                    Approval workflows
                  </div>
                  <div className="flex items-center text-xs text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 shrink-0 fill-blue-50" />
                    Company accounts
                  </div>
                  <div className="flex items-center text-xs text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 shrink-0 fill-blue-50" />
                    Credit management
                  </div>
                  <div className="flex items-center text-xs text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 shrink-0 fill-blue-50" />
                    Purchase orders
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 bg-white rounded-2xl p-8 border border-gray-300 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-xl transition-shadow duration-300 flex flex-col items-start">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#004475] to-[#1d8fe1] text-white flex items-center justify-center mb-6">
                  <Plug className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A40] mb-3">MedusaJS API Integration</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Connect MedusaJS with:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 w-full">
                  <div className="flex items-center text-xs text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 shrink-0 fill-blue-50" />
                    ERP Systems
                  </div>
                  <div className="flex items-center text-xs text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 shrink-0 fill-blue-50" />
                    CRM Platforms
                  </div>
                  <div className="flex items-center text-xs text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 shrink-0 fill-blue-50" />
                    Payment Gateways
                  </div>
                  <div className="flex items-center text-xs text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 shrink-0 fill-blue-50" />
                    Shipping Providers
                  </div>
                  <div className="flex items-center text-xs text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 shrink-0 fill-blue-50" />
                    CMS Platforms
                  </div>
                  <div className="flex items-center text-xs text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 shrink-0 fill-blue-50" />
                    PIM Solutions
                  </div>
                  <div className="flex items-center text-xs text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 shrink-0 fill-blue-50" />
                    Marketing Tools
                  </div>
                </div>
              </div>

              {/* Row 3 (2 Wider Cards) */}
              <div className="lg:col-span-3 bg-white rounded-2xl p-8 border border-gray-300 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-xl transition-shadow duration-300 flex flex-col items-start">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#004475] to-[#1d8fe1] text-white flex items-center justify-center mb-6">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A40] mb-3">Shopify & WooCommerce Migration</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Migrate your existing ecommerce platform to MedusaJS while preserving products, customers, orders, and SEO.
                </p>
              </div>

              <div className="lg:col-span-3 bg-white rounded-2xl p-8 border border-gray-300 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-xl transition-shadow duration-300 flex flex-col items-start">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#004475] to-[#1d8fe1] text-white flex items-center justify-center mb-6">
                  <Headphones className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A40] mb-3">Maintenance & Support</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Ensure your ecommerce platform remains secure, optimized, and ready to scale with ongoing enhancements and support.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Why Businesses Choose Livik Tech Section */}
        <section className="py-12 md:py-16 bg-[#0B0F19] relative overflow-hidden border-t border-gray-100">
          <div className="container-custom max-w-4xl mx-auto px-4 md:px-8 relative z-10">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-white mb-6 text-center">
                Why Businesses Choose Livik Tech

              </h2>
              <p className="text-base md:text-lg text-white mb-12 text-center leading-relaxed">
                We combine ecommerce expertise with modern engineering practices to deliver solutions
                that are built for long-term growth.  </p>
            </ScrollReveal>

            <ScrollReveal direction="up">
              <div className="bg-[#F4F7FE] rounded-2xl p-8 md:p-10 shadow-sm border border-blue-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl -mr-10 -mt-10 opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-100 rounded-full blur-3xl -ml-10 -mb-10 opacity-60"></div>

                <h3 className="mb-8 font-bold text-xl md:text-2xl text-[#1A1A40] relative z-10">
                  What Sets Us Apart
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 relative z-10">
                  {[
                    "Dedicated MedusaJS Developers",
                    "Headless Commerce Specialists",
                    "API-First Architecture",
                    "Custom Workflow Development",
                    "Performance Optimization",
                    "Cloud Deployment",
                    "Agile Development Process",
                    "Long-Term Technical Support"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
                      </div>
                      <span className="text-gray-700 font-medium text-base group-hover:text-[#1A1A40] transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Industries We Serve Section */}
        <section className="py-12 md:py-14 bg-slate-50 relative overflow-hidden border-t border-gray-100">
          <div className="w-full px-4 md:px-10 relative z-10">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#1A1A40] text-center">
                Industries We Serve
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up">
              <div
                id="industries"
                className="scroll-mt-36 w-full pt-4 max-w-[1600px] mx-auto"
              >
                <div className="flex flex-nowrap md:justify-center items-end gap-3 md:gap-4 px-2 md:px-10 pt-8 pb-4 w-full overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {[
                    { name: "Retail", img: "/images/retail_3d.png" },
                    { name: "Fashion & Apparel", img: "/images/3d-fashion-dress.png" },
                    { name: "Healthcare", img: "/images/3d-healthcare.png" },
                    { name: "Electronics", img: "/images/3d-headset.png" },
                    { name: "Food & Grocery", img: "/images/3d-food.png" },
                    { name: "Manufacturing", img: "/images/manufacturing_3d.png" },
                    { name: "Wholesale Distribution", img: "/images/3d-wholesale.png" },
                    { name: "D2C Brands", img: "/images/d2c_brands_3d.png" },
                    { name: "Luxury Goods", img: "/images/3d-jewelry.png" },
                    { name: "Automotive", img: "/images/3d-automotive.png" },
                  ].map((ind: any, idx) => (
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
            </ScrollReveal>
          </div>
        </section>

        {/* Development Process */}
        <section
          id="process"
          ref={processSectionRef}
          className="scroll-mt-36 relative h-[250vh] hidden md:block"
          style={{ backgroundColor: "#f0effb" }}
        >
          <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
            {/* Wrapper to define the circle's position on screen */}
            <div className="absolute top-1/2 left-[-500px] lg:left-[-400px] -translate-y-1/2 w-[1100px] h-[1100px] z-0">
              {/* The Rotating Circle */}
              <motion.div
                style={{
                  rotate: circleRotation,
                  borderColor: "#10161d",
                  borderStyle: "dashed",
                  borderWidth: "3px",
                }}
                className="absolute inset-0 rounded-full border-[3px] border-dashed"
              >
                {[
                  {
                    title: "Discover",
                    desc: "Understand your business goals, workflows, and technical requirements.",
                    icon: Search,
                    color: "bg-[#b1b2d6]",
                  },
                  {
                    title: "Design",
                    desc: "Define the architecture, integrations, and customer experience.",
                    icon: PenTool,
                    color: "bg-[#a9ded6]",
                  },
                  {
                    title: "Develop",
                    desc: "Build scalable ecommerce features using MedusaJS best practices.",
                    icon: Code2,
                    color: "bg-[#eac4b9]",
                  },
                  {
                    title: "Integrate",
                    desc: "Connect payment gateways, shipping, ERP, CRM, and third-party services.",
                    icon: Network,
                    color: "bg-[#e8cda1]",
                  },
                  {
                    title: "Deploy",
                    desc: "Launch a secure, production-ready ecommerce platform.",
                    icon: Rocket,
                    color: "bg-[#eeb197]",
                  },
                  {
                    title: "Support",
                    desc: "Provide continuous improvements, monitoring, and maintenance.",
                    icon: Headphones,
                    color: "bg-[#b1b2d6]",
                  }
                ].map((step, idx) => {
                  const angle = idx * 35;
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
                  Our
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
        <section className="md:hidden py-16 px-4" style={{ backgroundColor: "#f0effb" }}>
          <div className="mb-12">
            <h2 className="text-4xl font-extrabold text-[#333] leading-tight text-center">
              Our Development
              <br />
              Process
            </h2>
          </div>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-12 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#f0effb] before:to-transparent">
            {[
              {
                title: "Discover",
                desc: "Understand your business goals, workflows, and technical requirements.",
                icon: Search,
                color: "bg-[#b1b2d6]",
              },
              {
                title: "Design",
                desc: "Define the architecture, integrations, and customer experience.",
                icon: PenTool,
                color: "bg-[#a9ded6]",
              },
              {
                title: "Develop",
                desc: "Build scalable ecommerce features using MedusaJS best practices.",
                icon: Code2,
                color: "bg-[#eac4b9]",
              },
              {
                title: "Integrate",
                desc: "Connect payment gateways, shipping, ERP, CRM, and third-party services.",
                icon: Network,
                color: "bg-[#e8cda1]",
              },
              {
                title: "Deploy",
                desc: "Launch a secure, production-ready ecommerce platform.",
                icon: Rocket,
                color: "bg-[#eeb197]",
              },
              {
                title: "Support",
                desc: "Provide continuous improvements, monitoring, and maintenance.",
                icon: Headphones,
                color: "bg-[#b1b2d6]",
              }
            ].map((step, idx) => (
              <ScrollReveal key={idx} direction={idx % 2 === 0 ? "left" : "right"}>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className={`flex items-center justify-center w-16 h-16 rounded-full border-4 border-white ${step.color} shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10`}>
                    <step.icon className="w-7 h-7 text-[#333]" />
                  </div>
                  <div className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-xl text-[#333] mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-16 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-serif text-[#2B2B2B] mb-12">Frequently Asked Questions</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
              {[
                { q: "Why should I choose MedusaJS over Shopify?", a: "MedusaJS offers complete flexibility, full ownership of your code, no vendor lock-in, and the ability to build highly customized ecommerce experiences." },
                { q: "Can you migrate my existing ecommerce store?", a: "Yes. We can migrate from Shopify, WooCommerce, Magento, BigCommerce, and custom ecommerce platforms." },
                { q: "Do you build B2B ecommerce solutions?", a: "Absolutely. We specialize in custom B2B commerce with pricing rules, approval workflows, customer accounts, and ERP integrations." },
                { q: "Can you integrate third-party services?", a: "Yes. We integrate payment gateways, shipping providers, CRMs, ERPs, inventory systems, CMS platforms, and custom APIs." }
              ].map((faq, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.05}>
                  <FAQItem q={faq.q} a={faq.a} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding gradient-hero text-white">
          <div className="container-custom text-center">
            <ScrollReveal>
              <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
                Ready to Build with MedusaJS?
              </h2>
              <p className="text-lg text-justify opacity-90 mb-8 max-w-4xl mx-auto mt-5">
                Partner with Livik Tech to build a scalable, high-performance ecommerce platform tailored
                to your business. <br />
                <span className="flex justify-center mt-5 font-semibold text-xl"> Let's Build Your Next Commerce Experience Together.
                </span>
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
