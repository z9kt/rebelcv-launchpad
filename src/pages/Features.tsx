import { Link } from "react-router-dom";
import { SquaresFour, MagnifyingGlass, FileText, PencilLine, TrendUp, ClockCounterClockwise } from "@phosphor-icons/react";

const modules = [
  {
    icon: <SquaresFour size={32} weight="duotone" />,
    title: "Dashboard",
    tagline: "Din centrala utgångspunkt",
    description: "Överblick av alla dina ansökningar med AI-drivna tips och rekommendationer.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: <MagnifyingGlass size={32} weight="duotone" />,
    title: "Jobbskanning",
    tagline: "Analysera vilken annons som helst",
    description: "Klistra in en länk och få matchningsprocent mot din profil på sekunder.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: <FileText size={32} weight="duotone" />,
    title: "Jobbanpassat CV",
    tagline: "Skräddarsytt för varje tjänst",
    description: "Automatiskt anpassat CV med ATS-optimerade formuleringar.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: <PencilLine size={32} weight="duotone" />,
    title: "Personligt brev",
    tagline: "Övertyga på rätt sätt",
    description: "Byggt på din profil och jobbkraven med anpassad ton.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: <TrendUp size={32} weight="duotone" />,
    title: "Karriäranalys",
    tagline: "Insikter och rekommendationer",
    description: "Analys av dina styrkor och tips på roller som passar dig.",
    color: "bg-sky-50 text-sky-600",
  },
  {
    icon: <ClockCounterClockwise size={32} weight="duotone" />,
    title: "Historik & paket",
    tagline: "Allt samlat på ett ställe",
    description: "Alla CV-versioner, brev och analyser samlade och exporterbara.",
    color: "bg-rose-50 text-rose-600",
  },
];

const Features = () => {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="section-block py-16 md:py-24">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <span className="label-text mb-4 block">Plattform</span>
            <h1 className="heading-xl mb-6">Utforska funktionerna.</h1>
            <p className="text-lg text-muted-foreground">
              RebelCV är uppdelat i tydliga moduler som var och en löser en specifik del av jobbsökningsprocessen.
            </p>
            <Link to="/app-demo" className="text-primary text-sm font-medium hover:underline mt-4 inline-block">
              Jämför alla funktioner →
            </Link>
          </div>
        </div>
      </section>

      {/* Apple-style Grid */}
      <section className="px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {modules.map((module, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center group"
            >
              {/* Icon card */}
              <div className={`w-full aspect-square rounded-3xl ${module.color} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}>
                <div className="scale-150">
                  {module.icon}
                </div>
              </div>
              
              {/* Content */}
              <p className="text-xs text-muted-foreground mb-1">{module.tagline}</p>
              <h3 className="text-base font-semibold text-foreground mb-2">{module.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4 px-1">
                {module.description}
              </p>
              
              {/* Actions */}
              <div className="flex items-center gap-3 text-xs">
                <Link 
                  to="/app-demo" 
                  className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  Läs mer
                </Link>
                <Link 
                  to="/priser" 
                  className="text-primary font-medium hover:underline"
                >
                  Testa →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom section */}
      <section className="section-block py-16">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Redo att ta nästa steg?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Skapa ditt konto och börja använda alla funktioner direkt.
          </p>
          <Link 
            to="/login" 
            className="inline-flex px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Kom igång gratis
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Features;