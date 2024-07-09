import React, { useEffect } from 'react'
import TestimonialItem from './TestimonialItem'
import { Reviews } from '@/utils/Contants'
import { useInterval } from '@/utils/Utils'

export default function TestimonialCarousel() {
    const [activeItem, setActiveItem] = React.useState('1')

    const handleCarousel = (operation) => {
        if (operation == "next") {
            if (activeItem + 1 > Reviews.length) {
                setActiveItem(1)
            } else {
                setActiveItem((activeItem + 1))
            }
        } else if ("prev") {
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
        <div className='w-[80%] max-md:w-full max-md:px-10 flex flex-col justify-between gap-[100px]'>
            {Reviews.map((item, idx) => {
                return <TestimonialItem key={item.name} isVisible={activeItem == (idx + 1) ? true : false} name={item.name} review={item.review} profession={item.profession} image={item.image} />
            })}
            <div className='flex flex-row gap-5'>
                <button onClick={() => handleCarousel("prev")}><img src='icons/left-arrow.svg' /></button>
                <button onClick={() => handleCarousel("next")}><img src='icons/right-arrow.svg' /></button>
            </div>
        </div>
    )
}
