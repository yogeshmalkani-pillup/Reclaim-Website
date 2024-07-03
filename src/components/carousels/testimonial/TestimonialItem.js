import React from 'react'

export default function TestimonialItem({image,name,profession,review,isVisible}) {
  return (
    <div className='flex flex-col gap-[100px]'>
        <div className={`flex flex-row gap-5 ${isVisible ? '' : ' hidden'}`}>
            <img src={`images/${image}`} className='w-[5vw] h-[5vw]'/>
            <div className='flex flex-col justify-between'>
                <p className='text-[1.5vw] font-satoshi_bold'>{name}</p>
                <p className='text-[1vw] font-satoshi_regular'>{profession}</p>
            </div>
        </div>
        <p className='text-[1.5vw] font-satoshi_light'>{review}</p>
    </div>
  )
}
