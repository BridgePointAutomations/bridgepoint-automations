import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />
      
      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20">
                <TrendingUp className="w-3 h-3 mr-1" />
                Serving Pittsburgh's Small Business Community
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Transform Your Business with{" "}
                <span className="text-gradient">Smart Automation</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                BridgePoint Automations delivers enterprise-level automation to Pittsburgh small businesses using modern no-code platforms. Reduce manual work, improve efficiency, and guarantee ROI within 6 months.
              </p>
            </div>

            {/* Value Props */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm font-medium">77% Profit Margins</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm font-medium">6-Month ROI Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm font-medium">8,000+ App Integrations</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm font-medium">Local Pittsburgh Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => window.location.href = '/booking'}
              >
                Start Free Audit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Service Packages
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Trusted by Pittsburgh businesses to save 15-25 hours weekly</p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">300%</div>
                  <div className="text-xs text-muted-foreground">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">20hrs</div>
                  <div className="text-xs text-muted-foreground">Weekly Time Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">$65K</div>
                  <div className="text-xs text-muted-foreground">Average Annual Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">6mo</div>
                  <div className="text-xs text-muted-foreground">ROI Guarantee</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-accent rounded-3xl p-8 shadow-glow">
              <div className="h-full bg-card rounded-2xl border border-border p-6 flex flex-col justify-center space-y-6">
                
                {/* Automation Flow Visualization */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-center mb-6">Automation in Action</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-accent rounded-lg">
                      <span className="text-sm font-medium">Lead Capture</span>
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    </div>
                    
                    <div className="flex justify-center">
                      <ArrowRight className="w-5 h-5 text-muted-foreground" />
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-accent rounded-lg">
                      <span className="text-sm font-medium">Data Processing</span>
                      <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                    </div>
                    
                    <div className="flex justify-center">
                      <ArrowRight className="w-5 h-5 text-muted-foreground" />
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-accent rounded-lg">
                      <span className="text-sm font-medium">Customer Notification</span>
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Save 15-25 hours weekly with automated workflows
                  </p>
                </div>
              </div>
            </div>
            
            
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-medium">
              <div className="text-center">
                <div className="text-lg font-bold text-primary">20hrs</div>
                <div className="text-xs text-muted-foreground">Weekly Savings</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;