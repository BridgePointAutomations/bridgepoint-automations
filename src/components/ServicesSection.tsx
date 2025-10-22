import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Zap, X, Bot, Sparkles, FileCode } from "lucide-react";
import { PACKAGES } from "@/data/packages";
import { PricingComparisonTable } from "@/components/PricingComparisonTable";

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
            Transparent, all-inclusive subscription packages. Every feature clearly defined so you know exactly what you're getting.
          </p>
          <p className="text-sm text-muted-foreground/80 max-w-xl mx-auto mt-2">
            $0 setup fees • No hidden costs • Cancel anytime after minimum commitment
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
                  <CardTitle className="text-xl mb-2">{pkg.tier}</CardTitle>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-gradient">
                      ${pkg.monthlyPrice.toLocaleString()}<span className="text-base text-muted-foreground">/month</span>
                    </div>
                    <div className="text-sm font-medium text-success">
                      $0 Setup Fee
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {pkg.commitmentTerms.minimumMonths} month minimum
                    </div>
                  </div>
                  <CardDescription className="text-sm">{pkg.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 p-4 bg-accent rounded-lg">
                    <div className="text-center">
                      <div className="font-semibold text-primary">{pkg.expectedResults.roiMultiplier}</div>
                      <div className="text-xs text-muted-foreground">Expected ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-primary">{pkg.expectedResults.timeSaved}</div>
                      <div className="text-xs text-muted-foreground">Time Savings</div>
                    </div>
                  </div>

                  {/* Features List - Expanded to 10 key features */}
                  <div className="space-y-2.5">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm"><strong>$0 Setup Fee</strong> - Start immediately</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Automation audit included</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{pkg.workflowInfrastructure.workflowBuilds} workflow builds</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{pkg.workflowInfrastructure.airtableBases} Airtable</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      {pkg.workflowInfrastructure.aiIntegrations === 0 ? (
                        <X className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      ) : (
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      )}
                      <span className="text-sm">
                        {pkg.workflowInfrastructure.aiIntegrations === 0 
                          ? "No AI integrations" 
                          : typeof pkg.workflowInfrastructure.aiIntegrations === 'string'
                          ? pkg.workflowInfrastructure.aiIntegrations
                          : `${pkg.workflowInfrastructure.aiIntegrations} AI integration${pkg.workflowInfrastructure.aiIntegrations > 1 ? 's' : ''}`
                        }
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{typeof pkg.workflowInfrastructure.platformCount === 'string' ? pkg.workflowInfrastructure.platformCount : pkg.workflowInfrastructure.platformCount} platforms</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{pkg.capacity.monthlyTasks} monthly tasks</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{pkg.supportMaintenance.responseTime} response</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{pkg.supportMaintenance.modificationHours} hrs modifications/mo</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{pkg.supportMaintenance.strategySessions} strategy sessions</span>
                    </div>
                  </div>

                  {/* View All Features Link */}
                  <div className="pt-2 text-center">
                    <a 
                      href="#pricing-comparison" 
                      className="text-sm text-primary hover:underline font-medium inline-flex items-center gap-1"
                    >
                      See all features
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Platforms */}
                  <div className="pt-4 border-t border-border">
                    <div className="text-xs font-medium text-muted-foreground mb-2">Platforms Used:</div>
                    <div className="flex flex-wrap gap-1">
                      {pkg.workflowInfrastructure.platformsSupported.map((platform, idx) => (
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

        {/* Full Pricing Comparison Table */}
        <div id="pricing-comparison" className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Complete Feature Comparison</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See every feature side-by-side to make the best decision for your business
            </p>
          </div>
          <PricingComparisonTable />
        </div>

        {/* Add-on Services */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Optional Premium Add-ons
            </Badge>
            <h3 className="text-3xl font-bold mb-4">Enhance Your Package</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take your automation to the next level with these specialized services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-medium transition-shadow">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">AI Agents</h4>
                <p className="text-2xl font-bold text-primary mb-2">Starting at $400/mo</p>
                <p className="text-sm text-muted-foreground">
                  Advanced AI-powered automation with OpenAI, Anthropic, or Google integrations
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-shadow border-secondary/20">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-secondary" />
                </div>
                <h4 className="font-semibold mb-2">AI Content Creation</h4>
                <p className="text-2xl font-bold text-secondary mb-2">Starting at $300/mo</p>
                <p className="text-sm text-muted-foreground mb-3">
                  Automated blog posts, social media, email campaigns, and marketing copy
                </p>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-3 w-3 text-success" />
                    <span>SEO-optimized content</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-3 w-3 text-success" />
                    <span>Brand voice training</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-3 w-3 text-success" />
                    <span>Multi-platform publishing</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-shadow">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-cyan/10 flex items-center justify-center mb-4">
                  <FileCode className="h-6 w-6 text-cyan" />
                </div>
                <h4 className="font-semibold mb-2">Industry Templates</h4>
                <p className="text-2xl font-bold text-cyan mb-2">Starting at $250/mo</p>
                <p className="text-sm text-muted-foreground">
                  Pre-built automation workflows optimized for your specific industry
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-shadow">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-amber/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-amber" />
                </div>
                <h4 className="font-semibold mb-2">Premium Care</h4>
                <p className="text-2xl font-bold text-amber mb-2">Starting at $500/mo</p>
                <p className="text-sm text-muted-foreground">
                  Priority support, dedicated account manager, and proactive optimization
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
