<template>
  <section class="relative bg-[#000504] min-h-[900px] flex flex-col overflow-hidden">
    <!-- Background video -->
    <video
      class="absolute inset-0 w-full h-full object-cover mix-blend-lighten"
      src="/videos/formula-no-sound-min.mp4"
      autoplay
      loop
      muted
      playsinline
    />
    <!-- Overlay 1: mix-blend-overlay (node 0:56) -->
    <div
      class="absolute inset-0 pointer-events-none mix-blend-overlay"
      style="background: linear-gradient(0deg, rgba(255,255,255,0.00) 0%, rgba(0,0,0,0.56) 108.05%);"
    ></div>
    <!-- Overlay 2: dark gradient (node 0:57) -->
    <div
      class="absolute inset-0 pointer-events-none"
      style="background: linear-gradient(0deg, rgba(0,0,0,0.00) 0%, #000 108.05%);"
    ></div>

    <!-- Main content wrapper (node 0:58): justify-end pushes promo+scroll to bottom -->
    <div class="relative z-10 flex-1 flex flex-col items-center justify-end gap-[24px] pt-[199px] pb-[32px] px-4 lg:px-[80px]">

      <!-- Heading + CTAs (node 0:115): absolute at top-[108px] -->
      <div class="absolute left-1/2 -translate-x-1/2 top-[108px] flex flex-col gap-[32px] items-center justify-center">
        <!-- Headline group (node 0:116): gap-[12px] -->
        <div class="flex flex-col gap-[12px] items-center">
          <h1 class="text-white text-center text-[64px]  font-normal leading-[1.6] [font-feature-settings:'liga'_off,'calt'_off]">
            Trade. Learn. Earn.
          </h1>
          <p class="text-white text-center text-[18px]  font-normal leading-[1.4] tracking-[-0.198px] w-full max-w-[835px] [font-family:'Inter',sans-serif] [font-feature-settings:'cv09'_1,'ss11'_1,'calt'_0,'liga'_0]">
            Follow a structured path built around discipline and risk management.<br>
            Trade in a live simulated environment. Perform like a professional (funded) trader. Get paid like one.
          </p>
        </div>
        <!-- CTA buttons (node 0:119) -->
        <div class="flex gap-[32px] items-center justify-center">
          <AtomicButtonGlow label="START TRADING" href="#" />
          <AtomicButtonSecondary label="HOW IT WORKS" href="#" />
        </div>
      </div>

      <!-- Promo ticker bar (node 0:59): in flow, at bottom -->
      <div class="w-full max-w-[1280px] backdrop-blur-[23px] bg-[rgba(3,2,14,0.56)] border-[1.171px] border-[rgba(255,255,255,0.16)] rounded-[14.05px] pb-[11px] pt-[20px] px-[1.171px]">
        <div class="flex items-center justify-between flex-wrap gap-y-3 px-[18px]">
          <div class="flex flex-col gap-2 font-schibsted">
            <p class="text-white/60 text-sm">e8 one signature promotion until <span class="text-white ">8th march</span></p>
            <p class="text-white/60 font-normal text-2xl ">Save up to <span class="font-bold text-white">50%</span> with our code</p>
          </div>
          <div class="flex items-center bg-white/10 rounded-full border-[0.585px] border-white/10 pl-[18px] pr-[4px] py-[4px] justify-between overflow-hidden gap-4 w-full lg:w-auto">
            <input type="email" placeholder="YOUR EMAIL" class="bg-transparent text-[#6d6d6d] text-sm uppercase tracking-[-0.42px] outline-none [font-family:'Inter',sans-serif] [font-feature-settings:'cv09'_1,'ss11'_1,'calt'_0,'liga'_0]" />
            <AtomicButtonGlow label="GET CODE" variant="teal" :pill-height="36" />
          </div>
          <div class="flex items-center gap-3 lg:w-auto w-full justify-between">
            <p class="text-sm text-white/60">Update <span class="text-white">1</span> of 4</p>
            <div class="flex items-center gap-2">
              <button class="w-7 h-7 rounded-[14px] bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <span class="text-white text-xs">‹</span>
              </button>
              <button class="w-7 h-7 rounded-[14px] bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <span class="text-white text-xs">›</span>
              </button>
            </div>
          </div>
        </div>
        <!-- Progress line: gray track + teal progress overlay -->
        <div class="mt-3 mx-[18px] h-px relative bg-white/20">
          <img
            src="/images/promo-progress-line.svg"
            alt=""
            style="width: 3px; height: 196px; transform: rotate(-90deg); transform-origin: 0 1.5px; position: absolute; left: 0;"
          />
        </div>
      </div>

      <!-- Scroll indicator + disclaimer (node 0:109): in flow, at bottom -->
      <div class="flex flex-col gap-[24px] items-center justify-center">
        <div class="flex items-center justify-center rotate-180">
          <inline-svg src="/images/icon-scroll-down.svg" class="w-[10px] h-[13px]" />
        </div>
        <p class="[font-family:'Schibsted_Grotesk',sans-serif] italic font-normal leading-4 text-[14px] text-center text-white px-4">
          Performance-based payouts. Simulated trading environment. No shortcuts — just skill.
        </p>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import InlineSvg from 'vue-inline-svg'
</script>
