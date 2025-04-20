"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

function HeroSlider({ data }) {
  return (
    <Swiper
      className="w-full"
      modules={[Pagination]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      data-swiper-name="solar-swiper"
    >
      {data.map((item) => (
        <SwiperSlide
          key={item.id}
          className="flex justify-start md:justify-center"
        >
          <div className="image-wrpper w-[510px]">
            <Image
              className="w-full h-full bg-gray-200 aspect-square rounded-2xl"
              src={item.imageUrl}
              width="510"
              height="510"
              alt={item.altText}
            />
          </div>
        </SwiperSlide>
      ))}
      {/* Add Pagination */}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
}

export default HeroSlider;
