import { User, Search, FileCheck } from "lucide-react";
import { StepCard } from "@/components/ui/StepCard";

const steps = [
  {
    icon: <User size={32} />,
    title: "Skapa din profil",
    description: "Fyll i dina erfarenheter, utbildningar och färdigheter. RebelCV strukturerar allt automatiskt.",
    glowColor: "emerald" as const,
  },
  {
    icon: <Search size={32} />,
    title: "Skanna jobbannons",
    description: "Klistra in en jobbannons. AI:n analyserar kraven och visar hur väl du matchar.",
    glowColor: "violet" as const,
  },
  {
    icon: <FileCheck size={32} />,
    title: "Skapa jobbpakt",
    description: "Få ett skräddarsytt CV, personligt brev och formulärtexter anpassade för tjänsten.",
    glowColor: "primary" as const,
  },
];

export function HowItWorksSection() {
  return (
    <section id="hur-det-funkar" className="relative section-padding overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="glow-blur glow-blur-primary w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
      </div>
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 -z-10 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="container-main">
        <div className="text-center mb-12 md:mb-16">
          <span className="label-text mb-4 block">Process</span>
          <h2 className="heading-md">Så funkar det</h2>
        </div>

        <div className="relative">
          {/* Connection line - enhanced */}
          <div className="hidden md:block absolute top-20 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-emerald-200 via-violet-200 to-primary/20" />
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                icon={step.icon}
                step={index + 1}
                title={step.title}
                description={step.description}
                glowColor={step.glowColor}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
