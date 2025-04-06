// "use client";
import Link from "next/link";

function Consultant({ consultant }) {
  return (
    <div className="relative h-[530px] rounded-2xl overflow-hidden transition [&>img]:hover:scale-105">
      <Link href="./consultation-details">
        <img
          className="absolute top-0 left-0 w-full h-full bg-gray-100 transition"
          src={consultant.img}
          alt="consultant image"
        />
        <div className="absolute top-4 right-4 w-10 h-10 bg-neutral-100 rounded-full flex justify-center items-center transition hover:bg-blue-500 group">
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
        </div>

        <div className="card-text absolute bottom-0 left-0 w-full h-1/2 p-6 bg-gradient-to-b from-transparent to-neutral-900 flex flex-col justify-end">
          <h4 className="text-2xl font-semibold text-white mb-3">
            {consultant.title}
          </h4>
          <p className="text-base font-normal text-gray-300">
            {consultant.desc}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Consultant;
