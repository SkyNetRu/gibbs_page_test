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

    <!-- Main content -->
    <div class="relative z-10 flex-1 flex flex-col items-center pt-[48px] pb-8 px-20">
      <!-- Headline -->
      <div class="flex flex-col items-center gap-6 mb-8">
        <h1 class="text-white text-center text-[64px] not-italic font-normal leading-[160%] [font-feature-settings:'liga'_off,'calt'_off]">
          Trade. Learn. Earn.
        </h1>
        <p class="text-white text-center text-[18px] not-italic font-normal leading-[1.4] tracking-[-0.198px] [font-family:'Inter',sans-serif] [font-feature-settings:'cv09'_1,'ss11'_1,'calt'_0,'liga'_0]">
          Follow a structured path built around discipline and risk management.<br>
          Trade in a live simulated environment. Perform like a professional (funded) trader. Get paid like one.
        </p>
      </div>

      <!-- CTA buttons -->
      <div class="flex items-center gap-8">
        <AtomicButtonGlow label="START TRADING" href="#" />
        <a href="#" class="border border-white/50 text-white text-sm font-bold uppercase tracking-[-0.56px] rounded-full px-8 py-3 hover:bg-white/10 transition-colors">
          HOW IT WORKS
        </a>
      </div>

      <!-- Disclaimer -->
      <p class="mt-6 text-sm text-white italic text-center">
        Performance-based payouts. Simulated trading environment. No shortcuts — just skill.
      </p>
    </div>

    <!-- Promo ticker bar -->
    <div class="relative z-10 mx-20 mb-8 backdrop-blur-[23px] bg-[#03020e]/56 border border-white/16 rounded-[14px] px-5 py-4">
      <div class="flex items-center justify-between">
        <div class="flex flex-col gap-2">
          <p class="text-white/60 text-sm">e8 one signature promotion until <span class="text-white font-bold">8th march</span></p>
          <p class="text-white text-2xl font-bold">Save up to <strong>50%</strong> <span class="text-white/60 font-normal">with our code</span></p>
        </div>
        <div class="flex items-center bg-white/10 rounded-full border border-white/10 pl-4 pr-1 py-1">
          <input type="email" placeholder="YOUR EMAIL" class="bg-transparent text-[#6d6d6d] text-sm uppercase tracking-tight outline-none w-[120px]" />
          <button class="bg-[#19f3cb] text-[#03020e] text-sm font-bold uppercase tracking-tight rounded-full px-4 py-2 hover:bg-[#19f3cb]/90 transition-colors">
            GET CODE
          </button>
        </div>
        <p class="text-white text-sm">Update <strong>1</strong> <span class="text-white/60">of 4</span></p>
        <div class="flex items-center gap-2">
          <button class="w-7 h-7 rounded-[14px] bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
            <span class="text-white text-xs">‹</span>
          </button>
          <button class="w-7 h-7 rounded-[14px] bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
            <span class="text-white text-xs">›</span>
          </button>
        </div>
      </div>
      <!-- Progress line -->
      <div class="mt-3 h-px bg-white/20 relative">
        <div class="absolute left-0 top-0 h-full w-48 bg-gradient-to-r from-teal-400 to-transparent"></div>
      </div>
    </div>
  </section>
</template>
