'use strict';

module.exports = {
  '**/*.{js,cjs}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `eslint ${filenames.join(' ')}`,
  ],
  '**/*.{ts,tsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `eslint ${filenames.join(' ')}`,
    'tsc --noEmit',
  ],
  '**/*.css': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `stylelint ${filenames.join(' ')}`,
  ],
  '**/*.html': (filenames) => [`prettier --write ${filenames.join(' ')}`],
  '**/*.json': (filenames) => [`prettier --write ${filenames.join(' ')}`],
  '**/*.md': (filenames) => [`prettier --write ${filenames.join(' ')}`],
};
