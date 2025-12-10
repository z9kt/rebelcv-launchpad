import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqCategories = [
  { title: "Allmänt", items: [
    { question: "Vad är RebelCV?", answer: "RebelCV är ett AI-drivet verktyg som hjälper dig skapa professionella CV:n och personliga brev anpassade för varje jobbansökan." },
    { question: "Behöver jag tekniska kunskaper?", answer: "Nej, RebelCV är designat för att vara enkelt att använda. Du behöver bara kunna fylla i formulär och klistra in text." },
    { question: "Vilka språk stöds?", answer: "Just nu stöder RebelCV svenska och engelska. Fler språk planeras framöver." },
  ]},
  { title: "AI och data", items: [
    { question: "Hur fungerar AI:n?", answer: "RebelCV använder avancerade språkmodeller för att analysera jobbannonser och matcha dem mot din profil." },
    { question: "Är min data säker?", answer: "Ja, all data krypteras och lagras säkert. Vi delar aldrig din information med tredje part utan ditt samtycke." },
  ]},
  { title: "Konto och betalning", items: [
    { question: "Hur avbryter jag min prenumeration?", answer: "Du kan avbryta din prenumeration när som helst via dina kontoinställningar." },
    { question: "Finns det studentrabatt?", answer: "Ja, vi erbjuder 50% rabatt för studenter med giltigt student-ID." },
  ]},
];

const FAQ = () => {
  return (
    <div className="space-y-4">
      <section className="section-block py-16 md:py-24">
        <div className="container-main max-w-3xl mx-auto text-center">
          <span className="label-text mb-4 block">Support</span>
          <h1 className="heading-xl mb-6">Vanliga frågor</h1>
          <p className="text-lg text-muted-foreground">Hitta svar på de vanligaste frågorna om RebelCV.</p>
        </div>
      </section>

      <section className="section-block block-gradient-blue py-16 md:py-24">
        <div className="container-main max-w-3xl">
          <div className="space-y-12">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h2 className="text-xl font-semibold text-foreground mb-6">{category.title}</h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {category.items.map((item, index) => (
                    <AccordionItem key={index} value={`${catIndex}-${index}`} className="bg-white rounded-xl border-0 overflow-hidden">
                      <AccordionTrigger className="px-6 py-4 text-foreground hover:no-underline text-left">{item.question}</AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-muted-foreground">{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
