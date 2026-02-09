import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap, Cpu } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onOpenBooking?: () => void;
}

const HeroSection = ({ onOpenBooking }: HeroSectionProps) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-primary/10 blur-[100px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/50 border border-slate-200 backdrop-blur-md mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-slate-600">
              Now Offering Custom Websites
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight"
          >
            <span className="block text-slate-900 mb-2 tracking-tight">Transform Your Business with</span>
            <span className="text-gradient">
              Smart Technology
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            We build modern websites and automation systems that save you time, reduce costs, and help you grow.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-14 px-8 rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 btn-shine"
              onClick={() => onOpenBooking ? onOpenBooking() : (window.location.href = '/booking')}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto h-14 px-8 rounded-lg border-slate-200 bg-white/50 backdrop-blur-sm hover:bg-slate-50 text-slate-900 transition-all duration-300"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Services
            </Button>
          </motion.div>

          {/* Stats / Proof */}
          <motion.div
            initial={{ opacity: 0, mt: 20 }}
            animate={{ opacity: 1, mt: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-100 pt-8"
          >
            {[
              { label: "Efficiency Boost", value: "300%", icon: Zap },
              { label: "Active Clients", value: "50+", icon: Bot },
              { label: "Hours Saved", value: "10k+", icon: Cpu },
              { label: "Growth Avg", value: "10x", icon: ArrowRight },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-2 text-primary group-hover:text-primary/80 transition-colors duration-300">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1 font-mono">{stat.value}</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-mono">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;