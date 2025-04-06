import ContentTabs from "@/components/comparison-details/content-tabs";
import MainSection from "@/components/comparison-details/main-section";
import MoreConsultation from "@/components/comparison-details/more consultation";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Leads | Comparison Details",
};

export default function ComparisonDetails({ params }) {
  const { id } = params;

  if (!id) return notFound();

  return (
    <>
      <MainSection />
      <ContentTabs />
      <MoreConsultation />
    </>
  );
}

// هذا الجزء ضروري جداً مع output: export
export async function generateStaticParams() {
  return [{ id: "01" }, { id: "02" }, { id: "03" }, { id: "04" }];
}
