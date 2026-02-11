import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Mail } from "lucide-react";
import { SEO } from "@/components/SEO";

const Disclaimer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Disclaimer"
        description="Important legal disclaimers regarding BridgePoint Automations services, ROI calculations, and third-party platform integrations."
        canonical="/disclaimer"
      />
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="text-primary border-primary/20 mb-4">
                <AlertTriangle className="w-3 h-3 mr-1" />
                Important Information
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Disclaimer</h1>
              <p className="text-lg text-muted-foreground mb-4">
                Last Updated: January 14, 2025
              </p>
              <p className="text-muted-foreground">
                Please read these disclaimers carefully before using our services or relying on information provided on our website.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-slate">

              <Card className="mb-8 bg-warning/10 border-warning">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">1. Professional Advice Disclaimer</h2>
                  <p className="text-muted-foreground mb-4">
                    The information provided by BridgePoint Automations on this website is for general informational purposes only. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information.
                  </p>
                  <p className="text-muted-foreground font-semibold">
                    Our content should not be considered professional, legal, financial, or technical advice. Always consult with qualified professionals for specific guidance related to your business needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8 bg-warning/10 border-warning">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">2. ROI Calculator Disclaimer</h2>
                  <p className="text-muted-foreground mb-4">
                    <strong>IMPORTANT NOTICE:</strong> The ROI Calculator on our website provides estimates based on industry averages and the inputs you provide. These calculations are for illustrative purposes only and should not be relied upon as guaranteed results.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                    <li><strong>Actual results will vary</strong> depending on your specific business processes, team adoption, implementation quality, and numerous other factors</li>
                    <li>Time savings and cost reductions are <strong>estimates only</strong>, not promises or guarantees</li>
                    <li>ROI projections are <strong>theoretical</strong> and may not reflect your actual experience</li>
                    <li>Implementation success depends on factors beyond our control, including client cooperation, data quality, and third-party platform reliability</li>
                  </ul>
                  <p className="text-muted-foreground font-semibold">
                    BridgePoint Automations does not guarantee specific time savings, cost reductions, or ROI outcomes. Every business is unique, and results depend on multiple variables.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">3. Testimonials and Case Studies Disclaimer</h2>
                  <p className="text-muted-foreground mb-4">
                    Testimonials and case studies featured on our website reflect the real experiences of actual clients. However, these results are not typical and should not be interpreted as guarantees of similar outcomes.
                  </p>
                  <p className="text-muted-foreground font-semibold mb-4">
                    As required by the Federal Trade Commission (FTC): Individual results may vary. Testimonials are not representative of all client experiences and do not guarantee future performance or success.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Time savings reported are specific to those clients' situations</li>
                    <li>Your business may experience different results based on size, industry, processes, and implementation factors</li>
                    <li>Past performance is not indicative of future results</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">4. No Warranty on Automation Results</h2>
                  <p className="text-muted-foreground mb-4">
                    While we use industry best practices and proven methodologies, BridgePoint Automations does not warrant or guarantee:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Specific time savings or efficiency gains</li>
                    <li>Specific cost reductions or ROI percentages</li>
                    <li>Elimination of all manual processes</li>
                    <li>Error-free operation of automated systems</li>
                    <li>Compatibility with future platform updates</li>
                    <li>Uninterrupted service from third-party platforms</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">5. Third-Party Platforms and Services</h2>
                  <p className="text-muted-foreground mb-4">
                    We implement automations using third-party platforms such as Zapier, Make (Integromat), Airtable, and others. Important disclaimers:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                    <li>We are not responsible for changes, outages, or issues with third-party platforms</li>
                    <li>Platform pricing, features, and availability may change without notice</li>
                    <li>Some platforms may require separate subscriptions or licensing</li>
                    <li>Third-party platform failures are beyond our control</li>
                  </ul>
                  <p className="text-muted-foreground">
                    We recommend reviewing the terms of service and privacy policies of any third-party platforms we recommend or implement.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">6. External Links Disclaimer</h2>
                  <p className="text-muted-foreground mb-4">
                    Our website may contain links to external websites that are not operated or controlled by BridgePoint Automations. We have no control over, and assume no responsibility for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>The content, privacy policies, or practices of third-party sites</li>
                    <li>Any products or services offered on external websites</li>
                    <li>The accuracy or reliability of information on linked sites</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">7. Service Availability</h2>
                  <p className="text-muted-foreground">
                    While we strive to maintain our website and services, we do not guarantee uninterrupted access. Our website and services may be temporarily unavailable due to maintenance, updates, or technical issues beyond our control.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">8. Information Accuracy</h2>
                  <p className="text-muted-foreground mb-4">
                    We make every effort to ensure information on our website is accurate and current. However:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Information may become outdated as platforms and technologies evolve</li>
                    <li>Pricing and package details are subject to change</li>
                    <li>Errors or omissions may occur despite our best efforts</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    Always confirm current information directly with our team before making decisions.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">9. Client Responsibilities</h2>
                  <p className="text-muted-foreground mb-4">
                    Successful automation implementation requires client participation and cooperation:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Providing accurate information about processes and requirements</li>
                    <li>Timely responses to requests for information or feedback</li>
                    <li>Training staff on new automated systems</li>
                    <li>Maintaining third-party platform subscriptions</li>
                    <li>Communicating issues or concerns promptly</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    Failure to fulfill these responsibilities may impact project outcomes and results.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">10. Limitation of Liability</h2>
                  <p className="text-muted-foreground mb-4">
                    To the maximum extent permitted by law, BridgePoint Automations shall not be liable for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                    <li>Loss of profits, revenue, data, or business opportunities</li>
                    <li>Damages resulting from third-party platform failures</li>
                    <li>Damages arising from reliance on website information without professional consultation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">11. Changes to This Disclaimer</h2>
                  <p className="text-muted-foreground">
                    We reserve the right to modify this Disclaimer at any time. Changes will be effective immediately upon posting to this page. The "Last Updated" date at the top indicates when the disclaimer was last revised.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8 bg-accent/50">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                    <Mail className="w-6 h-6 text-primary" />
                    12. Questions or Concerns
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    If you have questions about this Disclaimer or need clarification, please contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Email:</strong> <a href="mailto:support@bridgepointautomations.com" className="text-primary hover:underline">support@bridgepointautomations.com</a></p>
                    <p><strong>Phone:</strong> (412) 555-BRIDGE</p>
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

export default Disclaimer;
