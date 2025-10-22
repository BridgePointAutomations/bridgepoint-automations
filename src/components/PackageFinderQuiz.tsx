import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle, ArrowRight, Sparkles, Users, Building2, Factory, Clock, Zap, DollarSign, TrendingUp, AlertTriangle } from "lucide-react";
import { PACKAGES, Package } from "@/data/packages";
import { useNavigate } from "react-router-dom";

const PackageFinderQuiz = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [businessSize, setBusinessSize] = useState<"small" | "medium" | "large" | "">("");
  const [painPoint, setPainPoint] = useState("");
  const [monthlyRevenue, setMonthlyRevenue] = useState("");
  const [recommendedPackage, setRecommendedPackage] = useState<Package | null>(null);

  const handleSizeSelect = (size: "small" | "medium" | "large") => {
    setBusinessSize(size);
    setStep(2);
  };

  const handlePainPointSelect = (pain: string) => {
    setPainPoint(pain);
    setStep(3);
  };

  const handleRevenueSelect = (revenue: string) => {
    setMonthlyRevenue(revenue);
    const pkg = PACKAGES.find(p => p.size === businessSize);
    if (pkg) {
      setRecommendedPackage(pkg);
      setStep(4);
    }
  };

  const resetQuiz = () => {
    setStep(1);
    setBusinessSize("");
    setPainPoint("");
    setMonthlyRevenue("");
    setRecommendedPackage(null);
  };

  const IconComponent = recommendedPackage?.icon || Sparkles;

  const getCustomMessage = () => {
    switch (painPoint) {
      case "time":
        return "Perfect! Our automation will immediately free up hours of your week for strategic work.";
      case "errors":
        return "Excellent choice! Automation eliminates human error in repetitive tasks, ensuring consistency.";
      case "scaling":
        return "Great! Our solutions scale with your growth without adding headcount proportionally.";
      case "customer":
        return "Smart! Automated responses and workflows dramatically improve customer experience.";
      case "data":
        return "Ideal! We'll create unified dashboards that give you real-time visibility across all systems.";
      default:
        return "";
    }
  };

  return (
    <div className="w-full">
      {/* Step 1: Business Size */}
      {step === 1 && (
        <Card className="shadow-soft">
          <CardHeader className="text-center">
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
              <Sparkles className="h-6 w-6" />
            </div>
            <div className="mb-2">
              <Badge variant="secondary" className="text-xs">Question 1 of 3</Badge>
            </div>
            <CardTitle className="text-2xl mb-2">Find Your Perfect Package</CardTitle>
            <CardDescription>
              Answer three quick questions to get a personalized automation package recommendation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <Label className="text-base font-semibold">What's your business size?</Label>
              <div className="grid gap-4">
                <Card 
                  className="cursor-pointer hover-lift transition-all border-2 hover:border-primary"
                  onClick={() => handleSizeSelect("small")}
                >
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">Small Business</h4>
                      <p className="text-sm text-muted-foreground">1-10 employees</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </CardContent>
                </Card>

                <Card 
                  className="cursor-pointer hover-lift transition-all border-2 hover:border-primary"
                  onClick={() => handleSizeSelect("medium")}
                >
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">Growing Business</h4>
                      <p className="text-sm text-muted-foreground">11-50 employees</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </CardContent>
                </Card>

                <Card 
                  className="cursor-pointer hover-lift transition-all border-2 hover:border-primary"
                  onClick={() => handleSizeSelect("large")}
                >
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Factory className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">Established Business</h4>
                      <p className="text-sm text-muted-foreground">50+ employees</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Pain Point */}
      {step === 2 && (
        <Card className="shadow-soft">
          <CardHeader className="text-center">
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div className="mb-2">
              <Badge variant="secondary" className="text-xs">Question 2 of 3</Badge>
            </div>
            <CardTitle className="text-2xl mb-2">What's Your Biggest Challenge?</CardTitle>
            <CardDescription>
              Help us understand your primary pain point
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <Label className="text-base font-semibold">What's your biggest automation pain point?</Label>
              <div className="grid gap-3">
                <Card 
                  className="cursor-pointer hover-lift transition-all border-2 hover:border-primary"
                  onClick={() => handlePainPointSelect("time")}
                >
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">Too Much Time on Repetitive Tasks</h4>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </CardContent>
                </Card>

                <Card 
                  className="cursor-pointer hover-lift transition-all border-2 hover:border-primary"
                  onClick={() => handlePainPointSelect("errors")}
                >
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">Manual Errors & Inconsistencies</h4>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </CardContent>
                </Card>

                <Card 
                  className="cursor-pointer hover-lift transition-all border-2 hover:border-primary"
                  onClick={() => handlePainPointSelect("scaling")}
                >
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">Can't Scale Without More Staff</h4>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </CardContent>
                </Card>

                <Card 
                  className="cursor-pointer hover-lift transition-all border-2 hover:border-primary"
                  onClick={() => handlePainPointSelect("customer")}
                >
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">Slow Customer Response Times</h4>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </CardContent>
                </Card>

                <Card 
                  className="cursor-pointer hover-lift transition-all border-2 hover:border-primary"
                  onClick={() => handlePainPointSelect("data")}
                >
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">Disconnected Systems & Data</h4>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </CardContent>
                </Card>
              </div>
            </div>
            <Button variant="ghost" onClick={resetQuiz} className="w-full">
              Back
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Step 3: Monthly Revenue */}
      {step === 3 && (
        <Card className="shadow-soft">
          <CardHeader className="text-center">
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
              <DollarSign className="h-6 w-6" />
            </div>
            <div className="mb-2">
              <Badge variant="secondary" className="text-xs">Question 3 of 3</Badge>
            </div>
            <CardTitle className="text-2xl mb-2">What's Your Monthly Revenue?</CardTitle>
            <CardDescription>
              This helps us ensure the investment aligns with your business stage
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <Label className="text-base font-semibold">Current monthly revenue range</Label>
              <div className="grid gap-3">
                <Card 
                  className="cursor-pointer hover-lift transition-all border-2 hover:border-primary"
                  onClick={() => handleRevenueSelect("under25k")}
                >
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="flex-1">
                      <h4 className="font-semibold">Under $25,000/month</h4>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </CardContent>
                </Card>

                <Card 
                  className="cursor-pointer hover-lift transition-all border-2 hover:border-primary"
                  onClick={() => handleRevenueSelect("25k-100k")}
                >
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="flex-1">
                      <h4 className="font-semibold">$25,000 - $100,000/month</h4>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </CardContent>
                </Card>

                <Card 
                  className="cursor-pointer hover-lift transition-all border-2 hover:border-primary"
                  onClick={() => handleRevenueSelect("100k-500k")}
                >
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="flex-1">
                      <h4 className="font-semibold">$100,000 - $500,000/month</h4>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </CardContent>
                </Card>

                <Card 
                  className="cursor-pointer hover-lift transition-all border-2 hover:border-primary"
                  onClick={() => handleRevenueSelect("over500k")}
                >
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="flex-1">
                      <h4 className="font-semibold">Over $500,000/month</h4>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </CardContent>
                </Card>
              </div>
            </div>
            <Button variant="ghost" onClick={() => setStep(2)} className="w-full">
              Back
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Step 4: Results */}
      {step === 4 && recommendedPackage && (
        <Card className="shadow-bold">
          <CardHeader className="text-center bg-gradient-primary text-white rounded-t-lg">
            <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-white/40">
              Recommended For You
            </Badge>
            <CardTitle className="text-2xl mb-2">{recommendedPackage.tier}</CardTitle>
            <div className="text-3xl font-bold mb-2">
              ${recommendedPackage.monthlyPrice.toLocaleString()}/month
            </div>
            <p className="text-sm text-white/90">
              $0 Setup Fee • {recommendedPackage.commitmentTerms.minimumMonths} month minimum
            </p>
          </CardHeader>
          
          <CardContent className="p-6 space-y-6">
            <p className="text-muted-foreground">{recommendedPackage.description}</p>
            
            {/* Custom message based on pain point */}
            {getCustomMessage() && (
              <div className="p-4 bg-accent rounded-lg">
                <p className="text-sm font-medium text-primary">{getCustomMessage()}</p>
              </div>
            )}
            
            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-accent rounded-lg">
              <div className="text-center">
                <div className="font-semibold text-primary">{recommendedPackage.expectedResults.roiMultiplier}</div>
                <div className="text-xs text-muted-foreground">Typical ROI</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-primary">{recommendedPackage.expectedResults.timeSaved}</div>
                <div className="text-xs text-muted-foreground">Time Savings</div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="font-semibold mb-3">What's Included:</h4>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{recommendedPackage.workflowInfrastructure.workflowBuilds} automated workflows</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{recommendedPackage.workflowInfrastructure.airtableBases} Airtable</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{recommendedPackage.capacity.monthlyTasks} monthly task executions</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{recommendedPackage.supportMaintenance.responseTime} response time</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{recommendedPackage.supportMaintenance.modificationHours} modification hours/month</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{recommendedPackage.setupOnboarding.auditHours} hour automation audit</span>
                </div>
              </div>
            </div>

            {/* Platforms */}
            <div>
              <h4 className="font-semibold mb-2">Platforms Used:</h4>
              <div className="flex flex-wrap gap-2">
                {recommendedPackage.workflowInfrastructure.platformsSupported.map((platform, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {platform}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-4 border-t">
              <Button 
                className="w-full group" 
                size="lg"
                onClick={() => navigate('/booking')}
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  const element = document.getElementById('roi-calculator');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Calculate My Exact ROI
              </Button>

              <Button 
                variant="ghost" 
                className="w-full text-sm"
                onClick={resetQuiz}
              >
                Take Quiz Again
              </Button>
            </div>

            <p className="text-xs text-center text-muted-foreground pt-2">
              All packages include performance tracking, optimization support, and ROI-focused implementation
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PackageFinderQuiz;
