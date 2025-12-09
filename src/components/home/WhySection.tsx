import { RefreshCw, Brain, Layers } from "lucide-react";
import { FeatureCard } from "@/components/ui/FeatureCard";

const features = [
  {
    icon: <RefreshCw size={28} />,
    title: "Levande CV",
    description: "CV:t uppdateras automatiskt när du ändrar din profil eller skapar nya ansökningar. Aldrig ett föråldrat dokument igen.",
  },
  {
    icon: <Brain size={28} />,
    title: "AI som tolkar kraven",
    description: "Systemet läser jobbannonsen, räknar ut matchningsprocent och lyfter fram dina styrkor och eventuella luckor.",
  },
  {
    icon: <Layers size={28} />,
    title: "Allt samlat",
    description: "Ansökningar, CV-versioner, personliga brev och analyser samlade i samma vy. Fullständig överblick.",
  },
];

export function WhySection() {
  return (
    <section className="section-padding bg-black/30">
      <div className="container-main">
        <div className="text-center mb-12 md:mb-16">
          <span className="label-text mb-4 block">Fördelar</span>
          <h2 className="heading-md">Varför RebelCV?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
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
