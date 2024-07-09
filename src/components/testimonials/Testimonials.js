import React from 'react'
import TestimonialCarousel from '../carousels/testimonial/TestimonialCarousel'

export default function Testimonials() {
  return (
    <div className='w-full flex flex-row max-md:flex-col flex-wrap items-center max-md:items-start max-md:gap-[100px] mt-[200px] max-md:mt-[100px] '>
        <div className='bg-white bg-opacity-[8%] w-[50%] max-md:w-[90%] rounded-tr-[50px] rounded-br-[50px]'>
            <img src='/images/testimonial/testimonial_people.png' className='w-full p-20 max-sm:p-10' />
        </div>
        <div className='w-[50%] max-md:w-full flex flex-row justify-center'>
            <TestimonialCarousel />
        </div>
    </div>
  )
}
