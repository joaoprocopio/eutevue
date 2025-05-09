import { includeIgnoreFile } from '@eslint/compat'
import js from '@eslint/js'
import query from '@tanstack/eslint-plugin-query'
import prettier from '@vue/eslint-config-prettier'
import { defineConfig } from 'eslint/config'
import importsort from 'eslint-plugin-simple-import-sort'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import path from 'path'
import url from 'url'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const __gitignore = path.resolve(__dirname, '.gitignore')

const config = defineConfig([
  includeIgnoreFile(__gitignore),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    plugins: {
      'simple-import-sort': importsort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  query.configs['flat/recommended'],
  prettier,
])

export default config
