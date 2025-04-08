"use client";
import Link from "next/link";
import "./styles.css";

const AdviceSteps = () => {
  return (
    <div className="advice-steps py-16">
      <div className="container flex flex-col md:flex-row gap-16">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl lg:text-3xl font-semibold text-blue-500 capitalize mb-5">
            Just a few steps to get expert advice
          </h2>
          <p className="text-base lg:text-lg text-gray-500 text-pretty mb-8">
            Define your needs Book a personal consultation with Leads to get the
            best solutions easily.
          </p>
          <ul className="list-none flex flex-wrap mb-4">
            {[
              "100% free and non-binding",
              "100% free and non-binding",
              "100% free and non-binding",
              "100% free and non-binding",
              "100% free and non-binding",
              "100% free and non-binding",
            ].map((item, index) => (
              <li
                key={index}
                className="pl-8 text-sm font-medium grow-0 shrink-0 lg:basis-1/2 mb-4 lg:mb-8"
              >
                {item}
              </li>
            ))}
          </ul>
          <button className="bg-blue-500 text-white border border-blue-500 rounded-full px-10 py-3 transition hover:bg-white hover:text-blue-500 hover:-translate-y-1 group cursor-pointer">
            <Link href={"/"} className="flex items-center space-x-1">
              <span>Learn more</span>
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
        <div className="w-full md:w-1/2">
          <img
            className="rounded-2xl"
            src="/images/advice-steps.png"
            alt="Advice Steps"
          />
        </div>
      </div>
    </div>
  );
};

export default AdviceSteps;
