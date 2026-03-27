<template>
  <nav class="sticky top-0 z-50 backdrop-blur-[40px] bg-[#000504]/90 border-b border-white/16">
    <div class="max-w-[1440px] mx-auto px-5 lg:px-20 gap-3 min-h-15 flex flex-wrap items-center lg:justify-between justify-start py-2 lg:py-0 lg:h-15">
      <!-- Mobile menu -->
      <UDropdownMenu
        :items="mobileMenuItems"
        :modal="false"
        class="lg:hidden"
        :ui="{
          content: 'bg-[#000504]/95 backdrop-blur-xl border border-white/10 rounded-xl mt-2 min-w-[180px]',
          item: 'text-white/80 hover:text-white hover:bg-white/8 text-sm font-medium px-4 py-2.5 rounded-lg transition-colors'
        }"
      >
        <UButton
          variant="ghost"
          color="neutral"
          :ui="{ base: 'p-2 text-white hover:bg-white/10 rounded-full transition-colors' }"
        >
          <UIcon name="i-lucide-menu" class="w-5 h-5" aria-hidden="true" />
          <span class="sr-only">Open menu</span>
        </UButton>
      </UDropdownMenu>

      <!-- Logo -->
      <div class="max-w-[250px]">
        <inline-svg
          src="/images/logo-e8markets.svg"
          width="131"
          height="26"
          class="h-[26px] w-auto"
          aria-label="E8Markets"
        />
      </div>

      <!-- Desktop nav links -->
      <div class="hidden lg:flex items-center gap-1">
        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          class="px-4 py-1.5 text-sm text-white font-medium hover:bg-white/10 rounded-full transition-colors"
        >
          {{ link.label }}
        </a>
      </div>

      <!-- Right side -->
      <div class="flex items-center gap-2.5 ml-auto lg:ml-0">
        <AtomicButtonSecondary
          label="Log In"
          href="https://e8x.e8markets.com"
        />
        <AtomicButtonGlow
          label="SIGN UP"
          href="https://e8x.e8markets.com"
        />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import InlineSvg from 'vue-inline-svg'
import type { ILink } from '~/types/links'

const navLinks: ILink[] = [
  { label: 'Forex', href: '/forex' },
  { label: 'Futures', href: '/futures' },
  { label: 'Crypto', href: '/crypto' },
  { label: 'Traders payout', href: '/traders-payout' },
  { label: 'FAQ', href: '/faq' }
]

const mobileMenuItems = navLinks.map(({ label, href }) => ({ label, href }))
</script>
