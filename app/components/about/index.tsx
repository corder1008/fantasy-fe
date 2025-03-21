import Image from "next/image";
import { ImageCard } from "../imageCard";

export const AboutUs = () => {
  return (
    <div
      className="bg-[#160000] text-white px-20 flex flex-col py-10 items-center"
      id="about"
    >
      <Image
        src={"./images/about_us.svg"}
        width={80}
        height={80}
        alt="about_us"
      />
      <div className="flex gap-2 items-center justify-center mt-4">
        <Image src={"./images/logo.svg"} width={25} height={25} alt="log" />
        <p className="text-[25px] md:text-[40px] text-center">
          Unveiling Aeriths Magic
        </p>
        <Image src={"./images/logo.svg"} width={25} height={25} alt="log" />
      </div>

      <div className="flex flex-col lg:flex-row mt-6 gap-10">
        <ImageCard
          imageUrl="./images/flower_shop.svg"
          text="Run your own flower shop where you can grow, harvest, and trade a
              variety of magical flowers. Personalize your shop's appearance,
              expand your inventory and attract customers."
          topic="Flower Shop"
        />
        <ImageCard
          imageUrl="./images/flower_shop.svg"
          text="Embark on a series of captivating quests that take you through
            magical landscapes, challenging puzzles, and epic battles. Each
            adventure is meticulously designed to immerse you in the rich."
          topic="Epic Battles"
        />
        <ImageCard
          imageUrl="./images/flower_shop.svg"
          text="Engage in a dynamic in-game economy powered by the native token,
            AER. Earn, trade, and spend AER through various activities such as
            completing quests, upgrading your shop."
          topic="Native Token"
        />
      </div>
    </div>
  );
};
