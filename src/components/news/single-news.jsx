"use client";
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
        <button className="self-start bg-white text-blue-500 border border-blue-500 rounded-md px-6 py-3 transition hover:bg-blue-500 hover:text-white hover:-translate-y-1 group cursor-pointer">
          <Link href={"/"} className="flex items-center space-x-1">
            <span>Learn more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 transition-transform transform ml-1 group-hover:translate-x-1 group-hover:text-white"
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
    </div>
  );
}

export default SingleNews;
