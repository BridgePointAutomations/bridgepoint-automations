import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gradient">
              BridgePoint Automations
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-foreground hover:text-primary animate-smooth">
              Home
            </a>
            <a href="#services" className="text-foreground hover:text-primary animate-smooth">
              Services
            </a>
            <a href="/workflows" className="text-foreground hover:text-primary animate-smooth">
              Workflows
            </a>
            <a href="/package-builder" className="text-foreground hover:text-primary animate-smooth">
              Package Builder
            </a>
            <a href="/resources" className="text-foreground hover:text-primary animate-smooth">
              Resources
            </a>
            <a href="#contact" className="text-foreground hover:text-primary animate-smooth">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="default" 
              size="sm" 
              className="group"
              onClick={() => window.location.href = '/booking'}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="/"
                className="block px-3 py-2 text-foreground hover:text-primary animate-smooth"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-foreground hover:text-primary animate-smooth"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="/workflows"
                className="block px-3 py-2 text-foreground hover:text-primary animate-smooth"
                onClick={() => setIsOpen(false)}
              >
                Workflows
              </a>
              <a
                href="/package-builder"
                className="block px-3 py-2 text-foreground hover:text-primary animate-smooth"
                onClick={() => setIsOpen(false)}
              >
                Package Builder
              </a>
              <a
                href="/resources"
                className="block px-3 py-2 text-foreground hover:text-primary animate-smooth"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-foreground hover:text-primary animate-smooth"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <div className="pt-4">
                <Button 
                  variant="default" 
                  size="sm" 
                  className="w-full"
                  onClick={() => {window.location.href = '/booking'; setIsOpen(false);}}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;