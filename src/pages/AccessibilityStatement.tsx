import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accessibility, Mail, CheckCircle } from "lucide-react";
import { SEO } from "@/components/SEO";

const AccessibilityStatement = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Accessibility Statement"
        description="BridgePoint Automations is committed to digital accessibility. Read our statement on ensuring our services are accessible to everyone."
        canonical="/accessibility"
      />
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="text-primary border-primary/20 mb-4">
                <Accessibility className="w-3 h-3 mr-1" />
                Accessibility Commitment
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessibility Statement</h1>
              <p className="text-lg text-muted-foreground mb-4">
                Last Updated: January 14, 2025
              </p>
              <p className="text-muted-foreground">
                BridgePoint Automations is committed to ensuring digital accessibility for people with disabilities.
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
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Our Commitment</h2>
                  <p className="text-muted-foreground mb-4">
                    BridgePoint Automations is committed to ensuring that our website and services are accessible to all people, including those with disabilities. We strive to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards published by the World Wide Web Consortium (W3C).
                  </p>
                  <p className="text-muted-foreground">
                    We believe that everyone should have equal access to information and services, regardless of ability. Accessibility is an ongoing effort, and we continuously work to improve the user experience for all visitors.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Accessibility Features</h2>
                  <p className="text-muted-foreground mb-4">
                    Our website includes the following accessibility features:
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">Keyboard Navigation</p>
                        <p className="text-sm text-muted-foreground">All interactive elements can be accessed using keyboard navigation</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">Semantic HTML</p>
                        <p className="text-sm text-muted-foreground">Proper heading structure and semantic markup for screen readers</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">Alternative Text</p>
                        <p className="text-sm text-muted-foreground">Descriptive alt text for images and icons</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">Color Contrast</p>
                        <p className="text-sm text-muted-foreground">Sufficient color contrast ratios for text and interactive elements</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">Responsive Design</p>
                        <p className="text-sm text-muted-foreground">Mobile-friendly layout that adapts to different screen sizes</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">Focus Indicators</p>
                        <p className="text-sm text-muted-foreground">Clear visual indicators for focused elements</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">Descriptive Links</p>
                        <p className="text-sm text-muted-foreground">Meaningful link text that describes the destination</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">Form Labels</p>
                        <p className="text-sm text-muted-foreground">Clear labels and instructions for all form fields</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Compatibility</h2>
                  <p className="text-muted-foreground mb-4">
                    Our website is designed to be compatible with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Modern web browsers (Chrome, Firefox, Safari, Edge)</li>
                    <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
                    <li>Browser zoom and text-only zoom features</li>
                    <li>Keyboard-only navigation</li>
                    <li>Voice recognition software</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Third-Party Content</h2>
                  <p className="text-muted-foreground mb-4">
                    Some content on our website is provided by third-party services:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Calendly:</strong> Scheduling widget for booking consultations</li>
                    <li><strong>Google Analytics:</strong> Website analytics (privacy-friendly configuration)</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    While we choose vendors committed to accessibility, we do not have direct control over third-party content. We encourage you to contact us if you encounter accessibility barriers with embedded content.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Known Limitations</h2>
                  <p className="text-muted-foreground mb-4">
                    Despite our efforts, there may be some limitations in accessibility:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Some embedded third-party content may have accessibility limitations</li>
                    <li>Older browsers may not fully support all accessibility features</li>
                    <li>Complex interactive elements like the ROI calculator may require additional keyboard navigation</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    We are actively working to address these limitations and improve accessibility across all areas of our website.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Continuous Improvement</h2>
                  <p className="text-muted-foreground">
                    Accessibility is an ongoing commitment. We regularly:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                    <li>Test our website with various assistive technologies</li>
                    <li>Review and update content for accessibility compliance</li>
                    <li>Train our team on accessibility best practices</li>
                    <li>Monitor for new accessibility standards and guidelines</li>
                    <li>Respond to user feedback about accessibility issues</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Alternative Access</h2>
                  <p className="text-muted-foreground mb-4">
                    If you encounter accessibility barriers or need information in an alternative format, we offer:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Phone consultations as an alternative to online forms</li>
                    <li>Email communication for detailed discussions</li>
                    <li>Document conversions to accessible formats upon request</li>
                    <li>Personal assistance from our team</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8 bg-accent/50">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                    <Mail className="w-6 h-6 text-primary" />
                    Report Accessibility Issues
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us:
                  </p>
                  <div className="space-y-3 text-muted-foreground">
                    <div>
                      <p className="font-semibold text-foreground">Email:</p>
                      <a href="mailto:accessibility@bridgepointautomations.com" className="text-primary hover:underline">
                        accessibility@bridgepointautomations.com
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Phone:</p>
                      <p>(412) 555-BRIDGE</p>
                      <p className="text-sm">Mon-Fri 8AM-6PM EST</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Response Time:</p>
                      <p>We aim to respond to accessibility concerns within 2 business days</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-4 text-sm">
                    When reporting an issue, please include:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground mt-2">
                    <li>The specific page or feature with the accessibility issue</li>
                    <li>The assistive technology you were using (if applicable)</li>
                    <li>A description of the problem you encountered</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Legal Standards</h2>
                  <p className="text-muted-foreground">
                    We strive to comply with applicable accessibility laws and regulations, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                    <li>Americans with Disabilities Act (ADA)</li>
                    <li>Section 508 of the Rehabilitation Act</li>
                    <li>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</li>
                  </ul>
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

export default AccessibilityStatement;
