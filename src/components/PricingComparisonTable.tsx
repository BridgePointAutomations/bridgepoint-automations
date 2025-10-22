import { Check, X, ChevronDown, ChevronUp } from "lucide-react";
import { PACKAGES } from "@/data/packages";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const PricingComparisonTable = () => {
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    setup: true,
    workflow: true,
    ai: true,
    capacity: true,
    support: true,
    commitment: true,
    results: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

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
              <td className="p-4 font-semibold sticky left-0 bg-muted/30 z-10 cursor-pointer hover:bg-muted/50" colSpan={4} onClick={() => toggleSection('setup')}>
                <div className="flex items-center justify-between">
                  <span>Setup & Onboarding</span>
                  {expandedSections.setup ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </div>
              </td>
            </tr>
            {expandedSections.setup && (
              <>
                <tr className="border-b border-border">
                  <td className="p-4 sticky left-0 bg-background z-10">Automation Audit</td>
                  {PACKAGES.map((pkg) => (
                    <td key={pkg.id} className="p-4 text-center">
                      <Check className="h-5 w-5 text-success mx-auto" />
                    </td>
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
              </>
            )}

            {/* Workflow & Infrastructure */}
            <tr className="bg-muted/30">
              <td className="p-4 font-semibold sticky left-0 bg-muted/30 z-10 cursor-pointer hover:bg-muted/50" colSpan={4} onClick={() => toggleSection('workflow')}>
                <div className="flex items-center justify-between">
                  <span>Workflow & Infrastructure</span>
                  {expandedSections.workflow ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </div>
              </td>
            </tr>
            {expandedSections.workflow && (
              <>
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
                  <td className="p-4 sticky left-0 bg-background z-10">Platform Integrations</td>
                  {PACKAGES.map((pkg) => (
                    <td key={pkg.id} className="p-4 text-center font-semibold">
                      {pkg.workflowInfrastructure.platformIntegrations}
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
              </>
            )}
            
            {/* AI Capabilities Section */}
            <tr className="bg-muted/30">
              <td colSpan={4} className="p-4 font-semibold sticky left-0 bg-muted/30 z-10 cursor-pointer hover:bg-muted/50" onClick={() => toggleSection('ai')}>
                <div className="flex items-center justify-between">
                  <span>AI-Powered Features</span>
                  {expandedSections.ai ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </div>
              </td>
            </tr>
            {expandedSections.ai && (
              <>
                <tr className="border-b border-border">
                  <td className="p-4 sticky left-0 bg-background z-10">AI Capabilities</td>
                  {PACKAGES.map((pkg) => (
                    <td key={pkg.id} className="p-4 text-center text-sm">
                      {pkg.aiCapabilities.description}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 sticky left-0 bg-background z-10">AI Chatbots</td>
                  {PACKAGES.map((pkg) => (
                    <td key={pkg.id} className="p-4 text-center">
                      {pkg.aiCapabilities.chatbots ? (
                        <Check className="h-5 w-5 text-success mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground/30 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 sticky left-0 bg-background z-10">Document Processing</td>
                  {PACKAGES.map((pkg) => (
                    <td key={pkg.id} className="p-4 text-center">
                      {pkg.aiCapabilities.documentProcessing ? (
                        <Check className="h-5 w-5 text-success mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground/30 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 sticky left-0 bg-background z-10">Custom LLM Workflows</td>
                  {PACKAGES.map((pkg) => (
                    <td key={pkg.id} className="p-4 text-center">
                      {pkg.aiCapabilities.customLLM ? (
                        <Check className="h-5 w-5 text-success mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground/30 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 sticky left-0 bg-background z-10">AI Content Creation</td>
                  {PACKAGES.map((pkg) => (
                    <td key={pkg.id} className="p-4 text-center text-sm">
                      {pkg.contentCreation.included ? (
                        <div>
                          <Check className="h-5 w-5 text-success mx-auto mb-1" />
                          <div className="text-xs text-muted-foreground">{pkg.contentCreation.type}</div>
                        </div>
                      ) : (
                        <span className="text-xs text-muted-foreground">Add-on available</span>
                      )}
                    </td>
                  ))}
                </tr>
              </>
            )}

            {/* Capacity */}
            <tr className="bg-muted/30">
              <td className="p-4 font-semibold sticky left-0 bg-muted/30 z-10 cursor-pointer hover:bg-muted/50" colSpan={4} onClick={() => toggleSection('capacity')}>
                <div className="flex items-center justify-between">
                  <span>Capacity</span>
                  {expandedSections.capacity ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </div>
              </td>
            </tr>
            {expandedSections.capacity && (
              <tr className="border-b border-border">
                <td className="p-4 sticky left-0 bg-background z-10">Monthly Task Executions</td>
                {PACKAGES.map((pkg) => (
                  <td key={pkg.id} className="p-4 text-center font-semibold">{pkg.capacity.monthlyTasks}</td>
                ))}
              </tr>
            )}

            {/* Support & Maintenance */}
            <tr className="bg-muted/30">
              <td className="p-4 font-semibold sticky left-0 bg-muted/30 z-10 cursor-pointer hover:bg-muted/50" colSpan={4} onClick={() => toggleSection('support')}>
                <div className="flex items-center justify-between">
                  <span>Support & Maintenance</span>
                  {expandedSections.support ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </div>
              </td>
            </tr>
            {expandedSections.support && (
              <>
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
                    <td key={pkg.id} className="p-4 text-center">{pkg.supportMaintenance.strategySessions}</td>
                  ))}
                </tr>
              </>
            )}

            {/* Commitment Terms */}
            <tr className="bg-muted/30">
              <td className="p-4 font-semibold sticky left-0 bg-muted/30 z-10 cursor-pointer hover:bg-muted/50" colSpan={4} onClick={() => toggleSection('commitment')}>
                <div className="flex items-center justify-between">
                  <span>Commitment Terms</span>
                  {expandedSections.commitment ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </div>
              </td>
            </tr>
            {expandedSections.commitment && (
              <>
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
              </>
            )}

            {/* Expected Results */}
            <tr className="bg-muted/30">
              <td className="p-4 font-semibold sticky left-0 bg-muted/30 z-10 cursor-pointer hover:bg-muted/50" colSpan={4} onClick={() => toggleSection('results')}>
                <div className="flex items-center justify-between">
                  <span>Expected Results</span>
                  {expandedSections.results ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </div>
              </td>
            </tr>
            {expandedSections.results && (
              <>
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
              </>
            )}
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
                  <li>• Automation audit included</li>
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
                  <li>• {pkg.supportMaintenance.strategySessions} strategy sessions</li>
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
