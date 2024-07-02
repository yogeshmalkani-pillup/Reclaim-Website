import { Influencers } from '@/pages/Contants'
import React from 'react'
import InfluencerCard from './InfluencerCard'

export default function ConcernedPeople() {
  return (
    <div className='w-full py-[100px] max-md:py-[50px] flex flex-col justify-center items-center gap-10 px-20 max-md:px-10 max-sm:px-5'>
        <p className='text-[2vw] max-lg:text-[30px]  font-satoshi_bold'>People are concerned and <span className='text-[#3CE8B5]'>addressing</span> the problem</p>
        <div className='flex flex-row flex-wrap justify-center gap-10'>
            {
                Influencers.map((celeb)=>{
                    return  <InfluencerCard key={celeb.quote} imageName={celeb.image} quote={celeb.quote} />           
                })
            }
        </div>
        
    </div>
  )
}
