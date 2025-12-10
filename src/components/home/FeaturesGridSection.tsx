import { Link } from "react-router-dom";
import { Wand2, Target, FileText, PenTool } from "lucide-react";

const features = [
  {
    icon: <Wand2 size={28} />,
    title: "AI-optimering",
    description: "Förbättra ditt befintliga CV med AI som lyfter fram det viktigaste.",
    gradient: true,
  },
  {
    icon: <Target size={28} />,
    title: "Jobbskanning",
    description: "Klistra in en jobbannons och få direkt matchningsprocent.",
    gradient: false,
  },
  {
    icon: <FileText size={28} />,
    title: "Skräddarsytt CV",
    description: "Generera ett CV anpassat för varje specifik tjänst.",
    gradient: false,
  },
  {
    icon: <PenTool size={28} />,
    title: "Personligt brev",
    description: "Få ett genomtänkt personligt brev anpassat till jobbets krav.",
    gradient: true,
  },
];

export function FeaturesGridSection() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {features.map((feature, index) => (
        <div 
          key={index} 
          className={`section-block p-8 md:p-10 ${feature.gradient ? 'block-gradient-blue' : ''}`}
        >
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
            feature.gradient ? 'bg-white shadow-sm text-blue-600' : 'bg-blue-50 text-blue-600'
          }`}>
            {feature.icon}
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">{feature.description}</p>
          <Link to="/funktioner" className="text-blue-600 text-sm font-medium hover:underline">
            Läs mer →
          </Link>
        </div>
      ))}
    </div>
  );
}
