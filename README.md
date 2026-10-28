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

## Development

`yarn test` lints the fixtures in `test/` with this config. It runs automatically before `yarn publish`, so a broken config can't be released.
