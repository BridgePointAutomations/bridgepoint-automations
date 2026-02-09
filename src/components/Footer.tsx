import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, ArrowUpRight, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

interface FooterProps {
  onOpenBooking?: () => void;
}

const Footer = ({ onOpenBooking }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white border-t border-slate-100 pt-20 pb-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="block group">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                BridgePoint
              </span>
            </Link>
            <p className="text-slate-600 leading-relaxed">
              Helping small businesses grow with custom websites and smart automation.
              Simple, effective, and built for you.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/20 hover:bg-primary/5 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-slate-600 hover:text-primary transition-colors flex items-center gap-2 group">Website Development</a></li>
              <li><a href="#services" className="text-slate-600 hover:text-primary transition-colors flex items-center gap-2 group">Business Automation</a></li>
              <li><a href="#services" className="text-slate-600 hover:text-primary transition-colors flex items-center gap-2 group">AI Solutions</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#process" className="text-slate-600 hover:text-primary transition-colors">Our Process</a></li>
              <li><a href="#contact" className="text-slate-600 hover:text-primary transition-colors">Contact Us</a></li>
              <li>
                <button
                  className="text-slate-600 hover:text-primary transition-colors text-left"
                  onClick={() => onOpenBooking ? onOpenBooking() : (window.location.href = '/booking')}
                >
                  Book Audit
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-bold text-slate-900 mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-slate-600">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span>Pittsburgh, PA<br />Innovation District</span>
              </div>
              <a href="tel:4125552743" className="flex items-center gap-3 text-slate-600 hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary" />
                <span>(412) 555-2743</span>
              </a>
              <a href="mailto:hello@bridgepoint.ai" className="flex items-center gap-3 text-slate-600 hover:text-primary transition-colors">
                <Mail className="w-5 h-5 text-primary" />
                <span>hello@bridgepoint.ai</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} BridgePoint Automations. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
