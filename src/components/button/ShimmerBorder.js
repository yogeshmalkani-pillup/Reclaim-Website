import React from 'react'

export default function ShimmerBorder({text,textClass,containerClass}) {
  return (
    <button className={`relative inline-flex  overflow-hidden rounded-full focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${containerClass}`}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3CE8B5_0%,#0000_50%,#3CE8B5_100%)]" />
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full  backdrop-blur-3xl backdrop-filter-r  ${textClass}`}>
            {text}
        </span>
    </button>
  )
}
