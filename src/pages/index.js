import Navbar from "@/components/navbar/Navbar";
import HomePage from "./HomePage";
import React from "react";
import ReclaimEffect from "@/components/reclaimEffect/ReclaimEffect";
import Testimonials from "@/components/testimonials/Testimonials";
import FooterSection from "./FooterSection";
import RecalimFeatures from "@/components/app-features/RecalimFeatures";


export default function Home() {

  const [activeSection, setActiveSection] = React.useState("Home")

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between bg-[#040415] `}
    >
      <Navbar activeSection={activeSection} />
      <HomePage />
      <RecalimFeatures />
      <ReclaimEffect />
      <Testimonials />
      <FooterSection />
    </main>
  );
}
