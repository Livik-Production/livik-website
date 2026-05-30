"use client";

import React from "react";
import { motion } from "framer-motion";

const SoftwareDevelopmentTeamsAnimation = () => {
  const [loopKey, setLoopKey] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setLoopKey((prev) => prev + 1);
    }, 15000); // 15 second loop
    return () => clearInterval(timer);
  }, []);

  // Satellite configurations
  const satellites = [
    { id: 0, img: '/cartoon-1.png', p1: { top: '25%', left: '35%' }, p2: { top: '8%', left: '35%' } },   // Top-Left
    { id: 1, img: '/cartoon-2.png', p1: { top: '25%', left: '65%' }, p2: { top: '8%', left: '65%' } },   // Top-Right
    { id: 2, img: '/cartoon-3.png', p1: { top: '50%', left: '25%' }, p2: { top: '92%', left: '25%' } },  // Center-Left
    { id: 3, img: '/cartoon-4.png', p1: { top: '75%', left: '35%' }, p2: { top: '92%', left: '45%' } },  // Bottom-Left
    { id: 4, img: '/cartoon-5.png', p1: { top: '75%', left: '65%' }, p2: { top: '92%', left: '65%' } },  // Bottom-Right
  ];

  return (
    <div className="relative w-full h-[400px] md:h-[500px] max-w-[600px] flex items-center justify-center overflow-hidden">

      {/* Master Lifecycle Wrapper to prevent sudden disappearance */}
      <motion.div
        key={`lifecycle-${loopKey}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 15,
          times: [0, 0.05, 0.9, 1],
          ease: "linear"
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {/* 1. CENTRAL HUB (Livik) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
          <motion.div
            initial={{ scale: 0, opacity: 0, x: 0 }}
            animate={{
              scale: [0, 1, 1, 1, 0.8],
              opacity: [0, 1, 1, 1, 0],
              x: [0, 0, 0, 0, -300]
            }}
            transition={{
              duration: 13,
              times: [0, 0.1, 0.55, 0.65, 0.8],
              ease: "easeInOut"
            }}
            className="relative group"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#33a8d9] flex items-center justify-center shadow-[0_0_50px_rgba(51,168,217,0.4)] border-4 border-white">
              <span className="text-white font-black text-lg md:text-xl tracking-tighter">Livik</span>
            </div>
            <div className="absolute inset-[-2px] border-2 border-white/30 rounded-full animate-[pulse_3s_infinite]" />
          </motion.div>
        </div>

        {/* 2. TEAM SATELLITES */}
        <div className="absolute inset-0 z-20">
          {satellites.map((node) => (
            <motion.div
              key={node.id}
              className="absolute"
              initial={{ top: '50%', left: '50%', x: '-50%', y: '-50%', scale: 0, opacity: 0 }}
              animate={{
                top: ["50%", node.p1.top, node.p1.top, node.p2.top, node.p2.top, node.p1.top, node.p1.top, node.p1.top],
                left: ["50%", node.p1.left, node.p1.left, node.p2.left, node.p2.left, node.p1.left, node.p1.left, node.p1.left],
                scale: [0, 1, 1, 1, 1, 1, 1, 0.8],
                opacity: [0, 1, 1, 1, 1, 1, 1, 0]
              }}
              transition={{
                duration: 15,
                times: [0, 0.1, 0.35, 0.45, 0.6, 0.75, 0.98, 1],
                delay: 0.5 + (node.id * 0.1),
                ease: "easeInOut"
              }}
            >
              <div className="relative group">
                <div className="w-14 h-14 md:w-18 md:h-18 rounded-full bg-white border-2 border-white p-0.5 shadow-lg overflow-hidden relative z-10">
                  <img src={node.img} alt="" className="w-full h-full object-cover" />
                </div>

                <svg className="absolute inset-[-2px] w-[calc(100%+4px)] h-[calc(100%+4px)] pointer-events-none overflow-visible">
                  <motion.circle
                    cx="50%" cy="50%" r="48%"
                    fill="none"
                    stroke="#33a8d9"
                    strokeWidth="8"
                    strokeLinecap="round"
                    initial={{ pathLength: 0.3, opacity: 0, rotate: 0 }}
                    animate={{ opacity: 1, rotate: 360 }}
                    transition={{
                      opacity: { delay: 1.0, duration: 0.5 },
                      rotate: { delay: 1.0, duration: 4, repeat: Infinity, ease: "linear" }
                    }}
                  />
                </svg>
                <div className="absolute inset-[-2px] border border-white/20 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. "YOUR PM" NODE */}
        <motion.div
          className="absolute z-40"
          initial={{ left: '100%', top: '50%', x: '-50%', y: '-50%', opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 1, 1, 1],
            scale: [0, 1.1, 1, 1, 1],
            left: ["100%", "85%", "85%", "50%", "50%"],
          }}
          transition={{
            duration: 13,
            times: [0, 0.1, 0.6, 0.75, 1],
            delay: 0.5
          }}
        >
          <div className="relative flex flex-col items-center">
            <div className="relative">
              <div className="w-20 h-20 md:w-22 md:h-22 rounded-full border-2 border-[#33a8d9] bg-white shadow-xl overflow-hidden">
                <img src="/cartoon-7.png" alt="Your PM" className="w-full h-full object-contain" />
              </div>

              <svg className="absolute inset-[-8px] w-[calc(100%+16px)] h-[calc(100%+16px)] pointer-events-none overflow-visible">
                <motion.circle
                  cx="50%" cy="50%" r="48%"
                  fill="none"
                  stroke="#33a8d9"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 0, 0.4, 0.4],
                    opacity: [0, 0, 1, 0],
                    rotate: [0, 0, 360, 360]
                  }}
                  transition={{
                    duration: 15,
                    times: [0, 0.88, 0.96, 1],
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                  }}
                />
              </svg>
            </div>
            {/* Added Label */}
            {/* <span className="mt-4 text-xs md:text-sm font-bold text-white bg-[#33a8d9] px-3 py-1 rounded-full whitespace-nowrap shadow-lg">
              Your PM
            </span> */}
          </div>
        </motion.div>

        {/* Perimeter Circle - Appears after PM Border */}
        <motion.div
          className="absolute z-10"
          initial={{ width: 0, height: 0, opacity: 0 }}
          animate={{
            width: [0, 0, 500],
            height: [0, 0, 500],
            opacity: [0, 0, 0.4, 0],
          }}
          transition={{
            duration: 15,
            times: [0, 0.9, 0.98, 1],
            ease: "easeOut"
          }}
        >
          <div className="w-full h-full rounded-full border-2 border-dashed border-[#33a8d9]/40 animate-[spin_10s_linear_infinite]" />
        </motion.div>

        {/* 4. Connection Lines Layer - PHASE 1: Livik to Team */}
        <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-10">
          {satellites.map((node, i) => (
            <motion.line
              key={`line-livik-${i}`}
              x1="50%" y1="50%"
              x2="50%" y2="50%"
              stroke="rgba(255, 255, 255, 0.4)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              initial={{ x1: "50%", y1: "50%", x2: "50%", y2: "50%", opacity: 0 }}
              animate={{
                x2: [null, node.p1.left, node.p1.left],
                x1: [null, "50%", node.p1.left],
                y2: [null, node.p1.top, node.p1.top],
                y1: [null, "50%", node.p1.top],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 6,
                times: [0, 0.45, 0.8, 1],
                delay: 0.5 + (i * 0.1),
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>

        {/* 5. Connection Lines Layer - PHASE 2: Satellite -> Your PM */}
        <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-10">
          {satellites.map((node, i) => (
            <motion.line
              key={`line-pm-final-${i}`}
              x1={node.p1.left} y1={node.p1.top}
              x2={node.p1.left} y2={node.p1.top}
              stroke="#33a8d9"
              strokeWidth="2"
              strokeDasharray="6 3"
              initial={{ x2: node.p1.left, y2: node.p1.top, opacity: 0 }}
              animate={{
                x2: [node.p1.left, node.p1.left, "50%", "50%"],
                y2: [node.p1.top, node.p1.top, "50%", "50%"],
                opacity: [0, 0, 0.8, 0]
              }}
              transition={{
                duration: 15,
                times: [0, 0.75, 0.98, 1],
                delay: 0.5,
                ease: "easeOut"
              }}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
};

export default SoftwareDevelopmentTeamsAnimation;
