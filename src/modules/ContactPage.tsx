"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  CheckCircle2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    title: "Main Office",
    details: ["HIG A-7, 2nd street, 9th cross, R.M.Colony", "Dindigul-624001"],
  },
  {
    icon: MapPin,
    title: "Branch Office",
    details: ["777 Brockton Avenue, Abington, MA 02351"],
  },
  {
    icon: Phone,
    title: "Call us",
    details: ["+91 8220907614"],
  },
  {
    icon: Mail,
    title: "Email us",
    details: ["info@liviktech.com"],
  },
];

const servicesList = [
  "eCommerce Development",
  "Custom Software Development",
  "Mobile App Development",
  "Cloud Migration & DevOps",
  "SAP Implementation & Support",
  "UI/UX Design",
  "QA Testing & Automation",
  "Staff Augmentation",
];

const whyChooseBenefits = [
  "24-hour response guarantee",
  "Free project consultation",
  "Transparent pricing",
  "Agile development process",
  "Post-launch support",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    service: "Software Outsourcing",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to database
      const dbResponse = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!dbResponse.ok) {
        throw new Error("Failed to save to database");
      }

      // Send email
      await emailjs.send(
        "service_qulcelt",
        "template_mh7277a",
        {
          user_name: formData.name,
          user_email: formData.email,
          whatsapp: formData.whatsapp,
          service: formData.service,
          message: formData.message,
        },
        "xpcWZqELqk-c9bcEV",
      );

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      setSubmittedName(formData.name);
      setIsSubmitted(true);

      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        service: "Software Outsourcing",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] overflow-hidden selection:bg-[#003366] selection:text-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#33a8d9]/10 to-[#003366]/5 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#003366]/5 to-[#33a8d9]/10 blur-3xl"
        />
      </div>

      {/* Hero & Form Section */}
      <section className="relative pt-16 pb-12 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            {/* Left Side: Form (approx 60%) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="order-2 lg:order-1 lg:col-span-7"
            >
              <div className="relative">
                <div className="relative z-10">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-6 bg-white p-6 md:p-8 rounded-2xl border border-gray-300 shadow-lg text-center max-w-xl mx-auto"
                    >
                      {/* Success Badge */}
                      <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6 border border-emerald-100 mx-auto">
                        <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#003366] mb-3">
                        Inquiry Submitted!
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md mx-auto mb-8">
                        Thank you,{" "}
                        <span className="font-semibold text-slate-800">
                          {submittedName}
                        </span>
                        . We have received your project details and our team
                        will get back to you shortly.
                      </p>

                      {/* LinkedIn follow inside card */}
                      <div className="w-full bg-slate-50 p-6 rounded-xl border border-gray-200 text-center mb-8">
                        <h4 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-wide">
                          Stay Connected with Livik!
                        </h4>
                        <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4">
                          For the latest job openings, updates, industry
                          insights, and business solutions designed to help you
                          grow, follow us on LinkedIn!
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

                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                        <Link href="/" className="w-full sm:w-auto">
                          <Button className="w-full sm:w-auto bg-[#33a8d9] hover:bg-[#258ab5] text-white font-semibold px-8 h-12 rounded-xl transition-all shadow-md hover:shadow-lg border-none text-base">
                            Back to Home
                          </Button>
                        </Link>
                        <Button
                          type="button"
                          onClick={() => {
                            setFormData({
                              name: "",
                              email: "",
                              whatsapp: "",
                              service: "Software Outsourcing",
                              message: "",
                            });
                            setIsSubmitted(false);
                          }}
                          variant="outline"
                          className="w-full sm:w-auto border-gray-300 hover:bg-slate-50 font-semibold px-8 h-12 rounded-xl text-base"
                        >
                          Send Another Message
                        </Button>
                      </div>
                    </motion.div>
                  ) : (
                    <>
                      <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4 leading-tight">
                        Want to discuss a project? Tell us more.
                      </h2>
                      <p className="text-lg text-gray-500 mb-7 font-medium">
                        Please answer a few questions about your software
                        development needs.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-8">
                          {/* Name Field */}
                          <div className="space-y-3 group/input">
                            <Label
                              htmlFor="name"
                              className="text-lg font-medium text-[#1a1a1a] ml-1"
                            >
                              Your name
                            </Label>
                            <Input
                              id="name"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleInputChange}
                              className="mt-1 h-12 rounded-lg bg-white border-gray-300 focus:border-black focus:ring-0 transition-all duration-300 text-lg px-4"
                              placeholder=""
                            />
                          </div>

                          {/* Email Field */}
                          <div className="space-y-3 group/input">
                            <Label
                              htmlFor="email"
                              className="text-lg font-medium text-[#1a1a1a] ml-1"
                            >
                              Your work email
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              className="mt-1 h-12 rounded-lg bg-white border-gray-300 focus:border-black focus:ring-0 transition-all duration-300 text-lg px-4"
                              placeholder=""
                            />
                          </div>

                          {/* WhatsApp Field (Optional) */}
                          <div className="space-y-3 group/input">
                            <Label
                              htmlFor="whatsapp"
                              className="text-lg font-medium text-[#1a1a1a] ml-1"
                            >
                              Your WhatsApp Number (Optional)
                            </Label>
                            <Input
                              id="whatsapp"
                              name="whatsapp"
                              type="tel"
                              value={formData.whatsapp}
                              onChange={handleInputChange}
                              className="mt-1 h-12 rounded-lg bg-white border-gray-300 focus:border-black focus:ring-0 transition-all duration-300 text-lg px-4"
                              placeholder=""
                            />
                          </div>

                          {/* Service Selection */}
                          <div className="space-y-3 pt-1">
                            <Label className="text-lg font-medium text-[#1a1a1a] ml-1">
                              What service are you most interested in?
                            </Label>
                            <div className="flex flex-wrap gap-x-12 gap-y-6 ml-1 mt-5">
                              {[
                                "Software Outsourcing",
                                "Staff Augmentation",
                                "Dedicated Teams",
                              ].map((opt) => (
                                <label
                                  key={opt}
                                  className="flex items-center gap-2 cursor-pointer group"
                                >
                                  <div className="relative flex items-center justify-center">
                                    <input
                                      type="radio"
                                      name="service"
                                      value={opt}
                                      checked={formData.service === opt}
                                      onChange={handleInputChange}
                                      className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-black transition-all"
                                    />
                                    <div className="absolute w-3 h-3 bg-black rounded-full scale-0 peer-checked:scale-100 transition-transform" />
                                  </div>
                                  <span
                                    className={`text-md font-medium transition-colors ${formData.service === opt ? "text-black" : "text-gray-600 group-hover:text-gray-900"}`}
                                  >
                                    {opt}
                                  </span>
                                </label>
                              ))}
                            </div>
                          </div>

                          {/* Message Field */}
                          <div className="space-y-3 group/input pt-2">
                            <Label
                              htmlFor="message"
                              className="text-lg font-medium text-[#1a1a1a] ml-1"
                            >
                              How can we help?
                            </Label>
                            <Textarea
                              id="message"
                              name="message"
                              required
                              rows={4}
                              value={formData.message}
                              onChange={handleInputChange}
                              className="mt-3 rounded-lg bg-white border-gray-300 focus:border-black focus:ring-0 transition-all duration-300 text-lg p-4 resize-none"
                              placeholder=""
                            />
                          </div>
                        </div>

                        <motion.button
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex items-center gap-4 px-10 h-12 rounded-lg bg-[#1a1a1a] text-white font-medium text-lg shadow-lg hover:bg-black transition-all duration-300 disabled:opacity-70 mt-6"
                        >
                          {isSubmitting ? (
                            "Sending..."
                          ) : (
                            <>
                              Get Started
                              <ArrowRight className="w-6 h-6" />
                            </>
                          )}
                        </motion.button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Right Side: Hero Text (approx 40%) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 lg:order-2 lg:col-span-5 text-left lg:mt-15"
            >
              <h1 className="mt-20 lg:mt-32 text-4xl md:text-6xl font-bold text-[#003366] tracking-tight mb-8 leading-[1.1]">
                Ready to Build <br className="hidden lg:block" /> Something{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003366] to-[#33a8d9]">
                  Amazing?
                </span>
              </h1>
              <p className="text-lg md:text-lg  text-gray-500 mb-6 md:mb-10 leading-relaxed">
                Whether you're launching a new product or improving an existing
                system, we're here to turn your ideas into reality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info & Why Choose Split */}
      <section className="relative pb-14 px-4 z-10 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-stretch">
            {/* Left Side: Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-[2.5rem] p-6 md:p-10 border border-gray-300 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 h-full flex flex-col justify-start"
            >
              <h3 className="text-3xl font-bold text-[#003366] mb-8">
                Why Choose Livik?
              </h3>
              <div className="space-y-6">
                {whyChooseBenefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5 text-[#33a8d9]" />
                    </div>
                    <span className="text-lg text-gray-700 font-medium">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side: Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full"
            >
              {/* Main Contact Container */}
              <div className="bg-white h-full rounded-[2.5rem] p-6 md:p-10 border border-gray-300 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col gap-8">
                <h3 className="text-3xl font-bold text-[#003366]">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  {/* Left Column: Office Cards */}
                  <div className="md:col-span-7 space-y-6 order-1">
                    {/* India Office Card */}
                    <div className="relative overflow-hidden rounded-[1.5rem] border border-gray-200 p-5 group bg-white hover:border-[#33a8d9]/30 transition-all duration-300">
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-3">
                          {/* India Flag Icon */}
                          <svg
                            className="w-6 h-4 rounded-sm shadow-sm shrink-0 border border-gray-100"
                            viewBox="0 0 900 600"
                          >
                            <rect fill="#FF9933" width="900" height="200" />
                            <rect
                              fill="#FFF"
                              y="200"
                              width="900"
                              height="200"
                            />
                            <rect
                              fill="#138808"
                              y="400"
                              width="900"
                              height="200"
                            />
                            <circle fill="#000080" cx="450" cy="300" r="90" />
                            <circle fill="#FFF" cx="450" cy="300" r="80" />
                            <circle fill="#000080" cx="450" cy="300" r="14" />
                            <circle
                              fill="none"
                              stroke="#000080"
                              strokeWidth="4"
                              cx="450"
                              cy="300"
                              r="80"
                            />
                          </svg>
                          <h4 className="text-lg font-bold text-[#003366]">
                            India
                          </h4>
                        </div>
                        <div className="text-[#1a1a1a] text-sm font-medium leading-relaxed pl-9">
                          <p>HIG A-7, 2nd street,</p>
                          <p>9th cross, RM Colony, </p>
                          <p>Dindigul - 624001, Tamilnadu</p>
                          <p>India</p>
                        </div>
                      </div>
                    </div>

                    {/* USA Office Card */}
                    <div className="relative overflow-hidden rounded-[1.5rem] border border-gray-200 p-5 group bg-white hover:border-[#33a8d9]/30 transition-all duration-300">
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-3">
                          {/* USA Flag Icon */}
                          <svg
                            className="w-6 h-4 rounded-sm shadow-sm shrink-0 border border-gray-100"
                            viewBox="0 0 741 390"
                          >
                            <rect width="741" height="390" fill="#b22234" />
                            <path
                              d="M0,30h741M0,90h741M0,150h741M0,210h741M0,270h741M0,330h741"
                              stroke="#fff"
                              strokeWidth="30"
                            />
                            <rect width="296" height="210" fill="#3c3b6e" />
                            <g fill="#fff">
                              {[...Array(5)].map((_, i) => (
                                <circle
                                  key={i}
                                  cx={20 + i * 40}
                                  cy="20"
                                  r="4"
                                />
                              ))}
                              {[...Array(5)].map((_, i) => (
                                <circle
                                  key={i}
                                  cx={40 + i * 40}
                                  cy="60"
                                  r="4"
                                />
                              ))}
                            </g>
                          </svg>
                          <h4 className="text-lg font-bold text-[#003366]">
                            USA
                          </h4>
                        </div>
                        <div className="text-[#1a1a1a] text-sm font-medium leading-relaxed pl-9">
                          <p>289 Redclover Ln,</p>
                          <p>Allentown, Pennsylvania,</p>
                          <p>USA</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Contact Methods */}
                  <div className="md:col-span-5 flex flex-col gap-5 items-start justify-center order-2 md:pl-10">
                    {/* Call Section */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-[#1a1a1a]" />
                        <h4 className="text-lg font-bold text-[#003366]">
                          Call us
                        </h4>
                      </div>
                      <a
                        href="tel:8220907614"
                        className="block text-sm font-medium text-[#1a1a1a] pl-8 hover:text-[#33a8d9] transition-colors"
                      >
                        8220907614
                      </a>
                    </div>

                    {/* Email Section */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-[#1a1a1a]" />
                        <h4 className="text-lg font-bold text-[#003366]">
                          Email us
                        </h4>
                      </div>
                      <a
                        href="mailto:info@liviktech.com"
                        className="block text-sm font-medium text-[#1a1a1a] pl-8 hover:text-[#33a8d9] transition-colors"
                      >
                        info@liviktech.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Call Section */}
      {/* <section className="py-20 px-4 border-t border-gray-100 bg-white relative z-10 w-full">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            {/* Text at left */}
      {/* <div className="lg:w-1/3 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
                Prefer a Quick Chat?
              </h2>
              <p className="text-xl text-gray-500">
                Reach out through your preferred channel.
              </p>
            </div> */}

      {/* Cards at right */}
      {/* <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full">
              <motion.a
                href="tel:+918220907614"
                whileHover={{ y: -5 }}
                className="group flex flex-col items-center justify-center p-8 md:p-12 bg-gray-50 rounded-3xl border border-gray-100 hover:border-[#33a8d9]/30 hover:bg-white hover:shadow-[0_20px_40px_rgba(51,168,217,0.08)] transition-all duration-300 text-center w-full"
              >
                <div className="w-20 h-20 rounded-2xl bg-blue-100/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#33a8d9] transition-all duration-300">
                  <Phone className="w-10 h-10 text-[#003366] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#003366] mb-3">
                  Call Us Directly
                </h3>
                <p className="text-gray-500 mb-3 text-base md:text-lg">
                  Speak with our team
                </p>
                <span className="text-lg md:text-xl font-bold text-[#33a8d9]">
                  +91 8220907614
                </span>
              </motion.a>

              <motion.a
                href="mailto:contact@Livik.com"
                whileHover={{ y: -5 }}
                className="group flex flex-col items-center justify-center p-8 md:p-12 bg-gray-50 rounded-3xl border border-gray-100 hover:border-[#33a8d9]/30 hover:bg-white hover:shadow-[0_20px_40px_rgba(51,168,217,0.08)] transition-all duration-300 text-center w-full"
              >
                <div className="w-20 h-20 rounded-2xl bg-blue-100/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#33a8d9] transition-all duration-300">
                  <Mail className="w-10 h-10 text-[#003366] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#003366] mb-3">
                  Email Us
                </h3>
                <p className="text-gray-500 mb-3 text-base md:text-lg">
                  Send us your details
                </p>
                <span className="text-lg md:text-xl font-bold text-[#33a8d9]">
                  contact@Livik.com
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
