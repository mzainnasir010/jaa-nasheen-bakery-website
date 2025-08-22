//custom reuseable components

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How far in advance should I place my order?",
      answer: "For custom cakes and large orders, we recommend placing your order at least 48-72 hours in advance. For standard items, same-day orders are often available."
    },
    {
      question: "Do you offer delivery services?",
      answer: "Yes! We offer delivery within a 10-mile radius of our bakery. Delivery fees vary based on distance and order size. We also offer convenient pickup options."
    },
    {
      question: "Can you accommodate dietary restrictions?",
      answer: "Absolutely! We offer gluten-free, vegan, sugar-free, and nut-free options. Please inform us of any allergies or dietary requirements when placing your order."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Orders can be cancelled up to 24 hours before the scheduled pickup/delivery time for a full refund. Custom cake orders require 48 hours notice."
    },
    {
      question: "Do you cater events and weddings?",
      answer: "Yes! We specialize in wedding cakes, birthday parties, corporate events, and special occasions. Contact us to discuss your specific needs and get a custom quote."
    },
    {
      question: "How should I store my bakery items?",
      answer: "Most items are best consumed within 2-3 days. Store in a cool, dry place. Refrigerate items with cream or fresh fruit. We provide specific storage instructions with each order."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Frequently Asked <span className="text-primary italic">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services, orders, and policies
          </p>
        </div>

        <div className="w-full">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-playfair font-semibold text-lg text-foreground">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground">
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

export default FAQ;