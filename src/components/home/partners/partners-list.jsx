"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

function PartnersList({ data }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient)
    return (
      <div className="flex items-center justify-center animate-pulse">
        <p>Loading...</p>
      </div>
    );

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 8,
          spaceBetween: 25,
        },
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      grabCursor={true}
    >
      {data.map((item) => (
        <SwiperSlide className="flex justify-center h-[127px]">
          <img
            className="transition ease-in-out hover:scale-110 h-full bg-gray-100"
            src={item.img}
            alt=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default PartnersList;
