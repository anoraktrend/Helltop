import {createRequire} from 'module';
const require = createRequire(import.meta.url);
import ignores from './eslint.ignores.js';

const gts = require('gts');

export default [
  {
    ignores,
  },
  ...gts.map(config => ({
    ...config,
    languageOptions: {
      ...config.languageOptions,
      sourceType: 'module',
    },
  })),
];
