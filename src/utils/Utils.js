import { clsx } from "clsx";
import React from "react";
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

   function IsSectionVisible(ref) {
    const [isIntersecting, setIntersecting] = React.useState(false);

    React.useEffect(() => {
      const observer = new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      );

      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, [ref]);

  return isIntersecting;
}

function useInterval(callback, delay) {
  const savedCallback = React.useRef();
 
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
 
  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

   
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export {useWindowSize, cn, IsSectionVisible, useInterval}