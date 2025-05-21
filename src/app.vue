<script setup>
import { computed, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'

import { isComp, isFn, isNil } from '~/utils/is'

const route = useRoute()
const layout = computed(() => route.meta.layout)
const Layout = computed(() => {
  switch (true) {
    case isNil(layout.value):
      return undefined
    case isFn(layout.value):
      return defineAsyncComponent({
        loader: layout.value,
        suspensible: true,
      })
    case isComp(layout.value):
      return layout.value
    default:
      return undefined
  }
})
</script>

<template>
  <Layout v-if="layout">
    <RouterView />
  </Layout>
  <RouterView v-else />
</template>
