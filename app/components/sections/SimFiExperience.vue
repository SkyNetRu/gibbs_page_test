<template>
  <section class="relative min-h-screen overflow-hidden">
    <!-- Background layer 1: warm gradient, centered at bottom, flipped -->
    <div class="absolute w-full h-[1224px] pointer-events-none flex items-center justify-center">
      <div class="-scale-y-100 rotate-180 flex-none w-full h-full">
        <img
          src="/images/simfi-bg-1.svg"
          alt=""
          class="w-full h-full"
        >
      </div>
    </div>
    <!-- Background layer 2: soft-light accent, flipped -->
    <div class="absolute bottom-[-5px] left-0 w-full h-[3368px] pointer-events-none mix-blend-soft-light flex items-center justify-center">
      <div class="-scale-y-100 flex-none w-full h-full">
        <img
          src="/images/simfi-bg-2.svg"
          alt=""
          class="w-full h-full"
        >
      </div>
    </div>

    <!-- Content -->
    <div class="relative z-10 w-full px-4 max-w-[1440px] lg:px-[80px] py-[122px] flex flex-col justify-between min-h-screen mx-auto gap-[80px]">
      <!-- Phone plaque -->
      <div class="absolute w-[779px] h-[717px] pointer-events-none hidden md:block right-[-60%] md:right-[-50%] xl:right-0 top-[-123px]">
        <img
          src="/images/simfi-payout-plaque.png"
          alt=""
          class="absolute inset-0 w-full h-full object-cover"
        >
      </div>

      <!-- Top: text block -->
      <div class="flex flex-col gap-[32px] w-full md:max-w-[50%] lg:w-[600px]">
        <h2
          class="font-schibsted text-[48px] font-normal text-[#441306] leading-[1.4] [font-feature-settings:'calt'_0,'liga'_0]"
        >
          The SimFi™ experience
        </h2>
        <div class="flex flex-col gap-[12px]">
          <div
            v-for="item in simfiPoints"
            :key="item"
            class="flex items-center gap-[12px]"
          >
            <img
              src="/images/simfi-bullet.svg"
              alt=""
              class="w-[14px] h-[14px] shrink-0"
            >
            <p
              class="font-schibsted text-[#441306] text-[16px] leading-[1.4] opacity-80 [font-feature-settings:'calt'_0,'liga'_0]"
            >
              {{ item }}
            </p>
          </div>
        </div>
        <div class="flex">
          <AtomicButtonSecondary
            label="START TRADING"
            href="#"
            variant="filled"
          />
        </div>
      </div>

      <!-- Bottom: live earnings board -->
      <LiveEarningsBoard />
    </div>
  </section>
</template>

<script setup lang="ts">
const simfiPoints = [
  'Simulated Finance™ is not a shortcut. It is a structured performance environment.',
  'We license trader performance data, analyze behavioral patterns, and build risk models designed to develop disciplined, capital-ready professionals.',
  'You trade. We measure. Performance unlocks opportunity.'
]
</script>
