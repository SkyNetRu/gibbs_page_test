<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>

<script setup lang="ts">
useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' }],
  htmlAttrs: { lang: 'en' }
})
useSeoMeta({
  title: 'E8Markets — Trade. Learn. Earn.',
  description: 'Performance-based payouts. Simulated trading environment. No shortcuts — just skill.'
})
</script>
