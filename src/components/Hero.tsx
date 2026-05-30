"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const transitionWords = [
  "Reliability",
  "Trust",
  "Precision",
  "Scalability",
  "Innovation",
];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax & Zoom for image
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Parallax for text (faster)
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    // slow down rotation for a more deliberate, professional feel
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % transitionWords.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[720px] flex items-center overflow-hidden bg-white "
    >
      {/* Merged Background Illustration */}
      <motion.div
        style={{ y: imgY, scale: imgScale, opacity: imgOpacity }}
        className="absolute inset-y-0 right-0 w-full lg:w-[85%] z-0 select-none"
      >
        <Image
          src="/Landing-Hero.png"
          alt=""
          fill
          className="object-cover object-right"
          priority
        />
        {/* Masking gradient to seamlessly merge the image with the white background */}
        <div className="absolute inset-0 bg-gradient-to-r from-white from-0% via-white/30 via-[40%] to-transparent pointer-events-none"></div>
      </motion.div>

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <motion.div style={{ y: textY }}>
          <StaggerContainer
            className="max-w-xl text-left"
            staggerChildren={0.15}
          >
            <StaggerItem>
              <h1 className="text-[3.5rem] font-[800] tracking-[-0.02em] text-[#1a1a1a] leading-[1.05]">
                Cutting-Edge digital <br />
                products built with <br />
                <span className="text-[#003366] inline-grid relative pt-2">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={transitionWords[wordIndex]}
                      // keep as inline-grid stacking so the exiting word can finish
                      className="col-start-1 row-start-1 inline-block"
                      initial={{
                        opacity: 0,
                        y: 18,
                        filter: "blur(6px)",
                        scale: 0.985,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: -18,
                        filter: "blur(6px)",
                        scale: 0.985,
                      }}
                      transition={{
                        duration: 1.05,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      aria-hidden={false}
                    >
                      <span aria-live="polite">
                        {transitionWords[wordIndex]}
                      </span>
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-6 text-[15px] font-bold leading-relaxed text-gray-800 max-w-md">
                Our software product engineering services reach across every
                stage of the software development life cycle to help accelerate
                software engineering and drive software modernization.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
