import ToughenedGlassERPPage from "@/modules/Solutions/ToughenedGlassERPPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glass Manufacturing ERP Software | Toughened Glass ERP | Livik Tech",
  description:
    "Livik Tech's ERP for toughened glass manufacturers: AI order processing, production tracking, barcode tracking from cutting to dispatch, billing and reports.",
};

export default function Page() {
  return <ToughenedGlassERPPage />;
}
