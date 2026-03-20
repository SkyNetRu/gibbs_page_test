<template>
  <section class="relative min-h-[800px] overflow-hidden py-20">
    <!-- Background -->
    <img
      src="/images/howyoulearn-mountain.png"
      alt=""
      class="absolute inset-0 w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#000504]/80"></div>

    <!-- Content -->
    <div class="relative z-10 max-w-[1440px] mx-auto px-20 flex justify-end py-24">
      <div class="w-[600px] flex flex-col gap-24">
        <div class="flex flex-col gap-6">
          <h2 class="text-[48px] text-white leading-[1.2]">
            How <span class="lowercase">You Learn While You Earn</span>
          </h2>
          <div class="flex flex-col gap-6">
            <div v-for="(step, i) in steps" :key="i" class="flex items-center gap-3">
              <span class="text-white font-bold text-sm w-5 text-center opacity-80">{{ i + 1 }}</span>
              <p class="text-white/80 font-medium text-base">{{ step }}</p>
            </div>
          </div>
          <a href="#" class="self-start bg-white text-black text-sm font-bold uppercase tracking-[-0.56px] rounded-full px-8 py-3 hover:opacity-90 transition-opacity">
            START TRADING
          </a>
        </div>

        <!-- Disclaimer -->
        <div class="flex flex-col gap-6">
          <p class="text-white/60 text-sm italic leading-relaxed max-w-[397px]">
            E8 is a SaaS educational simulation built for skills training, data collection, and analytical modeling. There is no live-capital or margin risk. Enrollment fees purchase access to the simulation & assessment; payouts are discretionary, not guaranteed, and contingent on E8's acceptance & licensing of your performance data.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  'Trade on a proven framework.',
  'Qualify through performance.',
  'Get SimFi™ certified — and earn real payouts.'
]
</script>
