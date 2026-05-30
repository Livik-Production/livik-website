"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, ArrowLeft, Clock } from "lucide-react";
import { JobPosting } from "@/data/jobs";
import { useToast } from "@/hooks/use-toast";

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

interface ApplyFormProps {
  job: JobPosting;
}

export default function ApplyForm({ job }: ApplyFormProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    skills: "",
    location: "",
    experience: "",
    resume: null as File | null,
    coverLetter: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        resume: file,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phoneNumber", formData.phone);
      formDataToSend.append("skillset", formData.skills);
      formDataToSend.append("location", formData.location);
      formDataToSend.append("experience", formData.experience);
      formDataToSend.append("appliedPosition", job.title);
      if (formData.resume) {
        formDataToSend.append("resume", formData.resume);
      }

      const response = await fetch("/api/careers/apply", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (!response.ok) {
        if (
          response.status === 400 &&
          data.error &&
          (data.error.includes("already exists") || data.error.includes("already submitted"))
        ) {
          setAlreadySubmitted(true);
          return;
        }
        throw new Error(data.error || "Failed to submit application");
      }

      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        skills: "",
        location: "",
        experience: "",
        resume: null,
        coverLetter: "",
      });
    } catch (err: any) {
      const errMsg = err.message || "An error occurred. Please try again.";
      setError(errMsg);
      alert(errMsg);
      toast({
        title: "Application Error",
        description: errMsg,
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const sectionViewport = { once: true, amount: 0.2 };

  return (
    <section id="apply" className="py-8 bg-[#004475] relative overflow-hidden scroll-mt-24">
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

      <div className="max-w-2xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={sectionViewport}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4">
            <Link
              href="/careers#open-roles"
              className="text-sm font-semibold text-[#33a8d9] hover:text-[#258ab5] flex items-center gap-1.5 transition-colors cursor-pointer w-fit"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Career Page
            </Link>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">
            Apply for this Position
          </h2>
          <p className="text-white/80 mb-8">
            Fill out the form below to apply for the{" "}
            <span className="font-semibold">{job.title}</span> position. We'll
            review your application and get back to you soon.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 bg-white p-8 md:p-10 rounded-2xl border border-gray-400 shadow-sm text-center flex flex-col items-center justify-center"
            >
              {/* Success Badge */}
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-2 border border-emerald-100">
                <CheckCircle className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold text-[#004475]">Application Submitted!</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                Thank you for applying. We have received your application for the <span className="font-semibold text-slate-800">{job.title}</span> position and will review it shortly.
              </p>

              {/* LinkedIn follow inside card */}
              <div className="w-full bg-slate-50 p-6 rounded-xl border border-gray-200 text-center my-4">
                <h4 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-wide">Stay Connected with Livik!</h4>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4">
                  For the latest job openings, updates, industry insights, and business solutions designed to help you grow, follow us on LinkedIn!
                </p>
                <a
                  href="https://www.linkedin.com/company/livik-software/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-[#006080] hover:bg-[#004d66] text-white font-semibold px-6 h-11 rounded-xl transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2 cursor-pointer select-none border-none text-sm">
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span>Follow Us on LinkedIn</span>
                  </Button>
                </a>
              </div>

              <Link href="/careers#open-roles" className="w-full sm:w-auto">
                <Button className="w-full bg-[#33a8d9] hover:bg-[#258ab5] text-white font-semibold px-8 h-12 rounded-xl transition-all shadow-md hover:shadow-lg">
                  Back to Careers
                </Button>
              </Link>
            </motion.div>
          ) : alreadySubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 bg-white p-8 md:p-10 rounded-2xl border border-gray-400 shadow-sm text-center flex flex-col items-center justify-center"
            >
              {/* Already Submitted Badge */}
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-2 border border-blue-100">
                <Clock className="w-8 h-8 text-[#006080]" />
              </div>
              <h3 className="text-2xl font-bold text-[#004475]">Application Already Received!</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                We have already received an application with this email address for the <span className="font-semibold text-slate-800">{job.title}</span> position. Your profile is currently under review. Please check back after a few days.
              </p>

              {/* LinkedIn follow inside card */}
              <div className="w-full bg-slate-50 p-6 rounded-xl border border-gray-200 text-center my-4">
                <h4 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-wide">Stay Connected with Livik!</h4>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4">
                  For the latest job openings, updates, industry insights, and business solutions designed to help you grow, follow us on LinkedIn!
                </p>
                <a
                  href="https://www.linkedin.com/company/livik-software/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-[#006080] hover:bg-[#004d66] text-white font-semibold px-6 h-11 rounded-xl transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2 cursor-pointer select-none border-none text-sm">
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span>Follow Us on LinkedIn</span>
                  </Button>
                </a>
              </div>

              <Link href="/careers#open-roles" className="w-full sm:w-auto">
                <Button className="w-full bg-[#33a8d9] hover:bg-[#258ab5] text-white font-semibold px-8 h-12 rounded-xl transition-all shadow-md hover:shadow-lg">
                  Back to Careers
                </Button>
              </Link>
            </motion.div>
          ) : (
            <>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
                >
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-red-900">Error</h3>
                    <p className="text-sm text-red-800">{error}</p>
                  </div>
                </motion.div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-white p-6 md:p-8 rounded-2xl border border-gray-400 shadow-sm"
              >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-[#004475] mb-2"
                >
                  Full Name <span className="text-red-500"> *</span>
                </label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                  className="h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#33a8d9] focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[#004475] mb-2"
                >
                  Email Address <span className="text-red-500"> *</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                  className="h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#33a8d9] focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-[#004475] mb-2"
              >
                Phone Number<span className="text-red-500"> *</span>
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+91 995245678"
                required
                className="h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#33a8d9] focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="skills"
                className="block text-sm font-semibold text-[#004475] mb-2"
              >
                Skillset / Stacks <span className="text-red-500"> *</span>
              </label>
              <Input
                id="skills"
                name="skills"
                type="text"
                value={formData.skills}
                onChange={handleInputChange}
                placeholder="e.g. React, Node.js, TypeScript"
                required
                className="h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#33a8d9] focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-semibold text-[#004475] mb-2"
                >
                  Location <span className="text-red-500"> *</span>
                </label>
                <Input
                  id="location"
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="e.g. Dindigul, Tamil Nadu"
                  required
                  className="h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#33a8d9] focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="experience"
                  className="block text-sm font-semibold text-[#004475] mb-2"
                >
                  Experience <span className="text-red-500"> *</span>
                </label>
                <Input
                  id="experience"
                  name="experience"
                  type="text"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="e.g. 2+ Years"
                  required
                  className="h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#33a8d9] focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="resume"
                className="block text-sm font-semibold text-[#004475] mb-2"
              >
                Resume/CV <span className="text-red-500"> *</span>
              </label>
              <div className="relative">
                <input
                  id="resume"
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  required
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="h-12 px-4 rounded-xl border-2 border-dashed border-gray-300 bg-slate-50 flex items-center justify-center text-sm text-gray-600 hover:border-[#33a8d9] transition-colors">
                  {formData.resume ? (
                    <span className="text-[#33a8d9] font-medium">
                      📄 {formData.resume.name}
                    </span>
                  ) : (
                    <span>Click to upload or drag & drop (PDF, DOC, DOCX)</span>
                  )}
                </div>
              </div>
            </div>

            <Button
              type="submit"
              disabled={submitting}
              className="w-full h-12 bg-[#33a8d9] hover:bg-[#258ab5] text-white border-none font-semibold rounded-xl flex items-center justify-center gap-2.5 disabled:opacity-70 disabled:cursor-not-allowed transition-all group"
            >
              {submitting ? (
                <>
                  <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Submitting...
                </>
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

            <p className="text-xs text-gray-500 text-center">
              By submitting this form, you agree to our terms and privacy
              policy.
            </p>
          </form>
        </>
      )}
    </motion.div>
  </div>
</section>
  );
}
