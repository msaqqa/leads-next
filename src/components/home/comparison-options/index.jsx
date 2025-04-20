"use client";

import OptionsList from "./options-list";

const optionsData = [
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
        <OptionsList data={optionsData} />
      </div>
    </div>
  );
}

export default ComparisonOptions;
