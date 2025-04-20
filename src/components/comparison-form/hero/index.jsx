"use client";
import LeadsButton from "@/components/leads/leads-button";
import HeroSlider from "@/components/leads/hero-slider";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

const sliderData = [
  {
    id: 1,
    imageUrl: "/images/solar-01.png",
    altText: "solar-01",
  },
  {
    id: 2,
    imageUrl: "/images/solar-02.png",
    altText: "solar-02",
  },
  {
    id: 3,
    imageUrl: "/images/solar-03.png",
    altText: "solar-03",
  },
];

const ComparisonHero = () => {
  const scrollToSection = () => {
    const targetElement = document.getElementById("form-section");
    if (targetElement) {
      targetElement.classList.add("pt-24");
    }
    targetElement?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      id="hero"
      className="hero-section pt-24 pb-8 lg:pt-36 mt-[60px] lg:mt-[90px] bg-gray-100"
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
            <LeadsButton
              btnText="Start Comparison"
              btnClick={scrollToSection}
            />
          </div>
          <div className="w-full md:w-1/2 md:-mt-[73px] lg:-mt-[105px] rounded-2xl wow animate__animated animate__fadeInRight">
            {/* Swiper Container */}
            <HeroSlider data={sliderData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonHero;
