import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface WorkflowStep {
  title: string;
  description: string;
  automated?: boolean;
}

interface WorkflowVisualizationProps {
  title: string;
  steps: WorkflowStep[];
  timeSaved?: string;
}

export const WorkflowVisualization = ({ title, steps, timeSaved }: WorkflowVisualizationProps) => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        {timeSaved && (
          <Badge variant="secondary" className="text-sm">
            Saves {timeSaved}
          </Badge>
        )}
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className={`h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                step.automated 
                  ? (index % 3 === 0 ? 'bg-primary' : index % 3 === 1 ? 'bg-secondary' : 'bg-cyan') + ' text-white'
                  : 'bg-muted text-muted-foreground'
              }`}>
                {step.automated ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <span className="text-sm font-semibold">{index + 1}</span>
                )}
              </div>
              {index < steps.length - 1 && (
                <div className="w-0.5 h-12 bg-border my-1" />
              )}
            </div>

            <div className="flex-1 pt-1">
              <h4 className="font-medium mb-1 flex items-center gap-2">
                {step.title}
                {step.automated && (
                  <Badge variant="outline" className="text-xs">Auto</Badge>
                )}
              </h4>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>

            {index < steps.length - 1 && (
              <ArrowRight className="h-5 w-5 text-muted-foreground mt-2 hidden md:block" />
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};
