import Scroller from "../Infinite-scroll/Scroller";
import { Leaders } from "@/utils/Contants";

export default function UsedByLeaders() {
    return (
        <div className="w-full mt-[200px] max-md:mt-[100px] flex flex-col items-center justify-center gap-[50px]">
            <p className='text-[2.5vw] max-lg:text-[30px] font-satoshi_bold'>Used by <span className='text-[#3CE8B5]'>leaders</span> at</p>
            <Scroller direction="right" speed="slow">
                {
                    Leaders.map((leader) => {
                        return <img key={leader} className="w-[200px] max-sm:w-[150px] object-contain" src={`/images/leaders/${leader}`} alt="" />

                    })
                }
            </Scroller>
        </div>
    );
}
