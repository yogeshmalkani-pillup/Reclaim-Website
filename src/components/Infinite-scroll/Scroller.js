// components/Scroller.js
import { useEffect } from "react";
import styles from "./Scroller.module.css";

const Scroller = ({ speed = "default", direction = "left", children }) => {
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      const scrollers = document.querySelectorAll(`.${styles.scroller}`);
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(`.${styles.scroller__inner}`);
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div
      className={`${styles.scroller} ${styles[speed]} ${styles[direction]} w-full `}
    >
      <div className={`${styles.scroller__inner} flex flex-row gap-[10rem] max-sm:gap-[5rem]`}>{children}</div>
    </div>
  );
};

export default Scroller;
