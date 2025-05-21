<script setup>
import { computed, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'

import DevtoolsVueQuery from '~/components/devtools/vue-query'
import { isComp, isFn, isNil } from '~/utils/is'

const route = useRoute()

const layout = computed(() => route.meta.layout)
const layoutLoading = computed(() => route.meta.layoutLoading)
const layoutError = computed(() => route.meta.layoutError)

const RouterLayout = computed(() =>
  safeExtractComponent(layout.value, {
    loadingComponent: safeExtractComponent(layoutLoading.value),
    errorComponent: safeExtractComponent(layoutError.value),
  }),
)

/**
 * @param {Omit<import("vue").AsyncComponentOptions, "loader" | "suspensible">} options
 */
function safeExtractComponent(component, options = {}) {
  switch (true) {
    case isNil(component):
      return undefined

    case isComp(component):
      return component

    case isFn(component):
      return defineAsyncComponent({
        ...options,
        suspensible: false,
        loader: component,
      })

    default:
      return undefined
  }
}
</script>

<template>
  <RouterLayout v-if="layout">
    <RouterView />
  </RouterLayout>
  <RouterView v-else />

  <DevtoolsVueQuery />
</template>
