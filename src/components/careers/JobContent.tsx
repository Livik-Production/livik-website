"use client";

import { motion } from "framer-motion";
import { Check, MapPin, Briefcase, Clock, Banknote } from "lucide-react";
import { JobPosting } from "@/data/jobs";
import { Button } from "@/components/ui/button";

interface JobContentProps {
  job: JobPosting;
}

export default function JobContent({ job }: JobContentProps) {
  const sectionViewport = { once: true, amount: 0.2 };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column - Job Details */}
          <div className="lg:col-span-8 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={sectionViewport}
              transition={{ duration: 0.5 }}
            >
              {/* Heading */}
              <div className="mb-6 border-r border-slate-200">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-snug">
                  {job.title}
                </h2>
              </div>

              {/* Full Description */}
              <div className="mb-12 text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-wrap">
                {job.fullDescription}
              </div>

              {/* Responsibilities */}
              {job.responsibilities && job.responsibilities.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-xl md:text-2xl font-bold text-[#004475] mb-6">Key Responsibilities</h3>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={sectionViewport}
                    className="grid gap-4"
                  >
                    {job.responsibilities.map((responsibility, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex gap-4 p-4 bg-[#f0f9ff] rounded-lg border border-[#33a8d9]/20 hover:border-[#33a8d9]/50 transition-colors"
                      >
                        <div className="shrink-0 mt-1">
                          <Check className="h-5 w-5 text-[#33a8d9] font-bold" />
                        </div>
                        <p className="text-gray-700 text-sm md:text-base">{responsibility}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              )}

              {/* Qualifications */}
              {job.qualifications && job.qualifications.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-xl md:text-2xl font-bold text-[#004475] mb-6">Required Qualifications</h3>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={sectionViewport}
                    className="grid gap-4"
                  >
                    {job.qualifications.map((qualification, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex gap-4 p-4 bg-[#004475]/5 rounded-lg border border-[#004475]/20 hover:border-[#004475]/50 transition-colors"
                      >
                        <div className="shrink-0 mt-1">
                          <Check className="h-5 w-5 text-[#004475] font-bold" />
                        </div>
                        <p className="text-gray-700 text-sm md:text-base">{qualification}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              )}

              {/* Nice to Have */}
              {job.niceToHave && job.niceToHave.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-xl md:text-2xl font-bold text-[#004475] mb-6">Nice to Have</h3>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={sectionViewport}
                    className="grid grid-cols-1 md:grid-cols-2 gap-3"
                  >
                    {job.niceToHave.map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex gap-3 p-3 bg-amber-50 rounded-lg border border-amber-200"
                      >
                        <div className="shrink-0 mt-0.5">
                          <Check className="h-4 w-4 text-amber-600" />
                        </div>
                        <p className="text-gray-700 text-xs md:text-sm">{item}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              )}

              {/* Benefits */}
              {job.benefits && job.benefits.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-xl md:text-2xl font-bold text-[#004475] mb-6">What We Offer</h3>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={sectionViewport}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {job.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex gap-3 p-4 bg-green-50 rounded-lg border border-green-200"
                      >
                        <div className="shrink-0 mt-1">
                          <Check className="h-5 w-5 text-green-600" />
                        </div>
                        <p className="text-gray-700 text-sm md:text-base">{benefit}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Column - Sticky Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-8 space-y-6">

            {/* Sidebar Box 1 - Are you interested? */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="mx-auto w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-2">
                <div className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-slate-700">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-slate-600 absolute top-1.5 left-1.5">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                  </svg>
                </div>
              </div>
              <h4 className="text-slate-800 font-bold mb-6 text-base leading-snug">
                Interested in joining our team?
              </h4>
              <a href="#apply" className="block w-full">
                <Button className="w-full bg-[#1e60d5] hover:bg-[#164db6] text-white font-bold py-3 h-12 rounded-xl transition-all shadow-md">
                  Apply
                </Button>
              </a>
            </div>

            {/* Sidebar Box - Job Details Widget */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-slate-800 font-bold mb-4 text-base leading-snug border-b border-slate-100 pb-3">
                Job Details
              </h4>
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3 py-1">
                  <MapPin className="h-5 w-5 text-[#33a8d9] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-gray-500 uppercase tracking-wider font-semibold">Location</span>
                    <span className="text-slate-700 font-semibold text-sm">Dindigul</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 py-1">
                  <Briefcase className="h-5 w-5 text-[#33a8d9] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-gray-500 uppercase tracking-wider font-semibold">Job Type</span>
                    <span className="text-slate-700 font-semibold text-sm">Full Time</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 py-1">
                  <Clock className="h-5 w-5 text-[#33a8d9] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-gray-500 uppercase tracking-wider font-semibold">Timings</span>
                    <span className="text-slate-700 font-semibold text-sm">9:30am - 7:30Pm</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 py-1">
                  <Banknote className="h-5 w-5 text-[#33a8d9] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-gray-500 uppercase tracking-wider font-semibold">Salary</span>
                    <span className="text-slate-700 font-semibold text-sm">20,000 / month</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Box 2 - Refer a friend */}
            <div className="bg-[#fff1f1] border border-orange-100/60 rounded-2xl p-8 text-center shadow-sm">
              <div className="mx-auto w-16 h-16 rounded-full bg-orange-50/50 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-orange-600">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <line x1="19" x2="19" y1="8" y2="14"></line>
                  <line x1="22" x2="16" y1="11" y2="11"></line>
                </svg>
              </div>
              <h4 className="text-slate-800 font-bold mb-4 text-base leading-snug">
                Refer a friend for this position and get a bonus
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Do you know a really cool person to refer to work with us? If the person you refer is signed, you get a bonus!
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
