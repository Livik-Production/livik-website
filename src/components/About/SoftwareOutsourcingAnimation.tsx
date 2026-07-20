"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SoftwareOutsourcingAnimation = () => {
  const [loopKey, setLoopKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoopKey(prev => prev + 1);
    }, 16000); // Reset every 16 seconds
    return () => clearInterval(timer);
  }, []);

  const satellites = [
    { top: '25%', left: '40%', img: '/cartoon-2.png' },   // 1: Top-Left of Hub
    { top: '25%', left: '70%', img: '/cartoon-3.png' },   // 2: Top-Right of Hub
    { top: '50%', left: '85%', img: '/cartoon-4.png' },   // 3: Center-Right (Straight)
    { top: '75%', left: '70%', img: '/cartoon-5.png' },   // 4: Bottom-Right of Hub
    { top: '75%', left: '40%', img: '/cartoon-1.png' },   // 5: Bottom-Left of Hub
  ];

  return (
    <div className="relative w-full h-[400px] md:h-[500px] max-w-[600px] flex items-center justify-center">
      {/* Background/Looping Layer */}
      <motion.div
        key={`team-loop-${loopKey}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 16,
          times: [0, 0.05, 0.98, 1],
          ease: "linear"
        }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Connection Line SVG Layer */}
        <svg className="absolute inset-0 w-full h-full overflow-visible z-10">
          {/* Main Connection: Our PM (Far Left) <-> You (Hub) */}
          {/* Background thin line - Draws first */}
          <motion.line
            x1="15%" y1="49.6%"
            x2="55%" y2="49.6%"
            stroke="rgba(51, 168, 217, 0.3)"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          {/* Flowing Rectangles - Revealed after background draws */}
          <motion.line
            x1="15%" y1="49.6%"
            x2="55%" y2="49.6%"
            stroke="#33a8d9"
            strokeWidth="6"
            strokeDasharray="16  10"
            initial={{ opacity: 0, strokeDashoffset: 0 }}
            animate={{
              opacity: 1,
              strokeDashoffset: -50
            }}
            transition={{
              opacity: { duration: 0.8, delay: 1.5 },
              strokeDashoffset: { duration: 1, repeat: Infinity, ease: "linear" }
            }}
          />

          {/* RETURN Connection Background Line */}
          <motion.line
            x1="55%" y1="50.4%"
            x2="15%" y2="50.4%"
            stroke="rgba(213, 195, 195, 1)"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 8.0 }}
          />

          {/* RETURN Connection: Our PM -> You (Flowing Rectangles Effect) */}
          <motion.line
            x1="55%" y1="50.4%"
            x2="15%" y2="50.4%"
            stroke="white"
            strokeWidth="5"
            strokeDasharray="35 15"
            initial={{ opacity: 0, strokeDashoffset: 0 }}
            animate={{
              opacity: 1,
              strokeDashoffset: [0, -50]
            }}
            transition={{
              opacity: { duration: 0.12, delay: 9.2, ease: "easeOut" },
              strokeDashoffset: {
                delay: 8.2,
                duration: 2.5,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          />

          {/* Perimeter Connection: Connects all satellites in a circle (Activation Phase) */}
          <motion.path
            d={`
            M ${satellites[0].left} ${satellites[0].top}
            L ${satellites[1].left} ${satellites[1].top}
            L ${satellites[2].left} ${satellites[2].top}
            L ${satellites[3].left} ${satellites[3].top}
            L ${satellites[4].left} ${satellites[4].top}
            Z
          `}
            stroke="#ffffff"
            strokeWidth="3"
            strokeDasharray="4 4"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 2.5,
              delay: 13.5,
              ease: "easeInOut"
            }}
          />

          {/* Secondary Connections: Hub -> Satellites */}
          {satellites.map((pos, i) => (
            <motion.line
              key={`line-${i}`}
              x1="55%" y1="50%"
              x2={pos.left} y2={pos.top}
              stroke="rgba(255,255,255,1)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.0,
                delay: 5.2 + (i * 0.3)
              }}
            />
          ))}
        </svg>

        {/* Satellite Team Nodes - Part of the loop */}
        {satellites.map((node, i) => {
          const connectionDelay = 2.0 + (i * 0.3);
          const effectDelay = 5.2 + (i * 0.3) + 1.0;

          return (
            <motion.div
              key={i}
              initial={{ top: '50%', left: '55%', x: '-50%', y: '-50%', scale: 0, opacity: 0 }}
              animate={{
                top: node.top,
                left: node.left,
                x: '-50%',
                y: '-50%',
                scale: 1,
                opacity: 1
              }}
              transition={{
                duration: 1.5,
                delay: connectionDelay,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="absolute z-20"
            >
              <div className="relative group">
                <div className="w-14 h-14 md:w-18 md:h-18 rounded-full bg-white border-2 border-white shadow-xl overflow-hidden relative z-10">
                  <img src={node.img} alt="" className="w-full h-full object-cover" />
                </div>
                {/* Custom Arc Border Patterns */}
                <svg className="absolute inset-[-4px] w-[calc(100%+8px)] h-[calc(100%+8px)] overflow-visible rotate-[-90deg]">
                  {(i === 0 ? [{ a: 0, l: 0.2 }, { a: 180, l: 0.2 }] :
                    i === 1 ? [{ a: 0, l: 0.25 }] :
                      i === 2 ? [{ a: 45, l: 0.15 }, { a: 200, l: 0.25 }] :
                        i === 3 ? [{ a: 0, l: 0.5 }] :
                          [{ a: 90, l: 0.2 }, { a: 270, l: 0.2 }]
                  ).map((arc, j) => (
                    <motion.circle
                      key={`sat-arc-${i}-${j}`}
                      cx="50%" cy="50%" r="48%"
                      fill="none"
                      stroke="#33a8d9"
                      strokeWidth="4"
                      strokeLinecap="round"
                      style={{ rotate: arc.a, transformOrigin: 'center' }}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{
                        pathLength: arc.l,
                        rotate: [arc.a, arc.a + 360],
                        opacity: 1
                      }}
                      transition={{
                        pathLength: { delay: effectDelay, duration: 0.8 },
                        rotate: { delay: effectDelay, duration: 8, repeat: Infinity, ease: "linear" },
                        opacity: { delay: effectDelay, duration: 0.8, ease: "easeOut" }
                      }}
                    />
                  ))}
                </svg>
                {/* Rapid Rounding Effect */}
                <svg className="absolute inset-[-6px] w-[calc(100%+12px)] h-[calc(100%+12px)] pointer-events-none overflow-visible">
                  <motion.circle
                    cx="50%" cy="50%" r="48%"
                    fill="none"
                    stroke="#33a8d9"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: [0, 1],
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                      pathLength: { delay: 14.5, duration: 1.5, ease: "easeInOut" },
                      opacity: { delay: 14.5, duration: 1.5, times: [0, 0.05, 0.95, 1] }
                    }}
                  />
                </svg>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: effectDelay }}
                  className="absolute inset-[-7px] border border-white/10 rounded-full"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: effectDelay }}
                  className="absolute top-[-11px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full"
                />
              </div>
            </motion.div>
          );
        })}

        {/* Circle effects (trigger at end of loop) */}
        <div className="absolute left-[15%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none">
          <div className="relative w-16 h-16 md:w-20 md:h-20">
            {/* 3-Arc Border Connection Animation for YOU */}
            <svg className="absolute inset-[-4px] w-[calc(100%+8px)] h-[calc(100%+8px)] overflow-visible rotate-[-90deg]">
              {[
                { angle: 0, target: 0.42 },
                { angle: 140, target: 0.42 },
                { angle: 280, target: 0.26 }
              ].map((arc, i) => (
                <motion.circle
                  key={`arc-you-${i}`}
                  cx="50%" cy="50%" r="48%"
                  fill="none"
                  stroke="#33a8d9"
                  strokeWidth="5"
                  strokeLinecap="round"
                  style={{ rotate: arc.angle, transformOrigin: 'center' }}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 0.15, 0.15, arc.target],
                    rotate: [arc.angle, arc.angle + 360],
                    opacity: [0, 1, 1]
                  }}
                  transition={{
                    pathLength: {
                      times: [0, 0.2, 0.6, 1],
                      duration: 6,
                      delay: 10.0,
                      ease: "easeInOut"
                    },
                    rotate: {
                      delay: 10.0,
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    opacity: {
                      delay: 10.0,
                      duration: 0.8,
                      ease: "easeOut"
                    }
                  }}
                />
              ))}
            </svg>
          </div>
        </div>

        <div className="absolute left-[55%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none">
          <div className="relative w-20 h-20 md:w-24 md:h-24">
            {/* 3-Arc Border Connection Animation for PM */}
            <svg className="absolute inset-[-4px] w-[calc(100%+8px)] h-[calc(100%+8px)] overflow-visible rotate-[-90deg]">
              {[
                { angle: 0, target: 0.48 },
                { angle: 160, target: 0.42 },
                { angle: 300, target: 0.20 }
              ].map((arc, i) => (
                <motion.circle
                  key={`arc-pm-${i}`}
                  cx="50%" cy="50%" r="48%"
                  fill="none"
                  stroke="white"
                  strokeWidth="5"
                  strokeLinecap="round"
                  style={{ rotate: arc.angle, transformOrigin: 'center' }}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 0.15, 0.15, arc.target],
                    rotate: [arc.angle, arc.angle - 360],
                    opacity: [0, 1, 1]
                  }}
                  transition={{
                    pathLength: {
                      times: [0, 0.2, 0.6, 1],
                      duration: 6,
                      delay: 10.0,
                      ease: "easeInOut"
                    },
                    rotate: {
                      delay: 10.0,
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    opacity: {
                      delay: 10.0,
                      duration: 0.8,
                      ease: "easeOut"
                    }
                  }}
                />
              ))}
            </svg>
          </div>
        </div>
      </motion.div>
      {/* Persistent "You" Circle */}
      <div className="absolute left-[15%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-xl">
              <img src="/cartoon-1.png" alt="You" className="w-full h-full object-cover rounded-full" />
            </div>
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-sm md:text-base font-bold text-white bg-[#33a8d9] px-4 py-1 rounded-full whitespace-nowrap shadow-lg z-40">
              You
            </span>
          </div>
        </motion.div>
      </div>

      {/* Persistent "Our PM" Circle */}
      <div className="absolute left-[55%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-2xl overflow-visible"
        >
          <div className="w-full h-full rounded-full border-[3px] border-[#33a8d9] overflow-hidden bg-white shadow-[0_0_15px_rgba(51,168,217,0.3)]">
            <img src="/cartoon-6.png" alt="Our PM" className="w-full h-full object-contain" />
          </div>
          <div className="absolute -top-4 -right-4 w-3 h-3 rounded-full border border-white/20" />
          <div className="absolute -bottom-2 -left-6 w-2 h-2 rounded-full border border-white/20" />
        </motion.div>
      </div>
    </div>
  );
};

export default SoftwareOutsourcingAnimation;
