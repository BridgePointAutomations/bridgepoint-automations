import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
            Choose Your <span className="text-gradient">AI Growth Path</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start small, scale as you grow. All packages include $0 setup fee.
          </p>
        </div>

        {/* Service Packages */}
        <div className="grid lg:grid-cols-3 gap-8">
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

                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${
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
                  <p className="text-sm text-muted-foreground font-medium mb-4">{pkg.headline}</p>
                  
                  <div className="space-y-1">
                    <div className="text-4xl font-bold text-gradient">
                      ${pkg.monthlyPrice.toLocaleString()}
                      <span className="text-base text-muted-foreground font-normal">/mo</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      $0 setup • {pkg.commitmentMonths}mo min • {pkg.moneyBackGuaranteeDays}-day guarantee
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* 3 Key Benefits */}
                  <div className="space-y-3">
                    {pkg.keyBenefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Outcome Statement */}
                  <div className="text-center py-4 border-t border-b border-border">
                    <p className="text-sm font-semibold text-foreground">{pkg.outcomeStatement}</p>
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant={pkg.popular ? "default" : "outline"}
                    className="w-full group text-base py-6"
                    size="lg"
                    onClick={() => (window.location.href = "/booking")}
                  >
                    Book Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
