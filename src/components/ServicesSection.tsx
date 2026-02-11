import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Monitor, Zap, Bot } from "lucide-react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    icon: Monitor,
    title: "Website Development",
    description: "Modern, professional websites that look great on any device and turn visitors into customers.",
    benefits: [
      "Custom, mobile-friendly design",
      "Fast loading speeds",
      "SEO optimized for Google",
      "Easy for you to update"
    ],
    cta: "Start Your Website",
    popular: true,
    color: "primary"
  },
  {
    icon: Zap,
    title: "Business Automation",
    description: "Stop doing repetitive tasks manually. We connect your apps to do the busy work for you.",
    benefits: [
      "Connect your existing software",
      "Automate data entry",
      "Streamline customer follow-ups",
      "Save 10-20 hours every week"
    ],
    cta: "Automate Your Work",
    popular: false,
    color: "secondary"
  },
  {
    icon: Bot,
    title: "AI Solutions",
    description: "Smart tools and chatbots that can answer customer questions and help you write content instantly.",
    benefits: [
      "24/7 AI Customer Support Chatbots",
      "Content creation assistants",
      "Smart data analysis",
      "Personalized for your business"
    ],
    cta: "Explore AI Tools",
    popular: false,
    color: "accent"
  }
];

interface ServicesSectionProps {
  onOpenBooking?: () => void;
}

const ServicesSection = ({ onOpenBooking }: ServicesSectionProps) => {
  return (
    <section id="services" className="py-20 relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="text-primary border-primary/20 backdrop-blur-sm">
            <Zap className="w-3 h-3 mr-1" />
            Our Services
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900">
            Everything You Need to <span className="text-gradient">Grow Online</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Simple, effective technology solutions designed specifically for small businesses.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className={`
                  relative h-full border-slate-200 bg-white/50 backdrop-blur-sm 
                  hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 
                  transition-all duration-300 group flex flex-col
                  ${service.popular ? "ring-2 ring-primary ring-offset-2" : ""}
                `}>
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-white font-bold shadow-md hover:bg-primary">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-2 pt-8">
                    <div className={`
                      w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 
                      transition-transform duration-300 group-hover:scale-110 shadow-sm
                      bg-primary/5
                      text-primary
                    `}>
                      <IconComponent className="w-8 h-8" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900 mb-3">
                      {service.title}
                    </CardTitle>
                    <p className="text-slate-600 leading-relaxed min-h-[50px]">
                      {service.description}
                    </p>
                  </CardHeader>

                  <CardContent className="flex flex-col flex-grow mt-4">
                    <div className="space-y-4 mb-8 flex-grow">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700 text-sm font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant={service.popular ? "default" : "outline"}
                      className={`w-full text-base py-6 font-bold shadow-sm ${service.popular
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "border-slate-200 text-slate-700 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                        }`}
                      size="lg"
                      onClick={() => onOpenBooking ? onOpenBooking() : (window.location.href = "/booking")}
                    >
                      {service.cta}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
