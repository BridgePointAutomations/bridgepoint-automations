import { motion } from "framer-motion";
import { Search, Lightbulb, Code, Rocket, BarChart } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We learn about your business, your goals, and what's currently slowing you down.",
    color: "text-primary",
    bgColor: "bg-primary/5",
    borderColor: "border-primary/10",
    shadow: "shadow-primary/10"
  },
  {
    icon: Lightbulb,
    title: "Plan",
    description: "We design the perfect website or automation system tailored specifically for your needs.",
    color: "text-primary",
    bgColor: "bg-primary/5",
    borderColor: "border-primary/10",
    shadow: "shadow-primary/10"
  },
  {
    icon: Code,
    title: "Build",
    description: "Our team builds your solution, sets up your integrations, and ensures everything works perfectly.",
    color: "text-primary",
    bgColor: "bg-primary/5",
    borderColor: "border-primary/10",
    shadow: "shadow-primary/10"
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "We go live! We handle the technical details and make sure your team knows how to use it.",
    color: "text-primary",
    bgColor: "bg-primary/5",
    borderColor: "border-primary/10",
    shadow: "shadow-primary/10"
  },
  {
    icon: BarChart,
    title: "Support",
    description: "We're always here to help with updates, changes, or new ideas as your business grows.",
    color: "text-primary",
    bgColor: "bg-primary/5",
    borderColor: "border-primary/10",
    shadow: "shadow-primary/10"
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="relative py-24 overflow-hidden bg-white">
      {/* Background Elements - Subtle for light theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight"
          >
            Our Simple Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 font-medium"
          >
            We make technology easy so you can focus on running your business.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 group"
              >
                <div className="h-full">
                  {/* Liquid Card */}
                  <div className="h-full p-6 liquid-card flex flex-col items-center">
                    {/* Icon Container */}
                    <div className={`
                      w-16 h-16 rounded-2xl mb-6 
                      flex items-center justify-center
                      bg-white shadow-md shadow-primary/10
                      border border-white/80
                      transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-3
                    `}>
                      <step.icon className={`w-8 h-8 ${step.color}`} aria-hidden="true" />
                    </div>

                    <h3 className="text-xl font-bold text-center mb-3 text-slate-900 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-center text-slate-600 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
