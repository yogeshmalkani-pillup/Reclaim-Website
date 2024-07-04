import React from 'react'
import styles from "./FeatureSider.module.css"

export default function Feature({ hidden, title, description, image }) {
    return (
        <div className={`flex flex-row justify-between items-center w-full h-full ${styles.feature} ${hidden ? 'hidden' : ''}`}>
            <div className='w-[50%] flex flex-row justify-center'>
                <img className='h-[90vh] max-sm:h-[300px] max-lg:h-[500px]' src={`images/features/${image}`} />
            </div>
            <div className='flex flex-col max-lg:gap-10 gap-20 w-[40%] max-md:w-full items-start'>
                <h2 className='text-[2vw] max-lg:text-[30px] text-[font-satoshi_bold'>{title} <span className='text-[#3CE8B5]'>benefits</span> of Reclaim</h2>
                <p className='text-[1vw] max-lg:text-[15px] font-satoshi_medium'>
                    {description}
                </p>
            </div>
        </div>
    )
}
