import React from 'react'
import { motion } from 'framer-motion'

export default function SlideHorizontalAnimation({duration,className,children,leftOrRight}) {
    console.log(leftOrRight)
    const leftVariants = {
        hidden:  {x: -300 },
        visible: {x: 0 },
    }
    const rightVariants = {
        hidden:  {x: 300 },
        visible: {x: 0 },
    }
  return (
    <motion.main
        variants={leftOrRight == "left" ? leftVariants : rightVariants} 
        initial="hidden" 
        whileInView="visible"
        exit="exit"
        transition={{ duration: duration, type: "linear"}}
        className={className}
    >
        {children}
    </motion.main>
  )
}
