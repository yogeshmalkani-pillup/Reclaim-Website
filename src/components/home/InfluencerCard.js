"use client";
import React from "react";
import { GlowingBorderCard } from "../cards/GlowingCardBorders";

export default function InfluencerCard({ imageName, quote,name }) {
    return (
        <GlowingBorderCard containerClassName="w-[20%] max-lg:w-[40%] max-sm:w-full rounded-[50px] p-[2px] " className="w-full h-full rounded-[50px] py-10 px-5 flex flex-col gap-10 items-stretch bg-zinc-900">
            <img className="h-[60%] object-contain" src={`images/people/${imageName}`} />
            <div className="flex flex-col justify-between h-[40%]">
                <p className="font-satoshi_regular text-[1.125vw]  max-lg:text-[18px] ">
                    {quote}
                </p>
                <p className="font-satoshi_regular text-[0.8vw]  max-lg:text-[18px] w-full text-end ">~{name}</p>
            </div>
        </GlowingBorderCard>
    );

}
