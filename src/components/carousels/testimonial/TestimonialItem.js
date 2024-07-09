import React from 'react'

export default function TestimonialItem({ image, name, profession, review, isVisible }) {
    return (
        <div className={`flex flex-col gap-[100px] max-sm:gap-[50px]  ${isVisible ? '' : ' hidden'} fadeAnimation`}>
            <div className={`flex flex-row gap-5`}>
                <img src={`images/testimonial/${image}`} className='w-[5vw] h-[5vw] max-md:w-[80px] max-md:h-[80px] max-sm:w-[50px] max-sm:h-[50px]' />
                <div className='flex flex-col justify-between'>
                    <p className='text-[1.5vw] max-md:text-[30px] max-sm:text-[20px] font-satoshi_bold'>{name}</p>
                    <p className='text-[1vw] max-md:text-[15px] max-sm:text-[10px] font-satoshi_regular'>{profession}</p>
                </div>
            </div>
            <p className='text-[1.5vw] max-md:text-[20px] max-sm:text-[18px] h-[100px] font-satoshi_light'>{review.substr(0,200)}</p>
        </div>
    )
}
