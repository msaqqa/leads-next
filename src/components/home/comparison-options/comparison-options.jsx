"use client";

import LeadsButton from "@/components/leads/leads-button";
import Link from "next/link";

const options = [
  {
    id: 1,
    icon: "./images/svg/solarSystem.svg",
    title: "Solar System",
    dsc: "Discover the best home solar solutions and attractive finance opportunities with Leads.",
  },
  {
    id: 2,
    icon: "./images/svg/HeatPump.svg",
    title: "Heat Pump",
    dsc: "Discover home heat pump solutions and attractive finance opportunities with Leads.",
  },
  {
    id: 3,
    icon: "./images/svg/HealthInsurance.svg",
    title: "Health Insurance",
    dsc: "Enjoy world-class healthcare with private health insurance tailored to Leads.",
  },
  {
    id: 4,
    icon: "./images/svg/FixedAndDailyDeposits.svg",
    title: "Fixed And Daily Deposits",
    dsc: "Make an informed decision with Leads and ensure a secure and financially stable future today.",
  },
];

function ComparisonOptions() {
  return (
    <div className="comparison bg-neutral-100 py-16">
      <div className="container wow animate__animated animate__fadeInUp">
        <h2 className="text-2xl lg:text-4xl font-semibold capitalize mb-5 text-center">
          Comparison options at a glance
        </h2>
        <p className="text-base leading-relaxed lg:text-xl lg:leading-loose font-normal text-pretty mb-10 text-center">
          Explore available solutions and compare options to find the best
          easily
        </p>
        <div className="comparison-cards grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-8">
          {options.map((item) => (
            <div
              key={item.id}
              className="comparison-card bg-white rounded-xl px-5 md:px-12 py-5"
            >
              <img className="mb-5" src={item.icon} alt="" />
              <h3 className="text-2xl font-medium capitalize mb-2">
                {item.title}
              </h3>
              <p className="text-sm font-normal text-gray-500 leading-relaxed text-pretty line-clamp-3 mb-4">
                {item.dsc}
              </p>
              <ul className="list-none mb-5">
                <li className="pl-12 mb-4">No contribution obligation.</li>
                <li className="pl-12 mb-4">No contribution obligation.</li>
              </ul>
              <div>
                <LeadsButton
                  btnText={"Start Comparison"}
                  btnLink={"/comparison-form/02"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ComparisonOptions;
