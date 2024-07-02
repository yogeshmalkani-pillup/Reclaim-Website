import React from 'react'

export default function InfluencerCard({imageName, quote, key}) {
  return (
    <div key={key} className='w-[25%] max-md:w-[40%] max-sm:w-full rounded-[58px] bg-white bg-opacity-10 py-10 px-5  flex flex-col justify-between items-stretch'>
        <img className='h-[70%] object-contain'  src={`images/${imageName}`}/>
        <p className='font-satoshi_regular text-[1.125vw] max-md:text-[18px] '>{quote}</p>
    </div>
  )
}
