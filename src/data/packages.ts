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
    price: 3000,
    priceDisplay: "Starting at $3,000",
    monthlySupport: 200,
    icon: Zap,
    description: "Perfect for small businesses seeking initial automation wins",
    features: [
      "Automation Audit",
      "2 automated workflows",
      "1 Airtable base setup",
      "Basic dashboard creation",
      "User training sessions",
      "3 months bundled support",
      "Documentation package",
    ],
    platforms: ["Zapier", "Airtable", "Make (Basic)"],
    roi: "Positive ROI within 12 months",
    savings: "10-15 hours weekly",
    timeSavingsPercent: 0.6,
    popular: false,
  },
  {
    id: "growth-builder",
    tier: "Growth Builder",
    size: "medium",
    price: 5000,
    priceDisplay: "Starting at $5,000",
    monthlySupport: 400,
    icon: TrendingUp,
    description: "Comprehensive automation for growing businesses",
    features: [
      "Everything in Efficiency Essentials, plus:",
      "3 additional smart workflows with advanced triggers (5 total)",
      "1 additional Airtable base with predictive analytics features",
      "1 additional real-time insights dashboard",
      "ROI tracking with performance metrics",
      "Comprehensive training program",
      "Intelligent integration with existing tools",
    ],
    platforms: ["Advanced Zapier", "Airtable Pro", "Make", "Activepieces"],
    roi: "2-3x return typical",
    savings: "15-25 hours weekly",
    timeSavingsPercent: 0.7,
    popular: true,
  },
  {
    id: "enterprise-lite",
    tier: "Enterprise Lite",
    size: "large",
    price: 9000,
    priceDisplay: "Starting at $9,000",
    monthlySupport: 750,
    icon: Users,
    description: "Enterprise automation for established businesses",
    features: [
      "Everything in Growth Builder, plus:",
      "3 additional enterprise-grade workflows with machine learning (8 total)",
      "Advanced multi-base system with intelligent data sync",
      "AI-powered business intelligence suite",
      "AI Agent included",
      "Custom reporting with advanced analytics",
      "Enterprise dashboard with workflow orchestration",
      "Department-specific automation",
      "Strategic change management support",
    ],
    platforms: ["Enterprise Zapier + AI", "Advanced Airtable", "Make Pro", "Activepieces", "AI Integration"],
    roi: "3-4x return typical",
    savings: "30-50 hours weekly",
    timeSavingsPercent: 0.8,
    popular: false,
  },
];

export const getPackageBySize = (size: "small" | "medium" | "large"): Package | undefined => {
  return PACKAGES.find((pkg) => pkg.size === size);
};

export const getPackageById = (id: string): Package | undefined => {
  return PACKAGES.find((pkg) => pkg.id === id);
};
