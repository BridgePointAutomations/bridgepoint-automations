import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, TrendingUp, Clock, DollarSign, Zap, Target, CheckCircle } from "lucide-react";

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
        implementationFee: 0
      };
    }

    const weeklyHours = parseFloat(hoursPerWeek);
    const wage = parseFloat(hourlyWage);
    
    // Conservative time savings based on business size
    let baseSavingsPercent = 0.35; // Base 35% savings
    let implementationFee = 2500;
    let monthlySupport = 350;
    
    switch (businessSize) {
      case "small":
        implementationFee = 2500;
        monthlySupport = 300;
        baseSavingsPercent = 0.35;
        break;
      case "medium":
        implementationFee = 5000;
        monthlySupport = 600;
        baseSavingsPercent = 0.45;
        break;
      case "large":
        implementationFee = 9000;
        monthlySupport = 900;
        baseSavingsPercent = 0.55;
        break;
    }
    
    // Calculate base annual savings
    const baseWeeklyTimeSaved = weeklyHours * baseSavingsPercent;
    const baseAnnualLaborSavings = baseWeeklyTimeSaved * 52 * wage;
    const annualSupport = monthlySupport * 12;
    
    // Year 1 calculations
    const year1Savings = baseAnnualLaborSavings;
    const year1TotalCost = implementationFee + annualSupport;
    const year1NetSavings = year1Savings - year1TotalCost;
    const year1ROI = year1TotalCost > 0 ? (year1NetSavings / year1TotalCost) * 100 : 0;
    const paybackMonths = year1Savings > 0 ? (implementationFee / (year1Savings / 12)) : 0;
    
    // Year 2 calculations (10% efficiency improvement)
    const year2SavingsMultiplier = 1.10;
    const year2Savings = baseAnnualLaborSavings * year2SavingsMultiplier;
    const year2TotalCost = annualSupport; // Only ongoing support
    const year2NetSavings = year2Savings - year2TotalCost;
    const cumulativeYear2NetSavings = year1NetSavings + year2NetSavings;
    const year2ROI = (cumulativeYear2NetSavings / implementationFee) * 100;
    
    // Year 3 calculations (20% efficiency improvement from original)
    const year3SavingsMultiplier = 1.20;
    const year3Savings = baseAnnualLaborSavings * year3SavingsMultiplier;
    const year3TotalCost = annualSupport; // Only ongoing support
    const year3NetSavings = year3Savings - year3TotalCost;
    const cumulativeYear3NetSavings = cumulativeYear2NetSavings + year3NetSavings;
    const year3ROI = (cumulativeYear3NetSavings / implementationFee) * 100;
    
    return {
      year1: {
        annualLaborSavings: Math.round(year1Savings),
        totalCost: Math.round(year1TotalCost),
        roi: Math.round(year1ROI),
        paybackMonths: Math.round(paybackMonths * 10) / 10,
        netSavings: Math.round(year1NetSavings)
      },
      year2: {
        annualLaborSavings: Math.round(year2Savings),
        totalCost: Math.round(year2TotalCost),
        roi: Math.round(year2ROI),
        cumulativeNetSavings: Math.round(cumulativeYear2NetSavings)
      },
      year3: {
        annualLaborSavings: Math.round(year3Savings),
        totalCost: Math.round(year3TotalCost),
        roi: Math.round(year3ROI),
        cumulativeNetSavings: Math.round(cumulativeYear3NetSavings)
      },
      implementationFee
    };
  };

  const results = getResults();
  const currentYearData = results[`year${selectedYear}` as keyof typeof results] as any;

  return (
    <section id="roi-calculator" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-medium mb-4">
            <Calculator className="w-4 h-4" />
            ROI Calculator
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            BridgePoint ROI Calculator
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-2">
            Calculate your automation ROI over 3 years with our comprehensive projection tool.
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-primary font-medium">
            <span>Implementation Fee:</span>
            <span className="text-lg font-bold">${results.implementationFee.toLocaleString()}</span>
          </div>
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
                        const element = document.getElementById('roi-results');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
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
                        <div className="text-2xl font-bold text-success mb-1">
                          {results.year1.roi}%
                        </div>
                        <p className="text-sm text-muted-foreground">ROI Percentage</p>
                      </CardContent>
                    </Card>

                    {/* Payback Period */}
                    <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                        <div className="text-2xl font-bold text-primary mb-1">
                          {results.year1.paybackMonths}
                        </div>
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
                        <div className="text-2xl font-bold text-success mb-1">
                          {results.year2.roi}%
                        </div>
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
                        <div className="text-2xl font-bold text-success mb-1">
                          {results.year3.roi}%
                        </div>
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

              {/* Call to Action */}
              <Card className="mt-6 bg-gradient-primary text-white shadow-bold">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-8 h-8 mx-auto mb-3" />
                  <p className="font-semibold mb-4">Ready to unlock these savings?</p>
                  <Button 
                    variant="secondary" 
                    size="lg"
                    onClick={() => window.location.href = '/booking'}
                    className="font-medium"
                  >
                    Book Free Automation Consultation
                  </Button>
                </CardContent>
              </Card>

              {/* Assumptions */}
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-2 text-sm">Calculation Assumptions:</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Annual savings calculated using 52 weeks</li>
                  <li>• Time savings: Small (35%), Medium (45%), Large (55%)</li>
                  <li>• Payback period based on implementation cost vs. monthly labor savings</li>
                  <li>• Year-over-year efficiency improvements: 10% (Year 2), 20% (Year 3)</li>
                  <li>• Ongoing support fees are separate from ROI calculation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;