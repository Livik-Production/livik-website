"use client";

import React from "react";
import Image from "next/image";

export default function AdminLoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#16424c] to-[#2b4950]">
      <div className="w-full max-w-md px-6">
        <div className="flex flex-col items-center mb-8">
          <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-lg">
            <Image 
              src="/Logo.png" 
              alt="logo" 
              width={96} 
              height={96} 
              style={{ height: "auto" }}
            />
          </div>
        </div>

        <form className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <div className="rounded-lg bg-gray-100 px-4 py-3 text-sm font-semibold">
                +91
              </div>
            </div>
            <input
              type="tel"
              inputMode="numeric"
              aria-label="phone"
              placeholder="9789406181"
              className="flex-1 rounded-lg bg-white/90 px-4 py-3 text-base outline-none shadow-inner"
            />
          </div>

          <div>
            <div className="relative">
              <input
                type="password"
                aria-label="password"
                placeholder="********"
                className="w-full rounded-lg bg-white/90 px-4 py-3 pr-12 text-base outline-none shadow-inner"
              />
              <button
                type="button"
                aria-label="toggle password"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {/* eye icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
            </div>
          </div>

          <div>
            <button className="w-full rounded-lg bg-[#1292ff] hover:bg-[#0f7fe6] text-white py-3 font-semibold shadow-lg">
              Login
            </button>
          </div>

          <div className="flex justify-between text-sm text-[#9ad0ff] mt-2">
            <a className="underline" href="#">
              Forgot Password?
            </a>
            <a className="underline" href="#">
              Login With OTP
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
