import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({ dir: "./" });

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  collectCoverageFrom: [
    "src/services/auth/validation.ts",
    "src/components/login-form.tsx",
    "src/components/task-form.tsx",
    "src/components/dashboard/ServerTaskSummary.tsx",
    "src/app/api/login/route.ts",
  
    "!src/**/*.d.ts",
    "!src/**/__tests__/**"
  ],

  coverageThreshold: {
    global: {
      statements: 85,
      branches: 80,
      functions: 85,
      lines: 85,
    },
  },
};

export default createJestConfig(config);