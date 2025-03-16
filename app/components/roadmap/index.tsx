import Image from "next/image";

export const RoadMap = () => {
  return (
    <div className="bg-[#160000] text-white px-20 flex flex-col py-10 items-center">
      <Image
        src={"./images/roadmap.svg"}
        width={80}
        height={80}
        alt="roadmap"
      />
      <div className="flex gap-2 items-center justify-center mt-4">
        <Image src={"./images/logo.svg"} width={50} height={50} alt="log" />
        <p className="text-[40px]">Journey Ahead Roadmap</p>
        <Image src={"./images/logo.svg"} width={50} height={50} alt="log" />
      </div>

      <div className="flex flex-row mt-6 w-full justify-center">
        <Image
          src={"./images/roadmapBackground.svg"}
          width={100}
          height={100}
          alt="roadmap_background"
          className="w-[100px] h-[600px]"
        />
        <div className="flex flex-row gap-8">
          <div className="flex flex-col items-center">
            <Image
              src={"./images/top_slider.svg"}
              width={15}
              height={15}
              alt="roadmap_background"
            />
            <div className="bg-[#FFD188] w-[2px] h-full" />
            <Image
              src={"./images/down_slider.svg"}
              width={15}
              height={15}
              alt="roadmap_background"
            />
          </div>
          <div className="flex flex-col justify-between h-[600px]">
            <div className="flex flex-col bg-[#7A3738] w-[350px] pt-4 rounded-[10px] overflow-hidden">
              <p className=" px-4">Step 01: Name</p>
              <p className="bg-[#5B1E1F] px-4 py-2 text-[12px] text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                onsectetur adipiscing elit, sed do Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do onsectetur adipiscing elit,
                sed do
              </p>
            </div>

            <div className="flex flex-col bg-[#7A3738] w-[350px] pt-4 rounded-[10px] overflow-hidden">
              <p className=" px-4">Step 02: Name</p>
              <p className="bg-[#5B1E1F] px-4 py-2 text-[12px] text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                onsectetur adipiscing elit, sed do Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do onsectetur adipiscing elit,
                sed do
              </p>
            </div>

            <div className="flex flex-col bg-[#7A3738] w-[350px] pt-4 rounded-[10px] overflow-hidden">
              <p className=" px-4">Step 03: Name</p>
              <p className="bg-[#5B1E1F] px-4 py-2 text-[12px] text-gray-400">
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
