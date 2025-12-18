import { Eye, Compass, Rocket } from "@phosphor-icons/react";

const pillars = [
  { icon: <Eye size={28} weight="duotone" />, title: "Transparens", description: "Du ska alltid veta vad AI:n gör och varför.", color: "blue" },
  { icon: <Compass size={28} weight="duotone" />, title: "Kontroll", description: "Det är du som styr. AI:n föreslår, men du bestämmer.", color: "violet" },
  { icon: <Rocket size={28} weight="duotone" />, title: "Utveckling", description: "Verktyg som hjälper dig växa i din karriär.", color: "emerald" },
];

const timeline = [
  { 
    title: "Idén föds", 
    date: "Aug 2025", 
    description: "Frustrationen över att anpassa samma CV ledde till en fråga: varför kan inte detta automatiseras?",
    completed: true
  },
  { 
    title: "Prototypen", 
    date: "Sep 2025", 
    description: "En första AI-driven matcher byggdes för att testa konceptet.",
    completed: true
  },
  { 
    title: "Betatest", 
    date: "Okt 2025", 
    description: "Tidiga användare testade plattformen och gav ovärderlig feedback.",
    completed: true
  },
  { 
    title: "Lansering", 
    date: "Dec 2025", 
    description: "RebelCV lanseras för allmänheten med full funktionalitet.",
    completed: false,
    current: true
  },
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

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {pillars.map((pillar, index) => (
          <div key={index} className="section-block p-6 md:p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl mx-auto mb-4 md:mb-6 flex items-center justify-center ${
              pillar.color === "blue" ? "bg-blue-50 text-blue-600" :
              pillar.color === "violet" ? "bg-violet-50 text-violet-600" : "bg-emerald-50 text-emerald-600"
            }`}>{pillar.icon}</div>
            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">{pillar.title}</h3>
            <p className="text-sm md:text-base text-muted-foreground">{pillar.description}</p>
          </div>
        ))}
      </div>

      {/* Roadmap Section */}
      <section className="section-block py-20 md:py-28">
        <div className="container-main">
          <div className="text-center mb-16">
            <span className="label-text mb-4 block">Roadmap</span>
            <h2 className="text-3xl font-semibold text-foreground">Vår resa</h2>
          </div>
          
          {/* Desktop: Horizontal Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Horizontal line */}
              <div className="absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
              
              <div className="grid grid-cols-4 gap-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative text-center group">
                    {/* Dot */}
                    <div className={`relative z-10 w-3 h-3 mx-auto rounded-full transition-all duration-300 ${
                      item.current 
                        ? 'bg-violet-500 ring-4 ring-violet-200 scale-125' 
                        : item.completed 
                          ? 'bg-violet-400 group-hover:scale-110' 
                          : 'bg-muted-foreground/30'
                    }`}>
                      {item.current && (
                        <div className="absolute inset-0 rounded-full bg-violet-500 animate-ping opacity-30" />
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="mt-8 px-2">
                      <span className="text-xs font-medium text-muted-foreground/70 uppercase tracking-wider">
                        {item.date}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-semibold text-foreground mt-2 mb-3 transition-colors group-hover:text-violet-600">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: Vertical Timeline */}
          <div className="md:hidden">
            <div className="relative pl-8">
              {/* Vertical line */}
              <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-300 via-violet-400 to-violet-200" />
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative group">
                    {/* Dot */}
                    <div className={`absolute -left-8 top-1 w-3 h-3 rounded-full transition-all duration-300 ${
                      item.current 
                        ? 'bg-violet-500 ring-4 ring-violet-200 scale-125' 
                        : item.completed 
                          ? 'bg-violet-400' 
                          : 'bg-muted-foreground/30'
                    }`}>
                      {item.current && (
                        <div className="absolute inset-0 rounded-full bg-violet-500 animate-ping opacity-30" />
                      )}
                    </div>
                    
                    {/* Content */}
                    <div>
                      <span className="text-xs font-medium text-muted-foreground/70 uppercase tracking-wider">
                        {item.date}
                      </span>
                      <h3 className="text-3xl font-semibold text-foreground mt-1 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;