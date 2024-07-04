import Navbar from "@/components/navbar/Navbar";
import HomePage from "./HomePage";
import React from "react";
import ReclaimEffect from "@/components/reclaimEffect/ReclaimEffect";
import Testimonials from "@/components/testimonials/Testimonials";
import FooterSection from "./FooterSection";
import RecalimFeatures from "@/components/app-features/RecalimFeatures";
import UsedByLeaders from "@/components/used-by-leaders/UsedByLeaders";
import { FEATURES, HOME } from "@/utils/Contants";
import HowItWorksSlider from "@/components/app-features/FetauresSlider";
import ScrollProgress from "@/components/app-features/testing";


export default function Home() {

    const [activeSection, setActiveSection] = React.useState("Home")
    const featuresRef = React.useRef(null);
    const homeRef = React.useRef(null)


    const scrollToElement = (sec) => {
        if (sec == FEATURES) {
            setActiveSection(FEATURES)
            if (featuresRef.current) {
                featuresRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (sec == HOME) {
            setActiveSection(HOME)
            if (homeRef.current) {
                homeRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }

    };
    const checkIfVisibleInWindow = (elementRef) => {
        const rect = elementRef.current.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    React.useEffect(() => {
        const handleScroll = () => {
            if (homeRef.current) {
                if (checkIfVisibleInWindow(homeRef)) {
                    setActiveSection(HOME);
                }
            } else if (featuresRef.current) {
                if (checkIfVisibleInWindow(featuresRef)) {
                    setActiveSection(FEATURES);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between bg-[#040415] `}
        >
            <Navbar scrollToView={scrollToElement} activeSection={activeSection} />
            <div ref={homeRef}>
                <HomePage />
            </div>
            <div ref={featuresRef}>
                <RecalimFeatures />
            </div>
            {/* <ScrollProgress /> */}
            <ReclaimEffect />
            <Testimonials />
            <UsedByLeaders />
            <FooterSection />
        </main>
    );
}
