import React from "react";
import SingleNews from "./single-news";

const news = [
  {
    id: 1,
    img: "./images/news/news-01.png",
    title: "Photovoltaic systems can hinder firefighting efforts.",
    desc: "With Leads, I had easy, personalized private health insurance, and was well taken care of.",
  },
  {
    id: 2,
    img: "./images/news/news-02.png",
    title: "Urban Property Prices Rise by 15%",
    desc: "Property prices in urban areas have seen a significant increase over the past year, with experts attributing the rise to high demand",
  },
  {
    id: 3,
    img: "./images/news/news-03.png",
    title: "Demand for Cosmetic Dental Services Rises by 20%",
    desc: "Cosmetic dental services, such as teeth whitening and braces, have seen a 20% increase in demand",
  },
  {
    id: 4,
    img: "./images/news/news-04.png",
    title: "Rising Demand for Energy-Efficient Central Heating",
    desc: "Central heating systems are gaining popularity as an energy",
  },
];

function News() {
  return (
    <div className="news bg-white py-16">
      <div className="container wow animate__animated animate__fadeInUp">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold capitalize">
            Current News
          </h2>
          <a
            className="bg-transparent rounded-full px-5 py-2 lgLpx-7 lg:py-3 border border-gray-200 transition hover:bg-neutral-100 capitalize"
            href="#!"
          >
            Browse All
          </a>
        </div>
        <div className="news-cards grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((item) => (
            <SingleNews key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
