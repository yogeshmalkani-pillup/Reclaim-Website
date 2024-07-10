import React, { useEffect } from 'react'
import TestimonialItem from './TestimonialItem'
import { Reviews } from '@/utils/Contants'
import { useInterval } from '@/utils/Utils'
import CarouselDot from './CarouselDot'

export default function TestimonialCarousel() {
    const [activeItem, setActiveItem] = React.useState('1')
    const [leftOrRight, setLeftOrRight] = React.useState("right")

    const handleCarousel = (operation) => {
        if (operation == "next") {
            setLeftOrRight("right")
            if (activeItem + 1 > Reviews.length) {
                setActiveItem(1)
            } else {
                setActiveItem(activeItem + 1)
            }
        } else if (operation == "prev") {
            setLeftOrRight("left")
            if (activeItem > 1) {
                setActiveItem((activeItem - 1))
            } else {
                setActiveItem(Reviews.length)
            }
        }
    }

    useInterval(() => {
        handleCarousel("next");
    }, 8000);



    return (
        <div className='w-[80%] max-md:w-full max-md:px-5 flex flex-col overflow-hidden h-full'>
            {Reviews.map((item, idx) => {
                if (activeItem == (idx + 1)) {
                    return <TestimonialItem key={idx} leftOrRight={leftOrRight} name={item.name} review={item.review} profession={item.profession} image={item.image} />
                }
            })}
            <div className='w-full flex flex-row justify-start gap-5 mt-20 max-sm:mt-5'>
                {Reviews.map((item, idx) => {
                    return <CarouselDot key={idx} isActive={(idx + 1) == activeItem} />
                })}
            </div>
            <div className='flex flex-row gap-5 mt-6'>
                <button onClick={() => handleCarousel("prev")}><img src='icons/left-arrow.svg' /></button>
                <button onClick={() => handleCarousel("next")}><img src='icons/right-arrow.svg' /></button>
            </div>
        </div>
    )
}
