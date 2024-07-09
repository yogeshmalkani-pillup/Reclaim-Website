import React from 'react'
import InfluencerCard from './InfluencerCard'
import { Influencers } from '@/utils/Contants'

export default function ConcernedPeople() {
  return (
    <div className='w-full mt-[100px] max-md:mt-[50px] flex flex-col justify-center items-center gap-10 px-20 max-md:px-10 max-sm:px-5'>
        <p className='text-[2.8vw] max-lg:text-[30px]  font-satoshi_bold'><span className='text-[#3CE8B5]'>Visionaries</span> Confronting the <span className='text-[#3CE8B5]'>Global Distraction Crisis</span> </p>
        <div className='flex flex-row flex-wrap justify-center gap-10 w-full'>
            {
                Influencers.map((celeb)=>{
                    return  <InfluencerCard key={celeb.quote} imageName={celeb.image} quote={celeb.quote} />           
                })
            }
        </div>
        
    </div>
  )
}
