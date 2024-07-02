import React from 'react'

export default function TestimonialItem({image,name,profession,review,isVisible}) {
  return (
    <div className='flex flex-col gap-[50px]'>
        <div className={`flex flex-row gap-5 ${isVisible ? '' : ' hidden'}`}>
            <img src={`images/${image}`} className='w-[75px] h-[75px]'/>
            <div className='flex flex-col justify-between'>
                <p className='text-[18px] font-satoshi_bold'>{name}</p>
                <p className='text-[14px] font-satoshi_medium'>{profession}</p>
            </div>
        </div>
        <p className='text-[18px] font-satoshi_light'>{review}</p>
    </div>
  )
}
