import React, { useRef, useState } from "react";
import { useMotionValue, useScroll, useSpring,motion, useMotionValueEvent } from "framer-motion";
import styles from "./FeatureSider.module.css"
import Feature from "./Feature";

export function FetauresSlider() {
  const scrollDemoRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollDemoRef,
    offset: ["start start", "end start"]
  })
  const scale = useSpring(scrollYProgress);
  const [scrollProgress,setScrollProgress] = useState(0) // Passing scrollYProgress


  useMotionValueEvent(scrollYProgress, "change", (latest) => {
   setScrollProgress(latest)
  });

 const Features = [
  {
    title : "App Blocking",
    desription: "Block apps automatically after you reach a set limit for a duration you can customize. Measure your focus, block distractions, automate your days and so much more.",
    image: "usage-graph.png"
  },
  {
    title : "App Locking Sessions",
    desription: "Block apps automatically after you reach a set limit for a duration you can customize. Measure your focus, block distractions, automate your days and so much more.",
    image: "app-lock-session.png"
  },
  {
    title : "Blocking Session",
    desription: "Block apps automatically after you reach a set limit for a duration you can customize. Measure your focus, block distractions, automate your days and so much more.",
    image: "block-session.png"
  },
  {
    title : "Recurring sessions",
    desription: "Block apps automatically after you reach a set limit for a duration you can customize. Measure your focus, block distractions, automate your days and so much more.",
    image: "session.png"
  }
 ]

  
  return (
    <div ref={scrollDemoRef} className="h-[500vh] w-[100vw]" >
        <div className={styles.slideDownContainer} >
          <Feature hidden={scrollProgress < 0.25 ? false : true} title={Features[0].title} description={Features[0].desription } image={Features[0].image} />
          <Feature hidden={(scrollProgress >= 0.25 && scrollProgress < 0.5 ) ? false : true} title={Features[1].title} description={Features[1].desription } image={Features[1].image} />
          <Feature hidden={(scrollProgress >= 0.5 && scrollProgress < 0.75 ) ? false: true} title={Features[2].title} description={Features[2].desription } image={Features[2].image} />
          <Feature hidden={(scrollProgress >= 0.75 && scrollProgress < 1 ) ? false : true} title={Features[3].title} description={Features[3].desription } image={Features[3].image} />
        </div>
    </div>
  );
}
