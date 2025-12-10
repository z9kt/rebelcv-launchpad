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
    <section id="hur-det-funkar" className="section-block block-gradient-blue py-16 md:py-24 overflow-hidden">
      <div className="container-main">
        <div className="text-center mb-12 md:mb-16">
          <span className="label-text mb-4 block">Process</span>
          <h2 className="heading-md mb-4">Så funkar det</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tre enkla steg för att gå från jobbannons till färdigt ansökningspaket
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative inline-flex mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-blue-600">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/hur-det-funkar" className="btn-primary">
            Läs mer om processen
          </Link>
        </div>
      </div>
    </section>
  );
}
