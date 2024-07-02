import React, { useState } from 'react'
import { Mulish } from "next/font/google";
import { Sections } from '@/utils/Contants';
import { useWindowSize } from '@/utils/Utils';
const mulish = Mulish({ subsets: ['latin'] })

export default function Navbar({activeSection, scrollToView}) {

    const [navExpand,setNavExpand] = useState(false)
    const windowSize = useWindowSize()

    // React.useEffect(()=> {
    //     window.addEventListener('resize', ()=> {
    //         setDeviceWidth(window.innerWidth)
    //     })
    //  }, [window])
     

  return (
    <div className={`w-full flex flex-row justify-around px-20 py-10 max-sm:px-5  ${mulish.className}`}>
        { windowSize.width >= 800 ?   
                <div className='w-full flex flex-row'>
                    <div className='flex flex-row gap-20 w-[80%] items-center'>
                        <div className='flex flex-row items-center gap-2'>
                            <img className=' w-[40px] h-[40px]'
                                src="/icons/reclaim-logo.svg" 
                                alt="recalim-logo"
                            />
                            <p className='text-[18px] font-bold'>ReClaim</p>
                        </div>
                    { <div className='flex flex-row gap-10'>
                            {
                                Sections.map((sec)=>{
                                    return (
                                        <p onClick={()=>{scrollToView(sec)}} key={sec} className={`${activeSection == sec ? ' font-bold' : 'font-thin'} text-[18px] cursor-pointer`}>{sec}</p>
                                    )
                                })
                            }
                        </div>}
                    </div>
                
                    <div className='w-[20%] flex flex-row justify-end'>
                        <p className=' rounded-3xl px-6 py-2 border-2 border-white w-fit text-[18px]'>Try it free</p>
                    </div>
                </div>
            :
            <div className='w-full flex flex-col justify-between'>
                <div className='flex flex-row justify-between gap-20 w-full items-center'>
                    <div className='flex flex-row items-center gap-2'>
                        <img className=' w-[40px] h-[40px]'
                            src="/icons/reclaim-logo.svg" 
                            alt="recalim-logo"
                        />
                        <p className='text-[18px] font-bold'>ReClaim</p>
                    </div>
                    <button onClick={()=>{setNavExpand(!navExpand)}}>
                        <img src="icons/menu-bar.svg" className='w-[40px] h-[40px]' />
                    </button>
                </div>
                {navExpand &&<div className='flex flex-col justify-center items-center gap-5 w-full'>
                    {
                        Sections.map((sec)=>{
                            return (
                                <p onClick={()=>{scrollToView(sec)}} key={sec} className={`${activeSection == sec ? ' font-bold' : 'font-thin'} text-[18px] cursor-pointer`}>{sec}</p>
                            )
                        })
                    }
                     <div className=' flex flex-row justify-end'>
                        <p className='rounded-3xl px-6 py-2 border-2 border-white w-fit text-[18px]'>Try it free</p>
                    </div>
                </div>}
            </div>    
            }
        
    </div>
  )
}
