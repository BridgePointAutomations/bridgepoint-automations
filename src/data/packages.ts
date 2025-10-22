import { Zap, TrendingUp, Users, LucideIcon } from "lucide-react";

export interface Package {
  id: string;
  tier: string;
  size: "small" | "medium" | "large";
  monthlyPrice: number;
  setupFee: number;
  icon: LucideIcon;
  description: string;
  popular: boolean;
  commitmentTerms: {
    minimumMonths: number;
    cancellationNoticeDays: number;
    postCommitmentTerms: string;
    annualPrepayDiscount: {
      monthsFree: number;
      percentSavings: number;
      totalSavings: number;
    };
  };
  setupOnboarding: {
    auditHours: number;
    setupIncluded: boolean;
    description: string;
  };
  workflowInfrastructure: {
    workflowBuilds: number | string; // Support "Unlimited"
    airtableBases: string; // "1 basic", "2 with analytics", "Unlimited + advanced"
    aiIntegrations: number | string; // Support "Full AI suite"
    platformsSupported: string[];
    platformCount: number | string; // 3, 7, "Unlimited"
    platformIntegrations: number | string; // 2, 4, "Unlimited"
  };
  capacity: {
    monthlyTasks: string;
    alertThresholds: number[];
    overagePolicy: string;
  };
  supportMaintenance: {
    responseTime: string;
    modificationHours: number;
    modificationHoursRollover: string;
    strategySessions: string; // "Bi-annual", "Quarterly", "Monthly"
  };
  developmentTeam: {
    customDevelopment: boolean | string; // false, "Limited", "5 hrs/month"
    trainingIncluded: boolean;
    trainingDescription: string; // "2 hours initial", "Comprehensive", "White-glove + ongoing"
    accountTeam: string;
  };
  guarantees: {
    sla: string | boolean; // Support false for "None"
  };
  targetAudience: {
    employeeCount: string;
    businessStage: string;
  };
  expectedResults: {
    timeSaved: string;
    roiMultiplier: string;
  };
  alwaysIncluded: string[];
}

