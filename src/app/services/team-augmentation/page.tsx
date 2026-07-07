import TeamAugmentationPage from "@/modules/Services/TeamAugmentationPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team Augmentation | Livik",
  description:
    "Scale your engineering team faster with skilled developers. Get production-ready talent that integrates with your workflow from day one.",
};

export default function Page() {
  return <TeamAugmentationPage />;
}
