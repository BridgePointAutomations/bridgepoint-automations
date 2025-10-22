import { Calendar, DollarSign, Clock, Gift } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PACKAGES } from "@/data/packages";
import { Badge } from "@/components/ui/badge";

export const SubscriptionTerms = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Flexible Subscription Terms</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Clear commitment terms with no surprises. Month-to-month flexibility after your initial term.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {PACKAGES.map((pkg) => (
          <Card key={pkg.id} className={`p-6 ${pkg.popular ? 'border-primary border-2' : ''}`}>
            {pkg.popular && (
              <Badge className="mb-3 bg-primary">Most Popular</Badge>
            )}
            <div className="flex items-center gap-3 mb-4">
              <pkg.icon className="h-8 w-8 text-primary" />
              <h3 className="font-bold text-xl">{pkg.tier}</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Minimum Commitment</p>
                  <p className="text-sm text-muted-foreground">
                    {pkg.commitmentTerms.minimumMonths} months
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Cancellation Notice</p>
                  <p className="text-sm text-muted-foreground">
                    {pkg.commitmentTerms.cancellationNoticeDays} days required
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <DollarSign className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">After Initial Term</p>
                  <p className="text-sm text-muted-foreground">
                    {pkg.commitmentTerms.postCommitmentTerms}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-start gap-3">
                  <Gift className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-success">Annual Prepay Discount</p>
                    <p className="text-sm text-muted-foreground">
                      Get {pkg.commitmentTerms.annualPrepayDiscount.monthsFree} months free
                    </p>
                    <p className="text-lg font-bold text-success mt-1">
                      Save ${pkg.commitmentTerms.annualPrepayDiscount.totalSavings.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      ({pkg.commitmentTerms.annualPrepayDiscount.percentSavings}% savings)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 bg-muted/30">
        <h3 className="font-bold text-lg mb-4">What This Means for You</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold mb-2">✅ Predictable Costs</p>
            <p className="text-muted-foreground">
              Fixed monthly pricing with no hidden fees or surprise charges
            </p>
          </div>
          <div>
            <p className="font-semibold mb-2">✅ Flexibility After Commitment</p>
            <p className="text-muted-foreground">
              Month-to-month billing after your initial term for maximum flexibility
            </p>
          </div>
          <div>
            <p className="font-semibold mb-2">✅ Easy Upgrades</p>
            <p className="text-muted-foreground">
              Upgrade anytime with prorated billing - never lose what you've paid
            </p>
          </div>
          <div>
            <p className="font-semibold mb-2">✅ Smart Annual Option</p>
            <p className="text-muted-foreground">
              Save thousands with annual prepay - up to 17% off monthly pricing
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
