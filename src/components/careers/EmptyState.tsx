"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Briefcase, ArrowLeft } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
}

export default function EmptyState({
  title = "No open positions found",
  description = "We don't currently have any open positions that match your criteria.",
}: EmptyStateProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-2xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-slate-100 mb-6">
            <Briefcase className="h-8 w-8 text-gray-400" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#004475] mb-3">
            {title}
          </h2>

          <p className="text-gray-600 mb-8 text-lg">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link href="/careers">
              <Button className="bg-white border-2 border-[#004475] text-[#004475] hover:bg-[#004475] hover:text-white font-semibold flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Careers
              </Button>
            </Link>

            <Link href="/contact">
              <Button className="bg-[#33a8d9] hover:bg-[#258ab5] text-white border-none font-semibold">
                Get in Touch
              </Button>
            </Link>
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <h3 className="font-semibold text-[#004475] mb-2">Interested in working with us?</h3>
            <p className="text-gray-600 mb-4">
              If you don't see a role that matches your skills, we'd still love to hear from you! Send us your resume for future opportunities.
            </p>
            <Link href="/careers/resumes">
              <Button variant="outline" className="border-[#33a8d9] text-[#33a8d9] hover:bg-[#33a8d9] hover:text-white">
                Send Your Resume
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
