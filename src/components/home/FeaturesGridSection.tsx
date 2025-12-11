import { Link } from "react-router-dom";
import { MagicWand, Crosshair, FileText, PencilLine } from "@phosphor-icons/react";

const features = [
  {
    icon: <MagicWand size={28} weight="duotone" />,
    title: "AI-optimering",
    description: "Förbättra ditt befintliga CV med AI som lyfter fram det viktigaste.",
  },
  {
    icon: <Crosshair size={28} weight="duotone" />,
    title: "Jobbskanning",
    description: "Klistra in en jobbannons och få direkt matchningsprocent.",
  },
  {
    icon: <FileText size={28} weight="duotone" />,
    title: "Skräddarsytt CV",
    description: "Generera ett CV anpassat för varje specifik tjänst.",
  },
  {
    icon: <PencilLine size={28} weight="duotone" />,
    title: "Personligt brev",
    description: "Få ett genomtänkt personligt brev anpassat till jobbets krav.",
  },
];

export function FeaturesGridSection() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {features.map((feature, index) => (
        <div 
          key={index} 
          className="section-block p-8 md:p-10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
        >
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-violet-50 text-violet-600">
            {feature.icon}
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">{feature.description}</p>
          <Link to="/funktioner" className="text-violet-600 text-sm font-medium hover:underline">
            Läs mer →
          </Link>
        </div>
      ))}
    </div>
  );
}
