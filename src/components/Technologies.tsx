"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Database, Zap } from "lucide-react";
import { ColdFusionIcon } from "./ColdFusionIcon";

import {
  SiReact,
  SiFlutter,
  SiSap,
  SiNextdotjs,
  SiAngular,
  SiPhp,
  SiPython,
  SiVuedotjs,
  SiJavascript,
} from "react-icons/si";
import {
  FaAws,
  FaMicrosoft,
  FaDatabase as FaDatabaseIcon,
  FaReact,
} from "react-icons/fa";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { FaGolang, FaJava, FaNodeJs } from "react-icons/fa6";

interface Tech {
  name: string;
  icon: React.ElementType;
}

const techStack: Record<string, Tech[]> = {
  "WEB & MOBILE": [
    { name: "REACT", icon: FaReact },
    { name: "NEXT", icon: SiNextdotjs },
    { name: "TYPESCRIPT", icon: Code2 },
    { name: "JAVASCRIPT", icon: SiJavascript },
    { name: "REACT NATIVE", icon: SiReact },
    { name: "FLUTTER", icon: SiFlutter },
    { name: "ANGULAR", icon: SiAngular },
    { name: "VUE", icon: SiVuedotjs },
  ],
  BACKEND: [
    { name: "GOLANG", icon: FaGolang },
    { name: "POSTGRESQL", icon: Database },
    { name: "GRAPHQL", icon: Zap },
    { name: "NODE.JS", icon: FaNodeJs },
    { name: "PHP", icon: SiPhp },
    { name: "PYTHON", icon: SiPython },
    { name: "JAVA", icon: FaJava },
    { name: "COLDFUSION", icon: ColdFusionIcon },
  ],
  ENTERPRISE: [
    { name: "SAP", icon: SiSap },
    { name: "ORACLE", icon: FaDatabaseIcon },
    { name: "AZURE", icon: FaMicrosoft },
    { name: "AWS", icon: FaAws },
  ],
};

type TechStackKey = "WEB & MOBILE" | "BACKEND" | "ENTERPRISE";

const Technologies = () => {
  const [activeTab, setActiveTab] = useState<TechStackKey>("WEB & MOBILE");

  return (
    <section className="tech-section">
      <div className="tech-mesh"></div>

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 text-center relative z-10">
        <ScrollReveal>
          <h2 className="tech-heading text-4xl md:text-5xl font-bold tracking-tight">
            Technologies We Are Working On
          </h2>
          <div className="tech-underline"></div>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal delay={0.2}>
          <div className="tech-tabs">
            {(Object.keys(techStack) as TechStackKey[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`tech-tab ${activeTab === tab ? "tech-tab-active" : ""}`}
              >
                {tab}
                {activeTab === tab && <div className="tech-tab-indicator" />}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Tech Marquee */}
        <ScrollReveal delay={0.4} className="tech-marquee-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center"
            >
              <motion.div
                className="flex gap-6 px-4"
                animate={{
                  x: [0, -204 * techStack[activeTab].length],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: techStack[activeTab].length * 3, // Faster scroll
                    ease: "linear",
                  },
                }}
              >
                {/* Triple the items to ensure seamless looping */}
                {[
                  ...techStack[activeTab],
                  ...techStack[activeTab],
                  ...techStack[activeTab],
                ].map((tech, idx) => (
                  <div key={`${tech.name}-${idx}`} className="tech-card">
                    <div className="tech-card-border"></div>
                    <div className="tech-card-shine"></div>

                    <div className="tech-card-icon">
                      <tech.icon size={28} />
                    </div>

                    <span className="tech-card-name">{tech.name}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Technologies;
