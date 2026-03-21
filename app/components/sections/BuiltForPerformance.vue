<template>
  <section class="relative overflow-hidden min-h-[740px]">
    <!-- Background -->
    <img
      src="/images/built-for-perfomance-bg.svg"
      alt=""
      class="absolute inset-0 w-full h-full object-cover pointer-events-none"
    >

    <!-- Smoke video -->
    <video
      src="/videos/smoke-2.mp4"
      autoplay
      loop
      muted
      playsinline
      class="absolute inset-0 w-full h-full object-cover pointer-events-none mix-blend-screen"
    />

    <!-- Tire image -->
    <div class="hidden md:block absolute left-0 top-0 bottom-0 w-full pointer-events-none">
      <img
        src="/images/perf-tire.png"
        alt=""
        class="absolute w-[1173px] h-[1292px] top-[-66%] right-[80%] lg:right-[45%] md:right-[75%] object-cover rotate-[-6.73deg] aspect-[59/65]"
      >
    </div>

    <div class="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-20 min-h-[740px] flex items-center justify-end">
      <div class="w-[530px] flex flex-col gap-8">
        <h2 class="text-[48px] text-white leading-[1.2]">
          Built for long-term<br>
          trading performance
        </h2>
        <div class="flex flex-col gap-3">
          <p class="text-white/80 text-base">
            We do not fast-track hype. We develop professionals.
          </p>
          <div class="flex flex-col gap-3 mt-3">
            <div
              v-for="feature in features"
              :key="feature"
              class="flex items-center gap-3"
            >
              <img
                src="/images/icon-check-circle.svg"
                alt="✓"
                class="w-[18px] h-[18px] flex-shrink-0"
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
          href="#"
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
