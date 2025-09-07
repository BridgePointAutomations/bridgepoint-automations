import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, TrendingUp, Clock, DollarSign, Zap, Target, CheckCircle, AlertTriangle, TrendingDown, Lightbulb, Users } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const ROICalculator = () => {
  // Basic inputs
  const [businessSize, setBusinessSize] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState("");
  const [hourlyWage, setHourlyWage] = useState("");
  const [subscriptionCost, setSubscriptionCost] = useState("");
  
  // Enhanced calculation options
  const [timeframeYears, setTimeframeYears] = useState(3);
  const [scenario, setScenario] = useState("realistic");
  const [includeErrorReduction, setIncludeErrorReduction] = useState(false);
  const [includeOpportunityCost, setIncludeOpportunityCost] = useState(false);
  const [includeScalability, setIncludeScalability] = useState(false);
  
  // Additional value inputs
  const [monthlyErrorCost, setMonthlyErrorCost] = useState("");
  const [strategicWorkValue, setStrategicWorkValue] = useState("");
  const [growthRate, setGrowthRate] = useState("5");

  // Enhanced calculation logic
  const getResults = () => {
    if (!businessSize || !hoursPerWeek || !hourlyWage) {
      return {
        cumulativeLaborSavings: 0,
        cumulativeAutomationCost: 0,
        totalCumulativeCost: 0,
        cumulativeROI: 0,
        breakEvenMonth: 0,
        netCumulativeSavings: 0,
        implementationFee: 0,
        additionalValue: 0,
        yearlyBreakdown: [],
        isViable: false,
        recommendations: []
      };
    }

    const weeklyHours = parseFloat(hoursPerWeek);
    const wage = parseFloat(hourlyWage);
    const monthlySoftware = parseFloat(subscriptionCost) || 0;
    const errorCost = parseFloat(monthlyErrorCost) || 0;
    const strategicValue = parseFloat(strategicWorkValue) || 0;
    const growth = parseFloat(growthRate) || 0;
    
    // Scenario-based time savings adjustments
    let baseTimeSavings = { small: 0.35, medium: 0.45, large: 0.55 };
    let scenarioMultiplier = { conservative: 0.8, realistic: 1.0, optimistic: 1.2 };
    
    let timeSavingsPercent = baseTimeSavings[businessSize] * scenarioMultiplier[scenario];
    let implementationFee = { small: 2500, medium: 5000, large: 9000 }[businessSize];
    let monthlySupport = { small: 350, medium: 550, large: 750 }[businessSize];
    
    // Apply scenario adjustments to costs
    if (scenario === "conservative") {
      implementationFee *= 1.2;
      monthlySupport *= 1.1;
    } else if (scenario === "optimistic") {
      implementationFee *= 0.9;
      monthlySupport *= 0.95;
    }
    
    // Multi-year calculations
    let cumulativeLaborSavings = 0;
    let cumulativeAutomationCost = implementationFee;
    let additionalValue = 0;
    let yearlyBreakdown = [];
    let breakEvenMonth = 0;
    let cumulativeNetSavings = -implementationFee;
    
    for (let year = 1; year <= timeframeYears; year++) {
      // Apply growth factor
      const growthMultiplier = Math.pow(1 + growth / 100, year - 1);
      const adjustedHours = weeklyHours * growthMultiplier;
      const adjustedTimeSaved = adjustedHours * timeSavingsPercent;
      
      // Base labor savings for this year
      const yearlyLaborSavings = adjustedTimeSaved * 52 * wage;
      
      // Annual automation costs
      const yearlyAutomationCost = (monthlySupport + monthlySoftware) * 12;
      
      // Additional value streams
      let yearlyAdditionalValue = 0;
      
      // Error reduction value
      if (includeErrorReduction) {
        const errorReductionValue = errorCost * 12 * 0.7; // 70% error reduction
        yearlyAdditionalValue += errorReductionValue * growthMultiplier;
      }
      
      // Opportunity cost value
      if (includeOpportunityCost && strategicValue) {
        const opportunityValue = adjustedTimeSaved * 52 * strategicValue * 0.6; // 60% of freed time for strategic work
        yearlyAdditionalValue += opportunityValue;
      }
      
      // Scalability benefits (compound over time)
      if (includeScalability) {
        const scalabilityBonus = yearlyLaborSavings * 0.15 * (year - 1); // 15% efficiency improvement per year
        yearlyAdditionalValue += scalabilityBonus;
      }
      
      // Accumulate totals
      cumulativeLaborSavings += yearlyLaborSavings;
      cumulativeAutomationCost += yearlyAutomationCost;
      additionalValue += yearlyAdditionalValue;
      
      const yearlyNetSavings = yearlyLaborSavings + yearlyAdditionalValue - yearlyAutomationCost;
      cumulativeNetSavings += yearlyNetSavings;
      
      // Track break-even point
      if (breakEvenMonth === 0 && cumulativeNetSavings > 0) {
        const monthsThisYear = year === 1 ? 
          Math.ceil(implementationFee / ((yearlyLaborSavings + yearlyAdditionalValue) / 12)) :
          ((year - 1) * 12) + 1;
        breakEvenMonth = monthsThisYear;
      }
      
      yearlyBreakdown.push({
        year,
        laborSavings: Math.round(yearlyLaborSavings),
        automationCost: Math.round(yearlyAutomationCost),
        additionalValue: Math.round(yearlyAdditionalValue),
        netSavings: Math.round(yearlyNetSavings),
        cumulativeNet: Math.round(cumulativeNetSavings)
      });
    }
    
    const totalCumulativeCost = implementationFee + cumulativeAutomationCost;
    const totalCumulativeValue = cumulativeLaborSavings + additionalValue;
    const cumulativeROI = totalCumulativeCost > 0 ? ((totalCumulativeValue - totalCumulativeCost) / totalCumulativeCost) * 100 : 0;
    
    // Viability assessment and recommendations
    const isViable = cumulativeROI > 0;
    const recommendations = [];
    
    if (!isViable) {
      if (weeklyHours < 10) recommendations.push("Consider increasing weekly hours to at least 10-15 for better ROI");
      if (timeSavingsPercent < 0.4) recommendations.push("Consider upgrading to a larger business package");
      if (timeframeYears < 3) recommendations.push("View 3-year projections to see long-term value");
    }
    
    return {
      cumulativeLaborSavings: Math.round(cumulativeLaborSavings),
      cumulativeAutomationCost: Math.round(cumulativeAutomationCost),
      totalCumulativeCost: Math.round(totalCumulativeCost),
      cumulativeROI: Math.round(cumulativeROI),
      breakEvenMonth: breakEvenMonth,
      netCumulativeSavings: Math.round(cumulativeNetSavings),
      implementationFee: Math.round(implementationFee),
      additionalValue: Math.round(additionalValue),
      yearlyBreakdown,
      isViable,
      recommendations
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
            Enhanced ROI Calculator
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            BridgePoint ROI Calculator
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-2">
            Comprehensive value assessment with multi-year projections and scenario analysis.
          </p>
          
          {/* Scenario & Timeframe Selection */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <Label htmlFor="scenario" className="text-sm">Scenario:</Label>
              <Select value={scenario} onValueChange={setScenario}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="conservative">Conservative</SelectItem>
                  <SelectItem value="realistic">Realistic</SelectItem>
                  <SelectItem value="optimistic">Optimistic</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center gap-2">
              <Label htmlFor="timeframe" className="text-sm">Timeframe:</Label>
              <Select value={timeframeYears.toString()} onValueChange={(value) => setTimeframeYears(parseInt(value))}>
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Year</SelectItem>
                  <SelectItem value="2">2 Years</SelectItem>
                  <SelectItem value="3">3 Years</SelectItem>
                  <SelectItem value="5">5 Years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {!results.isViable && results.recommendations.length > 0 && (
            <div className="mt-4 p-4 bg-warning/10 border border-warning/20 rounded-lg max-w-2xl mx-auto">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-warning" />
                <span className="font-medium text-warning">Optimization Suggestions</span>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                {results.recommendations.map((rec, idx) => (
                  <li key={idx}>• {rec}</li>
                ))}
              </ul>
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
                  {/* Basic Inputs */}
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

                  {/* Advanced Options */}
                  <div className="border-t pt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Lightbulb className="w-4 h-4 text-primary" />
                      <span className="font-medium text-sm">Additional Value Streams</span>
                    </div>
                    
                    {/* Error Reduction */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="error-reduction" 
                          checked={includeErrorReduction}
                          onCheckedChange={(checked) => setIncludeErrorReduction(checked === true)}
                        />
                        <Label htmlFor="error-reduction" className="text-sm">Include error reduction value</Label>
                      </div>
                      {includeErrorReduction && (
                        <Input
                          type="number"
                          placeholder="Monthly cost of errors ($)"
                          value={monthlyErrorCost}
                          onChange={(e) => setMonthlyErrorCost(e.target.value)}
                          className="ml-6 text-sm"
                        />
                      )}
                    </div>

                    {/* Opportunity Cost */}
                    <div className="space-y-3 mt-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="opportunity-cost" 
                          checked={includeOpportunityCost}
                          onCheckedChange={(checked) => setIncludeOpportunityCost(checked === true)}
                        />
                        <Label htmlFor="opportunity-cost" className="text-sm">Include strategic work opportunity</Label>
                      </div>
                      {includeOpportunityCost && (
                        <Input
                          type="number"
                          placeholder="Value per hour of strategic work ($)"
                          value={strategicWorkValue}
                          onChange={(e) => setStrategicWorkValue(e.target.value)}
                          className="ml-6 text-sm"
                        />
                      )}
                    </div>

                    {/* Scalability */}
                    <div className="space-y-3 mt-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="scalability" 
                          checked={includeScalability}
                          onCheckedChange={(checked) => setIncludeScalability(checked === true)}
                        />
                        <Label htmlFor="scalability" className="text-sm">Include scalability benefits</Label>
                      </div>
                      {includeScalability && (
                        <Input
                          type="number"
                          placeholder="Expected annual growth rate (%)"
                          value={growthRate}
                          onChange={(e) => setGrowthRate(e.target.value)}
                          className="ml-6 text-sm"
                        />
                      )}
                    </div>
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
                {/* Cumulative Labor Savings */}
                <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <DollarSign className="w-8 h-8 text-success mx-auto mb-3" />
                    <div className="text-2xl font-bold text-success mb-1">
                      ${results.cumulativeLaborSavings.toLocaleString()}
                    </div>
                    <p className="text-sm text-muted-foreground">{timeframeYears}-Year Labor Savings</p>
                  </CardContent>
                </Card>

                {/* Total Automation Investment */}
                <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary mb-1">
                      ${results.totalCumulativeCost.toLocaleString()}
                    </div>
                    <p className="text-sm text-muted-foreground">Total Investment</p>
                  </CardContent>
                </Card>

                {/* Additional Value Streams */}
                {results.additionalValue > 0 && (
                  <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <Lightbulb className="w-8 h-8 text-secondary mx-auto mb-3" />
                      <div className="text-2xl font-bold text-secondary mb-1">
                        ${results.additionalValue.toLocaleString()}
                      </div>
                      <p className="text-sm text-muted-foreground">Additional Value</p>
                    </CardContent>
                  </Card>
                )}

                {/* Cumulative ROI */}
                <Card className={`shadow-soft hover:shadow-medium transition-all duration-300 ${results.cumulativeROI >= 0 ? '' : 'border-warning'}`}>
                  <CardContent className="p-6 text-center">
                    {results.cumulativeROI >= 0 ? (
                      <TrendingUp className="w-8 h-8 text-success mx-auto mb-3" />
                    ) : (
                      <TrendingDown className="w-8 h-8 text-warning mx-auto mb-3" />
                    )}
                    <div className={`text-2xl font-bold mb-1 ${results.cumulativeROI >= 0 ? 'text-success' : 'text-warning'}`}>
                      {results.cumulativeROI}%
                    </div>
                    <p className="text-sm text-muted-foreground">{timeframeYears}-Year ROI</p>
                  </CardContent>
                </Card>

                {/* Break-Even Point */}
                <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary mb-1">
                      {results.breakEvenMonth > 0 ? `${results.breakEvenMonth}` : 'N/A'}
                    </div>
                    <p className="text-sm text-muted-foreground">Break-Even (Months)</p>
                  </CardContent>
                </Card>

                {/* Net Cumulative Savings */}
                <Card className={`shadow-soft hover:shadow-medium transition-all duration-300 ${results.netCumulativeSavings >= 0 ? '' : 'border-warning'}`}>
                  <CardContent className="p-6 text-center">
                    <Target className="w-8 h-8 text-success mx-auto mb-3" />
                    <div className={`text-2xl font-bold mb-1 ${results.netCumulativeSavings >= 0 ? 'text-success' : 'text-warning'}`}>
                      ${results.netCumulativeSavings.toLocaleString()}
                    </div>
                    <p className="text-sm text-muted-foreground">Net {timeframeYears}-Year Savings</p>
                  </CardContent>
                </Card>
              </div>

              {/* Yearly Breakdown Table */}
              {results.yearlyBreakdown.length > 0 && (
                <Card className="mt-6 shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Users className="w-5 h-5 text-primary" />
                      Year-by-Year Breakdown
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">Year</th>
                            <th className="text-right py-2">Labor Savings</th>
                            <th className="text-right py-2">Automation Cost</th>
                            <th className="text-right py-2">Additional Value</th>
                            <th className="text-right py-2">Net Savings</th>
                            <th className="text-right py-2">Cumulative</th>
                          </tr>
                        </thead>
                        <tbody>
                          {results.yearlyBreakdown.map((year) => (
                            <tr key={year.year} className="border-b">
                              <td className="py-2 font-medium">Year {year.year}</td>
                              <td className="text-right py-2 text-success">${year.laborSavings.toLocaleString()}</td>
                              <td className="text-right py-2 text-primary">${year.automationCost.toLocaleString()}</td>
                              <td className="text-right py-2 text-secondary">${year.additionalValue.toLocaleString()}</td>
                              <td className={`text-right py-2 font-medium ${year.netSavings >= 0 ? 'text-success' : 'text-warning'}`}>
                                ${year.netSavings.toLocaleString()}
                              </td>
                              <td className={`text-right py-2 font-bold ${year.cumulativeNet >= 0 ? 'text-success' : 'text-warning'}`}>
                                ${year.cumulativeNet.toLocaleString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              )}

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

              {/* Enhanced Assumptions */}
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-2 text-sm">Calculation Methodology:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-xs mb-1 text-primary">Time Savings ({scenario} scenario)</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Small: {Math.round(({ small: 0.35, medium: 0.45, large: 0.55 }[businessSize] || 0.35) * ({ conservative: 0.8, realistic: 1.0, optimistic: 1.2 }[scenario] || 1.0) * 100)}% efficiency improvement</li>
                      <li>• Growth rate: {growthRate}% annually</li>
                      <li>• {timeframeYears}-year projection timeframe</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-xs mb-1 text-primary">Additional Benefits</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Error reduction: {includeErrorReduction ? '70% reduction' : 'Not included'}</li>
                      <li>• Strategic work: {includeOpportunityCost ? '60% of saved time' : 'Not included'}</li>
                      <li>• Scalability: {includeScalability ? '15% compound improvement' : 'Not included'}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;