"use client";

function HeroPage({ heroImg, heroTitle }) {
  return (
    <div
      id="hero"
      className="bg-gray-100 wow animate__animated animate__fadeInUp"
    >
      <div className="relative h-[400px] mt-[60px] lg:mt-[90px] flex justify-center items-center">
        <div className="container">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroImg}`,
            }}
          ></div>
          <div className="relative z-10">
            <h1 className="text-white text-4xl md:text-6xl font-bold text-center capitalize">
              {heroTitle}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
