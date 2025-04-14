import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import { flatConfigs as importFlatConfigs} from "eslint-plugin-import";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import sonarjs from "eslint-plugin-sonarjs";
import tseslint from "typescript-eslint";

const compat = new FlatCompat();

export default [
  {
    ignores: ["eslint.config.mjs"],
  },
  ...fixupConfigRules(compat.extends("airbnb")),
  sonarjs.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  importFlatConfigs.typescript,
  prettierRecommended,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
      "react-hooks": reactHooks,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2022,
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "no-shadow": "off",
      "no-undef": "off",
      "no-console": "off",
      "no-continue": "off",
      "no-plusplus": "off",
      "no-void": "off",
      "no-param-reassign": ["error", { props: false }],
      "no-useless-constructor": "off",
      "no-dupe-class-members": "off",
      "no-restricted-syntax": [
        "error",
        "ForInStatement",
        "LabeledStatement",
        "WithStatement",
      ],
      "sort-imports": "off",
      "lines-between-class-members": [
        "warn",
        "always",
        { exceptAfterSingleLine: true },
      ],
      "import/no-unresolved": "off",
      "import/named": "off",
      "import/default": "off",
      "import/namespace": "off",
      "import/no-restricted-paths": "off",
      "import/no-internal-modules": "off",
      "import/export": "off",
      "import/no-cycle": "off",
      "import/prefer-default-export": "off",
      "import/order": "off",
      "import/no-duplicates": "off",
      "import/no-extraneous-dependencies": "off",
      "import/no-self-import": "off",
      "import/no-import-module-exports": "off",
      "simple-import-sort/imports": ["error"],
      "react/prop-types": "off",
      "react/jsx-props-no-spreading": "off",
      "react/no-unescaped-entities": "off",
      "react/destructuring-assignment": [
        "warn",
        "always",
        { ignoreClassFields: true },
      ],
      "react/jsx-one-expression-per-line": "off",
      "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
      "react/jsx-no-duplicate-props": ["warn", { ignoreCase: false }],
      "react/jsx-no-useless-fragment": "off",
      "react/sort-comp": [
        "warn",
        {
          order: [
            "instance-variables",
            "static-methods",
            "lifecycle",
            "render",
            "everything-else",
          ],
          groups: {
            lifecycle: [
              "displayName",
              "propTypes",
              "contextTypes",
              "childContextTypes",
              "mixins",
              "statics",
              "defaultProps",
              "constructor",
              "getDefaultProps",
              "state",
              "getInitialState",
              "getChildContext",
              "getDerivedStateFromProps",
              "componentWillMount",
              "UNSAFE_componentWillMount",
              "componentDidMount",
              "componentWillReceiveProps",
              "UNSAFE_componentWillReceiveProps",
              "shouldComponentUpdate",
              "componentWillUpdate",
              "UNSAFE_componentWillUpdate",
              "getSnapshotBeforeUpdate",
              "componentDidUpdate",
              "componentDidCatch",
              "componentWillUnmount",
            ],
          },
        },
      ],
      "react/display-name": "warn",
      "react/prefer-stateless-function": "error",
      "react/no-unknown-property": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": [
        "warn",
        { enableDangerousAutofixThisMayCauseInfiniteLoops: true },
      ],
      "@typescript-eslint/consistent-type-assertions": [
        "warn",
        { assertionStyle: "as", objectLiteralTypeAssertions: "never" },
      ],
      "@typescript-eslint/explicit-module-boundary-types": ["off"],
      "no-unused-expressions": "off",
      "@typescript-eslint/no-unused-expressions": "error",
      "@typescript-eslint/array-type": ["warn", { default: "array-simple" }],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-member-accessibility": [
        "warn",
        { accessibility: "no-public" },
      ],
      "@typescript-eslint/no-empty-interface": ["warn"],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "no-use-before-define": ["off"],
      "@typescript-eslint/no-use-before-define": [
        "error",
        { functions: false },
      ],
      "@typescript-eslint/prefer-optional-chain": ["error"],
      "@typescript-eslint/prefer-nullish-coalescing": ["error"],
      "@typescript-eslint/no-extra-non-null-assertion": ["error"],
      "@typescript-eslint/unbound-method": ["off"],
    },
  },
];
