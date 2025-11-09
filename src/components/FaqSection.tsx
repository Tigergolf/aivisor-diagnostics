import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FaqSection = () => {
  const faqs = [
    {
      question: "Is there a cost to join the network?",
      answer: "No, there is no upfront cost to join AIVisors. We take a platform fee on successful projects to maintain the infrastructure, governance tools, and client matching services.",
    },
    {
      question: "How are projects assigned?",
      answer: "Projects are matched based on your specialization, availability, and the specific needs of the firm. Our intelligent matching system ensures the best fit for both advisor and client.",
    },
    {
      question: "What automation packs does AIVisors provide?",
      answer: "We provide pre-built automation solutions for common professional services workflows including invoice processing, time tracking, client intake, document generation, and CRM integrations. You'll implement these proven tools rather than building from scratch.",
    },
    {
      question: "How does ROI tracking work?",
      answer: "Our platform includes built-in metrics tracking that monitors time saved, error reduction, and productivity gains. This data is automatically compiled into reports that prove your value to clients.",
    },
    {
      question: "What makes AIVisors different from Upwork or Fiverr?",
      answer: "AIVisors is designed for long-term advisory relationships, not one-off gigs. Clients are pre-qualified and ready to invest, you have access to proven automation tools, and the platform handles governance and compliance so you can focus on delivering results.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
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
