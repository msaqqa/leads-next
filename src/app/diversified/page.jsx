import DiversifiedList from "@/components/diversified/diversified-list";
import HeroPage from "@/components/leads/hero-page";

const dataAPI = [
  {
    id: 1,
    img: "./images/diversified/diversified-04.png",
    title: "solar system",
    desc: "Discover the best home solar solutions and attractive finance opportunities with Leads.",
    features: ["No contribution obligation.", "No contribution obligation."],
  },
  {
    id: 2,
    img: "./images/diversified/diversified-02.png",
    title: "solar system",
    desc: "Discover the best home solar solutions and attractive finance opportunities with Leads.",
    features: ["No contribution obligation.", "No contribution obligation."],
  },
  {
    id: 3,
    img: "./images/diversified/diversified-03.png",
    title: "solar system",
    desc: "Discover the best home solar solutions and attractive finance opportunities with Leads.",
    features: ["No contribution obligation.", "No contribution obligation."],
  },
  {
    id: 4,
    img: "./images/diversified/diversified-04.png",
    title: "solar system",
    desc: "Discover the best home solar solutions and attractive finance opportunities with Leads.",
    features: ["No contribution obligation.", "No contribution obligation."],
  },
];

export const metadata = {
  title: "Leads | Diversified",
};

async function getData() {
  // const res = await fetch("https://api.example.com/comparisons", {cache: "force-cache});
  // return res.json();
  return dataAPI;
}

async function page() {
  const data = await getData();
  return (
    <>
      <HeroPage
        heroImg={"/images/backgrounds/diversified-bg.png"}
        heroTitle={"Diversified"}
      />
      <div className="py-16">
        <div className="container wow animate__animated animate__fadeInUp">
          <div className="mb-10">
            <h2 className="text-2xl lg:text-4xl font-semibold text-neutral-900 capitalize mb-2">
              Solar Providers and Costs Compared - Results in 3 Minutes!
            </h2>
            <p className="text-base lg:text-lg text-gray-500 text-pretty">
              Solar Providers and Costs Compared - Results in 3 Minutes!
            </p>
          </div>
          <DiversifiedList data={data} />
        </div>
      </div>
    </>
  );
}

export default page;
