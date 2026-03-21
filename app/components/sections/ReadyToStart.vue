<template>
  <section class="relative overflow-hidden min-h-[800px] p-20 flex flex-col">
    <!-- Background -->
    <img src="/images/ready-to-start-bg.svg" alt=""
         class="absolute inset-0 w-full h-full object-cover pointer-events-none"/>

    <!-- Smoke video -->
    <video
      src="/videos/smoke-2.mp4"
      autoplay loop muted playsinline
      class="absolute inset-0 w-full h-full object-cover pointer-events-none mix-blend-screen"
    />

    <!-- Driver image centered -->
    <div class="absolute top-[-5%] sm:top-[-15%] left-1/2 -translate-x-1/2 w-[829px] pointer-events-none">
      <img
        src="/images/ready-helmet.png"
        alt=""
        class="w-full object-cover"
      />
    </div>

    <div class="relative z-10 mx-auto flex flex-col flex-1 justify-between items-center gap-8">
      <div>
        <h2 class="text-[48px] text-[#000504] text-center leading-[1.6] font-normal">
          Ready to get started?
        </h2>
        <div class="flex flex-wrap items-center gap-x-20 gap-y-3 justify-center">
          <div v-for="point in points" :key="point" class="flex items-center gap-3">
            <span class="text-[#000504]/60">|</span>
            <p class="text-[#000504]/80 text-base font-medium">{{ point }}</p>
          </div>
        </div>
      </div>
      <AtomicButtonGlow label="START TRADING" href="#"/>
    </div>
  </section>
</template>

<script setup lang="ts">
const points = [
  'Trade on a proven framework.',
  'Qualify through performance.',
  'Get SimFi™ certified and earn.'
]
</script>
