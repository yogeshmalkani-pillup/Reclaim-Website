import React from 'react'
import { WavyBackground } from '../backgrounds/WavyBackground'
import useWindowDimensions from '@/hooks/WindowDimensions';
import { motion } from 'framer-motion';



export default function BottomSection() {
    const { width, height } = useWindowDimensions();

    return (
        <div className={`flex flex-col gap-5 items-center pt-10 mt-[200px] max-md:mt-[100px] `}>
            <h1 className='text-[2.5vw]  max-md:text-[30px] w-[60%] max-md:w-[90%] font-satoshi_bold text-center'>Unlock your potential with <span className='text-themeColor'>Reclaim</span> Transform your time, focus, and life</h1>
            <div className='w-full relative overflow-hidden'>
                <WavyBackground containerClassName="w-full h-[400px] max-md:h-[200px]" blur={10} className="flex flex-row items-center justify-center">
                    <motion.div whileTap={{ scale: 0.85 }} className="flex flex-row items-center px-4 py-2 max-sm:py-2 rounded-full bg-white text-[16px] max-sm:text-[20px] font-satoshi_medium  text-black gap-2 cursor-pointer" >
                        <p className="text-[18px] max-sm:text-15px] font-satoshi_medium text-[#040415]">Try for free</p>
                        <img src='icons/black-right-arrow.svg' className='text-black w-[20px] h-[20px] max-sm:w-[30px] max-sm:h-[30px]'>
                        </img>
                    </motion.div>
                </WavyBackground>

            </div>
        </div>
    )
}
