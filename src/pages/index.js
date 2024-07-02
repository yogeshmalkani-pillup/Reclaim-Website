import Navbar from "@/components/navbar/Navbar";
import HomePage from "./HomePage";
import React from "react";
import ReclaimEffect from "@/components/reclaimEffect/ReclaimEffect";
import Testimonials from "@/components/testimonials/Testimonials";
import FooterSection from "./FooterSection";
import RecalimFeatures from "@/components/app-features/RecalimFeatures";


export default function Home() {

  const [activeSection, setActiveSection] = React.useState("Home")
  const featuresRef = React.useRef(null);
  const homeRef = React.useRef(null)


  const scrollToElement = (sec) => {
    if(sec == "Features"){
      setActiveSection("Features")
      if(featuresRef.current) {
        featuresRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }else if(sec == "Home"){
      setActiveSection("Home")
      if(homeRef.current) {
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between bg-[#040415] `}
    >
      <Navbar scrollToView={scrollToElement} activeSection={activeSection} />
      <div ref={homeRef}>
        <HomePage/>
      </div>
      <div ref={featuresRef}>
        <RecalimFeatures />
      </div>
      <ReclaimEffect />
      <Testimonials />
      <FooterSection />
    </main>
  );
}
