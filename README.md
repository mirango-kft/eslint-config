# @mirango/eslint-config

An ESLint configuration file that enforces company-wide frontend TypeScript and React best practices.

## Install

```
yarn add --dev @mirango/eslint-config
```

## Usage

Install all required packages:

```
yarn add --dev eslint typescript prettier
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