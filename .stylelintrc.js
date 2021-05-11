module.exports = {
  processors: [],
  plugins: [],
  extends: 'stylelint-config-standard',
  ignoreFiles: ['node_modules/**', 'dist/**'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'layer', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
  },
}
