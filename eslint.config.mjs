import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

import stylistic from '@stylistic/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/block-spacing': ['error', 'always'],
      '@stylistic/comma-spacing': ['error', { before: false, after: true }],
      '@stylistic/max-len': ['error', {
        code: 100,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      }],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/object-property-newline': ['error', {
        allowAllPropertiesOnSameLine: true,
        allowMultiplePropertiesPerLine: false,
      }],
      '@stylistic/jsx-quotes': ['error', 'prefer-double'],
    },
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'plugin:tailwindcss/recommended'),
];

export default eslintConfig;
