import PageEnterAnimation from "@/components/animations/PageEnterAnimation";
import ShimmerBorder from "@/components/button/ShimmerBorder";
import ConcernedPeople from "@/components/home/ConcernedPeople";
import PhoneEvolution from "@/components/home/PhoneEvolution";
import React from "react";



export default function HomePage() {

    const [activeVideo, setActiveVideo] = React.useState(1)
    const handleActiveVideo = () => {
        if (activeVideo < 4) {
            setActiveVideo(activeVideo + 1);
        } else {
            setActiveVideo(1)
        }

    }

    React.useEffect(() => {
        document.getElementById('homeVideo').addEventListener('ended', handleActiveVideo, true);
    }, [activeVideo])


    const getVideoText = () =>{
        switch (activeVideo) {
            case 1:
                return  <h1 className='text-[3.2vw] max-lg:px-10 max-lg:leading-[42px] max-md:text-[40px] px-20 max-sm:px-5 w-[80%] max-md:w-full leading-[4vw] text-center font-satoshi_bold tracking-[-2px] pb-20'>
                            {"Feeling like Big-Tech stole your"} <span className='text-themeColor'>precious time</span> ?
                         </h1>   
            case 2:
                return  <h1 className='text-[3.2vw] max-lg:px-10 max-lg:leading-[42px] max-md:text-[40px] px-20 max-sm:px-5 w-[80%] max-md:w-full leading-[4vw] text-center font-satoshi_bold tracking-[-2px] pb-20'>
                           <span className='text-themeColor'>Constant distractions </span>killing your productivity ?
                        </h1>   
            case 3:
                return  <h1 className='text-[3.2vw] max-lg:px-10 max-lg:leading-[42px] max-md:text-[40px] px-20 max-sm:px-5 w-[80%] max-md:w-full leading-[4vw] text-center font-satoshi_bold tracking-[-2px] pb-20'>
                           <span className='text-themeColor'>Screen overload </span>ruining your efficiency ?
                        </h1>      
            case 4:
                return  <h1 className='text-[3.2vw] max-lg:px-10 max-lg:leading-[42px] max-md:text-[40px] px-20 max-sm:px-5 w-[80%] max-md:w-full leading-[4vw] text-center font-satoshi_bold tracking-[-2px] pb-20'>
                           <span className='text-themeColor'>Screens disrupting </span>your peaceful sleep ?
                        </h1>   
            default:
                break;
        }
    }


    return (
        <PageEnterAnimation className="bg-[#040415] flex flex-col gap-10 justify-start items-center w-full py-10">
            <div className='flex flex-row max-md:flex-col max-md:gap-20 w-full items-center justify-between px-[100px] max-sm:px-5'>
                <div className='flex flex-col justify-start max-md:items-center gap-4 w-[65%] max-md:w-full mb-[200px] max-md:mb-0'>
                    <h1 className='text-[4.5vw] max-md:text-[42px] max-md:leading-[40px] w-[80%]  max-md:w-full max-md:text-center font-satoshi_bold leading-[4.5vw] tracking-[-0.1vw]'><span className=' text-themeColor'>{"Distraction"}</span> {" has become our "}<span className=' text-themeColor'>{"LifeStyle"}</span></h1>
                    <h2 className='text-[1.2vw] max-md:text-[18px] w-[80%] max-md:w-full max-md:text-center font-satoshi_regular'>{"Big-Tech spends billions hacking our minds. We are the ultimate solution to reclaim your attention"}</h2>
                    <div className="w-fit rounded-full px-4 py-2 max-sm:py-2 bg-white text-[16px] max-sm:text-[20px] font-satoshi_medium  text-[#040415]" >
                        <p>Try for free</p>
                    </div>
                </div>
                <img src='images/hand-holding-phone.png' className=' h-[45vw] max-sm:h-[300px]' />
            </div>
            <div className="w-full flex flex-col items-center gap-20 h-[100vh] max-md:h-[70vh]">
                <div className='w-[70%] max-md:w-[90%] max-md:rounded-[50px] h-[70%] max-md:h-[50%] rounded-[70px] overflow-hidden '>
                    <video playsInline key={activeVideo} autoPlay muted id="homeVideo" className="h-full w-full object-cover"  >
                        <source src={`/videos/screenTimeVideo${activeVideo}.mp4`} type="video/mp4" />
                    </video>
                </div>
                {getVideoText()}
               
            </div>
            <PhoneEvolution />
            <ConcernedPeople />

        </PageEnterAnimation>
    )
}
