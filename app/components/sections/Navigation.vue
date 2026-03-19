<template>
  <nav class="sticky top-0 z-50 backdrop-blur-[40px] bg-[#000504]/90 border-b border-white/16">
    <div class="max-w-[1440px] mx-auto px-20 py-5 flex items-center justify-between">
      <!-- Logo -->
      <div class="w-[250px]">
        <img src="https://www.figma.com/api/mcp/asset/bc070d15-c4e6-43ba-8e33-c50a6bff3881" alt="E8Markets" class="h-[26px] w-auto" />
      </div>
      <!-- Nav links -->
      <div class="flex items-center gap-1">
        <a v-for="link in navLinks" :key="link" href="#" class="px-4 py-1.5 text-sm text-white font-medium hover:bg-white/10 rounded-full transition-colors">{{ link }}</a>
      </div>
      <!-- Auth buttons -->
      <div class="flex items-center gap-2.5">
        <a href="#" class="border border-white/24 rounded-full px-6 py-2.5 text-white text-sm font-medium uppercase tracking-wide hover:bg-white/10 transition-colors w-[120px] text-center">Log In</a>
        <AtomicButtonGlow label="SIGN UP" href="#" />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const navLinks = ['Forex', 'Futures', 'Crypto', 'Traders payout', 'FAQ']
</script>
