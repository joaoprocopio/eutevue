import { defineAsyncComponent } from 'vue'

import { env } from '~/env'

export const VueQueryDevtools = env.DEV
  ? defineAsyncComponent(
      async () => (await import('@tanstack/vue-query-devtools')).VueQueryDevtools,
    )
  : undefined
