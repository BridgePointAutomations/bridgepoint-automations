import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Briefcase, 
  Heart, 
  Hammer, 
  Factory, 
  ShoppingCart, 
  Wrench,
  TrendingUp
} from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Real Estate",
      description: "Property management, brokerages, appraisers",
      automations: ["Lead tracking", "Property listings", "Client communications", "Document management"],
      savings: "20-30 hours/week"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Professional Services",
      description: "Accounting, legal, consulting firms",
      automations: ["Client onboarding", "Invoice processing", "Time tracking", "Reporting automation"],
      savings: "15-25 hours/week"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Healthcare",
      description: "Private practices, clinics, specialists",
      automations: ["Patient scheduling", "Insurance verification", "Follow-up reminders", "Billing automation"],
      savings: "25-35 hours/week"
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: "Construction & Trades",
      description: "Contractors, home services, trades",
      automations: ["Project tracking", "Material ordering", "Customer updates", "Scheduling optimization"],
      savings: "10-20 hours/week"
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Manufacturing",
      description: "Small manufacturers, distributors",
      automations: ["Inventory management", "Order processing", "Quality control", "Supplier communications"],
      savings: "30-40 hours/week"
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Retail & E-commerce",
      description: "Online stores, brick-and-mortar retail",
      automations: ["Order fulfillment", "Inventory sync", "Customer service", "Marketing campaigns"],
      savings: "20-30 hours/week"
    }
  ];

  const autoRepairHighlight = {
    icon: <Wrench className="w-8 h-8" />,
    title: "Auto Repair Shops",
    subtitle: "Detailed Industry Analysis",
    description: "Specialized automation solutions for automotive service businesses",
    opportunities: [
      {
        process: "Vehicle Check-In & Service Writing",
        solution: "Digital forms connected to customer database",
        impact: "4-6 hours weekly saved at front counter"
      },
      {
        process: "Parts Inventory & Ordering",
        solution: "Automated inventory tracking with supplier connections", 
        impact: "15-25% inventory cost reduction, 6-10 hours weekly saved"
      },
      {
        process: "Customer Communication & Updates",
        solution: "SMS/email notifications triggered by status changes",
        impact: "5-8 hours weekly saved, 15-25% higher approval rates"
      }
    ],
    packages: [
      "Efficiency Essentials ($2,500): Customer communication automation",
      "Growth Builder ($5,000): Add inventory management and scheduling", 
      "Enterprise Lite ($9,000): Complete shop management with reporting"
    ]
  };

  return (
    <section id="industries" className="py-20">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="text-primary border-primary/20">
            <TrendingUp className="w-3 h-3 mr-1" />
            Industry Expertise
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold">
            Serving <span className="text-gradient">Pittsburgh's Key Industries</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We understand the unique challenges and opportunities in Pittsburgh's diverse business landscape. Our automation solutions are tailored for each industry's specific needs.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {industries.map((industry, index) => (
            <Card key={index} className="hover-lift shadow-soft">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4 text-primary">
                  {industry.icon}
                </div>
                <CardTitle className="text-lg">{industry.title}</CardTitle>
                <CardDescription>{industry.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Common Automations:</h4>
                  <div className="space-y-1">
                    {industry.automations.map((automation, idx) => (
                      <div key={idx} className="text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {automation}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-2 border-t border-border">
                  <div className="text-sm font-medium text-success">
                    Average Savings: {industry.savings}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Auto Repair Spotlight */}
        <div className="bg-gradient-accent rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            
            {/* Left Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  {autoRepairHighlight.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{autoRepairHighlight.title}</h3>
                  <p className="text-primary font-medium">{autoRepairHighlight.subtitle}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground">{autoRepairHighlight.description}</p>
              
              <div className="space-y-4">
                <h4 className="font-semibold">Package Progression:</h4>
                <div className="space-y-2">
                  {autoRepairHighlight.packages.map((pkg, idx) => (
                    <div key={idx} className="text-sm p-3 bg-card rounded-lg border border-border">
                      {pkg}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Opportunities */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Key Automation Opportunities:</h4>
              <div className="space-y-4">
                {autoRepairHighlight.opportunities.map((opp, idx) => (
                  <Card key={idx} className="shadow-soft">
                    <CardContent className="p-4">
                      <h5 className="font-medium mb-2">{opp.process}</h5>
                      <p className="text-sm text-muted-foreground mb-2">{opp.solution}</p>
                      <div className="text-sm font-medium text-success">{opp.impact}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;