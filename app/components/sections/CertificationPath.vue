<template>
  <section class="bg-white py-20">
    <div class="max-w-[1440px] mx-auto px-20 flex flex-col items-center gap-10">
      <h2 class="text-[40px] text-[#000504] text-center">
        Your <span class="lowercase font-normal">Path to</span> SimFi™ <span class="lowercase font-normal">Certification</span>
      </h2>
      <div class="flex gap-7 items-center">
        <div v-for="card in cards" :key="card.title"
          class="rounded-[20px] overflow-hidden w-[416px] h-[570px] relative flex-shrink-0"
          :style="`background: ${card.bg}`">
          <img :src="card.img" :alt="card.title" class="absolute inset-0 w-full h-full object-cover opacity-60" />
          <div class="absolute inset-0 p-8 flex flex-col gap-6 z-10">
            <h3 class="text-white text-2xl font-medium whitespace-nowrap">{{ card.title }}</h3>
            <ul class="flex flex-col gap-3">
              <li v-for="point in card.points" :key="point" class="flex items-start gap-3">
                <span class="mt-1.5 w-1 h-1 rounded-full bg-white/60 flex-shrink-0"></span>
                <p class="text-white/80 text-base leading-[1.4]">{{ point }}</p>
              </li>
            </ul>
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
    title: '01 — Enter the Challenge',
    bg: '#091211',
    img: '/images/cert-step-1.png',
    points: [
      'Trade within defined risk parameters.',
      'Follow structured rules built to mirror professional standards.',
      'Demonstrate consistency and risk control.'
    ]
  },
  {
    title: '02 — Validate Performance',
    bg: '#000504',
    img: '/images/cert-step-2.png',
    points: [
      'Meet the profit target.',
      'Respect the drawdown limits.',
      'Prove you can manage risk before chasing reward.'
    ]
  },
  {
    title: '03 — Get SimFi™ Certified',
    bg: '#000504',
    img: '/images/cert-step-3.png',
    points: [
      'Once verified, enter the funded simulation stage.',
      'Maintain professional standards.',
      'Request real payouts.'
    ]
  }
]
</script>
