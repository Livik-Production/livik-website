"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { JobPosting } from "@/data/jobs";
import { ArrowRight, MapPin, Briefcase, Code, Bookmark, Users } from "lucide-react";

interface JobCardProps {
  job: JobPosting;
  index?: number;
}

export default function JobCard({ job, index = 0 }: JobCardProps) {
  const sectionViewport = { once: true, amount: 0.25 };
  const [isBookmarked, setIsBookmarked] = useState(false);

  const getSkills = (slug: string) => {
    switch (slug) {
      case "senior-full-stack-engineer":
        return "React / Node.js / AWS";
      case "product-designer-ui-ux":
        return "Figma / UI/UX / Web Design";
      case "cloud-solutions-architect":
        return "AWS / GCP / Terraform";
      case "junior-frontend-developer":
        return "React / JavaScript / CSS";
      case "data-scientist":
        return "Python / SQL / ML Models";
      case "project-manager":
        return "Jira / Scrum / Agile";
      default:
        return "Software Development";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={sectionViewport}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white rounded-2xl border border-gray-300 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col w-full p-4 md:px-4 md:py-3  text-left h-full"
    >
      {/* Top Header Row */}
      <div className="flex items-center justify-between py-2">
        <span className="text-xs font-bold uppercase tracking-widest text-[#33a8d9]">
          {job.type ? `${job.type} Position` : "Full-time Position"}
        </span>
        {/* <button
          onClick={() => setIsBookmarked((prev) => !prev)}
          className={`p-1 rounded-xl border transition-all duration-200 cursor-pointer ${
            isBookmarked
              ? "bg-[#004475]/10 border-[#004475] text-[#004475]"
              : "bg-transparent border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50"
          }`}
          title={isBookmarked ? "Saved" : "Save Job"}
        >
          <Bookmark className="w-4.5 h-4.5 fill-current" />
        </button> */}
      </div>

      <div className="space-y-3">
        {/* Job Title */}
        <h3 className="text-xl md:text-2xl font-extrabold text-[#004475] leading-tight hover:text-[#33a8d9] transition-colors">
          <Link href={`/careers/${job.slug}`}>{job.title}</Link>
        </h3>

        {/* Job ID Badge */}
        <div className="mt-1">
          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-lg border border-slate-200 uppercase tracking-wider inline-block">
            ID: {job.slug}
          </span>
        </div>

        {/* Meta Badges Grid/Flex - Vertical Stack for 3-Column Grid Layout */}
        <div className="flex flex-col gap-y-1.5 items-start">
          {/* Location Badge */}
          <div className="flex items-center gap-2 text-black text-sm font-medium w-full">
            <MapPin className="w-4 h-4 text-[#33a8d9] shrink-0" />
            <span>{job.location === "Remote / Hybrid" ? "Dindigul" : job.location}</span>
          </div>

          {/* Experience Badge */}
          <div className="flex items-center gap-2 text-black text-sm font-medium w-full">
            <Briefcase className="w-4 h-4 text-[#33a8d9] shrink-0" />
            <span>Experience: {job.experience}</span>
          </div>

          {/* Skills Badge */}
          {/* <div className="flex items-center gap-2 bg-slate-50/50 text-black text-sm font-medium w-full">
          <Code className="w-4 h-4 text-[#33a8d9] shrink-0" />
          <span>{getSkills(job.slug)}</span>
        </div> */}
        </div>
      </div>

      {/* Role Overview */}
      <div className="py-5 space-y-1.5 flex flex-col">
        <div className="text-sm font-bold uppercase text-gray-700">
          Role Overview
        </div>
        <div className="text-slate-600 text-sm text-justify leading-relaxed h-[155px] overflow-y-auto custom-scrollbar pr-2">
          {job.shortDescription}
        </div>
      </div>

      {/* Divider */}
      {/* <div className="h-px bg-gray-300 w-full" /> */}

      {/* Footer Row - Aligned horizontally with Apply Now button at the right end */}
      <div className="flex justify-end">

        {/* Apply Now Button */}
        <Link href={`/careers/${job.slug}#apply`}>
          <button className="bg-[#004475] hover:bg-[#33a8d9] text-white text-xs md:text-sm font-bold px-4 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md cursor-pointer">
            Apply Now <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
