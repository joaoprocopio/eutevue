import { defineAsyncComponent } from 'vue'

import { env } from '~/env'

export default env.DEV
  ? defineAsyncComponent(
      async () => (await import('@tanstack/vue-query-devtools')).VueQueryDevtools,
    )
  : undefined
