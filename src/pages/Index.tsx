import { HeroSection } from "@/components/home/HeroSection";
import { WhySection } from "@/components/home/WhySection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { FeaturesGridSection } from "@/components/home/FeaturesGridSection";
import { AppDemoPreviewSection } from "@/components/home/AppDemoPreviewSection";
import { BottomCTASection } from "@/components/home/BottomCTASection";

const Index = () => {
  return (
    <>
      <HeroSection />
      <WhySection />
      <HowItWorksSection />
      <FeaturesGridSection />
      <AppDemoPreviewSection />
      <BottomCTASection />
    </>
  );
};

export default Index;
