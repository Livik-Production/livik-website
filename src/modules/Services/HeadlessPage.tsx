"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
    ScrollReveal,
} from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import {
    ShoppingCart,
    BarChart3,
    Lock,
    Search,
    Heart,
    ArrowUpRight,
    Code2,
    ArrowRight,
    Settings,
    Zap,
    Rocket,
    Link2,
    TrendingUp,
    CheckCircle2,
    Server,
    Layout,
    Database,
    Cloud,
    CreditCard,
    Box,
    Users,
    ArrowRightLeft,
    ShieldCheck,
    Clock,
    Check,
    ChevronDown,
    Globe,
    Smartphone,
    MonitorPlay,
    Plus,
    Minus,
    Sparkles,
    LayoutDashboard,
    Puzzle,
    Truck,
    Package,
    Store,
    Network,
    Boxes,
    Webhook,
    Gauge,
    RefreshCw
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

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

export default function HeadlessPage() {
    return (
        <div className="min-h-screen">
            {/* Parallax Hero Section */}
            <div className="sticky top-0 h-[90vh] md:h-[90vh] w-full flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80")',
                    }}
                />
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto -mt-10">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-3 drop-shadow-sm">
                        Headless Commerce
                    </h1>
                    <p className="text-xl text-white">"API-first, limitless digital experiences"</p>
                </div>
            </div>

            {/* Main Content Wrapper (Scrolls over the hero) */}
            <div className="relative z-20 -mt-10 md:-mt-14 bg-white/75 backdrop-blur-md rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">

                {/* Section 1: Overview */}
                <section id="overview" className="scroll-mt-36 section-padding relative overflow-hidden pt-12 md:pt-12 pb-16 md:pb-20 bg-white/5 backdrop-blur-md rounded-t-[3rem] ">
                    {/* Background decorative elements */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent -z-10"></div>
                    <div className="container-custom max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                        {/* Centered Heading Badge */}
                        <ScrollReveal>
                            <div className="flex justify-center mb-8 md:mb-12">
                                <div className="flex items-center justify-center px-4 text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-center">
                                    <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">HEADLESS COMMERCE DEVELOPMENT SERVICES</span>
                                </div>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                            {/* Left Content */}
                            <ScrollReveal>
                                <div className="flex flex-col items-start text-left">

                                    <h2 className="text-2xl md:text-3xl lg:text-[40px] font-extrabold text-[#1A1A40] leading-[1.1] mb-6">
                                        <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">Build</span> Faster,
                                        <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">Sell</span>  Smarter,
                                        <br className="hidden md:block" />
                                        Scale Without Limits
                                    </h2>
                                    <div className="w-16 h-1 bg-blue-600 mb-4 rounded-full"></div>

                                    <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed">
                                        <p>
                                            Today's customers expect lightning-fast shopping experiences across websites, mobile apps,
                                            marketplaces, kiosks, and social commerce. Traditional eCommerce platforms often make it
                                            difficult to deliver these experiences because the frontend and backend are tightly connected. </p>
                                        <p>
                                            At <span className="font-bold text-[#1A1A40]">Livik Tech</span>, we specialize in <span className="font-bold text-[#1A1A40]">Headless Commerce Solutions</span> that separate your storefront
                                            from your commerce engine, giving you the flexibility to create exceptional customer
                                            experiences while keeping your business scalable, secure, and future-ready.</p>
                                        <p>
                                            Whether you're launching a new online store, replacing a legacy platform, or modernizing an
                                            existing commerce ecosystem, our team helps you design and develop high-performance
                                            headless commerce solutions tailored to your business goals
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
                                        <Code2 className="w-8 h-8 text-white" />
                                    </div>

                                    <div className="absolute bottom-40 -right-6 w-14 h-14 bg-[#4B22F4] rounded-full shadow-lg shadow-indigo-200 flex items-center justify-center z-20 hover:scale-110 transition-transform">
                                        <BarChart3 className="w-7 h-7 text-white" />
                                    </div>

                                    <div className="absolute -bottom-2 right-24 w-12 h-12 bg-black rounded-full shadow-lg flex items-center justify-center z-20 hover:scale-110 transition-transform hidden sm:flex overflow-hidden">
                                        <img src="https://github.com/medusajs.png" alt="Medusa.js" className="w-full h-full object-cover" />
                                    </div>

                                    <div className="absolute bottom-8 right-40 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-20 hover:scale-110 transition-transform hidden sm:flex">
                                        <img src="https://cdn.worldvectorlogo.com/logos/shopify.svg" alt="Shopify" className="w-7 h-7" />
                                    </div>

                                    <div className="absolute top-1/2 -left-4 w-14 h-14 bg-[#FF4D8D] rounded-full shadow-lg shadow-pink-200 flex items-center justify-center z-20 hover:scale-110 transition-transform hidden sm:flex">
                                        <Lock className="w-6 h-6 text-white" />
                                    </div>

                                    <div className="absolute top-20 left-10 text-blue-200 flex gap-2">
                                        {/* Dots decoration */}
                                        <div className="grid grid-cols-4 gap-2">
                                            {Array.from({ length: 16 }).map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-blue-200 rounded-full"></div>)}
                                        </div>
                                    </div>

                                    <div className="absolute bottom-10 right-0 text-blue-100 hidden sm:flex gap-2">
                                        <div className="grid grid-cols-4 gap-2">
                                            {Array.from({ length: 16 }).map((_, i) => <div key={i} className="w-1 h-1 bg-blue-100 rounded-full"></div>)}
                                        </div>
                                    </div>

                                    {/* Main UI Card */}
                                    <div className="w-[95%] sm:w-[85%] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transform sm:rotate-2 hover:rotate-0 transition-transform duration-500 flex flex-col z-10 relative">
                                        {/* UI Header */}
                                        <div className="px-4 sm:px-6 py-4 border-b border-gray-50 flex items-center justify-between">
                                            <div className="font-black text-sm text-blue-600">HEADLESS ARCHITECTURE</div>
                                            <div className="hidden sm:flex items-center gap-4 text-[10px] text-gray-500 font-medium">
                                                <span className="text-gray-900">API</span>
                                                <span className="text-blue-600">Frontend</span>
                                                <span>Backend</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Code2 className="w-4 h-4 text-gray-600" />
                                            </div>
                                        </div>

                                        {/* UI Body */}
                                        <div className="p-4 sm:p-6 flex flex-col gap-6">
                                            {/* Code Block Mockup */}
                                            <div className="bg-[#1e1e1e] rounded-lg p-4 sm:p-6 font-mono text-[10px] sm:text-xs text-gray-300 overflow-hidden shadow-inner">
                                                <div className="flex gap-2 mb-4">
                                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                                </div>
                                                <div>
                                                    <span className="text-purple-400">const</span> <span className="text-blue-400">fetchProducts</span> = <span className="text-purple-400">async</span> () <span className="text-blue-400">=&gt;</span> {'{'}
                                                </div>
                                                <div className="pl-4">
                                                    <span className="text-gray-500">// Fetching from Headless CMS or Commerce API</span>
                                                </div>
                                                <div className="pl-4">
                                                    <span className="text-purple-400">const</span> response = <span className="text-purple-400">await</span> <span className="text-yellow-200">fetch</span>(<span className="text-green-400">'/api/store/products'</span>);
                                                </div>
                                                <div className="pl-4">
                                                    <span className="text-purple-400">return</span> response.<span className="text-yellow-200">json</span>();
                                                </div>
                                                <div>{'}'};</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating Performance Card */}
                                    <div className="absolute -bottom-6 sm:-bottom-10 -left-2 sm:left-4 w-48 sm:w-60 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] p-4 sm:p-5 border border-gray-100 z-30 transform sm:-rotate-2 hover:rotate-0 transition-transform duration-500">
                                        <div className="text-[10px] sm:text-xs font-semibold text-gray-500 mb-1">Page Load Time</div>
                                        <div className="flex items-end gap-2 mb-4">
                                            <div className="text-lg sm:text-2xl font-black text-gray-900">0.8s</div>
                                            <div className="text-[8px] sm:text-[10px] font-bold text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center mb-1">
                                                <ArrowUpRight className="w-2 h-2 mr-0.5" /> 400%
                                            </div>
                                            <div className="text-[8px] text-gray-400 mb-1">faster than monolith</div>
                                        </div>
                                        {/* SVG Sparkline */}
                                        <div className="w-full h-8 flex items-end">
                                            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 20">
                                                <path d="M0,15 Q10,12 20,8 T40,5 T60,8 T80,10 T100,2" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>

                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="bg-[#0B0F19] text-white py-16 md:py-16 px-4 md:px-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px]"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00A1C9]/10 rounded-full blur-[100px]"></div>
                        <div className="max-w-7xl mx-auto relative z-10">
                            <ScrollReveal>
                                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 text-center">What is Headless Commerce?</h2>
                                <p className="text-lg text-gray-300 max-w-4xl mx-auto text-center">
                                    Headless Commerce is a modern architecture where the customer-facing storefront (frontend) is
                                    separated from the backend commerce platform.
                                </p>
                                <p className="text-lg text-gray-300 mt-4 max-w-4xl mx-auto text-center">
                                    Instead of relying on a single monolithic system, your frontend communicates with the backend
                                    through APIs.
                                </p>
                                <p className="text-lg text-gray-300 mt-4 max-w-4xl mx-auto text-center">
                                    This approach allows businesses to:
                                </p>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2}>
                                <div className="w-full max-w-[90rem] mx-auto mt-6 mb-14 pt-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-2 xl:gap-4 px-4 lg:px-2">
                                        {[
                                            { num: '01', title: 'Customized Experiences', desc: 'Build highly customized shopping experiences', icon: Settings },
                                            { num: '02', title: 'Better Performance', desc: 'Improve website performance', icon: Zap },
                                            { num: '03', title: 'Omnichannel', desc: 'Launch new sales channels quickly', icon: Rocket },
                                            { num: '04', title: 'Seamless Integration', desc: 'Integrate with existing business systems', icon: Link2 },
                                            { num: '05', title: 'Infinite Scalability', desc: 'Scale independently as the business grows', icon: TrendingUp },
                                        ].map((item, idx) => (
                                            <div key={idx} className="relative flex flex-col items-center w-full group">

                                                {/* Right separator shadow line (only visible on large screens) */}
                                                {idx !== 4 && (
                                                    <div className="hidden lg:block absolute right-0 top-[10%] h-[80%] w-[1px] bg-white/10 z-0"></div>
                                                )}

                                                <div className="flex flex-row lg:flex-col items-center w-full z-10 px-2 lg:px-4 xl:px-6">
                                                    {/* Left side / Top side: Number & Semi-circle */}
                                                    {/* <div className="flex items-center relative mr-8 lg:mr-0 lg:mb-6 shrink-0">
                                                        {/* <span className="text-[2.5rem] lg:text-5xl font-light text-[#00A1C9] leading-none tracking-tighter transition-all group-hover:scale-110">{item.num}</span> */}
                                                    {/* <div className="w-5 h-12 lg:w-6 lg:h-14 border-r-[6px] border-t-[6px] border-b-[6px] border-[#00A1C9] rounded-r-full absolute -right-6 top-1/2 -translate-y-1/2"></div>
                                                    </div> */}

                                                    {/* Right side / Bottom side: Icon & Text */}
                                                    <div className="flex flex-col items-start lg:items-center text-left lg:text-center w-full pt-1 ml-4 lg:ml-0">
                                                        <div className="text-[#00A1C9] mb-3 lg:mb-4 h-8 lg:h-10 flex items-end">
                                                            <item.icon className="w-7 h-7 lg:w-8 lg:h-8" strokeWidth={1.5} />
                                                        </div>
                                                        <h4 className="text-white font-medium text-base lg:text-lg mb-2 leading-tight">{item.title}</h4>
                                                        <p className="text-sm text-gray-400 leading-relaxed px-1 lg:px-0">{item.desc}</p>
                                                    </div>
                                                </div>

                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={0.4}>
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl max-w-4xl mx-auto backdrop-blur-sm">
                                    <p className="text-lg text-gray-200 flex items-center justify-center text-center font-medium">
                                        Simply put, your business gains complete freedom to innovate without being restricted by your
                                        commerce platform.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Section 3 Businesses Are Moving to Headless Commerce */}
                <section className="py-16 md:py-16 bg-slate-50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                    <div className="container-custom max-w-6xl mx-auto px-4 md:px-8 relative z-10">
                        <ScrollReveal>
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A40] mb-6">Why Businesses Are Moving to Headless Commerce</h2>
                                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
                                    As businesses grow, traditional eCommerce platforms often become difficult to customize, expensive to maintain, and slower to scale.
                                </p>
                                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                    Modern brands are increasingly adopting headless architecture because it enables:
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                                {[
                                    "Faster website performance",
                                    "Better search engine rankings",
                                    "Improved customer experience",
                                    "Easier third-party integrations",
                                    "Omnichannel selling",
                                    "Independent frontend development",
                                    "Faster feature releases",
                                    "Long-term scalability"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center p-3 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-300 hover:shadow-lg hover:-translate-y-1 transition-all">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                                        <span className="text-sm font-semibold text-gray-800">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-12 text-center p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl shadow-blue-600/20 text-white transform hover:scale-[1.02] transition-transform max-w-4xl mx-auto">
                                <p className="text-lg md:text-xl font-semibold">For businesses focused on growth, headless commerce provides a future-proof foundation.</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
                <section className="py-16 md:py-16 px-4 md:px-8 bg-[#0B0F19] text-white relative overflow-hidden">
                    <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

                    <div className="max-w-6xl mx-auto relative z-10">
                        <ScrollReveal>
                            <div className="text-center mb-10">
                                <h2 className="text-3xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Our Headless Commerce Development Services</h2>
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-300 mb-4">Custom Headless Commerce Development</h3>
                                <p className="text-lg text-gray-400 max-w-3xl mx-auto">We build custom commerce platforms designed around your business—not around platform limitation</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <h3 className="text-center text-xl font-semibold mb-8 text-gray-200">Our solutions include :</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    "Custom storefront development",
                                    "API-first commerce architecture",
                                    "Shopping cart development",
                                    "Checkout customization",
                                    "Customer account management",
                                    "Order management",
                                    "Product catalog management",
                                    "Search and filtering",
                                    "Wishlist functionality",
                                    "Promotions and discounts",
                                    "Subscription commerce",
                                    "Multi-currency support",
                                    "Multi-language support"
                                ].map((service, idx) => (
                                    <div key={idx} className="group flex items-center p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all cursor-default shadow-lg">
                                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 group-hover:bg-blue-500/40 transition-colors shrink-0">
                                            <Code2 className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <span className="text-gray-200 font-medium text-sm md:text-base">{service}</span>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                <section className="py-6 md:py-6 bg-slate-50 overflow-hidden">
                    <div className="w-full px-4 md:px-10">
                        <div id="industries" className="scroll-mt-36 w-full pt-4 max-w-[1600px] mx-auto">
                            <ScrollReveal>
                                <p className="text-lg md:text-2xl font-bold text-[#1A1A40] uppercase tracking-widest text-center px-4">
                                    INDUSTRIES WE SERVE
                                </p>
                            </ScrollReveal>
                            <ScrollReveal delay={0.2}>
                                <div className="flex flex-nowrap md:justify-between items-end gap-3 md:gap-4 px-2 md:px-10 pt-8 pb-4 w-full overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                                    {[
                                        { name: "Fashion & Apparel", img: "/images/3d-fashion-dress.png" },
                                        { name: "Textiles", img: "/images/3d-textiles.png" },
                                        { name: "Furniture", img: "/images/3d-furniture.png" },
                                        { name: "Electronics", img: "/images/3d-headset.png" },
                                        { name: "Beauty & Cosmetics", img: "/images/3d-beauty.png" },
                                        { name: "Healthcare", img: "/images/3d-healthcare.png" },
                                        { name: "Food & Beverage", img: "/images/3d-food.png" },
                                        { name: "Manufacturing", img: "/images/3d-manufacturing.png" },
                                        { name: "Wholesale", img: "/images/3d-wholesale.png" },
                                        { name: "Automotive", img: "/images/3d-automotive.png" },
                                        { name: "B2B Distribution", img: "/images/3d-b2b.png" },
                                        { name: "Luxury Brands", img: "/images/3d-jewelry.png" },
                                    ].map((ind, idx) => (
                                        <div key={idx} className="bg-white shrink-0 min-w-[110px] md:min-w-0 rounded-xl flex-1 max-w-[150px] h-28 md:h-36 flex flex-col items-center justify-center shadow-[0_2px_15px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                                            {ind.img ? (
                                                <img src={ind.img} alt={ind.name} className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-3 object-contain mix-blend-multiply hover:scale-110 transition-transform duration-300" />
                                            ) : null}
                                            <span className="text-[10.5px] md:text-[13px] font-bold text-gray-700 text-center px-1 md:px-2 leading-tight line-clamp-2" title={ind.name}>{ind.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Section: Technologies We Use */}
                <section className="py-12 md:py-12 bg-[#0a0f1c] relative overflow-hidden">
                    {/* Background glow effects */}
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>
                    <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>

                    <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
                                    Technologies <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">We Use</span>
                                </h2>
                                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                                    We leverage modern, reliable, and scalable technologies to build high-performance digital solutions.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Frontend */}
                            <ScrollReveal delay={0.1}>
                                <div className="bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-8 shadow-2xl hover:border-blue-500/30 transition-all duration-300 relative group overflow-hidden h-full flex flex-col">
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                                    <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-blue-500/50 to-transparent"></div>
                                    {/* decorative dots */}
                                    <div className="absolute top-5 right-5 grid grid-cols-3 gap-1.5 opacity-20">
                                        {Array.from({ length: 9 }).map((_, i) => <div key={i} className="w-1 h-1 bg-white rounded-full"></div>)}
                                    </div>

                                    <div className="flex items-start gap-5 mb-8">
                                        <div className="w-14 h-14 rounded-full bg-blue-900/40 border border-blue-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)] shrink-0">
                                            <Layout className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">Frontend</h3>
                                            <p className="text-sm text-gray-400 leading-relaxed">Building interactive and responsive user interfaces.</p>
                                        </div>
                                    </div>

                                    <div className="h-[1px] w-12 bg-blue-900/50 mb-6"></div>

                                    <div className="flex flex-wrap gap-3 mt-auto">
                                        <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300"><img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" className="w-4 h-4" alt="React" /> React</span>
                                        <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300"><img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" className="w-4 h-4 invert" alt="Next.js" /> Next.js</span>
                                        <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300"><span className="text-blue-400 font-bold text-[10px] bg-blue-500/10 px-1 rounded border border-blue-500/20">TS</span> TypeScript</span>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Backend */}
                            <ScrollReveal delay={0.2}>
                                <div className="bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-8 shadow-2xl hover:border-indigo-500/30 transition-all duration-300 relative group overflow-hidden h-full flex flex-col">
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-indigo-500/50 to-transparent"></div>
                                    <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-indigo-500/50 to-transparent"></div>
                                    <div className="absolute top-5 right-5 grid grid-cols-3 gap-1.5 opacity-20">
                                        {Array.from({ length: 9 }).map((_, i) => <div key={i} className="w-1 h-1 bg-white rounded-full"></div>)}
                                    </div>

                                    <div className="flex items-start gap-5 mb-8">
                                        <div className="w-14 h-14 rounded-full bg-indigo-900/40 border border-indigo-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.3)] shrink-0">
                                            <Server className="w-6 h-6 text-indigo-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">Backend</h3>
                                            <p className="text-sm text-gray-400 leading-relaxed">Robust server-side development and API architecture.</p>
                                        </div>
                                    </div>

                                    <div className="h-[1px] w-12 bg-indigo-900/50 mb-6"></div>

                                    <div className="flex flex-wrap gap-3 mt-auto">
                                        <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300"><img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" className="w-4 h-4" alt="Node.js" /> Node.js</span>
                                        <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300"><span className="text-orange-500 font-bold text-xs">ex</span> Express.js</span>
                                        <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300"><div className="w-4 h-4 bg-black rounded-full overflow-hidden flex items-center justify-center"><img src="https://github.com/medusajs.png" className="w-3 h-3" alt="MedusaJS" /></div> MedusaJS</span>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Database */}
                            <ScrollReveal delay={0.3}>
                                <div className="bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-8 shadow-2xl hover:border-purple-500/30 transition-all duration-300 relative group overflow-hidden h-full flex flex-col">
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                                    <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-purple-500/50 to-transparent"></div>
                                    <div className="absolute top-5 right-5 grid grid-cols-3 gap-1.5 opacity-20">
                                        {Array.from({ length: 9 }).map((_, i) => <div key={i} className="w-1 h-1 bg-white rounded-full"></div>)}
                                    </div>

                                    <div className="flex items-start gap-5 mb-8">
                                        <div className="w-14 h-14 rounded-full bg-purple-900/40 border border-purple-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.3)] shrink-0">
                                            <Database className="w-6 h-6 text-purple-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">Database</h3>
                                            <p className="text-sm text-gray-400 leading-relaxed">Reliable and scalable data storage solutions.</p>
                                        </div>
                                    </div>

                                    <div className="h-[1px] w-12 bg-purple-900/50 mb-6"></div>

                                    <div className="flex flex-wrap gap-3 mt-auto">
                                        <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300"><img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" className="w-4 h-4" alt="PostgreSQL" /> PostgreSQL</span>
                                        <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300"><img src="https://cdn.worldvectorlogo.com/logos/redis.svg" className="w-4 h-4" alt="Redis" /> Redis</span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">

                            {/* Cloud */}
                            <ScrollReveal delay={0.4} className="lg:col-span-4">
                                <div className="bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-8 shadow-2xl hover:border-cyan-500/30 transition-all duration-300 relative group overflow-hidden h-full flex flex-col">
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
                                    <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
                                    <div className="absolute top-5 right-5 grid grid-cols-3 gap-1.5 opacity-20">
                                        {Array.from({ length: 9 }).map((_, i) => <div key={i} className="w-1 h-1 bg-white rounded-full"></div>)}
                                    </div>

                                    <div className="flex items-start gap-5 mb-8">
                                        <div className="w-14 h-14 rounded-full bg-cyan-900/40 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)] shrink-0">
                                            <Cloud className="w-6 h-6 text-cyan-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">Cloud</h3>
                                            <p className="text-sm text-gray-400 leading-relaxed">Scalable cloud infrastructure for high availability.</p>
                                        </div>
                                    </div>

                                    <div className="h-[1px] w-12 bg-cyan-900/50 mb-6"></div>

                                    <div className="flex flex-wrap gap-3 mt-auto">
                                        <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 font-semibold text-orange-400">AWS</span>
                                        <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300"><img src="https://cdn.worldvectorlogo.com/logos/docker.svg" className="w-4 h-4" alt="Docker" /> Docker</span>
                                        <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300"><img src="https://cdn.worldvectorlogo.com/logos/kubernets.svg" className="w-4 h-4" alt="Kubernetes" /> Kubernetes</span>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Integrations */}
                            <ScrollReveal delay={0.5} className="lg:col-span-8">
                                <div className="bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-8 shadow-2xl hover:border-violet-500/30 transition-all duration-300 relative group overflow-hidden h-full flex flex-col">
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-violet-500/50 to-transparent"></div>
                                    <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-violet-500/50 to-transparent"></div>
                                    <div className="absolute top-5 right-5 grid grid-cols-3 gap-1.5 opacity-20">
                                        {Array.from({ length: 9 }).map((_, i) => <div key={i} className="w-1 h-1 bg-white rounded-full"></div>)}
                                    </div>

                                    <div className="flex items-start gap-5 mb-8">
                                        <div className="w-14 h-14 rounded-full bg-violet-900/40 border border-violet-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.3)] shrink-0">
                                            <Link2 className="w-6 h-6 text-violet-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">Integrations</h3>
                                            <p className="text-sm text-gray-400 leading-relaxed">Seamless third-party integrations and service connections.</p>
                                        </div>
                                    </div>

                                    <div className="h-[1px] w-12 bg-violet-900/50 mb-6"></div>

                                    <div className="flex flex-wrap gap-3 mt-auto">
                                        <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300"><div className="w-4 h-4 bg-indigo-500 rounded text-white flex items-center justify-center font-bold text-[10px]">S</div> Stripe</span>
                                        <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300"><img src="https://cdn.worldvectorlogo.com/logos/paypal-3.svg" className="w-4 h-4" alt="PayPal" /> PayPal</span>
                                        <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300"><img src="https://cdn.worldvectorlogo.com/logos/razorpay.svg" className="w-4 h-4" alt="Razorpay" /> Razorpay</span>
                                        <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300"><Settings className="w-4 h-4 text-green-500" /> ShipStation</span>
                                        <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300"><div className="w-4 h-4 bg-blue-500 rounded flex items-center justify-center"><Check className="w-3 h-3 text-white" /></div> EasyPost</span>
                                        <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300"><Server className="w-4 h-4 text-blue-400" /> ERP Systems</span>
                                        <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300"><Users className="w-4 h-4 text-blue-400" /> CRM Systems</span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>


                <section className="py-12 px-4 md:px-1 relative overflow-hidden bg-white">
                    {/* Subtle background blurs like in the image */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                        <div className="absolute top-0 left-[10%] w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[120px]"></div>
                        <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-[100px]"></div>
                    </div>

                    <div className="max-w-[1300px] mx-auto relative z-10">
                        <ScrollReveal>
                            <div className="text-center mb-8 flex flex-col items-center">

                                <div className="relative inline-block mb-6 text-center">
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                                        <span className="text-[#111827]">Headless Storefront</span>{" "}
                                        <span className="relative inline-block bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
                                            Development
                                            {/* SVG Underline */}
                                            <svg className="absolute -bottom-4 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                                <path d="M2 9.5C45.5 4.5 110.5 1 198 3.5" stroke="#33a8d9" strokeWidth="4" strokeLinecap="round" />
                                            </svg>
                                        </span>
                                    </h2>
                                </div>

                                <p className="text-lg text-gray-500 max-w-2xl mx-auto mt-4">
                                    A modern storefront directly impacts conversion rates.
                                </p>
                                <p className="text-lg text-gray-500 max-w-3xl mx-auto mt-1 leading-relaxed">
                                    We create responsive, SEO-friendly storefronts using modern frontend frameworks that deliver exceptional performance across desktop and mobile devices.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="bg-slate-100 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white">

                                <div className="flex items-center justify-center gap-4 mb-5">
                                    <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-indigo-200"></div>
                                    <h3 className="text-2xl font-bold text-[#111827]">Features include</h3>
                                    <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-indigo-200"></div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                    {[
                                        {
                                            num: "01",
                                            title: "Server-side rendering (SSR)",
                                            desc: "Deliver dynamic content faster with better SEO and improved time to first byte.",
                                            icon: Server,
                                            color: "purple"
                                        },
                                        {
                                            num: "02",
                                            title: "Static site generation (SSG)",
                                            desc: "Pre-build pages at build time for blazing-fast performance and scalability.",
                                            icon: Layout,
                                            color: "blue"
                                        },
                                        {
                                            num: "03",
                                            title: "Progressive Web Apps (PWA)",
                                            desc: "Provide an app-like experience with offline support and push notifications.",
                                            icon: Smartphone,
                                            color: "green"
                                        },
                                        {
                                            num: "04",
                                            title: "Responsive design",
                                            desc: "Ensure a seamless experience across all screen sizes and devices.",
                                            icon: MonitorPlay,
                                            color: "orange"
                                        },
                                        {
                                            num: "05",
                                            title: "Accessibility best practices",
                                            desc: "Build inclusive experiences that are usable by everyone.",
                                            icon: CheckCircle2,
                                            color: "indigo"
                                        },
                                        {
                                            num: "06",
                                            title: "Core Web Vitals optimization",
                                            desc: "Optimize for better rankings with improved loading, interactivity and stability.",
                                            icon: Zap,
                                            color: "cyan"
                                        },
                                        {
                                            num: "07",
                                            title: "Fast page loading",
                                            desc: "Deliver content quickly with optimized assets and modern techniques.",
                                            icon: Clock,
                                            color: "pink"
                                        },
                                        {
                                            num: "08",
                                            title: "Mobile-first architecture",
                                            desc: "Design and build with mobile users first for better performance and usability.",
                                            icon: Smartphone,
                                            color: "teal"
                                        }
                                    ].map((feature, idx) => {
                                        const colorMap: any = {
                                            purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', numBg: 'bg-purple-50', numText: 'text-purple-400', line: 'bg-purple-500' },
                                            blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', numBg: 'bg-blue-50', numText: 'text-blue-400', line: 'bg-blue-500' },
                                            green: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', numBg: 'bg-emerald-50', numText: 'text-emerald-400', line: 'bg-emerald-500' },
                                            orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', numBg: 'bg-orange-50', numText: 'text-orange-400', line: 'bg-orange-500' },
                                            indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200', numBg: 'bg-indigo-50', numText: 'text-indigo-400', line: 'bg-indigo-500' },
                                            cyan: { bg: 'bg-cyan-50', text: 'text-cyan-600', border: 'border-cyan-200', numBg: 'bg-cyan-50', numText: 'text-cyan-400', line: 'bg-cyan-500' },
                                            pink: { bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-200', numBg: 'bg-pink-50', numText: 'text-pink-400', line: 'bg-pink-500' },
                                            teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200', numBg: 'bg-teal-50', numText: 'text-teal-400', line: 'bg-teal-500' },
                                        };
                                        const c = colorMap[feature.color];

                                        return (
                                            <div key={idx} className="bg-white rounded-[1.25rem] p-2 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group flex flex-col h-full overflow-hidden">
                                                <div className={`absolute top-4 right-4 text-xs font-semibold px-2 py-1 rounded ${c.numBg} ${c.numText}`}>
                                                    {feature.num}
                                                </div>
                                                <div className="flex flex-col items-center text-center mt-3 flex-grow">
                                                    <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-5 ${c.bg} ${c.text} border-2 ${c.border} group-hover:scale-110 transition-transform duration-300`}>
                                                        <feature.icon className="w-6 h-6" strokeWidth={1.5} />
                                                    </div>
                                                    <h4 className="font-bold text-gray-900 text-[15px] mb-3 leading-snug">{feature.title}</h4>
                                                    <p className="text-gray-500 text-[13px] leading-relaxed mb-6">{feature.desc}</p>
                                                </div>
                                                {/* <div className={`h-[3px] w-8 mx-auto rounded-full ${c.line} mt-auto group-hover:w-16 transition-all duration-300 opacity-80`}></div> */}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                <section className="py-12 md:py-12 px-4 md:px-8 bg-slate-50 relative overflow-hidden">
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">

                        {/* Left Side: MedusaJS Development Services */}
                        <ScrollReveal>
                            <div className="bg-[#040814] rounded-[2rem] p-8 lg:p-8 border border-[#1a2235] relative overflow-hidden shadow-2xl h-full flex flex-col">
                                {/* Decorative background glow */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>

                                <div className="relative z-10">

                                    <h2 className="tracking-tight">
                                        <span className="block text-3xl lg:text-5xl font-serif font-medium text-white mb-2">MedusaJS Development</span>
                                        <span className="block text-3xl lg:text-5xl font-serif font-medium text-blue-500 mb-6">Services</span>
                                    </h2>

                                    <p className="text-gray-400 text-sm md:text-base mb-10 max-w-md">
                                        MedusaJS is one of the fastest-growing open-source commerce platforms, built specifically for modern headless commerce.
                                    </p>

                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-8 h-8 rounded-lg bg-blue-900/50 border border-blue-700/50 flex items-center justify-center shrink-0">
                                            <div className="w-4 h-4 bg-blue-500 rounded-[3px] rotate-45 flex items-center justify-center">
                                                <div className="w-1.5 h-1.5 bg-[#040814] rounded-full"></div>
                                            </div>
                                        </div>
                                        <h3 className="text-blue-500 font-bold text-lg">Our MedusaJS expertise includes:</h3>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                                        {[
                                            { icon: Rocket, text: "Complete Medusa implementation" },
                                            { icon: Code2, text: "Custom backend development" },
                                            { icon: LayoutDashboard, text: "Admin dashboard customization" },
                                            { icon: ShoppingCart, text: "Product catalog customization" },
                                            { icon: Puzzle, text: "Custom plugins" },
                                            { icon: CreditCard, text: "Payment integrations" },
                                            { icon: Truck, text: "Shipping integrations" },
                                            { icon: Package, text: "Inventory management" },
                                            { icon: Store, text: "Marketplace development" },
                                            { icon: Network, text: "B2B commerce" },
                                            { icon: Boxes, text: "Multi-store architecture" },
                                            { icon: Webhook, text: "Custom APIs" },
                                            { icon: Gauge, text: "Performance optimization" },
                                            { icon: RefreshCw, text: "Upgrades and maintenance" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-full bg-[#0f172a]/60 border border-slate-800/80 hover:bg-[#1e293b]/80 transition-colors">
                                                <item.icon className="w-4 h-4 text-blue-500 shrink-0" />
                                                <span className="text-[13px] font-medium text-gray-300">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-slate-800/80">
                                        <Link href="/services/medusajs-development-company">
                                            <button className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                                                Explore MedusaJS Services
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </Link>
                                    </div>
                                </div>

                                {/* Database Icon watermark on the right */}
                                <div className="absolute top-8 right-8 opacity-[0.03] pointer-events-none">
                                    <Database className="w-64 h-64 text-white" />
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Right Side: Ecommerce Migration */}
                        <ScrollReveal delay={0.2}>
                            <div className="bg-white rounded-[2rem] p-4 lg:p-4 border border-gray-400 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full flex flex-col">
                                <div className="flex flex-col items-center text-center mb-10">
                                    <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 shadow-sm">
                                        <ArrowRightLeft className="w-8 h-8 text-indigo-600" />
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-serif text-[#2B2B2B] mb-4">Ecommerce Migration</h2>
                                    <p className="text-slate-600 text-sm md:text-base max-w-md mx-auto mb-6">
                                        Looking to move away from a traditional platform?<br />We help businesses migrate with minimal disruption.
                                    </p>
                                    <div className="w-10 h-0.5 bg-indigo-600 rounded-full"></div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full mt-auto">
                                    {/* Migration Services Include */}
                                    <div className="bg-[#f8faff] rounded-[1.5rem] p-4 border border-indigo-400 relative overflow-hidden flex flex-col">
                                        {/* gradient dots overlay at bottom */}
                                        <div className="absolute bottom-0 left-0 w-full h-38 bg-gradient-to-t from-indigo-100/30 to-transparent opacity-50 pointer-events-none"></div>

                                        <div className="w-18 h-18 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4 z-10 shrink-0 border border-gray-300">
                                            <Truck className="w-10 h-10 text-indigo-500" />
                                        </div>

                                        <h3 className="text-lg font-bold text-slate-900 mb-6 z-10 leading-snug">Migration services<br />include:</h3>

                                        <div className="flex flex-col gap-5 z-10 mt-2">
                                            {[
                                                { icon: "S", iconBg: "bg-[#e8f5e9] text-[#2e7d32]", text: "Shopify to Headless" },
                                                { icon: "woo", iconBg: "bg-[#ede7f6] text-[#5e35b1]", text: "WooCommerce to Headless" },
                                                { icon: "M", iconBg: "bg-[#ffe0b2] text-[#e65100]", text: "Magento Migration" },
                                                { icon: "B", iconBg: "bg-[#e3f2fd] text-[#1565c0]", text: "BigCommerce Migration" },
                                                { isIcon: true, icon: Code2, iconBg: "bg-[#e8eaf6] text-[#3949ab]", text: "Custom Platform Migration" }
                                            ].map((item, i) => {
                                                const Icon = item.icon as any;
                                                return (
                                                    <div key={i} className="flex items-center gap-4">
                                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${item.iconBg}`}>
                                                            {item.isIcon ? <Icon className="w-4 h-4" /> : item.icon as string}
                                                        </div>
                                                        <span className="text-sm font-semibold text-slate-700 leading-tight">{item.text}</span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    {/* Migration Covers */}
                                    <div className="bg-[#f2fcf6] rounded-[1.5rem] p-4 border border-emerald-500 relative overflow-hidden flex flex-col">
                                        {/* gradient dots overlay at bottom */}
                                        <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-emerald-100/30 to-transparent opacity-50 pointer-events-none"></div>

                                        <div className="w-18 h-18 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4 z-10 shrink-0">
                                            <ShieldCheck className="w-10 h-10 text-emerald-600" />
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-6 z-10 -">Migration covers:</h3>

                                        <div className="flex flex-col gap-4 z-10 mt-2">
                                            {[
                                                "Products",
                                                "Customers",
                                                "Orders",
                                                "Categories",
                                                "SEO URLs",
                                                "Images",
                                                "Metadata",
                                                "Redirect strategy"
                                            ].map((text, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <Check className="w-4 h-4 text-emerald-500 shrink-0" strokeWidth={3} />
                                                    <span className="text-sm font-medium text-slate-700">{text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                    </div>
                </section>

                <section className="py-16 md:py-24 px-4 md:px-8 bg-[#0B0F19] relative">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-900/20 rounded-full blur-[100px]"></div>
                        <div className="absolute right-0 top-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px]"></div>
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                            {/* Left Column: Title & Description */}
                            <div className="lg:col-span-5 relative">
                                <div className="sticky top-32">
                                    <ScrollReveal>
                                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                                            Why Choose <br className="hidden lg:block" />Headless Commerce?
                                        </h2>
                                        <p className="text-md md:text-md text-gray-400">
                                            Unlock the true potential of your online business with a modern, decoupled architecture designed for scale and performance.
                                        </p>
                                    </ScrollReveal>
                                </div>
                            </div>

                            {/* Right Column: Features List */}
                            <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">
                                {/* Item 1 */}
                                <ScrollReveal delay={0.1}>
                                    <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start bg-[#111827]/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-gray-400 hover:border-blue-500/30 hover:-translate-y-1 transition-all">
                                        <div className="flex-shrink-0 w-16 h-16 bg-amber-500/10 text-amber-400 rounded-2xl flex items-center justify-center transform rotate-3 shadow-sm border border-amber-500/20">
                                            <Zap className="w-8 h-8 -rotate-3" />
                                        </div>
                                        <div>
                                            <h3 className="font-serif font-bold text-2xl mb-3 text-white">Lightning Fast Performance</h3>
                                            <p className="text-gray-400 leading-relaxed">Modern frameworks significantly reduce page load times, helping improve user experience and conversion rates.</p>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* Item 2 */}
                                <ScrollReveal delay={0.2}>
                                    <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start bg-[#111827]/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-gray-400 hover:border-blue-500/30 hover:-translate-y-1 transition-all">
                                        <div className="flex-shrink-0 w-16 h-16 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center transform -rotate-3 shadow-sm border border-blue-500/20">
                                            <Globe className="w-8 h-8 rotate-3" />
                                        </div>
                                        <div>
                                            <h3 className="font-serif font-bold text-2xl mb-3 text-white">Better SEO</h3>
                                            <p className="text-gray-400 leading-relaxed mb-5">Search engines favor websites that load quickly, are mobile-friendly, and provide excellent user experiences. A properly implemented headless architecture supports:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {["Faster rendering", "Better Core Web Vitals", "Structured data", "Optimized metadata", "Improved crawlability"].map((item, i) => (
                                                    <div key={i} className="flex items-center text-xs font-medium text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>{item}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* Item 3 */}
                                <ScrollReveal delay={0.3}>
                                    <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start bg-[#111827]/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-gray-400 hover:border-blue-500/30 hover:-translate-y-1 transition-all">
                                        <div className="flex-shrink-0 w-16 h-16 bg-purple-500/10 text-purple-400 rounded-2xl flex items-center justify-center transform rotate-3 shadow-sm border border-purple-500/20">
                                            <Layout className="w-8 h-8 -rotate-3" />
                                        </div>
                                        <div>
                                            <h3 className="font-serif font-bold text-2xl mb-3 text-white">Unlimited Design Freedom</h3>
                                            <p className="text-gray-400 leading-relaxed">Unlike template-based systems, headless architecture allows your business to build unique shopping experiences without design limitations.</p>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* Item 4 */}
                                <ScrollReveal delay={0.4}>
                                    <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start bg-[#111827]/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-gray-400 hover:border-blue-500/30 hover:-translate-y-1 transition-all">
                                        <div className="flex-shrink-0 w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center transform -rotate-3 shadow-sm border border-emerald-500/20">
                                            <Link2 className="w-8 h-8 rotate-3" />
                                        </div>
                                        <div>
                                            <h3 className="font-serif font-bold text-2xl mb-3 text-white">Easier Integrations</h3>
                                            <p className="text-gray-400 leading-relaxed mb-5">Connect your commerce platform with:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {["ERP systems", "CRM platforms", "Inventory software", "Shipping providers", "Payment gateways", "Marketing automation", "Analytics platforms"].map((item, i) => (
                                                    <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-gray-300">{item}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* Item 5 */}
                                <ScrollReveal delay={0.5}>
                                    <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start bg-[#111827]/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-gray-400 hover:border-blue-500/30 hover:-translate-y-1 transition-all">
                                        <div className="flex-shrink-0 w-16 h-16 bg-rose-500/10 text-rose-400 rounded-2xl flex items-center justify-center transform rotate-3 shadow-sm border border-rose-500/20">
                                            <MonitorPlay className="w-8 h-8 -rotate-3" />
                                        </div>
                                        <div>
                                            <h3 className="font-serif font-bold text-2xl mb-3 text-white">Omnichannel Commerce</h3>
                                            <p className="text-gray-400 leading-relaxed mb-5">Sell across multiple touchpoints:</p>
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {["Website", "Mobile Apps", "POS Systems", "Marketplaces", "Social Commerce", "Digital Displays", "B2B Portals"].map((item, i) => (
                                                    <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-gray-300">{item}</span>
                                                ))}
                                            </div>
                                            <div className="inline-flex items-center font-bold text-rose-400 bg-rose-500/10 px-4 py-2.5 rounded-xl border border-rose-500/20 text-sm">
                                                <CheckCircle2 className="w-4 h-4 mr-2" />
                                                All powered by a single commerce backend.
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="scroll-mt-36 py-14 md:py-14 px-4 md:px-8 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <ScrollReveal>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black text-center mb-12">
                                Why Choose{" "}
                                <span className="bg-gradient-to-r from-[#004475] to-[#1d8fe1] bg-clip-text text-transparent">
                                    Livik
                                </span>{" "}
                                for{" "}
                                <span className="text-[#004475]">Headless Commerce</span> Development
                            </h2>
                        </ScrollReveal>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 max-w-6xl mx-auto">
                            {[
                                { title: "Commerce-Focused Engineering", desc: "We specialize in modern commerce technologies rather than offering eCommerce as just another service.", icon: Settings },
                                { title: "API-First Development", desc: "Our solutions are built for scalability and integration from day one.", icon: Database },
                                { title: "Clean, Maintainable Code", desc: "We follow engineering best practices to ensure long-term maintainability.", icon: Code2 },
                                { title: "Transparent Communication", desc: "You'll receive regular updates, sprint reviews, and clear project visibility throughout the engagement.", icon: Users },
                                { title: "Flexible Engagement Models", desc: "Choose the model that suits your business:", list: ["Dedicated Team", "Project-Based Development", "Team Augmentation", "Ongoing Support & Maintenance"], icon: Layout }
                            ].map((reason, idx) => (
                                <ScrollReveal key={idx} delay={idx * 0.1}>
                                    <div className="group flex flex-col items-start text-left p-8 rounded-2xl bg-white border border-gray-300 hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 h-full">
                                        <div className="mb-6 w-14 h-14 rounded-2xl bg-blue-500/5 flex items-center justify-center text-[#004475] group-hover:bg-[#004475] group-hover:text-white transition-all duration-300">
                                            <reason.icon size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold mb-4 text-[#004475]">
                                            {reason.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-slate-600">
                                            {reason.desc}
                                        </p>
                                        {reason.list && (
                                            <ul className="mt-4 space-y-1 w-full">
                                                {reason.list.map((item, i) => (
                                                    <li key={i} className="flex items-center text-slate-600 font-medium text-sm">
                                                        <CheckCircle2 className="w-4 h-4 text-blue-600 mr-3 shrink-0" /> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-16 px-4 md:px-8 bg-slate-900 text-white relative overflow-hidden">
                    <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
                    <div className="max-w-7xl mx-auto relative z-10">
                        <ScrollReveal>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16">Our Development Process</h2>
                        </ScrollReveal>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {[
                                "Discovery & Business Analysis", "Solution Architecture", "UI/UX Planning",
                                "Commerce Backend Development", "Storefront Development", "Third-Party Integrations",
                                "Quality Assurance", "Deployment", "Performance Optimization", "Ongoing Support"
                            ].map((step, idx) => (
                                <ScrollReveal key={idx} delay={idx * 0.05}>
                                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl h-full hover:bg-white/10 transition-colors group relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                                        <div className="text-6xl font-black text-white/5 absolute -right-2 -bottom-4 group-hover:scale-110 transition-transform">
                                            {idx + 1}
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold mb-4 shadow-inner">
                                            {idx + 1}
                                        </div>
                                        <h3 className="font-semibold text-lg text-gray-200">{step}</h3>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-16 px-4 md:px-8 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <ScrollReveal>
                            <h2 className="text-3xl md:text-5xl font-serif text-[#2B2B2B] mb-12">Frequently Asked Questions</h2>
                        </ScrollReveal>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
                            {[
                                { q: "What is Headless Commerce?", a: "Headless Commerce separates the frontend from the backend, allowing greater flexibility, performance, and scalability." },
                                { q: "Is Headless Commerce good for SEO?", a: "Yes. When implemented correctly using technologies like Next.js with server-side rendering, it can improve page speed, Core Web Vitals, and overall SEO." },
                                { q: "Why choose MedusaJS?", a: "MedusaJS is open source, API-first, highly customizable, and avoids vendor lock-in, making it a strong choice for businesses that need flexibility and control." },
                                { q: "Can you migrate my existing store?", a: "Yes. We can migrate products, customers, orders, images, URLs, and other key data while helping preserve SEO where possible." },
                                { q: "How long does a headless commerce project take?", a: "Timelines vary based on complexity, but most custom projects range from several weeks to a few months. After an initial discovery session, we provide a detailed roadmap and estimate." }
                            ].map((faq, idx) => (
                                <ScrollReveal key={idx} delay={idx * 0.05}>
                                    <FAQItem q={faq.q} a={faq.a} />
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section-padding gradient-hero text-white">
                    <div className="container-custom text-center">
                        <ScrollReveal>
                            <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
                                Ready to Build a Future-Ready Commerce Platform?
                            </h2>
                            <p className="text-lg text-justify opacity-90 mb-8 max-w-4xl mx-auto mt-5">
                                Whether you're launching a new digital commerce experience, replacing a legacy platform, or
                                scaling an existing business, Livik Tech can help you build a high-performance headless
                                commerce solution tailored to your goals.
                                <br />
                                <span className="flex justify-center mt-5"> Talk to our commerce specialists today to discuss your requirements and discover how
                                    headless architecture can support your long-term growth.
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