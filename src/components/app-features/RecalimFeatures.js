import { Features } from '@/utils/Contants'
import React from 'react'

export default function ReclaimFeatrures() {
    return (
        <div className='w-full'>
            {
                Features.map((f) => {
                    return (
                        <div key={f.title} className='w-full h-[100vh] flex flex-row max-md:flex-col max-md:gap-20 items-center'>
                            <div
                                style={{ backgroundImage: `url('/images/features/${f.image}1.png')` }}
                                className={`w-[40%] max-md:w-full bg-contain bg-left max-md:hidden h-full bg-fixed bg-no-repeat`}>
                            </div>
                            <div className='w-full justify-center items-center md:hidden  max-md:flex'>
                                <img src={`/images/features/${f.image}.png`} className='h-[60vh]' />
                            </div>
                            <div className='w-[50%] max-md:w-full px-5'>
                                <h2 className='text-[3vw] max-sm:text-[30px]   font-satoshi_bold text-themeColor'>{f.title}</h2>
                                <p className='text-[2vw] max-sm:text-[20px]   font-satoshi_medium'>
                                    {f.desription}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div >
    )
}
