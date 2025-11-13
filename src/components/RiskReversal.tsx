import { Shield, TrendingUp, Clock, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const RiskReversal = () => {
  const guarantees = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "30-Day Money-Back Guarantee",
      description: "Not satisfied? Full refund, no questions asked"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "ROI Guarantee",
      description: "Save time or get your money back"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Cancel Anytime",
      description: "No long-term contracts or commitments"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Free Support",
      description: "Unlimited support included in all packages"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
      {guarantees.map((guarantee, index) => (
        <Card key={index} className="border-2 border-secondary/20 hover-lift">
          <CardContent className="p-4 text-center">
            <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mx-auto mb-3">
              {guarantee.icon}
            </div>
            <h4 className="font-semibold text-sm mb-1">{guarantee.title}</h4>
            <p className="text-xs text-muted-foreground">{guarantee.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default RiskReversal;
