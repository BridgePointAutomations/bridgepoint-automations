import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Main navigation component
interface NavigationProps {
  onOpenBooking?: () => void;
}

const Navigation = ({ onOpenBooking }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "Home", href: "#hero" }, // Changed / to #hero for scrolling tracking
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% visible
    );

    // Observe specific sections
    document.querySelectorAll("section[id], footer[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex-shrink-0"
            >
              <a href="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold text-lg group-hover:shadow-glow-primary transition-all duration-300">
                  B
                </div>
                <span className="text-xl font-bold text-gradient group-hover:opacity-80 transition-all duration-300">
                  BridgePoint
                </span>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.replace("#", "") || (link.href === "#hero" && activeSection === "");

                const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                  e.preventDefault();
                  const element = document.querySelector(link.href);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                };

                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={handleScroll}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className={`
                      relative px-4 py-2 text-sm font-medium transition-colors group cursor-pointer
                      ${isActive ? 'text-primary' : 'text-slate-600 hover:text-slate-900'}
                    `}
                  >
                    {link.name}
                    <span className={`
                      absolute inset-x-0 bottom-0 h-0.5 bg-primary transform transition-transform duration-300 origin-left
                      ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                    `} />
                  </motion.a>
                );
              })}
            </div>

            {/* Desktop CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="hidden md:flex items-center space-x-4"
            >
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-glow-primary hover:shadow-glow-accent transition-all duration-300"
                onClick={() => onOpenBooking ? onOpenBooking() : (window.location.href = '/booking')}
              >
                Book Free Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-600 hover:text-primary hover:bg-primary/10"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation - Bottom Sheet */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60] md:hidden backdrop-blur-sm"
            />

            {/* Bottom Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-[70] bg-white rounded-t-3xl shadow-2xl p-6 md:hidden border-t border-slate-100"
              style={{ maxHeight: '85vh', overflowY: 'auto' }}
            >
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl font-bold text-slate-900">Menu</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="rounded-full hover:bg-slate-100"
                  >
                    <X className="h-6 w-6 text-slate-500" />
                  </Button>
                </div>

                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block p-4 rounded-xl text-lg font-medium text-slate-600 hover:text-primary hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}

                <div className="pt-4 pb-6">
                  <Button
                    className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-glow-primary rounded-xl"
                    onClick={() => { if (onOpenBooking) onOpenBooking(); else window.location.href = '/booking'; setIsOpen(false); }}
                  >
                    Book Free Audit
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;