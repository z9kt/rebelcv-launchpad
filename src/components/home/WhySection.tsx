import { RefreshCw, Brain, Layers } from "lucide-react";
import { FeatureCard } from "@/components/ui/FeatureCard";

const features = [
  {
    icon: <RefreshCw size={28} />,
    title: "Levande CV",
    description: "CV:t uppdateras automatiskt när du ändrar din profil eller skapar nya ansökningar. Aldrig ett föråldrat dokument igen.",
    glowColor: "emerald" as const,
  },
  {
    icon: <Brain size={28} />,
    title: "AI som tolkar kraven",
    description: "Systemet läser jobbannonsen, räknar ut matchningsprocent och lyfter fram dina styrkor och eventuella luckor.",
    glowColor: "violet" as const,
  },
  {
    icon: <Layers size={28} />,
    title: "Allt samlat",
    description: "Ansökningar, CV-versioner, personliga brev och analyser samlade i samma vy. Fullständig överblick.",
    glowColor: "primary" as const,
  },
];

export function WhySection() {
  return (
    <section className="relative section-padding bg-muted/50 overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="glow-blur glow-blur-violet w-80 h-80 top-10 right-10 opacity-30" />
        <div className="glow-blur glow-blur-emerald w-64 h-64 bottom-10 left-10 opacity-30" />
      </div>

      <div className="container-main relative">
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
              glowColor={feature.glowColor}
            />
          ))}
        </div>
      </div>
      
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
