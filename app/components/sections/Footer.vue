<template>
  <footer class="bg-[#000504] px-5 md:px-20 pt-20 flex flex-col gap-16 max-w-[1440px] mx-auto">
    <!-- Top divider -->
    <div class="flex gap-4 items-center">
      <div class="flex-1 h-px bg-white/16"></div>
      <span class="text-white text-sm">+</span>
      <div class="flex-1 h-px bg-white/16"></div>
    </div>

    <!-- Main columns -->
    <div class="flex gap-4 items-start flex-col md:flex-row">
      <!-- Left: brand -->
      <div class="md:w-[50%] flex flex-col gap-6 w-full">
        <div class="w-[250px]">
          <inline-svg
            src="/images/logo-e8markets.svg"
            width="131"
            height="26"
            class="h-[26px] w-auto"
            aria-label="E8Markets"/>
        </div>
        <p class="text-white/80 text-sm max-w-[416px] leading-5">
          Get in contact with us directly from this site with our live customer support or at our help center
        </p>
        <!-- Trustpilot -->
        <div class="flex flex-col gap-4  mt-15">
          <img src="/images/trustpilot-logo.svg" alt="Trustpilot" class="h-5 w-[102.5px]" />
          <div class="flex items-center gap-[3.2px]">
            <div
              v-for="i in 5" :key="i"
              class="w-8 h-8 flex items-center justify-center"
              :style="{ background: starBg(i) }"
            >
              <img src="/images/icon-star.svg" alt="★" class="w-[22px] h-[22px]" />
            </div>
          </div>
          <p class="text-white/80 text-sm leading-5">Rated {{ rating }}/5.0</p>
        </div>
      </div>

      <!-- Right: link columns -->
      <div class="flex gap-4 md:w-[50%] w-full flex-col sm:flex-row">
        <!-- Quick links -->
        <div class="w-[200px] flex flex-col gap-5">
          <p class="text-white text-sm font-medium">Quick links</p>
          <div class="flex flex-col gap-3 text-sm text-white/60">
            <a v-for="link in quickLinks" :key="link.label" href="#" class="hover:text-white transition-colors flex items-center gap-2">
              {{ link.label }}
              <span v-if="link.external" class="relative w-10 h-5 flex-shrink-0">
                <img src="/images/icon-external.svg" alt="" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10" />
              </span>
            </a>
          </div>
        </div>
        <!-- Legal -->
        <div class="w-[200px] flex flex-col gap-5">
          <p class="text-white text-sm font-medium">Legal</p>
          <div class="flex flex-col gap-3 text-sm text-white/60">
            <a href="#" class="hover:text-white transition-colors">Privacy policy</a>
            <a href="#" class="hover:text-white transition-colors">Terms & conditions</a>
          </div>
        </div>
        <!-- Socials -->
        <div class="w-[200px] flex flex-col gap-5">
          <p class="text-white text-sm font-medium">Socials</p>
          <div class="flex flex-col gap-3 text-sm text-white/60">
            <a v-for="social in socials" :key="social.label" href="#" class="hover:text-white transition-colors flex items-center gap-2">
              <img :src="social.icon" :alt="social.label" class="w-10 h-10 flex-shrink-0" />
              <span class="w-px h-3 bg-white/30"></span>
              <div class="ml-2">{{ social.label }}</div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Other links block -->
    <div class="flex flex-col gap-6">
      <div class="flex gap-4 items-center">
        <div class="flex-1 h-px bg-white/16"></div>
        <span class="text-white text-sm">+</span>
        <div class="flex-1 h-px bg-white/16"></div>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-4">
        <a v-for="link in otherLinks" :key="link" href="#" class="flex items-center gap-3 text-white font-bold text-sm justify-center py-2 hover:opacity-70 transition-opacity">
          {{ link }}
          <img src="/images/icon-arrow-right.svg" alt="" class="w-4 h-4" />
        </a>
      </div>
      <div class="flex gap-4 items-center">
        <div class="flex-1 h-px bg-white/16"></div>
        <span class="text-white text-sm">+</span>
        <div class="flex-1 h-px bg-white/16"></div>
      </div>
    </div>

    <!-- Legal text -->
    <SectionsFooterLegal />

    <!-- Bottom divider -->
    <div class="flex gap-4 items-center">
      <div class="flex-1 h-px bg-white/16"></div>
      <span class="text-white text-sm">+</span>
      <div class="flex-1 h-px bg-white/16"></div>
    </div>

    <!-- e8-logotype video -->
    <video
      src="/videos/e8-logotype-metalic-smoke.mp4"
      autoplay loop muted playsinline
      class="inset-0 w-full h-full object-cover pointer-events-none mix-blend-screen -mt-[185px]"
    />
  </footer>
</template>

<script setup lang="ts">
import InlineSvg from 'vue-inline-svg'

const rating = 4.5;

function starBg(i: number): string {
  const full = Math.floor(rating)
  const fraction = rating % 1
  if (i <= full) return '#219653'
  if (i === full + 1 && fraction > 0)
    return `linear-gradient(90deg, #219653 ${fraction * 100}%, #d9d9d9 ${fraction * 100}%)`
  return '#d9d9d9'
}

const quickLinks = [
  { label: 'Meet E8' },
  { label: 'Trading symbols' },
  { label: 'Affiliate program' },
  { label: 'Contact' },
  { label: 'About us' },
  { label: 'Help center', external: true },
  { label: 'E8X dashboard', external: true },
  { label: 'Careers' }
]

const socials = [
  { label: 'Discord', icon: '/images/icon-discord.svg' },
  { label: 'Youtube', icon: '/images/icon-youtube.svg' },
  { label: 'X', icon: '/images/icon-x.svg' },
  { label: 'Instagram', icon: '/images/icon-instagram.svg' }
]

const otherLinks = ['Other links', 'Trial account', 'Discounts', 'Education']
</script>
