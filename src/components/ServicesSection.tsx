import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Zap } from "lucide-react";
import { PACKAGES } from "@/data/packages";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-accent/30 to-background">
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
            Structured packages designed to make enterprise automation accessible to small businesses. Each tier
            includes bundled support with ROI-focused implementation and performance tracking.
          </p>
          <p className="text-sm text-muted-foreground/80 max-w-xl mx-auto mt-2">
            Final pricing tailored based on discovery and scope.
          </p>
        </div>

        {/* Service Packages */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {PACKAGES.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <Card
                key={index}
                className={`relative hover-lift ${pkg.popular ? "ring-2 ring-primary shadow-glow" : "shadow-soft"}`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-white shadow-glow">
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-6">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                      index === 0
                        ? "bg-primary/10 text-primary"
                        : index === 1
                          ? "bg-secondary/10 text-secondary"
                          : "bg-cyan/10 text-cyan"
                    }`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl mb-2">{pkg.tier} Package</CardTitle>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-gradient">{pkg.priceDisplay}</div>
                    <div className="text-sm text-muted-foreground">
                      + Starting at ${pkg.monthlySupport}/month ongoing support
                    </div>
                  </div>
                  <CardDescription className="text-sm">{pkg.description}</CardDescription>
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
                    onClick={() => (window.location.href = "/booking")}
                  >
                    Choose {pkg.tier}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Add-on Services */}
        <div className="bg-card rounded-2xl p-8 shadow-soft">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Premium Add-On Services</h3>
            <p className="text-muted-foreground">
              Optional enhancements to packages, not standalone services. Pricing customized during discovery calls
              based on your specific ROI and workflow gaps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI Agent",
                price: "Starting at $2,000",
                description:
                  "Included in Enterprise Lite Package,Custom AI agent for customer service, lead qualification, or appointment scheduling",
              },
              {
                title: "Industry Templates",
                price: "Starting at $1,200",
                description: "Pre-built automation templates for specific industries (Airtable bases + workflows)",
              },
              {
                title: "Premium Care & Monitoring",
                price: "Starting at $650/month",
                description:
                  "Included in Enterprise Lite Package, 24/7 monitoring, proactive fixes, faster response, after-hours support",
              },
              {
                title: "Integration Quick Wins",
                price: "Starting at $600",
                description: "Additional integrations (QuickBooks, Slack, DocuSign, etc.)",
              },
              {
                title: "Template Library",
                price: "Starting at $750",
                description: "Access to a growing library of automation templates (lifetime access)",
              },
              {
                title: "Quarterly Optimization",
                price: "$500/session",
                description: "Performance review, new opportunity identification, ROI reporting",
              },
              {
                title: "ROI Dashboard",
                price: "Included in Growth+, available as add-on starting at $800",
                description: "Custom ROI dashboard (Airtable/BI) with optional ongoing maintenance",
              },
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
