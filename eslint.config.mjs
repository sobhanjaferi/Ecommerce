import { defineConfig, globalIgnores } from 'eslint/config'

import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'no-var': 'error',
      'no-duplicate-imports': 'error',
      'no-duplicate-case': 'error',
      'no-unreachable': 'error',
      'no-empty': 'error',
    },
  },

  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
])

export default eslintConfig
