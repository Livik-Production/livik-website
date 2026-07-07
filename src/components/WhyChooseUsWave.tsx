"use client";

import React, { useRef } from "react";
import {
  CheckCircle,
  Users,
  Zap,
  TrendingUp,
  Target,
  Heart,
} from "lucide-react";
import { useInView, motion } from "framer-motion";

const features = [
  {
    step: "01",
    title: "Reliable Delivery",
    description:
      "On-time, every time. Our disciplined process ensures we meet deadlines.",
    icon: CheckCircle,
    anchorClass: "wv2-anchor-top",
    left: "14.28%",
    top: "59.89%",
  },
  {
    step: "02",
    title: "Experienced Engineering Team",
    description:
      "Senior engineers with decades of collective experience in complex builds.",
    icon: Users,
    anchorClass: "wv2-anchor-bottom",
    left: "28.57%",
    top: "67.89%",
  },
  {
    step: "03",
    title: "Modern Technology Stack",
    description:
      "Leveraging Next.js, AI and Cloud for future-ready digital solutions.",
    icon: Zap,
    anchorClass: "wv2-anchor-top",
    left: "42.85%",
    top: "59.89%",
  },
  {
    step: "04",
    title: "Scalable Solution Design",
    description:
      "Designing for performance and growth, from 1k to 1M+ active users.",
    icon: TrendingUp,
    anchorClass: "wv2-anchor-bottom",
    left: "57.14%",
    top: "67.89%",
  },
  {
    step: "05",
    title: "Client-Centric Execution",
    description:
      "Business goals first, ensuring technical decisions create real value.",
    icon: Target,
    anchorClass: "wv2-anchor-top",
    left: "71.42%",
    top: "59.89%",
  },
  {
    step: "06",
    title: "Long-Term Support & Growth",
    description:
      "We partner for the long haul, providing continuous growth and support.",
    icon: Heart,
    anchorClass: "wv2-anchor-bottom",
    left: "85.71%",
    top: "67.89%",
  },
];

const WhyChooseUsWave = () => {
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);
  const isDesktopInView = useInView(desktopRef, { once: false, amount: 0.1 });
  const isMobileInView = useInView(mobileRef, { once: false, amount: 0.1 });

  return (
    <section className="wv2-section bg-[#003b6d] overflow-hidden relative">
      {/* Background radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-cyan-400/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[20%] w-[600px] h-[600px] bg-blue-400/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 relative z-10">
        {/* Desktop View: Wave Section */}
        <div className="hidden md:block wv2-scroll-wrapper relative min-h-[850px] overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none" ref={desktopRef}>
          {/* Stage optimized to 900px for better spacing */}
          <div
            className="wv2-stage relative h-[900px] min-w-[1400px] overflow-visible"
          >
            {/* SVG Wave Path - Mathematically centered at y=650 in 1100px stage to fix top spacing */}
            <svg
              className="wv2-svg absolute inset-0 w-full h-full overflow-visible mt-15"
              viewBox="0 0 1400 900"
              preserveAspectRatio="none"
            >
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isDesktopInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                d="M 100 530 Q 200 410, 300 530 T 500 530 T 700 530 T 900 530 T 1100 530 T 1300 530"
                fill="none"
                stroke="#33a8d9"
                strokeWidth="4"
                strokeLinecap="round"
                className="drop-shadow-[0_0_15px_rgba(51,168,217,1)]"
              />
              <path
                d="M 100 530 Q 200 410, 300 530 T 500 530 T 700 530 T 900 530 T 1100 530 T 1300 530"
                fill="none"
                stroke="#33a8d9"
                strokeWidth="1"
                className="opacity-20"
              />
            </svg>

            {features.map((item, i) => (
              <div
                key={item.step}
                className={`wv2-anchor absolute flex flex-col items-center z-20`}
                style={{
                  left: item.left,
                  top: item.top,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Node Dot */}
                <div className="relative flex items-center justify-center w-12 h-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isDesktopInView ? { scale: 1.4 } : {}}
                    transition={{ delay: i * 0.2 + 0.8, duration: 0.5 }}
                    className="absolute inset-0 bg-white/30 rounded-full blur-md"
                  ></motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isDesktopInView ? { scale: 1 } : {}}
                    transition={{ delay: i * 0.2 + 0.8, duration: 0.5 }}
                    className="w-[16px] h-[16px] bg-white rounded-full shadow-[0_0_20px_#fff] z-10 border-4 border-[#33a8d9]"
                  ></motion.div>
                </div>

                {/* Vertical Connection Line - Extended for better visibility */}
                <motion.div
                  initial={{ height: 0 }}
                  animate={isDesktopInView ? { height: 70 } : {}}
                  transition={{ delay: i * 0.2 + 1, duration: 0.6 }}
                  className={`absolute w-[2px] bg-gradient-to-b from-white/60 to-transparent ${item.anchorClass === "wv2-anchor-top" ? "bottom-12" : "top-12 rotate-180"}`}
                />

                {/* Content Card - Connected to wave line */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: item.anchorClass === "wv2-anchor-top" ? -40 : 40,
                  }}
                  animate={isDesktopInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.2 + 1.3, duration: 0.7 }}
                  className={`wv2-card absolute w-[240px] p-6 rounded-[2.5rem] bg-white shadow-[0_40px_80px_rgba(0,0,0,0.6)] ${item.anchorClass === "wv2-anchor-top" ? "bottom-[130px]" : "top-[130px]"} left-1/2 -translate-x-1/2 group transition-all duration-500 hover:-translate-y-4 overflow-hidden`}
                >
                  <div className="mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#33a8d9]/10 text-[#33a8d9] flex items-center justify-center group-hover:bg-[#33a8d9] group-hover:text-white transition-all duration-500">
                      <item.icon size={20} />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#003366] mb-2 leading-tight group-hover:text-[#33a8d9] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View: Vertical Timeline */}
        <div className="md:hidden py-12 px-2 relative" ref={mobileRef}>
          <div className="relative">
            {/* Animated Vertical Line */}
            <div className="absolute left-[23px] top-4 bottom-4 w-[2px] bg-white/10" />
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-[23px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#33a8d9] to-cyan-400 shadow-[0_0_10px_#33a8d9]"
            />

            <div className="space-y-10 pl-14">
              {features.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative"
                >
                  {/* Connection Node */}
                  <div className="absolute -left-[45px] top-8 flex items-center justify-center w-8 h-8">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-sm animate-pulse" />
                    <div className="w-3 h-3 bg-white rounded-full border-2 border-[#33a8d9] z-10 shadow-[0_0_10px_#fff]" />
                  </div>

                  {/* Horizontal Connector */}
                  <div className="absolute -left-[30px] top-[46px] w-[30px] h-[1px] bg-[#33a8d9]/40" />

                  {/* Feature Card */}
                  <div className="p-6 rounded-[2.5rem] bg-white shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 text-4xl font-bold text-[#003b6d]">
                      {item.step}
                    </div>
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#33a8d9]/10 text-[#33a8d9] flex items-center justify-center group-hover:bg-[#33a8d9] group-hover:text-white transition-all duration-300">
                        <item.icon size={24} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#003366] mb-2 leading-tight group-hover:text-[#33a8d9] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsWave;
