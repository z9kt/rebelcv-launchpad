import { Eye, Compass, Rocket, Lightbulb, Code, Users, Zap } from "lucide-react";

const pillars = [
  { icon: <Eye size={28} />, title: "Transparens", description: "Du ska alltid veta vad AI:n gör och varför.", color: "blue" },
  { icon: <Compass size={28} />, title: "Kontroll", description: "Det är du som styr. AI:n föreslår, men du bestämmer.", color: "violet" },
  { icon: <Rocket size={28} />, title: "Utveckling", description: "Verktyg som hjälper dig växa i din karriär.", color: "emerald" },
];

const timeline = [
  { icon: <Lightbulb size={20} />, title: "Idén föds", date: "Aug 2025", description: "Frustrationen över att anpassa samma CV ledde till en fråga: varför kan inte detta automatiseras?" },
  { icon: <Code size={20} />, title: "Första prototypen", date: "Sep 2025", description: "En första AI-driven matcher byggdes för att testa konceptet." },
  { icon: <Users size={20} />, title: "Betatest", date: "Okt 2025", description: "Tidiga användare testade plattformen och gav ovärderlig feedback." },
  { icon: <Zap size={20} />, title: "Lansering", date: "Dec 2025", description: "RebelCV lanseras för allmänheten med full funktionalitet." },
];

const About = () => {
  return (
    <div className="space-y-4">
      <section className="section-block py-16 md:py-24">
        <div className="container-main max-w-3xl mx-auto text-center">
          <span className="label-text mb-4 block">Vision</span>
          <h1 className="heading-xl mb-6">Om RebelCV</h1>
          <p className="text-lg text-muted-foreground">Vi tror att jobbsökning kan vara strategiskt istället för slitsamt.</p>
        </div>
      </section>

      <section className="section-block block-gradient-blue py-16 md:py-24">
        <div className="container-main max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Vår mission</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Att ge varje jobbsökare verktygen för att presentera sig på bästa möjliga sätt – utan att spendera oändliga timmar på formatering.
          </p>
        </div>
      </section>

      <div className="grid md:grid-cols-3 gap-4">
        {pillars.map((pillar, index) => (
          <div key={index} className="section-block p-8 text-center">
            <div className={`w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center ${
              pillar.color === "blue" ? "bg-blue-50 text-blue-600" :
              pillar.color === "violet" ? "bg-violet-50 text-violet-600" : "bg-emerald-50 text-emerald-600"
            }`}>{pillar.icon}</div>
            <h3 className="text-xl font-semibold text-foreground mb-3">{pillar.title}</h3>
            <p className="text-muted-foreground">{pillar.description}</p>
          </div>
        ))}
      </div>

      <section className="section-block py-16 md:py-24">
        <div className="container-main max-w-3xl">
          <h2 className="text-2xl font-semibold text-foreground mb-12 text-center">Vår resa</h2>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-4 p-6 bg-muted/50 rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">{item.icon}</div>
                <div>
                  <span className="text-sm text-blue-600 font-medium">{item.date}</span>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
