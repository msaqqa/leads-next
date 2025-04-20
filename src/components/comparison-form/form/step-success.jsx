"use client";

import Link from "next/link";

function StepSuccess() {
  return (
    <div className="step">
      <div className="w-full md:w-2/3 mx-auto text-center bg-white rounded-2xl p-16">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-700 mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </span>
        <h3 className="mb-5">Thank you for your interest!</h3>
        <p className="text-gray-500 mb-8">
          We will contact you by phone shortly to discuss suitable offers for
          your planned solar system.
        </p>
        <div>
          <Link href={"/"}>
            <button
              className="w-36 h-12 bg-white text-gray-500 border border-gray-500 transition hover:border-gray-400 rounded-lg mr-4 cursor-pointer"
              type="button"
            >
              Done
            </button>
          </Link>
          <Link href={"/"}>
            <button
              className="w-36 h-12 bg-white text-blue-500 border border-blue-500 transition hover:border-blue-500 rounded-lg cursor-pointer"
              type="button"
            >
              Our Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StepSuccess;
