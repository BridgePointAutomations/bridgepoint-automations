import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, TrendingUp, Clock, DollarSign, Zap, Target, CheckCircle } from "lucide-react";

const ROICalculator = () => {
  const [businessSize, setBusinessSize] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState("");
  const [hourlyWage, setHourlyWage] = useState("");
  const [subscriptionCost, setSubscriptionCost] = useState("");

  // Calculate results in real-time
  const getResults = () => {
    if (!businessSize || !hoursPerWeek || !hourlyWage) {
      return {
        annualLaborSavings: 0,
        annualAutomationCost: 0,
        totalYear1Cost: 0,
        roi: 0,
        paybackMonths: 0,
        netSavingsYear1: 0,
        implementationFee: 0
      };
    }

    const weeklyHours = parseFloat(hoursPerWeek);
    const wage = parseFloat(hourlyWage);
    const monthlySoftware = parseFloat(subscriptionCost) || 0;
    
    // Conservative time savings based on business size
    let timeSavingsPercent = 0.35; // Base 35% savings
    let implementationFee = 2500;
    let monthlySupport = 350;
    
    switch (businessSize) {
      case "small":
        implementationFee = 2500;
        monthlySupport = 350;
        timeSavingsPercent = 0.35;
        break;
      case "medium":
        implementationFee = 5000;
        monthlySupport = 550;
        timeSavingsPercent = 0.45;
        break;
      case "large":
        implementationFee = 9000;
        monthlySupport = 750;
        timeSavingsPercent = 0.55;
        break;
    }
    
    // Calculate savings
    const weeklyTimeSaved = weeklyHours * timeSavingsPercent;
    const annualLaborSavings = weeklyTimeSaved * 52 * wage;
    const annualSupport = monthlySupport * 12;
    const annualSoftware = monthlySoftware * 12;
    const annualAutomationCost = annualSupport + annualSoftware;
    const totalYear1Cost = implementationFee + annualAutomationCost;
    const netSavingsYear1 = annualLaborSavings - totalYear1Cost;
    const roi = totalYear1Cost > 0 ? (netSavingsYear1 / totalYear1Cost) * 100 : 0;
    const paybackMonths = annualLaborSavings > 0 ? (implementationFee / (annualLaborSavings / 12)) : 0;
    
    return {
      annualLaborSavings: Math.round(annualLaborSavings),
      annualAutomationCost: Math.round(annualAutomationCost),
      totalYear1Cost: Math.round(totalYear1Cost),
      roi: Math.round(roi),
      paybackMonths: Math.round(paybackMonths * 10) / 10,
      netSavingsYear1: Math.round(netSavingsYear1),
      implementationFee
    };
  };

  const results = getResults();

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
            Front-facing app version. Share this with prospects to quantify value quickly.
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

                  <div className="space-y-2">
                    <Label htmlFor="subscription">Monthly software subscription costs ($)</Label>
                    <Input
                      id="subscription"
                      type="number"
                      placeholder="e.g., 150 (optional)"
                      value={subscriptionCost}
                      onChange={(e) => setSubscriptionCost(e.target.value)}
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

            {/* Right Panel - Results Grid */}
            <div className="lg:col-span-3" id="roi-results">
              <div className="grid grid-cols-2 gap-4">
                {/* Annual Labor Savings */}
                <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <DollarSign className="w-8 h-8 text-success mx-auto mb-3" />
                    <div className="text-2xl font-bold text-success mb-1">
                      ${results.annualLaborSavings.toLocaleString()}
                    </div>
                    <p className="text-sm text-muted-foreground">Annual Labor Savings</p>
                  </CardContent>
                </Card>

                {/* Annual Automation Cost */}
                <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary mb-1">
                      ${results.annualAutomationCost.toLocaleString()}
                    </div>
                    <p className="text-sm text-muted-foreground">Annual Automation Cost</p>
                  </CardContent>
                </Card>

                {/* Total Year 1 Cost */}
                <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Calculator className="w-8 h-8 text-warning mx-auto mb-3" />
                    <div className="text-2xl font-bold text-warning mb-1">
                      ${results.totalYear1Cost.toLocaleString()}
                    </div>
                    <p className="text-sm text-muted-foreground">Total Year 1 Cost</p>
                  </CardContent>
                </Card>

                {/* ROI Percentage */}
                <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="w-8 h-8 text-success mx-auto mb-3" />
                    <div className="text-2xl font-bold text-success mb-1">
                      {results.roi}%
                    </div>
                    <p className="text-sm text-muted-foreground">ROI Percentage</p>
                  </CardContent>
                </Card>

                {/* Payback Period */}
                <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary mb-1">
                      {results.paybackMonths}
                    </div>
                    <p className="text-sm text-muted-foreground">Payback (Months)</p>
                  </CardContent>
                </Card>

                {/* Net Savings Year 1 */}
                <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Target className="w-8 h-8 text-success mx-auto mb-3" />
                    <div className="text-2xl font-bold text-success mb-1">
                      ${results.netSavingsYear1.toLocaleString()}
                    </div>
                    <p className="text-sm text-muted-foreground">Net Savings Year 1</p>
                  </CardContent>
                </Card>
              </div>

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
                    Book Free Automation Audit
                  </Button>
                </CardContent>
              </Card>

              {/* Assumptions */}
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-2 text-sm">Calculation Assumptions:</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Annual savings calculated using 52 weeks</li>
                  <li>• Time savings: Small (35%), Medium (45%), Large (55%)</li>
                  <li>• Includes monthly support: Small ($350), Medium ($550), Large ($750)</li>
                  <li>• Payback period based on implementation cost vs. monthly labor savings</li>
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