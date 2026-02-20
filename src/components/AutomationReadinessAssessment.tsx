import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle2, AlertCircle, Info, XCircle, Download, Mail, ArrowRight, RotateCcw } from "lucide-react";

interface AutomationReadinessAssessmentProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Question {
  id: string;
  section: number;
  text: string;
}

const questions: Question[] = [
  // Section 1: Process Readiness
  { id: "q1", section: 1, text: "Do you have documented, standardized processes for your key business operations?" },
  { id: "q2", section: 1, text: "Are there repetitive tasks that your team performs daily or weekly?" },
  { id: "q3", section: 1, text: "Can you identify tasks that take significant time but require minimal decision-making?" },
  { id: "q4", section: 1, text: "Do you currently track time spent on various business processes?" },
  { id: "q5", section: 1, text: "Are your processes consistent across team members?" },

  // Section 2: Organizational Readiness
  { id: "q6", section: 2, text: "Is your leadership team open to adopting new technologies and workflows?" },
  { id: "q7", section: 2, text: "Do you have team members who can dedicate time to automation implementation?" },
  { id: "q8", section: 2, text: "Is your team experiencing burnout or overwhelm from manual tasks?" },
  { id: "q9", section: 2, text: "Do you have clear visibility into your business metrics and KPIs?" },
  { id: "q10", section: 2, text: "Is your organization willing to invest time in training on new systems?" },

  // Section 3: Technical Readiness
  { id: "q11", section: 3, text: "Do you currently use cloud-based software tools (e.g., Google Workspace, Office 365)?" },
  { id: "q12", section: 3, text: "Are your business systems integrated, or do you frequently move data between applications?" },
  { id: "q13", section: 3, text: "Do you have reliable internet connectivity and modern computers?" },
  { id: "q14", section: 3, text: "Is your team comfortable using software applications and learning new tools?" },
  { id: "q15", section: 3, text: "Do you have a clear understanding of which software systems you use daily?" },
];

const sectionTitles = {
  1: "Process Readiness",
  2: "Organizational Readiness",
  3: "Technical Readiness",
};

