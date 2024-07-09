import React from 'react'
import { motion } from 'framer-motion'

export default function SlideUpAnimation({duration,className,children}) {
    const variants = {
        hidden: { y: 300, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    }
  return (
    <motion.main
        variants={variants} 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: duration, type: "linear"}}
        className={className}
    >
        {children}
    </motion.main>
  )
}
