<template>
  <section class="bg-white py-20">
    <div class="max-w-[1440px] mx-auto px-20 flex flex-col items-center gap-10">
      <h2 class="text-[40px] text-[#000504] text-center">Rules & payouts</h2>
      <div class="flex items-center justify-between w-full max-w-[1280px] gap-7">
        <div v-for="card in cards" :key="card.title"
          class="rounded-[20px] overflow-hidden flex-1 h-[570px] relative"
          :style="`background: ${card.bg}`">
          <img :src="card.img" :alt="card.title" class="absolute bottom-0 left-0 right-0 w-full h-full object-cover opacity-70" />
          <div class="absolute inset-0 p-8 flex flex-col gap-8 z-10">
            <h3 class="text-white text-2xl font-medium">{{ card.title }}</h3>
            <p class="text-white/80 text-base leading-[1.4] whitespace-pre-line">{{ card.description }}</p>
          </div>
        </div>
      </div>
      <a href="#" class="text-white text-sm font-medium uppercase tracking-[-0.56px] rounded-full px-8 py-3 hover:opacity-90 transition-opacity"
        style="background: linear-gradient(90deg, #0d0d0d, #575757 13.9%, #3c3c3c 29.3%, #969696 50.6%, #3c3c3c 72.6%, #575757 86%, #0d0d0d 100%)">
        LEARN MORE
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    title: 'How you trade',
    bg: '#091211',
    img: '/images/rules-car.png',
    description: 'Trading takes place in a simulated environment using real market data.\n\nTraders follow strict risk and drawdown rules to build discipline before capital access.'
  },
  {
    title: 'Performance targets',
    bg: '#000504',
    img: '/images/rules-trophy.png',
    description: 'You must hit predefined profit targets relative to your capital tier.\n\nConsistency and risk respect are mandatory for certification.'
  },
  {
    title: 'Payouts',
    bg: '#000504',
    img: '/images/rules-app.png',
    description: 'Earn performance-based payouts on a structured schedule. Payout amounts scale based on performance metrics. Payouts are discretionary and based on simulated trading performance under program rules.'
  }
]
</script>
