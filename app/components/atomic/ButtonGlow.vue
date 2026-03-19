<template>
  <div class="relative inline-flex">
    <!-- Gradient border: mask вырезает центр, виден только 0.84px кольцо -->
    <div
      class="absolute inset-0 rounded-[835.498px]"
      style="
        background: linear-gradient(90deg, rgba(255,105,0,0) 0%, rgba(255,105,0,0.64) 100%);
        padding: 0.84px;
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask-composite: exclude;
        -webkit-mask-composite: destination-out;
      "
    ></div>

    <!-- Inner wrapper: прозрачный, border просвечивает через маску -->
    <div
      class="relative inline-flex rounded-[835.498px] p-[3.345px] transition-all duration-200"
      style="background: transparent;"
    >
      <!-- Ellipse glow 1 (node 1:149) -->
      <span class="absolute pointer-events-none w-[107px] h-[40px] right-[-0.82px] top-1/2 -translate-y-1/2">
        <img :src="glow1" alt="" class="absolute max-w-none block w-[160px] h-[93px] top-[-26.5px] left-[-26.75px]" />
      </span>
      <!-- Ellipse glow 2 (node 1:150) -->
      <span class="absolute pointer-events-none w-[107px] h-[40px] right-[-0.82px] top-1/2 -translate-y-1/2">
        <img :src="glow2" alt="" class="absolute max-w-none block w-[134px] h-[67px] top-[-13.3px] left-[-13.4px]" />
      </span>

      <!-- Transparent container (1:151) -->
      <div class="flex items-center justify-center p-[4px] rounded-[835.498px]" style="background: transparent;">
        <!-- White pill button (1:155) -->
        <UButton
          :href="href"
          :to="to"
          :ui="{
            base: 'relative inline-flex items-center justify-center bg-white border border-white/50 rounded-full px-[33px] h-[42px] overflow-hidden cursor-pointer hover:bg-white/90 transition-colors',
          }"
        >
          <span class="text-[14px] not-italic font-bold leading-5 tracking-[-0.56px] uppercase text-black [text-shadow:0_0_56px_#000] [font-feature-settings:'liga'_off,'calt'_off] whitespace-nowrap">
            <slot>{{ label }}</slot>
          </span>
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import glow1 from '~/assets/svg/button-glow-1.svg'
import glow2 from '~/assets/svg/button-glow-2.svg'

defineProps<{
  label?: string
  href?: string
  to?: string
}>()
</script>
