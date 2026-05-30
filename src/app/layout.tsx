import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Toaster } from "@/components/ui/toaster";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import ChatbotFAB from "@/components/ChatbotFAB";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Livik Tech | Web, Mobile, AI & Data Engineering Company",
  description:
    "Livik Software Solutions provides web, mobile, AI, and cloud development services.",
  keywords: [
    "software company",
    "web development",
    "mobile app development",
    "AI solutions",
    "cloud development",
  ],
  icons: {
    icon: "/Logo.png",
    shortcut: "/Logo.png",
    apple: "/Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased no-scroll`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <Toaster />
        {/* Floating Action Buttons */}
        <div className="fixed bottom-4 right-6 z-50 flex flex-col items-center gap-3">
          <WhatsAppFAB />
          {/* <ChatbotFAB /> */}
        </div>
      </body>
    </html>
  );
}
