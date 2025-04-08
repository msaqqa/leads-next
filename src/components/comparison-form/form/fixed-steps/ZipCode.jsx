"use client";

function ZipCode({ updateAnswer }) {
  return (
    <div className="step">
      <h3 className="text-lg font-medium text-center mb-8">
        Where should the solar system be installed?
      </h3>
      <div className="text-center bg-white rounded-2xl py-16 px-8">
        <div className="w-full md:w-1/2 mx-auto relative mb-5 flex items-center">
          {/* <!-- Icon Container --> */}
          <span className="absolute left-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </span>
          {/* <!-- Input Field --> */}
          <input
            className="border rounded-2xl pl-12 pr-4 py-4 w-full focus:outline-none focus:ring"
            type="text"
            placeholder="zip code"
            id="zipCode"
            name="zipCode"
          />
        </div>

        <label className="text-sm" for="zipCode">
          Please enter the zip code of your home address.
        </label>
      </div>
    </div>
  );
}

export default ZipCode;
