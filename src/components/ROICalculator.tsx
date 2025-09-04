import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, TrendingUp, Clock, DollarSign } from "lucide-react";

const ROICalculator = () => {
  const [employees, setEmployees] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState("");
  const [hourlyWage, setHourlyWage] = useState("");
  const [errorFrequency, setErrorFrequency] = useState("");
  const [complexity, setComplexity] = useState("");
  const [showResults, setShowResults] = useState(false);

  const calculateROI = () => {
    if (!employees || !hoursPerWeek || !hourlyWage || !errorFrequency || !complexity) {
      return;
    }

    setShowResults(true);
    
    // Scroll to results section after calculation
    setTimeout(() => {
      const resultsElement = document.getElementById('roi-results');
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 100);
  };

  const getResults = () => {
    if (!employees || !hoursPerWeek || !hourlyWage || !errorFrequency || !complexity) {
      return { savings: 0, roi: 0, timesSaved: 0, investment: 2500 };
    }

    const weeklyHours = parseInt(hoursPerWeek);
    const wage = parseFloat(hourlyWage);
    
    // Calculate time savings based on complexity and employee count
    let timeSavingsMultiplier = 0.4; // Base 40% time savings
    if (complexity === "complex" || complexity === "very-complex") timeSavingsMultiplier += 0.2;
    if (errorFrequency === "frequently" || errorFrequency === "very-often") timeSavingsMultiplier += 0.15;
    
    const weeklyTimeSaved = weeklyHours * timeSavingsMultiplier;
    const annualSavings = weeklyTimeSaved * 52 * wage;
    
    // Determine package investment based on employee count  
    let investment = 2500; // Efficiency Essentials
    if (employees === "20-50") investment = 5000; // Growth Builder
    if (employees === "50-100") investment = 9000; // Enterprise Lite
    
    const roi = ((annualSavings - investment) / investment) * 100;
    
    return {
      savings: Math.round(annualSavings),
      roi: Math.round(roi),
      timesSaved: Math.round(weeklyTimeSaved),
      investment
    };
  };

  const results = getResults();

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-medium mb-4">
            <Calculator className="w-4 h-4" />
            ROI Calculator
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Calculate Your Automation ROI
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how much time and money you could save with our automation solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-primary" />
                  Business Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="employees">Number of Employees</Label>
                  <Select value={employees} onValueChange={setEmployees}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select business size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5-10">5-10 employees</SelectItem>
                      <SelectItem value="10-20">10-20 employees</SelectItem>
                      <SelectItem value="20-50">20-50 employees</SelectItem>
                      <SelectItem value="50-100">50-100 employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hours">Hours spent on manual tasks per week</Label>
                  <Input
                    id="hours"
                    type="number"
                    placeholder="e.g., 20"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="wage">Average hourly wage ($)</Label>
                  <Input
                    id="wage"
                    type="number"
                    placeholder="e.g., 25"
                    value={hourlyWage}
                    onChange={(e) => setHourlyWage(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="errors">How often do errors occur in your current processes?</Label>
                  <Select value={errorFrequency} onValueChange={setErrorFrequency}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select error frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rarely">Rarely (less than 5% of tasks)</SelectItem>
                      <SelectItem value="occasionally">Occasionally (5-10% of tasks)</SelectItem>
                      <SelectItem value="sometimes">Sometimes (10-20% of tasks)</SelectItem>
                      <SelectItem value="frequently">Frequently (20-30% of tasks)</SelectItem>
                      <SelectItem value="very-often">Very often (30%+ of tasks)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="complexity">How complex are your current manual processes?</Label>
                  <Select value={complexity} onValueChange={setComplexity}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select process complexity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="simple">Simple (mostly data entry)</SelectItem>
                      <SelectItem value="basic">Basic (some decision making)</SelectItem>
                      <SelectItem value="moderate">Moderate (multiple steps, some logic)</SelectItem>
                      <SelectItem value="complex">Complex (many steps, approvals, integrations)</SelectItem>
                      <SelectItem value="very-complex">Very complex (highly customized workflows)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={calculateROI} 
                  className="w-full"
                  disabled={!employees || !hoursPerWeek || !hourlyWage || !errorFrequency || !complexity}
                >
                  Calculate My ROI
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <Card id="roi-results" className={`transition-all duration-500 ${showResults ? 'opacity-100' : 'opacity-50'}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Your Potential Savings
                </CardTitle>
              </CardHeader>
              <CardContent>
                {showResults ? (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-primary/5 rounded-lg">
                        <DollarSign className="w-6 h-6 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold text-primary">
                          ${results.savings.toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground">saved annually</div>
                      </div>
                      <div className="text-center p-4 bg-success/5 rounded-lg">
                        <TrendingUp className="w-6 h-6 text-success mx-auto mb-2" />
                        <div className="text-2xl font-bold text-success">
                          {results.roi}%
                        </div>
                        <div className="text-sm text-muted-foreground">ROI in first year</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          Weekly time savings:
                        </span>
                        <span className="font-semibold">{results.timesSaved} hours</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Package investment:</span>
                        <span className="font-semibold">${results.investment.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="p-4 bg-gradient-primary text-white rounded-lg text-center">
                      <p className="font-semibold mb-2">Ready to get started?</p>
                      <Button 
                        variant="secondary" 
                        size="sm"
                        onClick={() => window.location.href = '/booking'}
                      >
                        Get Free Automation Audit
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <Calculator className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Fill out the form to see your potential savings</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;