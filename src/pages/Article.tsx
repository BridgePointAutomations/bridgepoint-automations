import { useParams, useNavigate, Link } from "react-router-dom";
import { getArticleBySlug, getRelatedArticles } from "@/data/articles";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { format } from "date-fns";

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const article = slug ? getArticleBySlug(slug) : undefined;
  const relatedArticles = slug ? getRelatedArticles(slug, 2) : [];

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
        <Navigation />
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/resources')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Resources
          </Button>
        </main>
      </div>
    );
  }

  const IconComponent = article.icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 md:py-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/resources" className="hover:text-primary transition-colors">Resources</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{article.title}</span>
        </nav>

        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate('/resources')}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Resources
        </Button>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-12 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary" className="text-sm">{article.category}</Badge>
              <IconComponent className="h-5 w-5 text-primary" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              {article.excerpt}
            </p>

            {/* Article Meta */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{format(new Date(article.date), 'MMMM d, yyyy')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-16">
            {article.content.map((section, index) => {
              switch (section.type) {
                case 'heading':
                  const HeadingTag = `h${section.level}` as keyof JSX.IntrinsicElements;
                  return (
                    <HeadingTag
                      key={index}
                      className={`font-bold mt-8 mb-4 ${
                        section.level === 2 ? 'text-3xl' : 'text-2xl'
                      }`}
                    >
                      {section.content}
                    </HeadingTag>
                  );
                
                case 'paragraph':
                  return (
                    <p key={index} className="text-lg leading-relaxed mb-6 text-foreground/90">
                      {section.content}
                    </p>
                  );
                
                case 'list':
                  return (
                    <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
                      {(section.content as string[]).map((item, itemIndex) => (
                        <li key={itemIndex} className="text-lg text-foreground/90">
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                
                case 'highlight':
                  return (
                    <Card key={index} className="my-8 border-l-4 border-primary bg-primary/5">
                      <CardContent className="p-6">
                        <p className="text-lg font-medium text-foreground">
                          {section.content}
                        </p>
                      </CardContent>
                    </Card>
                  );
                
                default:
                  return null;
              }
            })}
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-primary text-white border-0 mb-16">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
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

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedArticles.map((relatedArticle) => {
                  const RelatedIcon = relatedArticle.icon;
                  return (
                    <Card
                      key={relatedArticle.slug}
                      className="hover-lift cursor-pointer transition-all"
                      onClick={() => navigate(`/resources/${relatedArticle.slug}`)}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="secondary">{relatedArticle.category}</Badge>
                          <RelatedIcon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-xl mb-2">{relatedArticle.title}</CardTitle>
                        <CardDescription className="text-base">
                          {relatedArticle.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            {relatedArticle.readTime}
                          </span>
                          <Button variant="ghost" size="sm">
                            Read More →
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>
          )}
        </article>
      </main>
    </div>
  );
};

export default Article;