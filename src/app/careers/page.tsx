import CareersPage from "@/modules/CareersPage";
import prisma from "@/lib/prisma";

export const metadata = {
  title: "Careers | Livik",
  description: "Join Livik's growing team. Explore our open positions and build the future with us.",
};

// Next.js config to ensure dynamic rendering if we want real-time job updates
export const revalidate = 60; // revalidate every 60 seconds

export default async function Page() {
  const jobOpenings = await prisma.jobOpening.findMany({
    orderBy: { createdAt: 'desc' }
  });

  const formattedJobs = jobOpenings.map(job => {
    let department = "Developers";
    const lowerTitle = job.jobTitle.toLowerCase();
    
    if (lowerTitle.includes("cloud")) {
      department = "Cloud";
    } else if (lowerTitle.includes("data") || lowerTitle.includes("database")) {
      department = "Database";
    } else if (lowerTitle.includes("junior")) {
      department = "Junior Developers";
    } else if (lowerTitle.includes("senior") || lowerTitle.includes("lead")) {
      department = "Senior Developers";
    } else if (lowerTitle.includes("design") || lowerTitle.includes("ui") || lowerTitle.includes("ux")) {
      department = "Designers";
    }

    return {
      id: job.id,
      slug: job.jobId,
      title: job.jobTitle,
      department: department,
      location: job.location,
      type: job.employmentType as any,
      experience: job.experience,
      shortDescription: job.jobDescription,
      fullDescription: job.jobDescription,
    };
  });

  return <CareersPage jobs={formattedJobs as any} />;
}
