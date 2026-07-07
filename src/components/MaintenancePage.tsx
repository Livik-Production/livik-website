"use client";

import React from "react";
import Image from "next/image";

const MaintenancePage = () => {
  return (
    <>
      <style>{`
        nav, footer { display: none !important; }
      `}</style>
      <div className="min-h-screen bg-[#f3f7fb] flex items-center justify-center p-4">
        <div className="relative w-full max-w-6xl aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden shadow-2xl bg-white">
          <Image
            src="/maintenance.png"
            alt="We're Under Maintenance"
            fill
            className="object-contain p-4"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default MaintenancePage;
