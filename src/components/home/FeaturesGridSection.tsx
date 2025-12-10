import { Wand2, Target, FileText, PenTool } from "lucide-react";
import { FeatureCard } from "@/components/ui/FeatureCard";

const features = [
  {
    icon: <Wand2 size={28} />,
    title: "AI-optimering",
    description: "Förbättra ditt befintliga CV med AI som lyfter fram det viktigaste och polerar formuleringarna.",
    glowColor: "violet" as const,
  },
  {
    icon: <Target size={28} />,
    title: "Jobbskanning",
    description: "Klistra in en jobbannons och få direkt matchningsprocent med konkreta rekommendationer.",
    glowColor: "emerald" as const,
  },
  {
    icon: <FileText size={28} />,
    title: "Skräddarsytt CV",
    description: "Generera ett CV anpassat för varje specifik tjänst baserat på din profil och jobbkraven.",
    glowColor: "primary" as const,
  },
  {
    icon: <PenTool size={28} />,
    title: "Personligt brev",
    description: "Få ett genomtänkt personligt brev byggt på din profil och anpassat till jobbets krav.",
    glowColor: "violet" as const,
  },
];

export function FeaturesGridSection() {
  return (
    <section className="relative section-padding bg-muted/50 overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="glow-blur glow-blur-primary w-80 h-80 top-20 -right-20 opacity-30" />
        <div className="glow-blur glow-blur-violet w-96 h-96 -bottom-20 -left-20 opacity-30" />
      </div>

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
