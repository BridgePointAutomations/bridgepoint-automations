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
      title: "ROI-Focused",
      description: "Every automation we build is designed with measurable ROI in mind. We guarantee positive returns within 6 months or we work for free."
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

        {/* Our Story Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="shadow-soft">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">Our Story</h3>
              <div className="prose prose-lg mx-auto text-muted-foreground space-y-4">
                <p className="text-lg leading-relaxed">
                  Like many entrepreneurs, our journey started with a simple dream: 
                  to build something from the ground up and watch it grow. Back in college, 
                  that dream took shape as a small mobile detailing business. I was the first to bring the idea to my hometown, 
                  and with a little grit (and a lot of Facebook group posting), it grew faster than I could have imagined.
                </p>
                <p className="leading-relaxed">
                  But growth came with a hidden challenge. Every day ended with hours of late night paperwork.
                  Invoicing, emails, accounting, the endless "behind-the-scenes" work that stole time from what I really enjoyed: serving customers and growing.
                  Over four years, I learned a lesson that stuck with me: running a business isn't just about grit and grind and passion, it's about systems. 
                  Without the right tools, even the most promising ventures get weighed down by busywork.
                </p>
                <p className="leading-relaxed">
                  Later, my corporate career opened my eyes to the solution I wish I had known back then: automation. 
                  Smarter systems that quietly handle the repetitive, time consuming tasks. That's when we discovered the power of modern no-code platforms like Zapier, Airtable, and Make. 
                  These tools could deliver the same enterprise automation capabilities at a fraction of the cost 
                  and complexity.
                </p>
                <p className="leading-relaxed">
                 That's why this company exists today. We're here to help small businesses reclaim their time, simplify operations, and unlock growth.
                  We founded BridgePoint Automations to bridge the gap between powerful automation 
                  technology and Pittsburgh's hardworking small business community.
                </p>
              </div>
            </CardContent>
          </Card>
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