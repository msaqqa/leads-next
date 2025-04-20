"use client";

import "swiper/css";
import PartnersList from "./partners-list";

const partenersData = [
  {
    id: 1,
    img: "/images/partners/partner-01.png",
  },
  {
    id: 2,
    img: "/images/partners/partner-02.png",
  },
  {
    id: 3,
    img: "/images/partners/partner-03.png",
  },
  {
    id: 4,
    img: "/images/partners/partner-04.png",
  },
  {
    id: 5,
    img: "/images/partners/partner-05.png",
  },
  {
    id: 6,
    img: "/images/partners/partner-06.png",
  },
  {
    id: 7,
    img: "/images/partners/partner-07.png",
  },
  {
    id: 8,
    img: "/images/partners/partner-08.png",
  },
];

function Partners() {
  return (
    <div className="partners bg-blue-50 mt-16 py-16">
      <div className="container wow animate__animated animate__fadeInUp">
        <h2 className="text-2xl lg:text-4xl font-semibold capitalize mb-5 text-center">
          Our partners
        </h2>
        <p className="text-base leading-relaxed lg:text-xl lg:leading-loose font-normal text-pretty mb-8 text-center">
          We guarantee high-quality services that build trust and meet our
          clients' needs
        </p>
        <PartnersList data={partenersData} />
      </div>
    </div>
  );
}

export default Partners;
