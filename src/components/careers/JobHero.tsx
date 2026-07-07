"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Briefcase, Globe, Users, DollarSign, ArrowLeft } from "lucide-react";
import { JobPosting } from "@/data/jobs";
import { Button } from "../ui/button";

interface JobHeroProps {
  job: JobPosting;
}

export default function JobHero({ job }: JobHeroProps) {
  return (
    <section className="py-12 bg-[#004475] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="/careers#open-roles" className="self-start md:self-auto">
          <Button variant="ghost" className="text-white hover:text-[#33a8d9] flex items-center gap-2 cursor-pointer transition-all">
            <ArrowLeft className="h-4 w-4" />
            Back to All Positions
          </Button>
        </Link>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white text-center flex-grow md:pr-40">
          Job Description
        </h1>
      </div>
    </section>
  );
}
