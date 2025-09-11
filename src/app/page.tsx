import CaseStudiesSection from "@/components/home/Case";
import FAQSection from "@/components/home/Faq";
import HeroSection from "@/components/home/Hero";
import IdeaSection from "@/components/home/Idea";
import PricingPlanSection from "@/components/home/PricingPlans";
import TestimonialsSection from "@/components/home/Testmonial";
import Trust from "@/components/home/Trust";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Trust />
      <CaseStudiesSection />
      <PricingPlanSection />
      <IdeaSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
