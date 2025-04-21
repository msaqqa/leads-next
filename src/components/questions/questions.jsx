"use client";
import { useState } from "react";
import VideoPlayer from "../leads/video-player";

function Questions() {
  const items = [
    {
      id: 1,
      title: "What do we do?",
      content:
        "We provide an innovative platform for price comparison, helping you find the best options and prices effortlessly.",
    },
    {
      id: 2,
      title: "Getting started with Leads!",
      content:
        "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.",
    },
    {
      id: 3,
      title: "Is the service completely free?",
      content:
        "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.",
    },
    {
      id: 4,
      title: "How does support work?",
      content:
        "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.",
    },
    {
      id: 5,
      title: "Do you provide tutorials?",
      content:
        "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.",
    },
  ];

  const [activeTab, setActiveTab] = useState(1);
  const [openItem, setOpenItem] = useState(1);

  const toggleAccordion = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

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
                <div className="w-full max-w-2xl mx-auto">
                  {items.map((item) => (
                    <div key={item.id}>
                      <button
                        className={`group relative flex w-full items-cente gap-4 text-neutral-900 text-lg md:text-2xl font-semibold rounded-t-2xl p-5 transition-colors cursor-pointer ${
                          openItem === item.id ? "bg-neutral-100" : "bg-white"
                        }`}
                        onClick={() => toggleAccordion(item.id)}
                      >
                        <span
                          className={`transition-transform duration-200 ${
                            openItem === item.id ? "rotate-180" : "rotate-0"
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                        {item.title}
                      </button>
                      {openItem === item.id && (
                        <div
                          className={`rounded-b-2xl p-5 pl-14 pt-0 transition-colors ${
                            openItem === item.id ? "bg-neutral-100" : "bg-white"
                          }`}
                        >
                          {item.content}
                        </div>
                      )}
                    </div>
                  ))}
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
            <div className="aspect-video rounded-2xl bg-blue-50 overflow-hidden">
              <VideoPlayer
                src={"/images/instructional-video.mp4"}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
