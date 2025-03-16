import Image from "next/image";
import { ShopImageCard } from "../shopImageCard";

export const ShopUs = () => {
  return (
    <div className="bg-[#160000] text-white px-20 flex flex-col py-10 items-center">
      <Image
        src={"./images/shop_us.svg"}
        width={80}
        height={80}
        alt="shop_us"
      />
      <div className="flex gap-2 items-center justify-center mt-4">
        <Image src={"./images/logo.svg"} width={25} height={25} alt="log" />
        <p className="text-[40px]">The Enchanted Flower Shop</p>
        <Image src={"./images/logo.svg"} width={25} height={25} alt="log" />
      </div>

      <div className="flex flex-row mt-6 gap-4">
        <ShopImageCard imageUrl="./images/shop_image1.svg" text="Pink Cosmos" />
        <ShopImageCard
          imageUrl="./images/shop_image2.svg"
          text="White Cosmos"
        />
        <ShopImageCard
          imageUrl="./images/shop_image3.svg"
          text="Purple Cosmos"
        />
      </div>
    </div>
  );
};
