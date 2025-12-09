import { User, Search, FileCheck } from "lucide-react";
import { StepCard } from "@/components/ui/StepCard";

const steps = [
  {
    icon: <User size={32} />,
    title: "Skapa din profil",
    description: "Fyll i dina erfarenheter, utbildningar och färdigheter. RebelCV strukturerar allt automatiskt.",
  },
  {
    icon: <Search size={32} />,
    title: "Skanna jobbannons",
    description: "Klistra in en jobbannons. AI:n analyserar kraven och visar hur väl du matchar.",
  },
  {
    icon: <FileCheck size={32} />,
    title: "Skapa jobbpakt",
    description: "Få ett skräddarsytt CV, personligt brev och formulärtexter anpassade för tjänsten.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="hur-det-funkar" className="section-padding">
      <div className="container-main">
        <div className="text-center mb-12 md:mb-16">
          <span className="label-text mb-4 block">Process</span>
          <h2 className="heading-md">Så funkar det</h2>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                icon={step.icon}
                step={index + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
