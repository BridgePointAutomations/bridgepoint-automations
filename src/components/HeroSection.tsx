import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, TrendingUp, ClipboardCheck } from "lucide-react";
import { AutomationReadinessAssessment } from "./AutomationReadinessAssessment";

const HeroSection = () => {
  const [assessmentOpen, setAssessmentOpen] = useState(false);

  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Background Gradient with Purple Hint */}
      <div className="absolute inset-0 bg-gradient-glow opacity-5" />
      
      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20">
                <TrendingUp className="w-3 h-3 mr-1" />
                Serving Small Business Communities
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Transform Your Business with{" "}
                <span className="text-gradient">AI-Powered Automation</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                BridgePoint Automations delivers AI-enhanced workflows, intelligent chatbots, and LLM-powered automation to small businesses. Reduce manual work by up to 77% with cutting-edge no-code platforms, measurable ROI, and continuous optimization.
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
                <span className="text-sm font-medium">ROI-Focused Approach</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm font-medium">AI-Enhanced Workflows</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm font-medium">Expert Local Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full group text-xs sm:text-sm px-3 sm:px-4 h-auto py-3"
                onClick={() => window.location.href = '/booking'}
              >
                Book Consultation
                <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full text-xs sm:text-sm px-3 sm:px-4 h-auto py-3"
                onClick={() => setAssessmentOpen(true)}
              >
                <ClipboardCheck className="mr-2 h-4 w-4 flex-shrink-0" />
                Readiness Check
              </Button>
              <div className="sm:col-span-2 lg:col-span-1 sm:flex sm:justify-center lg:block">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:max-w-md lg:max-w-none text-xs sm:text-sm px-3 sm:px-4 h-auto py-3"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Services
                </Button>
              </div>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Trusted by businesses to save 15-25 hours weekly</p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2-3x</div>
                  <div className="text-xs text-muted-foreground">Typical ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">20hrs</div>
                  <div className="text-xs text-muted-foreground">Weekly Time Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">$15K-$50K+</div>
                  <div className="text-xs text-muted-foreground">Typical Annual Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">6-12mo</div>
                  <div className="text-xs text-muted-foreground">Payback Period</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-glow rounded-3xl p-8 shadow-glow">
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
                      <div className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
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
            
          </div>
          
        </div>
      </div>

      <AutomationReadinessAssessment 
        isOpen={assessmentOpen}
        onClose={() => setAssessmentOpen(false)}
      />
    </section>
  );
};

export default HeroSection;