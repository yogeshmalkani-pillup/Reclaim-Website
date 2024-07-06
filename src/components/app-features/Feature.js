import React from 'react'
import styles from "./FeatureSider.module.css"

export default function Feature({ hidden, title, description, image }) {
    return (
        <div className={`flex flex-row max-md:flex-col  gap-20 items-center w-full h-full relative ${hidden ? 'hidden' : ''} `}>
            <div className="w-[50%] h-[90vh] max-sm:h-[300px] max-lg:h-[500px]  flex flex-row justify-center absolute left-0">
                <img className='absolute top-0 h-full' src="/images/features/iphone15.png" />
                <img key={title} className={`absolute top-0 h-full ${styles.feature} ${hidden ? 'hidden' : ''} `} src={`images/features/${image}`} />
            </div>
            <div key={title}  className={`flex flex-col max-lg:gap-10 gap-10 w-[40%] max-md:w-full items-start absolute right-0 ${styles.feature} ${hidden ? 'hidden' : ''}`}>
                <h2 className='text-[3vw] max-lg:text-[30px] text-[font-satoshi_bold text-[#3CE8B5]'>{title}</h2>
                <p className='text-[2vw] max-lg:text-[15px] font-satoshi_medium'>
                    {description}
                </p>
            </div>
        </div>
    )
}
