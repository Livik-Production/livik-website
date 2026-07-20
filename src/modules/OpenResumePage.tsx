"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Upload,
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Globe,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";

const SPARKS = [
  { left: "10%", delay: 0.2, duration: 4 },
  { left: "25%", delay: 1.5, duration: 5 },
  { left: "38%", delay: 0.8, duration: 3.5 },
  { left: "55%", delay: 2.1, duration: 4.5 },
  { left: "72%", delay: 0.5, duration: 5.5 },
  { left: "85%", delay: 1.2, duration: 4.2 },
  { left: "92%", delay: 2.8, duration: 3.8 },
  { left: "15%", delay: 3.5, duration: 6 },
  { left: "45%", delay: 2.0, duration: 4 },
  { left: "80%", delay: 3.2, duration: 5 },
];

export default function OpenResumePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    role: "",
    qualification: "",
    skills: "",
    experience: "",
    portfolio: "",
    message: "",
  });
  const [resume, setResume] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const nextData = { ...prev, [name]: value };
      if (name === "experience" && value !== "mid" && value !== "senior") {
        nextData.role = "";
      }
      return nextData;
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (!resume) {
      setError("Resume is required");
      setIsSubmitting(false);
      return;
    }

    try {
      const fd = new FormData();
      fd.append("fullName", formData.fullName);
      fd.append("email", formData.email);
      fd.append("phone", formData.phone);
      fd.append("location", formData.location);
      fd.append("role", formData.role);
      fd.append("qualification", formData.qualification);
      fd.append("experience", formData.experience);
      fd.append("skills", formData.skills);
      fd.append("portfolio", formData.portfolio);
      fd.append("message", formData.message);
      fd.append("resume", resume);

      const response = await fetch("/api/talent-community", {
        method: "POST",
        body: fd,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit application");
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#004475] relative overflow-hidden flex flex-col justify-between">
      {/* Background Sparks */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {SPARKS.map((spark, i) => (
          <motion.div
            key={i}
            className="absolute -bottom-10 w-1 h-1 bg-[#93e0ff] rounded-full"
            style={{ left: spark.left }}
            animate={{
              y: ["0vh", "-120vh"],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: spark.duration,
              delay: spark.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Upper Content Section */}
      <div className="py-10 md:py-10 relative">
        <div className="max-w-2xl mx-auto px-6 md:px-8 relative z-10">
          {/* Back Link */}
          <Link
            href="/careers#open-application"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#33a8d9] hover:text-[#258ab5] transition-colors mb-4 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Careers
          </Link>

          {/* Header */}
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-3xl md:text-3xl font-bold text-white mb-4">
              Join Our Talented Team
            </h1>
            <p className="text-white/80 text-md max-w-xl leading-relaxed">
              Don't see a specific role that fits your goals? Tell us about your
              journey, drop your resume, and let's explore how we can
              collaborate.
            </p>
          </div>

          {/* Form / Success Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 bg-white p-6 md:p-8 rounded-2xl border border-gray-400 shadow-sm"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center flex flex-col items-center justify-center py-4"
              >
                {/* Success Badge */}
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6 border border-emerald-100 mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#004475] mb-3">
                  Application Submitted!
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md mx-auto mb-8">
                  Thank you,{" "}
                  <span className="font-semibold text-slate-800">
                    {formData.fullName}
                  </span>
                  .We have received your open application, and our Talent Acquisition team will
                  review your profile shortly. If your profile is shortlisted and matches our
                  expected qualifications and skill requirements, our HR team will contact you soon.
                </p>

                {/* LinkedIn follow inside card */}
                <div className="w-full bg-slate-50 p-6 rounded-xl border border-gray-200 text-center mb-8">
                  <h4 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-wide">
                    Stay Connected with Livik!
                  </h4>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4">
                    For the latest job openings, updates, industry insights, and
                    business solutions designed to help you grow, follow us on
                    LinkedIn!
                  </p>
                  <a
                    href="https://www.linkedin.com/company/livik-software/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button className="bg-[#006080] hover:bg-[#004d66] text-white font-semibold px-6 h-11 rounded-xl transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2 cursor-pointer select-none border-none text-sm">
                      <svg
                        className="w-4 h-4 fill-white"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      <span>Follow Us on LinkedIn</span>
                    </Button>
                  </a>
                </div>

                <Link
                  href="/careers#open-application"
                  className="w-full sm:w-auto mx-auto"
                >
                  <Button className="w-full sm:w-auto bg-[#33a8d9] hover:bg-[#258ab5] text-white font-semibold px-8 h-12 rounded-xl transition-all shadow-md hover:shadow-lg">
                    Back to Careers
                  </Button>
                </Link>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Error Banner */}
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium">
                    {error}
                  </div>
                )}

                {/* Input Row: Full Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#004475] mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full h-12 pl-2 pr-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#33a8d9] focus:border-transparent text-gray-700 placeholder-gray-400 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#004475] mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full h-12 pl-2 pr-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#33a8d9] focus:border-transparent text-gray-700 placeholder-gray-400 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Input Row: Phone & Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#004475] mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full h-12 pl-2 pr-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#33a8d9] focus:border-transparent text-gray-700 placeholder-gray-400 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#004475] mb-2">
                      Qualification <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="qualification"
                        required
                        value={formData.qualification}
                        onChange={handleInputChange}
                        className="w-full h-12 pl-2 pr-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#33a8d9] focus:border-transparent text-gray-700 placeholder-gray-400 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Input Row: Experience & Qualification */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#004475] mb-2">
                      Location <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full h-12 pl-2 pr-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#33a8d9] focus:border-transparent text-gray-700 placeholder-gray-400 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#004475] mb-2">
                      Experience Level <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="experience"
                        required
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full h-12 pl-4 pr-10 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#33a8d9] focus:border-transparent text-gray-700 appearance-none cursor-pointer transition-all"
                        style={{
                          backgroundImage:
                            'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 1.25rem top 50%",
                          backgroundSize: "0.65rem auto",
                        }}
                      >
                        <option value="" disabled>
                          Select your experience
                        </option>
                        <option value="entry">Entry Level (0-2 years)</option>
                        <option value="mid">Mid Level (3-5 years)</option>
                        <option value="senior">Senior Level (5-8 years)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Input Row: Role & Portfolio */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {formData.experience === "mid" ||
                    formData.experience === "senior" ? (
                    <>
                      <div>
                        <label className="block text-sm font-semibold text-[#004475] mb-2">
                          Role Applying For{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400 pointer-events-none z-10">
                            <Briefcase className="w-5 h-5" />
                          </span>
                          <input
                            type="text"
                            name="role"
                            required
                            value={formData.role}
                            onChange={handleInputChange}
                            placeholder="e.g. Full Stack Developer, UI/UX Designer"
                            className="w-full h-12 pl-11 pr-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#33a8d9] focus:border-transparent text-gray-700 placeholder-gray-400 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#004475] mb-2">
                          Portfolio / LinkedIn URL
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400 pointer-events-none">
                            <Globe className="w-5 h-5" />
                          </span>
                          <input
                            type="url"
                            name="portfolio"
                            value={formData.portfolio}
                            onChange={handleInputChange}
                            placeholder="https://linkedin.com/in/username"
                            className="w-full h-12 pl-11 pr-4 bg-slate-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#33a8d9] focus:border-transparent text-gray-700 placeholder-gray-400 transition-all"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-[#004475] mb-2">
                        Portfolio / LinkedIn URL
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400 pointer-events-none">
                          <Globe className="w-5 h-5" />
                        </span>
                        <input
                          type="url"
                          name="portfolio"
                          value={formData.portfolio}
                          onChange={handleInputChange}
                          placeholder="https://linkedin.com/in/username"
                          className="w-full h-12 pl-11 pr-4 bg-slate-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#33a8d9] focus:border-transparent text-gray-700 placeholder-gray-400 transition-all"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Input Row: Skillset / Stack */}
                <div>
                  <label className="block text-sm font-semibold text-[#004475] mb-2">
                    Skillset / Stack <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="skills"
                      required
                      value={formData.skills}
                      onChange={handleInputChange}
                      placeholder="e.g. React, Node.js, Python, Figma"
                      className="w-full h-12 px-4 bg-slate-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#33a8d9] focus:border-transparent text-gray-700 placeholder-gray-400 transition-all"
                    />
                  </div>
                </div>

                {/* File Upload: Resume */}
                <div>
                  <label className="block text-sm font-semibold text-[#004475] mb-2">
                    Upload Resume (PDF, DOCX){" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative border-2 border-dashed border-gray-300 hover:border-[#33a8d9]/50 rounded-2xl p-6 bg-slate-50 hover:bg-slate-50/50 transition-colors flex flex-col items-center justify-center cursor-pointer group">
                    <input
                      type="file"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-gray-400 group-hover:text-[#33a8d9] group-hover:scale-110 transition-all duration-300 mb-3 border border-gray-300">
                      <Upload className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-semibold text-[#004475] mb-1">
                      {resume ? resume.name : "Click to upload or drag & drop"}
                    </p>
                    <p className="text-xs text-gray-400">
                      {resume
                        ? `${(resume.size / 1024 / 1024).toFixed(2)} MB`
                        : "Support PDF, DOCX up to 10MB"}
                    </p>
                  </div>
                </div>

                {/* Input: Short Message */}
                <div>
                  <label className="block text-sm font-semibold text-[#004475] mb-2">
                    Short Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute top-3 left-4 text-gray-400">
                      <MessageSquare className="w-5 h-5" />
                    </span>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us a little bit about yourself, what you are passionate about, and why you want to join Livik..."
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#33a8d9] focus:border-transparent text-gray-700 placeholder-gray-400 transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-13 bg-[#33a8d9] hover:bg-[#258ab5] text-black text-lg font-bold rounded-xl shadow-lg shadow-[#33a8d9]/25 hover:shadow-xl hover:shadow-[#33a8d9]/35 transition-all flex items-center justify-center gap-2.5 group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <div className="relative w-6 h-6 flex items-center justify-center overflow-visible">
                          <img
                            src="/images/paper-plane.png"
                            alt="Paper Plane"
                            className="w-6 h-6 object-contain pointer-events-none transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 relative z-10"
                          />
                        </div>
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
