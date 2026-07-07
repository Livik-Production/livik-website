import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import OurClients from "@/components/OurClients";
import ClientSuccessStories from "@/components/ClientSuccessStories";
import Solutions from "@/components/Solutions";
import WhyChooseUs from "../components/WhyChooseUs";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      {/* <OurClients />
      <ClientSuccessStories /> */}
      <Solutions />
      <Technologies />
      <WhyChooseUs />
    </>
  );
}
