import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import JobHero from "@/components/careers/JobHero";
import JobContent from "@/components/careers/JobContent";
import ApplyForm from "@/components/careers/ApplyForm";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  // We can leave this empty or fetch all ids if we want SSG
  return [];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const jobOpening = await prisma.jobOpening.findUnique({
    where: { jobId: slug }
  });

  if (!jobOpening) {
    return {
      title: "Job Not Found | Livik",
    };
  }

  return {
    title: `${jobOpening.jobTitle} | Livik Careers`,
    description: jobOpening.jobDescription.substring(0, 150),
  };
}

export default async function JobDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const jobOpening = await prisma.jobOpening.findUnique({
    where: { jobId: slug }
  });

  if (!jobOpening) {
    notFound();
  }

  // Map to JobPosting format expected by ApplyForm
  const formattedJob = {
    id: jobOpening.id,
    slug: jobOpening.jobId,
    title: jobOpening.jobTitle,
    department: "Engineering",
    location: jobOpening.location,
    type: jobOpening.employmentType as any,
    experience: jobOpening.experience,
    shortDescription: jobOpening.jobDescription.substring(0, 150),
    fullDescription: jobOpening.jobDescription,
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}

      {/* <JobHero job={formattedJob as any} />
      <JobContent job={formattedJob as any} /> */}
      <ApplyForm job={formattedJob as any} />
    </div>
  );
}
