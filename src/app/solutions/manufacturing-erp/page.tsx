import ManufacturingERPPage from "@/modules/Solutions/ManufacturingERPPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing ERP Software | Manage Your Manufacturing Operations in One Place | Livik Tech",
  description:
    "Livik Tech develops Manufacturing ERP solutions covering production, BOM, inventory, MRP, purchase, quality, costing, GST and TallyPrime integration, with AI capabilities.",
};

export default function Page() {
  return <ManufacturingERPPage />;
}
