<template>
  <section class="relative overflow-hidden min-h-[740px]">
    <!-- Background -->
    <img
      src="/images/built-for-perfomance-bg.svg"
      alt=""
      width="1440"
      height="740"
      loading="lazy"
      class="absolute inset-0 w-full h-full object-cover pointer-events-none"
    >

    <!-- Smoke video -->
    <AtomicSmokeVideo />

    <!-- Tire image -->
    <div class="hidden md:block absolute left-0 top-0 bottom-0 w-full pointer-events-none">
      <img
        src="/images/perf-tire.png"
        alt=""
        width="1173"
        height="1292"
        loading="lazy"
        class="absolute w-[1173px] h-[1292px] top-[-66%] right-[80%] lg:right-[45%] md:right-[75%] object-cover rotate-[-6.73deg] aspect-[59/65]"
      >
    </div>

    <div class="relative z-10 max-w-[1440px] mx-auto px-5 lg:px-20 min-h-[740px] flex items-center justify-end">
      <div class="w-[530px] flex flex-col gap-8">
        <h2 class="text-5xl text-white leading-[1.2]">
          Built for long-term<br>
          trading performance
        </h2>
        <div class="flex flex-col gap-8">
          <p class="text-white/80 text-base">
            We do not fast-track hype. We develop professionals.
          </p>
          <div class="flex flex-col gap-8 mt-3">
            <div
              v-for="feature in features"
              :key="feature"
              class="flex items-center gap-8"
            >
              <img
                src="/images/icon-check-circle.svg"
                alt="✓"
                width="18"
                height="18"
                loading="lazy"
                class="w-4.5 h-4.5 flex-shrink-0"
              >
              <p class="text-white/80 text-base">
                {{ feature }}
              </p>
            </div>
          </div>
          <p class="text-white/80 text-base mt-3">
            This is about building repeatable skill — not passing a test.
          </p>
        </div>
        <a
          href="https://e8markets.com/compare-account-challenges"
          class="self-start bg-white text-black text-sm font-bold uppercase tracking-[-0.56px] rounded-full px-8 py-3 hover:opacity-90 transition-opacity"
        >
          START TRADING
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  'Structured risk frameworks',
  'Behavioral performance modeling',
  'Professional simulated capital',
  'Performance-based discretionary payouts'
]
</script>
