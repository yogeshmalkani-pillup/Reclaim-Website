import ShimmerBorder from "@/components/button/ShimmerBorder";
import ConcernedPeople from "@/components/home/ConcernedPeople";
import PhoneEvolution from "@/components/home/PhoneEvolution";
import React from "react";



export default function HomePage() {

    const homeVideoRef = React.useRef(null)
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



    const loadVideoCb = React.useCallback(() => {
        if (homeVideoRef.current) {
            const video = homeVideoRef.current;
            video.controls = false;
            video.muted = true;
            video.autoplay = true;

            setTimeout(() => {
                const promise = video?.play();
                if (promise?.then) {
                    promise.then(() => { }).catch(() => { });
                }
            }, 0);
        }
    }, []);

    React.useEffect(() => {
        loadVideoCb();
    }, [loadVideoCb]);

    return (
        <div className='bg-[#040415] flex flex-col gap-10 justify-start items-center w-full py-10 mt-20'>
            <div className='flex flex-row max-md:flex-col max-md:gap-20 w-full items-center justify-between px-[100px] max-sm:px-5'>
                <div className='flex flex-col max-md:items-center gap-4 w-[65%] max-md:w-full'>
                    <h1 className='text-[4.5vw] max-md:text-[42px] max-md:leading-[40px] w-[80%]  max-md:w-full max-md:text-center font-satoshi_bold leading-[4.5vw] tracking-[-0.1vw]'><span className=' text-[#3CE8B5]'>{"Distraction"}</span> {" has become our "}<span className=' text-[#3CE8B5]'>{"LifeStyle"}</span></h1>
                    <h2 className='text-[1.2vw] max-md:text-[18px] w-[80%] max-md:w-full max-md:text-center font-satoshi_regular'>{"Big-Tech has hacked human psychology to make apps addictive"}</h2>
                    <ShimmerBorder containerClass="w-fit p-[2px]" textClass="px-14 py-4  max-sm:py-2 bg-white text-[30px] max-sm:text-[20px] font-satoshi_medium  text-[#040415]" >
                        <p>Reclaim It</p>
                    </ShimmerBorder>
                </div>
                <img src='images/hand-holding-phone.png' className=' h-[45vw] max-sm:h-[300px]' />
            </div>
            <div className='w-[70%] max-md:w-full max-md:rounded-[60px] rounded-[70px] overflow-hidden '>
                <video ref={homeVideoRef} playsInline key={activeVideo} autoPlay muted id="homeVideo"  >
                    <source src={`/videos/screenTimeVideo${activeVideo}.mp4`} type="video/mp4" />
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
