<template>
  <section class="bg-white py-20">
    <div class="mx-auto px-20 flex flex-col items-center gap-10">
      <h2 class="text-[40px] text-[#000504] text-center">
        Rules & payouts
      </h2>
      <div class="flex flex-wrap gap-7 items-center justify-center">
        <CardsFeature
          v-for="card in cards"
          :key="card.title"
          :bg="card.bg"
          :title="card.title"
          :description="card.description"
          :show-bullets="false"
        />
      </div>
      <AtomicButtonMetal label="LEARN MORE" />
    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    bg: '/images/rules-card1-bg.png',
    title: 'How you trade',
    description: 'Trading takes place in a simulated environment using real market data.\n\nTraders follow strict risk and drawdown rules to build discipline before capital access.'
  },
  {
    bg: '/images/rules-card2-bg.png',
    title: 'Performance targets',
    description: 'You must hit predefined profit targets relative to your capital tier.\n\nConsistency and risk respect are mandatory for certification.'
  },
  {
    bg: '/images/rules-card3-bg.png',
    title: 'Payouts',
    description: 'Earn performance-based payouts on a structured schedule. Payout amounts scale based on performance metrics. Payouts are discretionary and based on simulated trading performance under program rules.'
  }
]
</script>
