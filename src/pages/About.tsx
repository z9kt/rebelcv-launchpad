import { Eye, Compass, Rocket, Lightbulb, Code, Users, Lightning, CheckCircle } from "@phosphor-icons/react";

const pillars = [
  { icon: <Eye size={28} weight="duotone" />, title: "Transparens", description: "Du ska alltid veta vad AI:n gör och varför.", color: "blue" },
  { icon: <Compass size={28} weight="duotone" />, title: "Kontroll", description: "Det är du som styr. AI:n föreslår, men du bestämmer.", color: "violet" },
  { icon: <Rocket size={28} weight="duotone" />, title: "Utveckling", description: "Verktyg som hjälper dig växa i din karriär.", color: "emerald" },
];

const timeline = [
  { 
    icon: <Lightbulb size={24} weight="duotone" />, 
    title: "Idén föds", 
    date: "Aug 2025", 
    description: "Frustrationen över att anpassa samma CV ledde till en fråga: varför kan inte detta automatiseras?",
    status: "completed"
  },
  { 
    icon: <Code size={24} weight="duotone" />, 
    title: "Första prototypen", 
    date: "Sep 2025", 
    description: "En första AI-driven matcher byggdes för att testa konceptet.",
    status: "completed"
  },
  { 
    icon: <Users size={24} weight="duotone" />, 
    title: "Betatest", 
    date: "Okt 2025", 
    description: "Tidiga användare testade plattformen och gav ovärderlig feedback.",
    status: "completed"
  },
  { 
    icon: <Lightning size={24} weight="duotone" />, 
    title: "Lansering", 
    date: "Dec 2025", 
    description: "RebelCV lanseras för allmänheten med full funktionalitet.",
    status: "current"
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

      <div className="grid md:grid-cols-3 gap-4">
        {pillars.map((pillar, index) => (
          <div key={index} className="section-block p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className={`w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center ${
              pillar.color === "blue" ? "bg-blue-50 text-blue-600" :
              pillar.color === "violet" ? "bg-violet-50 text-violet-600" : "bg-emerald-50 text-emerald-600"
            }`}>{pillar.icon}</div>
            <h3 className="text-xl font-semibold text-foreground mb-3">{pillar.title}</h3>
            <p className="text-muted-foreground">{pillar.description}</p>
          </div>
        ))}
      </div>

      {/* Roadmap Section */}
      <section className="section-block py-16 md:py-24 overflow-hidden">
        <div className="container-main max-w-4xl">
          <div className="text-center mb-16">
            <span className="label-text mb-4 block">Roadmap</span>
            <h2 className="text-3xl font-semibold text-foreground">Vår resa</h2>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-200 via-violet-400 to-violet-200 md:-translate-x-px" />
            
            {/* Decorative dots pattern */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-20 top-10 w-40 h-40 opacity-10">
              <div className="grid grid-cols-5 gap-3">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                ))}
              </div>
            </div>
            
            <div className="space-y-8 md:space-y-0">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content card */}
                  <div className={`flex-1 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <div className={`group relative bg-background rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                      item.status === 'current' ? 'ring-2 ring-violet-500/20' : ''
                    }`}>
                      {/* Glow effect for current item */}
                      {item.status === 'current' && (
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 to-transparent pointer-events-none" />
                      )}
                      
                      <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${
                          item.status === 'current' 
                            ? 'bg-violet-100 text-violet-700' 
                            : 'bg-emerald-100 text-emerald-700'
                        }`}>
                          {item.status === 'completed' && <CheckCircle size={12} weight="fill" />}
                          {item.date}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      
                      {/* Connector line to center */}
                      <div className={`hidden md:block absolute top-1/2 w-8 h-px bg-gradient-to-r ${
                        index % 2 === 0 
                          ? 'right-0 translate-x-full from-border/50 to-violet-400' 
                          : 'left-0 -translate-x-full from-violet-400 to-border/50'
                      }`} />
                    </div>
                  </div>
                  
                  {/* Center icon */}
                  <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 z-10">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                      item.status === 'current'
                        ? 'bg-gradient-to-br from-violet-500 to-violet-600 text-white shadow-violet-500/30'
                        : 'bg-white border-2 border-violet-200 text-violet-600'
                    }`}>
                      {item.icon}
                    </div>
                  </div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
            
            {/* Bottom decorative element */}
            <div className="absolute left-8 md:left-1/2 bottom-0 -translate-x-1/2 md:-translate-x-1/2">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 shadow-lg shadow-violet-500/30" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;