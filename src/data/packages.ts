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
    workflowBuilds: number;
    airtableBases: number;
    aiIntegrations: number;
    platformsSupported: string[];
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
    strategySessions: number;
  };
  developmentTeam: {
    customDevelopment: boolean;
    trainingIncluded: boolean;
    accountTeam: string;
  };
  guarantees: {
    sla: string;
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
    monthlyPrice: 1297,
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
      auditHours: 8,
      setupIncluded: true,
      description: "Complete automation audit and roadmap",
    },
    workflowInfrastructure: {
      workflowBuilds: 3,
      airtableBases: 1,
      aiIntegrations: 0,
      platformsSupported: ["Zapier", "Airtable", "Make"],
    },
    capacity: {
      monthlyTasks: "Up to 10,000",
      alertThresholds: [80, 95],
      overagePolicy: "Alert at 80% & 95%, help optimize to stay within tier",
    },
    supportMaintenance: {
      responseTime: "24-hour response",
      modificationHours: 3,
      modificationHoursRollover: "2 months",
      strategySessions: 1,
    },
    developmentTeam: {
      customDevelopment: false,
      trainingIncluded: true,
      accountTeam: "Email support",
    },
    guarantees: {
      sla: "99% uptime guarantee",
    },
    targetAudience: {
      employeeCount: "1-10 employees",
      businessStage: "Small businesses & startups",
    },
    expectedResults: {
      timeSaved: "10-15 hours weekly",
      roiMultiplier: "Positive ROI within 12 months",
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
    monthlyPrice: 2297,
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
      auditHours: 16,
      setupIncluded: true,
      description: "Comprehensive audit with advanced workflow mapping",
    },
    workflowInfrastructure: {
      workflowBuilds: 5,
      airtableBases: 2,
      aiIntegrations: 1,
      platformsSupported: ["Advanced Zapier", "Airtable Pro", "Make", "Activepieces"],
    },
    capacity: {
      monthlyTasks: "Up to 25,000",
      alertThresholds: [80, 95],
      overagePolicy: "Alert at 80% & 95%, help optimize or prorated upgrade",
    },
    supportMaintenance: {
      responseTime: "12-hour response",
      modificationHours: 5,
      modificationHoursRollover: "3 months",
      strategySessions: 2,
    },
    developmentTeam: {
      customDevelopment: true,
      trainingIncluded: true,
      accountTeam: "Dedicated account manager",
    },
    guarantees: {
      sla: "99.5% uptime guarantee",
    },
    targetAudience: {
      employeeCount: "10-50 employees",
      businessStage: "Growing businesses scaling operations",
    },
    expectedResults: {
      timeSaved: "15-25 hours weekly",
      roiMultiplier: "2-3x return typical",
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
    monthlyPrice: 4297,
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
      auditHours: 32,
      setupIncluded: true,
      description: "Enterprise-grade audit with department-specific analysis",
    },
    workflowInfrastructure: {
      workflowBuilds: 8,
      airtableBases: 4,
      aiIntegrations: 2,
      platformsSupported: ["Enterprise Zapier", "Advanced Airtable", "Make Pro", "Activepieces", "AI Platforms"],
    },
    capacity: {
      monthlyTasks: "Up to 50,000",
      alertThresholds: [80, 95],
      overagePolicy: "Priority optimization support with flexible scaling",
    },
    supportMaintenance: {
      responseTime: "4-hour response",
      modificationHours: 10,
      modificationHoursRollover: "3 months",
      strategySessions: 4,
    },
    developmentTeam: {
      customDevelopment: true,
      trainingIncluded: true,
      accountTeam: "Dedicated account team with strategic advisor",
    },
    guarantees: {
      sla: "99.9% uptime guarantee with priority support",
    },
    targetAudience: {
      employeeCount: "50+ employees",
      businessStage: "Established businesses requiring enterprise solutions",
    },
    expectedResults: {
      timeSaved: "30-50 hours weekly",
      roiMultiplier: "3-4x return typical",
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
