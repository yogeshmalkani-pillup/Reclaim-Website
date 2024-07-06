import React from 'react'
import { Mulish } from "next/font/google";
const mulish = Mulish({ subsets: ['latin'] })

export default function Footer() {
  return (
    <div className={`w-full flex flex-row gap-10 flex-wrap justify-between p-20 max-md:p-10 max-sm:p-5 bg-[#111312] ${mulish.className}`}>
        <div className='flex flex-col gap-10 max-sm:gap-5 max-md:w-full '>
            <div className='flex flex-row items-center gap-2'>
                <img className='w-[100px] h-[100px] max-sm:w-[50px] max-sm:h-[50px]'
                    src="/icons/reclaim-logo.svg" 
                    alt="recalim-logo"
                />
                <p className='text-[36px] max-sm:text-[18px] font-bold font-satoshi_bold'>ReClaim</p>
            </div>
            <p className='text-[18px] max-sm:text-[15px] w-[60%] max-md:w-full'>Make the most out of every day with the worlds greatest Screen Time software.</p>
        </div>

        <div className='flex flex-col gap-10 '>
            <p className='text-[24px] max-sm:text-[20px] font-bold'>Other</p>
            <div className='flex flex-col gap-2'>
                <p className='text-[18px] max-sm:text-[15px] font-semibold'>FAQs</p>
                <p className='text-[18px] max-sm:text-[15px] font-semibold'>Privacy Policy</p>
                <p className='text-[18px] max-sm:text-[15px] font-semibold'>Terms of Use</p>

            </div>
        </div>

        <div className='flex flex-col gap-10'>
            <p className='text-[24px] font-bold max-sm:h-[18px]'>Follow us</p>
            <div className='flex flex-row gap-10'>
                <img className='w-[36px] h-[36px] max-sm:w-[20px] max-sm:h-[20px]' src='icons/facebook.svg'/>
                <img className='w-[36px] h-[36px] max-sm:w-[20px] max-sm:h-[20px]' src='icons/twitter.svg'/>
                <img className='w-[36px] h-[36px] max-sm:w-[20px] max-sm:h-[20px]' src='icons/linkedin.svg'/>
            </div>
        </div>
    </div>
  )
}
