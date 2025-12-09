import { Wand2, Target, FileText, PenTool } from "lucide-react";
import { FeatureCard } from "@/components/ui/FeatureCard";

const features = [
  {
    icon: <Wand2 size={28} />,
    title: "AI-optimering",
    description: "Förbättra ditt befintliga CV med AI som lyfter fram det viktigaste och polerar formuleringarna.",
  },
  {
    icon: <Target size={28} />,
    title: "Jobbskanning",
    description: "Klistra in en jobbannons och få direkt matchningsprocent med konkreta rekommendationer.",
  },
  {
    icon: <FileText size={28} />,
    title: "Skräddarsytt CV",
    description: "Generera ett CV anpassat för varje specifik tjänst baserat på din profil och jobbkraven.",
  },
  {
    icon: <PenTool size={28} />,
    title: "Personligt brev",
    description: "Få ett genomtänkt personligt brev byggt på din profil och anpassat till jobbets krav.",
  },
];

export function FeaturesGridSection() {
  return (
    <section className="section-padding bg-black/30">
      <div className="container-main">
        <div className="text-center mb-12 md:mb-16">
          <span className="label-text mb-4 block">Möjligheter</span>
          <h2 className="heading-md">Funktioner i korthet</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
