import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { ArrowRight, Zap, Clock, DollarSign, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Workflows = () => {
  const navigate = useNavigate();

  const workflows = [
    {
      title: "Lead Capture to CRM",
      industry: "All Industries",
      description: "Automatically capture leads from your website, qualify them, and add them to your CRM with enriched data.",
      steps: ["Website Form Submit", "Data Validation", "Lead Scoring", "CRM Creation", "Notification Sent"],
      timeSaved: "15 hours/week",
      impact: "Zero manual data entry",
      icon: Users,
      color: "text-blue-500",
    },
    {
      title: "Appointment Scheduling & Reminders",
      industry: "Service Businesses",
      description: "Let clients book appointments automatically, with confirmations, reminders, and calendar syncing.",
      steps: ["Client Books", "Calendar Check", "Confirmation Email", "24h Reminder", "Follow-up Survey"],
      timeSaved: "10 hours/week",
      impact: "50% fewer no-shows",
      icon: Clock,
      color: "text-purple-500",
    },
    {
      title: "Invoice Generation & Payment",
      industry: "Professional Services",
      description: "Generate invoices automatically based on time tracking or project completion, send reminders, and process payments.",
      steps: ["Work Completed", "Invoice Generated", "Email Sent", "Payment Reminder", "Payment Processed"],
      timeSaved: "8 hours/week",
      impact: "Get paid 40% faster",
      icon: DollarSign,
      color: "text-green-500",
    },
    {
      title: "Customer Onboarding Flow",
      industry: "SaaS & Services",
      description: "Welcome new customers with personalized sequences, document collection, and milestone tracking.",
      steps: ["Customer Signs Up", "Welcome Email", "Account Setup", "Training Scheduled", "Success Milestone"],
      timeSaved: "12 hours/week",
      impact: "2x faster onboarding",
      icon: Zap,
      color: "text-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <Badge className="mb-4">Workflow Library</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Proven Automation Workflows
          </h1>
          <p className="text-xl text-muted-foreground">
            Real-world automation examples that save time and increase efficiency for businesses like yours.
          </p>
        </div>

        {/* Workflows Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {workflows.map((workflow, index) => (
            <Card key={index} className="hover-lift transition-all">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <workflow.icon className={`h-10 w-10 ${workflow.color}`} />
                  <Badge variant="secondary">{workflow.industry}</Badge>
                </div>
                <CardTitle className="text-2xl mb-2">{workflow.title}</CardTitle>
                <CardDescription className="text-base">{workflow.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Workflow Steps */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-muted-foreground">Automation Flow:</p>
                  <div className="flex flex-wrap gap-2">
                    {workflow.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center">
                        <Badge variant="outline" className="text-xs">
                          {step}
                        </Badge>
                        {stepIndex < workflow.steps.length - 1 && (
                          <ArrowRight className="h-3 w-3 mx-1 text-muted-foreground" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact Metrics */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Time Saved</p>
                    <p className="font-semibold text-primary">{workflow.timeSaved}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Key Impact</p>
                    <p className="font-semibold">{workflow.impact}</p>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Learn More About This Workflow
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-primary text-white border-0">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">See These Workflows in Action</h2>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Schedule a free consultation and we'll show you exactly how these automations can be customized for your business.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate('/booking')}
              className="shadow-lg"
            >
              Book Your Free Demo
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Workflows;
