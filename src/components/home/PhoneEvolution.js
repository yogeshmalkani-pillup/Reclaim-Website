import React from "react";

export default function PhoneEvolution() {
    return (
        <div className="w-full flex flex-row max-lg:flex-col  items-center  gap-[100px] py-[200px] max-sm:py-[100px] px-20 max-sm:px-5 bg-[#EFF0FF] bg-opacity-5">
            <div className="w-[50%]  max-lg:w-[90%] max-sm:w-full flex flex-row ">
                <div className="w-[90%] max-lg:w-full rounded-[50px] bg-[#3CE8B5] bg-opacity-5 p-8 max-sm:p-4">
                    <div className="flex flex-col gap-[50px] justify-between rounded-[50px] h-full bg-[#2EFFF5] bg-opacity-25 ">
                        <p className="text-[2vw] max-md:text-[20px] pl-14 py-10 max-md:pl-7 max-md:py-5 w-[80%] mt-10 font-satoshi_medium">
                            Phone Evolution from{" "}
                            <span className="text-[#3CE8B5]">1995-2024</span>
                        </p>
                        <img src="images/phone-evolution.png" className="w-full pl-14 rounded-br-[50px]" />
                    </div>
                </div>
            </div>

            <div className="w-[50%] max-lg:w-full flex flex-col gap-10">
                <p className="text-[3vw] max-lg:text-[30px] font-satoshi_bold w-[90%] max-">
                    {"Phones were made to \nmake us more"}{" "}
                    <span className="text-[#3CE8B5]">productive</span>
                </p>
                <div className="font-satoshi_medium max-lg:text-[20px]  text-[1.8vw]">
                    <p>1995</p>
                    <p>90% Tool of Productivity | 10% Tool of Distraction</p>
                </div>
                <div className="font-satoshi_medium max-lg:text-[20px] text-[1.8vw]">
                    <p>2024</p>
                    <p>10% Tool of Productivity | 90% Tool of Distraction</p>
                </div>
            </div>
        </div>
    );
}
