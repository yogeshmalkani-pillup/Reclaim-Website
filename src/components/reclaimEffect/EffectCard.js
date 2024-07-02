import React from 'react'

export default function EffectCard({heading,text, key}) {
  return (
    <div key={key} className='max-md:w-[40%] max-sm:w-[80%] w-[25%] rounded-[56px] px-5 max-sm:px-2  py-20 max-sm:py-10 flex flex-col items-center justify-between bg-[#3CE8B5] bg-opacity-5'>
        <p className='text-[3vw] max-md:text-[50px] text-[#3CE8B5] font-satoshi_bold'>{heading}</p>
        <p className='text-[1.5vw] max-md:text-[20px] font-satoshi_medium'>{text}</p>
    </div>
  )
}
