import { User, Search, FileCheck, HelpCircle } from "lucide-react";
import { IconTile } from "@/components/ui/IconTile";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  {
    icon: <User size={32} />,
    title: "1. Bygg din profil",
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
    icon: <Search size={32} />,
    title: "2. Skanna jobb",
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
    icon: <FileCheck size={32} />,
    title: "3. Skapa jobbpakt",
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
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-3xl">
            <span className="label-text mb-4 block">Process</span>
            <h1 className="heading-xl mb-6">Så funkar RebelCV</h1>
            <p className="text-lg text-slate-300">
              RebelCV bygger på en enkel idé: din profil är basen, och varje jobbansökan blir en unik anpassning. Du berättar vem du är, vi hjälper dig visa det på bästa sätt för varje arbetsgivare.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-black/30">
        <div className="container-main">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="card-dark p-8 md:p-12">
                <div className="flex items-start gap-6 mb-8">
                  <IconTile size="lg">{step.icon}</IconTile>
                  <h2 className="heading-md">{step.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-50 mb-4 uppercase tracking-wider">
                      Vad du gör
                    </h3>
                    <ul className="space-y-3">
                      {step.userActions.map((action, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-50 mb-4 uppercase tracking-wider">
                      Vad AI gör
                    </h3>
                    <ul className="space-y-3">
                      {step.aiActions.map((action, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-mid mt-2 flex-shrink-0" />
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
      <section className="section-padding">
        <div className="container-main max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <IconTile size="sm"><HelpCircle size={20} /></IconTile>
            <h2 className="heading-md">Vanliga frågor om processen</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="card-dark border-0">
                <AccordionTrigger className="px-6 py-4 text-slate-50 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-slate-400">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
