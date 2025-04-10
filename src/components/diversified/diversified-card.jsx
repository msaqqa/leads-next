"use client";
import Link from "next/link";
import LeadsButton from "../leads/leads-button";
import "./styles.css";

function Diversified({ item }) {
  return (
    <div className="diversified-card">
      <div className="card-img w-full h-[390px] rounded-2xl overflow-hidden mb-5">
        <Link href="/comparison-details/01">
          <img
            className="w-full h-full bg-gray-100 transition hover:scale-105"
            src={item.img}
            alt="diversified image"
          />
        </Link>
      </div>
      <div className="card-text">
        <h4 className="text-2xl font-semibold capitalize mb-3">solar system</h4>
        <p className="w-full md:w-3/4 text-sm text-gray-500 leading-relaxed line-clamp-3 mb-5">
          {item.desc}
        </p>
        <div className="comparison">
          <ul className="list-none mb-5">
            {item.features?.map((featuer, idx) => (
              <li key={idx} className="pl-12 mb-4">
                {featuer}
              </li>
            ))}
          </ul>
        </div>
        <LeadsButton
          btnText="Learn more"
          btnLink="/comparsion-details-01"
          btnPadding="px-10 py-3"
        />
      </div>
    </div>
  );
}

export default Diversified;
