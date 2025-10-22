import { Shield, Bell, CheckCircle, TrendingUp, DollarSign, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";

export const TransparencyPromise = () => {
  const promises = [
    {
      icon: DollarSign,
      title: "$0 Setup Fee Promise",
      description: "No upfront costs. Start with just your monthly subscription. No hidden setup charges or surprise fees.",
    },
    {
      icon: Shield,
      title: "No Hidden Fees",
      description: "What you see is what you pay. Your monthly subscription includes everything in your tier, plus all 'Always Free' services.",
    },
    {
      icon: Bell,
      title: "We Alert You First",
      description: "Proactive notifications at 80% and 95% of your limits. We help you optimize before you ever hit a threshold.",
    },
    {
      icon: CheckCircle,
      title: "Approval Required for Extra Work",
      description: "We never bill for additional hours without your explicit approval. Transparent time tracking and clear communication.",
    },
    {
      icon: TrendingUp,
      title: "Prorated Upgrades Anytime",
      description: "Need to scale up? Upgrade to a higher tier anytime with prorated billing. You never lose what you've already paid.",
    },
    {
      icon: Lock,
      title: "Lock in Your Rate",
      description: "Your subscription rate is locked for your contract term. Annual prepay locks it in for a full year with 17% savings.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
          <Shield className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Our Transparency Promise</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          No surprises. No hidden fees. No unexpected charges. Just honest, straightforward pricing 
          and communication every step of the way.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {promises.map((promise, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <promise.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{promise.title}</h3>
                <p className="text-sm text-muted-foreground">{promise.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Built on Trust</h3>
          <p className="text-muted-foreground mb-6">
            We've built our business on transparent relationships with our clients. You'll always know 
            exactly what you're paying for, what's included, and what options you have. Our success 
            comes from your success, and that starts with complete honesty about pricing, capabilities, 
            and commitments.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              <span className="font-medium">No Long-Term Lock-in</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              <span className="font-medium">Cancel with Notice</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              <span className="font-medium">Flexible Upgrades</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              <span className="font-medium">Always Free Services</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
