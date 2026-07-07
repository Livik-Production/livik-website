"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Users, Zap, TrendingUp, Heart } from "lucide-react";
import SoftwareOutsourcingAnimation from "@/components/About/SoftwareOutsourcingAnimation";
import SoftwareDevelopmentTeamsAnimation from "@/components/About/SoftwareDevelopmentTeamsAnimation";
import StaffAugmentationAnimation from "@/components/About/StaffAugmentationAnimation";

const whyChoose = [
  {
    icon: CheckCircle,
    title: "Reliable Delivery",
    description:
      "On-time, every time. Our disciplined process ensures we meet your deadlines without compromising on quality.",
    highlight: "Expert Team",
    color: "from-[#004475] to-[#33a8d9]",
    stat: "50+ Devs",
  },
  {
    icon: Users,
    title: "Experienced Engineering Team",
    description:
      "Our team of senior engineers brings decades of collective experience in building complex, high-stakes software.",
    highlight: "Full Transparency",
    color: "from-[#1565c0] to-[#42a5f5]",
    stat: "100% Clarity",
  },
  {
    icon: Zap,
    title: "Modern Technology Stack",
    description:
      "We leverage the latest and most efficient tools—Next.js, AI and Cloud—to build future-ready solutions.",
    highlight: "Reliable Delivery",
    color: "from-[#0d47a1] to-[#64b5f6]",
    stat: "98% On Time",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solution Design",
    description:
      "Whether you're handling 1,000 users or 1,000,000, we design for performance and massive growth.",
    highlight: "Scalable Architecture",
    color: "from-[#0a3d8f] to-[#29b6f6]",
    stat: "Growth Ready",
  },
  {
    icon: Users,
    title: "Client-Centric Execution",
    description:
      "We put your business goals first, ensuring every technical decision creates real value for your users.",
    highlight: "Value Focused",
    color: "from-[#1a1a1a] to-[#333]",
    stat: "Client First",
  },
  {
    icon: Heart,
    title: "Long-Term Support & Growth",
    description:
      "We don't just ship and leave. We partner for the long haul, providing continuous growth and support.",
    highlight: "Partner Mindset",
    color: "from-[#004475] to-[#33a8d9]",
    stat: "Always On",
  },
];

const serviceModels = [
  { id: "outsourcing", label: "Software Development Outsourcing" },
  { id: "teams", label: "Software Development Teams" },
  { id: "augmentation", label: "Staff Augmentation" },
];

const sectionTransition = {
  duration: 0.75,
  ease: [0.16, 1, 0.3, 1] as const,
};

const sectionViewport = { once: true, amount: 0.25 };

export default function WhyChooseUs() {
  const [activeWhyIndex, setActiveWhyIndex] = useState<number | null>(null);
  const [activeServiceModel, setActiveServiceModel] = useState("outsourcing");
  const whySectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sectionEl = whySectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setActiveWhyIndex(null);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(sectionEl);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-6 md:py-8 bg-[#004475] text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={sectionViewport}
          transition={sectionTransition}
          className="text-center max-w-5xl mx-auto mb-0"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-white">Our Flexible </span>
            <span className="text-[#33a8d9]">Engagement </span>
            <span className="text-white"> Models</span>
          </h2>
          <p className="text-md text-white/90">
            We don&apos;t just write code — we build long-term partnerships by
            delivering reliable, scalable and high-performing solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-16 items-center">
          {/* Left side: Accordion */}
          <div
            ref={whySectionRef}
            className="space-y-1 text-center lg:text-left"
          >
            {activeServiceModel === "augmentation" ? (
              <div className="py-4 lg:py-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-2"
                >
                  <h3 className="text-4xl md:text-5xl font-black leading-tight text-white mt-6">
                    Our software
                    <br />
                    developers <span className="text-[#33a8d9]">in your</span>
                    <br />
                    <span className="text-[#33a8d9]">team.</span>
                  </h3>
                </motion.div>
              </div>
            ) : activeServiceModel === "teams" ? (
              <div className="py-4 lg:py-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-2"
                >
                  <h3 className="text-4xl md:text-5xl font-black leading-tight text-white mt-6">
                    Your Extended <br />
                    Technology <span className="text-[#33a8d9]">Team</span>
                    <br />
                    {/* <span className="text-[#33a8d9]">ready to scale.</span> */}
                  </h3>
                </motion.div>
              </div>
            ) : activeServiceModel === "outsourcing" ? (
              <div className="py-4 lg:py-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-2"
                >
                  <h3 className="text-4xl md:text-5xl font-black leading-tight text-white mt-6">
                    Our PM and Engineering <br />
                    Teams <span className="text-[#33a8d9]">Delivering </span>
                    <br />
                    <span className="text-[#33a8d9]">Your Vision</span>
                  </h3>
                </motion.div>
              </div>
            ) : (
              whyChoose.map((item, i) => {
                const Icon = item.icon;
                const isActive = i === activeWhyIndex;

                return (
                  <div
                    key={i}
                    onMouseEnter={() => setActiveWhyIndex(i)}
                    className="group"
                  >
                    <div className="flex items-center gap-6 px-4 py-3 cursor-pointer">
                      <div
                        className={`p-2 rounded-lg transition-all duration-300 ${isActive ? "bg-[#33a8d9] text-white shadow-[0_0_15px_rgba(51,168,217,0.4)]" : "bg-white/5 text-white/40 group-hover:text-white/70"}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <p
                        className={`text-xl font-bold transition-all duration-300 ${
                          isActive
                            ? "text-white scale-105 origin-left"
                            : "text-white/60 group-hover:text-white/80"
                        }`}
                      >
                        {item.title}
                      </p>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Right side: Autonomous Team Network Animation */}
          <div className="relative flex items-center justify-center overflow-hidden min-h-[300px] lg:min-h-[400px]">
            {activeServiceModel === "outsourcing" && (
              <SoftwareOutsourcingAnimation />
            )}
            {activeServiceModel === "augmentation" && (
              <StaffAugmentationAnimation />
            )}
            {activeServiceModel === "teams" && (
              <SoftwareDevelopmentTeamsAnimation />
            )}
          </div>
        </div>

        {/* Service Model Tabs */}
        <div className="mt-8 lg:mt-16 max-w-4xl mx-auto">
          <div className="bg-[#e2e8f0]/90 p-1.5 rounded-2xl flex flex-col md:flex-row gap-1">
            {serviceModels.map((model) => (
              <button
                key={model.id}
                onClick={() => setActiveServiceModel(model.id)}
                className={`flex-1 px-6 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeServiceModel === model.id
                    ? "bg-[#1a1a1a] text-white shadow-xl"
                    : "text-gray-600 hover:text-[#1a1a1a] hover:bg-white/50"
                }`}
              >
                {model.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
