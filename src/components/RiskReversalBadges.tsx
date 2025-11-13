import { Shield, RotateCcw, DollarSign } from "lucide-react";

const RiskReversalBadges = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
      <div className="flex items-center gap-3 p-4 rounded-lg bg-accent/50 border border-border">
        <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
          <Shield className="w-5 h-5 text-success" />
        </div>
        <div>
          <div className="font-semibold text-sm">30-Day Guarantee</div>
          <div className="text-xs text-muted-foreground">Money back if not satisfied</div>
        </div>
      </div>
      
      <div className="flex items-center gap-3 p-4 rounded-lg bg-accent/50 border border-border">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <DollarSign className="w-5 h-5 text-primary" />
        </div>
        <div>
          <div className="font-semibold text-sm">$0 Setup Fee</div>
          <div className="text-xs text-muted-foreground">Start without upfront costs</div>
        </div>
      </div>
      
      <div className="flex items-center gap-3 p-4 rounded-lg bg-accent/50 border border-border">
        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
          <RotateCcw className="w-5 h-5 text-secondary" />
        </div>
        <div>
          <div className="font-semibold text-sm">Cancel Anytime</div>
          <div className="text-xs text-muted-foreground">No long-term contracts</div>
        </div>
      </div>
    </div>
  );
};

export default RiskReversalBadges;
