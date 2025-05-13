<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView v-slot="page">
    <component :is="page.Component" />
  </RouterView>
  <!-- <RouterView name="layout" v-slot="layout">
    <component :is="layout.Component">asdf</component>
  </RouterView> -->
</template>
