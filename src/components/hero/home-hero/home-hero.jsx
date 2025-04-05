"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

const tabs = [
  {
    id: 1,
    title: "Solar Energy Is Worth It Again!",
    subtitle: "Anim aute id magna aliqua ad ad non deserunt sunt...",
    buttonText: "Start Comparison",
    buttonLink: "/comparison",
    galleryImages: [
      { id: 1, imageUrl: "./images/solar-01.png", altText: "Image 1" },
      { id: 2, imageUrl: "./images/solar-02.png", altText: "Image 2" },
      { id: 3, imageUrl: "./images/solar-03.png", altText: "Image 3" },
    ],
  },
  {
    id: 2,
    title: "Heat is worth it again!",
    subtitle: "Anim aute id magna aliqua ad ad non deserunt sunt...",
    buttonText: "Start Comparison",
    buttonLink: "/comparison",
    galleryImages: [
      { id: 1, imageUrl: "./images/heat-01.png", altText: "Image 1" },
      { id: 2, imageUrl: "./images/heat-02.png", altText: "Image 2" },
      { id: 3, imageUrl: "./images/heat-03.png", altText: "Image 3" },
    ],
  },
  {
    id: 3,
    title: "Deposits Is Worth It Again!",
    subtitle: "Anim aute id magna aliqua ad ad non deserunt sunt...",
    buttonText: "Start Comparison",
    buttonLink: "/comparison",
    galleryImages: [
      { id: 1, imageUrl: "./images/deposits-01.png", altText: "Image 1" },
      { id: 2, imageUrl: "./images/deposits-02.png", altText: "Image 2" },
      { id: 3, imageUrl: "./images/deposits-03.png", altText: "Image 3" },
    ],
  },
];

const HomeHero = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [manualChange, setManualChange] = useState(false);

  useEffect(() => {
    if (manualChange) return; // إذا تم التغيير يدوياً، لا تقم بالتبديل التلقائي
    const interval = setInterval(() => {
      setActiveTab((prevTab) => {
        const nextIndex =
          (tabs.findIndex((tab) => tab.id === prevTab) + 1) % tabs.length;
        return tabs[nextIndex].id;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [manualChange]);

  const handleTabChange = (id) => {
    setActiveTab(id);
    setManualChange(true);
    // إعادة تفعيل التبديل التلقائي بعد فترة قصيرة
    setTimeout(() => setManualChange(false), 15000);
  };

  return (
    <div id="hero" className="hero-section pt-24 lg:pt-36 pb-8">
      <div className="container">
        {/* Tabs Navigation */}
        <ul className="w-full md:w-1/2 flex flex-row flex-wrap gap-3 mb-6 lg:mb-12 md:pr-12">
          {tabs.map((tab) => (
            <li key={tab.id} role="presentation">
              <button
                className={`flex gap-1.5 items-center capitalize rounded-full p-1.5 pr-5 transition-colors ${
                  activeTab === tab.id
                    ? "bg-blue-500 text-white"
                    : "bg-white/40 text-neutral-900 hover:bg-blue-200 cursor-pointer"
                }`}
                onClick={() => handleTabChange(tab.id)}
              >
                <Image
                  className="bg-blue-50 w-8 lg:w-10 rounded-full px-1.5 py-2"
                  src={`images/svg/solarSystem.svg`}
                  alt={tab.title}
                  width={40}
                  height={40}
                />
                <span>{tab.title.slice(0, 10)}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Tabs Content */}
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={activeTab === tab.id ? "block" : "hidden"}
          >
            <div className="flex flex-col md:flex-row justify-between items-start gap-12">
              <div className="w-full md:w-1/2">
                <h1 className="text-4xl leading-snug lg:text-6xl font-bold capitalize text-gray-900 mb-5">
                  <span className="text-accent">{tab.title.slice(0, 10)}</span>
                  <br /> {tab.title.slice(10)}
                </h1>
                <p className="text-base lg:text-lg text-stone-900 mb-5">
                  {tab.subtitle}
                </p>
                <button className="inline-flex items-center bg-blue-500 text-white rounded-full px-7 py-5 border border-blue-500 transition hover:bg-white hover:text-blue-500 group cursor-pointer">
                  <Link href={"/"} className="flex items-center space-x-1">
                    <span>{tab.buttonText}</span>
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
              <div className="w-full md:w-1/2 md:-mt-[73px] lg:-mt-[105px] rounded-2xl pb-6">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  className="hero-swiper w-full pb-8"
                >
                  {tab.galleryImages?.map((item) => (
                    <SwiperSlide
                      key={item.id}
                      className="flex justify-start md:justify-center"
                    >
                      <div className="image-wrapper h-[510px]">
                        <Image
                          className="w-full h-full bg-gray-100 aspect-square rounded-2xl"
                          src={item.imageUrl}
                          alt={item.altText}
                          width={510}
                          height={510}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeHero;
