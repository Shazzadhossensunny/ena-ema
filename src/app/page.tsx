import CallToAction from "@/components/home/CallToAction";
import CaseStudiesSection from "@/components/home/Case";
import CaseStudySlider from "@/components/home/CaseStudySlider";
import FAQSection from "@/components/home/Faq";
import HeroSection from "@/components/home/Hero";
import IdeaSection from "@/components/home/Idea";
import PricingPlanSection from "@/components/home/PricingPlans";
import TestimonialsSection from "@/components/home/Testmonial";
import Trust from "@/components/home/Trust";

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1600585153938-9c99b5d2ff04",
  "https://images.unsplash.com/photo-1600585153825-54f4d5e1c2e5",
  "https://images.unsplash.com/photo-1600585153928-96a3f18e51e3",
  "https://images.unsplash.com/photo-1600585154440-8b9d5e5e5f6d",
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <CaseStudySlider images={images} />
      <Trust />
      <CaseStudiesSection />
      <PricingPlanSection />
      <IdeaSection />
      <TestimonialsSection />
      <FAQSection />
      <CallToAction />
    </>
  );
}
