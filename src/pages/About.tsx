import { Eye, Compass, Rocket, Lightbulb, Code, Users, Zap } from "lucide-react";
import { IconTile } from "@/components/ui/IconTile";

const pillars = [
  {
    icon: <Eye size={28} />,
    title: "Transparens",
    description: "Du ska alltid veta vad AI:n gör och varför. Inga svarta lådor – full insyn i matchningar och rekommendationer.",
  },
  {
    icon: <Compass size={28} />,
    title: "Kontroll",
    description: "Det är du som styr. AI:n föreslår, men du bestämmer vad som ska synas och hur det ska formuleras.",
  },
  {
    icon: <Rocket size={28} />,
    title: "Utveckling",
    description: "Vi bygger verktyg som hjälper dig växa. Inte bara få nästa jobb, utan utvecklas i din karriär.",
  },
];

const timeline = [
  {
    icon: <Lightbulb size={20} />,
    title: "Idén föds",
    date: "Aug 2025",
    description: "Frustrationen över att ständigt anpassa samma CV-dokument ledde till en enkel fråga: varför kan inte detta automatiseras?",
  },
  {
    icon: <Code size={20} />,
    title: "Första prototypen",
    date: "Sep 2025",
    description: "En första AI-driven matcher byggdes för att testa konceptet. Resultaten var lovande.",
  },
  {
    icon: <Users size={20} />,
    title: "Betatest",
    date: "Okt 2025",
    description: "Tidiga användare testade plattformen och gav ovärderlig feedback som formade produkten.",
  },
  {
    icon: <Zap size={20} />,
    title: "Lansering",
    date: "Dec 2025",
    description: "RebelCV lanseras för allmänheten med full funktionalitet och växande användarbas.",
  },
];

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-3xl">
            <span className="label-text mb-4 block">Vision</span>
            <h1 className="heading-xl mb-6">Om RebelCV</h1>
            <p className="text-lg text-muted-foreground">
              Vi tror att jobbsökning kan vara strategiskt istället för slitsamt. RebelCV föddes ur frustrationen av att ständigt anpassa samma dokument för hand – och insikten att AI kan göra det bättre.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-muted/50">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md mb-6">Vår mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Att ge varje jobbsökare verktygen för att presentera sig på bästa möjliga sätt – utan att spendera oändliga timmar på formatering och omskrivningar.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="heading-md">Det vi tror på</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <div key={index} className="card-light p-8 text-center">
                <div className="flex justify-center mb-6">
                  <IconTile>{pillar.icon}</IconTile>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-muted/50">
        <div className="container-main max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="heading-md">Vår resa</h2>
          </div>

          <div className="relative">
            {/* Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 -ml-4 rounded-full bg-primary flex items-center justify-center z-10 text-white">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-16 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? "md:mr-auto md:text-right md:pr-12" : "md:ml-auto md:pl-12"
                    }`}
                  >
                    <span className="text-sm text-primary font-medium">{item.date}</span>
                    <h3 className="text-lg font-semibold text-foreground mt-1">{item.title}</h3>
                    <p className="text-muted-foreground mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;