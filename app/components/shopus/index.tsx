"use client";
import Image from "next/image";
import { ShopImageCard } from "../shopImageCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
        <p className="text-[20px] md:text-[40px] text-center">
          The Enchanted Flower Shop
        </p>
        <Image src={"./images/logo.svg"} width={25} height={25} alt="log" />
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween:0,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200:{
            slidesPerView: 4,
            spaceBetween: 30,
          }
        }}
      >
        <SwiperSlide>
          <ShopImageCard
            imageUrl="./images/background1.svg"
            text="Pink Cosmos"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ShopImageCard
            imageUrl="./images/background2.svg"
            text="White Cosmos"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ShopImageCard
            imageUrl="./images/background3.svg"
            text="Purple Cosmos"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ShopImageCard
            imageUrl="./images/background4.svg"
            text="Purple Cosmos"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ShopImageCard
            imageUrl="./images/background5.svg"
            text="Purple Cosmos"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ShopImageCard
            imageUrl="./images/background6.svg"
            text="Purple Cosmos"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ShopImageCard
            imageUrl="./images/background7.svg"
            text="Purple Cosmos"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
