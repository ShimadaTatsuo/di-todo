module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  overrides: [
    {
      files: [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)",
      ],
      extends: ["plugin:jest-dom/recommended", "plugin:testing-library/react"],
    },
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "vite.config.ts",
    "vitest.setup.ts",
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react-refresh",
    "@typescript-eslint",
    "jest-dom",
    "testing-library",
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
