"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="hero-section pt-24 pb-8 lg:pt-36 mt-[60px] lg:mt-[90px]"
    >
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="w-full md:w-1/2 wow animate__animated animate__fadeInLeft">
            <h1 className="text-4xl leading-snug lg:text-6xl lg:leading-snug font-bold capitalize text-gray-900 mb-5">
              <span className="text-accent">Solar Energy</span>
              <br />
              is worth it again!
            </h1>
            <p className="text-base lg:text-lg lg:leading-loose text-stone-900 text-pretty mb-5">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
            </p>
            <button className="inline-flex items-center bg-blue-500 text-white rounded-full px-7 py-5 border border-blue-500 transition hover:bg-white hover:text-blue-500 group cursor-pointer">
              <Link href={"/"} className="flex items-center space-x-1">
                <span>Start Comparison</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 transition-transform transform ml-1 group-hover:translate-x-1 group-hover:text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </button>
          </div>
          <div className="w-full md:w-1/2 md:-mt-[73px] lg:-mt-[105px] rounded-2xl wow animate__animated animate__fadeInRight">
            {/* Swiper Container */}
            <Swiper
              className="w-full"
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              data-swiper-name="solar-swiper"
            >
              <SwiperSlide className="flex justify-start md:justify-center">
                <div className="image-wrpper w-[510px]">
                  <img
                    className="w-full h-full aspect-square rounded-2xl"
                    src="/images/solar-01.png"
                    alt="Solar panel 1"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-start md:justify-center">
                <div className="image-wrpper w-[510px]">
                  <img
                    className="w-full h-full aspect-square rounded-2xl"
                    src="/images/solar-02.png"
                    alt="Solar panel 2"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-start md:justify-center">
                <div className="image-wrpper w-[510px]">
                  <img
                    className="w-full h-full aspect-square rounded-2xl"
                    src="/images/solar-03.png"
                    alt="Solar panel 3"
                  />
                </div>
              </SwiperSlide>
              {/* Add Pagination */}
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
