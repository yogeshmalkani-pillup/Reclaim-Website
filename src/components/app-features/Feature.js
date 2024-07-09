import React from 'react'
import FadeInWhenVisible from '../animations/FadeInWhenVisible'


export default function Feature({ hidden, title, description, image }) {
    return (
        <div className={`flex flex-row max-md:flex-col gap-20 max-sm:gap-10 items-center justify-center w-full h-full relative ${hidden ? 'hidden' : ''} `}>
            <FadeInWhenVisible duration={0.5} className="w-[50%] h-full max-md:h-[60vh]  flex flex-row justify-center">
                <img className='absolute top-0 h-full  max-md:h-[60vh] ' src="/images/features/iphone15.png" />
                <img key={title} className={`absolute top-0 h-full  max-md:h-[60vh] `} src={`images/features/${image}`} />
            </FadeInWhenVisible>
            <FadeInWhenVisible duration={0.5} className="flex flex-col max-md:gap-5 gap-10 w-[40%] max-md:w-full items-start max-md:items-center">
                <h2 className='text-[3vw] max-sm:text-[30px] max-md:text-center max-md:px-2 font-satoshi_bold text-[#3CE8B5]'>{title}</h2>
                <p className='text-[2vw] max-sm:text-[20px] max-md:text-center max-md:px-2  font-satoshi_medium'>
                    {description}
                </p>
            </FadeInWhenVisible>
        </div>
    )
}
