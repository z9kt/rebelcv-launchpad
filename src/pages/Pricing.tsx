import { Link } from "react-router-dom";
import { Check, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IconTile } from "@/components/ui/IconTile";

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
    answer: "Ja, du kan uppgradera eller nedgradera din plan när som helst. Ändringen träder i kraft direkt och du betalar proportionerligt för resten av perioden.",
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
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-main text-center">
          <span className="label-text mb-4 block">Prissättning</span>
          <h1 className="heading-xl mb-6">Priser</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Testa gratis, uppgradera när du behöver mer kraft. Alla planer inkluderar våra grundfunktioner.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16">
        <div className="container-main">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`card-light p-8 relative ${
                  plan.popular ? "border-primary/50 ring-1 ring-primary/20" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 text-xs font-semibold text-white bg-primary rounded-full">
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
                      <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
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
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/50">
        <div className="container-main max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <IconTile size="sm"><HelpCircle size={20} /></IconTile>
            <h2 className="heading-md">Frågor om priser</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="card-light border border-border">
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
    </>
  );
};

export default Pricing;