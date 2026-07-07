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
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function HeadlessPage() {
    return (
        <div className="min-h-screen">
            {/* Parallax Hero Section */}
            <div className="sticky top-0 h-[80vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden">
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
                <section id="overview" className="scroll-mt-36 section-padding relative overflow-hidden pt-14 md:pt-14 pb-16 md:pb-20 bg-white/5 backdrop-blur-md rounded-t-[3rem] ">
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
                <section >
                    <div className="bg-slate-50 py-8 md:py-12 px-4 md:px-8">
                      <h3 className="font-bold text-2xl text-black flex items-center justify-center"> What is Headless Commerce?</h3>
                      <p className="text-base text-black mt-4 flex items-center justify-center">
                        Headless Commerce is a modern architecture where the customer-facing storefront (frontend) is 
                        separated from the backend commerce platform.
                      </p>
                        <p className="text-base text-black mt-4 flex items-center justify-center">
                            Instead of relying on a single monolithic system, your frontend communicates with the backend
                            through APIs.
                        </p>
                        <p className="text-base text-black mt-4 flex items-center justify-center">
                            This approach allows businesses to:
                        </p>
                        <ol className="flex items-center justify-center mt-4 text-base text-black list-decimal list-inside space-y-2">
                            <li> Build highly customized shopping experiences</li>
                            <li> Improve website performance</li>
                            <li> Launch new sales channels quickly</li>
                            <li> Integrate with existing business systems</li>
                            <li> Scale independently as the business grows</li>
                        </ol>
                        <p className="text-base text-black mt-4 flex items-center justify-center">
                            Simply put, your business gains complete freedom to innovate without being restricted by your 
                            commerce platform
                        </p>
                    </div>
                </section>

                {/* Section 3 Businesses Are Moving to Headless Commerce */}
                <section>
                     <div className="bg-white py-8 md:py-12 px-4 md:px-8">
                        <h3 className="text-xl md:text-2xl font-bold text-[#1A1A40] mb-4 flex justify-center " >Why Businesses Are Moving to Headless Commerce</h3>
                        <p className="flex justify-center text-base">As businesses grow, traditional eCommerce platforms often become difficult to customize,
                            expensive to maintain, and slower to scale.</p>
                            <p className="flex justify-center text-base mt-4">Modern brands are increasingly adopting headless architecture because it enables:</p>
                            <ol className="flex items-center justify-center mt-4 text-base text-black list-disc list-inside space-y-2">
                                <li> Faster website performance</li>
                                <li> Better search engine rankings</li>
                                <li> Improved customer experience</li>
                                <li> Easier third-party integrations</li>
                                <li> Omnichannel selling</li>
                                <li> Independent frontend development</li>
                                <li> Faster feature releases</li>
                                <li> Long-term scalability</li>
                            </ol>
                            <p className="flex justify-center text-base mt-4">For businesses focused on growth, headless commerce provides a future-proof foundation.</p>
                     </div>
                </section>
                <section> 
                    <div className="py-8 md:py-12 px-4 md:px-8 bg-slate-50">
                        <h1 className="flex justify-center text-3xl font-bold">Our Headless Commerce Development Services</h1>
                        <h3 className="flex justify-center mt-4">Custom Headless Commerce Development</h3>

                        <p>We build custom commerce platforms designed around your business—not around platform limitation</p>
                    
                    <h3>Our solutions include :</h3>
                    <ol>
                        <li>Custom storefront development</li>
                        <li>API-first commerce architecture</li>
                        <li>Shopping cart development</li>
                        <li>Checkout customization</li>
                        <li>Customer account management</li>
                        <li>Order management</li>
                        <li>Product catalog management</li>
                        <li>Search and filtering</li>
                        <li>Wishlist functionality</li>
                        <li>Promotions and discounts</li>
                        <li>Subscription commerce</li>
                        <li>Multi-currency support</li>
                        <li>Multi-language support</li>                       
                    </ol>
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

                {/* Section 2: Trusted Technologies Section */}
                {/* <section className="py-8 md:py-8 bg-[#fafdf8] relative overflow-hidden">
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
                                    <div key={i} className="flex gap-12 md:gap-20 px-6 py-3 items-center">
                                        {[
                                            { name: "Medusa.js", src: "https://cdn.simpleicons.org/medusa", color: "#111827", font: "Inter, sans-serif", weight: "800", size: "text-2xl" },
                                            { name: "shopify", src: "https://cdn.worldvectorlogo.com/logos/shopify.svg", color: "#95BF47", font: "Helvetica Neue, Helvetica, Arial, sans-serif", weight: "700", size: "text-3xl tracking-tighter" },
                                            { name: "Commerce", src: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg", color: "#96588A", font: "Roboto, sans-serif", weight: "700", size: "text-2xl" },
                                            { name: "Magento", src: "/magento.png", color: "#EE672F", font: "Montserrat, sans-serif", weight: "800", size: "text-2xl tracking-tight" },
                                            { name: "BIGCOMMERCE", src: "https://cdn.worldvectorlogo.com/logos/bigcommerce-1.svg", color: "#121118", font: "Arial, sans-serif", weight: "900", size: "text-2xl tracking-tighter" },
                                            { name: "Payload CMS", src: "https://cdn.simpleicons.org/payloadcms", color: "#000000", font: "Inter, sans-serif", weight: "800", size: "text-2xl" },
                                            { name: "Strapi", src: "https://cdn.worldvectorlogo.com/logos/strapi-2.svg", color: "#8E75FF", font: "Inter, sans-serif", weight: "700", size: "text-2xl" },
                                            { name: "NEXT.js", src: "https://cdn.worldvectorlogo.com/logos/next-js.svg", color: "#000000", font: "Inter, sans-serif", weight: "900", size: "text-2xl tracking-tighter" },
                                            { name: "React", src: "https://cdn.worldvectorlogo.com/logos/react-2.svg", height: "h-10", color: "#61DAFB", font: "Segoe UI, sans-serif", weight: "700", size: "text-2xl" },
                                            { name: "node.js", src: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg", color: "#339933", font: "Helvetica Neue, Helvetica, Arial, sans-serif", weight: "600", size: "text-3xl tracking-tight" },
                                            { name: "PostgreSQL", src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg", color: "#336791", font: "Inter, sans-serif", weight: "700", size: "text-2xl" },
                                            { name: "MongoDB", src: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg", color: "#47A248", font: "Inter, sans-serif", weight: "700", size: "text-2xl" },

                                        ].map((stack, idx) => (
                                            <div key={idx} className="flex items-center gap-1 justify-center shrink-0 transition-all duration-300 hover:scale-105 cursor-pointer">
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
                                                            fontWeight: stack.weight
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
                </section> */}

            </div>
        </div>
    );
}