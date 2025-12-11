import { UserCircle, MagnifyingGlass, CheckSquare, Question } from "@phosphor-icons/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  {
    icon: <UserCircle size={28} weight="duotone" />,
    title: "1. Bygg din profil",
    color: "emerald",
    userActions: [
      "Fyll i arbetslivserfarenhet med roller, företag och beskrivningar",
      "Lägg till utbildningar och certifieringar",
      "Specificera dina kompetenser och färdigheter",
      "Beskriv dina mål och preferenser",
    ],
    aiActions: [
      "Strukturerar din information automatiskt",
      "Föreslår förbättringar och tillägg",
      "Identifierar styrkor och utvecklingsområden",
    ],
  },
  {
    icon: <MagnifyingGlass size={28} weight="duotone" />,
    title: "2. Skanna jobb",
    color: "violet",
    userActions: [
      "Klistra in en jobbannons eller länka till den",
      "Granska den automatiska analysen",
      "Spara intressanta jobb för framtida referens",
    ],
    aiActions: [
      "Extraherar nyckelkrav från annonsen",
      "Beräknar din matchningsprocent",
      "Visar vilka av dina erfarenheter som är mest relevanta",
      "Identifierar luckor du kan adressera",
    ],
  },
  {
    icon: <CheckSquare size={28} weight="duotone" />,
    title: "3. Skapa jobbpaket",
    color: "blue",
    userActions: [
      "Välj vilka delar av din profil som ska betonas",
      "Granska och redigera det genererade innehållet",
      "Exportera i valfritt format",
    ],
    aiActions: [
      "Skapar ett skräddarsytt CV för tjänsten",
      "Genererar ett personligt brev",
      "Förbereder svar på vanliga ansökningsfrågor",
      "Optimerar formuleringar för ATS-system",
    ],
  },
];

const faqItems = [
  {
    question: "Behöver jag ha ett färdigt CV?",
    answer: "Nej, du kan börja från scratch genom att fylla i din profil. RebelCV hjälper dig strukturera allt från grunden.",
  },
  {
    question: "Hur lång tid tar det att komma igång?",
    answer: "Du kan ha din första profil klar på 15-20 minuter. Ju mer detaljer du lägger in, desto bättre blir resultaten.",
  },
  {
    question: "Kan jag använda RebelCV för flera jobb?",
    answer: "Absolut! Det är precis så verktyget är tänkt att användas. Varje jobbansökan kan generera ett unikt, anpassat CV och brev.",
  },
];

const HowItWorks = () => {
  return (
    <div className="space-y-4">
      {/* Hero */}
      <section className="section-block py-16 md:py-24">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <span className="label-text mb-4 block">Process</span>
            <h1 className="heading-xl mb-6">Så funkar RebelCV</h1>
            <p className="text-lg text-muted-foreground">
              RebelCV bygger på en enkel idé: din profil är basen, och varje jobbansökan blir en unik anpassning.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-block block-gradient-blue py-16 md:py-24">
        <div className="container-main">
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 md:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                    step.color === "emerald" ? "bg-emerald-50 text-emerald-600" :
                    step.color === "violet" ? "bg-violet-50 text-violet-600" :
                    "bg-blue-50 text-blue-600"
                  }`}>
                    {step.icon}
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">{step.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-muted/50">
                    <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                      Vad du gör
                    </h3>
                    <ul className="space-y-3">
                      {step.userActions.map((action, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                            step.color === "emerald" ? "bg-emerald-500" :
                            step.color === "violet" ? "bg-violet-500" :
                            "bg-blue-500"
                          }`} />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`p-6 rounded-xl ${
                    step.color === "emerald" ? "bg-emerald-50" :
                    step.color === "violet" ? "bg-violet-50" :
                    "bg-blue-50"
                  }`}>
                    <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                      Vad AI gör
                    </h3>
                    <ul className="space-y-3">
                      {step.aiActions.map((action, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                            step.color === "emerald" ? "bg-emerald-500" :
                            step.color === "violet" ? "bg-violet-500" :
                            "bg-blue-500"
                          }`} />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="section-block py-16 md:py-24">
        <div className="container-main max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-violet-50 flex items-center justify-center text-violet-600">
              <Question size={24} weight="duotone" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">Vanliga frågor om processen</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-muted/50 rounded-xl border-0 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
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