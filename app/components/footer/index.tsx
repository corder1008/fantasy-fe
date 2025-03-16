import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-[#160000] p-4 text-center justify-center w-full flex flex-col items-center px-20">
      <h1 className="text-[#EF3F41] text-[40px]">Aerith Flower Shop</h1>
      <p className="text-gray-300 text-[12px] w-[400px] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lo em
        ipsum dolor sit amet, consectetur adip
      </p>
      <div className="flex flex-row gap-4 pt-4">
        <Image
          src={"./images/telegram.svg"}
          width={30}
          height={30}
          alt="telegram"
          className="cursor-pointer"
        />
        <Image
          src={"./images/twitter.svg"}
          width={30}
          height={30}
          className="cursor-pointer"
          alt="twitter"
        />
        <Image
          src={"./images/media.svg"}
          width={30}
          height={30}
          alt="media"
          className="cursor-pointer"
        />
      </div>
      <div className="w-full h-[2px] bg-white mt-4"></div>
      <div className="text-gray-300 mt-4 flex flex-row w-full justify-between">
        <p className="text-[14px]">AERITH FLOWER SHOP © 2024</p>
        <div>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy" className="ml-4">
            Privacy and Disclosure
          </a>
        </div>
      </div>
    </footer>
  );
};
