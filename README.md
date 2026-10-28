# @mirango/eslint-config

An ESLint configuration file that enforces company-wide frontend TypeScript and React best practices.

Requires ESLint 10, TypeScript 5.8+ and Prettier 3.

## Install

```
yarn add --dev @mirango/eslint-config eslint typescript prettier
```

## Usage

Create an `eslint.config.mjs` file in your project root:

```js
import mirango from "@mirango/eslint-config";

export default [
  ...mirango,
  {
    rules: {
      "modified-rule": "off",
    },
  },
];
```

Type-aware linting uses the nearest `tsconfig.json` of each file. If you run ESLint from a directory other than the project root (e.g. in a monorepo), set the root explicitly:

```js
{
  languageOptions: {
    parserOptions: { tsconfigRootDir: import.meta.dirname },
  },
}
```

## Migrating from 0.x

1.0.0 drops `eslint-config-airbnb` and requires ESLint 10 (Node `^20.19.0 || ^22.13.0 || >=24`).

- Upgrade `eslint` to 10. Remove `@eslint/compat`, `@eslint/eslintrc` and `@types/eslint` from your project if you only installed them for this config.
- Remove local overrides of `import/extensions` and `react/react-in-jsx-scope`; both are off now.
- `import/*` rules come from `eslint-plugin-import-x`. Overrides of rules it doesn't have will make ESLint report an unknown rule.
- New errors you may need to fix: `react/jsx-key`, `react/no-direct-mutation-state`, `no-constant-binary-expression`, `no-unused-private-class-members`, `no-empty-static-block`, `no-unassigned-vars`, `no-useless-assignment`, `preserve-caught-error`, `jsx-a11y/autocomplete-valid`, plus new `sonarjs` recommended rules.
- Many airbnb style rules are gone (e.g. `camelcase`, `no-underscore-dangle`, `prefer-destructuring`, propTypes rules). Re-enable any you want in your own config.

## Development

`yarn test` lints the fixtures in `test/` with this config. It runs automatically before `yarn publish`, so a broken config can't be released.
