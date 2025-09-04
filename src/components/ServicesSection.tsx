import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Zap, TrendingUp, Users } from "lucide-react";

const ServicesSection = () => {
  const packages = [
    {
      tier: "Efficiency Essentials",
      price: "$2,500",
      support: "$350/month",
      icon: <Zap className="w-6 h-6" />,
      description: "Perfect for small businesses seeking initial automation wins",
      features: [
        "2-3 automated workflows",
        "1 Airtable base setup",
        "Basic dashboard creation",
        "User training sessions",
        "3 months bundled support",
        "Documentation package"
      ],
      platforms: ["Zapier", "Airtable", "Make (Basic)"],
      roi: "300-500% ROI",
      savings: "5-10 hours weekly",
      popular: false
    },
    {
      tier: "Growth Builder",
      price: "$5,000",
      support: "$550/month",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Comprehensive automation for growing businesses",
      features: [
        "5-6 automated workflows",
        "2 Airtable bases with advanced features",
        "2 custom dashboards",
        "ROI tracking dashboard",
        "Comprehensive training program",
        "Integration with existing tools"
      ],
      platforms: ["Advanced Zapier", "Airtable Pro", "Make", "Activepieces"],
      roi: "400-700% ROI",
      savings: "15-25 hours weekly",
      popular: true
    },
    {
      tier: "Enterprise Lite",
      price: "$9,000",
      support: "$750/month",
      icon: <Users className="w-6 h-6" />,
      description: "Enterprise automation for established businesses",
      features: [
        "6-10 automated workflows",
        "Multi-base Airtable system",
        "AI-powered tools integration",
        "Custom reporting suite",
        "Advanced dashboard with real-time metrics",
        "Department-specific automation",
        "Change management support"
      ],
      platforms: ["Enterprise Zapier + AI", "Advanced Airtable", "Make Pro", "Activepieces", "AI Integration"],
      roi: "500-900% ROI",
      savings: "30-50 hours weekly",
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="text-primary border-primary/20">
            <Zap className="w-3 h-3 mr-1" />
            Automation Packages
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold">
            Choose Your <span className="text-gradient">Automation Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Structured packages designed to make enterprise automation accessible to Pittsburgh small businesses. Each tier includes bundled support and guaranteed ROI.
          </p>
        </div>

        {/* Service Packages */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative hover-lift ${pkg.popular ? 'ring-2 ring-primary shadow-glow' : 'shadow-soft'}`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-white">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-6">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                  {pkg.icon}
                </div>
                <CardTitle className="text-xl mb-2">{pkg.tier} Package</CardTitle>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-gradient">{pkg.price}</div>
                  <div className="text-sm text-muted-foreground">+ {pkg.support} ongoing support</div>
                </div>
                <CardDescription className="text-sm">
                  {pkg.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 p-4 bg-accent rounded-lg">
                  <div className="text-center">
                    <div className="font-semibold text-primary">{pkg.roi}</div>
                    <div className="text-xs text-muted-foreground">Expected ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-primary">{pkg.savings}</div>
                    <div className="text-xs text-muted-foreground">Time Savings</div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Platforms */}
                <div className="pt-4 border-t border-border">
                  <div className="text-xs font-medium text-muted-foreground mb-2">Platforms Used:</div>
                  <div className="flex flex-wrap gap-1">
                    {pkg.platforms.map((platform, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {platform}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  variant={pkg.popular ? "default" : "outline"}
                  className="w-full group"
                >
                  Choose {pkg.tier}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add-on Services */}
        <div className="bg-card rounded-2xl p-8 shadow-soft">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Premium Add-On Services</h3>
            <p className="text-muted-foreground">
              Enhance your automation with specialized services and advanced features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Industry Templates",
                price: "$1,200.00 One-time",
                description: "Pre-built automation templates for specific industries (Airtable bases + workflows)"
              },
              {
                title: "Premium Care & Monitoring",
                price: "$650.00 Monthly",
                description: "24/7 monitoring, proactive fixes, faster response, after-hours support"
              },
              {
                title: "Integration Quick Wins",
                price: "$750.00 One-time",
                description: "Additional integrations (QuickBooks, Slack, DocuSign, etc.)"
              },
              {
                title: "Template Library",
                price: "$750.00 One-time",
                description: "Access to a growing library of automation templates (lifetime access)"
              },
              {
                title: "Quarterly Optimization",
                price: "$500.00 Per Session",
                description: "Performance review, new opportunity identification, ROI reporting"
              },
              {
                title: "ROI Dashboard",
                price: "$1,000.00 One-time + Optional Monthly",
                description: "Custom ROI dashboard (Airtable/BI) with optional ongoing maintenance"
              }
            ].map((addon, index) => (
              <div key={index} className="p-4 bg-accent rounded-lg">
                <h4 className="font-semibold mb-1">{addon.title}</h4>
                <div className="text-primary font-medium mb-2">{addon.price}</div>
                <p className="text-sm text-muted-foreground">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;