"use client";
import React from "react";
import { GlowingBorderCard } from "../cards/GlowingCardBorders";
import { MovingBorderButton } from "../button/MovingBorder";

export default function InfluencerCard({ imageName, quote, key }) {
  return ( 
    // <MovingBorderButton>

    // </MovingBorderButton>
    <GlowingBorderCard containerClassName="w-[25%] max-md:w-[40%] max-sm:w-full rounded-[50px] p-[2px] " className="w-full h-full  rounded-[50px] py-10 px-5 flex flex-col justify-between items-stretch bg-zinc-900">
        <img className="h-[70%] object-contain" src={`images/${imageName}`} />
        <p className="font-satoshi_regular text-[1.125vw] max-md:text-[18px] ">
          {quote}
        </p>
    </GlowingBorderCard>
  );
 
}
