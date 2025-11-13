import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/5 via-accent/20 to-background border-t border-primary/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">BridgePoint Automations</h3>
            <p className="text-sm text-muted-foreground">
              Empowering Pittsburgh businesses with intelligent automation solutions that drive growth and efficiency.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Pittsburgh, PA</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>(412) 555-BRIDGE</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>support@bridgepointautomations.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/#services" className="text-muted-foreground hover:text-primary transition-colors">Process Automation</Link></li>
              <li><Link to="/#services" className="text-muted-foreground hover:text-primary transition-colors">CRM Integration</Link></li>
              <li><Link to="/#services" className="text-muted-foreground hover:text-primary transition-colors">Workflow Optimization</Link></li>
              <li><Link to="/workflows" className="text-muted-foreground hover:text-primary transition-colors">Automation Workflows</Link></li>
              <li><Link to="/booking" className="text-muted-foreground hover:text-primary transition-colors">Book Consultation</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-muted-foreground">Healthcare</span></li>
              <li><span className="text-muted-foreground">Professional Services</span></li>
              <li><span className="text-muted-foreground">Retail & E-commerce</span></li>
              <li><span className="text-muted-foreground">Home Services</span></li>
              <li><span className="text-muted-foreground">Financial Services</span></li>
            </ul>
          </div>

          {/* Legal & Resources */}
          <div>
            <h4 className="font-semibold mb-4">Legal & Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</Link></li>
              <li><Link to="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors">Disclaimer</Link></li>
              <li><Link to="/accessibility" className="text-muted-foreground hover:text-primary transition-colors">Accessibility</Link></li>
              <li><Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">Resources</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 BridgePoint Automations. All Rights Reserved.</p>
            <div className="flex gap-4">
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy</Link>
              <span>•</span>
              <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms</Link>
              <span>•</span>
              <Link to="/cookie-policy" className="hover:text-primary transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
