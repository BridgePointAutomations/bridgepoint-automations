import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { BookOpen, Download, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { articles } from "@/data/articles";
import { AutomationReadinessAssessment } from "@/components/AutomationReadinessAssessment";

const Resources = () => {
  const navigate = useNavigate();
  const [assessmentOpen, setAssessmentOpen] = useState(false);

  const downloads = [
    {
      title: "Automation Readiness Assessment",
      description: "Take our interactive 15-question assessment to discover if your business is ready for automation.",
      size: "Interactive • 5 min",
      isInteractive: true,
    },
    {
      title: "Small Business Automation Guide",
      description: "Complete guide covering the basics of business automation and implementation strategies.",
      size: "PDF • 4.1 MB",
    },
    {
      title: "ROI Calculator Workbook",
      description: "Detailed Excel workbook to calculate your potential automation ROI across multiple scenarios.",
      size: "XLSX • 1.8 MB",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <Badge className="mb-4">Knowledge Center</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Resources & Insights
          </h1>
          <p className="text-xl text-muted-foreground">
            Expert guidance on business automation, efficiency strategies, and proven implementation methods.
          </p>
        </div>

        {/* Articles Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Latest Articles</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article) => {
              const IconComponent = article.icon;
              return (
                <Card 
                  key={article.slug} 
                  className="hover-lift cursor-pointer transition-all"
                  onClick={() => navigate(`/resources/${article.slug}`)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary">{article.category}</Badge>
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
                    <CardDescription className="text-base">{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{article.readTime}</span>
                      <Button variant="ghost" size="sm">Read More →</Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Downloads Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Download className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Free Downloads</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {downloads.map((download, index) => (
              <Card key={index} className="hover-lift transition-all">
                <CardHeader>
                  <CardTitle className="text-lg mb-2">{download.title}</CardTitle>
                  <CardDescription>{download.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{download.size}</span>
                    {download.isInteractive ? (
                      <Button 
                        size="sm" 
                        variant="default"
                        onClick={() => setAssessmentOpen(true)}
                      >
                        Start Assessment <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <Card className="bg-gradient-primary text-white border-0">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-6 opacity-90">
              Schedule a free consultation to discuss your specific automation needs.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate('/booking')}
              className="shadow-lg"
            >
              Book Your Free Consultation
            </Button>
          </CardContent>
        </Card>
      </main>

      <AutomationReadinessAssessment
        isOpen={assessmentOpen}
        onClose={() => setAssessmentOpen(false)}
      />
    </div>
  );
};

export default Resources;
