import React from 'react'
import EffectCard from './EffectCard'
import { ReclaimEffects } from '@/pages/Contants'


export default function ReclaimEffect() {
  return (
    <div className='w-full flex flex-col gap-[50px] items-center justify-center px-20 max-md:px-10 max-sm:px-5'>
        <h1 className='text-[2vw] max-md:text-[40px]'>The Reclaim <span className='text-[#3CE8B5]'>effect</span></h1>
        <div className='flex flex-row  flex-wrap gap-20 justify-center w-full'>
          {
            ReclaimEffects.map((effect)=>{
              return <EffectCard key={effect.text} heading={effect.heading} text={effect.text}/>
            })
          }

        </div>
    </div>
  )
}
