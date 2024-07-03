import Footer from '@/components/footer/Footer'
import React from 'react'



export default function FooterSection() {
  return (
    <div className={`flex flex-col gap-5 items-center py-10 `}>
        <h1 className='text-[2.5vw]  max-md:text-[30px] w-[60%] max-md:w-[90%] font-satoshi_bold text-center'>Join the <span className='text-[#3CE8B5]'>Reclaim revolution</span> today and discover the life-changing power of reclaiming your time, your focus, and your life</h1>
        <div className='w-full'>
          <div className=" bg-[url('/images/footer/dimensions.png')] bg-cover w-full h-[400px] max-md:h-[200px] max-sm:h-[100px] flex flex-row items-center justify-center">
            <button className='bg-white rounded-[30px]  text-black '>
                  <div className='flex flex-row px-10 py-4 max-sm:px-2 max-sm:py-1 items-center gap-2'>
                      <p className='text-[#040415] text-[1.2vw] max-sm:text-[8px] font-semibold'>{"Check out our app"}</p>
                      <img src='icons/black-right-arrow.svg' className='text-black w-[32px] h-[32px] max-sm:w-[16px] max-sm:h-[16px]'>
                      </img>
                  </div>
              </button>
          </div>
            
        </div>
        <Footer />
    </div>
  )
}
