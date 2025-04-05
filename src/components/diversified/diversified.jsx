import Link from "next/link";
import "./styles.css";

function Diversified({ item }) {
  return (
    <div className="diversified-card">
      <div className="card-img w-full h-[390px] rounded-2xl overflow-hidden mb-5">
        <a href="/comparison-details/01">
          <img
            className="w-full h-full transition hover:scale-105"
            src={item.img}
            alt="diversified image"
          />
        </a>
      </div>
      <div className="card-text">
        <h4 className="text-2xl font-semibold capitalize mb-3">solar system</h4>
        <p className="w-full md:w-3/4 text-sm text-gray-500 leading-relaxed line-clamp-3 mb-5">
          {item.desc}
        </p>
        <div className="comparison">
          <ul className="list-none mb-5">
            {item.featuers?.map((featuer, idx) => (
              <li key={idx} className="pl-12 mb-4">
                {featuer}
              </li>
            ))}
          </ul>
        </div>
        <button className="bg-white text-blue-500 border border-blue-500 rounded-full px-10 py-3 transition hover:bg-blue-500 hover:text-white hover:-translate-y-1 group cursor-pointer">
          <Link href="/">
            <span>Learn more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 inline-block ml-2 transition-transform transform group-hover:translate-x-1 group-hover:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Diversified;
