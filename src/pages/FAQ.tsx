import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "Allmänt",
    items: [
      {
        question: "Vad är RebelCV?",
        answer: "RebelCV är ett AI-drivet verktyg som hjälper dig skapa professionella CV:n och personliga brev anpassade för varje jobbansökan. Du bygger din profil en gång och låter AI:n anpassa presentationen för varje tjänst.",
      },
      {
        question: "Behöver jag tekniska kunskaper?",
        answer: "Nej, RebelCV är designat för att vara enkelt att använda. Du behöver bara kunna fylla i formulär och klistra in text. Allt annat sköter verktyget åt dig.",
      },
      {
        question: "Vilka språk stöds?",
        answer: "Just nu stöder RebelCV svenska och engelska. Fler språk planeras att läggas till framöver.",
      },
    ],
  },
  {
    title: "AI och data",
    items: [
      {
        question: "Hur fungerar AI:n?",
        answer: "RebelCV använder avancerade språkmodeller för att analysera jobbannonser och matcha dem mot din profil. AI:n identifierar nyckelord, krav och förväntningar och hjälper dig framhäva relevanta erfarenheter.",
      },
      {
        question: "Är min data säker?",
        answer: "Ja, vi tar datasäkerhet på allvar. All data krypteras och lagras säkert. Vi delar aldrig din information med tredje part utan ditt samtycke.",
      },
      {
        question: "Kan AI:n göra fel?",
        answer: "Som all AI kan RebelCV ibland missa nyanser. Därför har du alltid full kontroll att redigera och justera allt innehåll innan du exporterar eller skickar.",
      },
    ],
  },
  {
    title: "Funktioner",
    items: [
      {
        question: "Vad är en jobbskanning?",
        answer: "En jobbskanning innebär att du klistrar in en jobbannons och låter AI:n analysera kraven. Du får en matchningsprocent och konkreta tips på vad som matchar och vad du kan förbättra.",
      },
      {
        question: "Hur fungerar personliga brev?",
        answer: "Baserat på din profil och den skannade jobbannonsen genererar AI:n ett skräddarsytt personligt brev. Du kan sedan redigera det fritt innan du exporterar.",
      },
      {
        question: "Kan jag exportera till olika format?",
        answer: "Ja, du kan exportera ditt CV och personliga brev till PDF, Word eller skapa en delbar länk. Alla betalande planer inkluderar alla exportformat.",
      },
    ],
  },
  {
    title: "Konto och betalning",
    items: [
      {
        question: "Hur avbryter jag min prenumeration?",
        answer: "Du kan avbryta din prenumeration när som helst via dina kontoinställningar. Avbrytningen träder i kraft vid nästa faktureringsperiod.",
      },
      {
        question: "Finns det studentrabatt?",
        answer: "Ja, vi erbjuder 50% rabatt för studenter med giltigt student-ID. Kontakta vår support för att aktivera rabatten.",
      },
      {
        question: "Vad händer med min data om jag avslutar kontot?",
        answer: "Du kan exportera all din data innan du avslutar. Efter avslutad konto raderas din data permanent inom 30 dagar enligt GDPR.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <span className="label-text mb-4 block">Support</span>
            <h1 className="heading-xl mb-6">Vanliga frågor</h1>
            <p className="text-lg text-slate-300">
              Hitta svar på de vanligaste frågorna om RebelCV. Hittar du inte det du söker? Kontakta oss!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section-padding bg-black/30">
        <div className="container-main max-w-3xl">
          <div className="space-y-12">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h2 className="text-xl font-semibold text-slate-50 mb-6">{category.title}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.items.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`${catIndex}-${index}`}
                      className="card-dark border-0"
                    >
                      <AccordionTrigger className="px-6 py-4 text-slate-50 hover:no-underline text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-slate-400">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
