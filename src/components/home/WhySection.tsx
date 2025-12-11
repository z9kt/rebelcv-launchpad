import { ArrowsClockwise, Brain, Stack } from "@phosphor-icons/react";

const features = [
  {
    icon: <ArrowsClockwise size={32} weight="duotone" className="text-emerald-600" />,
    title: "Levande CV",
    description: "CV:t uppdateras automatiskt när du ändrar din profil eller skapar nya ansökningar.",
    color: "emerald",
  },
  {
    icon: <Brain size={32} weight="duotone" className="text-violet-600" />,
    title: "AI som tolkar kraven",
    description: "Systemet läser jobbannonsen, räknar ut matchningsprocent och lyfter fram dina styrkor.",
    color: "violet",
  },
  {
    icon: <Stack size={32} weight="duotone" className="text-blue-600" />,
    title: "Allt samlat",
    description: "Ansökningar, CV-versioner, personliga brev och analyser samlade i samma vy.",
    color: "blue",
  },
];

export function WhySection() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {features.map((feature, index) => (
        <div 
          key={index} 
          className="section-block p-8 md:p-10 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
              feature.color === "emerald" ? "bg-emerald-50" :
              feature.color === "violet" ? "bg-violet-50" :
              "bg-blue-50"
            }`}>
              {feature.icon}
            </div>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}