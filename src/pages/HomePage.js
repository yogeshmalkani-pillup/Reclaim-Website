import { MovingBorderButton } from "@/components/button/MovingBorder";
import ConcernedPeople from "@/components/home/ConcernedPeople";
import PhoneEvolution from "@/components/home/PhoneEvolution";
import React from "react";



export default function HomePage() {

    const [activeVideo, setActiveVideo] = React.useState(1)
    const handleActiveVideo = () => {
        if (activeVideo < 3) {
            setActiveVideo(activeVideo + 1);
        } else {
            setActiveVideo(1)
        }

    }

    React.useEffect(() => {
        document.getElementById('homeVideo').addEventListener('ended', handleActiveVideo, false);
    }, [])

    return (
        <div className='bg-[#040415] flex flex-col gap-10 justify-start items-center w-full py-10 mt-20'>
            <div className='flex flex-row max-md:flex-col max-md:gap-20 w-full items-center justify-between px-[100px] max-sm:px-5'>
                <div className='flex flex-col max-md:items-center gap-4 w-[65%] max-md:w-full'>
                    <h1 className='text-[4.5vw] max-md:text-[42px] max-md:leading-[40px] w-[80%]  max-md:w-full max-md:text-center font-satoshi_bold leading-[4.5vw] tracking-[-0.1vw] pl-5'>{"Distraction has become our "}<span className=' text-[#3CE8B5]'>{"LifeStyle"}</span></h1>
                    <h2 className='text-[1.2vw] max-md:text-[18px] w-[80%] max-md:w-full max-md:text-center font-satoshi_regular'>{"Big-tech has hacked human psychology to make apps \naddictive. Let’s fight it together with our wholesome app"}</h2>
                    <MovingBorderButton containerClassName="rounded-[120px] p-[2px] w-fit " className=" bg-white rounded-[120px] px-10 py-4 w-full ">
                        <p className=" text-[30px] font-satoshi_medium text-[#040415]">Try it free</p>
                    </MovingBorderButton>

                </div>
                <img src='images/hand-holding-phone.png' className=' h-[45vw] max-md:' />
            </div>
            <div className='px-20 max-sm:px-5 w-full flex flex-row justify-center'>
                <video key={activeVideo} className='w-[80%]  max-md:w-full  rounded-[120px] bg-white' muted autoPlay id="homeVideo"  >
                    <source src={`/videos/Video${activeVideo}.mp4`} type="video/mp4" />
                </video>
            </div>
            <h1 className='text-[4.5vw] max-lg:px-10 max-lg:leading-[42px] max-md:text-[40px] px-20 max-sm:px-5 w-[80%] max-md:w-full leading-[4.5vw] text-center font-satoshi_bold tracking-[-2px] pb-20'>
                {"Feeling like Big-Tech stole \nyour"} <span className='text-[#3CE8B5] '>precious time</span> ?
            </h1>

            <PhoneEvolution />
            <ConcernedPeople />


        </div>

    )
}
