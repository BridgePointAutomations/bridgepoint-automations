import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, Settings, TrendingUp, Rocket } from "lucide-react";

const FAQSection = () => {
  const faqSections = [
    {
      title: "Our Automation Approach",
      icon: <Settings className="w-5 h-5" />,
      faqs: [
        {
          question: "What tools and platforms do you use?",
          answer: (
            <div className="space-y-3">
              <p>We select the best automation platform for YOUR specific needs during our discovery audit. This approach ensures:</p>
              <ul className="space-y-2 ml-4">
                <li><strong>Perfect fit:</strong> Match tools to your existing software ecosystem</li>
                <li><strong>Cost efficiency:</strong> No paying for features you don't need</li>
                <li><strong>Scalability:</strong> Platform grows with your business</li>
                <li><strong>Security & compliance:</strong> Meet your industry requirements</li>
              </ul>
              <p><strong>Why we don't prescribe tools upfront:</strong> Every business is unique. Your current CRM, email provider, accounting software, and industry requirements all influence which platform delivers the best ROI.</p>
              <p className="mt-3"><strong>During your free audit,</strong> we'll recommend the optimal platform stack and explain exactly why it's the right choice for you.</p>
            </div>
          )
        },
        {
          question: "How do you connect my existing business software?",
          answer: (
            <div className="space-y-3">
              <p>Our automation platforms can connect virtually any business software:</p>
              <ul className="space-y-2 ml-4">
                <li><strong>8,000+ pre-built connectors:</strong> QuickBooks, Salesforce, Gmail, Slack, Shopify, etc.</li>
                <li><strong>Custom API integrations:</strong> Connect proprietary or industry-specific software</li>
                <li><strong>Legacy system support:</strong> Even older software can be integrated</li>
                <li><strong>Real-time sync:</strong> Data flows instantly between systems</li>
                <li><strong>Secure connections:</strong> Bank-level encryption and authentication</li>
              </ul>
              <p><strong>Free compatibility check:</strong> We'll evaluate your current software stack during the audit.</p>
            </div>
          )
        },
        {
          question: "Are you locked into specific automation vendors?",
          answer: (
            <div className="space-y-3">
              <p>No! Our vendor-agnostic approach benefits you:</p>
              <ul className="space-y-2 ml-4">
                <li><strong>Best-in-class solutions:</strong> We use whichever platform excels for your use case</li>
                <li><strong>No kickbacks:</strong> We don't receive commissions from platform vendors</li>
                <li><strong>Future-proof:</strong> Can migrate to new platforms as technology evolves</li>
                <li><strong>Cost optimization:</strong> Choose based on your budget and task volume</li>
              </ul>
              <p><strong>Multi-platform expertise:</strong> Our team is certified across multiple enterprise automation platforms, ensuring you get unbiased recommendations.</p>
            </div>
          )
        },
        {
          question: "What makes your automation different from DIY solutions?",
          answer: (
            <div className="space-y-3">
              <p>While DIY automation tools exist, our service provides:</p>
              <ul className="space-y-2 ml-4">
                <li><strong>Expert architecture:</strong> We design workflows for scalability and reliability</li>
                <li><strong>Error handling:</strong> Built-in retry logic, fallbacks, and monitoring</li>
                <li><strong>Ongoing maintenance:</strong> Platform updates, bug fixes, optimization</li>
                <li><strong>Complex logic:</strong> Multi-step processes with conditional branching</li>
                <li><strong>Security best practices:</strong> Proper authentication, data encryption, compliance</li>
                <li><strong>Training & documentation:</strong> Your team learns to monitor and modify workflows</li>
              </ul>
              <p><strong>Bottom line:</strong> You get enterprise-grade automation without hiring a full-time developer.</p>
            </div>
          )
        }
      ]
    },
    {
      title: "Business Impact & ROI",
      icon: <TrendingUp className="w-5 h-5" />,
      faqs: [
        {
          question: "What if my team resists the new automated processes?",
          answer: (
            <div className="space-y-3">
              <p>Change management is included in all our packages:</p>
              <ul className="space-y-2 ml-4">
                <li><strong>Gradual rollout:</strong> Introduce automation step-by-step</li>
                <li><strong>Hands-on training:</strong> We train your team personally</li>
                <li><strong>Clear benefits:</strong> Show exactly how automation helps each person</li>
                <li><strong>Documentation:</strong> Easy-to-follow guides for all processes</li>
              </ul>
            </div>
          )
        },
        {
          question: "Can automation work with my existing software?",
          answer: (
            <div className="space-y-3">
              <p>Yes! Our platforms connect with virtually any business software:</p>
              <ul className="space-y-2 ml-4">
                <li><strong>Popular systems:</strong> QuickBooks, Salesforce, Office 365, Google Workspace</li>
                <li><strong>Industry-specific:</strong> Most CRM, ERP, and specialized industry tools</li>
                <li><strong>Custom software:</strong> We can connect proprietary systems via APIs</li>
                <li><strong>Legacy systems:</strong> Even older software can often be integrated</li>
              </ul>
              <p><strong>Free assessment:</strong> We'll evaluate your current software during the free audit</p>
            </div>
          )
        }
      ]
    },
    {
      title: "Implementation & Support",
      icon: <Rocket className="w-5 h-5" />,
      faqs: [
        {
          question: "How long does implementation take?",
          answer: (
            <div className="space-y-3">
              <p>Timeline depends on your selected package:</p>
              <ul className="space-y-2 ml-4">
                <li><strong>Essentials:</strong> Typically 2-3 weeks implementation</li>
                <li><strong>Growth Accelerator:</strong> Typically 4-6 weeks implementation</li>
                <li><strong>Enterprise Scale:</strong> Typically 6-8 weeks implementation</li>
              </ul>
              <p>Each includes:</p>
              <ul className="space-y-1 ml-4">
                <li>Discovery and planning (1 week)</li>
                <li>Development and testing (varies by complexity)</li>
                <li>Training and rollout (1 week)</li>
              </ul>
              <p className="mt-3"><strong>Note:</strong> Timelines are estimates based on typical implementations. Actual duration depends on workflow complexity, data migration needs, and team availability.</p>
            </div>
          )
        },
        {
          question: "What happens if something breaks?",
          answer: (
            <div className="space-y-3">
              <p>We provide comprehensive support:</p>
              <ul className="space-y-2 ml-4">
                <li><strong>Monitoring:</strong> We actively monitor all automations</li>
                <li><strong>Quick fixes:</strong> Most issues resolved within 24 hours</li>
                <li><strong>Backup plans:</strong> Fallback procedures for critical processes</li>
                <li><strong>Regular maintenance:</strong> Proactive updates and optimization</li>
                <li><strong>Documentation:</strong> Troubleshooting guides for common issues</li>
              </ul>
              <p><strong>Ongoing support:</strong> Included via your monthly modification hours and regular strategy sessions as part of your subscription</p>
            </div>
          )
        },
        {
          question: "Do I need technical skills to use the automation?",
          answer: (
            <div className="space-y-3">
              <p>No technical skills required:</p>
              <ul className="space-y-2 ml-4">
                <li><strong>User-friendly interfaces:</strong> Point-and-click operation</li>
                <li><strong>Comprehensive training:</strong> We teach you everything</li>
                <li><strong>Clear documentation:</strong> Step-by-step guides with screenshots</li>
                <li><strong>Ongoing support:</strong> Help available when you need it</li>
              </ul>
              <p>You'll learn to:</p>
              <ul className="space-y-1 ml-4">
                <li>Monitor your automated workflows</li>
                <li>Make simple modifications</li>
                <li>Troubleshoot common issues</li>
                <li>Request new automations as your business grows</li>
              </ul>
            </div>
          )
        }
      ]
    },
    {
      title: "Small Business Automation",
      icon: <HelpCircle className="w-5 h-5" />,
      faqs: [
        {
          question: "I'm a small business owner - is automation really worth it for me?",
          answer: (
            <div className="space-y-3">
              <p>Absolutely! Small businesses often see the biggest impact from automation because:</p>
              <ul className="space-y-2 ml-4">
                <li><strong>Immediate relief:</strong> You're probably doing repetitive tasks manually right now</li>
                <li><strong>Bigger percentage gains:</strong> Small improvements make a huge difference</li>
                <li><strong>Level the playing field:</strong> Access to enterprise-level efficiency</li>
                <li><strong>Focus on growth:</strong> Spend time on strategy, not busy work</li>
                <li><strong>Better customer service:</strong> Faster response times, fewer errors</li>
              </ul>
              <p><strong>Example:</strong> A local auto shop saved 15 hours weekly by automating appointment scheduling, customer follow-ups, and inventory tracking.</p>
            </div>
          )
        },
        {
          question: "What repetitive tasks can automation eliminate for small businesses?",
          answer: (
            <div className="space-y-3">
              <p>Common tasks we automate for small businesses:</p>
              <ul className="space-y-2 ml-4">
                <li><strong>Customer communications:</strong> Welcome emails, appointment reminders, follow-ups</li>
                <li><strong>Lead management:</strong> Capture, qualify, and route leads automatically</li>
                <li><strong>Scheduling:</strong> Appointment booking, staff scheduling, resource allocation</li>
                <li><strong>Invoicing & payments:</strong> Generate invoices, send reminders, track payments</li>
                <li><strong>Inventory tracking:</strong> Stock alerts, reorder notifications, supplier communications</li>
                <li><strong>Social media:</strong> Post scheduling, review monitoring, engagement tracking</li>
                <li><strong>Data entry:</strong> Customer info, order details, contact management</li>
              </ul>
              <p><strong>Result:</strong> Most clients save 15-25 hours weekly on these tasks alone.</p>
            </div>
          )
        },
        {
          question: "How much should a small business budget for automation?",
          answer: (
            <div className="space-y-3">
              <p>Investment varies by business size and automation scope:</p>
              <ul className="space-y-3 ml-4">
                <li>
                  <strong>AI Starter:</strong> $1,497/month ($0 setup fee)
                  <ul className="ml-4 mt-1 space-y-1 text-sm">
                    <li>Ideal for: 1-10 employees</li>
                    <li>Includes: 2 workflow builds, 10,000 monthly tasks</li>
                  </ul>
                </li>
                <li>
                  <strong>AI Growth:</strong> $2,497/month ($0 setup fee)
                  <ul className="ml-4 mt-1 space-y-1 text-sm">
                    <li>Ideal for: 10-50 employees</li>
                    <li>Includes: 5 workflow builds, 50,000 monthly tasks, AI integration</li>
                  </ul>
                </li>
                <li>
                  <strong>AI Powerhouse:</strong> $4,997/month ($0 setup fee)
                  <ul className="ml-4 mt-1 space-y-1 text-sm">
                    <li>Ideal for: 50+ employees</li>
                    <li>Includes: Unlimited workflows, 250,000 monthly tasks, full AI suite</li>
                  </ul>
                </li>
              </ul>
              <p className="mt-3"><strong>Potential ROI</strong> (actual results vary by business):</p>
              <ul className="space-y-1 ml-4">
                <li>Average time savings: 10-20 hours weekly per package tier</li>
                <li>If your time is valued at $25-50/hour: Potential savings of $13,000-52,000 annually</li>
                <li>Typical payback period: 6-12 months depending on implementation scope and usage</li>
              </ul>
              <p className="mt-3 text-sm"><strong>Note:</strong> Results depend on workflow complexity, adoption rate, and business processes. All figures are estimates based on typical client experiences.</p>
            </div>
          )
        },
        {
          question: "Can I start small and add more automation later?",
          answer: (
            <div className="space-y-3">
              <p>Yes! This is actually our recommended approach:</p>
              <ul className="space-y-2 ml-4">
                <li><strong>Start with Essentials:</strong> 2-3 high-impact workflows</li>
                <li><strong>See immediate results:</strong> Build confidence and momentum</li>
                <li><strong>Upgrade as you grow:</strong> Add more complex automation</li>
                <li><strong>Preserve investment:</strong> Everything we build scales up</li>
                <li><strong>Learn gradually:</strong> Master simple automation before complex ones</li>
              </ul>
              <p><strong>Common progression:</strong></p>
              <ul className="space-y-1 ml-4">
                <li>Month 1-6: Essentials</li>
                <li>Month 6-12: Upgrade to Growth Accelerator</li>
                <li>Year 2+: Enterprise Scale as business scales</li>
              </ul>
            </div>
          )
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Answers to Common Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about our automation tools and services
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqSections.map((section, sectionIndex) => (
            <Card key={sectionIndex}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {section.icon}
                  </div>
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {section.faqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`${sectionIndex}-${faqIndex}`}>
                      <AccordionTrigger className="text-left hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
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