import { Link } from "react-router-dom";
import { Check, Question } from "@phosphor-icons/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const plans = [
  {
    name: "Gratis",
    description: "Perfekt för att testa",
    price: "0 kr",
    period: "för alltid",
    features: [
      "1 jobbskanning per månad",
      "Grundläggande CV-mall",
      "Profilskapare",
      "PDF-export",
    ],
    cta: "Kom igång",
    popular: false,
  },
  {
    name: "Rebel",
    description: "För aktiva jobbsökare",
    price: "99 kr",
    period: "per månad",
    features: [
      "Obegränsade jobbskanningar",
      "AI-optimerade CV:n",
      "Personliga brev",
      "Alla exportformat",
      "Karriäranalys",
      "Versionshantering",
    ],
    cta: "Börja nu",
    popular: true,
  },
  {
    name: "Pro",
    description: "Maximalt stöd",
    price: "199 kr",
    period: "per månad",
    features: [
      "Allt i Rebel",
      "Prioriterad AI-kapacitet",
      "Avancerad matchningsanalys",
      "Branschspecifika mallar",
      "API-åtkomst",
      "Dedikerad support",
    ],
    cta: "Välj Pro",
    popular: false,
  },
];

const faqItems = [
  {
    question: "Kan jag byta plan när som helst?",
    answer: "Ja, du kan uppgradera eller nedgradera din plan när som helst. Ändringen träder i kraft direkt.",
  },
  {
    question: "Finns det bindningstid?",
    answer: "Nej, alla planer är utan bindningstid. Du kan avsluta när du vill.",
  },
  {
    question: "Hur fungerar gratisplanen?",
    answer: "Gratisplanen låter dig testa RebelCV med begränsad funktionalitet. Du kan skapa din profil och göra en jobbskanning per månad.",
  },
  {
    question: "Kan jag få återbetalning?",
    answer: "Vi erbjuder full återbetalning inom 14 dagar om du inte är nöjd med tjänsten.",
  },
];

const Pricing = () => {
  return (
    <div className="space-y-4">
      {/* Hero */}
      <section className="section-block py-16 md:py-24">
        <div className="container-main text-center">
          <span className="label-text mb-4 block">Prissättning</span>
          <h1 className="heading-xl mb-6">Priser</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Testa gratis, uppgradera när du behöver mer kraft.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`section-block p-8 relative ${
              plan.popular ? "ring-2 ring-violet-500/30" : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1.5 text-xs font-semibold text-white bg-violet-600 rounded-full shadow-lg">
                  Populärast
                </span>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
              <p className="text-muted-foreground text-sm">{plan.description}</p>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-bold text-foreground">{plan.price}</span>
              <span className="text-muted-foreground ml-2">{plan.period}</span>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <Check size={16} weight="bold" className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              to="/logga-in"
              className={plan.popular ? "btn-primary w-full text-center" : "btn-secondary w-full text-center"}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <section className="section-block block-gradient-blue py-16 md:py-24">
        <div className="container-main max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-violet-600">
              <Question size={24} weight="duotone" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">Frågor om priser</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border-0 overflow-hidden">
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

export default Pricing;