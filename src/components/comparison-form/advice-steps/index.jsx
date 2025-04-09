"use client";
import "./styles.css";
import LeadsButton from "@/components/leads/leads-button";

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
          <LeadsButton
            btnText="Learn more"
            btnLink={"/comparison-details/01"}
            btnPadding="px-10 py-3"
          />
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
