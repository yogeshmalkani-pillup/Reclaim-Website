import React from 'react'

export default function CarouselDot({isActive}) {
  return (
    <div className={`h-[15px] w-[15px] border border-gray-500 rounded-full ${isActive ? "bg-white" : ""}`}>
    </div>
  )
}
