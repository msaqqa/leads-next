"use client";
import ConsultantsList from "./Consultants-list";

const consultantsData = [
  {
    id: 1,
    img: "./images/consultants/consultant-01.png",
    title: "What is health insurance?",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 2,
    img: "./images/consultants/consultant-02.png",
    title: "consultant image Is solar energy economical?",
    desc: "With Leads, I had easy, personalized private health insurance, and was well taken care of.",
  },
  {
    id: 3,
    img: "./images/consultants/consultant-03.png",
    title: "consultant image How safe is fixed deposit?",
    desc: "With Leads, I had easy, personalized private health insurance, and was well taken care of.",
  },
];

function Consultants() {
  return (
    <>
      <div className="consultant bg-white py-16">
        <div className="container wow animate__animated animate__fadeInUp">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold capitalize">
              Present Consultant
            </h2>
            <a
              className="bg-transparent rounded-full px-5 py-2 lgLpx-7 lg:py-3 border transition hover:bg-neutral-100 capitalize"
              href="./consultation.html"
            >
              Browse All
            </a>
          </div>
          <ConsultantsList data={consultantsData} />
        </div>
      </div>
    </>
  );
}

export default Consultants;
