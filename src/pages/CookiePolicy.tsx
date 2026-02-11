import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Cookie, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clearCookieConsent } from "@/lib/cookieConsent";
import { SEO } from "@/components/SEO";

const CookiePolicy = () => {
  const handleManagePreferences = () => {
    clearCookieConsent();
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Cookie Policy"
        description="Understand how BridgePoint Automations uses cookies and tracking technologies to improve your experience. Manage your cookie preferences."
        canonical="/cookie-policy"
      />
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="text-primary border-primary/20 mb-4">
                <Cookie className="w-3 h-3 mr-1" />
                Cookie Information
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
              <p className="text-lg text-muted-foreground mb-4">
                Last Updated: January 14, 2025
              </p>
              <p className="text-muted-foreground mb-6">
                This policy explains how BridgePoint Automations uses cookies and similar technologies.
              </p>
              <Button onClick={handleManagePreferences} variant="outline">
                <Cookie className="w-4 h-4 mr-2" />
                Manage Cookie Preferences
              </Button>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-slate">

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">1. What Are Cookies and Tracking Technologies?</h2>
                  <p className="text-muted-foreground">
                    Cookies are small text files that are placed on your device when you visit a website. They help websites remember your preferences, improve your experience, and provide analytics to site owners.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    In addition to cookies, we may use other tracking technologies such as:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                    <li><strong>Web Beacons/Pixels:</strong> Small graphic images that track user activity and email opens.</li>
                    <li><strong>Local Storage:</strong> Allows data to be stored locally on your browser for better performance.</li>
                    <li><strong>Scripts:</strong> Code snippets that execute on your device to enable features.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">2. Types of Cookies We Use</h2>

                  <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">Essential Cookies (Always Active)</h3>
                  <p className="text-muted-foreground mb-3">
                    These cookies are necessary for our website to function properly. They enable basic features like page navigation, secure access, and form submissions.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                    <li><strong>cookie-consent:</strong> Stores your cookie preferences</li>
                    <li><strong>Session cookies:</strong> Maintain your session during your visit</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">Analytics Cookies (Optional)</h3>
                  <p className="text-muted-foreground mb-3">
                    These cookies help us understand how visitors interact with our website, which pages are most popular, and where we can make improvements.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                    <li><strong>Google Analytics:</strong> _ga, _gid, _gat - Track website usage and performance</li>
                    <li>Data is anonymized and aggregated</li>
                    <li>Helps us improve user experience</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">Marketing and Interest-Based Advertising Cookies</h3>
                  <p className="text-muted-foreground mb-3">
                    These cookies are used to track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad. We may use these cookies to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Deliver advertisements relevant to your interests</li>
                    <li>Measure the effectiveness of advertising campaigns</li>
                    <li>Understand user behavior after viewing an ad</li>
                  </ul>
                  <p className="text-muted-foreground mt-3">
                    These cookies are usually placed by third-party advertising networks (like Google or Facebook) with our permission.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">3. Third-Party Cookies</h2>
                  <p className="text-muted-foreground mb-4">
                    Some third-party services we use may set their own cookies:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                    <li>
                      <strong>Google Analytics:</strong> Provides website analytics
                      <br />
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                        Google Privacy Policy
                      </a>
                    </li>
                    <li>
                      <strong>Calendly:</strong> Embedded scheduling widget
                      <br />
                      <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                        Calendly Privacy Policy
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">4. How to Control Cookies</h2>

                  <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">Our Cookie Consent Tool</h3>
                  <p className="text-muted-foreground mb-4">
                    When you first visit our website, we display a cookie consent banner. You can:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                    <li>Accept all cookies</li>
                    <li>Reject non-essential cookies</li>
                    <li>Customize your preferences by cookie category</li>
                  </ul>
                  <div className="mt-4">
                    <Button onClick={handleManagePreferences} size="sm">
                      Update Cookie Preferences
                    </Button>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 mt-8 text-foreground">Browser Settings</h3>
                  <p className="text-muted-foreground mb-3">
                    You can also manage cookies through your browser settings:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                    <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                    <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                    <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                    <li><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies and site permissions</li>
                  </ul>
                  <p className="text-muted-foreground text-sm italic">
                    Note: Blocking essential cookies may affect website functionality.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">5. Cookie Duration</h2>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                    <li><strong>Persistent Cookies:</strong> Remain for a set period (typically 1-365 days)</li>
                    <li><strong>Cookie Consent Preference:</strong> Stored for 365 days</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">6. Do Not Track Signals</h2>
                  <p className="text-muted-foreground">
                    Some browsers have a "Do Not Track" feature. Currently, there is no industry standard for how to respond to these signals. Our website respects your cookie preferences set through our consent tool regardless of browser settings.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">7. Updates to This Policy</h2>
                  <p className="text-muted-foreground">
                    We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. The "Last Updated" date at the top indicates when the policy was last revised.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8 bg-accent/50">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                    <Mail className="w-6 h-6 text-primary" />
                    8. Questions About Cookies
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    If you have questions about our use of cookies, please contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Email:</strong> <a href="mailto:privacy@bridgepointautomations.com" className="text-primary hover:underline">privacy@bridgepointautomations.com</a></p>
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

export default CookiePolicy;
