import { notFound } from "next/navigation";
import HireAngularPage from "@/modules/HireDevelopers/HireAngularPage";
import HireJavaPage from "@/modules/HireDevelopers/HireJavaPage";
import HireNextPage from "@/modules/HireDevelopers/HireNextPage";
import HireDevOpsPage from "@/modules/HireDevelopers/HireDevOpsPage";
import HireNodePage from "@/modules/HireDevelopers/HireNodePage";
import HirePHPPage from "@/modules/HireDevelopers/HirePHPPage";
import HirePythonPage from "@/modules/HireDevelopers/HirePythonPage";
import HireReactPage from "@/modules/HireDevelopers/HireReactPage";
import HireReactNativePage from "@/modules/HireDevelopers/HireReactNativePage";
import HireSAPPage from "@/modules/HireDevelopers/HireSAPPage";
import HireShopifyPage from "@/modules/HireDevelopers/HireShopifyPage";

const techMap: Record<string, React.ComponentType> = {
  angular: HireAngularPage,
  java: HireJavaPage,
  next: HireNextPage,
  devops: HireDevOpsPage,
  node: HireNodePage,
  php: HirePHPPage,
  python: HirePythonPage,
  react: HireReactPage,
  "react-native": HireReactNativePage,
  sap: HireSAPPage,
  shopify: HireShopifyPage,
};

export function generateStaticParams() {
  return Object.keys(techMap).map((tech) => ({
    tech,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ tech: string }>;
}) {
  const { tech } = await params;
  const TechPage = techMap[tech.toLowerCase()];

  if (!TechPage) {
    notFound();
  }

  return <TechPage />;
}
