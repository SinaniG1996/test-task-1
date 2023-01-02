module.exports = {
  globals: {
      "ts-jest": {
          tsconfig: "tsconfig.json"
      }
  },
  setupFiles: ["<rootDir>/global-setup.ts"],
  moduleFileExtensions: [
      "ts",
      "js"
  ],
  transform: {
      "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testMatch: [
      "**/*.test.(ts|js)"
  ],
  testEnvironment: "node"
};