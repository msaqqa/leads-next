import ConsultationCards from "@/components/consultation/consultation-cards";
import HeroPage from "@/components/leads/hero-page";

export const metadata = {
  title: "Leads | News",
};

const consultationData = [
  {
    id: 1,
    img: "./images/consultants/consultant-01.png",
    title: "What is health insurance?",
    desc: "With Leads, I had easy, personalized private health insurance, and was well taken care of.",
    category: "medical",
    createdAt: "18 jan 2025",
    readTime: "10 mins",
  },
  {
    id: 2,
    img: "./images/consultants/consultant-02.png",
    title: "What is health insurance?",
    desc: "With Leads, I had easy, personalized private health insurance, and was well taken care of.",
    category: "energy",
    createdAt: "18 jan 2025",
    readTime: "10 mins",
  },
  {
    id: 3,
    img: "./images/consultants/consultant-03.png",
    title: "What is health insurance?",
    desc: "With Leads, I had easy, personalized private health insurance, and was well taken care of.",
    category: "financial",
    createdAt: "18 jan 2025",
    readTime: "10 mins",
  },
  {
    id: 4,
    img: "./images/consultants/consultant-04.png",
    title: "What is health insurance?",
    desc: "With Leads, I had easy, personalized private health insurance, and was well taken care of.",
    category: "Energy",
    createdAt: "18 jan 2025",
    readTime: "08 mins",
  },
  {
    id: 5,
    img: "./images/consultants/consultant-05.png",
    title: "What is health insurance?",
    desc: "With Leads, I had easy, personalized private health insurance, and was well taken care of.",
    category: "financial",
    createdAt: "18 jan 2025",
    readTime: "10 mins",
  },
  {
    id: 6,
    img: "./images/consultants/consultant-06.png",
    title: "What is health insurance?",
    desc: "With Leads, I had easy, personalized private health insurance, and was well taken care of.",
    category: "medical",
    createdAt: "18 jan 2025",
    readTime: "12 mins",
  },
];

function page() {
  return (
    <>
      <HeroPage
        heroImg={"/images/backgrounds/news-bg.png"}
        heroTitle={"News"}
      />
      <div className="py-16">
        <div className="container wow animate__animated animate__fadeInUp">
          <h2 className="text-2xl lg:text-4xl font-semibold text-neutral-900 capitalize mb-8">
            News about the services we provide
          </h2>
          {/* <!-- Consultation Cards --> */}
          <ConsultationCards consultationData={consultationData} />
        </div>
      </div>
    </>
  );
}

export default page;
