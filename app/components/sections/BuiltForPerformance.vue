<template>
  <section class="relative overflow-hidden min-h-[740px]"
    style="background: linear-gradient(180deg, #040404 0%, #0c0d10 16%, #3a3f53 42%, #666c82 73%)">
    <!-- Tire image -->
    <div class="absolute left-0 top-0 bottom-0 w-[700px] pointer-events-none">
      <img
        src="https://www.figma.com/api/mcp/asset/1082e67d-c86d-4baf-9262-6156e15a65c7"
        alt=""
        class="absolute w-[1316px] h-auto"
        style="top: -409px; left: -450px; transform: rotate(-6.73deg)"
      />
    </div>

    <div class="relative z-10 max-w-[1440px] mx-auto px-20 min-h-[740px] flex items-center justify-end">
      <div class="w-[530px] flex flex-col gap-8">
        <h2 class="text-[48px] text-white leading-[1.2]">
          Built for <span class="lowercase">Long-Term</span><br>
          <span class="lowercase">Trading Performance</span>
        </h2>
        <div class="flex flex-col gap-3">
          <p class="text-white/80 text-base">We do not fast-track hype. We develop professionals.</p>
          <div class="flex flex-col gap-3 mt-3">
            <div v-for="feature in features" :key="feature" class="flex items-center gap-3">
              <img src="https://www.figma.com/api/mcp/asset/10cfdb39-e484-46d3-9e1d-fe8d49cf0dab" alt="✓" class="w-[18px] h-[18px] flex-shrink-0" />
              <p class="text-white/80 text-base">{{ feature }}</p>
            </div>
          </div>
          <p class="text-white/80 text-base mt-3">This is about building repeatable skill — not passing a test.</p>
        </div>
        <a href="#" class="self-start bg-white text-black text-sm font-bold uppercase tracking-[-0.56px] rounded-full px-8 py-3 hover:opacity-90 transition-opacity">
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
