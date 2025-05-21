import '~/assets/styles/tailwind.css'

import { VueQueryPlugin } from '@tanstack/vue-query'
import { createApp } from 'vue'

import App from '~/app.vue'
import { router } from '~/router'

const app = createApp(App)

app.use(router)
app.use(
  VueQueryPlugin,
  /** @type {import("@tanstack/vue-query").VueQueryPluginOptions} */ ({
    enableDevtoolsV6Plugin: true,
  }),
)

app.mount('#app')
