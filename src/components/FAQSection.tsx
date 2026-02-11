import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, Monitor, Zap, Bot } from "lucide-react";

const FAQSection = () => {
  const faqSections = [
    {
      title: "Website Development",
      icon: <Monitor className="w-5 h-5" />,
      faqs: [
        {
          question: "How long does it take to build a website?",
          answer: "Most small business websites are ready in 2-4 weeks. Larger online stores or custom platforms may take a bit longer, but we'll always give you a clear timeline upfront."
        },
        {
          question: "Will my website work on mobile phones?",
          answer: "Yes! Every website we build is fully responsive, meaning it looks and works perfectly on smartphones, tablets, and desktop computers."
        },
        {
          question: "Can I update the website myself?",
          answer: "Absolutely. We build sites that are easy to manage. We'll show you how to update text, images, and products so you don't need to call us for every little change."
        }
      ]
    },
    {
      title: "Business Automation",
      icon: <Zap className="w-5 h-5" />,
      faqs: [
        {
          question: "What exactly is business automation?",
          answer: "It's connecting your different apps (like email, calendar, and accounting software) so they talk to each other. For example, when someone fills out a form on your website, we can automatically add them to your email list and send them a welcome message."
        },
        {
          question: "Will it work with the software I already use?",
          answer: "In almost all cases, yes. We can connect with thousands of popular tools like QuickBooks, Gmail, Outlook, Salesforce, Slack, and many more."
        },
        {
          question: "Is it expensive to set up?",
          answer: "We offer affordable packages designed for small businesses. Automation actually saves you money by reducing the time you spend on manual data entry and admin tasks."
        }
      ]
    },
    {
      title: "General Questions",
      icon: <HelpCircle className="w-5 h-5" />,
      faqs: [
        {
          question: "Do you offer support after the project is done?",
          answer: "Yes! We're not going anywhere. We offer ongoing support packages to keep your website secure and your automations running smoothly."
        },
        {
          question: "How do we get started?",
          answer: "It's easy. Just click the 'Get Started' button to book a free call. We'll chat about your business and see how we can help – no pressure, no jargon."
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full text-primary font-medium mb-4 shadow-sm">
            <HelpCircle className="w-4 h-4" />
            Common Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Got Questions? <span className="text-gradient">We Have Answers.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about how we can help your business grow.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqSections.map((section, sectionIndex) => (
            <Card key={sectionIndex} className="border-slate-200 shadow-sm bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl text-slate-900">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {section.icon}
                  </div>
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {section.faqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`${sectionIndex}-${faqIndex}`} className="border-slate-100">
                      <AccordionTrigger className="text-left text-slate-800 hover:text-primary hover:no-underline font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;