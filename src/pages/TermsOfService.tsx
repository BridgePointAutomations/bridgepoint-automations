import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Mail } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="text-primary border-primary/20 mb-4">
                <FileText className="w-3 h-3 mr-1" />
                Legal Agreement
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
              <p className="text-lg text-muted-foreground mb-4">
                Last Updated: January 14, 2025
              </p>
              <p className="text-muted-foreground">
                Please read these terms carefully before using our services.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-slate">
              
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing and using the BridgePoint Automations website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">2. Description of Services</h2>
                  <p className="text-muted-foreground mb-4">
                    BridgePoint Automations provides business automation consulting and implementation services, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Process automation consulting and strategy</li>
                    <li>Workflow design and implementation</li>
                    <li>CRM integration and optimization</li>
                    <li>Custom automation solutions using no-code/low-code platforms</li>
                    <li>Ongoing support and maintenance services</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">3. User Obligations</h2>
                  <p className="text-muted-foreground mb-4">
                    When using our services, you agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Use our services only for lawful purposes</li>
                    <li>Not interfere with or disrupt our services</li>
                    <li>Not attempt to gain unauthorized access to our systems</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">4. Intellectual Property Rights</h2>
                  
                  <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">Our Content</h3>
                  <p className="text-muted-foreground mb-4">
                    All content on our website, including text, graphics, logos, images, and software, is the property of BridgePoint Automations and protected by intellectual property laws. You may not use, reproduce, or distribute our content without explicit written permission.
                  </p>

                  <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">Client Work Product</h3>
                  <p className="text-muted-foreground">
                    Upon full payment for services, you retain ownership of custom automation workflows and solutions created specifically for your business. BridgePoint Automations retains the right to use general methodologies, frameworks, and templates developed during the engagement.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">5. Service Packages and Payment Terms</h2>
                  
                  <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">Packages</h3>
                  <p className="text-muted-foreground mb-4">
                    We offer three main service packages:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                    <li><strong>Efficiency Essentials:</strong> $3,000 implementation + $200/month support</li>
                    <li><strong>Growth Builder:</strong> $5,000 implementation + $450/month support</li>
                    <li><strong>Enterprise Lite:</strong> $9,000 implementation + $750/month support</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">Payment Terms</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                    <li>Implementation fees are due 50% upfront, 50% upon completion</li>
                    <li>Monthly support fees are billed in advance on the 1st of each month</li>
                    <li>Payment is due within 15 days of invoice date</li>
                    <li>Late payments may incur a 1.5% monthly finance charge</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">Refund Policy</h3>
                  <p className="text-muted-foreground">
                    Implementation fees are non-refundable once work has commenced. Monthly support fees may be canceled with 30 days written notice, with no refund for the current billing period.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8 bg-warning/10 border-warning">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">6. Limitation of Liability</h2>
                  <p className="text-muted-foreground mb-4">
                    <strong>IMPORTANT:</strong> Please read this section carefully.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                    <li>BridgePoint Automations provides consulting and implementation services on an "as-is" basis</li>
                    <li>We do not guarantee specific business outcomes, time savings, or ROI</li>
                    <li>Our liability is limited to the amount paid for services in the preceding 12 months</li>
                    <li>We are not liable for indirect, consequential, or incidental damages</li>
                    <li>We are not responsible for third-party platform changes or outages</li>
                  </ul>
                  <p className="text-muted-foreground">
                    Results may vary based on your specific business processes, team adoption, and external factors beyond our control.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">7. Warranties and Disclaimers</h2>
                  <p className="text-muted-foreground mb-4">
                    We warrant that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                    <li>Services will be performed in a professional and workmanlike manner</li>
                    <li>We have the expertise to provide the contracted services</li>
                    <li>We will correct errors in our work at no additional charge within 30 days of notification</li>
                  </ul>
                  <p className="text-muted-foreground font-semibold mb-2">
                    EXCEPT AS EXPRESSLY STATED ABOVE, WE MAKE NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">8. Indemnification</h2>
                  <p className="text-muted-foreground">
                    You agree to indemnify and hold BridgePoint Automations harmless from any claims, damages, or expenses arising from your use of our services, your violation of these terms, or your violation of any rights of another party.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">9. Termination</h2>
                  
                  <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">By You</h3>
                  <p className="text-muted-foreground mb-4">
                    You may terminate ongoing support services with 30 days written notice. Implementation projects cannot be terminated once work has commenced without forfeiting payments made.
                  </p>

                  <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">By Us</h3>
                  <p className="text-muted-foreground mb-4">
                    We may terminate services immediately if you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Breach these Terms of Service</li>
                    <li>Fail to pay invoices within 30 days</li>
                    <li>Engage in abusive or illegal conduct</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">10. Confidentiality</h2>
                  <p className="text-muted-foreground">
                    Both parties agree to keep confidential any proprietary information shared during the engagement. This obligation survives termination of services for a period of 3 years.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">11. Governing Law and Jurisdiction</h2>
                  <p className="text-muted-foreground mb-4">
                    These Terms of Service are governed by the laws of the Commonwealth of Pennsylvania, without regard to its conflict of law provisions.
                  </p>
                  <p className="text-muted-foreground">
                    Any disputes arising from these terms or our services shall be resolved in the courts of Allegheny County, Pennsylvania.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">12. Dispute Resolution</h2>
                  <p className="text-muted-foreground mb-4">
                    Before initiating legal proceedings, both parties agree to:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                    <li>Attempt to resolve disputes through good-faith negotiation</li>
                    <li>If unresolved within 30 days, engage in mediation with a neutral third party</li>
                    <li>Only pursue litigation or arbitration after mediation attempts</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">13. Changes to Terms</h2>
                  <p className="text-muted-foreground">
                    We reserve the right to modify these Terms of Service at any time. Material changes will be communicated via email to active clients. Continued use of our services after changes constitutes acceptance of the modified terms.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">14. Severability</h2>
                  <p className="text-muted-foreground">
                    If any provision of these terms is found to be unenforceable, the remaining provisions will remain in full effect.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">15. Entire Agreement</h2>
                  <p className="text-muted-foreground">
                    These Terms of Service, together with our Privacy Policy and any signed service agreements, constitute the entire agreement between you and BridgePoint Automations.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8 bg-accent/50">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                    <Mail className="w-6 h-6 text-primary" />
                    16. Contact Information
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    For questions about these Terms of Service, please contact:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Email:</strong> <a href="mailto:legal@bridgepointautomations.com" className="text-primary hover:underline">legal@bridgepointautomations.com</a></p>
                    <p><strong>Phone:</strong> (412) 555-BRIDGE</p>
                    <p><strong>Mail:</strong> BridgePoint Automations, Pittsburgh, PA</p>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
