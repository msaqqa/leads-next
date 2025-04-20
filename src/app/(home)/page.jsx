import ComparisonOptions from "@/components/home/comparison-options";
import Consultants from "@/components/home/consultants";
import Experts from "@/components/home/experts";
import Hero from "@/components/home/hero";
import LeadsFeatures from "@/components/leads-features";
import News from "@/components/home/news";
import Partners from "@/components/home/partners";
import Questions from "@/components/questions/questions";
import Testimonials from "@/components/testimonials/testimonials";
import Trust from "@/components/home/trust";

export const metadata = {
  title: "Leads | Home",
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
