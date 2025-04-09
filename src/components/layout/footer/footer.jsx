"use client";

import LeadsButton from "@/components/leads/leads-button";
import Link from "next/link";
import { useState } from "react";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <footer className="bg-neutral-900 text-white pt-16">
      <div className="container">
        <div className="top-footer flex flex-col md:flex-row justify-between gap-6 pb-16">
          <h3 className="w-full md:w-1/2 text-2xl font-semibold text-white capitalize">
            Join our newsletter to
            <br />
            keep up to date with us!
          </h3>
          <div className="w-full md:w-1/2 flex flex-col md:flex-row md:justify-center md:items-center gap-4">
            <div className="relative w-full md:w-80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="absolute top-1/2 -translate-y-1/2 left-4 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <input
                type="email"
                className="w-full bg-transparent px-6 pl-12 py-3 border rounded-full text-white placeholder:text-neutral-200 focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Enter Your Email"
              />
            </div>
            <LeadsButton
              btnText="Subscribe"
              btnPadding="px-6 py-3"
              btnArrow={false}
              onClick={() => {}}
            />
          </div>
        </div>
        <div className="content-footer py-12 border-y border-neutral-200 flex flex-col md:flex-row gap-x-6 gap-y-12">
          <div className="w-full md:w-1/2">
            <Link href="/">
              <img className="mb-5" src="/images/footer-logo.png" alt="Logo" />
            </Link>
            <p className="text-lg w-full md:w-1/2 mb-5">
              We work to provide the best offers that suit you.
            </p>
            <div className="flex">
              <a className="mr-5" href="#!" role="button">
                {/* X */}
                <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-white [&>svg]:transition-colors hover:[&>svg]:fill-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </span>
              </a>
              {/* Facebook */}
              <a className="mr-5" href="#!" role="button">
                <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-white [&>svg]:transition-colors hover:[&>svg]:fill-[#1877f2]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                  </svg>
                </span>
              </a>
              <a href="#!" role="button">
                {/* Instagram */}
                <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-white [&>svg]:transition-colors hover:[&>svg]:fill-[#c13584]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-3">
            <div>
              <h4 className="font-semibold mb-5">Products</h4>
              <ul className="list-none">
                <li>
                  <a
                    className="inline-flex text-neutral-200 mb-4 transition-colors hover:text-neutral-100"
                    href="#!"
                  >
                    Finances
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex text-neutral-200 mb-4 transition-colors hover:text-neutral-100"
                    href="#!"
                  >
                    Insurance
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex text-neutral-200 mb-4 transition-colors hover:text-neutral-100"
                    href="#!"
                  >
                    Diversified
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex text-neutral-200 mb-4 transition-colors hover:text-neutral-100"
                    href="#!"
                  >
                    Real
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-5">About us</h4>
              <ul className="list-none">
                <li>
                  <a
                    className="inline-flex text-neutral-200 mb-4 transition-colors hover:text-neutral-100"
                    href="#!"
                  >
                    Compony
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex text-neutral-200 mb-4 transition-colors hover:text-neutral-100"
                    href="#!"
                  >
                    Present Consultant
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex text-neutral-200 mb-4 transition-colors hover:text-neutral-100"
                    href="#!"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex text-neutral-200 mb-4 transition-colors hover:text-neutral-100"
                    href="#!"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-5">Resources</h4>
              <ul className="list-none">
                <li>
                  <a
                    className="inline-flex text-neutral-200 mb-4 transition-colors hover:text-neutral-100"
                    href="#!"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex text-neutral-200 mb-4 transition-colors hover:text-neutral-100"
                    href="#!"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex text-neutral-200 mb-4 transition-colors hover:text-neutral-100"
                    href="#!"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex text-neutral-200 mb-4 transition-colors hover:text-neutral-100"
                    href="#!"
                  >
                    Server Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom-footer flex flex-col md:flex-row gap-y-5 py-9">
          <p className="w-full md:w-1/2">© 2025 Leads inc.</p>
          <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-x-10 gap-y-5">
            <ul className="col-span-2 list-none flex justify-between md:justify-start md:gap-x-6">
              <li>
                <a
                  className="inline-flex text-sm text-neutral-200 mr-4 transition-colors hover:text-neutral-100"
                  href="#!"
                >
                  Torms of Sarvice
                </a>
              </li>
              <li>
                <a
                  className="inline-flex text-sm text-neutral-200 mr-4 transition-colors hover:text-neutral-100"
                  href="#!"
                >
                  Privacy policy
                </a>
              </li>
              <li>
                <a
                  className="inline-flex text-sm text-neutral-200 mr-4 transition-colors hover:text-neutral-100"
                  href="#!"
                >
                  Cookies
                </a>
              </li>
            </ul>
            <div className="flex gap-2">
              <span className="[&>svg]:w-6 [&>svg]:text-neutral-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </span>
              {/* Dropdown */}
              {/* <div className="relative" data-twe-dropdown-ref="">
                <a
                  className="inline-flex text-sm text-neutral-200 mr-4"
                  href="#"
                  type="button"
                  id="dropdownMenuButton2"
                  data-twe-dropdown-toggle-ref=""
                  aria-expanded="false"
                >
                  Language
                  <span className="ms-2 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
                <ul
                  className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
                  aria-labelledby="dropdownMenuButton1"
                  data-twe-dropdown-menu-ref=""
                >
                  <li>
                    <a
                      className="block w-full bg-white px-4 py-2 text-sm text-neutral-900 hover:bg-neutral-100"
                      href="#!"
                      data-twe-dropdown-item-ref=""
                    >
                      English
                    </a>
                  </li>
                  <li>
                    <a
                      className="block w-full bg-white px-4 py-2 text-sm text-neutral-900 hover:bg-neutral-100"
                      href="#!"
                      data-twe-dropdown-item-ref=""
                    >
                      Germany
                    </a>
                  </li>
                </ul>
              </div> */}
              <div className="relative">
                <button
                  className="inline-flex text-sm text-neutral-200 mr-4"
                  onClick={toggleDropdown}
                  aria-expanded={isOpen ? "true" : "false"}
                >
                  Language
                  <span className="ms-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <ul className="absolute z-1000 float-left m-0 list-none overflow-hidden rounded-lg border-none bg-white shadow-lg bottom-full mb-2">
                    <li>
                      <Link
                        href="/"
                        className="block w-full px-4 py-2 text-sm text-neutral-900 hover:bg-neutral-100"
                      >
                        English
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="block w-full px-4 py-2 text-sm text-neutral-900 hover:bg-neutral-100"
                      >
                        German
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
