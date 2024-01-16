# @mirango/eslint-config

An ESLint configuration file that enforces company-wide frontend TypeScript and React best practices.

## Install

```
yarn add --dev @mirango/eslint-config
```

## Usage

Install [`typescript-eslint`](https://typescript-eslint.io/getting-started):

```
yarn add --dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript
```

Install `prettier`:

```
yarn add --dev prettier
```

Modify your `.eslintrc.json` file:

```json
{
  "parserOptions": {
    "project": "tsconfig.json"
  },
  "extends": ["@mirango/eslint-config"],
  "rules": {
    "modified-rule": "off"
  }
}
```