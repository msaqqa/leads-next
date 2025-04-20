import React from "react";

function Experts() {
  return (
    <div className="experts bg-white py-16">
      <div className="container flex flex-col md:flex-row md:gap-x-10 lg:gap-x-20 gap-y-8 wow animate__animated animate__fadeInUp">
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-blue-500 capitalize mb-5">
              Just a few steps to get expert advice
            </h2>
            <p className="text-base lg:text-lg font-normal text-gray-500 text-pretty mb-5">
              Define your needs Book a personal consultation with Leads to get
              the best solutions easily.
            </p>
          </div>
          <div className="steps grid grid-cols-2 gap-5">
            <div className="step p-2 lg:p-5 lg:pb-8 border-2 border-[#e5e7eb] rounded-xl">
              <div className="flex justify-between items-center mb-3">
                <img src="./images/svg/expert-01.svg" alt="" />
                <h3 className="text-4xl font-normal text-gray-400">01</h3>
              </div>
              <p className="text-xs leading-relaxed lg:text-base lg:leading-loose text-pretty">
                Identify personal needs online
              </p>
            </div>
            <div className="step p-2 lg:p-5 lg:pb-8 border-2 border-gray-200 rounded-xl">
              <div className="flex justify-between items-center mb-3">
                <img src="./images/svg/expert-02.svg" alt="" />
                <h3 className="text-4xl font-normal text-gray-400">02</h3>
              </div>
              <p className="text-xs leading-relaxed lg:text-base lg:leading-loose text-pretty">
                Select the desired date for the callback
              </p>
            </div>
            <div className="step p-2 lg:p-5 lg:pb-8 border-2 border-gray-200 rounded-xl">
              <div className="flex justify-between items-center mb-3">
                <img src="/images/svg/expert-03.svg" alt="" />
                <h3 className="text-4xl font-normal text-gray-400">03</h3>
              </div>
              <p className="text-xs lg:text-base leading-relaxed lg:leading-loose text-pretty">
                Personal advice from an expert
              </p>
            </div>
            <div className="step p-2 lg:p-5 lg:pb-8 border-2 border-gray-200 rounded-xl">
              <div className="flex justify-between items-center mb-3">
                <img src="/images/svg/expert-04.svg" alt="" />
                <h3 className="text-4xl font-normal text-gray-400">04</h3>
              </div>
              <p className="text-xs lg:text-base leading-relaxed lg:leading-loose text-pretty">
                Get top offers!
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            className="w-full min-[632px]: bg-gray-100 rounded-2xl"
            src="./images//expert.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Experts;
