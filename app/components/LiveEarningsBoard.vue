<template>
  <div class="flex flex-col gap-[24px] items-center w-full">
    <h3 class="text-[32px] text-white text-center leading-[1.6] capitalize max-w-[552px] w-full">
      Live earnings paid today
    </h3>

    <!-- Board -->
    <div
      class="backdrop-blur-[43px] border border-white/10 rounded-xl overflow-hidden h-[162px] flex flex-col gap-[12px] w-full pt-[12px] pb-[12px]"
      style="background: linear-gradient(90deg, rgba(255,255,255,0.07) 0%, rgba(39,0,0,0.67) 79.3%); box-shadow: inset 0px 0px 48px 0px rgba(255,255,255,0.25);"
    >
      <div class="flex items-center justify-between shrink-0 px-[12px]">
        <p class="text-white/60 text-[14px] leading-[20px]">Updated every 60 seconds</p>
        <a href="#" class="flex items-center gap-[10px] border-b border-white pb-px">
          <span class="text-white text-[14px] font-bold uppercase tracking-[-0.28px] leading-[20px]">View Full Payout Leaderboard</span>
          <span class="text-white text-[14px]">→</span>
        </a>
      </div>
      <UCarousel
        :items="payouts"
        :dragFree="true"
        :auto-scroll="{ speed: 2, stopOnInteraction: false, stopOnMouseEnter: true }"
        :ui="{
          viewport: 'overflow-hidden',
          container: 'flex gap-[12px] px-[12px]',
          item: 'basis-[410px] shrink-0 grow-0',
        }"
        loop
      >
        <template #default="{ item }">
          <div class="relative backdrop-blur-[27px] bg-[rgba(131,95,57,0.2)] border border-white/[0.08] rounded-xl px-[16px] flex items-center justify-between gap-[12px] h-[78px] [box-shadow:inset_0px_-4px_48px_0px_rgba(255,255,255,0.08)]">
            <p class="text-white text-[14px] leading-[20px] shrink-0">{{ item.name }}</p>
            <span class="bg-white/[0.08] text-white text-[14px] leading-[20px] rounded-full px-[12px] py-[4px] text-center shrink-0">{{ item.market }}</span>
            <p class="text-white/80 text-[14px] leading-[20px] text-center shrink-0">{{ item.time }}</p>
            <p class="text-white font-bold text-[16px] leading-[24px] text-right shrink-0 ml-auto">{{ item.amount }}</p>
          </div>
        </template>
      </UCarousel>
    </div>

    <!-- Disclaimer -->
    <div class="flex flex-col gap-[12px] items-center w-full  mx-auto">
      <div class="flex items-center justify-center rotate-180">
        <inline-svg src="/images/icon-scroll-down.svg" class="w-[10px] h-[13px]" />
      </div>
      <p class="text-white text-[14px] italic text-center leading-[16px]">
        Hypothetical/simulated performance has inherent limitations and does not represent actual trading;<br>
        Results may differ materially in live market conditions.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import InlineSvg from 'vue-inline-svg'

const payouts = [
  { name: 'Gabriela B.', market: 'Forex',    time: '3 m ago',  amount: '$3,250' },
  { name: 'Leo J.',      market: 'Futures',  time: '9 m ago',  amount: '$1,100' },
  { name: 'Jonh S.',     market: 'Futures',  time: '12 m ago', amount: '$7,450' },
  { name: 'Ryan K.',     market: 'Crypto',   time: '17 m ago', amount: '$112,900' },
  { name: 'Mike S.',     market: 'Crypto',   time: '22 m ago', amount: '$62,900' },
]
</script>
