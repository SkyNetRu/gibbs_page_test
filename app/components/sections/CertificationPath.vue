<template>
  <section class="bg-white py-17">
    <div class="mx-auto px-5 sm:px-16.5 flex flex-col items-center gap-10">
      <h2 class="text-[40px] text-[#000504] text-center font-normal">
        Your path to SimFi™ certification
      </h2>
      <div class="flex flex-wrap gap-7 items-center justify-center w-full">
        <CardsFeature
          v-for="card in cards"
          :key="card.title"
          :bg="card.bg"
          :title="card.title"
          :points="card.points"
          :show-bullets="true"
        />
      </div>
      <AtomicButtonMetal label="LEARN MORE" href="https://help.e8markets.com/en/" />
    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    bg: '/images/cert-card1-bg.png',
    title: '01 — Enter the Challenge',
    points: [
      'Trade within defined risk parameters.',
      'Follow structured rules built to mirror professional standards.',
      'Demonstrate consistency and risk control.'
    ]
  },
  {
    bg: '/images/cert-card2-bg.png',
    title: '02 — Validate Performance',
    points: [
      'Meet the profit target.',
      'Respect the drawdown limits.',
      'Prove you can manage risk before chasing reward.'
    ]
  },
  {
    bg: '/images/cert-card3-bg.png',
    title: '03 — Get SimFi™ Certified',
    points: [
      'Once verified, enter the funded simulation stage.',
      'Maintain professional standards.',
      'Request real payouts.'
    ]
  }
]
</script>
