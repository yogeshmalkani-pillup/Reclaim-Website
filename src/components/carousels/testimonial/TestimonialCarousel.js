import React, { useEffect } from 'react'
import TestimonialItem from './TestimonialItem'
import { Reviews } from '@/utils/Contants'
import { useInterval } from '@/utils/Utils'
import CarouselDot from './CarouselDot'

export default function TestimonialCarousel() {
  const [activeItem, setActiveItem] = React.useState("1");
  const [isPaused, setIsPaused] = React.useState(false);
  const [leftOrRight, setLeftOrRight] = React.useState("right");

  const intervalRef = React.useRef();

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (isPaused) {
      clearInterval(intervalRef.current);
    } else {
      startInterval();
    }
  }, [isPaused]);

  const startInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      nextTestimonial();
    }, 10000);
  };

  const nextTestimonial = () => {
    setLeftOrRight("right")
    setIsPaused(true);
    setTimeout(() => {
      setActiveItem((activeItem + 1) % Reviews.length);
      setIsPaused(false);
    }, 300);
  };

  const prevTestimonial = () => {
    setLeftOrRight("left")
    setIsPaused(true);
    setTimeout(() => {
      setActiveItem((activeItem - 1 + Reviews.length) % Reviews.length);
      setIsPaused(false);
    }, 300);
  };

  //   const goToTestimonial = (index) => {
  //     setIsPaused(true);
  //     setTimeout(() => {
  //       setCurrentIndex(index);
  //       setIsPaused(false);
  //     }, 300);
  //   };

  return (
    <div className="w-[80%] max-md:w-full max-md:px-5 flex flex-col overflow-hidden h-full">
      {Reviews.map((item, idx) => {
        if (activeItem == idx) {
          return (
            <TestimonialItem
              key={idx}
              leftOrRight={leftOrRight}
              name={item.name}
              review={item.review}
              profession={item.profession}
              image={item.image}
            />
          );
        }
      })}
      <div className="w-full flex flex-row justify-start gap-5 mt-20 max-sm:mt-5">
        {Reviews.map((item, idx) => {
          return <CarouselDot key={idx} isActive={idx == activeItem} />;
        })}
      </div>
      <div className="flex flex-row gap-5 mt-6">
        <button onClick={() => prevTestimonial()}>
          <img src="icons/left-arrow.svg" />
        </button>
        <button onClick={() => nextTestimonial()}>
          <img src="icons/right-arrow.svg" />
        </button>
      </div>
    </div>
  );
}
