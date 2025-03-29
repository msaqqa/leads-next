import ComparisonOptions from "@/components/comparison-options/comparison-options";
import Consultants from "@/components/consultants";
import Experts from "@/components/experts/experts";
import Hero from "@/components/hero/hero";
import LeadsFeatures from "@/components/leads-features";
import News from "@/components/news/news";
import Partners from "@/components/partners/partners";
import Questions from "@/components/questions/questions";
import Testimonials from "@/components/testimonials/testimonials";
import Trust from "@/components/trust/trust";

export const metadata = {
  title: "Home Page",
};

function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <ComparisonOptions />
      <Partners />
      <Experts />
      <LeadsFeatures />
      <Testimonials />
      <Consultants />
      <News />
      <Questions />
    </>
  );
}

export default Home;
