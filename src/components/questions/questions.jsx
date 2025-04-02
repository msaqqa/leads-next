"use client";
import { useState } from "react";

function Questions() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="questions bg-white pb-16">
      <div className="container wow animate__animated animate__fadeInUp">
        <div className="w-full md:w-3/4 mx-auto text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold capitalize mb-5">
            Frequently asked questions
          </h2>
          <p className="text-base lg:text-xl font-medium text-gray-500 text-pretty mb-12">
            These are the most commonly asked questions about Leads. Can't find
            what you're looking for?
            <span className="underline">Chat to our friendly team!</span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:gap-x-14 lg:gap-x-16 gap-y-8">
          <div className="w-full md:w-1/2">
            {/* <!--Tabs navigation--> */}
            <ul
              className="list-none flex flex-row flex-wrap gap-3 pl-5 mb-8"
              role="tablist"
              data-twe-nav-ref
            >
              <li role="presentation">
                <button
                  className={`inline-block  rounded-full w-32 text-center py-3 capitalize border border-neutral-900 transition-colors ${
                    activeTab === 1
                      ? "bg-neutral-900 text-white"
                      : "bg-white text-neutral-900 hover:bg-neutral-100 cursor-pointer"
                  }`}
                  onClick={() => setActiveTab(1)}
                >
                  General
                </button>
              </li>
              <li role="presentation">
                <button
                  className={`inline-block rounded-full w-32 text-center py-3 capitalize border border-neutral-900 transition-colors ${
                    activeTab === 2
                      ? "bg-neutral-900 text-white"
                      : "bg-white text-neutral-900 hover:bg-neutral-100 cursor-pointer"
                  }`}
                  onClick={() => setActiveTab(2)}
                >
                  Services
                </button>
              </li>
              <li role="presentation">
                <button
                  className={`inline-block rounded-full w-32 text-center py-3 capitalize border border-neutral-900 transition-colors ${
                    activeTab === 3
                      ? "bg-neutral-900 text-white"
                      : "bg-white text-neutral-900 hover:bg-neutral-100 cursor-pointer"
                  }`}
                  onClick={() => setActiveTab(3)}
                >
                  Dashboard
                </button>
              </li>
              <li role="presentation">
                <button
                  className={`inline-block rounded-full w-32 text-center py-3 capitalize border border-neutral-900 transition-colors ${
                    activeTab === 4
                      ? "bg-neutral-900 text-white"
                      : "bg-white text-neutral-900 hover:bg-neutral-100 cursor-pointer"
                  }`}
                  onClick={() => setActiveTab(4)}
                >
                  Privacy
                </button>
              </li>
            </ul>
            {/* <!--Tabs content--> */}
            <div className="mb-5">
              <div
                className={`opacity-100 transition-opacity duration-150 ease-linear tab-pane ${
                  activeTab === 1 ? "show active" : "hidden"
                }`}
                id="tabs-general"
                role="tabpanel"
                aria-labelledby="tabs-general-tab"
                data-twe-tab-active
              >
                <div id="accordionGeneral">
                  <div className="accordion-item">
                    <h2 id="headingOne">
                      <button
                        className="group relative flex w-full items-center bg-white text-neutral-900 text-lg md:text-2xl font-semibold rounded-t-2xl p-5 transition-colors [&:not([data-twe-collapse-collapsed])]:bg-neutral-100"
                        type="button"
                        data-twe-collapse-init
                        data-twe-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <span className="me-6 h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                        What do we do?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="!visible"
                      data-twe-collapse-item
                      data-twe-collapse-show
                      aria-labelledby="headingOne"
                      data-twe-parent="#accordionGeneral"
                    >
                      <div className="bg-white rounded-b-2xl p-5 pl-14 pt-0 transition-colors [&:not([data-twe-collapse-collapsed])]:bg-neutral-100">
                        We provide an innovative platform for price comparison,
                        helping you find the best options and prices
                        effortlessly.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="mb-0" id="headingTwo">
                      <button
                        className="group relative flex w-full items-center bg-white text-neutral-900 text-lg md:text-2xl font-semibold rounded-t-2xl p-5 transition-colors [&:not([data-twe-collapse-collapsed])]:bg-neutral-100"
                        type="button"
                        data-twe-collapse-init
                        data-twe-collapse-collapsed
                        data-twe-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <span className="me-6 h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                        Getting started with Leads!
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="!visible hidden"
                      data-twe-collapse-item
                      aria-labelledby="headingTwo"
                      data-twe-parent="#accordionGeneral"
                    >
                      <div className="bg-white rounded-b-2xl p-5 pl-14 pt-0 transition-colors [&:not([data-twe-collapse-collapsed])]:bg-neutral-100">
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header mb-0" id="headingThree">
                      <button
                        className="group relative flex w-full items-center bg-white text-neutral-900 text-lg md:text-2xl font-semibold rounded-t-2xl p-5 transition-colors [&:not([data-twe-collapse-collapsed])]:bg-neutral-100"
                        type="button"
                        data-twe-collapse-init
                        data-twe-collapse-collapsed
                        data-twe-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <span className="me-6 h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                        Is the service completely free?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="!visible hidden"
                      data-twe-collapse-item
                      aria-labelledby="headingThree"
                      data-twe-parent="#accordionGeneral"
                    >
                      <div className="bg-white rounded-b-2xl p-5 pl-14 pt-0 transition-colors [&:not([data-twe-collapse-collapsed])]:bg-neutral-100">
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header mb-0" id="headingFour">
                      <button
                        className="group relative flex w-full items-center bg-white text-neutral-900 text-lg md:text-2xl font-semibold rounded-t-2xl p-5 transition-colors [&:not([data-twe-collapse-collapsed])]:bg-neutral-100"
                        type="button"
                        data-twe-collapse-init
                        data-twe-collapse-collapsed
                        data-twe-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        <span className="me-6 h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                        How does support work?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="!visible hidden"
                      data-twe-collapse-item
                      aria-labelledby="headingFour"
                      data-twe-parent="#accordionGeneral"
                    >
                      <div className="bg-white rounded-b-2xl p-5 pl-14 pt-0 transition-colors [&:not([data-twe-collapse-collapsed])]:bg-neutral-100">
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element.
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <h2 className="accordion-header mb-0" id="headingFive">
                      <button
                        className="group relative flex w-full items-center bg-white text-neutral-900 text-lg md:text-2xl font-semibold rounded-t-2xl p-5 transition-colors [&:not([data-twe-collapse-collapsed])]:bg-neutral-100"
                        type="button"
                        data-twe-collapse-init
                        data-twe-collapse-collapsed
                        data-twe-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        <span className="me-6 h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                        Do you provide tutorials?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="!visible hidden"
                      data-twe-collapse-item
                      aria-labelledby="headingFive"
                      data-twe-parent="#accordionGeneral"
                    >
                      <div className="bg-white rounded-b-2xl p-5 pl-14 pt-0 transition-colors [&:not([data-twe-collapse-collapsed])]:bg-neutral-100">
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`opacity-100 transition-opacity duration-150 ease-linear tab-pane ${
                  activeTab === 2 ? "show active" : "hidden"
                }`}
                id="tabs-services"
                role="tabpanel"
                aria-labelledby="tabs-services-tab"
              >
                Tab 2 content
              </div>
              <div
                className={`opacity-100 transition-opacity duration-150 ease-linear tab-pane ${
                  activeTab === 3 ? "show active" : "hidden"
                }`}
                id="tabs-dashboard"
                role="tabpanel"
                aria-labelledby="tabs-services-tab"
              >
                Tab 3 content
              </div>
              <div
                className={`opacity-100 transition-opacity duration-150 ease-linear tab-pane ${
                  activeTab === 4 ? "show active" : "hidden"
                }`}
                id="tabs-privacy"
                role="tabpanel"
                aria-labelledby="tabs-privacy-tab"
              >
                Tab 4 content
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <video className="aspect-video rounded-2xl" controls>
              <source src="./images/instructional video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
