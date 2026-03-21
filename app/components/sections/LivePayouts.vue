<template>
  <section class="bg-white py-[124px]">
    <div class="max-w-[1440px] mx-auto px-4 lg:px-20 flex flex-col items-center gap-16">
      <h2 class="text-[32px] text-[#000504] text-center max-w-[622px] leading-[1.2]">
        Over $60 million paid out to traders who chose the smarter way to trade
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-[1280px]">
        <div
          v-for="badge in badges"
          :key="badge.caption"
          class="flex flex-col items-center gap-4"
        >
          <div class="h-20 flex items-center justify-center w-full">
            <img
              :src="badge.img"
              :alt="badge.caption"
              class="max-h-full max-w-full object-contain"
            >
          </div>
          <p
            class="text-[#717173] text-base font-medium text-center"
            v-html="badge.caption"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const badges = [
  { img: '/images/badge-app-store.png', caption: '#3 most downloaded finance<br>app' },
  { img: '/images/badge-trustpilot.png', caption: '4.7 out of 5 on Trustpilot' },
  { img: '/images/badge-best-international.png', caption: 'Best International Payments<br>Provider 2025' },
  { img: '/images/badge-best-consumer.png', caption: 'Best Consumer Banking Mobile<br>App 2025' }
]
</script>
