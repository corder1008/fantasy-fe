import Image from "next/image";

export const Summary = () => {
  return (
    <div className="flex flex-row bg-gradient-to-b from-[#1A0001] to-[#330001] px-20 pt-40 justify-between">
      <div className="flex">
        <div className="flex justify-items-start items-start">
          <Image
            src={"./images/step-logo.svg"}
            width={29}
            height={44}
            alt="step_logo"
          />
        </div>
        <div className="relative  text-white px-6 ">
          <div className="max-w-3xl mx-auto pt-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Step into the Enchanted
              <br />
              <div className="flex gap-2">
                <p className="text-[#CC3F41]">World of Aerith</p>
                <Image
                  src={"./images/logo.svg"}
                  width={29}
                  height={44}
                  alt="step_logo"
                />
              </div>
            </h1>
            <p className="text-lg mb-8 text-gray-300 max-w-[700px]">
              Immerse yourself in a magical world where adventure meets
              tranquility. Join us on an epic journey filled with enchanting
              landscapes, mysterious quests, and the charm of a unique flower
              shop. Explore, trade, and thrive in Aerith!
            </p>
            <button className="bg-[#CC3F41] hover:bg-[#a63234] text-[#FFD188] text-[15px] font-semibold px-6 py-4 rounded-full transition-colors duration-200 border-2">
              Buy Flowers
            </button>
          </div>
        </div>
      </div>
      <div className="flex relative">
        <div className="absolute mx-auto">
          <Image
            src={"/images/back-she.png"}
            width={300}
            height={300}
            alt="background image"
            className="w-[300px] h-[300px]" // Changed to relative positioning
          />
        </div>
        <Image
          src={"./images/final-fantasy-she.svg"}
          width={335}
          height={400}
          alt="background image"
          className="relative"
        />
      </div>
    </div>
  );
};
