<template>
  <UButton
    :href="href"
    :to="to"
    color="neutral"
    variant="link"
    :ui="{ base: `button-secondary button-secondary--${variant} relative inline-flex items-center justify-center rounded-full border border-white/50 px-[33px] h-[50px] cursor-pointer transition-colors` }"
  >
    <span class="button-secondary__text text-[14px] not-italic font-bold leading-5 tracking-[-0.56px] uppercase whitespace-nowrap [font-feature-settings:'liga'_off,'calt'_off]">
      <slot>{{ label }}</slot>
    </span>
  </UButton>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  label?: string
  href?: string
  to?: string
  variant?: 'ghost' | 'filled'
}>(), {
  variant: 'ghost'
})
</script>

<style lang="scss" scoped>
.button-secondary {
  // ─── Ghost variant (dark with radial gradient) ───
  &--ghost {
    &:hover {
      background: radial-gradient(ellipse at center, rgba(255,255,255,0.18) 0%, rgba(0,0,0,0.5) 75%);
    }

    :deep(.button-secondary__text) {
      color: #ffffff;
      text-shadow: 0 0 56px #000;
    }
  }

  // ─── Filled variant (white) ───
  &--filled {
    background: #ffffff;

    &:hover { background: rgba(255, 255, 255, 0.9); }

    :deep(.button-secondary__text) {
      color: #000000;
      text-shadow: 0 0 56px #000;
    }
  }
}
</style>
