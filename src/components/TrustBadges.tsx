import { Shield, Award, Clock, TrendingUp } from "lucide-react";

export const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "ROI-Focused Implementation",
      description: "Performance tracking & optimization included",
    },
    {
      icon: Award,
      title: "Certified Automation Expert",
      description: "Enterprise automation certified",
    },
    {
      icon: Clock,
      title: "24-Hour Response Time",
      description: "Support when you need it",
    },
    {
      icon: TrendingUp,
      title: "20-30% Improved Margins",
      description: "Proven results for clients",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-4 rounded-lg border bg-card hover:shadow-medium transition-shadow"
        >
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
            <badge.icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold text-sm mb-1">{badge.title}</h3>
          <p className="text-xs text-muted-foreground">{badge.description}</p>
        </div>
      ))}
    </div>
  );
};
