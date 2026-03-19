<template>
  <!-- Outer wrapper: gradient border transparent → orange/32% -->
  <component
    :is="to ? 'NuxtLink' : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    class="relative inline-flex items-center justify-center rounded-full p-[3px] bg-gradient-to-r from-transparent to-[rgba(255,105,0,0.32)] hover:to-[rgba(255,105,0,0.5)] transition-all duration-200"
  >
    <!-- Orange glow ellipse right (matches Figma node 1:149 / 1:150) -->
    <span
      class="absolute right-0 top-1/2 -translate-y-1/2 w-[107px] h-10 pointer-events-none"
      style="background: radial-gradient(ellipse at right, rgba(255,105,0,0.45) 0%, transparent 70%);"
    />

    <!-- White pill button face -->
    <span class="relative flex items-center justify-center bg-white border border-white/50 rounded-full px-8 h-[42px] min-w-[162px] overflow-hidden">
      <!-- Inner orange glow on text shadow (Figma: text-shadow 0px 0px 56px black) -->
      <span
        class="font-bold text-black text-[14px] uppercase tracking-[-0.56px] leading-5 whitespace-nowrap"
        style="font-family: 'Aeonik', sans-serif; text-shadow: 0px 0px 56px black;"
      >
        <slot>{{ label }}</slot>
      </span>
    </span>
  </component>
</template>

<script setup lang="ts">
defineProps<{
  label?: string
  href?: string
  to?: string
}>()
</script>
