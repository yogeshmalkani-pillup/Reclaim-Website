import React from 'react'
import EffectCard from './EffectCard'
import { ReclaimEffects } from '@/utils/Contants'


export default function ReclaimEffect() {
  return (
    <div className='w-full flex flex-col gap-[50px] items-center justify-center px-20 max-md:px-10 max-sm:px-5 pt-20'>
        <h1 className='text-[3vw] max-md:text-[40px] max-sm:text-[30px] font-satoshi_bold'>The Reclaim <span className='text-[#3CE8B5]'>effect</span></h1>
        <div className='flex flex-row flex-wrap gap-20 justify-center w-full'>
          {
            ReclaimEffects.map((effect)=>{
              return <EffectCard key={effect.text} heading={effect.heading} text={effect.text}/>
            })
          }

        </div>
    </div>
  )
}
