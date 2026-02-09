import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Heart } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Local Partnership",
      description: "We're Pittsburgh natives who understand the unique challenges of local small businesses. Our team is invested in your community's success."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results-Driven",
      description: "Every automation is designed with measurable outcomes and continuous optimization to ensure lasting value for your business."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Proven Expertise",
      description: "With certifications across all major no-code platforms and years of experience, we deliver enterprise-grade solutions at small business prices."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Personal Touch",
      description: "Unlike large agencies, we provide personal, ongoing support. You're not just a client number - you're a partner in our local business community."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="text-primary border-primary/20">
            <Heart className="w-3 h-3 mr-1" />
            About BridgePoint Automations
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold">
            Your Trusted <span className="text-gradient">Automation Partners</span>
          </h2>
        </div>

        {/* Company Description */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed">
            BridgePoint Automations is a Pittsburgh-based automation agency helping small businesses streamline their operations through AI-powered workflows, intelligent chatbots, and no-code integrations. We bridge the gap between complex technology and everyday business needs, delivering enterprise-grade automation solutions at accessible prices. Our mission is to give local businesses the tools to save time, cut costs, and scale — without the overhead of a full IT department.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="hover-lift shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    {value.icon}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary text-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Ready to Transform Your Business?</h3>
            <p className="mb-6 opacity-90">
              Join dozens of businesses that have already automated their way to success. 
              Let's discuss how we can help you save time, reduce costs, and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
              >
                Schedule Consultation
              </a>
              <a 
                href="#services" 
                className="border border-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                View Our Packages
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;