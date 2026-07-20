"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Globe, Sparkles, Cloud, Users, Zap, Heart } from "lucide-react";

const whatWeBuild = [
  {
    icon: Globe,
    title: "Web & Mobile Apps",
    description:
      "Scalable web applications and native mobile experiences tailored for performance and user delight.",
  },
  {
    icon: Sparkles,
    title: "AI & Data Engineering",
    description:
      "Transforming complex data into meaningful insights and building intelligent, AI-powered solutions.",
  },
  {
    icon: Cloud,
    title: "Cloud & Backend Solutions",
    description:
      "Secure, high-performance backend engineering and seamless cloud migrations for growing businesses.",
  },
  {
    icon: Users,
    title: "Dedicated Development Teams",
    description:
      "Scale your engineering capabilities with our expert development squads, integrated into your workflow.",
  },
  {
    icon: Zap,
    title: "UI/UX Engineering",
    description:
      "Modern, intuitive designs that prioritize user experience and drive real business outcomes.",
  },
  {
    icon: Heart,
    title: "Product Modernization & Support",
    description:
      "Modernizing legacy platforms and providing long-term value through consistent support and growth.",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const hoverTransition = {
  type: "spring" as const,
  stiffness: 120,
  damping: 15,
  mass: 0.5,
};

const sectionTransition = {
  duration: 0.75,
  ease: [0.16, 1, 0.3, 1] as const,
};

const sectionViewport = { once: true, amount: 0.25 };

const WhatWeDo = () => {
  return (
    <section className="py-8 md:py-12 bg-slate-50/50">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={sectionViewport}
          transition={sectionTransition}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#004475]">What We </span>
            <span className="bg-gradient-to-r from-[#004475] to-[#33a8d9] bg-clip-text text-transparent">
              Do
            </span>
          </h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            We help startups, enterprises and growing businesses transform ideas
            into powerful digital products through
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whatWeBuild.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              variants={cardVariants}
              whileHover={{ y: -4, transition: hoverTransition }}
              transition={hoverTransition}
              className="flex flex-col items-center text-center p-8 rounded-3xl border-2 border-gray-300 bg-white shadow-sm group"
            >
              <div className="relative h-14 w-14 shrink-0 rounded-2xl border-2 border-blue-100 group-hover:border-transparent transition-colors duration-300 flex items-center justify-center mb-6">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#004475] to-[#33a8d9] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <item.icon className="relative z-10 h-7 w-7 text-[#004475] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#004475]">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
