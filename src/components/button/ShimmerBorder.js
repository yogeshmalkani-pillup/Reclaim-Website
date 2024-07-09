import React from 'react'
import { motion } from 'framer-motion'

export default function ShimmerBorder({ children, textClass, containerClass, onclickHandler }) {
    return (
        <motion.button whileTap={{ scale: 0.85 }} onClick={onclickHandler} className={`relative inline-flex  overflow-hidden rounded-full  ${containerClass}`}>
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3CE8B5_0%,#0000_50%,#3CE8B5_100%)]" />
            <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full  backdrop-blur-3xl backdrop-filter-r  ${textClass}`}>
                {children}
            </span>
         </motion.button>
        
    )
}
