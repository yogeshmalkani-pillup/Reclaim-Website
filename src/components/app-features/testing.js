// components/ScrollProgress.js

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ScrollProgress = ({ containerRef }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const scrollListener = () => {
      const scrollElement = containerRef.current;
      const scrollHeight = scrollElement.scrollHeight - scrollElement.clientHeight;
      const scrolled = scrollElement.scrollTop;
      const progress = (scrolled / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    if (containerRef && containerRef.current) {
      containerRef.current.addEventListener('scroll', scrollListener);
    }

    return () => {
      if (containerRef && containerRef.current) {
        containerRef.current.removeEventListener('scroll', scrollListener);
      }
    };
  }, [containerRef]);

  // Animate the scroll progress bar
  useEffect(() => {
    controls.start({ width: `${scrollProgress}%` });
    console.log(scrollProgress)
  }, [scrollProgress, controls]);

  return (
    <div className='h-[100vh]'>
    <p>kbjdchkldlhcvdlhv</p>
    <motion.div
      className="scroll-progress"
      initial={{ width: 0 }}
      animate={controls}
      transition={{ duration: 0.3 }}
    />
    </div>
    
  );
};

export default ScrollProgress;
