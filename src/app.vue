<template>
  <RouterLayout v-if="hasLayout">
    <RouterView />
  </RouterLayout>
  <RouterView v-else />

  <VueQueryDevtools />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { VueQueryDevtools } from '~/lib/query/devtools'
import { useMetaLayout } from '~/lib/router/composables'

const route = useRoute()
const RouterLayout = useMetaLayout()
const hasLayout = computed(() => Boolean(route.meta.layout))
</script>
