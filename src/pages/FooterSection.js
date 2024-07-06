import { MovingBorderButton } from '@/components/button/MovingBorder'
import ShimmerBorder from '@/components/button/ShimmerBorder'
import Footer from '@/components/footer/Footer'
import React from 'react'



export default function FooterSection() {
  return (
    <div className={`flex flex-col gap-5 items-center pt-10 `}>
        <h1 className='text-[2.5vw]  max-md:text-[30px] w-[60%] max-md:w-[90%] font-satoshi_bold text-center'>Join the <span className='text-[#3CE8B5]'>Reclaim revolution</span> today and discover the life-changing power of reclaiming your time, your focus, and your life</h1>
        <div className='w-full'>
          <div className=" bg-[url('/images/footer/dimensions.png')] bg-cover w-full h-[400px] max-md:h-[200px]  flex flex-row items-center justify-center">
              <MovingBorderButton containerClassName="rounded-[120px] p-[1.5px] w-fit items-center" className=" flex flex-row items-center gap-2 bg-white rounded-[120px] px-10 py-4 max-sm:px-5 max-sm:py-2 w-full ">
                  <p className="text-[30px] max-sm:text-[20px] font-satoshi_medium text-[#040415]">Try it free</p>
                  <img src='icons/black-right-arrow.svg' className='text-black w-[32px] h-[32px] max-sm:w-[25px] max-sm:h-[25px]'>
                  </img>
              </MovingBorderButton>
          </div>
        </div>
        <Footer />
    </div>
  )
}
