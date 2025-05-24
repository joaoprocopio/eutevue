import '~/assets/styles/tailwind.css'

import { VueQueryPlugin } from '@tanstack/vue-query'
import { createApp } from 'vue'

import App from '~/app.vue'
import { router } from '~/lib/router/plugin'
import { theme } from '~/lib/theme/plugin'

const app = createApp(App)

// TODO: a aplicação precisa ser pré-renderizada pra que isso daqui não cause FOUC (Flash of Unstyled Content)
app.use(theme)
app.use(router)
app.use(VueQueryPlugin)

app.mount('#__vue')
