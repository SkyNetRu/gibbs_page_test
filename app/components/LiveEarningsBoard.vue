<template>
  <div class="flex flex-col gap-6 items-center w-full">
    <h3 class="text-[32px] text-white text-center leading-[1.6] capitalize max-w-[552px] w-full">
      Live earnings paid today
    </h3>

    <!-- Board -->
    <div
      class="live-board backdrop-blur-[43px] border border-white/10 rounded-xl overflow-hidden h-[162px] flex flex-col gap-3 w-full pt-3 pb-3"
    >
      <div class="flex items-center justify-between shrink-0 px-3">
        <p class="text-white/60 text-sm leading-[20px]">
          Updated every 60 seconds
        </p>
        <a
          href="https://e8markets.com/e8-traders-stories"
          class="flex items-center gap-[10px] border-b border-white pb-3x"
        >
          <span class="text-white text-sm font-bold uppercase tracking-[-0.28px] leading-[20px]">View Full Payout Leaderboard</span>
          <span class="text-white text-sm">→</span>
        </a>
      </div>
      <UCarousel
        :items="payouts"
        :drag-free="true"
        :auto-scroll="{ speed: 2, stopOnInteraction: false, stopOnMouseEnter: true }"
        :ui="{
          viewport: 'overflow-hidden',
          container: 'flex gap-3 px-3',
          item: 'basis-[410px] shrink-0 grow-5'
        }"
        loop
      >
        <template #default="{ item }">
          <div class="relative backdrop-blur-[27px] bg-[rgba(131,95,57,0.2)] border border-white/[0.08] rounded-xl px-4 flex items-center justify-between gap-3 h-[78px] [box-shadow:inset_0_-4px_48px_0_rgba(255,255,255,0.08)]">
            <p class="text-white text-sm leading-[20px] shrink-0">
              {{ item.name }}
            </p>
            <span class="bg-white/[0.08] text-white text-sm leading-[20px] rounded-full px-3 py-1 text-center shrink-0">{{ item.market }}</span>
            <p class="text-white/80 text-sm leading-[20px] text-center shrink-0">
              {{ item.time }}
            </p>
            <p class="text-white font-bold text-base leading-[24px] text-right shrink-0 ml-auto">
              {{ item.amount }}
            </p>
          </div>
        </template>
      </UCarousel>
    </div>

    <!-- Disclaimer -->
    <div class="flex flex-col gap-3 items-center w-full  mx-auto">
      <AtomicScrollIndicator />
      <p class="text-white text-sm italic text-center leading-[16px]">
        Hypothetical/simulated performance has inherent limitations and does not represent actual trading;<br>
        Results may differ materially in live market conditions.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Payout {
  name: string
  market: string
  time: string
  amount: string
}

const payouts: Payout[] = [
  { name: 'Gabriela B.', market: 'Forex', time: '3 m ago', amount: '$3,250' },
  { name: 'Leo J.', market: 'Futures', time: '9 m ago', amount: '$1,100' },
  { name: 'Jonh S.', market: 'Futures', time: '12 m ago', amount: '$7,450' },
  { name: 'Ryan K.', market: 'Crypto', time: '17 m ago', amount: '$112,900' },
  { name: 'Mike S.', market: 'Crypto', time: '22 m ago', amount: '$62,900' }
]
</script>

<style lang="scss" scoped>
.live-board {
  background: linear-gradient(90deg, rgba(255,255,255,0.07) 0%, rgba(39,0,0,0.67) 79.3%);
  box-shadow: inset 0 0 48px 0 rgba(255,255,255,0.25);
}
</style>
