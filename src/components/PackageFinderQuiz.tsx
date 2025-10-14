import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle, ArrowRight, Sparkles, Users, Building2, Factory } from "lucide-react";
import { PACKAGES, Package } from "@/data/packages";
import { useNavigate } from "react-router-dom";

const PackageFinderQuiz = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [businessSize, setBusinessSize] = useState<"small" | "medium" | "large" | "">("");
  const [recommendedPackage, setRecommendedPackage] = useState<Package | null>(null);

  const handleSizeSelect = (size: "small" | "medium" | "large") => {
    setBusinessSize(size);
    const pkg = PACKAGES.find(p => p.size === size);
    if (pkg) {
      setRecommendedPackage(pkg);
      setStep(2);
    }
  };

  const resetQuiz = () => {
    setStep(1);
    setBusinessSize("");
    setRecommendedPackage(null);
  };

  const IconComponent = recommendedPackage?.icon || Sparkles;

  return (
    <div className="w-full">
      {step === 1 ? (
        <Card className="shadow-soft">
          <CardHeader className="text-center">
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
              <Sparkles className="h-6 w-6" />
            </div>
            <CardTitle className="text-2xl mb-2">Find Your Perfect Package</CardTitle>
            <CardDescription>
              Answer one quick question to get a personalized automation package recommendation
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
      ) : (
        <Card className="shadow-bold">
          <CardHeader className="text-center bg-gradient-primary text-white rounded-t-lg">
            <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-white/40">
              Recommended For You
            </Badge>
            <CardTitle className="text-2xl mb-2">{recommendedPackage?.tier}</CardTitle>
            <div className="text-3xl font-bold mb-2">{recommendedPackage?.priceDisplay}</div>
            <p className="text-sm text-white/90">+ ${recommendedPackage?.monthlySupport}/month ongoing support</p>
          </CardHeader>
          
          <CardContent className="p-6 space-y-6">
            <p className="text-muted-foreground">{recommendedPackage?.description}</p>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-accent rounded-lg">
              <div className="text-center">
                <div className="font-semibold text-primary">{recommendedPackage?.roi}</div>
                <div className="text-xs text-muted-foreground">Expected ROI</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-primary">{recommendedPackage?.savings}</div>
                <div className="text-xs text-muted-foreground">Time Savings</div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="font-semibold mb-3">What's Included:</h4>
              <div className="space-y-2">
                {recommendedPackage?.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Platforms */}
            <div>
              <h4 className="font-semibold mb-2">Platforms Used:</h4>
              <div className="flex flex-wrap gap-2">
                {recommendedPackage?.platforms.map((platform, idx) => (
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
              All packages include a 6-month ROI guarantee and dedicated implementation support
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PackageFinderQuiz;
