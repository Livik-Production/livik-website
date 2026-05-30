"use client";

import React, { useRef } from "react";
import {
  Store,
  Factory,
  Truck,
  HeartPulse,
  Wallet,
  Home,
  GraduationCap,
  Plane,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  ScrollRevealText,
} from "@/components/ui/scroll-reveal";

const solutions = [
  {
    title: "Education",
    description:
      "Modernize learning with scalable platforms, student management systems and interactive digital classrooms.",
    icon: GraduationCap,
    color: "bg-violet-50 text-violet-600",
    href: "/solutions/education",
  },
  {
    title: "Fintech",
    description:
      "Build the future of finance with secure payment gateways, digital banking and high-performance trading platforms.",
    icon: Wallet,
    color: "bg-emerald-50 text-emerald-600",
    href: "/solutions/fintech",
  },
  {
    title: "FMCG",
    description:
      "Digital transformation for Fast-Moving Consumer Goods—optimizing distribution, inventory and consumer engagement.",
    icon: Factory,
    color: "bg-indigo-50 text-indigo-600",
    href: "/solutions/fmcg",
  },
  {
    title: "Healthcare",
    description:
      "Enhance patient outcomes and operational efficiency with secure, compliant healthcare technology systems.",
    icon: HeartPulse,
    color: "bg-red-50 text-red-600",
    href: "/solutions/healthcare",
  },
  {
    title: "Logistics & Supply chain",
    description:
      "Optimize your supply chain and delivery networks with high-precision tracking and automation tools.",
    icon: Truck,
    color: "bg-blue-50 text-blue-600",
    href: "/solutions/logistics",
  },
  {
    title: "Real estate",
    description:
      "Transform property management and sales with immersive digital platforms and automated workflows.",
    icon: Home,
    color: "bg-amber-50 text-amber-600",
    href: "/solutions/real-estate",
  },
  {
    title: "Retail & E-Commerce",
    description:
      "Modernize your retail operations with omnichannel commerce platforms and direct-to-consumer digital experiences.",
    icon: Store,
    color: "bg-orange-50 text-orange-600",
    href: "/solutions/retail",
  },
  {
    title: "Travels & Hospitality",
    description:
      "Streamline bookings and guest experiences with high-performance travel management and hospitality systems.",
    icon: Plane,
    color: "bg-cyan-50 text-cyan-600",
    href: "/solutions/travel",
  },
];

const Solutions = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [visibleCount, setVisibleCount] = React.useState(3);

  // Update visible count based on screen size
  React.useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 768) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const maxIndex = solutions.length - visibleCount;

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[index] as HTMLElement;
    if (!card) return;
    container.scrollTo({
      left: card.offsetLeft - container.offsetLeft,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const prev = () => {
    const newIndex = Math.max(0, activeIndex - 1);
    scrollToIndex(newIndex);
  };

  const next = () => {
    const newIndex = Math.min(maxIndex, activeIndex + 1);
    scrollToIndex(newIndex);
  };

  return (
    <section className="ets-section">
      <div className="ets-dotgrid"></div>

      <div className="mx-auto max-w-[1440px] px-4 md:px-28 relative z-10">
        <ScrollReveal className="text-center">
          <h2 className="ets-heading">
            <span className="ets-heading-accent">End-to-End</span> Solutions
          </h2>
          <ScrollRevealText
            text="Get software development services, built around your needs"
            className="ets-subhead"
          />
        </ScrollReveal>

        {/* Carousel */}
        <div className="relative mt-1 md:mt-2 pt-6">
          {/* Scrollable Cards */}
          <StaggerContainer
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto md:overflow-hidden snap-x snap-mandatory scrollbar-hide pt-4 pb-4 px-1"
          >
            {solutions.map((solution, index) => {
              return (
                <StaggerItem
                  key={solution.title}
                  className="flex-shrink-0 w-full md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] snap-center"
                >
                  <Link href={solution.href} className="ets-card group">
                    <div className="ets-card-icon">
                      <solution.icon size={28} />
                    </div>
                    <h3 className="ets-card-title">{solution.title}</h3>
                    <p className="ets-card-desc">{solution.description}</p>
                    <div className="ets-card-arrow">
                      <ArrowRight size={20} />
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* Navigation & Pagination */}
        <div className="mt-6 mb-4 flex items-center justify-center gap-8">
          {/* Left Arrow */}
          <button
            onClick={prev}
            disabled={activeIndex === 0}
            className={`ets-nav-btn !w-10 !h-10 ${activeIndex === 0 ? "opacity-30 cursor-not-allowed" : "opacity-100"}`}
            aria-label="Previous"
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3">
            {(() => {
              // Sliding window of 3 dots
              let start = Math.max(0, activeIndex - 1);
              if (start + 2 > maxIndex) {
                start = Math.max(0, maxIndex - 2);
              }

              return [start, start + 1, start + 2].map((dotIndex) => {
                const isActive = dotIndex === activeIndex;
                return (
                  <button
                    key={dotIndex}
                    onClick={() => scrollToIndex(dotIndex)}
                    className={`ets-pagination-dot ${isActive ? "active" : ""}`}
                    aria-label={`Go to card ${dotIndex + 1}`}
                  />
                );
              });
            })()}
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            disabled={activeIndex >= maxIndex}
            className={`ets-nav-btn !w-10 !h-10 ${activeIndex >= maxIndex ? "opacity-30 cursor-not-allowed" : "opacity-100"}`}
            aria-label="Next"
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
