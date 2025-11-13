import { Zap, TrendingUp, Users, LucideIcon } from "lucide-react";

export interface Package {
  id: string;
  tier: string;
  size: "small" | "medium" | "large";
  monthlyPrice: number;
  setupFee: number;
  icon: LucideIcon;
  headline: string;
  keyBenefits: [string, string, string];
  outcomeStatement: string;
  popular: boolean;
  commitmentMonths: number;
  moneyBackGuaranteeDays: number;
}

export const PACKAGES: Package[] = [
  {
    id: "ai-starter",
    tier: "AI Starter",
    size: "small",
    monthlyPrice: 1497,
    setupFee: 0,
    icon: Zap,
    headline: "Get Your First 2 Workflows Automated",
    keyBenefits: [
      "2 custom workflows built for you",
      "10,000 monthly tasks included",
      "24-hour support response"
    ],
    outcomeStatement: "Save 10-15 hours weekly",
    popular: false,
    commitmentMonths: 3,
    moneyBackGuaranteeDays: 14,
  },
  {
    id: "ai-growth",
    tier: "AI Growth",
    size: "medium",
    monthlyPrice: 2497,
    setupFee: 0,
    icon: TrendingUp,
    headline: "Automation + Your First AI Chatbot",
    keyBenefits: [
      "5 advanced workflows + 1 AI chatbot",
      "25,000 monthly tasks included",
      "12-hour priority support"
    ],
    outcomeStatement: "Save 20-30 hours weekly with AI",
    popular: true,
    commitmentMonths: 6,
    moneyBackGuaranteeDays: 30,
  },
  {
    id: "ai-powerhouse",
    tier: "AI Powerhouse",
    size: "large",
    monthlyPrice: 4997,
    setupFee: 0,
    icon: Users,
    headline: "Full AI-Powered Operations",
    keyBenefits: [
      "10 complex workflows + 3 AI chatbots",
      "100,000 monthly tasks included",
      "4-hour dedicated support"
    ],
    outcomeStatement: "Save 40-60 hours weekly across your team",
    popular: false,
    commitmentMonths: 12,
    moneyBackGuaranteeDays: 60,
  },
];

export const getPackageBySize = (size: "small" | "medium" | "large"): Package | undefined => {
  return PACKAGES.find((pkg) => pkg.size === size);
};

export const getPackageById = (id: string): Package | undefined => {
  return PACKAGES.find((pkg) => pkg.id === id);
};
