import CaseStudiesSection from "@/components/home/Case";
import HeroSection from "@/components/home/Hero";
import IdeaSection from "@/components/home/Idea";
import PricingPlanSection from "@/components/home/PricingPlans";
import Trust from "@/components/home/Trust";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Trust />
      <CaseStudiesSection />
      <PricingPlanSection />
      <IdeaSection />
    </>
  );
}
