"use client";
import Link from "next/link";
import Image from "next/image";

function MainSection() {
  return (
    <div className="main-section py-10 mt-[60px] lg:mt-[90px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-x-5">
          {/* comparison text */}
          <div className="col-span-2">
            {/* breadcrumb */}
            <nav className="w-full mb-20">
              <ol className="list-reset flex">
                <li>
                  <Link
                    href="/consultation"
                    className="text-gray-500 capitalize transition ease-in-out hover:text-blue-500"
                  >
                    Consultation
                  </Link>
                </li>
                <li>
                  <span className="text-gray-500 mx-5">{">"}</span>
                </li>
                <li className="capitalize">Monocrystalline Modules ...</li>
              </ol>
            </nav>

            {/* comparison info */}
            <div className="module-text mb-10">
              <h1 className="text-2xl lg:text-4xl font-bold mb-5">
                Monocrystalline Modules: Definition and Function
              </h1>
              <p className="text-lg text-gray-500">
                Community Solar is shattering the way people think about
                accessing renewable energy. Since community solar legislation
                first passed in the United States, 43 different states have
                deployed at least one community solar facility. As its
                popularity...
              </p>
            </div>

            {/* comparison details */}
            <div className="module-details">
              <span className="inline-block bg-neutral-100 capitalize rounded-full px-6 py-2 mb-5">
                medical
              </span>
              <div className="flex items-center gap-2 text-gray-500 mb-4">
                <span>18 jan 2025</span>
                <span className="inline-block w-2 h-2 rounded-full bg-gray-400"></span>
                <span>10 mins read</span>
              </div>
            </div>
          </div>

          {/* comparison image */}
          <div>
            <Image
              className="rounded-2xl"
              src="/images/consultants/consultant-04.png"
              alt="consultation-details"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
