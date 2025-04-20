import AdviceSteps from "@/components/comparison-form/advice-steps";
import ComparisonHero from "@/components/comparison-form/hero";
import LeadingSection from "@/components/comparison-form/leading";
import LeadsFeatures from "@/components/leads-features";
import Questions from "@/components/questions/questions";
import Testimonials from "@/components/testimonials/testimonials";
import Form from "@/components/comparison-form/form";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Leads | Comparison Form",
};

function page({ params }) {
  const { id } = params;

  if (!id) return notFound();
  return (
    <>
      <ComparisonHero />
      <Form />
      <LeadingSection />
      <AdviceSteps />
      <LeadsFeatures />
      <Testimonials />
      <div className="pt-16">
        <Questions />
      </div>
    </>
  );
}

export default page;
