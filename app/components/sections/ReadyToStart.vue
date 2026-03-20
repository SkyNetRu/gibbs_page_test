<template>
  <section class="relative overflow-hidden min-h-[800px]"
    style="background: linear-gradient(180deg, #040404 0%, #0c0d10 16%, rgba(58,63,83,0.4) 42%, rgba(102,108,130,0.3) 73%)">
    <!-- Driver image centered -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[829px] pointer-events-none">
      <img
        src="/images/ready-helmet.png"
        alt=""
        class="w-full object-cover"
      />
    </div>

    <div class="relative z-10 max-w-[1440px] mx-auto px-20 py-20 flex flex-col items-center gap-8">
      <h2 class="text-[48px] text-[#000504] text-center leading-[1.6] font-normal">
        Ready to get started?
      </h2>
      <div class="flex items-center gap-20 justify-center">
        <div v-for="point in points" :key="point" class="flex items-center gap-3">
          <span class="text-[#000504]/60">|</span>
          <p class="text-[#000504]/80 text-base font-medium">{{ point }}</p>
        </div>
      </div>
      <a href="#" class="relative bg-white text-black text-sm font-bold uppercase tracking-[-0.56px] rounded-full px-8 py-3 overflow-hidden hover:opacity-90 transition-opacity mt-[400px]">
        START TRADING
        <span class="absolute right-0 top-1/2 -translate-y-1/2 w-[107px] h-10 bg-[radial-gradient(ellipse_at_right,rgba(255,105,0,0.5),transparent_70%)] pointer-events-none"></span>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const points = [
  'Trade on a proven framework.',
  'Qualify through performance.',
  'Get SimFi™ certified and earn.'
]
</script>
