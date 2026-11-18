import CustomERPPage from "@/modules/Solutions/CustomERPPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom ERP Software Development | ERP Designed Around Your Business | Livik Tech",
  description:
    "Livik Tech develops custom ERP solutions tailored to your business: inventory, sales, production, finance, HR, analytics and AI automation, with integrations such as TallyPrime.",
};

export default function Page() {
  return <CustomERPPage />;
}
