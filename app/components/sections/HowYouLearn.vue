<template>
  <section class="relative min-h-[800px] overflow-hidden">
    <!-- Before Dawn: top-to-bottom dark atmosphere -->
    <div
      class="absolute inset-0"
      style="background: linear-gradient(180deg, rgb(4,4,4) 5%, rgb(12,13,16) 17%, rgb(58,63,83) 42%, rgb(102,108,130) 73%); opacity: 0.75;"
    ></div>
    <!-- Right-side darkening for text readability -->
    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-[#000504]/40 to-[#000504]/90"></div>
    <!-- Background image: above gradients -->
    <img
      src="/images/howyoulearn-mountain.png"
      alt=""
      class="absolute inset-0 w-full h-full object-cover object-[30%_center] max-h-full lg:w-auto lg:object-[left_center]"
    />

    <!-- Content: right-aligned -->
    <div class="relative z-10 max-w-[1440px] mx-auto px-4 lg:px-[80px] py-[80px] flex justify-end">
      <div class="w-full lg:w-[600px] flex flex-col gap-[126px]">

        <!-- Main block -->
        <div class="flex flex-col gap-[24px] max-w-[600px]">
          <h2 class="max-w-[337px] text-[48px] text-white leading-[1.2] [font-feature-settings:'calt'_0,'liga'_0]">
            How You Learn While You Earn
          </h2>

          <!-- Steps -->
          <div class="flex flex-col gap-[24px] text-[16px]">
            <div v-for="(step, i) in steps" :key="i" class="flex items-center gap-[12px]">
              <span class="font-schibsted font-bold text-white/80 w-[20px] h-[20px] flex items-center justify-center shrink-0 text-[16px] leading-none tracking-[-0.32px] [text-shadow:0_0_12px_rgba(255,255,255,0.33)]">
                {{ i + 1 }}
              </span>
              <p class="font-schibsted font-medium text-white/80 leading-none">{{ step }}</p>
            </div>
          </div>

          <!-- CTA -->
          <div class="flex">
            <AtomicButtonSecondary label="START TRADING" href="#" variant="filled" />
          </div>
        </div>

        <!-- Disclaimer -->
        <div class="flex flex-col gap-[24px] max-w-[397px]">
          <div class="flex items-center justify-center rotate-180">
            <inline-svg src="/images/icon-scroll-down.svg" class="w-[10px] h-[13px]" />
          </div>
          <p class="font-schibsted italic font-normal text-[14px] text-white/60 leading-[16px] [font-feature-settings:'cv09'_1,'ss11'_1,'calt'_0,'liga'_0]">
            E8 is a SaaS educational simulation built for skills training, data collection, and analytical modeling. There is no live-capital or margin risk. Enrollment fees purchase access to the simulation & assessment; payouts are discretionary, not guaranteed, and contingent on E8's acceptance & licensing of your performance data.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import InlineSvg from 'vue-inline-svg'

const steps = [
  'Trade on a proven framework.',
  'Qualify through performance.',
  'Get SimFi™ certified — and earn real payouts.',
]
</script>
