import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need any equipment?",
    answer: "No. I bring all necessary professional equipment with me.",
  },
  {
    question: "Do I need a referral?",
    answer: "No referral is required.",
  },
  {
    question: "What should I wear?",
    answer: "Comfortable clothing that allows movement is recommended.",
  },
  {
    question: "Is chiropractic safe?",
    answer: "Chiropractic care is regulated in the UK. All treatment is preceded by a thorough consultation and provided only where clinically appropriate.",
  },
  {
    question: "What if chiropractic isn't suitable for me?",
    answer: "This will be discussed during your consultation, and you may be referred to another healthcare provider if needed.",
  },
];

export const FAQs = () => {
  return (
    <section id="faqs" className="section-padding bg-card">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
              FAQs
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-xl border border-border px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-serif font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
