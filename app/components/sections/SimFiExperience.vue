<template>
  <section class="relative min-h-screen overflow-hidden py-20"
    style="background: linear-gradient(180deg, #040404 0%, #1a0c04 30%, #3d1a05 60%, #000504 100%)">
    <!-- Payout plaque image (phone mockup) -->
    <div class="absolute right-0 top-0 w-[779px] h-[717px] pointer-events-none">
      <img src="/images/simfi-payout-phone.png" alt="" class="w-full h-full object-cover" />
    </div>

    <div class="relative z-10 max-w-[1440px] mx-auto px-20 py-[122px] flex flex-col justify-between min-h-screen">
      <!-- Top: SimFi text + live board -->
      <div class="flex gap-20 items-start">
        <!-- Left text -->
        <div class="w-[530px] flex flex-col gap-10">
          <h2 class="text-[48px] font-normal text-[#441306] leading-[1.4]">
            The SimFi™ <span class="lowercase">Experience</span>
          </h2>
          <div class="flex flex-col gap-3">
            <div v-for="item in simfiPoints" :key="item" class="flex items-start gap-3">
              <span class="w-1 h-full mt-1.5 bg-[#441306]/60 flex-shrink-0"></span>
              <p class="text-[#441306]/80 text-sm leading-relaxed">{{ item }}</p>
            </div>
          </div>
          <a href="#" class="self-start text-sm font-bold uppercase tracking-[-0.28px] rounded-full px-8 py-3 overflow-hidden hover:opacity-90 transition-opacity"
            style="background: linear-gradient(90deg, #ffbfa4, #ffbfa4); color: #441306; box-shadow: inset 0px 3.345px 14.134px 0px #ff6f1f">
            START TRADING
          </a>
        </div>

        <!-- Right: Live Payouts board -->
        <div class="flex-1 flex flex-col gap-6 mt-auto">
          <h3 class="text-[32px] text-white text-center leading-[1.6]">
            Live earnings <span class="lowercase text-white">paid today</span>
          </h3>
          <div class="backdrop-blur-[43px] border border-white/10 rounded-xl p-3 overflow-hidden"
            style="background: linear-gradient(90deg, rgba(255,255,255,0.07) 0%, rgba(39,0,0,0.67) 79.3%)">
            <div class="flex items-center justify-between mb-3">
              <p class="text-white/60 text-sm">Updated every 60 seconds</p>
              <a href="#" class="text-white text-sm font-bold uppercase border-b border-white pb-0.5">
                View Full Payout Leaderboard →
              </a>
            </div>
            <div class="flex gap-3 overflow-hidden">
              <div v-for="payout in payouts" :key="payout.name"
                class="flex-shrink-0 backdrop-blur-[27px] bg-[rgba(131,95,57,0.2)] border border-white/8 rounded-xl p-6 flex items-center justify-between gap-4 w-[calc(33.3%-8px)]">
                <p class="text-white text-sm w-24">{{ payout.name }}</p>
                <span class="bg-white/8 text-white text-sm rounded-full px-3 py-1">{{ payout.market }}</span>
                <p class="text-white/80 text-sm">{{ payout.time }}</p>
                <p class="text-white font-bold text-base text-right">{{ payout.amount }}</p>
              </div>
            </div>
          </div>
          <p class="text-white text-xs italic text-center opacity-80">
            Hypothetical/simulated performance has inherent limitations and does not represent actual trading;<br>
            Results may differ materially in live market conditions.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const simfiPoints = [
  'Simulated Finance™ is not a shortcut. It is a structured performance environment.',
  'We license trader performance data, analyze behavioral patterns, and build risk models designed to develop disciplined, capital-ready professionals.',
  'You trade. We measure. Performance unlocks opportunity.'
]

const payouts = [
  { name: 'Gabriela B.', market: 'Forex', time: '3 m ago', amount: '$3,250' },
  { name: 'Leo J.', market: 'Futures', time: '9 m ago', amount: '$1,100' },
  { name: 'Ryan K.', market: 'Crypto', time: '17 m ago', amount: '$112,900' }
]
</script>
