import { Zap, TrendingUp, Users, LucideIcon } from "lucide-react";

export interface Package {
  id: string;
  tier: string;
  size: "small" | "medium" | "large";
  price: number;
  priceDisplay: string;
  monthlySupport: number;
  icon: LucideIcon;
  description: string;
  features: string[];
  platforms: string[];
  roi: string;
  savings: string;
  timeSavingsPercent: number;
  popular: boolean;
}

export const PACKAGES: Package[] = [
  {
    id: "efficiency-essentials",
    tier: "Efficiency Essentials",
    size: "small",
    price: 2500,
    priceDisplay: "Starting at $2,500",
    monthlySupport: 300,
    icon: Zap,
    description: "Perfect for small businesses seeking initial automation wins",
    features: [
      "Automation Audit",
      "2-3 automated workflows",
      "1 Airtable base setup",
      "Basic dashboard creation",
      "User training sessions",
      "3 months bundled support",
      "Documentation package"
    ],
    platforms: ["Zapier", "Airtable", "Make (Basic)"],
    roi: "150-250% ROI",
    savings: "10-15 hours weekly",
    timeSavingsPercent: 0.60,
    popular: false
  },
  {
    id: "growth-builder",
    tier: "Growth Builder",
    size: "medium",
    price: 5000,
    priceDisplay: "Starting at $5,000",
    monthlySupport: 600,
    icon: TrendingUp,
    description: "Comprehensive automation for growing businesses",
    features: [
      "Everything in Efficiency Essentials, plus:",
      "2-3 additional smart workflows with advanced triggers (5-6 total)",
      "1 additional Airtable base with predictive analytics features",
      "1 additional real-time insights dashboard",
      "ROI tracking with performance metrics",
      "Comprehensive training program",
      "Intelligent integration with existing tools"
    ],
    platforms: ["Advanced Zapier", "Airtable Pro", "Make", "Activepieces"],
    roi: "200-350% ROI",
    savings: "15-25 hours weekly",
    timeSavingsPercent: 0.70,
    popular: true
  },
  {
    id: "enterprise-lite",
    tier: "Enterprise Lite",
    size: "large",
    price: 9000,
    priceDisplay: "Starting at $9,000",
    monthlySupport: 900,
    icon: Users,
    description: "Enterprise automation for established businesses",
    features: [
      "Everything in Growth Builder, plus:",
      "1-4 additional enterprise-grade workflows with machine learning (6-10 total)",
      "Advanced multi-base system with intelligent data sync",
      "AI-powered business intelligence suite",
      "AI Agent included",
      "Custom reporting with advanced analytics",
      "Enterprise dashboard with workflow orchestration",
      "Department-specific automation",
      "Strategic change management support"
    ],
    platforms: ["Enterprise Zapier + AI", "Advanced Airtable", "Make Pro", "Activepieces", "AI Integration"],
    roi: "250-400% ROI",
    savings: "30-50 hours weekly",
    timeSavingsPercent: 0.80,
    popular: false
  }
];

export const getPackageBySize = (size: "small" | "medium" | "large"): Package | undefined => {
  return PACKAGES.find(pkg => pkg.size === size);
};

export const getPackageById = (id: string): Package | undefined => {
  return PACKAGES.find(pkg => pkg.id === id);
};
