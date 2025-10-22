import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PACKAGES } from "@/data/packages";
import { DollarSign, TrendingUp } from "lucide-react";

export const AnnualSavingsCalculator = () => {
  const [selectedPackage, setSelectedPackage] = useState(PACKAGES[1].id); // Default to Growth Accelerator
  const pkg = PACKAGES.find(p => p.id === selectedPackage) || PACKAGES[0];

  const monthlyTotal = pkg.monthlyPrice * 12;
  const annualTotal = pkg.monthlyPrice * 10; // Pay for 10 months, get 12
  const savings = pkg.commitmentTerms.annualPrepayDiscount.totalSavings;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Annual Prepay Savings Calculator</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          See how much you can save by paying annually. Get 2 months free and 17% savings.
        </p>
      </div>

      {/* Package Selection */}
      <div className="flex flex-wrap justify-center gap-3">
        {PACKAGES.map((p) => (
          <Button
            key={p.id}
            variant={selectedPackage === p.id ? "default" : "outline"}
            onClick={() => setSelectedPackage(p.id)}
            className="relative"
          >
            {p.popular && selectedPackage === p.id && (
              <Badge className="absolute -top-2 -right-2 text-xs">Popular</Badge>
            )}
            {p.tier}
          </Button>
        ))}
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Monthly Billing */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Monthly Billing</h3>
              <p className="text-sm text-muted-foreground">Pay as you go</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Monthly Payment</p>
              <p className="text-3xl font-bold">
                ${pkg.monthlyPrice.toLocaleString()}
                <span className="text-sm text-muted-foreground font-normal">/month</span>
              </p>
            </div>

            <div className="border-t pt-4">
              <p className="text-sm text-muted-foreground mb-1">Total Annual Cost</p>
              <p className="text-2xl font-bold">
                ${monthlyTotal.toLocaleString()}
                <span className="text-sm text-muted-foreground font-normal">/year</span>
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                = ${pkg.monthlyPrice.toLocaleString()} × 12 months
              </p>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Flexibility:</span>
                <span className="font-medium">Month-to-month after commitment</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Commitment:</span>
                <span className="font-medium">{pkg.commitmentTerms.minimumMonths} months minimum</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Annual Prepay */}
        <Card className="p-6 border-2 border-success bg-gradient-to-br from-success/5 to-primary/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-success/20 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-success" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Annual Prepay</h3>
              <p className="text-sm text-muted-foreground">Best value</p>
            </div>
          </div>

          <Badge className="mb-4 bg-success">Save 17% - Get 2 Months Free!</Badge>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Pay Once for Full Year</p>
              <p className="text-3xl font-bold text-success">
                ${annualTotal.toLocaleString()}
                <span className="text-sm text-muted-foreground font-normal">/year</span>
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                = ${pkg.monthlyPrice.toLocaleString()} × 10 months (get 12 months)
              </p>
            </div>

            <div className="border-t border-success/20 pt-4">
              <p className="text-sm text-muted-foreground mb-1">Your Savings</p>
              <p className="text-4xl font-bold text-success">
                ${savings.toLocaleString()}
              </p>
              <p className="text-sm text-success mt-1">
                That's {pkg.commitmentTerms.annualPrepayDiscount.percentSavings}% off!
              </p>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Term:</span>
                <span className="font-medium">12 months prepaid</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Renewal:</span>
                <span className="font-medium">Annual or switch to monthly</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Savings Breakdown */}
      <Card className="p-6 bg-muted/30">
        <h3 className="font-bold text-lg mb-4 text-center">Why Annual Prepay Makes Sense</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-2">
              ${savings.toLocaleString()}
            </div>
            <p className="text-sm text-muted-foreground">
              Total Savings in Year 1
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-2">
              2
            </div>
            <p className="text-sm text-muted-foreground">
              Months of Service Free
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-2">
              17%
            </div>
            <p className="text-sm text-muted-foreground">
              Discount vs Monthly Billing
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Annual prepay locks in your rate for the full year and maximizes your ROI. 
            You can always switch back to monthly billing at renewal.
          </p>
        </div>
      </Card>
    </div>
  );
};
