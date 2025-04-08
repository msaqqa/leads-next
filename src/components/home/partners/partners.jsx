"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Partners() {
  return (
    <div className="partners bg-blue-50 mt-16 py-16">
      <div className="container wow animate__animated animate__fadeInUp">
        <h2 className="text-2xl lg:text-4xl font-semibold capitalize mb-5 text-center">
          Our partners
        </h2>
        <p className="text-base leading-relaxed lg:text-xl lg:leading-loose font-normal text-pretty mb-8 text-center">
          We guarantee high-quality services that build trust and meet our
          clients' needs
        </p>
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
          <SwiperSlide className="flex justify-center">
            <img
              className="transition ease-in-out hover:scale-110"
              src="./images/partners/partner-01.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <img
              className="transition ease-in-out hover:scale-110"
              src="./images/partners/partner-02.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <img
              className="transition ease-in-out hover:scale-110"
              src="./images/partners/partner-03.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <img
              className="transition ease-in-out hover:scale-110"
              src="./images/partners/partner-04.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <img
              className="transition ease-in-out hover:scale-110"
              src="./images/partners/partner-05.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <img
              className="transition ease-in-out hover:scale-110"
              src="./images/partners/partner-06.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <img
              className="transition ease-in-out hover:scale-110"
              src="./images/partners/partner-07.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <img
              className="transition ease-in-out hover:scale-110"
              src="./images/partners/partner-08.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Partners;
