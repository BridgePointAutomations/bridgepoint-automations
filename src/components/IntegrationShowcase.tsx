import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Database, Mail, Calendar, FileText, ShoppingCart, MessageSquare, Users, CloudCog, Webhook } from "lucide-react";

const IntegrationShowcase = () => {
  const integrationCategories = [
    {
      category: "CRM & Sales",
      icon: Users,
      color: "primary",
      platforms: ["Salesforce", "HubSpot", "Pipedrive", "Zoho CRM", "Monday.com"],
      description: "Sync leads, automate follow-ups, track sales pipelines"
    },
    {
      category: "Communication",
      icon: MessageSquare,
      color: "secondary",
      platforms: ["Slack", "Microsoft Teams", "Gmail", "Outlook", "Twilio"],
      description: "Automated notifications, team alerts, customer messaging"
    },
    {
      category: "E-commerce",
      icon: ShoppingCart,
      color: "cyan",
      platforms: ["Shopify", "WooCommerce", "Stripe", "Square", "PayPal"],
      description: "Order processing, inventory sync, payment automation"
    },
    {
      category: "Productivity",
      icon: FileText,
      color: "amber",
      platforms: ["Google Workspace", "Microsoft 365", "Notion", "Airtable", "Asana"],
      description: "Document generation, task automation, workflow management"
    },
    {
      category: "Scheduling",
      icon: Calendar,
      color: "success",
      platforms: ["Calendly", "Acuity", "Google Calendar", "Outlook Calendar", "Cal.com"],
      description: "Appointment booking, reminder automation, calendar sync"
    },
    {
      category: "Marketing",
      icon: Mail,
      color: "primary",
      platforms: ["Mailchimp", "ActiveCampaign", "ConvertKit", "SendGrid", "HubSpot"],
      description: "Email campaigns, lead nurturing, analytics tracking"
    },
    {
      category: "Data & Storage",
      icon: Database,
      color: "secondary",
      platforms: ["Google Sheets", "Airtable", "MySQL", "PostgreSQL", "Dropbox"],
      description: "Data sync, backup automation, report generation"
    },
    {
      category: "APIs & Webhooks",
      icon: Webhook,
      color: "cyan",
      platforms: ["REST APIs", "GraphQL", "Custom Webhooks", "Zapier", "Make.com"],
      description: "Custom integrations, real-time data exchange, event triggers"
    }
  ];

  const popularPlatforms = [
    { name: "Salesforce", category: "CRM" },
    { name: "Google Workspace", category: "Productivity" },
    { name: "Shopify", category: "E-commerce" },
    { name: "Slack", category: "Communication" },
    { name: "HubSpot", category: "CRM & Marketing" },
    { name: "QuickBooks", category: "Accounting" },
    { name: "Microsoft 365", category: "Productivity" },
    { name: "Stripe", category: "Payments" },
    { name: "Mailchimp", category: "Marketing" },
    { name: "Calendly", category: "Scheduling" },
    { name: "Airtable", category: "Database" },
    { name: "Twilio", category: "SMS & Voice" },
  ];

  return (
    <section className="py-16 bg-gradient-accent">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <CloudCog className="w-3 h-3 mr-1" />
            8,000+ Integrations Available
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Connect Your Entire{" "}
            <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seamlessly integrate with the tools you already use. Our automation platform connects to virtually any business software, SaaS platform, or custom API.
          </p>
        </div>

        {/* Popular Platforms Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-center mb-6">Most Popular Integrations</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {popularPlatforms.map((platform, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow hover:-translate-y-1 animate-smooth">
                <CardContent className="p-4 text-center">
                  <div className="h-12 w-12 rounded-lg bg-gradient-glow mx-auto mb-2 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{platform.name}</h4>
                  <p className="text-xs text-muted-foreground">{platform.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Integration Categories */}
        <div>
          <h3 className="text-xl font-semibold text-center mb-8">Integration Categories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrationCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-medium transition-all hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className={`h-12 w-12 rounded-lg bg-${category.color}/10 flex items-center justify-center mb-4`}>
                    <category.icon className={`h-6 w-6 text-${category.color}`} />
                  </div>
                  <h4 className="font-semibold mb-2">{category.category}</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {category.platforms.slice(0, 3).map((platform, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {platform}
                      </Badge>
                    ))}
                    {category.platforms.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{category.platforms.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto border-primary/20">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Don't See Your Platform?</h3>
              <p className="text-muted-foreground mb-4">
                With access to 8,000+ apps and custom API integration capabilities, we can connect virtually any tool in your tech stack.
              </p>
              <Badge variant="outline" className="text-primary">
                Custom integrations available in all packages
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IntegrationShowcase;
