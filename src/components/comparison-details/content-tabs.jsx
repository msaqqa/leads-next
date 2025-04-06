"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const tabs = [
  {
    id: "tabs-01",
    label: "What is a hydraulic switch?",
  },
  {
    id: "tabs-02",
    label: "Function of a hydraulic switch",
  },
  {
    id: "tabs-03",
    label: "Another Topic",
  },
];

function ContentTabs() {
  const [activeTab, setActiveTab] = useState("tabs-01");
  const contentStartRef = useRef(null);

  // Switch between tabs
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    // Scroll to the start of the tab content
    setTimeout(() => {
      if (contentStartRef.current) {
        const yOffset = -90 + -40; // navHeight + paddingSection
        const y =
          contentStartRef.current.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <div className="content-tabs-section pt-10 pb-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-x-5">
          {/* Tabs navigation */}
          <div className="order-1 md:order-2">
            <div className="lg:sticky lg:top-[110px] lg:right-0">
              <div className="bg-neutral-100 flex justify-start items-center gap-4 rounded-2xl px-8 py-6 mb-8">
                <Image
                  src="/images/avatar.png"
                  className="rounded-full"
                  alt="Avatar"
                  width={80}
                  height={80}
                />
                <div>
                  <h5 className="text-xl font-medium leading-tight mb-2">
                    Sabine M
                  </h5>
                  <p className="text-gray-500">42 Jahre alt, aus Berlin</p>
                </div>
              </div>
              <div className="bg-neutral-100 p-6 rounded-2xl">
                <h4 className="text-2xl font-semibold">Contents:</h4>
                <ul
                  className="flex list-none flex-col flex-wrap ps-0"
                  role="tablist"
                >
                  {tabs.map((tab, index) => (
                    <li key={tab.id} role="presentation" className="flex-grow">
                      <button
                        onClick={() => handleTabChange(tab.id)}
                        className={`my-2 block pb-3.5 pt-4 text-lg font-medium capitalize leading-tight 
                          ${
                            index === tabs.length - 1
                              ? ""
                              : "border-b border-gray-200"
                          }
                          ${
                            activeTab === tab.id
                              ? "text-blue-500"
                              : "cursor-pointer"
                          }`}
                        aria-controls={tab.id}
                        aria-selected={activeTab === tab.id ? "true" : "false"}
                        role="tab"
                      >
                        {tab.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Tabs content */}
          <div className="my-2 col-span-2 order-2 md:order-1">
            <div ref={contentStartRef}>
              {/* Tab 1 Content */}
              <div
                className={`transition-opacity duration-150 ease-linear ${
                  activeTab === "tabs-01" ? "block" : "hidden"
                }`}
                id="tabs-01"
                role="tabpanel"
                aria-labelledby="tabs-home-tab03"
              >
                <div className="mb-10">
                  <h2 className="text-2xl font-semibold mb-8">
                    What is a hydraulic switch?
                  </h2>
                  <p className="tex-lg text-pretty">
                    Solar energy is one of the most important renewable energy
                    sources that helps factories achieve sustainability and
                    reduce operating costs. With the increasing demand for clean
                    and environmentally friendly energy sources, solar energy
                    has become an ideal choice for many industries. This article
                    reviews the most prominent advantages of using solar energy
                    in factories.
                  </p>
                </div>
                <div className="mb-10">
                  <h2 className="text-2xl font-semibold mb-8">
                    System highlights:
                  </h2>
                  <p className="tex-lg text-pretty mb-5">
                    The hydraulic separator is a central component of efficient
                    heating technology. It plays a key role in environmentally
                    friendly heat pumps. Its job is to hydraulically separate
                    the heat generator circuit from the heating circuit.
                  </p>
                  <h3 className="text-lg font-medium mb-5">
                    Reduce energy costs:
                  </h3>
                  <ul className="list-disc list-inside text-lg space-y-5 mb-8">
                    <li className="flex items-start gap-x-2">
                      <span className="shrink-0 text-2xl leading-tight">•</span>
                      <span className="flex-1">
                        In the optimal state, when the volume flows are
                        balanced, the heat reaches almost all of the heating
                        circuit. This maximizes the efficiency of the system.
                      </span>
                    </li>
                    <li className="flex items-start gap-x-2">
                      <span className="shrink-0 text-2xl leading-tight">•</span>
                      <span className="flex-1">
                        In contrast, a discrepancy in the flows leads to a
                        reduction in efficiency. Either the heat does not arrive
                        or unnecessary flow is mixed. This reduces the
                        performance of the heat pump.
                      </span>
                    </li>
                    <li className="flex items-start gap-x-2">
                      <span className="shrink-0 text-2xl leading-tight">•</span>
                      <span className="flex-1">
                        A return flow increase caused by the mixing effect of
                        the switch can negatively influence the COP.
                      </span>
                    </li>
                  </ul>
                  <Image
                    className="rounded-2xl object-cover w-full"
                    src="/images/consultants/consultation-highlights.png"
                    alt="hydraulic switch highlights"
                    width={500}
                    height={300}
                  />
                </div>
              </div>

              {/* Tab 2 Content */}
              <div
                className={`transition-opacity duration-150 ease-linear ${
                  activeTab === "tabs-02" ? "block" : "hidden"
                }`}
                id="tabs-02"
                role="tabpanel"
                aria-labelledby="tabs-profile-tab03"
              >
                <h2 className="text-2xl font-semibold mb-8">
                  Function of a hydraulic switch
                </h2>
                <p className="tex-lg text-pretty">
                  Content for tab 2 goes here. You can explain the function of
                  the hydraulic switch or whatever the topic is for this tab.
                </p>
              </div>

              {/* Tab 3 Content */}
              <div
                className={`transition-opacity duration-150 ease-linear ${
                  activeTab === "tabs-03" ? "block" : "hidden"
                }`}
                id="tabs-03"
                role="tabpanel"
                aria-labelledby="tabs-profile-tab03"
              >
                <h2 className="text-2xl font-semibold mb-8">Another Topic</h2>
                <p className="tex-lg text-pretty">
                  Content for tab 3 goes here. You can describe another topic
                  related to the subject.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentTabs;
