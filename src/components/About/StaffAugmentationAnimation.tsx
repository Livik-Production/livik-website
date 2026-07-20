"use client";

import React from "react";
import { motion } from "framer-motion";

const StaffAugmentationAnimation = () => {
  const [loopKey, setLoopKey] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setLoopKey(prev => prev + 1);
    }, 20000); // 20 seconds
    return () => clearInterval(timer);
  }, []);
  // SVG-based coordinates for 100% perfect alignment
  const hub = { x: 70, y: 50 };
  const R = 25; // Radius for the circular arrangement

  // Calculate satellite positions using trigonometry for perfect circular alignment
  // Angles in degrees: 250 (Top-Leftish), 330 (Top-Right), 30 (Bottom-Right), 110 (Bottom-Leftish), 180 (Left)
  const satellites = [
    { id: "S1", type: "empty", x: hub.x + R * Math.cos(250 * Math.PI / 180), y: hub.y + R * Math.sin(250 * Math.PI / 180) },
    { id: "S2", type: "person", img: "/cartoon-2.png", x: hub.x + R * Math.cos(330 * Math.PI / 180), y: hub.y + R * Math.sin(330 * Math.PI / 180) },
    { id: "S3", type: "person", img: "/cartoon-3.png", x: hub.x + R * Math.cos(30 * Math.PI / 180), y: hub.y + R * Math.sin(30 * Math.PI / 180) },
    { id: "S4", type: "person", img: "/cartoon-4.png", x: hub.x + R * Math.cos(110 * Math.PI / 180), y: hub.y + R * Math.sin(110 * Math.PI / 180) },
    { id: "S5", type: "empty", x: hub.x + R * Math.cos(180 * Math.PI / 180), y: hub.y + R * Math.sin(180 * Math.PI / 180) },
  ];

  const orangeNode = { img: "/cartoon-1.png", x: 15, y: 50, label: "LIVIK DEV" };

  return (
    <div className="relative w-full h-[400px] md:h-[500px] max-w-[800px] mx-auto overflow-visible">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full overflow-visible"
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.g
          key={loopKey}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 1] }}
          transition={{ duration: 20, times: [0, 0.05, 0.95, 1] }}
        >
          {/* Augmented Team Group (Moves to center then back) */}
          <motion.g
            animate={{ x: [0, 0, 0, -20, -20, 0, 0] }} // Move center at 11.5s (0.575)
            transition={{
              times: [0, 0.05, 0.575, 0.6, 0.85, 0.95, 1],
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Connection Lines from Hub to Satellites */}
            <g>
              {satellites.map((s, i) => (
                <motion.line
                  key={`line-${s.id}`}
                  x1={hub.x + (s.x - hub.x) * 9.5 / 25}
                  y1={hub.y + (s.y - hub.y) * 9.5 / 25}
                  x2={s.x - (s.x - hub.x) * 6 / 25}
                  y2={s.y - (s.y - hub.y) * 6 / 25}
                  stroke="rgba(255, 255, 255, 0.15)"
                  strokeWidth="0.4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: [0, 0, 1, 1, 0], opacity: [0, 0, 1, 1, 0] }}
                  transition={{
                    times: [0, 0.2, 0.25, 0.8, 1], // Fades out at 16s
                    duration: 20,
                    repeat: Infinity
                  }}
                />
              ))}
            </g>

            {/* Satellites */}
            {satellites.map((s, i) => (
              <g key={s.id}>
                {/* Satellite Background Circle */}
                <motion.circle
                  cx={s.x} cy={s.y} r="5.5"
                  fill={s.type === 'person' ? "white" : "transparent"}
                  stroke="white"
                  strokeWidth="0.2"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 0, 1, 1, 0], opacity: [0, 0, 1, 1, 0] }}
                  transition={{
                    times: [0, 0.1, 0.15, 0.8, 1], // Fades out at 16s
                    duration: 20,
                    repeat: Infinity
                  }}
                />
                {/* Satellite Image (if person) */}
                {s.type === 'person' && (
                  <defs>
                    <clipPath id={`clip-${s.id}`}>
                      <circle cx={s.x} cy={s.y} r="5.5" />
                    </clipPath>
                  </defs>
                )}
                {s.type === 'person' && (
                  <motion.image
                    href={s.img}
                    x={s.x - 5.25} y={s.y - 5.25}
                    width="10.5" height="10.5"
                    clipPath={`url(#clip-${s.id})`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: [0, 0, 1, 1, 0], scale: [0, 0, 1, 1, 0] }}
                    transition={{
                      times: [0, 0.12, 0.17, 0.9, 1],
                      duration: 20,
                      repeat: Infinity
                    }}
                  />
                )}
                {/* Question Mark for empty satellites */}
                {s.type === 'empty' && (
                  <motion.text
                    x={s.x} y={s.y + 2}
                    textAnchor="middle"
                    fill="white"
                    className="text-[4px] font-bold"
                    initial={{ opacity: 0 }}
                    animate={
                      s.id === 'S5'
                        ? { opacity: [0, 0, 0.5, 0.5, 0, 0] }
                        : s.id === 'S1'
                          ? { opacity: [0, 0, 0.5, 0.5, 0, 0] }
                          : { opacity: [0, 0, 0.5, 0.5, 0, 0] }
                    }
                    transition={{
                      times: [
                        0,
                        0.125 + (i * 0.01),
                        0.175 + (i * 0.01),
                        s.id === 'S5' ? 0.399 : s.id === 'S1' ? 0.549 : 0.85,
                        s.id === 'S5' ? 0.4 : s.id === 'S1' ? 0.55 : 0.9,
                        1
                      ],
                      duration: 20,
                      repeat: Infinity
                    }}
                  >
                    ?
                  </motion.text>
                )}

                {/* Arrival Image for S5 (Stage 1) */}
                {s.id === 'S5' && (
                  <g>
                    <defs>
                      <clipPath id="clip-S5">
                        <circle cx={s.x} cy={s.y} r="4.5" />
                      </clipPath>
                    </defs>
                    <motion.image
                      href="/cartoon-1.png"
                      x={s.x - 5.25} y={s.y - 5.25}
                      width="10.5" height="10.5"
                      clipPath="url(#clip-S5)"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: [0, 0, 0, 1, 1, 0], scale: [0, 0, 0, 1, 1, 0] }}
                      transition={{
                        times: [0, 0.39, 0.4, 0.401, 0.8, 1], // S5 Pop at 8s
                        duration: 20,
                        repeat: Infinity
                      }}
                    />
                  </g>
                )}

                {/* Arrival Image for S1 (Stage 2) */}
                {s.id === 'S1' && (
                  <g>
                    <defs>
                      <clipPath id="clip-S1">
                        <circle cx={s.x} cy={s.y} r="4.5" />
                      </clipPath>
                    </defs>
                    <motion.image
                      href="/cartoon-5.png"
                      x={s.x - 5.25} y={s.y - 5.25}
                      width="10.5" height="10.5"
                      clipPath="url(#clip-S1)"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 0, 0, 1, 1, 0],
                        scale: [0, 0, 0, 1, 1, 0]
                      }}
                      transition={{
                        times: [0, 0.54, 0.55, 0.551, 0.8, 1], // S1 Pop at 11s
                        duration: 20,
                        repeat: Infinity
                      }}
                    />
                  </g>
                )}

                {/* Impact Ripple Wave for S5 and S1 */}
                {(s.id === 'S5' || s.id === 'S1') && (
                  <motion.circle
                    cx={s.x} cy={s.y} r="5.5"
                    fill="none"
                    stroke="#33a8d9"
                    strokeWidth="1.5"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 0, 1, 2.2, 0],
                      opacity: [0, 0, 0.6, 0, 0],
                      strokeWidth: [1.2, 1.2, 1.2, 0, 0]
                    }}
                    transition={{
                      times: [
                        0,
                        s.id === 'S5' ? 0.399 : 0.549,
                        s.id === 'S5' ? 0.4 : 0.55,
                        s.id === 'S5' ? 0.43 : 0.58,
                        1
                      ],
                      duration: 20,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                )}

                {/* Arcs & Dots around Satellites */}
                <motion.path
                  d={`M ${s.x} ${s.y - 7.5} A 7.5 7.5 0 0 1 ${s.x + 7.5} ${s.y}`}
                  fill="none"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="0.3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: [0, 0, 1, 1, 0], opacity: [0, 0, 1, 1, 0] }}
                  transition={{
                    times: [
                      0,
                      s.id === 'S5' ? 0.4 : s.id === 'S1' ? 0.55 : s.id === 'S2' ? 0.625 : s.id === 'S3' ? 0.675 : 0.725,
                      s.id === 'S5' ? 0.401 : s.id === 'S1' ? 0.551 : s.id === 'S2' ? 0.655 : s.id === 'S3' ? 0.705 : 0.755,
                      0.9,
                      1
                    ], // S5(8s), S1(11s), S2(12.5s), S3(13.5s), S4(14.5s)
                    duration: 20,
                    repeat: Infinity
                  }}
                />
                <motion.circle
                  cx={s.x + 7.5} cy={s.y} r="0.6" fill="white"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 0, 1, 1, 0], scale: [0, 0, 1, 1, 0] }}
                  transition={{
                    times: [
                      0,
                      s.id === 'S5' ? 0.4 : s.id === 'S1' ? 0.55 : s.id === 'S2' ? 0.625 : s.id === 'S3' ? 0.675 : 0.725,
                      s.id === 'S5' ? 0.401 : s.id === 'S1' ? 0.551 : s.id === 'S2' ? 0.655 : s.id === 'S3' ? 0.705 : 0.755,
                      0.9,
                      1
                    ],
                    duration: 20,
                    repeat: Infinity
                  }}
                />

                {/* Custom Arc Border Patterns (Synced with Software Outsourcing style) */}
                <g style={{ rotate: '-90deg', transformOrigin: `${s.x}px ${s.y}px` }}>
                  {(i === 0 ? [{ a: 0, l: 0.2 }, { a: 180, l: 0.2 }] :
                    i === 1 ? [{ a: 0, l: 0.25 }] :
                      i === 2 ? [{ a: 45, l: 0.15 }, { a: 200, l: 0.25 }] :
                        i === 3 ? [{ a: 0, l: 0.5 }] :
                          [{ a: 90, l: 0.2 }, { a: 270, l: 0.2 }]
                  ).map((arc, j) => {
                    return (
                      <motion.circle
                        key={`sat-arc-${i}-${j}`}
                        cx={s.x} cy={s.y} r="6.2"
                        fill="none"
                        stroke="#33a8d9"
                        strokeWidth="0.6"
                        strokeLinecap="round"
                        style={{ rotate: arc.a, transformOrigin: `${s.x}px ${s.y}px` }}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                          pathLength: [0, 0, arc.l, arc.l, 0],
                          rotate: [arc.a, arc.a + 360],
                          opacity: [0, 0, 1, 1, 0]
                        }}
                        transition={{
                          pathLength: {
                            times: [
                              0,
                              s.id === 'S5' ? 0.4 : s.id === 'S1' ? 0.55 : s.id === 'S2' ? 0.625 : s.id === 'S3' ? 0.675 : 0.725,
                              s.id === 'S5' ? 0.401 : s.id === 'S1' ? 0.551 : s.id === 'S2' ? 0.655 : s.id === 'S3' ? 0.705 : 0.755,
                              0.9,
                              1
                            ],
                            duration: 20,
                            repeat: Infinity
                          },
                          rotate: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                          },
                          opacity: {
                            times: [
                              0,
                              s.id === 'S5' ? 0.4 : s.id === 'S1' ? 0.55 : s.id === 'S2' ? 0.625 : s.id === 'S3' ? 0.675 : 0.725,
                              s.id === 'S5' ? 0.401 : s.id === 'S1' ? 0.551 : s.id === 'S2' ? 0.655 : s.id === 'S3' ? 0.705 : 0.755,
                              0.9,
                              1
                            ],
                            duration: 20,
                            repeat: Infinity
                          }
                        }}
                      />
                    );
                  })}
                </g>
                {/* Rapid Rounding Perimeter Effect (Stage 3) */}
                <motion.circle
                  cx={s.x} cy={s.y} r="7.2"
                  fill="none"
                  stroke="#33a8d9"
                  strokeWidth="1.0"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 0, 1, 1, 0],
                    opacity: [0, 0, 1, 0, 0]
                  }}
                  transition={{
                    times: [0, 0.775, 0.825, 0.9, 1], // Trigger at 15.5s (delayed 0.5s), duration 1s
                    duration: 20,
                    repeat: Infinity
                  }}
                />
              </g>
            ))}

            {/* Hub: Your Team */}
            <g>
              <motion.circle
                cx={hub.x} cy={hub.y} r="9"
                fill="#1a1a1a"
                stroke="#333"
                strokeWidth="0.8"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 1, 1] }}
                transition={{
                  times: [0, 0.05, 0.9, 1],
                  duration: 20,
                  repeat: Infinity,
                  delay: 0.5
                }}
              />

              <motion.text
                x={hub.x} y={hub.y - 1}
                textAnchor="middle"
                fill="white"
                className="text-[4px] font-bold tracking-tight"
                style={{ fontSize: '4px' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.025, 1, 1, 1] }}
                transition={{ times: [0, 0.025, 0.1, 0.8, 1], duration: 20, repeat: Infinity, delay: 0.5 }}
              >
                Your
              </motion.text>
              <motion.text
                x={hub.x} y={hub.y + 4}
                textAnchor="middle"
                fill="white"
                className="text-[4px] font-bold tracking-tight"
                style={{ fontSize: '4px' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.025, 1, 1, 1] }}
                transition={{ times: [0, 0.025, 0.1, 0.8, 1], duration: 20, repeat: Infinity, delay: 0.5 }}
              >
                Team
              </motion.text>

              {/* Hub 3-Arc Perimeter Effect (Triggers at 15s, after satellites) */}
              <g style={{ rotate: '-90deg', transformOrigin: `${hub.x}px ${hub.y}px` }}>
                {[
                  { angle: 0, target: 0.48 },
                  { angle: 160, target: 0.42 },
                  { angle: 300, target: 0.20 }
                ].map((arc, i) => (
                  <motion.circle
                    key={`hub-arc-3-${i}`}
                    cx={hub.x} cy={hub.y} r="10.8"
                    fill="none"
                    stroke="#33a8d9"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    style={{ rotate: arc.angle, transformOrigin: `${hub.x}px ${hub.y}px` }}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: [0, 0, arc.target, arc.target, 0],
                      rotate: [arc.angle, arc.angle - 360],
                      opacity: [0, 0, 1, 1, 0]
                    }}
                    transition={{
                      pathLength: {
                        times: [0, 0.775, 0.875, 0.925, 1], // Start at 15.5s (delayed 0.5s), duration 2s
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                      },
                      rotate: {
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      },
                      opacity: {
                        times: [0, 0.775, 0.875, 0.925, 1],
                        duration: 20,
                        repeat: Infinity
                      }
                    }}
                  />
                ))}
              </g>
            </g>
          </motion.g>

          {/* High-Tech Round Logo Transfer 1 (To S5) */}
          <motion.g
            initial={{ offsetDistance: "0%", opacity: 0, scale: 0 }}
            animate={{
              offsetDistance: ["0%", "100%"],
              opacity: [0, 1, 1, 0],
              scale: [0.8, 1, 1, 0.8]
            }}
            transition={{
              offsetDistance: { times: [0, 1], duration: 2.0, ease: "easeInOut", delay: 6.0 }, // Transfer 1: 6s-8s
              opacity: { times: [0, 0.1, 0.9, 1], duration: 2.0, delay: 6.0 },
              scale: { times: [0, 0.1, 0.9, 1], duration: 2.0, delay: 6.0 },
              repeat: Infinity,
              repeatDelay: 18.0
            }}
            style={{ offsetPath: `path("M 15 50 Q 30 15 45 50")`, offsetRotate: "0deg" }}
          >
            <defs>
              <clipPath id="clip-lk-round">
                <circle cx="0" cy="0" r="5.25" />
              </clipPath>
            </defs>
            <circle r="5.5" fill="white" />
            <motion.circle
              r="5.5"
              fill="none"
              stroke="#33a8d9"
              strokeWidth="0.5"
              animate={{ strokeWidth: [0.3, 0.8, 0.3], scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <image
              href="/Livik-Logo.png"
              x="-5.25" y="-5.25"
              width="10.5" height="10.5"
              clipPath="url(#clip-lk-round)"
            />
          </motion.g>

          {/* High-Tech Round Logo Transfer 2 (To S1) */}
          <motion.g
            initial={{ offsetDistance: "0%", opacity: 0, scale: 0 }}
            animate={{
              offsetDistance: ["0%", "0%", "100%", "100%"],
              opacity: [0, 0, 1, 1, 0],
              scale: [0.8, 1.2, 1, 1]
            }}
            transition={{
              offsetDistance: { times: [0, 0.45, 0.55, 0.575], duration: 20, repeat: Infinity, ease: "easeInOut" },
              opacity: { times: [0, 0.45, 0.451, 0.55, 0.575], duration: 20, repeat: Infinity },
              scale: { times: [0, 0.45, 0.55, 0.575], duration: 20, repeat: Infinity }
            }}
            style={{ offsetPath: `path("M 15 50 Q 35 10 61.5 26.5")`, offsetRotate: "0deg" }}
          >
            <circle r="5.5" fill="white" />
            <motion.circle
              r="5.5"
              fill="none"
              stroke="#33a8d9"
              strokeWidth="0.5"
              animate={{ strokeWidth: [0.3, 0.8, 0.3], scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <image
              href="/Livik-Logo.png"
              x="-5.25" y="-5.25"
              width="10.5" height="10.5"
              clipPath="url(#clip-lk-round)"
            />
          </motion.g>

          {/* Far Left: Livik Node */}
          <motion.g
            animate={{
              x: [0, 0, 0, -30, -30, 0], // Move left and hide at 11s (0.55)
              opacity: [0, 1, 1, 0, 0, 0]
            }}
            transition={{
              times: [0, 0.05, 0.5, 0.55, 0.95, 1],
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.circle
              cx={orangeNode.x} cy={orangeNode.y} r="8"
              fill="white"
              stroke="#33a8d9"
              strokeWidth="1"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 1, 0] }}
              transition={{ times: [0, 0.05, 0.9, 1], duration: 20, repeat: Infinity, delay: 0.5 }}
            />
            <defs>
              <clipPath id="clip-orange">
                <circle cx={orangeNode.x} cy={orangeNode.y} r="7.5" />
              </clipPath>
            </defs>

            <motion.image
              href="/cartoon-1.png"
              x={orangeNode.x - 7.5} y={orangeNode.y - 7.5}
              width="15" height="15"
              clipPath="url(#clip-orange)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 1, 1, 0] }}
              transition={{
                times: [0, 0.05, 0.06, 0.2, 0.22, 0.95, 1],
                duration: 20,
                repeat: Infinity
              }}
            />

            <motion.image
              href="/cartoon-5.png"
              x={orangeNode.x - 7.5} y={orangeNode.y - 7.5}
              width="15" height="15"
              clipPath="url(#clip-orange)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
              transition={{
                times: [0, 0.2, 0.22, 0.37, 0.39, 1], // Fades in immediately after Cartoon 1 starts moving
                duration: 20,
                repeat: Infinity
              }}
            />

            <motion.path
              d={`M ${orangeNode.x - 8.5} ${orangeNode.y} A 8.5 8.5 0 1 1 ${orangeNode.x + 8.5} ${orangeNode.y}`}
              fill="none"
              stroke="#33a8d9"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 1, 0] }}
              transition={{ times: [0, 0.1, 0.8, 1], duration: 20, repeat: Infinity, delay: 1.5 }}
            />
            <motion.text
              x={orangeNode.x}
              y={orangeNode.y + 13}
              textAnchor="middle"
              fill="#33a8d9"
              className="text-[3.5px] font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.025, 1, 1, 0] }}
              transition={{ times: [0, 0.025, 0.1, 0.9, 1], duration: 20, repeat: Infinity }}
            >
              LIVIK DEV
            </motion.text>
          </motion.g>
        </motion.g>
      </svg>
    </div>
  );
};

export default StaffAugmentationAnimation;
