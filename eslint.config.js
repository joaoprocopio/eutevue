import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import prettier from '@vue/eslint-config-prettier'
import { includeIgnoreFile } from '@eslint/compat'
import path from 'path'
import url from 'url'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const __gitignore = path.resolve(__dirname, '.gitignore')

export default defineConfig([
  includeIgnoreFile(__gitignore),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  prettier,
])
