module.exports = {
  extends: [
    "standard",
    "standard-react",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    "react/prop-types": 0,
    "react/jsx-curly-newline": 0,
    "func-style": ["error", "expression"],
    "no-nested-ternary": "error",
    curly: ["error", "all"],
    "arrow-body-style": ["error", "as-needed"],
    "@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "^_" }],
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
        },
        groups: [
          ["builtin", "external"],
          "internal",
          "parent",
          ["sibling", "index"],
        ],
        "newlines-between": "always",
      },
    ],
  },
};
