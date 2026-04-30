export enum MigrationStrategy {
  REHOST = "REHOST",
  REPLATFORM = "REPLATFORM",
  REFACTOR = "REFACTOR",
  REPURCHASE = "REPURCHASE",
  RETAIN = "RETAIN",
  RETIRE = "RETIRE",
  RELOCATE = "RELOCATE"
}

export enum AssetType {
  VIRTUAL_MACHINE = "VIRTUAL_MACHINE",
  DATABASE = "DATABASE",
  STORAGE = "STORAGE",
  NETWORKING = "NETWORKING",
  LICENSE = "LICENSE",
  LABOR = "LABOR"
}

export interface ApplicationAsset {
  id: string;
  name: string;
  description: string;
  strategy: MigrationStrategy;
  criticality: "MISSION_CRITICAL" | "BUSINESS_CRITICAL" | "OPERATIONAL" | "ADMINISTRATIVE";
  currentAnnualCost: number;
  projectedCloudAnnualCost: number;
  migrationEffortDays: number;
  migrationCost: number;
  complexityScore: number; // 1-100
  riskScore: number; // 1-100
}

export interface BusinessCaseSummary {
  totalOnPremTCO: number; // 5 year
  totalCloudTCO: number; // 5 year
  netSavings: number;
  roiPercentage: number;
  npv: number;
  paybackPeriodMonths: number;
  totalMigrationCost: number;
  breakEvenDate: string;
}

export interface ScenarioSimulation {
  id: string;
  name: string;
  assumptions: {
    discountRate: number;
    cloudInflation: number;
    laborInflation: number;
    migrationEfficiency: number;
  };
  results: BusinessCaseSummary;
}
