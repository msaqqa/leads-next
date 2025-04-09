"use client";
import LeadsButton from "@/components/leads/leads-button";
import Link from "next/link";

function SingleNews({ data }) {
  return (
    <div className="news-card bg-white p-4 flex flex-col lg:flex-row justify-center border border-gray-200 rounded-2xl gap-x-5 gap-y-8">
      <div className="w-42 h-50 flex-shrink-0">
        <img
          className="max-w-full rounded-xl transition ease-in-out hover:scale-105"
          src={data.img}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between">
        <h3 className="text-2xl font-medium mb-2">{data.title}</h3>
        <p className="text-sm font-normal text-gray-500 line-clamp-3 mb-4">
          {data.desc}
        </p>
        <LeadsButton
          btnText="Learn more"
          btnLink={"comparison-details/01"}
          btnPadding="px-6 py-3"
          btnRadius="rounded-md"
          btnColor="reverse"
        />
      </div>
    </div>
  );
}

export default SingleNews;
