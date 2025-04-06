import ComparisonOptions from "@/components/comparison-options/comparison-options";
import Consultants from "@/components/home/consultants";
import Experts from "@/components/experts/experts";
import HomeHero from "@/components/hero/home-hero/home-hero";
import LeadsFeatures from "@/components/leads-features";
import News from "@/components/news/news";
import Partners from "@/components/partners/partners";
import Questions from "@/components/questions/questions";
import Testimonials from "@/components/testimonials/testimonials";
import Trust from "@/components/trust/trust";

export const metadata = {
  title: "Leads | Home",
};

function Home() {
  return (
    <>
      <HomeHero />
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
