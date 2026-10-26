import ERPSystemsPage from "@/modules/Services/ERPSystemsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customized Manufacturing ERP Software | Your Factory. Your Process. Your ERP. | Livik Tech",
  description:
    "Livik Tech builds customized Manufacturing ERP software around your actual business process. Unify Production, Inventory, Purchase, Sales, Accounting, GST, E-Invoice, and Job Work.",
};

export default function Page() {
  return <ERPSystemsPage />;
}
