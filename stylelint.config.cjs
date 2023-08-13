'use strict';

module.exports = {
  extends: ['stylelint-config-xo', 'stylelint-config-prettier'],
  rules: {
    'function-whitespace-after': null,
    'media-feature-range-operator-space-after': null,
    'media-feature-range-operator-space-before': null,
    'alpha-value-notation': 'number',
    'color-function-notation': 'legacy',
  },
};
