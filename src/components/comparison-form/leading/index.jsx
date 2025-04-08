"use client";

const LeadingSection = () => {
  return (
    <div className="py-16">
      <div className="container">
        <div className="mb-12">
          <p className="text-base lg:text-lg text-gray-500 text-pretty mb-4">
            Leading The Way In Building And Civil Construction
          </p>
          <h2 className="text-2xl lg:text-3xl font-semibold capitalize">
            We Are Ready For Solar Energy, All We Need Is To Use It Well!
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 md:gap-x-16 md:place-items-center">
          <div className="statistics">
            <div className="mb-10">
              <h4 className="text-6xl font-medium text-blue-500 mb-2">6,154</h4>
              <p className="text-lg text-gray-500">
                Projects Completed In Last 5 Years
              </p>
            </div>
            <div className="mb-10">
              <h4 className="text-6xl font-medium text-blue-500 mb-2">2,512</h4>
              <p className="text-lg text-gray-500">
                Qualified Employees & Workers With Us
              </p>
            </div>
            <div className="mb-10">
              <h4 className="text-6xl font-medium text-blue-500 mb-2">241</h4>
              <p className="text-lg text-gray-500">
                Awards Milestones Awarded To Us
              </p>
            </div>
          </div>
          <div className="leading-video md:col-span-2 mb-10 lg:mb-0">
            <video src="/images/leading.mp4" class="rounded-2xl" controls>
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="leading-info md:col-span-3 lg:col-span-2">
            <img
              className="mb-10"
              src="/images/svg/leading.svg"
              alt="leading-icon"
            />
            <h6 className="text-base font-semibold mb-8">
              We drive the transition to more sustainable, reliable, and
              affordable energy systems. With our innovative technologies, we
              energize society, that’s our aim!
            </h6>
            <p className="text-[15px] text-gray-500 mb-4">
              The increase in extreme weather events and rising sea levels are
              unmistakable signs of climate change. Roughly 850 million people
              still live without access to electricity, which is the foundation
              of sustainable development.
            </p>
            <p className="text-[15px] text-gray-500 mb-4">
              How can we meet the growing demand for electricity while
              protecting our climate and make planet a better place?
            </p>
            <button className="mt-4 bg-blue-500 text-white border border-blue-500 rounded-full px-10 py-3 transition hover:bg-white hover:text-blue-500 hover:-translate-y-1 [&>svg]:text-white [&>svg]:hover:text-blue-500 [&>svg]:hover:translate-x-2">
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 inline-block ml-1 transition"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Leading Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-16">
          <div className="features-card bg-[#FFF9F1] px-5 py-6 rounded-2xl">
            <img
              className="mb-4"
              src="/images/svg/leadingFeature-01.svg"
              alt="Leading Feature"
            />
            <h4 className="text-lg font-medium mb-2">Pleasures of the body</h4>
            <p className="text-sm text-gray-500 line-clamp-3">
              They are either the result of some labor, or they are the result
              of some labor, except as some
            </p>
          </div>
          <div className="features-card bg-[#EDF6FD] px-5 py-6 rounded-2xl">
            <img
              className="mb-4"
              src="/images/svg/leadingFeature-02.svg"
              alt="Leading Feature"
            />
            <h4 className="text-lg font-medium mb-2">Explicabo consectetur</h4>
            <p className="text-sm text-gray-500 line-clamp-3">
              Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab
              aut inventore
            </p>
          </div>
          <div className="features-card bg-[#E8F8F1] px-5 py-6 rounded-2xl">
            <img
              className="mb-4"
              src="/images/svg/leadingFeature-03.svg"
              alt="Leading Feature"
            />
            <h4 className="text-lg font-medium mb-2">Pleasures of the body</h4>
            <p className="text-sm text-gray-500 line-clamp-3">
              They are either the result of some labor, or they are the result
              of some labor, except as some
            </p>
          </div>
          <div className="features-card bg-[#FFF6F6] px-5 py-6 rounded-2xl">
            <img
              className="mb-4"
              src="/images/svg/leadingFeature-04.svg"
              alt="Leading Feature"
            />
            <h4 className="text-lg font-medium mb-2">Pleasures of the body</h4>
            <p className="text-sm text-gray-500 line-clamp-3">
              They are either the result of some labor, or they are the result
              of some labor, except as some
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadingSection;
