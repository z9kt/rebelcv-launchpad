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
    glowColor: "primary" as const,
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
    glowColor: "violet" as const,
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
    glowColor: "emerald" as const,
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
    glowColor: "primary" as const,
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
    glowColor: "violet" as const,
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
    glowColor: "emerald" as const,
  },
];

const flowSteps = ["Profildata", "Jobbskanning", "CV + brev", "Statistik"];

const Features = () => {
  return (
    <>
      {/* Hero with decorative elements */}
      <section className="relative section-padding overflow-hidden">
        {/* Decorative blurs */}
        <div className="glow-blur glow-blur-primary w-[500px] h-[500px] -top-64 -left-64" />
        <div className="glow-blur glow-blur-violet w-[400px] h-[400px] top-0 -right-48" />
        
        <div className="container-main relative z-10">
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
      <section className="py-8 bg-gradient-to-b from-transparent to-muted/30">
        <div className="container-main">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-2">
            {flowSteps.map((step, index) => (
              <div key={step} className="flex items-center gap-2 md:gap-4">
                <div className="px-5 py-2.5 rounded-full bg-card border border-border shadow-md">
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
      <section className="section-padding bg-gradient-to-b from-muted/30 to-muted/60">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <div key={index} className="card-premium p-8">
                <div className="flex items-start gap-4 mb-6">
                  <IconTile glowColor={module.glowColor}>{module.icon}</IconTile>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{module.title}</h3>
                    <p className="text-muted-foreground text-sm">{module.description}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {module.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                        module.glowColor === 'violet' ? 'bg-violet-500' : 
                        module.glowColor === 'emerald' ? 'bg-emerald-500' : 'bg-primary'
                      }`} />
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
