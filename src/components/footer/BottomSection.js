import { MovingBorderButton } from '@/components/button/MovingBorder'
import React from 'react'
import ShimmerBorder from '../button/ShimmerBorder'



export default function BottomSection() {
    return (
        <div className={`flex flex-col gap-5 items-center pt-10 mt-[200px] max-md:mt-[100px] `}>
            <h1 className='text-[2.5vw]  max-md:text-[30px] w-[60%] max-md:w-[90%] font-satoshi_bold text-center'>Join the <span className='text-[#3CE8B5]'>Reclaim revolution</span> today and discover the life-changing power of reclaiming your time, your focus, and your life</h1>
            <div className='w-full'>
                <div className=" bg-[url('/images/footer/dimensions.png')] bg-cover w-full h-[400px] max-md:h-[200px]  flex flex-row items-center justify-center">
                    <ShimmerBorder containerClass="w-fit p-[2px]" textClass="px-8 py-4 gap-2  max-sm:py-2 bg-white text-[30px] max-sm:text-[20px] font-satoshi_medium  text-[#040415]" >
                        <p className="text-[30px] max-sm:text-[20px] font-satoshi_medium text-[#040415]">Try it free</p>
                        <img src='icons/black-right-arrow.svg' className='text-black w-[32px] h-[32px] max-sm:w-[25px] max-sm:h-[25px]'>
                        </img>
                    </ShimmerBorder>
                </div>
            </div>
        </div>
    )
}