export const PACKAGES: Package[] = [
  {
    id: "essentials",
    tier: "Essentials",
    size: "small",
    monthlyPrice: 1097,
    setupFee: 0,
    icon: Zap,
    description: "Perfect for small businesses seeking initial automation wins",
    popular: false,
    commitmentTerms: {
      minimumMonths: 6,
      cancellationNoticeDays: 30,
      postCommitmentTerms: "Month-to-month after initial term",
      annualPrepayDiscount: {
        monthsFree: 2,
        percentSavings: 17,
        totalSavings: 3108,
      },
    },
    setupOnboarding: {
      auditHours: 3,
      setupIncluded: true,
      description: "Complete automation audit and roadmap",
    },
    workflowInfrastructure: {
      workflowBuilds: 3,
      airtableBases: "1 basic",
      aiIntegrations: 0,
      platformsSupported: ["Zapier", "Airtable", "Make"],
      platformCount: 3,
      platformIntegrations: 2,
    },
    capacity: {
      monthlyTasks: "10,000",
      alertThresholds: [80, 95],
      overagePolicy: "Alert at 80% & 95%, help optimize to stay within tier",
    },
    supportMaintenance: {
      responseTime: "24 hours",
      modificationHours: 1,
      modificationHoursRollover: "No rollover",
      strategySessions: "Bi-annual",
    },
    developmentTeam: {
      customDevelopment: false,
      trainingIncluded: true,
      trainingDescription: "2 hours initial",
      accountTeam: "Email support",
    },
    guarantees: {
      sla: false,
    },
    targetAudience: {
      employeeCount: "1-10 employees",
      businessStage: "Small businesses & startups",
    },
    expectedResults: {
      timeSaved: "10-15 hours weekly",
      roiMultiplier: "2-3x",
    },
    alwaysIncluded: [
      "Bug fixes and error resolution",
      "Platform API updates",
      "Security patches",
      "Performance optimization",
      "System health monitoring",
      "Monthly reporting",
      "Email support within stated SLA",
    ],
  },
  {
    id: "growth-accelerator",
    tier: "Growth Accelerator",
    size: "medium",
    monthlyPrice: 2097,
    setupFee: 0,
    icon: TrendingUp,
    description: "Comprehensive automation for growing businesses",
    popular: true,
    commitmentTerms: {
      minimumMonths: 6,
      cancellationNoticeDays: 30,
      postCommitmentTerms: "Month-to-month after initial term",
      annualPrepayDiscount: {
        monthsFree: 2,
        percentSavings: 17,
        totalSavings: 5508,
      },
    },
    setupOnboarding: {
      auditHours: 8,
      setupIncluded: true,
      description: "Comprehensive audit with advanced workflow mapping",
    },
    workflowInfrastructure: {
      workflowBuilds: 7,
      airtableBases: "2 with analytics",
      aiIntegrations: 1,
      platformsSupported: ["Advanced Zapier", "Airtable Pro", "Make", "Activepieces", "Slack", "QuickBooks", "Salesforce"],
      platformCount: 7,
      platformIntegrations: 4,
    },
    capacity: {
      monthlyTasks: "25,000",
      alertThresholds: [80, 95],
      overagePolicy: "Alert at 80% & 95%, help optimize or prorated upgrade",
    },
    supportMaintenance: {
      responseTime: "4 hours",
      modificationHours: 3,
      modificationHoursRollover: "1-month rollover",
      strategySessions: "Quarterly",
    },
    developmentTeam: {
      customDevelopment: "Limited",
      trainingIncluded: true,
      trainingDescription: "Comprehensive",
      accountTeam: "Priority specialist",
    },
    guarantees: {
      sla: false,
    },
    targetAudience: {
      employeeCount: "10-50 employees",
      businessStage: "Growing businesses scaling operations",
    },
    expectedResults: {
      timeSaved: "20-30 hours weekly",
      roiMultiplier: "2.5-4x",
    },
    alwaysIncluded: [
      "Bug fixes and error resolution",
      "Platform API updates",
      "Security patches",
      "Performance optimization",
      "System health monitoring",
      "Monthly reporting",
      "Email support within stated SLA",
    ],
  },
  {
    id: "enterprise-scale",
    tier: "Enterprise Scale",
    size: "large",
    monthlyPrice: 4097,
    setupFee: 0,
    icon: Users,
    description: "Enterprise automation for established businesses",
    popular: false,
    commitmentTerms: {
      minimumMonths: 12,
      cancellationNoticeDays: 60,
      postCommitmentTerms: "Month-to-month after initial term",
      annualPrepayDiscount: {
        monthsFree: 2,
        percentSavings: 17,
        totalSavings: 10308,
      },
    },
    setupOnboarding: {
      auditHours: 20,
      setupIncluded: true,
      description: "Enterprise-grade audit with department-specific analysis",
    },
    workflowInfrastructure: {
      workflowBuilds: "Unlimited",
      airtableBases: "Unlimited + advanced",
      aiIntegrations: "Full AI suite",
      platformsSupported: ["Enterprise Zapier", "Advanced Airtable", "Make Pro", "Activepieces", "AI Platforms", "HubSpot", "Salesforce", "Custom APIs"],
      platformCount: "Unlimited",
      platformIntegrations: "Unlimited",
    },
    capacity: {
      monthlyTasks: "100,000",
      alertThresholds: [80, 95],
      overagePolicy: "Priority optimization support with flexible scaling",
    },
    supportMaintenance: {
      responseTime: "2 hours",
      modificationHours: 8,
      modificationHoursRollover: "3-month rollover",
      strategySessions: "Monthly",
    },
    developmentTeam: {
      customDevelopment: "5 hrs/month",
      trainingIncluded: true,
      trainingDescription: "White-glove + ongoing",
      accountTeam: "Dedicated team",
    },
    guarantees: {
      sla: "99.5% uptime",
    },
    targetAudience: {
      employeeCount: "50+ employees",
      businessStage: "Established businesses requiring enterprise solutions",
    },
    expectedResults: {
      timeSaved: "40-60 hours weekly",
      roiMultiplier: "3-5x",
    },
    alwaysIncluded: [
      "Bug fixes and error resolution",
      "Platform API updates",
      "Security patches",
      "Performance optimization",
      "System health monitoring",
      "Monthly reporting",
      "Email support within stated SLA",
    ],
  },
];

export const getPackageBySize = (size: "small" | "medium" | "large"): Package | undefined => {
  return PACKAGES.find((pkg) => pkg.size === size);
};

export const getPackageById = (id: string): Package | undefined => {
  return PACKAGES.find((pkg) => pkg.id === id);
};
