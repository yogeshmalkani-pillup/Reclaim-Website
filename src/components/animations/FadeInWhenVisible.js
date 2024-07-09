import React from 'react'
import { motion } from 'framer-motion'

export default function FadeInWhenVisible({children, duration, className}) {
  return (
    <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: duration, type: "tween"  }}
        variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 }
        }}
  >
        {children}
  </motion.div>
  )
}
