import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Owner",
      business: "Pittsburgh Auto Service",
      content: "BridgePoint transformed our customer follow-up process. We went from manually calling customers about maintenance to having everything automated. We're saving 15 hours a week and our customers love the professional touch.",
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
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="text-accent border-accent/20 backdrop-blur-sm">
            <MessageSquare className="w-3 h-3 mr-1" />
            Success Metrics
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold">
            Validated by <span className="text-gradient">Local Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deployment results from businesses operating on BridgePoint infrastructure.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative h-full bg-white/60 backdrop-blur-xl border border-white/60 shadow-lg rounded-2xl hover:shadow-xl hover:border-primary/30 transition-all duration-300 group overflow-hidden">
                {/* Holographic Shim */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <CardContent className="p-8 flex flex-col h-full relative z-10">
                  <div className="flex items-center mb-6 justify-between">
                    <Quote className="w-8 h-8 text-primary/20 group-hover:text-primary/50 transition-colors" />
                    <div className="flex space-x-1 bg-slate-100 px-2 py-1 rounded-full">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current text-accent" />
                      ))}
                    </div>
                  </div>

                  <p className="text-slate-600 mb-8 italic flex-grow leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <div className="pt-6 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-slate-900 group-hover:text-primary transition-colors">{testimonial.name}</div>
                        <div className="text-xs text-slate-500 font-mono mt-1">
                          {testimonial.role} @ {testimonial.business}
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-none shadow-none font-mono text-xs">
                        {testimonial.savings}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Aggregate Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-8 md:gap-16 p-8 bg-white/50 rounded-3xl border border-slate-200 backdrop-blur-md shadow-sm">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 font-mono mb-1">60+</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest">Hours Saved Weekly</div>
            </div>
            <div className="w-px h-12 bg-slate-200 hidden md:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 font-mono mb-1">$125K+</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest">Annual Savings</div>
            </div>
            <div className="w-px h-12 bg-slate-200 hidden md:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 font-mono mb-1">100%</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest">System Uptime</div>
            </div>
          </div>
          <p className="text-[10px] text-gray-600 justify-center mt-6 max-w-xl mx-auto font-mono">
            * Metrics derived from active client deployment data. Individual performance may vary based on integration complexity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;