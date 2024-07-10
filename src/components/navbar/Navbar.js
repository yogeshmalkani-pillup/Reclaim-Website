import React, { useState } from 'react'
import { Mulish } from "next/font/google";
import { HOME, Sections } from '@/utils/Contants';
import { useWindowSize } from '@/utils/Utils';
import styles from "./Navbar.module.css"
import ShimmerBorder from '../button/ShimmerBorder';
const mulish = Mulish({ subsets: ['latin'] })

export default function Navbar({ activeSection, scrollToView, setActivePage }) {

    const [navExpand, setNavExpand] = useState(false)
    const windowSize = useWindowSize()

    return (
        <div className={`w-full flex flex-row fixed z-50  justify-around px-20 mt-5  max-sm:px-5   ${mulish.className} `}>
                <div className={`w-[70%] rounded-[120px] py-3 px-5  flex-row justify-between h-[8vh] ${styles.glassEffect} hidden md:flex`}>
                    <div className='flex flex-row gap-20 w-[80%] items-center'>
                        <div className='flex flex-row items-center gap-2 cursor-pointer' onClick={() => window.location.reload()}>
                            <img className=' w-[40px] h-[40px]'
                                src="/icons/reclaim-logo.svg"
                                alt="recalim-logo"
                            />
                            <p className='text-[18px] font-bold'>Reclaim</p>
                        </div>
                        {<div className='flex flex-row gap-10'>
                            {
                                Sections.map((sec) => {
                                    return (
                                        <p onClick={() => { scrollToView(sec) }} key={sec} className={`${activeSection == sec ? ' font-bold' : 'font-thin'} text-[18px] cursor-pointer`}>{sec}</p>
                                    )
                                })
                            }
                        </div>}
                    </div>
                    <ShimmerBorder containerClass="w-fit p-[2px]" textClass="px-4 py-2 max-sm:py-2 bg-black text-[16px] max-sm:text-[20px] font-satoshi_medium  text-white" >
                        <p>Try for free</p>
                    </ShimmerBorder>
                </div>
                <div className={`w-[90%] ${navExpand ? 'rounded-2xl' : 'rounded-[100px]'} ${styles.glassEffect} px-3 py-3  flex-col justify-between items-center min-h-[8vh] flex  md:hidden`}>
                    <div className='flex flex-row h-full justify-between ite gap-20 w-full items-center'>
                        <div className='flex flex-row items-center gap-2' onClick={() => window.location.reload()}>
                            <img className=' w-[40px] h-[40px]'
                                src="/icons/reclaim-logo.svg"
                                alt="recalim-logo"
                            />
                            <p className='text-[18px] font-bold'>Reclaim</p>
                        </div>
                        <button onClick={() => { setNavExpand(!navExpand) }}>
                            <img src="icons/menu-bar.svg" className='w-[40px] h-[40px]  max-sm:w-[30px] max-sm:h-[30px]' />
                        </button>
                    </div>
                    {navExpand && <div className='flex flex-col justify-center items-center gap-5 w-full mt-10 p-5'>
                        {
                            Sections.map((sec) => {
                                return (
                                    <button onClick={() => { scrollToView(sec) }} key={sec} className={`${activeSection == sec ? ' font-bold' : 'font-thin'} text-[18px] cursor-pointer`}>{sec}</button>
                                )
                            })
                        }
                        <button className="w-fit relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3CE8B5_0%,#0000_50%,#3CE8B5_100%)]" />
                            <span className="font-satoshi_bold text-[15px] inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-2 py-4 text-sm font-medium text-white backdrop-blur-3xl backdrop-filter-r">
                                Try for free
                            </span>
                        </button>

                    </div>}
                </div>
        </div>
    )
}
