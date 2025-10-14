import Navigation from "@/components/Navigation";
import PackageFinderQuiz from "@/components/PackageFinderQuiz";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

const PackageBuilder = () => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">
              <Sparkles className="h-3 w-3 mr-1" />
              Package Finder Quiz
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Find Your Perfect Automation Package
            </h1>
            <p className="text-xl text-muted-foreground">
              Answer one quick question to get a personalized recommendation
            </p>
          </div>

          <PackageFinderQuiz />
        </div>
      </main>
    </div>
  );
};

export default PackageBuilder;
