import React from 'react'

export default function PhoneEvolution() {
  return (
    <div className='w-full flex flex-row max-md:flex-col  items-center gap-20  py-[200px] max-sm:py-[100px] px-20 max-sm:px-5 bg-[#EFF0FF] bg-opacity-5'>
    <div className='w-[50%] max-md:w-[90%] max-sm:w-full flex flex-row justify-center'>
         <div className='w-[90%] rounded-xl bg-[#3CE8B5] bg-opacity-5 p-5'>
             <div className='flex flex-col justify-between rounded-xl h-full bg-[#2EFFF5] bg-opacity-25 '>
                 <p className='text-[1.75vw] max-md:text-[20px] px-10 py-10 w-[80%] font-satoshi_medium'>Phone Evolution from <span className='text-[#3CE8B5]'>1995-2024</span></p>
                 <img src='images/phone-evolution.png' className='w-full' />
             </div>
         </div>
    </div>

     <div className='w-[50%] max-md:w-[90%] flex flex-col gap-10'>
        <p className='text-[2.5vw] max-md:text-[30px] font-satoshi_bold'>{"Phones were made to \nmake us more"} <span className='text-[#3CE8B5]'>productive</span></p>
            <div className='font-satoshi_medium max-md:text-[20px]  text-[1.5vw]'>
                <p>1995</p>
                <p>90% Tool of Productivity | 10% Tool of Distraction</p>
            </div>
            <div className='font-satoshi_medium max-md:text-[20px] text-[1.5vw]'>
                <p>2024</p>
                <p>10% Tool of Productivity | 90% Tool of Distraction</p>
            </div>
     </div>
 </div>
  )
}
