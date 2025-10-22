import { Check, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const AlwaysIncludedFeatures = () => {
  const alwaysIncluded = [
    "Bug fixes and error resolution",
    "Platform API updates",
    "Security patches",
    "Performance optimization",
    "System health monitoring",
    "Monthly reporting",
    "Email support within stated SLA",
  ];

  return (
    <Card className="p-8 bg-gradient-to-br from-success/5 to-primary/5 border-success/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-12 w-12 rounded-full bg-success/10 flex items-center justify-center">
          <Shield className="h-6 w-6 text-success" />
        </div>
        <div>
          <Badge className="mb-2 bg-success">Always Free</Badge>
          <h3 className="text-2xl font-bold">Included in Every Tier</h3>
          <p className="text-muted-foreground">No extra charges, ever</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        {alwaysIncluded.map((feature, index) => (
          <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
            <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
            <span className="text-sm font-medium">{feature}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-background/70 rounded-lg border border-success/20">
        <p className="text-sm text-muted-foreground text-center">
          <strong className="text-foreground">Our Promise:</strong> These critical services are always included at no additional cost. 
          Your automation stays secure, updated, and running smoothly.
        </p>
      </div>
    </Card>
  );
};
