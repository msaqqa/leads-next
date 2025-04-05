import ContentTabs from "@/components/comparison/content-tabs";
import MainSection from "@/components/comparison/main-section";
import { notFound } from "next/navigation";

export default function ComparisonDetails({ params }) {
  const { id } = params;

  if (!id) return notFound();

  return (
    <>
      <MainSection id={id} />
      <ContentTabs />
    </>
  );
}

// هذا الجزء ضروري جداً مع output: export
export async function generateStaticParams() {
  return [{ id: "01" }, { id: "02" }, { id: "03" }, { id: "04" }];
}
