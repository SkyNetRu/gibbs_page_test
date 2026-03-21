<template>
  <nav class="sticky top-0 z-50 backdrop-blur-[40px] bg-[#000504]/90 border-b border-white/16">
    <div class="max-w-[1440px] mx-auto px-4 lg:px-20 py-5 flex items-center justify-between">
      <!-- Logo -->
      <div class="w-[250px]">
        <inline-svg
          src="/images/logo-e8markets.svg"
          width="131"
          height="26"
          class="h-[26px] w-auto"
          aria-label="E8Markets"
        />
      </div>
      <!-- Nav links -->
      <div class="hidden lg:flex items-center gap-1">
        <a
          v-for="link in navLinks"
          :key="link"
          href="#"
          class="px-4 py-1.5 text-sm text-white font-medium hover:bg-white/10 rounded-full transition-colors"
        >
          {{ link }}
        </a>
      </div>
      <!-- Auth buttons -->
      <div class="flex items-center gap-2.5">
        <AtomicButtonSecondary
          label="Log In"
          href="#"
        />
        <AtomicButtonGlow
          label="SIGN UP"
          href="#"
        />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import InlineSvg from 'vue-inline-svg'

const navLinks = ['Forex', 'Futures', 'Crypto', 'Traders payout', 'FAQ']
</script>
