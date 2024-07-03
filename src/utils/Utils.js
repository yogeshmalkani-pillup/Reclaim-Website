import React from "react";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function useWindowSize() {
   
    const [windowSize, setWindowSize] = React.useState({
      width: undefined,
      height: undefined,
    });
  
    React.useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      window.addEventListener("resize", handleResize);
        handleResize();
      
      return () => window.removeEventListener("resize", handleResize);
    }, []); 
    return windowSize;
  }

   
  function cn(...inputs) {
    return twMerge(clsx(inputs));
  }
  export {useWindowSize, cn}