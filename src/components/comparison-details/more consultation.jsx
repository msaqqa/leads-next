"use client";
import ConsultationCards from "../consultation/consultation-cards";

const consultationData = [
  {
    id: 1,
    img: "/images/consultants/consultant-07.png",
    title: "What is health insurance?",
    category: "energy",
    createdAt: "18 jan 2025",
    readTime: "10 mins read",
    desc: "With Leads, I had easy, personalized private health insurance, and was well taken care of.",
  },
  {
    id: 2,
    category: "financial",
    img: "/images/consultants/consultant-08.png",
    createdAt: "18 jan 2025",
    readTime: "10 mins read",
    title: "What is health insurance?",
    desc: "With Leads, I had easy, personalized private health insurance, and was well taken care of.",
  },
  {
    id: 3,
    category: "medical",
    img: "/images/consultants/consultant-09.png",
    createdAt: "18 jan 2025",
    readTime: "10 mins read",
    title: "What is health insurance?",
    desc: "With Leads, I had easy, personalized private health insurance, and was well taken care of.",
  },
];

const MoreConsultation = () => {
  return (
    <div className="pb-16">
      <div className="container">
        <h2 className="text-3xl font-semibold capitalize mb-12">
          More Consultation articles
        </h2>
        <ConsultationCards consultationData={consultationData} />
      </div>
    </div>
  );
};

export default MoreConsultation;
