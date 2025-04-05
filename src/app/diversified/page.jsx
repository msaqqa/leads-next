import Diversified from "@/components/diversified/diversified";
import SubHero from "@/components/hero/sub-hero/sub-hero";

const diversifiedData = [
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

function DiversifiedPage() {
  return (
    <>
      <SubHero
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
          <div className="diversified-cards grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {diversifiedData.map((item) => (
              <Diversified key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DiversifiedPage;
