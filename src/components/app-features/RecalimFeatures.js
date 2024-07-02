import React from 'react'

export default function RecalimFeatures() {
  return (
    <div className='px-20 max-md:px-10 max-sm:px-5 flex flex-row max-md:flex-col items-center justify-center gap-20 py-20'>
        <div className='w-[50%] flex flex-row justify-center'>
            <img className='h-[700px] max-sm:h-[300px] max-lg:h-[500px]' src='images/features/usage-graph.png' />
        </div>
        <div className='flex flex-col max-lg:gap-10 gap-20 w-[40%] max-md:w-[90%] items-start'>
            <h2 className='text-[2vw] max-lg:text-[30px] text-[font-satoshi_bold'>Experience the <span className='text-[#3CE8B5]'>benefits</span> of Reclaim</h2>
            <p className='text-[1vw] max-lg:text-[15px] font-satoshi_medium'>
                Block apps automatically after you reach a set limit for a duration you can customize. Measure your focus, block distractions, automate your days and so much more.
            </p>
        </div>

    </div>
  )
}
