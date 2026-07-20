import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, whatsapp, service, message } = body;

    // Basic validation
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Save to database
    const newSubmission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        whatsapp: whatsapp || null,
        service,
        message,
      },
    });

    return NextResponse.json(
      { success: true, data: newSubmission },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving contact submission:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
