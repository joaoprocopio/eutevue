<template>
  <RouterLayout v-if="hasLayout">
    <RouterView />
  </RouterLayout>
  <RouterView v-else />
  <DevtoolsVueQuery />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import DevtoolsVueQuery from '~/components/devtools/vue-query'
import { useMetaLayout } from '~/composables/use-meta-layout'

const route = useRoute()
const hasLayout = computed(() => Boolean(route.meta.layout))

const RouterLayout = useMetaLayout()
</script>
