"use client";
import Link from "next/link";

function ConsultationContent({ filteredData }) {
  return (
    <div className="consultant-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
      {filteredData.map((item) => (
        <div key={item.id} className="consultant-card">
          <div className="card-img relative w-full h-[530px] rounded-2xl overflow-hidden">
            <Link href="/comparison-details/01">
              <img
                className="w-full h-full transition hover:scale-105"
                src={item.img}
                alt="consultant image"
              />
            </Link>
            <div className="absolute top-0 left-0 w-full p-5 flex justify-between">
              <span className="bg-neutral-100 capitalize rounded-full px-6 py-2">
                {item.category}
              </span>
              <Link
                href="/comparison-details/01"
                className="bg-neutral-100 rounded-full w-10 h-10 flex justify-center items-center transition hover:bg-blue-500 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="currentColor"
                  className="w-5 h-5 transition group-hover:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="card-text mt-4">
            <div className="flex items-center gap-2 text-gray-500 mb-4">
              <span>{item.createdAt}</span>
              <span className="inline-block w-2 h-2 rounded-full bg-gray-400"></span>
              <span> {item.readTime} read </span>
            </div>
            <a href="/comparison-details/01">
              <h4 className="text-2xl font-semibold mb-3">{item.title}</h4>
            </a>
            <p className="text-base text-gray-500 line-clamp-3">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ConsultationContent;
