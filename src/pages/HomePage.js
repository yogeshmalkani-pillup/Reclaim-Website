import ConcernedPeople from "@/components/home/ConcernedPeople";
import PhoneEvolution from "@/components/home/PhoneEvolution";



export default function HomePage() {
  return (
    <div className='bg-[#040415] flex flex-col gap-10 justify-start items-center w-full py-10'>
        
        <div className='flex flex-row max-md:flex-col max-md:gap-20 w-full items-center justify-between px-20 max-sm:px-5'>
            <div className='flex flex-col max-md:items-center gap-4 w-[60%] max-md:w-full'>
                <h1 className='text-[4vw] max-md:text-[42px] max-md:leading-[40px] w-[80%]  max-md:w-full max-md:text-center font-satoshi_bold leading-[4vw] tracking-[-0.1vw] pl-5'>{"Distraction has become our "}<span className=' text-[#3CE8B5]'>{"LifeStyle"}</span></h1>
                <h2 className='text-[1.2vw] max-md:text-[18px] w-[80%] max-md:w-full max-md:text-center font-satoshi_regular'>{"Big-tech has hacked human psychology to make apps \naddictive. Let’s fight it together with our wholesome app"}</h2>
                <button className='rounded-3xl text-[18px] w-fit font-satoshi_medium text-[#040415] bg-white px-6 py-2 border border-white-2'>Try it free</button>
            </div>
            <img src='images/hand-holding-phone.png' className=' h-[35vw] max-md:' />
            
       </div>
       <div className='px-20 max-sm:px-5 w-full flex flex-row justify-center'>
        <video className='w-[90%] max-md:w-full p rounded-3xl bg-white' autoPlay src={"/videos/videotesting.mp4"}  >
        </video>
       </div>
      
          <h1 className='text-[4vw] max-lg:px-10 max-lg:leading-[42px] max-md:text-[40px] px-20 max-sm:px-5 w-[60%] max-md:w-full leading-[65px] text-center font-satoshi_bold tracking-[-2px] pb-20'>
             {"Feeling like Big-Tech stole \nyour"} <span className='text-[#3CE8B5] '>precious time</span> ?
          </h1>
        

        <PhoneEvolution />
        <ConcernedPeople />
  
    </div>
  )
}
