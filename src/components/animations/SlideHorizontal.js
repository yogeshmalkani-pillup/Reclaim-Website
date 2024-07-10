import React from 'react'
import { motion } from 'framer-motion'
import useWindowDimensions from '@/hooks/WindowDimensions';

export default function SlideHorizontalAnimation({ duration, className, children, leftOrRight }) {
    const { width, height } = useWindowDimensions();

    const leftVariants = {
        hidden: { x: width >= 800 ? -400 : -200 },
        visible: { x: 0 },
    }
    const rightVariants = {
        hidden: { x: width >= 800 ? 400 : 200 },
        visible: { x: 0 },
    }
    return (
        <motion.main
            variants={leftOrRight == "left" ? leftVariants : rightVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            transition={{ duration: duration, type: "linear" }}
            className={className}
        >
            {children}
        </motion.main>
    )
}