export function AutomationReadinessAssessment({ isOpen, onClose }: AutomationReadinessAssessmentProps) {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [showEmailInput, setShowEmailInput] = useState(false);

  const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0);
  const completionPercent = (Object.keys(answers).length / questions.length) * 100;
  const isComplete = Object.keys(answers).length === questions.length;

  const sectionScores = {
    1: questions.filter(q => q.section === 1).reduce((sum, q) => sum + (answers[q.id] || 0), 0),
    2: questions.filter(q => q.section === 2).reduce((sum, q) => sum + (answers[q.id] || 0), 0),
    3: questions.filter(q => q.section === 3).reduce((sum, q) => sum + (answers[q.id] || 0), 0),
  };

  const getReadinessLevel = (score: number) => {
    if (score >= 25) return { level: "High Readiness", color: "secondary", icon: CheckCircle2, description: "Your business is primed for automation" };
    if (score >= 18) return { level: "Moderate Readiness", color: "accent-cyan", icon: Info, description: "Your business shows good automation potential" };
    if (score >= 10) return { level: "Low Readiness", color: "amber", icon: AlertCircle, description: "Your business needs foundational work" };
    return { level: "Not Ready", color: "muted", icon: XCircle, description: "Your business needs significant preparation" };
  };

  const getRecommendations = (score: number): string[] => {
    if (score >= 25) {
      return [
        "Start with high-impact processes to maximize ROI",
        "Focus on workflows that handle the most data volume",
        "Consider integration between your existing tools",
        "Schedule a strategy session to map your automation roadmap"
      ];
    }
    if (score >= 18) {
      return [
        "Document your core business processes first",
        "Identify and address key operational gaps",
        "Start with small, quick-win automation projects",
        "Build team buy-in through pilot programs"
      ];
    }
    if (score >= 10) {
      return [
        "Begin with comprehensive process mapping",
        "Standardize workflows across team members",
        "Invest in basic software tools and training",
        "Focus on one department or process at a time"
      ];
    }
    return [
      "Standardize your core business processes",
      "Build a foundation with cloud-based tools",
      "Invest in team training and change management",
      "Download our automation readiness guide to learn more"
    ];
  };

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: parseInt(value) }));
  };

  const handleViewResults = () => {
    setShowResults(true);
  };

  const handleRetake = () => {
    setAnswers({});
    setShowResults(false);
    setUserEmail("");
    setShowEmailInput(false);
  };

  const generatePDFBlob = (): Blob => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    let yPos = 20;

    // Header
    doc.setFontSize(24);
    doc.setTextColor(5, 130, 132); // Primary teal
    doc.text("BridgePoint Consulting", margin, yPos);
    yPos += 10;

    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text("Automation Readiness Assessment Results", margin, yPos);
    yPos += 15;

    // Date
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, margin, yPos);
    yPos += 15;

    // Overall Score Section
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text("Overall Assessment", margin, yPos);
    yPos += 10;

    const readiness = getReadinessLevel(totalScore);
    doc.setFontSize(20);
    doc.setTextColor(5, 130, 132);
    doc.text(`${totalScore} / 30 points`, margin, yPos);
    yPos += 8;

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Readiness Level: ${readiness.level}`, margin, yPos);
    yPos += 6;

    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text(readiness.description, margin, yPos);
    yPos += 15;

    // Section Breakdown
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text("Section Breakdown", margin, yPos);
    yPos += 10;

    doc.setFontSize(11);
    Object.entries(sectionScores).forEach(([section, score]) => {
      doc.text(`${sectionTitles[parseInt(section) as keyof typeof sectionTitles]}: ${score} / 10 points`, margin + 5, yPos);
      yPos += 7;
    });
    yPos += 10;

    // Recommendations
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text("Recommended Next Steps", margin, yPos);
    yPos += 10;

    doc.setFontSize(10);
    const recommendations = getRecommendations(totalScore);
    recommendations.forEach((rec, index) => {
      const lines = doc.splitTextToSize(`${index + 1}. ${rec}`, pageWidth - margin * 2);
      lines.forEach((line: string) => {
        if (yPos > 270) {
          doc.addPage();
          yPos = 20;
        }
        doc.text(line, margin, yPos);
        yPos += 6;
      });
    });

    yPos += 15;

    // Question Responses (New Page)
    doc.addPage();
    yPos = 20;

    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text("Detailed Responses", margin, yPos);
    yPos += 10;

    doc.setFontSize(9);
    let currentSection = 0;

    questions.forEach((q) => {
      if (q.section !== currentSection) {
        currentSection = q.section;
        yPos += 5;
        doc.setFontSize(12);
        doc.setTextColor(5, 130, 132);
        doc.text(sectionTitles[currentSection as keyof typeof sectionTitles], margin, yPos);
        yPos += 7;
        doc.setFontSize(9);
        doc.setTextColor(0, 0, 0);
      }

      if (yPos > 270) {
        doc.addPage();
        yPos = 20;
      }

      const answerValue = answers[q.id];
      const answerText = answerValue === 2 ? "Yes" : answerValue === 1 ? "Partially" : "No";

      const questionLines = doc.splitTextToSize(`Q: ${q.text}`, pageWidth - margin * 2 - 10);
      questionLines.forEach((line: string) => {
        doc.text(line, margin + 5, yPos);
        yPos += 5;
      });

      doc.setTextColor(80, 80, 80);
      doc.text(`A: ${answerText}`, margin + 5, yPos);
      doc.setTextColor(0, 0, 0);
      yPos += 8;
    });

    // Footer / CTA
    doc.addPage();
    yPos = 100;

    doc.setFontSize(16);
    doc.setTextColor(5, 130, 132);
    doc.text("Ready to Get Started?", pageWidth / 2, yPos, { align: "center" });
    yPos += 15;

    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text("Book your free consultation to discuss your automation strategy.", pageWidth / 2, yPos, { align: "center" });
    yPos += 10;

    doc.setFontSize(10);
    doc.setTextColor(5, 130, 132);
    doc.text("Visit: bridgepointautomations.com", pageWidth / 2, yPos, { align: "center" });

    return doc.output("blob");
  };

  const handleDownloadPDF = () => {
    setIsDownloading(true);
    try {
      const doc = new jsPDF();
      const blob = generatePDFBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `BridgePoint-Assessment-${Date.now()}.pdf`;
      link.click();
      URL.revokeObjectURL(url);
      toast.success("PDF downloaded successfully!");
    } catch (error) {
      console.error("PDF generation error:", error);
      toast.error("Failed to generate PDF. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  const blobToBase64 = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        resolve(base64.split(',')[1]);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const handleEmailResults = async () => {
    if (!userEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSendingEmail(true);

    try {
      const pdfBlob = generatePDFBlob();
      const pdfBase64 = await blobToBase64(pdfBlob);

      const readiness = getReadinessLevel(totalScore);

      const { data, error } = await supabase.functions.invoke('send-assessment-results', {
        body: {
          email: userEmail,
          score: totalScore,
          readinessLevel: readiness.level,
          readinessDescription: readiness.description,
          sectionScores,
          answers: questions.map(q => ({
            question: q.text,
            answer: answers[q.id] === 2 ? 'Yes' : answers[q.id] === 1 ? 'Partially' : 'No'
          })),
          recommendations: getRecommendations(totalScore),
          pdfBase64
        }
      });

      if (error) throw error;

      toast.success("Results sent! Check your email.");
      setShowEmailInput(false);
      setUserEmail("");
    } catch (error) {
      console.error("Email sending error:", error);
      toast.error("Failed to send email. Please try downloading the PDF instead.");
    } finally {
      setIsSendingEmail(false);
    }
  };

  const handleBookConsultation = () => {
    onClose();
    navigate("/booking");
  };

  const readiness = getReadinessLevel(totalScore);
  const ReadinessIcon = readiness.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Automation Readiness Assessment</DialogTitle>
          <DialogDescription>
            Answer 15 questions to discover if your business is ready for automation
          </DialogDescription>
        </DialogHeader>

        {/* Progress Bar - Always Visible */}
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 py-4 border-b">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">{Object.keys(answers).length} / {questions.length}</span>
            </div>
            <Progress value={completionPercent} className="h-2" />
          </div>
        </div>

        {!showResults ? (
          <div className="space-y-6 py-4">

            {/* Instructions */}
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">
                  For each question, select the option that best describes your current situation.
                  Be honest for the most accurate assessment.
                </p>
              </CardContent>
            </Card>

            {/* Questions by Section */}
            {[1, 2, 3].map(section => (
              <div key={section} className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="text-base px-3 py-1">
                    Section {section}
                  </Badge>
                  <h3 className="text-lg font-semibold">{sectionTitles[section as keyof typeof sectionTitles]}</h3>
                  <span className="text-sm text-muted-foreground ml-auto">
                    {questions.filter(q => q.section === section && answers[q.id] !== undefined).length} / 5
                  </span>
                </div>

                {questions.filter(q => q.section === section).map((question, index) => (
                  <Card key={question.id} className="border-l-4 border-l-primary">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium">
                        {index + 1}. {question.text}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <RadioGroup
                        value={answers[question.id]?.toString()}
                        onValueChange={(value) => handleAnswerChange(question.id, value)}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="2" id={`${question.id}-yes`} />
                          <Label htmlFor={`${question.id}-yes`} className="cursor-pointer">
                            Yes
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="1" id={`${question.id}-partial`} />
                          <Label htmlFor={`${question.id}-partial`} className="cursor-pointer">
                            Partially
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="0" id={`${question.id}-no`} />
                          <Label htmlFor={`${question.id}-no`} className="cursor-pointer">
                            No
                          </Label>
                        </div>
                      </RadioGroup>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}

            {/* View Results Button */}
            {isComplete && (
              <Button
                onClick={handleViewResults}
                size="lg"
                className="w-full"
                variant="default"
              >
                View Results <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            )}
          </div>
        ) : (
          <div className="space-y-6 py-4">
            {/* Results Summary */}
            <Card className="border-2 border-primary">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <ReadinessIcon className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-2xl">{readiness.level}</CardTitle>
                    <CardDescription className="text-base mt-1">{readiness.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">Total Score</span>
                  <span className="text-3xl font-bold text-primary">{totalScore} / 30</span>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Section Breakdown</h4>
                  {Object.entries(sectionScores).map(([section, score]) => (
                    <div key={section} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{sectionTitles[parseInt(section) as keyof typeof sectionTitles]}</span>
                        <span className="font-medium">{score} / 10</span>
                      </div>
                      <Progress value={(score / 10) * 100} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle>Recommended Next Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {getRecommendations(totalScore).map((rec, index) => (
                    <li key={index} className="flex gap-2 text-sm">
                      <span className="text-primary font-semibold">{index + 1}.</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleBookConsultation}
                size="lg"
                className="w-full"
                variant="hero"
              >
                Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Button
                  onClick={handleDownloadPDF}
                  variant="outline"
                  disabled={isDownloading}
                >
                  <Download className="mr-2 h-4 w-4" />
                  {isDownloading ? "Generating..." : "Download PDF"}
                </Button>

                {!showEmailInput ? (
                  <Button
                    onClick={() => setShowEmailInput(true)}
                    variant="outline"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Email Results
                  </Button>
                ) : (
                  <div className="col-span-full space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="flex gap-2">
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        disabled={isSendingEmail}
                      />
                      <Button
                        onClick={handleEmailResults}
                        disabled={isSendingEmail || !userEmail}
                      >
                        {isSendingEmail ? "Sending..." : "Send"}
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              <Button
                onClick={handleRetake}
                variant="ghost"
                className="w-full"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Retake Assessment
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
