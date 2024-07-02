import Footer from '@/components/footer/Footer'
import React from 'react'


export default function FooterSection() {
  return (
    <div className={`flex flex-col gap-5 items-center py-10 `}>
        <h1 className='text-[2vw]  max-sm:text-[30px] w-[50%] max-sm:w-[90%] font-satoshi_bold text-center'>Join the Reclaim <span className='text-[#3CE8B5]'>revolution</span> today and discover the life-changing power of reclaiming your time, your focus, and your life</h1>
        <div className=' relative'>
            <img src='images/footer/dimensions.png' />
            <button className='bg-white rounded-[30px] absolute top-[50%] left-[50%] ml-[-100px] max-sm:mt-[-10px] max-sm:ml-[-60px] mt-[-50px]  text-black '>
                <div className='flex flex-row px-5 py-3 max-sm:px-2 max-sm:py-1 items-center gap-2'>
                    <p className='text-[#040415] text-[18px] max-sm:text-[8px]'>{"Check out our app"}</p>
                    <img src='icons/black-right-arrow.svg' className='text-black w-[32px] h-[32px] max-sm:w-[16px] max-sm:h-[16px]'></img>
                </div>
            </button>
        </div>
        <Footer />
    </div>
  )
}
