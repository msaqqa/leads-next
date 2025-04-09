"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LeadsButton from "@/components/leads/leads-button";

const links = [
  { href: "/finances", label: "Finances" },
  { href: "/insurance", label: "Insurance" },
  { href: "/diversified", label: "Diversified" },
  { href: "/consultation", label: "Consultation" },
  { href: "/news", label: "News" },
];

function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [addShadow, setAddShadow] = useState(false);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const hero = document.getElementById("hero");

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navbarHeight = navbar?.offsetHeight || 90;

      const triggerHeight = hero
        ? hero.offsetHeight - navbar.offsetHeight
        : navbarHeight;

      setAddShadow(scrollPosition > triggerHeight);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <nav
      id="navbar"
      className={`fixed w-full top-0 left-0 bg-white z-50 py-4 lg:py-5 transition ${
        addShadow ? "shadow-lg" : ""
      }`}
      data-twe-navbar-ref=""
    >
      <div className="container relative flex justify-between items-center">
        <div className="logo">
          <Link href="/">
            <img className="" src="/images/logo.png" alt="" />
          </Link>
        </div>

        {/* Hamburger button for mobile view */}
        <button
          className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {/* Hamburger icon */}
          <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        {/* Collapsible navbar container */}
        <div
          // className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
          className={`absolute top-full left-0 w-full p-8 border-t-1 border-gray-200 bg-white lg:static lg:w-auto lg:flex lg:border-0 lg:p-0 grow items-center ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {/* Center Links */}
          <ul
            className="list-none lg:flex-1 flex flex-col ps-0 lg:mt-1 lg:flex-row justify-center"
            data-twe-navbar-nav-ref=""
          >
            {links.map((link) => (
              <li
                key={link.href}
                className="mb-4 lg:mb-0 mr-2 pr-0 lg:ps-2"
                data-twe-nav-item-ref=""
              >
                <Link
                  href={link.href}
                  className="text-base font-medium text-neutral-900 transition duration-200 hover:text-blue-500 hover:ease-in-out data-[aria-current='page']:text-blue-500"
                  data-aria-current={
                    pathname === link.href ? "page" : undefined
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <LeadsButton
            btnText={"Start Comparisons"}
            btnLink={"/comparison-form/01"}
            btnArrow={false}
            btnTextSize={"text-sm"}
            btnPadding={"p-3.5"}
            btnRadius={"rounded-md"}
          />
        </div>
      </div>
    </nav>
  );
}

export default Header;
