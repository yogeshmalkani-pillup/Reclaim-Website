import React from 'react'
import EffectCard from './EffectCard'
import { ReclaimEffects } from '@/utils/Contants'


export default function ReclaimEffect() {


  return (
    <div className='w-full flex flex-col mt-[200px] max-md:mt-[100px] gap-[50px] items-center justify-center px-20 max-md:px-10 max-sm:px-5'>
        <h1 className='text-[3vw] max-md:text-[40px] max-sm:text-[30px] font-satoshi_bold'>The Reclaim <span className='text-[#3CE8B5]'>effect</span></h1>
        <div className='flex flex-row flex-wrap gap-10 justify-center w-full'>
          {
            ReclaimEffects.map((effect)=>{
              return <EffectCard key={effect.text} number={effect.value} heading={effect.heading} text={effect.text} />
            })
          }

        </div>
    </div>
  )
}
