import { Zap, TrendingUp, Target, Clock, LucideIcon } from "lucide-react";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  icon: LucideIcon;
  date: string;
  author: string;
  content: ArticleContent[];
}

export interface ArticleContent {
  type: "heading" | "paragraph" | "list" | "highlight";
  content: string | string[];
  level?: number; // For headings: 2 or 3
}

export const articles: Article[] = [
  {
    slug: "5-signs-your-business-needs-automation",
    title: "5 Signs Your Business Needs Automation Now",
    excerpt: "Discover the key indicators that your business is ready for automation and how to get started.",
    category: "Getting Started",
    readTime: "5 min read",
    icon: Zap,
    date: "2025-10-15",
    author: "Bridgepoint Automations",
    content: [
      {
        type: "paragraph",
        content:
          "Is your business ready for automation? Here are the telltale signs that it's time to embrace automation technology.",
      },
      {
        type: "heading",
        level: 2,
        content: "1. Your Team Spends Hours on Repetitive Tasks",
      },
      {
        type: "paragraph",
        content:
          "If your employees are manually entering data, copying information between systems, or performing the same steps day after day, you're losing valuable time and money. When your team mentions spending significant portions of their week on tasks like invoice processing, data entry, appointment scheduling, or report generation, automation can reclaim those hours. These repetitive tasks are not only time-consuming but also prone to human error, which compounds the problem. We often find that businesses can recover 20-30% of their team's time by automating these routine processes, allowing employees to focus on strategic work that actually grows the business.",
      },
      {
        type: "heading",
        level: 2,
        content: "2. You're Missing Deadlines or Opportunities",
      },
      {
        type: "paragraph",
        content:
          "When follow-ups slip through the cracks, leads go cold, or customer requests sit unanswered, you're likely experiencing the limits of manual processes. If you've noticed missed opportunities to upsell customers, delayed responses to inquiries, or inconsistent follow-through on important tasks, these are clear signals that your current systems can't keep pace with your business demands. Automation ensures nothing falls between the cracks by triggering actions based on specific conditions, sending timely reminders, and maintaining consistent communication with customers and team members.",
      },
      {
        type: "heading",
        level: 2,
        content: "3. Your Business Has Outgrown Spreadsheets",
      },
      {
        type: "paragraph",
        content:
          "Spreadsheets are fantastic tools, but they have limits. If multiple team members are working from different versions of the same file, if you're struggling to find information quickly, or if errors from manual updates are becoming common, you've outgrown this approach. When your team starts asking questions like \"Which version is correct?\" or spending excessive time reconciling data, it's time to implement automated systems that provide real-time, accurate information to everyone who needs it.",
      },
      {
        type: "heading",
        level: 2,
        content: "4. Customer Service Quality Is Inconsistent",
      },
      {
        type: "paragraph",
        content:
          "Inconsistent customer experiences often stem from manual processes that depend too heavily on individual team members remembering every step. If different customers receive different levels of service, if onboarding processes vary, or if you lack visibility into customer interactions across your team, automation can standardize and improve these experiences. Automated workflows ensure every customer receives the same high-quality experience, with timely responses, consistent communication, and proper follow-through at every stage of their journey.",
      },
      {
        type: "heading",
        level: 2,
        content: "5. You Can't Scale Without Hiring More People",
      },
      {
        type: "paragraph",
        content:
          'This is perhaps the most critical sign. If every increase in business volume requires proportional increases in staff, your operational costs will always limit your growth. When you find yourself thinking "We need another person just to handle this process," but the workload doesn\'t justify a full-time position, automation bridges that gap. We help businesses scale their operations without linearly scaling their headcount, making growth more sustainable and profitable.',
      },
      {
        type: "highlight",
        content:
          "Ready to explore how automation can transform your operations? Let's discuss which processes in your business could benefit most from automation and create a roadmap that works for you.",
      },
    ],
  },
  {
    slug: "roi-of-business-automation",
    title: "ROI of Business Automation: What to Expect",
    excerpt: "Learn how automation impacts your bottom line and what realistic returns look like in the first year.",
    category: "ROI & Strategy",
    readTime: "8 min read",
    icon: TrendingUp,
    date: "2024-03-10",
    author: "Bridgepoint Automations",
    content: [
      {
        type: "paragraph",
        content:
          "Understanding the return on investment for business automation helps you make informed decisions about which processes to automate first.",
      },
      {
        type: "heading",
        level: 2,
        content: "Typical ROI Timeline",
      },
      {
        type: "paragraph",
        content:
          "Most businesses see positive ROI within 3-6 months of implementing automation. The initial investment includes setup time, software costs, and training, but the ongoing savings compound quickly.",
      },
      {
        type: "heading",
        level: 2,
        content: "Time Savings",
      },
      {
        type: "paragraph",
        content:
          "The most immediate benefit is time recovery. Our clients typically save 10-30 hours per week on automated tasks, which translates to direct cost savings or increased productive capacity.",
      },
      {
        type: "list",
        content: [
          "Data entry automation: 5-10 hours/week saved",
          "Report generation: 3-5 hours/week saved",
          "Email follow-ups: 2-4 hours/week saved",
          "Invoice processing: 4-8 hours/week saved",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Error Reduction",
      },
      {
        type: "paragraph",
        content:
          "Automated systems reduce human error by 90% or more. For businesses where errors result in rework, customer complaints, or compliance issues, this alone can justify the investment.",
      },
      {
        type: "heading",
        level: 2,
        content: "Revenue Impact",
      },
      {
        type: "paragraph",
        content:
          "Beyond cost savings, automation can increase revenue through faster response times, better lead follow-up, and the ability to serve more customers without proportional cost increases.",
      },
      {
        type: "highlight",
        content:
          "Use our ROI Calculator to estimate your potential returns based on your specific business metrics and processes.",
      },
    ],
  },
  {
    slug: "top-10-tasks-to-automate",
    title: "Top 10 Tasks Every Small Business Should Automate",
    excerpt: "From lead capture to invoicing, these are the high-impact automations that save the most time.",
    category: "Best Practices",
    readTime: "6 min read",
    icon: Target,
    date: "2024-03-05",
    author: "Bridgepoint Automations",
    content: [
      {
        type: "paragraph",
        content:
          "Not all tasks are equally valuable to automate. Here are the top 10 processes that deliver the biggest impact for small businesses.",
      },
      {
        type: "heading",
        level: 2,
        content: "1. Lead Capture and CRM Entry",
      },
      {
        type: "paragraph",
        content:
          "Automatically capture leads from your website, social media, and forms, then add them to your CRM with proper categorization and tagging.",
      },
      {
        type: "heading",
        level: 2,
        content: "2. Email Follow-up Sequences",
      },
      {
        type: "paragraph",
        content:
          "Set up automated email campaigns that nurture leads based on their behavior and interactions with your business.",
      },
      {
        type: "heading",
        level: 2,
        content: "3. Invoice Generation and Payment Reminders",
      },
      {
        type: "paragraph",
        content:
          "Generate invoices automatically when services are delivered, and send polite payment reminders at scheduled intervals.",
      },
      {
        type: "heading",
        level: 2,
        content: "4. Appointment Scheduling and Reminders",
      },
      {
        type: "paragraph",
        content:
          "Let customers book appointments directly in your calendar, with automatic confirmations and reminders to reduce no-shows.",
      },
      {
        type: "heading",
        level: 2,
        content: "5. Social Media Posting",
      },
      {
        type: "paragraph",
        content:
          "Schedule and publish social media content across platforms automatically, maintaining consistent presence without daily manual posting.",
      },
      {
        type: "heading",
        level: 2,
        content: "6. Report Generation",
      },
      {
        type: "paragraph",
        content:
          "Automatically compile data from various sources into formatted reports on a scheduled basis - daily, weekly, or monthly.",
      },
      {
        type: "heading",
        level: 2,
        content: "7. Customer Onboarding",
      },
      {
        type: "paragraph",
        content:
          "Create automated welcome sequences that guide new customers through your processes, share important resources, and collect necessary information.",
      },
      {
        type: "heading",
        level: 2,
        content: "8. Inventory Alerts",
      },
      {
        type: "paragraph",
        content:
          "Monitor stock levels and automatically notify relevant team members when inventory drops below thresholds, or even trigger reorder processes.",
      },
      {
        type: "heading",
        level: 2,
        content: "9. Document Processing",
      },
      {
        type: "paragraph",
        content:
          "Extract data from incoming documents (invoices, receipts, forms) and route them to the right systems or people for action.",
      },
      {
        type: "heading",
        level: 2,
        content: "10. Team Notifications and Updates",
      },
      {
        type: "paragraph",
        content:
          "Keep your team informed with automated notifications about important events, updates, or actions required across your business systems.",
      },
      {
        type: "highlight",
        content:
          "Ready to automate your business? Start with the tasks that consume the most time or create the most friction in your operations.",
      },
    ],
  },
  {
    slug: "law-firm-case-study-30-hours-saved",
    title: "How We Saved a Law Firm 30 Hours Per Week",
    excerpt: "A detailed walkthrough of automating document processing and client intake for a legal practice.",
    category: "Case Study",
    readTime: "10 min read",
    icon: Clock,
    date: "2024-02-28",
    author: "Bridgepoint Automations",
    content: [
      {
        type: "paragraph",
        content:
          "This case study examines how we helped a mid-sized law firm eliminate 30 hours of weekly manual work through strategic automation.",
      },
      {
        type: "heading",
        level: 2,
        content: "The Challenge",
      },
      {
        type: "paragraph",
        content:
          "The firm was spending excessive time on client intake, document processing, and case file management. Administrative staff were overwhelmed, and attorneys were delayed in accessing critical information.",
      },
      {
        type: "list",
        content: [
          "Manual data entry from intake forms: 8 hours/week",
          "Document sorting and filing: 12 hours/week",
          "Client communication follow-ups: 6 hours/week",
          "Report compilation for attorneys: 4 hours/week",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "The Solution: Four-Part Automation System",
      },
      {
        type: "heading",
        level: 3,
        content: "Part 1: Automated Client Intake",
      },
      {
        type: "paragraph",
        content:
          "We implemented an online intake system that captures client information through smart forms, automatically validates data, and creates case files in their practice management software. This eliminated 8 hours of manual data entry weekly.",
      },
      {
        type: "heading",
        level: 3,
        content: "Part 2: Intelligent Document Processing",
      },
      {
        type: "paragraph",
        content:
          "Using OCR and AI-powered classification, incoming documents are now automatically sorted, named according to firm conventions, and filed in the correct case folders. This saved 12 hours per week that staff spent manually organizing files.",
      },
      {
        type: "heading",
        level: 3,
        content: "Part 3: Client Communication Automation",
      },
      {
        type: "paragraph",
        content:
          "We set up automated email sequences for case updates, appointment reminders, and document requests. The system triggers appropriate communications based on case milestones, saving 6 hours weekly while improving client satisfaction.",
      },
      {
        type: "heading",
        level: 3,
        content: "Part 4: Automated Reporting",
      },
      {
        type: "paragraph",
        content:
          "Daily case status reports, weekly caseload summaries, and monthly billing reports are now generated automatically, pulling data from multiple systems into formatted documents ready for attorney review.",
      },
      {
        type: "heading",
        level: 2,
        content: "The Results",
      },
      {
        type: "list",
        content: [
          "Total time saved: 30 hours per week",
          "Administrative cost reduction: $45,000 annually",
          "Error rate in client data: Reduced by 95%",
          "Client response time: Improved by 60%",
          "Attorney satisfaction: Significantly increased",
          "ROI achieved: Within 4 months",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Key Takeaways",
      },
      {
        type: "paragraph",
        content:
          "The success of this project came from starting with the highest-impact, most time-consuming processes. We implemented solutions incrementally, ensuring staff adoption at each phase before moving to the next automation.",
      },
      {
        type: "highlight",
        content:
          "Every business has unique bottlenecks and opportunities for automation. Schedule a consultation to discover where your business can save time and money.",
      },
    ],
  },
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find((article) => article.slug === slug);
};

export const getRelatedArticles = (currentSlug: string, limit: number = 2): Article[] => {
  return articles.filter((article) => article.slug !== currentSlug).slice(0, limit);
};
