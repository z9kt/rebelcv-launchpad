import { Link } from "react-router-dom";
import { MagicWand, Crosshair, FileText, PencilLine } from "@phosphor-icons/react";

const features = [
  {
    icon: <MagicWand size={20} weight="duotone" />,
    title: "AI-optimering",
    description: "Förbättra ditt befintliga CV med AI som lyfter fram det viktigaste.",
    extra: "Vår AI analyserar din erfarenhet och formulerar om dina meriter så de matchar branschens förväntningar.",
  },
  {
    icon: <Crosshair size={20} weight="duotone" />,
    title: "Jobbskanning",
    description: "Klistra in en jobbannons och få direkt matchningsprocent.",
    extra: "Se exakt vad som saknas och få konkreta förslag på hur du kan stärka din profil för just den tjänsten.",
  },
  {
    icon: <FileText size={20} weight="duotone" />,
    title: "Skräddarsytt CV",
    description: "Generera ett CV anpassat för varje specifik tjänst.",
    extra: "Varje CV optimeras automatiskt med rätt nyckelord och formuleringar som rekryterare söker efter.",
  },
  {
    icon: <PencilLine size={20} weight="duotone" />,
    title: "Personligt brev",
    description: "Få ett genomtänkt personligt brev anpassat till jobbets krav.",
    extra: "AI:n skriver ett autentiskt brev som lyfter fram varför just du passar perfekt för rollen.",
  },
];

export function FeaturesGridSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
      {features.map((feature, index) => (
        <div 
          key={index} 
          className="section-block p-5 md:p-10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
        >
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center mb-4 md:mb-5 bg-violet-50 text-violet-600">
            {feature.icon}
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1.5 md:mb-2">{feature.title}</h3>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-1.5 md:mb-2">{feature.description}</p>
          <p className="text-muted-foreground/70 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">{feature.extra}</p>
          <Link to="/funktioner" className="text-violet-600 text-sm font-medium hover:underline">
            Läs mer →
          </Link>
        </div>
      ))}
    </div>
  );
}
