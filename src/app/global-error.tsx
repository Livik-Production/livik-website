"use client";

import { useEffect } from "react";
import MaintenancePage from "@/components/MaintenancePage";
import "@/app/globals.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Unhandled global error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="antialiased m-0 p-0">
        <MaintenancePage />
      </body>
    </html>
  );
}
