import Image from "next/image";

export const RoadMap = () => {
  return (
    <div
      className="bg-[#160000] text-white px-20 flex flex-col py-10 items-center relative "
      id="roadmap"
    >
      <Image
        src={"./images/flower-frame.svg"}
        width={100}
        height={100}
        alt="flower-frame"
        className="w-screen absolute bottom-[-150px] opacity-10"
      />
      <Image
        src={"./images/roadmap.svg"}
        width={80}
        height={80}
        alt="roadmap"
      />
      <div className="flex gap-2 items-center justify-center mt-4">
        <Image
          src={"./images/logo.svg"}
          width={50}
          height={50}
          alt="log"
          className="w-[20px] h-[20px] md:w-[50px] md:h-[50px]"
        />
        <p className="text-[20px] md:text-[40px] text-center">
          Journey Ahead Roadmap
        </p>
        <Image
          src={"./images/logo.svg"}
          width={50}
          height={50}
          alt="log"
          className="w-[20px] h-[20px] md:w-[50px] md:h-[50px]"
        />
      </div>

      <div className="flex flex-row mt-6 w-full justify-center">
        <Image
          src={"./images/roadmapBackground.svg"}
          width={100}
          height={100}
          alt="roadmap_background"
          className="hidden md:flex md:w-[350px] md:h-[600px]"
        />
        <div className="flex flex-row gap-8">
          <div className="hidden md:flex flex-col items-center">
            <Image
              src={"./images/top_slider.svg"}
              width={15}
              height={15}
              alt="roadmap_background"
              className="mb-2"
            />
            <div className="bg-[#FFD188] w-[2px] h-full" />
            <Image
              src={"./images/down_slider.svg"}
              width={15}
              height={15}
              alt="roadmap_background"
              className="mt-2"
            />
          </div>
          <div className="flex flex-col justify-between h-fit md:h-[600px] gap-4 md:gap-0">
            <div className="flex flex-col bg-[#7A3738] w-full md:w-[350px] pt-4 rounded-[10px] overflow-hidden">
              <p className=" px-4">Step 01: Name</p>
              <p className="bg-[#5B1E1F] px-4 py-4 text-[12px] text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                onsectetur adipiscing elit, sed do Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do onsectetur adipiscing elit,
                sed do
              </p>
            </div>

            <div className="flex flex-col bg-[#7A3738] w-full md:w-[350px] pt-4 rounded-[10px] overflow-hidden">
              <p className=" px-4">Step 02: Name</p>
              <p className="bg-[#5B1E1F] px-4 py-4 text-[12px] text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                onsectetur adipiscing elit, sed do Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do onsectetur adipiscing elit,
                sed do
              </p>
            </div>

            <div className="flex flex-col bg-[#7A3738] w-full md:w-[350px] pt-4 rounded-[10px] overflow-hidden">
              <p className=" px-4">Step 03: Name</p>
              <p className="bg-[#5B1E1F] px-4 py-4 text-[12px] text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                onsectetur adipiscing elit, sed do Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do onsectetur adipiscing elit,
                sed do
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
