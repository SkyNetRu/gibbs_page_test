<template>
  <footer class="bg-[#000504] px-5 md:px-20 pt-20 flex flex-col gap-16 max-w-[1440px] mx-auto">
    <!-- Top divider -->
    <AtomicDivider />

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
            aria-label="E8Markets"
          />
        </div>
        <p class="text-white/80 text-sm max-w-[416px] leading-5">
          Get in contact with us directly from this site with our live customer support or at our help center
        </p>
        <!-- Trustpilot -->
        <a
          href="https://www.trustpilot.com/review/e8markets.com?utm_medium=trustbox&amp;utm_source=Mini"
          target="_blank"
          aria-describedby="screen-reader-only-rating screen-reader-only-instruction"
          class="flex flex-col gap-4 mt-15 w-fit"
          @mouseenter="isHovered = true"
          @mouseleave="isHovered = false"
        >
          <img
            src="/images/trustpilot-logo.svg"
            alt="Trustpilot"
            width="103"
            height="20"
            loading="lazy"
            class="h-5 w-[102.5px]"
          >
          <div class="flex items-center gap-[3.2px]">
            <div
              v-for="i in 5"
              :key="i"
              class="w-8 h-8 flex items-center justify-center"
              :style="{ background: starBg(i, isHovered) }"
            >
              <img
                src="/images/icon-star.svg"
                alt="★"
                width="22"
                height="22"
                loading="lazy"
                class="w-[22px] h-[22px]"
              >
            </div>
          </div>
          <p class="text-white/80 text-sm leading-5">
            Rated {{ rating }}/5.0
          </p>
        </a>
      </div>

      <!-- Right: link columns -->
      <div class="flex gap-4 md:w-[50%] w-full flex-col sm:flex-row">
        <!-- Quick links -->
        <div class="w-[200px] flex flex-col gap-5">
          <p class="text-white text-sm font-medium">
            Quick links
          </p>
          <div class="flex flex-col gap-3 text-sm text-white/60">
            <a
              v-for="link in quickLinks"
              :key="link.label"
              :href="link.href"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener noreferrer' : undefined"
              class="hover:text-white transition-colors flex items-center gap-2"
            >
              {{ link.label }}
              <span
                v-if="link.external"
                class="relative w-10 h-5 flex-shrink-0"
              >
                <img
                  src="/images/icon-external.svg"
                  alt=""
                  width="40"
                  height="40"
                  loading="lazy"
                  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10"
                >
              </span>
            </a>
          </div>
        </div>
        <!-- Legal -->
        <div class="w-[200px] flex flex-col gap-5">
          <p class="text-white text-sm font-medium">
            Legal
          </p>
          <div class="flex flex-col gap-3 text-sm text-white/60">
            <a
              v-for="link in legalLinks"
              :key="link.label"
              :href="link.href"
              class="hover:text-white transition-colors"
            >
              {{ link.label }}
            </a>
          </div>
        </div>
        <!-- Socials -->
        <div class="w-[200px] flex flex-col gap-5">
          <p class="text-white text-sm font-medium">
            Socials
          </p>
          <div class="flex flex-col gap-3 text-sm text-white/60">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-white transition-colors flex items-center gap-2"
            >
              <img
                :src="social.icon"
                :alt="social.label"
                width="40"
                height="40"
                loading="lazy"
                class="w-10 h-10 flex-shrink-0"
              >
              <span class="w-px h-3 bg-white/30" />
              <div class="ml-2">{{ social.label }}</div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Other links block -->
    <div class="flex flex-col gap-6">
      <AtomicDivider />
      <div class="grid grid-cols-2 sm:grid-cols-4">
        <a
          v-for="link in otherLinks"
          :key="link.label"
          :href="link.href"
          class="flex items-center gap-3 text-white font-bold text-sm justify-center py-2 hover:opacity-70 transition-opacity"
        >
          {{ link.label }}
          <img
            src="/images/icon-arrow-right.svg"
            alt=""
            width="16"
            height="16"
            loading="lazy"
            class="w-4 h-4"
          >
        </a>
      </div>
      <AtomicDivider />
    </div>

    <!-- Legal text -->
    <SectionsFooterLegal />

    <!-- Bottom divider -->
    <AtomicDivider />

    <!-- e8-logotype video -->
    <video
      src="/videos/e8-logotype-metalic-smoke.mp4"
      autoplay
      loop
      muted
      playsinline
      class="inset-0 w-full h-full object-cover pointer-events-none mix-blend-screen -mt-[100px] lg:-mt-[155px] xl:-mt-[185px]"
    />
  </footer>
</template>

<script setup lang="ts">
import InlineSvg from 'vue-inline-svg'
import type { ILink, ISocial } from '~/types/links'

const rating = 4.5
const isHovered = ref(false)

function starBg(i: number, hovered = false): string {
  if (hovered) return '#007a52'
  const full = Math.floor(rating)
  const fraction = rating % 1
  if (i <= full) return '#219653'
  if (i === full + 1 && fraction > 0)
    return `linear-gradient(90deg, #219653 ${fraction * 100}%, #d9d9d9 ${fraction * 100}%)`
  return '#d9d9d9'
}

const legalLinks: ILink[] = [
  { label: 'Privacy policy', href: '/e8-markets-privacy-policy' },
  { label: 'Terms & conditions', href: '/e8-markets-terms-and-conditions' }
]

const quickLinks: ILink[] = [
  { label: 'Meet E8', href: '/meet-e8' },
  { label: 'Trading symbols', href: 'https://e8x.e8markets.com/trading-symbols', external: true },
  { label: 'Affiliate program', href: '/affiliate' },
  { label: 'Contact', href: '/contact' },
  { label: 'About us', href: '/about' },
  { label: 'Help center', href: 'https://help.e8markets.com/en', external: true },
  { label: 'E8X dashboard', href: 'https://e8x.e8markets.com/', external: true },
  { label: 'Careers', href: '/careers' }
]

const socials: ISocial[] = [
  { label: 'Discord', icon: '/images/icon-discord.svg', href: 'https://discord.com/invite/e8markets' },
  { label: 'Youtube', icon: '/images/icon-youtube.svg', href: 'https://www.youtube.com/channel/UCHGznmL3rdnsDKDgrRyK_VQ' },
  { label: 'X', icon: '/images/icon-x.svg', href: 'https://twitter.com/e8markets' },
  { label: 'Instagram', icon: '/images/icon-instagram.svg', href: 'https://www.instagram.com/E8Marketscom' }
]

const otherLinks: ILink[] = [
  { label: 'Other links', href: '/other-links' },
  { label: 'Trial account', href: '/trial-account' },
  { label: 'Discounts', href: '/e8-markets-discount-code' },
  { label: 'Education', href: '/education' }
]
</script>
