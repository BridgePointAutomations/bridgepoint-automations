import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Zap, X, ChevronDown, ChevronUp } from "lucide-react";
import { PACKAGES } from "@/data/packages";
import { PricingComparisonTable } from "@/components/PricingComparisonTable";
import { useState } from "react";
import RiskReversal from "./RiskReversal";

const ServicesSection = () => {
  const [showComparison, setShowComparison] = useState(false);

  const toggleComparison = () => {
    setShowComparison(!showComparison);
    if (!showComparison) {
      setTimeout(() => {
        document.getElementById('pricing-comparison')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

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
            Simple Pricing, <span className="text-gradient">Powerful Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No hidden fees. Cancel anytime. 30-day money-back guarantee.
          </p>
        </div>

        {/* Risk Reversal Badges */}
        <RiskReversal />

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
                  {/* Key Features - Reduced to 6 */}
                  <div className="space-y-2.5">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{pkg.workflowInfrastructure.workflowBuilds} workflow builds</span>
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
                      <span className="text-sm">{typeof pkg.workflowInfrastructure.platformCount === 'string' ? pkg.workflowInfrastructure.platformCount : pkg.workflowInfrastructure.platformCount} platforms supported</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{pkg.capacity.monthlyTasks} monthly tasks</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{pkg.supportMaintenance.responseTime} support response</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{pkg.supportMaintenance.strategySessions} strategy sessions</span>
                    </div>
                  </div>

                  {/* Expected Results - De-emphasized */}
                  <div className="text-xs text-muted-foreground text-center py-2 border-t border-border">
                    Expected: {pkg.expectedResults.timeSaved} saved • {pkg.expectedResults.roiMultiplier} ROI
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
                    className="w-full group text-base py-6"
                    size="lg"
                    onClick={() => (window.location.href = "/booking")}
                  >
                    Start Saving Time Today
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Toggle Button for Comparison */}
        <div className="text-center mb-12">
          <Button 
            variant="outline"
            size="lg"
            onClick={toggleComparison}
            className="inline-flex items-center gap-2"
          >
            {showComparison ? (
              <>
                Hide Comparison
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                See All Features
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>

        {/* Full Pricing Comparison Table */}
        {showComparison && (
          <div id="pricing-comparison" className="mb-16 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Complete Feature Comparison</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See every feature side-by-side to make the best decision for your business
              </p>
            </div>
            <PricingComparisonTable />
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
