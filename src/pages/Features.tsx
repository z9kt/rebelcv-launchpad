import { Link } from "react-router-dom";
import { SquaresFour, MagnifyingGlass, FileText, PencilLine, TrendUp, ClockCounterClockwise, ArrowRight } from "@phosphor-icons/react";

const modules = [
  {
    icon: <SquaresFour size={28} weight="duotone" />,
    title: "Dashboard",
    description: "Din centrala utgångspunkt",
    color: "blue",
    features: [
      "Överblick av alla dina ansökningar",
      "Snabbval för vanliga åtgärder",
      "Statistik över din jobbsökning",
      "AI-drivna tips och rekommendationer",
    ],
  },
  {
    icon: <MagnifyingGlass size={28} weight="duotone" />,
    title: "Jobbskanning",
    description: "Analysera vilken annons som helst",
    color: "violet",
    features: [
      "Klistra in eller länka till jobbannons",
      "Automatisk extraktion av nyckelkrav",
      "Matchningsprocent mot din profil",
      "Identifiering av styrkor och luckor",
    ],
  },
  {
    icon: <FileText size={28} weight="duotone" />,
    title: "Jobbanpassat CV",
    description: "Skräddarsytt för varje tjänst",
    color: "emerald",
    features: [
      "Automatiskt anpassat utifrån jobbkrav",
      "Välj vilka erfarenheter som betonas",
      "ATS-optimerade formuleringar",
      "Export till PDF, Word eller delbar länk",
    ],
  },
  {
    icon: <PencilLine size={28} weight="duotone" />,
    title: "Personligt brev",
    description: "Övertyga på rätt sätt",
    color: "blue",
    features: [
      "Byggt på din profil och jobbkraven",
      "Anpassad ton och längd",
      "Framhäver relevanta erfarenheter",
      "Stöd för olika språk",
    ],
  },
  {
    icon: <TrendUp size={28} weight="duotone" />,
    title: "Karriäranalys",
    description: "Insikter och rekommendationer",
    color: "violet",
    features: [
      "Analys av dina styrkor",
      "Rekommendationer på roller som passar dig",
      "Jämförelse mot marknadens krav",
      "Tips på kompetenser att utveckla",
    ],
  },
  {
    icon: <ClockCounterClockwise size={28} weight="duotone" />,
    title: "Historik & paket",
    description: "Allt samlat på ett ställe",
    color: "emerald",
    features: [
      "Alla skapade CV-versioner",
      "Sparade personliga brev",
      "Jobbskanningar och analyser",
      "Export av komplett ansökningspaket",
    ],
  },
];

const flowSteps = ["Profildata", "Jobbskanning", "CV + brev", "Statistik"];

const Features = () => {
  return (
    <div className="space-y-4">
      {/* Hero */}
      <section className="section-block py-16 md:py-24">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <span className="label-text mb-4 block">Plattform</span>
            <h1 className="heading-xl mb-6">Funktioner</h1>
            <p className="text-lg text-muted-foreground">
              RebelCV är uppdelat i tydliga moduler som var och en löser en specifik del av jobbsökningsprocessen.
            </p>
          </div>
        </div>
      </section>

      {/* Flow visualization */}
      <section className="section-block py-8">
        <div className="container-main">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-2">
            {flowSteps.map((step, index) => (
              <div key={step} className="flex items-center gap-2 md:gap-4">
                <div className="px-5 py-2.5 rounded-full bg-violet-50 border border-violet-100">
                  <span className="text-sm font-medium text-violet-600">{step}</span>
                </div>
                {index < flowSteps.length - 1 && (
                  <ArrowRight size={16} weight="bold" className="text-muted-foreground hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {modules.map((module, index) => (
          <div key={index} className="section-block p-8 md:p-10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                module.color === "blue" ? "bg-blue-50 text-blue-600" :
                module.color === "violet" ? "bg-violet-50 text-violet-600" :
                "bg-emerald-50 text-emerald-600"
              }`}>
                {module.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">{module.title}</h3>
                <p className="text-muted-foreground text-sm">{module.description}</p>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {module.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                    module.color === "violet" ? "bg-violet-500" : 
                    module.color === "emerald" ? "bg-emerald-500" : "bg-blue-500"
                  }`} />
                  {feature}
                </li>
              ))}
            </ul>

            <Link to="/app-demo" className="text-violet-600 text-sm font-medium hover:underline">
              Se i action →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;