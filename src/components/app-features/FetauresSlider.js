import React, { useRef, useState } from "react";
import { useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import styles from "./FeatureSider.module.css"
import { Features } from "@/utils/Contants";
import Feature from "./Feature";

export function FetauresSlider() {
    const scrollDemoRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: scrollDemoRef,
        offset: ["start start", "end start"]
    })
    const scale = useSpring(scrollYProgress);
    const [scrollProgress, setScrollProgress] = useState(0) // Passing scrollYProgress


    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setScrollProgress(latest)
    });

    


    return (
        <div ref={scrollDemoRef} className="h-[400vh] w-[90vw]" >
            <div className={styles.slideDownContainer} >
                <div className="absolute bottom-0 w-full h-[80vh]">
                    <Feature hidden={scrollProgress < 0.25 ? false : true} title={Features[0].title} description={Features[0].desription} image={Features[0].image} />
                    <Feature hidden={(scrollProgress >= 0.25 && scrollProgress < 0.5) ? false : true} title={Features[1].title} description={Features[1].desription} image={Features[1].image} />
                    <Feature hidden={(scrollProgress >= 0.5 && scrollProgress < 0.75) ? false : true} title={Features[2].title} description={Features[2].desription} image={Features[2].image} />
                    <Feature hidden={(scrollProgress >= 0.75 && scrollProgress < 1) ? false : true} title={Features[3].title} description={Features[3].desription} image={Features[3].image} />
                </div>
            </div>
        </div>
    );
}
