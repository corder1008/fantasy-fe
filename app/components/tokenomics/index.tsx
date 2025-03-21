"use client";

import Image from "next/image";
import { TokenomicsChart } from "../chart";

export const Tokenomics = () => {
  return (
    <div className="bg-[#160000] text-white px-20 flex flex-col py-10 items-center relative pt-20">
      <Image
        src={"./images/tokenomics.svg"}
        width={80}
        height={80}
        alt="tokenomics"
        
      />
      <div className="flex gap-2 items-center justify-center mt-4">
        <Image
          src={"./images/logo.svg"}
          width={50}
          height={50}
          alt="log"
          className="w-[20px] h-[20px] md:w-[50px] md:h-[50px]"
        />
        <p className="text-[20px] md:text-[40px]">AER Tokenomics</p>
        <Image
          src={"./images/logo.svg"}
          width={50}
          height={50}
          alt="log"
          className="w-[20px] h-[20px] md:w-[50px] md:h-[50px]"
        />
      </div>
      <div className="flex flex-row gap-4 pt-8">
        <TokenomicsChart />
        <div className="flex gap-4 flex-col items-center justify-center">
          <div>
            <p className="font-semibold text-[22px]">Private Sale (75%)</p>
            <p className="text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </div>
          <div>
            <p className="font-semibold text-[22px]">Reserve Sale (20%)</p>
            <p className="text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </div>
          <div>
            <p className="font-semibold text-[22px]">Public Sale (10%)</p>
            <p className="text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </div>
          <div>
            <p className="font-semibold text-[22px]">Marketing Sale (20%)</p>
            <p className="text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
