<template>
  <section class="relative min-h-[800px] overflow-hidden">
    <!-- Background -->
    <img
      src="/images/howyoulearn-bg.svg"
      alt=""
      width="1440"
      height="800"
      loading="lazy"
      class="absolute inset-0 w-full h-full object-cover pointer-events-none"
    >

    <!-- Smoke video -->
    <AtomicSmokeVideo />

    <!-- Background image: above gradients -->
    <img
      src="/images/howyoulearn-mountain.png"
      alt="Mountain landscape background"
      width="1440"
      height="800"
      loading="lazy"
      class="absolute inset-0 w-full h-full object-cover object-[20%_center] sm:object-[40%_center] max-h-full lg:w-auto lg:object-[left_center]"
    >

    <!-- Content: right-aligned -->
    <div class="relative z-10 max-w-[1440px] mx-auto px-4 lg:px-[80px] py-[80px] flex justify-end">
      <div class="lg:w-[600px] flex flex-col gap-[126px]">
        <!-- Main block -->
        <div class="flex flex-col gap-6 max-w-[600px] sm:bg-transparent sm:shadow-none sm:backdrop-blur-none rounded-2xl sm:rounded-none bg-black/30 backdrop-blur-sm shadow-[0_0_60px_40px_rgba(0,0,0,0.35)] p-4 md:p-0">
          <h2 class="max-w-[337px] text-[48px] text-white leading-[1.2] [font-feature-settings:'calt'_0,'liga'_0]">
            How You Learn While You Earn
          </h2>

          <!-- Steps -->
          <div class="flex flex-col gap-6 text-base">
            <div
              v-for="(step, i) in steps"
              :key="i"
              class="flex items-center gap-3"
            >
              <span
                class="font-schibsted font-bold text-white/80 w-5 h-5 flex items-center justify-center shrink-0 text-base leading-none tracking-[-0.32px] [text-shadow:0_0_12px_rgba(255,255,255,0.33)]"
              >
                {{ i + 1 }}
              </span>
              <p class="font-schibsted font-medium text-white/80 leading-none">
                {{ step }}
              </p>
            </div>
          </div>

          <!-- CTA -->
          <div class="flex">
            <AtomicButtonSecondary
              label="START TRADING"
              href="#"
              variant="filled"
            />
          </div>
        </div>

        <!-- Disclaimer -->
        <div class="flex flex-col gap-6 max-w-[397px]">
          <AtomicScrollIndicator />
          <p
            class="font-schibsted italic font-normal text-[14px] text-white/60 leading-[16px] [font-feature-settings:'cv09'_1,'ss11'_1,'calt'_0,'liga'_0] sm:bg-transparent sm:shadow-none sm:backdrop-blur-none rounded-2xl sm:rounded-none bg-black/30 backdrop-blur-sm shadow-[0_0_60px_40px_rgba(0,0,0,0.35)]"
          >
            E8 is a SaaS educational simulation built for skills training, data collection, and analytical modeling.
            There is no live-capital or margin risk. Enrollment fees purchase access to the simulation & assessment;
            payouts are discretionary, not guaranteed, and contingent on E8's acceptance & licensing of your performance
            data.
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
