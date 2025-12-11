import { Link } from "react-router-dom";
import { User, Search, FileCheck } from "lucide-react";

const steps = [
  {
    icon: <User size={28} />,
    title: "Skapa din profil",
    description: "Fyll i dina erfarenheter, utbildningar och färdigheter. RebelCV strukturerar allt automatiskt.",
  },
  {
    icon: <Search size={28} />,
    title: "Skanna jobbannons",
    description: "Klistra in en jobbannons. AI:n analyserar kraven och visar hur väl du matchar.",
  },
  {
    icon: <FileCheck size={28} />,
    title: "Skapa jobbpaket",
    description: "Få ett skräddarsytt CV, personligt brev och formulärtexter anpassade för tjänsten.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="hur-det-funkar" className="section-block block-gradient-blue py-12 md:py-24 overflow-hidden">
      <div className="container-main px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <span className="label-text mb-3 md:mb-4 block">Process</span>
          <h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-3 md:mb-4">Så funkar det</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Tre enkla steg för att gå från jobbannons till färdigt ansökningspaket
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative inline-flex mb-4 md:mb-6">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-blue-600">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 md:w-7 md:h-7 rounded-full bg-blue-600 text-white text-xs md:text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-1.5 md:mb-2">{step.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Link to="/hur-det-funkar" className="btn-primary">
            Läs mer om processen
          </Link>
        </div>
      </div>
    </section>
  );
}
