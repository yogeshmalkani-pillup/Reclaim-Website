import Navbar from "@/components/navbar/Navbar";
import React from "react";
import ReclaimEffect from "@/components/reclaimEffect/ReclaimEffect";
import Testimonials from "@/components/testimonials/Testimonials";
import UsedByLeaders from "@/components/used-by-leaders/UsedByLeaders";
import { FEATURES, HOME, TERMSANDCONDITION } from "@/utils/Contants";
import Terms from "./Terms";
import Footer from "@/components/footer/Footer";
import BottomSection from "@/components/footer/BottomSection";
import { IsSectionVisible } from "@/utils/Utils";
import ReclaimFeatrures from "@/components/app-features/RecalimFeatures";
import HomePage from "./Home";


export default function Home() {

    const [activeSection, setActiveSection] = React.useState(HOME)
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
    const isFeatureVisible = IsSectionVisible(featuresRef)

    React.useEffect(() => {
        if (isFeatureVisible) {
            setActiveSection(FEATURES)
        } else {
            setActiveSection(HOME)
        }
    }, [isFeatureVisible])

    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between bg-[#040415] `}
        >
            {activeSection != FEATURES && < Navbar setActivePage={setActiveSection} scrollToView={scrollToElement} activeSection={activeSection} />}
            <div className="w-full mt-20">
                {
                    activeSection == TERMSANDCONDITION ? <Terms /> : <div className="w-full h-full">
                        <div ref={homeRef}>
                            <HomePage />
                        </div>
                        <div ref={featuresRef}>
                            <ReclaimFeatrures />
                        </div>
                        <ReclaimEffect />
                        <Testimonials />
                        <UsedByLeaders />
                        <BottomSection />
                    </div>

                }
                <Footer setActivePage={setActiveSection} />
            </div>

        </main>
    );
}
