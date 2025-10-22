import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, Settings, TrendingUp, Rocket } from "lucide-react";

const FAQSection = () => {
  const faqSections = [
    {
      title: "Automation Platforms & Features",
      icon: <Settings className="w-5 h-5" />,
      faqs: [
        {
          question: "What can Zapier actually do for my business?",
          answer: (
            <div className="space-y-3">
              <p>Zapier is the backbone of most automation workflows. It can:</p>
              <ul className="space-y-2 ml-4">
                <li><strong>Connect 8,000+ apps</strong> including Gmail, Slack, QuickBooks, CRM systems</li>
                <li><strong>Trigger actions automatically</strong> when specific events happen</li>
                <li><strong>Process data</strong> between different systems without manual copying</li>
                <li><strong>Send notifications</strong> via email, SMS, or team chat when tasks complete</li>
              </ul>
              <p><strong>Example:</strong> When a new customer signs up on your website, automatically create them in your CRM, send a welcome email, add them to your mailing list, and notify your sales team.</p>
            </div>
          )
        },
        {
          question: "How is Airtable different from Excel or Google Sheets?",
          answer: (
            <div className="space-y-3">
              <p>Airtable combines the simplicity of spreadsheets with database power:</p>
              <ul className="space-y-2 ml-4">
                <li><strong>Relational data:</strong> Link records across different tables</li>
                <li><strong>Rich field types:</strong> Attachments, checkboxes, dropdowns, formulas</li>
                <li><strong>Multiple views:</strong> Grid, calendar, kanban, gallery views of same data</li>
                <li><strong>Built-in automation:</strong> Trigger actions when records are created/updated</li>
                <li><strong>Real-time collaboration:</strong> Multiple people can work simultaneously</li>
                <li><strong>API access:</strong> Connects with other tools seamlessly</li>
              </ul>
              <p><strong>Perfect for:</strong> Customer databases, project tracking, inventory management, employee records</p>
            </div>
          )
        },
        {
          question: "What makes Make (formerly Integromat) special?",
          answer: (
            <div className="space-y-3">
              <p>Make excels at complex automation scenarios:</p>
              <ul className="space-y-2 ml-4">
                <li><strong>Visual workflow builder:</strong> See your automation logic clearly</li>
                <li><strong>Advanced data manipulation:</strong> Transform, filter, and route data</li>
                <li><strong>Error handling:</strong> Built-in retry logic and error reporting</li>
                <li><strong>Conditional logic:</strong> "If this, then that" with multiple conditions</li>
                <li><strong>Webhook support:</strong> Real-time triggers from any system</li>
                <li><strong>Bulk operations:</strong> Process hundreds of records efficiently</li>
              </ul>
              <p><strong>Best for:</strong> Complex multi-step processes, data synchronization, advanced business logic</p>
            </div>
          )
        },
        {
          question: "What is Activepieces and when do you use it?",
          answer: (
            <div className="space-y-3">
              <p>Activepieces is our open-source automation platform for:</p>
              <ul className="space-y-2 ml-4">
                <li><strong>Custom integrations:</strong> Connect systems that others can't</li>
                <li><strong>Data privacy:</strong> Keep sensitive data on your own servers</li>
                <li><strong>Cost efficiency:</strong> No per-task pricing for high-volume automation</li>
                <li><strong>Custom connectors:</strong> Build integrations for proprietary software</li>
                <li><strong>Enterprise features:</strong> Advanced security and compliance options</li>
              </ul>
              <p><strong>Ideal for:</strong> Businesses with unique software, high-volume processes, or strict data requirements</p>
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
                  <strong>Essentials Package:</strong> $1,097/month ($0 setup fee)
                  <ul className="ml-4 mt-1 space-y-1 text-sm">
                    <li>Ideal for: 1-10 employees</li>
                    <li>Includes: 2-3 workflow builds, 10,000 monthly tasks</li>
                  </ul>
                </li>
                <li>
                  <strong>Growth Accelerator:</strong> $2,097/month ($0 setup fee)
                  <ul className="ml-4 mt-1 space-y-1 text-sm">
                    <li>Ideal for: 10-50 employees</li>
                    <li>Includes: 5 workflow builds, 50,000 monthly tasks, AI integration</li>
                  </ul>
                </li>
                <li>
                  <strong>Enterprise Scale:</strong> $4,097/month ($0 setup fee)
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