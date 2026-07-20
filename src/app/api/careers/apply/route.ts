import { NextRequest, NextResponse } from "next/server";
import  prisma  from "../../../../lib/prisma";
import { uploadResumeToS3 } from "../../../../lib/uploadResume";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const skillset = formData.get("skillset") as string;
    const location = formData.get("location") as string;
    const experience = formData.get("experience") as string;
    const appliedPosition = formData.get("appliedPosition") as string;

    const resume = formData.get("resume") as File;

    // Validation
    if (!resume) {
      return NextResponse.json(
        {
          success: false,
          message: "Resume is required",
        },
        {
          status: 400,
        },
      );
    }

    // Check for existing application
    const existingApplication = await prisma.jobApplication.findUnique({
      where: { email },
    });

    if (existingApplication) {
      return NextResponse.json(
        { success: false, error: "An application with this email already exists." },
        { status: 400 }
      );
    }

    // Upload resume to S3
    const resumeKey = await uploadResumeToS3(resume);

    // Save candidate in DB
    const candidate = await prisma.jobApplication.create({
      data: {
        fullName,
        email,
        phoneNumber,
        skillset,
        location,
        experience,
        appliedPosition,
        resume: resumeKey,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully",
        candidate,
      },
      {
        status: 201,
      },
    );
  } catch (error: any) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Something went wrong",
      },
      {
        status: 500,
      },
    );
  }
}
