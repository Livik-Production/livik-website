import TermsOfServicePage from "@/modules/TermsOfServicePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Livik Software Solutions",
  description: "Terms and conditions governing the use of services provided by Livik Software Solutions.",
};

export default function Page() {
  return <TermsOfServicePage />;
}
