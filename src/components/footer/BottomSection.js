import React, { useEffect, useState } from 'react'
import { WavyBackground } from '../backgrounds/WavyBackground'
import { useWindowSize } from '@/utils/Utils'



export default function BottomSection() {
    return (
        <div className={`flex flex-col gap-5 items-center pt-10 mt-[200px] max-md:mt-[100px] `}>
            <h1 className='text-[2.5vw]  max-md:text-[30px] w-[60%] max-md:w-[90%] font-satoshi_bold text-center'>Join the <span className='text-themeColor'>Reclaim revolution</span> today and discover the life-changing power of reclaiming your time, your focus, and your life</h1>
            <div className='w-full relative overflow-hidden'>
                <WavyBackground  containerClassName="w-full h-[400px] max-md:h-[200px]" blur={10}  className="flex flex-row items-center justify-center">
                    <div className = "flex flex-row items-center px-4 py-2 max-sm:py-2 rounded-full bg-white text-[16px] max-sm:text-[20px] font-satoshi_medium  text-black gap-2" >
                        <p className="text-[18px] max-sm:text-15px] font-satoshi_medium text-[#040415]">Try for free</p>
                        <img src='icons/black-right-arrow.svg' className='text-black w-[20px] h-[20px] max-sm:w-[30px] max-sm:h-[30px]'>
                        </img>
                    </div>
                </WavyBackground>
                
            </div>
        </div>
    )
}
