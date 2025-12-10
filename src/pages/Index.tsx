import { HeroSection } from "@/components/home/HeroSection";
import { WhySection } from "@/components/home/WhySection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { FeaturesGridSection } from "@/components/home/FeaturesGridSection";
import { AppDemoPreviewSection } from "@/components/home/AppDemoPreviewSection";
import { BottomCTASection } from "@/components/home/BottomCTASection";

const Index = () => {
  return (
    <div className="space-y-4 p-4 md:p-6">
      <HeroSection />
      <WhySection />
      <HowItWorksSection />
      <FeaturesGridSection />
      <AppDemoPreviewSection />
      <BottomCTASection />
    </div>
  );
};

export default Index;
