import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Calculator,
  TrendingUp,
  Clock,
  DollarSign,
  Zap,
  Target,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { PACKAGES, getPackageBySize } from "@/data/packages";

const ROICalculator = () => {
  const [businessSize, setBusinessSize] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState("");
  const [hourlyWage, setHourlyWage] = useState("");
  const [selectedYear, setSelectedYear] = useState("1");

  // Calculate results for all years
  const getResults = () => {
    if (!businessSize || !hoursPerWeek || !hourlyWage) {
      return {
        year1: { annualLaborSavings: 0, totalCost: 0, roi: 0, paybackMonths: 0, netSavings: 0 },
        year2: { annualLaborSavings: 0, totalCost: 0, roi: 0, cumulativeNetSavings: 0 },
        year3: { annualLaborSavings: 0, totalCost: 0, roi: 0, cumulativeNetSavings: 0 },
        implementationFee: 0,
      };
    }

    const weeklyHours = parseFloat(hoursPerWeek);
    const wage = parseFloat(hourlyWage);

    // Optimized time savings based on business size
    let baseSavingsPercent = 0.6; // Base 60% savings
    let implementationFee = 3000;
    let monthlySupport = 350;

    switch (businessSize) {
      case "small":
        implementationFee = 3000;
        monthlySupport = 200;
        baseSavingsPercent = 0.5;
        break;
      case "medium":
        implementationFee = 5000;
        monthlySupport = 400;
        baseSavingsPercent = 0.6;
        break;
      case "large":
        implementationFee = 9000;
        monthlySupport = 750;
        baseSavingsPercent = 0.7;
        break;
    }

    // Calculate base annual savings
    const baseWeeklyTimeSaved = weeklyHours * baseSavingsPercent;
    const baseAnnualLaborSavings = baseWeeklyTimeSaved * 52 * wage;
    const annualSupport = monthlySupport * 12;

    // Year 1 calculations (includes 3 months bundled support, so only 9 months additional)
    const year1Savings = baseAnnualLaborSavings;
    const year1TotalCost = implementationFee + monthlySupport * 9;
    const year1NetSavings = year1Savings - year1TotalCost;
    const year1ROI = year1TotalCost > 0 ? (year1NetSavings / year1TotalCost) * 100 : 0;
    const paybackMonths = year1Savings > 0 ? implementationFee / (year1Savings / 12) : 0;

    // Year 2 calculations (10% efficiency improvement)
    const year2SavingsMultiplier = 1.1;
    const year2Savings = baseAnnualLaborSavings * year2SavingsMultiplier;
    const year2TotalCost = annualSupport; // Only ongoing support
    const year2NetSavings = year2Savings - year2TotalCost;
    const cumulativeYear2NetSavings = year1NetSavings + year2NetSavings;
    const year2ROI = (cumulativeYear2NetSavings / implementationFee) * 100;

    // Year 3 calculations (20% efficiency improvement from original)
    const year3SavingsMultiplier = 1.2;
    const year3Savings = baseAnnualLaborSavings * year3SavingsMultiplier;
    const year3TotalCost = annualSupport; // Only ongoing support
    const year3NetSavings = year3Savings - year3TotalCost;
    const cumulativeYear3NetSavings = cumulativeYear2NetSavings + year3NetSavings;
    const year3ROI = (cumulativeYear3NetSavings / implementationFee) * 100;

    return {
      year1: {
        annualLaborSavings: Math.round(year1Savings),
        totalCost: Math.round(year1TotalCost),
        roi: Math.min(Math.round(year1ROI), 600), // Cap ROI at 600%
        paybackMonths: Math.round(paybackMonths * 10) / 10,
        netSavings: Math.round(year1NetSavings),
      },
      year2: {
        annualLaborSavings: Math.round(year2Savings),
        totalCost: Math.round(year2TotalCost),
        roi: Math.min(Math.round(year2ROI), 600), // Cap ROI at 600%
        cumulativeNetSavings: Math.round(cumulativeYear2NetSavings),
      },
      year3: {
        annualLaborSavings: Math.round(year3Savings),
        totalCost: Math.round(year3TotalCost),
        roi: Math.min(Math.round(year3ROI), 600), // Cap ROI at 600%
        cumulativeNetSavings: Math.round(cumulativeYear3NetSavings),
      },
      implementationFee,
    };
  };

  const results = getResults();
  const currentYearData = results[`year${selectedYear}` as keyof typeof results] as any;
  const selectedPackage = businessSize ? getPackageBySize(businessSize as "small" | "medium" | "large") : null;

  return (
    <section id="roi-calculator" className="py-20 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-medium mb-4">
            <Calculator className="w-4 h-4" />
            ROI Calculator
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Calculate Your Automation ROI</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-2">
            See your potential savings over 3 years with our comprehensive projection tool
          </p>
          {results.implementationFee > 0 && (
            <div className="inline-flex items-center gap-2 text-sm text-primary font-medium">
              <span>Implementation Fee:</span>
              <span className="text-lg font-bold">${results.implementationFee.toLocaleString()}</span>
            </div>
          )}
        </div>

        {/* Main Calculator */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Panel - Inputs */}
            <div className="lg:col-span-2">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Zap className="w-5 h-5 text-primary" />
                    Business Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="business-size">Business Size</Label>
                    <Select value={businessSize} onValueChange={setBusinessSize}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your business size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small (Efficiency Essentials)</SelectItem>
                        <SelectItem value="medium">Medium (Growth Builder)</SelectItem>
                        <SelectItem value="large">Large (Enterprise Lite)</SelectItem>
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
                      className="text-base"
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
                      className="text-base"
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      className="w-full"
                      onClick={() => {
                        const element = document.getElementById("roi-results");
                        if (element) element.scrollIntoView({ behavior: "smooth" });
                      }}
                      disabled={!businessSize || !hoursPerWeek || !hourlyWage}
                    >
                      View ROI Results
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Panel - Results */}
            <div className="lg:col-span-3" id="roi-results">
              {/* Year Tabs */}
              <Tabs value={selectedYear} onValueChange={setSelectedYear} className="mb-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="1">Year 1</TabsTrigger>
                  <TabsTrigger value="2">Year 2</TabsTrigger>
                  <TabsTrigger value="3">Year 3</TabsTrigger>
                </TabsList>

                <TabsContent value="1" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Annual Labor Savings */}
                    <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <DollarSign className="w-8 h-8 text-success mx-auto mb-3" />
                        <div className="text-2xl font-bold text-success mb-1">
                          ${results.year1.annualLaborSavings.toLocaleString()}
                        </div>
                        <p className="text-sm text-muted-foreground">Annual Labor Savings</p>
                      </CardContent>
                    </Card>

                    {/* Total Year 1 Cost */}
                    <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <Calculator className="w-8 h-8 text-warning mx-auto mb-3" />
                        <div className="text-2xl font-bold text-warning mb-1">
                          ${results.year1.totalCost.toLocaleString()}
                        </div>
                        <p className="text-sm text-muted-foreground">Total Year 1 Cost</p>
                      </CardContent>
                    </Card>

                    {/* ROI Percentage */}
                    <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <TrendingUp className="w-8 h-8 text-success mx-auto mb-3" />
                        <div className="text-2xl font-bold text-success mb-1">{results.year1.roi}%</div>
                        <p className="text-sm text-muted-foreground">ROI Percentage</p>
                      </CardContent>
                    </Card>

                    {/* Payback Period */}
                    <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                        <div className="text-2xl font-bold text-primary mb-1">{results.year1.paybackMonths}</div>
                        <p className="text-sm text-muted-foreground">Payback (Months)</p>
                      </CardContent>
                    </Card>

                    {/* Net Savings Year 1 */}
                    <Card className="shadow-soft hover:shadow-medium transition-all duration-300 col-span-2">
                      <CardContent className="p-6 text-center">
                        <Target className="w-8 h-8 text-success mx-auto mb-3" />
                        <div className="text-2xl font-bold text-success mb-1">
                          ${results.year1.netSavings.toLocaleString()}
                        </div>
                        <p className="text-sm text-muted-foreground">Net Savings Year 1</p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="2" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Annual Labor Savings */}
                    <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <DollarSign className="w-8 h-8 text-success mx-auto mb-3" />
                        <div className="text-2xl font-bold text-success mb-1">
                          ${results.year2.annualLaborSavings.toLocaleString()}
                        </div>
                        <p className="text-sm text-muted-foreground">Annual Labor Savings</p>
                        <p className="text-xs text-primary mt-1">+10% efficiency gain</p>
                      </CardContent>
                    </Card>

                    {/* Annual Cost */}
                    <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <Calculator className="w-8 h-8 text-warning mx-auto mb-3" />
                        <div className="text-2xl font-bold text-warning mb-1">
                          ${results.year2.totalCost.toLocaleString()}
                        </div>
                        <p className="text-sm text-muted-foreground">Annual Cost (Support Only)</p>
                      </CardContent>
                    </Card>

                    {/* Cumulative ROI */}
                    <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <TrendingUp className="w-8 h-8 text-success mx-auto mb-3" />
                        <div className="text-2xl font-bold text-success mb-1">{results.year2.roi}%</div>
                        <p className="text-sm text-muted-foreground">Cumulative ROI</p>
                      </CardContent>
                    </Card>

                    {/* Cumulative Net Savings */}
                    <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <Target className="w-8 h-8 text-success mx-auto mb-3" />
                        <div className="text-2xl font-bold text-success mb-1">
                          ${results.year2.cumulativeNetSavings.toLocaleString()}
                        </div>
                        <p className="text-sm text-muted-foreground">Cumulative Net Savings</p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="3" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Annual Labor Savings */}
                    <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <DollarSign className="w-8 h-8 text-success mx-auto mb-3" />
                        <div className="text-2xl font-bold text-success mb-1">
                          ${results.year3.annualLaborSavings.toLocaleString()}
                        </div>
                        <p className="text-sm text-muted-foreground">Annual Labor Savings</p>
                        <p className="text-xs text-primary mt-1">+20% efficiency gain</p>
                      </CardContent>
                    </Card>

                    {/* Annual Cost */}
                    <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <Calculator className="w-8 h-8 text-warning mx-auto mb-3" />
                        <div className="text-2xl font-bold text-warning mb-1">
                          ${results.year3.totalCost.toLocaleString()}
                        </div>
                        <p className="text-sm text-muted-foreground">Annual Cost (Support Only)</p>
                      </CardContent>
                    </Card>

                    {/* Cumulative ROI */}
                    <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <TrendingUp className="w-8 h-8 text-success mx-auto mb-3" />
                        <div className="text-2xl font-bold text-success mb-1">{results.year3.roi}%</div>
                        <p className="text-sm text-muted-foreground">Cumulative ROI</p>
                      </CardContent>
                    </Card>

                    {/* Cumulative Net Savings */}
                    <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <Target className="w-8 h-8 text-success mx-auto mb-3" />
                        <div className="text-2xl font-bold text-success mb-1">
                          ${results.year3.cumulativeNetSavings.toLocaleString()}
                        </div>
                        <p className="text-sm text-muted-foreground">3-Year Net Savings</p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Package Features Display */}
              {selectedPackage && businessSize && hoursPerWeek && hourlyWage && (
                <Card className="mt-6 border-primary/20 shadow-medium">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-primary" />
                        Your {selectedPackage.tier} Includes:
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {selectedPackage.priceDisplay}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-2">
                      {selectedPackage.features.slice(0, 6).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t">
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => {
                          const element = document.getElementById("services");
                          if (element) element.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        See Full Package Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Call to Action */}
              <Card className="mt-6 bg-gradient-primary text-white shadow-bold">
                <CardContent className="p-6 text-center space-y-4">
                  <CheckCircle className="w-8 h-8 mx-auto" />
                  <p className="font-semibold">Ready to unlock these savings?</p>
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => (window.location.href = "/booking")}
                    className="font-medium w-full"
                  >
                    Book Free Automation Consultation
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      const element = document.getElementById("package-finder");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-white hover:text-white hover:bg-white/10 w-full"
                  >
                    Not sure which package? Take our quiz
                  </Button>
                </CardContent>
              </Card>

              {/* Assumptions */}
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-2 text-sm">Calculation Assumptions:</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Annual savings calculated using 52 weeks</li>
                  <li>• Time savings: Small (50%), Medium (60%), Large (70%)</li>
                  <li>• Implementation fee includes 3 months of bundled support</li>
                  <li>• Year 1 costs include only 9 months of additional ongoing support</li>
                  <li>• Payback period based on implementation cost vs. monthly labor savings</li>
                  <li>• Year-over-year efficiency improvements: 10% (Year 2), 20% (Year 3)</li>
                </ul>
                <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border"></p>
              </div>
            </div>
          </div>

          {/* ROI Calculator Disclaimer */}
          <div className="mt-8 max-w-4xl mx-auto text-xs text-muted-foreground p-4 bg-warning/5 border border-warning/20 rounded-lg">
            <strong>Disclaimer:</strong> These calculations are estimates based on industry averages and your provided
            inputs. Actual results may vary depending on your specific business processes, implementation, and usage.
            BridgePoint Automations does not guarantee specific time savings or ROI outcomes. See our{" "}
            <a href="/disclaimer" className="underline hover:text-primary">
              full disclaimer
            </a>{" "}
            for details.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
