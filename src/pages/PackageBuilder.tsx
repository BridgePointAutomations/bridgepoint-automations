import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import Navigation from "@/components/Navigation";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Sparkles } from "lucide-react";

const PackageBuilder = () => {
  const navigate = useNavigate();
  
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [businessSize, setBusinessSize] = useState<"small" | "medium" | "large">("small");

  const features = [
    { id: "lead-capture", name: "Lead Capture Automation", price: 500, category: "Sales" },
    { id: "email-sequences", name: "Email Marketing Sequences", price: 400, category: "Marketing" },
    { id: "appointment", name: "Appointment Scheduling", price: 350, category: "Operations" },
    { id: "crm-integration", name: "CRM Integration & Sync", price: 600, category: "Sales" },
    { id: "invoice-automation", name: "Invoice & Payment Automation", price: 550, category: "Finance" },
    { id: "document-processing", name: "Document Processing", price: 700, category: "Operations" },
    { id: "customer-notifications", name: "Customer Notifications", price: 300, category: "Customer Service" },
    { id: "reporting", name: "Custom Reports & Dashboards", price: 500, category: "Analytics" },
    { id: "social-media", name: "Social Media Automation", price: 450, category: "Marketing" },
    { id: "inventory", name: "Inventory Management", price: 650, category: "Operations" },
  ];

  const basePrices = {
    small: 2500,
    medium: 4500,
    large: 8000,
  };

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const calculateTotal = () => {
    const basePrice = basePrices[businessSize];
    const featuresPrice = features
      .filter(f => selectedFeatures.includes(f.id))
      .reduce((sum, f) => sum + f.price, 0);
    return basePrice + featuresPrice;
  };

  const categories = Array.from(new Set(features.map(f => f.category)));

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">
              <Sparkles className="h-3 w-3 mr-1" />
              Custom Package Builder
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Build Your Perfect Automation Package
            </h1>
            <p className="text-xl text-muted-foreground">
              Select the features you need and see your custom price instantly.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Feature Selection */}
            <div className="lg:col-span-2 space-y-6">
              {/* Business Size */}
              <Card>
                <CardHeader>
                  <CardTitle>Step 1: Select Your Business Size</CardTitle>
                  <CardDescription>This determines your base implementation fee</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {(["small", "medium", "large"] as const).map((size) => (
                      <Button
                        key={size}
                        variant={businessSize === size ? "default" : "outline"}
                        className="h-auto py-4 flex flex-col items-start"
                        onClick={() => setBusinessSize(size)}
                      >
                        <span className="font-semibold capitalize">{size}</span>
                        <span className="text-xs opacity-80">
                          {size === "small" && "1-10 employees"}
                          {size === "medium" && "11-50 employees"}
                          {size === "large" && "50+ employees"}
                        </span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Features by Category */}
              <Card>
                <CardHeader>
                  <CardTitle>Step 2: Choose Your Features</CardTitle>
                  <CardDescription>Add specific automations to your package</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {categories.map((category) => (
                    <div key={category}>
                      <h3 className="font-semibold mb-3 text-primary">{category}</h3>
                      <div className="space-y-3">
                        {features
                          .filter(f => f.category === category)
                          .map((feature) => (
                            <div
                              key={feature.id}
                              className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer"
                              onClick={() => toggleFeature(feature.id)}
                            >
                              <Checkbox
                                checked={selectedFeatures.includes(feature.id)}
                                onCheckedChange={() => toggleFeature(feature.id)}
                              />
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <span className="font-medium">{feature.name}</span>
                                  <span className="text-sm text-muted-foreground">
                                    +${feature.price}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Price Summary (Sticky) */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4 shadow-elegant">
                <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
                  <CardTitle className="text-2xl">Your Custom Package</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Base Implementation</span>
                      <span className="font-medium">${basePrices[businessSize].toLocaleString()}</span>
                    </div>
                    
                    {selectedFeatures.length > 0 && (
                      <>
                        <div className="border-t pt-2 mt-2">
                          <p className="text-xs font-semibold text-muted-foreground mb-2">
                            Added Features ({selectedFeatures.length})
                          </p>
                          {features
                            .filter(f => selectedFeatures.includes(f.id))
                            .map(feature => (
                              <div key={feature.id} className="flex justify-between text-xs mb-1">
                                <span className="text-muted-foreground">{feature.name}</span>
                                <span>${feature.price}</span>
                              </div>
                            ))}
                        </div>
                      </>
                    )}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-lg font-semibold">Total Investment</span>
                      <span className="text-3xl font-bold text-primary">
                        ${calculateTotal().toLocaleString()}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Includes 3 months of support
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">6-Month ROI Guarantee</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Dedicated Implementation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Training & Documentation</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full" 
                    size="lg"
                    variant="hero"
                    onClick={() => navigate('/booking')}
                  >
                    Schedule Consultation
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    Get exact pricing during your free consultation
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PackageBuilder;
