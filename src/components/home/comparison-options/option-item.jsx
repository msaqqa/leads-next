"use client";

import LeadsButton from "@/components/leads/leads-button";

function OptionItem({ item }) {
  return (
    <div className="comparison-card bg-white rounded-xl px-5 md:px-12 py-5">
      <img className="mb-5" src={item.icon} alt="" />
      <h3 className="text-2xl font-medium capitalize mb-2">{item.title}</h3>
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
  );
}

export default OptionItem;
