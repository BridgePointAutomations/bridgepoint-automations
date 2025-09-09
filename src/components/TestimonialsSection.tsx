import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Owner",
      business: "Pittsburgh Auto Service",
      content: "BridgePoint transformed our customer follow-up process. We went from manually calling customers about maintenance to having everything automated through Airtable and Zapier. We're saving 15 hours a week and our customers love the professional touch.",
      rating: 5,
      savings: "15 hrs/week saved"
    },
    {
      name: "Mike Rodriguez",
      role: "General Manager", 
      business: "Rodriguez Plumbing",
      content: "The ROI was immediate. Our scheduling system now automatically books appointments, sends reminders, and follows up for reviews. What used to take my receptionist 2 hours daily is now completely automated.",
      rating: 5,
      savings: "10 hrs/week saved"
    },
    {
      name: "Jennifer Chen",
      role: "Practice Manager",
      business: "Pittsburgh Dental Group",
      content: "Their Enterprise Lite package revolutionized our patient management. From appointment scheduling to insurance verification to post-treatment follow-ups - everything flows seamlessly. Our staff can focus on patient care instead of paperwork.",
      rating: 5,
      savings: "25 hrs/week saved"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-primary border-primary/20 mb-4">
            <Star className="w-3 h-3 mr-1" />
            Client Success Stories
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            See What <span className="text-gradient">Local Businesses</span> Are Saying
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from local businesses who've transformed their operations with automation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative hover-lift shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-6 h-6 text-primary/30 mr-2" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-warning" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.business}
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {testimonial.savings}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-8 p-6 bg-accent rounded-2xl">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">60+</div>
              <div className="text-sm text-muted-foreground">Hours Saved Weekly</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">$125K+</div>
              <div className="text-sm text-muted-foreground">Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;