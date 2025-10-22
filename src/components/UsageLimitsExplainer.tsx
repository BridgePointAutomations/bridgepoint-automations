import { AlertTriangle, TrendingUp, Plus, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const UsageLimitsExplainer = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Transparent Usage Limits</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We monitor your usage and alert you proactively. No surprise overage bills.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Task Overages */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <AlertTriangle className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-bold text-xl">Task Limits & Alerts</h3>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Current Usage Example</span>
                <span className="text-sm text-muted-foreground">8,000 / 10,000</span>
              </div>
              <Progress value={80} className="h-2" />
              <Badge variant="outline" className="mt-2 bg-warning/10 text-warning border-warning">
                80% Alert Triggered
              </Badge>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Check className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  We alert you at <strong className="text-foreground">80%</strong> and <strong className="text-foreground">95%</strong> of your limit
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  Overage charges only apply if you exceed limits
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  We help optimize to stay within your tier
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  Upgrade tiers anytime (prorated billing)
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Modification Hours */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-bold text-xl">Modification Hours</h3>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-sm font-semibold mb-2">Hours Roll Over</p>
              <p className="text-xs text-muted-foreground mb-3">
                Unused modification hours carry forward for 2-3 months (depending on tier)
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Current Month: 5 hours</span>
                  <span className="text-success">Available</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Rolled Over: 2 hours</span>
                  <span className="text-success">Available</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-semibold text-sm">
                  <span>Total Available:</span>
                  <span>7 hours</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Check className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  Additional hours billed at published rates
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  We always get approval before extra work
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  Transparent time tracking and reporting
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Platform Additions */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Plus className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-bold text-xl">Platform Additions</h3>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Need to add another automation platform to your workflow? We make it simple.
            </p>

            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-sm font-semibold mb-2">Typical Platform Addition</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Setup Fee:</span>
                  <span className="font-semibold">$100-200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Added to Monthly:</span>
                  <span className="font-semibold">Varies by platform</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Check className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  Custom quote for each platform
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  Full integration and testing included
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  Training on new platform provided
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* What Happens at Limits */}
        <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
          <h3 className="font-bold text-xl mb-4">Our Proactive Approach</h3>
          
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-sm">We Monitor</p>
                <p className="text-xs text-muted-foreground">
                  Continuous tracking of your usage across all metrics
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-sm">You're Alerted Early</p>
                <p className="text-xs text-muted-foreground">
                  Email and dashboard alerts at 80% and 95% thresholds
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-sm">We Optimize Together</p>
                <p className="text-xs text-muted-foreground">
                  Review workflows to improve efficiency and stay within limits
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-sm">Flexible Options</p>
                <p className="text-xs text-muted-foreground">
                  Upgrade tier with prorated billing or adjust usage - your choice
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
