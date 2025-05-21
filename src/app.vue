<script setup>
import { computed, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const layoutFn = computed(() => route.meta.layoutFn)

const Layout = computed(() =>
  layoutFn.value
    ? defineAsyncComponent({
        loader: layoutFn.value,
      })
    : undefined,
)
</script>

<template>
  <Layout v-if="layoutFn">
    <RouterView />
  </Layout>
  <RouterView v-else />
</template>
