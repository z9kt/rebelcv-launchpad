import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  {
    number: "01",
    title: "Bygg din profil",
    description: "Fyll i dina erfarenheter, utbildningar och färdigheter. RebelCV strukturerar allt automatiskt.",
    userActions: [
      "Lägg in dina jobb, roller och ansvar",
      "Beskriv utbildningar och kurser",
      "Lista kompetenser och språk",
    ],
    aiActions: [
      "Strukturerar och optimerar innehållet",
      "Identifierar nyckelord och styrkor",
      "Skapar en sökbar profil",
    ],
  },
  {
    number: "02",
    title: "Skanna jobbannons",
    description: "Klistra in en jobbannons. AI:n analyserar kraven och visar hur väl du matchar.",
    userActions: [
      "Klistra in jobbannons-URL eller text",
      "Se matchningsgrad direkt",
      "Granska AI:ns analys",
    ],
    aiActions: [
      "Extraherar krav och önskemål",
      "Beräknar din matchning i procent",
      "Identifierar gap och styrkor",
    ],
  },
  {
    number: "03",
    title: "Skapa jobbpaket",
    description: "Få ett skräddarsytt CV, personligt brev och formulärtexter anpassade för tjänsten.",
    userActions: [
      "Välj vad som ska ingå i paketet",
      "Granska och finjustera om du vill",
      "Ladda ner eller kopiera direkt",
    ],
    aiActions: [
      "Genererar anpassat CV",
      "Skriver personligt brev",
      "Skapar svar på vanliga frågor",
    ],
  },
];

const faqItems = [
  {
    question: "Hur lång tid tar det att komma igång?",
    answer: "De flesta användare har sin profil redo inom 10-15 minuter. Därefter tar det bara sekunder att generera anpassade ansökningar.",
  },
  {
    question: "Kan jag redigera det AI:n skapar?",
    answer: "Absolut! Allt som genereras är fullt redigerbart. Du har full kontroll över slutresultatet.",
  },
  {
    question: "Fungerar det för alla branscher?",
    answer: "Ja, RebelCV är tränat på jobbannonser från alla branscher och anpassar språk och fokus efter varje tjänst.",
  },
];

const HowItWorks = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container-main text-center">
          <span className="label-text mb-4 block text-primary">Process</span>
          <h1 className="heading-lg mb-6">Så funkar RebelCV</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Från jobbannons till färdigt ansökningspaket på några minuter. 
            Tre enkla steg som sparar timmar av arbete.
          </p>
        </div>
      </section>

      {/* Steps Section - Unified background */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-main">
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 hidden md:block" />
            
            <div className="space-y-8 md:space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step card */}
                  <div className="bg-background rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-lg transition-all duration-300 md:ml-20 border border-border/30">
                    {/* Step number - positioned to overlap the connector line */}
                    <div className="absolute left-0 md:left-0 top-8 md:top-12">
                      <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-background shadow-lg flex items-center justify-center border-2 border-primary/20">
                        <span className="font-script text-3xl md:text-5xl text-primary font-semibold">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:pl-8">
                      {/* Header */}
                      <div className="mb-8">
                        <span className="text-xs uppercase tracking-widest text-primary/60 mb-2 block">
                          Steg {step.number}
                        </span>
                        <h2 className="font-script text-3xl md:text-4xl text-foreground mb-3">
                          {step.title}
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl">
                          {step.description}
                        </p>
                      </div>

                      {/* Two columns: User vs AI */}
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* User column */}
                        <div className="bg-muted/50 rounded-2xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                              <span className="text-sm font-medium text-muted-foreground">Du</span>
                            </div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                              Vad du gör
                            </h3>
                          </div>
                          <ul className="space-y-3">
                            {step.userActions.map((action, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0" />
                                <span className="text-muted-foreground">{action}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* AI column */}
                        <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                              <span className="text-sm font-medium text-primary">AI</span>
                            </div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary/70">
                              Vad AI gör
                            </h3>
                          </div>
                          <ul className="space-y-3">
                            {step.aiActions.map((action, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <span className="text-foreground">{action}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-main max-w-3xl">
          <div className="text-center mb-12">
            <span className="label-text mb-4 block text-primary">Vanliga frågor</span>
            <h2 className="heading-md">Snabba svar</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-2xl px-6 border border-border/50 shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg font-medium py-5 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
