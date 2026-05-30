"use client";

import React from "react";
import { motion } from "framer-motion";
import { Construction } from "lucide-react";

const MaintenancePage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 overflow-hidden">
      <div className="relative max-w-2xl w-full flex flex-col items-center">
        
        {/* Background Circle */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-[#eaf4fc] rounded-full z-0"
        />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center text-center">
          
          {/* Main Title */}
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-[#004475] mb-4"
          >
            This site is under<br />maintenance
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-[#33a8d9] text-lg md:text-xl font-medium mb-12"
          >
            We&apos;re preparing to serve you better.
          </motion.p>

          {/* Illustration: Plugs */}
          <div className="relative flex items-center justify-center w-full max-w-[400px] h-32">
            
            {/* Left Plug */}
            <motion.div 
              animate={{ x: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 flex items-center"
            >
              <div className="w-24 md:w-32 h-1 bg-[#33a8d9] rounded-full" />
              <div className="relative w-12 h-10 md:w-16 md:h-12 border-4 border-[#004475] bg-white rounded-lg flex items-center justify-end px-1">
                <div className="w-2 h-4 md:w-3 md:h-6 bg-[#004475] rounded-sm mr-1" />
                <div className="w-2 h-4 md:w-3 md:h-6 bg-[#004475] rounded-sm" />
              </div>
            </motion.div>

            {/* Right Plug/Socket */}
            <motion.div 
              animate={{ x: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-0 flex items-center"
            >
              <div className="w-12 h-10 md:w-16 md:h-12 border-4 border-[#004475] bg-white rounded-lg flex items-center justify-start px-2">
                <div className="w-full h-4 md:h-6 bg-[#eaf4fc] rounded-sm border-2 border-[#004475] opacity-50" />
              </div>
              <div className="w-24 md:w-32 h-1 bg-[#33a8d9] rounded-full" />
            </motion.div>

          </div>



        </div>

        {/* Floating Icons for ambiance */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-10 -left-10 text-[#eaf4fc] opacity-50"
        >
          <Construction size={120} />
        </motion.div>

      </div>
    </div>
  );
};

export default MaintenancePage;
