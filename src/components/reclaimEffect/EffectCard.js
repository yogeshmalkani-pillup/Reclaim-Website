import { IsSectionVisible, useInterval } from '@/utils/Utils'
import React from 'react'

export default function EffectCard({heading,text,number, key}) {
  const [value,setValue] = React.useState(0)
  const featureCardRef = React.useRef(null)

  const isVisible = IsSectionVisible(featureCardRef)
  const increaseValue = () =>{
    if (value >= number && value != heading) {
      setValue(heading)
    }else if (value != heading){
      const newValue = value + 1
      setValue(newValue)
    }
  }
 
    useInterval(() => {
      if (featureCardRef.current && isVisible) {
      increaseValue();
      }
    }, 20);

  return (
    <div key={key} ref={featureCardRef} className='max-md:w-[40%] max-sm:w-[80%] w-[30%] rounded-[50px] px-5 max-sm:px-2  py-[100px] max-sm:py-10 flex flex-col items-center justify-between bg-[#3CE8B5] bg-opacity-5'>
        <p className='text-[3.5vw] max-md:text-[50px] text-[#3CE8B5] font-satoshi_bold'>{value}</p>
        <p className='text-[1.5vw] max-md:text-[20px] font-satoshi_regular'>{text}</p>
    </div>
  )
}
