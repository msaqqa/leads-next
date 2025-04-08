"use client";

function ContactInfo({ updateAnswer }) {
  return (
    <div className="step">
      <h3 className="text-lg font-medium text-center mb-8">
        Up to 4 offers found suitable for your area
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
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </span>
          {/* <!-- Input Field --> */}
          <input
            className="border rounded-2xl pl-12 pr-4 py-4 w-full focus:outline-none focus:ring"
            type="text"
            placeholder="First and Last Name"
            name="username"
          />
        </div>
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
                d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
              />
            </svg>
          </span>
          {/* <!-- Input Field --> */}
          <input
            className="border rounded-2xl pl-12 pr-4 py-4 w-full focus:outline-none focus:ring"
            type="email"
            placeholder="E-mail"
            name="email"
          />
        </div>
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
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </span>
          {/* <!-- Input Field --> */}
          <input
            className="border rounded-2xl pl-12 pr-4 py-4 w-full focus:outline-none focus:ring"
            type="tel"
            placeholder="Phone Number"
            name="phone"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
