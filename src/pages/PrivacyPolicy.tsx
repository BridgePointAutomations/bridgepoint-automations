import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="text-primary border-primary/20 mb-4">
                <Shield className="w-3 h-3 mr-1" />
                Legal Document
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-lg text-muted-foreground mb-4">
                Last Updated: January 14, 2025
              </p>
              <p className="text-muted-foreground">
                Your privacy is important to us. This policy outlines how BridgePoint Automations collects, uses, and protects your personal information.
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
                  <h2 className="text-2xl font-bold mb-4 text-foreground">1. Introduction</h2>
                  <p className="text-muted-foreground">
                    BridgePoint Automations ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">2. Legal Basis for Processing (GDPR)</h2>
                  <p className="text-muted-foreground mb-4">
                    If you are from the European Economic Area (EEA), our legal basis for collecting and using the personal information described above will depend on the personal information concerned and the specific context in which we collect it.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    However, we specifically rely on the following legal bases:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Consent:</strong> Where you have given us permission to process your data (e.g., subscribing to newsletters).</li>
                    <li><strong>Contract:</strong> Where processing is necessary to perform a contract with you (e.g., delivering our services).</li>
                    <li><strong>Legitimate Interests:</strong> Where necessary for our legitimate business interests, ensuring these do not override your fundamental rights.</li>
                    <li><strong>Legal Obligation:</strong> Where we need to comply with a legal requirement.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">3. Information We Collect</h2>

                  <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">Personal Information</h3>
                  <p className="text-muted-foreground mb-4">
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                    <li><strong>Contact Information:</strong> Name, email address, phone number, company name</li>
                    <li><strong>Booking Information:</strong> Appointment details, consultation preferences</li>
                    <li><strong>Communication Data:</strong> Messages, inquiries, and feedback you send to us</li>
                    <li><strong>Business Information:</strong> Business size, industry, automation needs</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">Automatically Collected Information</h3>
                  <p className="text-muted-foreground mb-4">
                    When you visit our website, we automatically collect certain information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Usage Data:</strong> Pages viewed, time spent, navigation patterns</li>
                    <li><strong>Device Information:</strong> IP address, browser type, operating system</li>
                    <li><strong>Cookies:</strong> See our <Link to="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link> for details</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">3. How We Use Your Information</h2>
                  <p className="text-muted-foreground mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Schedule and manage consultations and appointments</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Send you service-related communications and updates</li>
                    <li>Analyze usage patterns and optimize website performance</li>
                    <li>Send marketing communications (with your consent)</li>
                    <li>Comply with legal obligations and prevent fraud</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">4. Third-Party Services</h2>
                  <p className="text-muted-foreground mb-4">
                    We use trusted third-party services to support our operations:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Analytics:</strong> Google Analytics to understand website usage (anonymized data)</li>
                    <li><strong>Scheduling:</strong> Calendly for appointment booking</li>
                    <li><strong>Communication:</strong> Email service providers for sending updates</li>
                    <li><strong>Webhooks:</strong> Zapier for form data processing</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    These third parties have their own privacy policies and we recommend reviewing them.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">5. International Data Transfers</h2>
                  <p className="text-muted-foreground mb-4">
                    Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.
                  </p>
                  <p className="text-muted-foreground">
                    If you are located outside United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to United States and process it there. We ensure appropriate safeguards are in place for such transfers, such as Standard Contractual Clauses.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">6. Data Storage and Security</h2>
                  <p className="text-muted-foreground mb-4">
                    We implement appropriate technical and organizational measures to protect your personal data:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                    <li>Encrypted data transmission (SSL/TLS)</li>
                    <li>Secure server infrastructure</li>
                    <li>Regular security audits and updates</li>
                    <li>Limited access to personal data on a need-to-know basis</li>
                  </ul>
                  <p className="text-muted-foreground">
                    We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy or as required by law.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">6. Your Privacy Rights</h2>
                  <p className="text-muted-foreground mb-4">
                    Depending on your location, you may have the following rights:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                    <li><strong>Access:</strong> Request a copy of your personal data</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                    <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                    <li><strong>Objection:</strong> Object to certain processing activities</li>
                    <li><strong>Withdrawal of Consent:</strong> Withdraw consent for marketing communications</li>
                  </ul>
                  <p className="text-muted-foreground">
                    To exercise these rights, contact us at <a href="mailto:privacy@bridgepointautomations.com" className="text-primary hover:underline">privacy@bridgepointautomations.com</a>
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">7. Cookies and Tracking</h2>
                  <p className="text-muted-foreground">
                    We use cookies and similar tracking technologies to enhance your experience. For detailed information, please review our <Link to="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link>.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">8. Children's Privacy</h2>
                  <p className="text-muted-foreground">
                    Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">9. California Privacy Rights (CCPA)</h2>
                  <p className="text-muted-foreground mb-4">
                    If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Right to know what personal information is collected</li>
                    <li>Right to know if personal information is sold or disclosed</li>
                    <li>Right to opt-out of the sale of personal information</li>
                    <li>Right to request deletion of personal information</li>
                    <li>Right to correct inaccurate personal information (CPRA)</li>
                    <li>Right to limit usage of sensitive personal information (CPRA)</li>
                    <li>Right to non-discrimination for exercising your rights</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">10. Changes to This Policy</h2>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8 bg-accent/50">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                    <Mail className="w-6 h-6 text-primary" />
                    11. Contact Us
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Email:</strong> <a href="mailto:privacy@bridgepointautomations.com" className="text-primary hover:underline">privacy@bridgepointautomations.com</a></p>
                    <p><strong>Phone:</strong> (412) 555-BRIDGE</p>
                    <p><strong>Mail:</strong> BridgePoint Automations, Pittsburgh, PA</p>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div >
        </section >
      </main >

      <Footer />
    </div >
  );
};

export default PrivacyPolicy;
