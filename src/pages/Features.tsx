import { LayoutDashboard, Search, FileText, PenTool, TrendingUp, History, ArrowRight } from "lucide-react";
import { IconTile } from "@/components/ui/IconTile";

const modules = [
  {
    icon: <LayoutDashboard size={28} />,
    title: "Dashboard",
    description: "Din centrala utgångspunkt",
    features: [
      "Överblick av alla dina ansökningar",
      "Snabbval för vanliga åtgärder",
      "Statistik över din jobbsökning",
      "AI-drivna tips och rekommendationer",
      "Status på pågående ansökningar",
    ],
  },
  {
    icon: <Search size={28} />,
    title: "Jobbskanning",
    description: "Analysera vilken annons som helst",
    features: [
      "Klistra in eller länka till jobbannons",
      "Automatisk extraktion av nyckelkrav",
      "Matchningsprocent mot din profil",
      "Identifiering av styrkor och luckor",
      "Spara jobb för framtida referens",
    ],
  },
  {
    icon: <FileText size={28} />,
    title: "Jobbanpassat CV",
    description: "Skräddarsytt för varje tjänst",
    features: [
      "Automatiskt anpassat utifrån jobbkrav",
      "Välj vilka erfarenheter som betonas",
      "ATS-optimerade formuleringar",
      "Export till PDF, Word eller delbar länk",
      "Versionshantering för alla CV:n",
    ],
  },
  {
    icon: <PenTool size={28} />,
    title: "Personligt brev",
    description: "Övertyga på rätt sätt",
    features: [
      "Byggt på din profil och jobbkraven",
      "Anpassad ton och längd",
      "Framhäver relevanta erfarenheter",
      "Enkelt att redigera och förfina",
      "Stöd för olika språk",
    ],
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Optimal för dig",
    description: "Karriäranalys och insikter",
    features: [
      "Analys av dina styrkor och utvecklingsområden",
      "Rekommendationer på roller som passar dig",
      "Jämförelse mot marknadens krav",
      "Tips på kompetenser att utveckla",
      "Trendanalys inom din bransch",
    ],
  },
  {
    icon: <History size={28} />,
    title: "Historik & paket",
    description: "Allt samlat på ett ställe",
    features: [
      "Alla skapade CV-versioner",
      "Sparade personliga brev",
      "Jobbskanningar och analyser",
      "Sökbar historik",
      "Export av komplett ansökningspaket",
    ],
  },
];

const flowSteps = ["Profildata", "Jobbskanning", "CV + brev", "Statistik"];

const Features = () => {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-3xl">
            <span className="label-text mb-4 block">Plattform</span>
            <h1 className="heading-xl mb-6">Funktioner</h1>
            <p className="text-lg text-muted-foreground">
              RebelCV är uppdelat i tydliga moduler som var och en löser en specifik del av jobbsökningsprocessen. Tillsammans ger de dig full kontroll.
            </p>
          </div>
        </div>
      </section>

      {/* Flow visualization */}
      <section className="py-8">
        <div className="container-main">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-2">
            {flowSteps.map((step, index) => (
              <div key={step} className="flex items-center gap-2 md:gap-4">
                <div className="px-4 py-2 rounded-full bg-muted border border-border">
                  <span className="text-sm font-medium text-foreground">{step}</span>
                </div>
                {index < flowSteps.length - 1 && (
                  <ArrowRight size={16} className="text-muted-foreground hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="section-padding bg-muted/50">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <div key={index} className="card-light p-8">
                <div className="flex items-start gap-4 mb-6">
                  <IconTile>{module.icon}</IconTile>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{module.title}</h3>
                    <p className="text-muted-foreground text-sm">{module.description}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {module.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;