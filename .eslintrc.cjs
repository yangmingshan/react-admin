'use strict';

module.exports = {
  root: true,
  extends: [
    'xo',
    require.resolve('xo/config/plugins.cjs'),
    'xo-react',
    'prettier',
  ],
  plugins: ['react-refresh'],
  ignorePatterns: ['dist', 'vite.config.ts'],
  rules: {
    'no-console': 'error',
    'import/extensions': 'off',
    'n/file-extension-in-import': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['xo-typescript', 'prettier'],
      parserOptions: {
        jsxPragma: null,
        project: './tsconfig.json',
      },
    },
  ],
};
