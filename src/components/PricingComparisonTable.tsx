import { Check, X } from "lucide-react";
import { PACKAGES } from "@/data/packages";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const PricingComparisonTable = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* Desktop View */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-border">
              <th className="p-4 text-left font-semibold sticky left-0 bg-background z-10">Features</th>
              {PACKAGES.map((pkg) => (
                <th key={pkg.id} className="p-4 text-center relative">
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                      Most Popular
                    </Badge>
                  )}
                  <div className="flex flex-col items-center gap-2 pt-2">
                    <pkg.icon className="h-8 w-8 text-primary" />
                    <h3 className="font-bold text-xl">{pkg.tier}</h3>
                    <div className="text-3xl font-bold text-primary">
                      ${pkg.monthlyPrice.toLocaleString()}
                      <span className="text-sm text-muted-foreground">/month</span>
                    </div>
                    <Badge variant="outline" className="bg-success/10 text-success border-success">
                      $0 Setup Fee
                    </Badge>
                    <p className="text-sm text-muted-foreground">{pkg.description}</p>
                    <Button 
                      className="mt-2"
                      variant={pkg.popular ? "default" : "outline"}
                      onClick={() => navigate("/booking")}
                    >
                      Get Started
                    </Button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Setup & Onboarding */}
            <tr className="bg-muted/30">
              <td className="p-4 font-semibold sticky left-0 bg-muted/30 z-10" colSpan={4}>
                Setup & Onboarding
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-4 sticky left-0 bg-background z-10">Automation Audit Hours</td>
              {PACKAGES.map((pkg) => (
                <td key={pkg.id} className="p-4 text-center">{pkg.setupOnboarding.auditHours} hours</td>
              ))}
            </tr>
            <tr className="border-b border-border">
              <td className="p-4 sticky left-0 bg-background z-10">Setup Included</td>
              {PACKAGES.map((pkg) => (
                <td key={pkg.id} className="p-4 text-center">
                  <Check className="h-5 w-5 text-success mx-auto" />
                </td>
              ))}
            </tr>

            {/* Workflow & Infrastructure */}
            <tr className="bg-muted/30">
              <td className="p-4 font-semibold sticky left-0 bg-muted/30 z-10" colSpan={4}>
                Workflow & Infrastructure
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-4 sticky left-0 bg-background z-10">Workflow Builds</td>
              {PACKAGES.map((pkg) => (
                <td key={pkg.id} className="p-4 text-center font-semibold">{pkg.workflowInfrastructure.workflowBuilds}</td>
              ))}
            </tr>
            <tr className="border-b border-border">
              <td className="p-4 sticky left-0 bg-background z-10">Airtable Bases</td>
              {PACKAGES.map((pkg) => (
                <td key={pkg.id} className="p-4 text-center">{pkg.workflowInfrastructure.airtableBases}</td>
              ))}
            </tr>
            <tr className="border-b border-border">
              <td className="p-4 sticky left-0 bg-background z-10">AI Integrations</td>
              {PACKAGES.map((pkg) => (
                <td key={pkg.id} className="p-4 text-center">
                  {pkg.workflowInfrastructure.aiIntegrations === 0 ? (
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  ) : (
                    pkg.workflowInfrastructure.aiIntegrations
                  )}
                </td>
              ))}
            </tr>
            <tr className="border-b border-border">
              <td className="p-4 sticky left-0 bg-background z-10">Platforms Supported</td>
              {PACKAGES.map((pkg) => (
                <td key={pkg.id} className="p-4 text-center text-sm">
                  {pkg.workflowInfrastructure.platformsSupported.slice(0, 2).join(", ")}
                  {pkg.workflowInfrastructure.platformsSupported.length > 2 && " +more"}
                </td>
              ))}
            </tr>

            {/* Capacity */}
            <tr className="bg-muted/30">
              <td className="p-4 font-semibold sticky left-0 bg-muted/30 z-10" colSpan={4}>
                Capacity
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-4 sticky left-0 bg-background z-10">Monthly Task Executions</td>
              {PACKAGES.map((pkg) => (
                <td key={pkg.id} className="p-4 text-center font-semibold">{pkg.capacity.monthlyTasks}</td>
              ))}
            </tr>

            {/* Support & Maintenance */}
            <tr className="bg-muted/30">
              <td className="p-4 font-semibold sticky left-0 bg-muted/30 z-10" colSpan={4}>
                Support & Maintenance
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-4 sticky left-0 bg-background z-10">Response Time</td>
              {PACKAGES.map((pkg) => (
                <td key={pkg.id} className="p-4 text-center">{pkg.supportMaintenance.responseTime}</td>
              ))}
            </tr>
            <tr className="border-b border-border">
              <td className="p-4 sticky left-0 bg-background z-10">Monthly Modification Hours</td>
              {PACKAGES.map((pkg) => (
                <td key={pkg.id} className="p-4 text-center">{pkg.supportMaintenance.modificationHours} hours</td>
              ))}
            </tr>
            <tr className="border-b border-border">
              <td className="p-4 sticky left-0 bg-background z-10">Strategy Sessions</td>
              {PACKAGES.map((pkg) => (
                <td key={pkg.id} className="p-4 text-center">{pkg.supportMaintenance.strategySessions}/month</td>
              ))}
            </tr>

            {/* Commitment Terms */}
            <tr className="bg-muted/30">
              <td className="p-4 font-semibold sticky left-0 bg-muted/30 z-10" colSpan={4}>
                Commitment Terms
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-4 sticky left-0 bg-background z-10">Minimum Commitment</td>
              {PACKAGES.map((pkg) => (
                <td key={pkg.id} className="p-4 text-center">{pkg.commitmentTerms.minimumMonths} months</td>
              ))}
            </tr>
            <tr className="border-b border-border">
              <td className="p-4 sticky left-0 bg-background z-10">Cancellation Notice</td>
              {PACKAGES.map((pkg) => (
                <td key={pkg.id} className="p-4 text-center">{pkg.commitmentTerms.cancellationNoticeDays} days</td>
              ))}
            </tr>
            <tr className="border-b border-border">
              <td className="p-4 sticky left-0 bg-background z-10">Annual Prepay Savings</td>
              {PACKAGES.map((pkg) => (
                <td key={pkg.id} className="p-4 text-center font-semibold text-success">
                  Save ${pkg.commitmentTerms.annualPrepayDiscount.totalSavings.toLocaleString()}
                </td>
              ))}
            </tr>

            {/* Expected Results */}
            <tr className="bg-muted/30">
              <td className="p-4 font-semibold sticky left-0 bg-muted/30 z-10" colSpan={4}>
                Expected Results
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-4 sticky left-0 bg-background z-10">Time Saved Weekly</td>
              {PACKAGES.map((pkg) => (
                <td key={pkg.id} className="p-4 text-center">{pkg.expectedResults.timeSaved}</td>
              ))}
            </tr>
            <tr className="border-b border-border">
              <td className="p-4 sticky left-0 bg-background z-10">Typical ROI</td>
              {PACKAGES.map((pkg) => (
                <td key={pkg.id} className="p-4 text-center">{pkg.expectedResults.roiMultiplier}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden space-y-6">
        {PACKAGES.map((pkg) => (
          <Card key={pkg.id} className={`p-6 relative ${pkg.popular ? 'border-primary border-2' : ''}`}>
            {pkg.popular && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                Most Popular
              </Badge>
            )}
            <div className="text-center mb-6">
              <pkg.icon className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-2xl mb-2">{pkg.tier}</h3>
              <div className="text-4xl font-bold text-primary mb-2">
                ${pkg.monthlyPrice.toLocaleString()}
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
              <Badge variant="outline" className="bg-success/10 text-success border-success mb-3">
                $0 Setup Fee
              </Badge>
              <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
              <Button 
                className="w-full"
                variant={pkg.popular ? "default" : "outline"}
                onClick={() => navigate("/booking")}
              >
                Get Started
              </Button>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Setup & Infrastructure</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• {pkg.setupOnboarding.auditHours} hour audit</li>
                  <li>• {pkg.workflowInfrastructure.workflowBuilds} workflow builds</li>
                  <li>• {pkg.workflowInfrastructure.airtableBases} Airtable bases</li>
                  <li>• {pkg.capacity.monthlyTasks} monthly tasks</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Support</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• {pkg.supportMaintenance.responseTime}</li>
                  <li>• {pkg.supportMaintenance.modificationHours} modification hours/month</li>
                  <li>• {pkg.supportMaintenance.strategySessions} strategy sessions/month</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Commitment</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• {pkg.commitmentTerms.minimumMonths} month minimum</li>
                  <li>• {pkg.commitmentTerms.cancellationNoticeDays} days notice to cancel</li>
                  <li>• Save ${pkg.commitmentTerms.annualPrepayDiscount.totalSavings.toLocaleString()} with annual prepay</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Expected Results</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• {pkg.expectedResults.timeSaved} saved</li>
                  <li>• {pkg.expectedResults.roiMultiplier}</li>
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
