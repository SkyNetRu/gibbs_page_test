<template>
  <div
    :class="['relative', block ? 'flex' : 'inline-flex', `button-glow--${variant}`]"
    :style="`--pill-height: ${pillHeight}px`"
  >
    <!-- Spinning conic-gradient border -->
    <div class="button-glow__border absolute inset-0 rounded-[835.498px] overflow-hidden pointer-events-none" />

    <!-- Inner wrapper -->
    <div
      class=" button-glow__inner relative rounded-[835.498px] m-[3.345px] transition-all duration-200"
      :class="block ? 'flex flex-1' : 'inline-flex'"
    >
      <!-- Ellipse glow overlay (center) -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden rounded-[835.498px]">
        <img :src="ellipseGlow" alt="" class="absolute block max-w-none w-full h-full">
      </div>

      <!-- Ellipse glow 1 -->
      <span class="absolute pointer-events-none w-[107px] h-[40px] right-[-0.82px] top-1/2 -translate-y-1/2">
        <img
          :src="glows[0]"
          alt=""
          class="absolute max-w-none block w-[160px] h-[93px] top-[-26.5px] left-[-26.75px]"
        >
      </span>
      <!-- Ellipse glow 2 -->
      <span class="absolute pointer-events-none w-[107px] h-[40px] right-[-0.82px] top-1/2 -translate-y-1/2">
        <img
          :src="glows[1]"
          alt=""
          class="absolute max-w-none block w-[134px] h-[67px] top-[-13.3px] left-[-13.4px]"
        >
      </span>

      <!-- Pill button -->
      <div
        class="button-glow__pill-wrap flex items-center justify-center rounded-[835.498px] overflow-hidden"
        :class="block ? 'flex-1' : ''"
        @mousemove="onMouseMove"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
      >
        <!-- Cursor glow (follows mouse) -->
        <span
          class="button-glow__cursor-glow"
          :class="{ 'button-glow__cursor-glow--visible': isHovered }"
          :style="{ left: `${cursorX}px`, top: `${cursorY}px` }"
        >
          <svg class="button-glow__cursor-glow-svg" preserveAspectRatio="none" overflow="visible" viewBox="0 0 292.717 292.717" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#cg-blur-a)">
              <circle cx="146.359" cy="146.359" r="92.8331" :fill="`url(#cg-grad-${variant})`" />
            </g>
            <g filter="url(#cg-blur-b)">
              <ellipse cx="146.356" cy="146.359" rx="79.4518" ry="40.1441" :fill="glowColors.inner" />
            </g>
            <defs>
              <filter id="cg-blur-a" x="0" y="0" width="292.717" height="292.717" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feGaussianBlur stdDeviation="26.7627" />
              </filter>
              <filter id="cg-blur-b" x="13.3789" y="52.6895" width="265.954" height="187.339" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feGaussianBlur stdDeviation="26.7627" />
              </filter>
              <radialGradient :id="`cg-grad-${variant}`" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(146.359 146.359) rotate(90) scale(92.8331)">
                <stop offset="0" stop-color="white" stop-opacity="0.5" />
                <stop offset="0.5" :stop-color="glowColors.mid" stop-opacity="0.75" />
                <stop offset="1" :stop-color="glowColors.outer" stop-opacity="0.5" />
              </radialGradient>
            </defs>
          </svg>
        </span>
        <UButton
          :href="href"
          :to="to"
          :class="block ? 'w-full' : ''"
          :ui="{ base: 'button-glow__pill relative inline-flex items-center justify-center rounded-full cursor-pointer transition-colors' }"
        >
          <span
            class="button-glow__text relative text-[14px] not-italic font-bold leading-5 uppercase whitespace-nowrap [font-feature-settings:'liga'_off,'calt'_off]"
          >
            <slot>{{ label }}</slot>
          </span>
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import glowOrange1 from '~/assets/svg/button-glow-1.svg'
import glowOrange2 from '~/assets/svg/button-glow-2.svg'
import glowTeal1 from '~/assets/svg/button-glow-teal-1.svg'
import glowTeal2 from '~/assets/svg/button-glow-teal-2.svg'
import ellipseGlow from '~/assets/svg/button-glow-ellipse.svg'

const glowMap = {
  orange: [glowOrange1, glowOrange2],
  teal: [glowTeal1, glowTeal2],
  salmon: [glowOrange1, glowOrange2]
}

const props = withDefaults(defineProps<{
  label?: string
  href?: string
  to?: string
  variant?: 'orange' | 'teal' | 'salmon'
  pillHeight?: number
  block?: boolean
}>(), {
  variant: 'orange',
  pillHeight: 42,
  block: false
})

const glows = computed(() => glowMap[props.variant])

const glowColorMap = {
  orange: { outer: '#FF6900', mid: '#FEF9C2', inner: '#FFF7ED' },
  salmon: { outer: '#FF6900', mid: '#ffddc9', inner: '#FFF7ED' },
  teal: { outer: '#19f3cb', mid: '#d0faf5', inner: '#e0faf8' }
}
const glowColors = computed(() => glowColorMap[props.variant])

const cursorX = ref(0)
const cursorY = ref(0)
const isHovered = ref(false)

function onMouseMove(e: MouseEvent) {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  cursorX.value = e.clientX - rect.left
  cursorY.value = e.clientY - rect.top
}
</script>

<style lang="scss" scoped>
.button-glow {
  // ─── Border ───
  // mask-composite: exclude punches out the content-box area, leaving only the ring
  &__border {
    padding: 2px;
    mask-image: linear-gradient(black, black), linear-gradient(black, black);
    mask-clip: content-box, border-box;
    mask-composite: exclude;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      aspect-ratio: 1;
      top: 50%;
      left: 50%;
      animation: border-spin 2s linear infinite;
    }
  }

  @keyframes border-spin {
    from { transform: translate(-50%, -50%) rotate(-90deg); }
    to   { transform: translate(-50%, -50%) rotate(270deg); }
  }

  // ─── Cursor glow ───
  &__cursor-glow {
    position: absolute;
    pointer-events: none;
    width: 185.666px;
    height: 185.666px;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.2s ease;
    z-index: 1;
  }

  &__cursor-glow--visible {
    opacity: 1;
  }

  &__cursor-glow-svg {
    position: absolute;
    display: block;
    max-width: 50%;
    max-height: 50%;
    opacity: 0.4;
    top: 50%;
    left: 50%;
    width: 157.66%;
    height: 157.66%;
    transform: translate(-50%, -50%);
  }

  // ─── Text ───
  &__text {
    letter-spacing: -0.56px;
  }

  // ─── Orange variant ───
  &--orange {
    .button-glow__pill-wrap {
      padding: 4px;
    }

    .button-glow__border::before {
      background: conic-gradient(from 0deg, transparent 0%, #ff6900e6 50%, transparent 100%);
    }

    .button-glow__inner {
      background: transparent;
    }

    :deep(.button-glow__pill) {
      border-radius: 835.498px;
      border: 1px solid rgba(255, 255, 255, 0.50);
      background: radial-gradient(163.43% 78.85% at 50% 50%, #fff 75%, rgba(255, 255, 255, 0) 100%);
      padding-inline: 33px;
      height: var(--pill-height, 42px);
      transition: border-color 0.15s ease, box-shadow 0.15s ease;

      &:active {
        background: radial-gradient(163.43% 78.85% at 50% 50%, rgba(255, 255, 255, 0.92) 75%, rgba(255, 255, 255, 0) 100%);
        box-shadow:
          inset 3px 3px 8px rgba(0, 0, 0, 0.5),
          inset -2px -2px 5px rgba(255, 255, 255, 0.5);
        border-color: rgba(0, 0, 0, 0.50);
      }
    }

    .button-glow__text {
      color: #000000;
      text-shadow: 0 0 56px #000;
    }
  }

  // ─── Salmon variant ───
  &--salmon {
    .button-glow__pill-wrap {
      padding: 4px;
    }

    .button-glow__border::before {
      background: conic-gradient(from 0deg, transparent 0%, #ff690080 50%, transparent 100%);
    }

    .button-glow__inner {
      background: transparent;
    }

    :deep(.button-glow__pill) {
      background: #ffbfa4;
      padding-inline: 33px;
      height: var(--pill-height, 42px);
      box-shadow: inset 0 3.345px 14.134px 0 #ff6f1f;
      transition: box-shadow 0.15s ease;

      &:active {
        box-shadow:
          inset 0 3.345px 14.134px 0 #ff6f1f,
          inset 3px 3px 8px rgba(0, 0, 0, 0.7),
          inset -2px -2px 5px rgba(255, 255, 255, 0.3);
      }
    }

    .button-glow__text {
      color: #441306;
      text-shadow: none;
    }

  }

  // ─── Teal variant ───
  &--teal {
    .button-glow__pill-wrap {
      padding: 0;
    }

    .button-glow__border::before {
      background: conic-gradient(from 0deg, transparent 0%, #42b5a1e6 50%, transparent 100%);
    }

    .button-glow__inner {
      background: linear-gradient(90deg, rgba(66, 182, 162, 0.32) 0%, rgba(66, 184, 162, 0.32) 100%);
    }

    :deep(.button-glow__pill) {
      background: #19f3cb;
      border: 1px solid rgba(66, 182, 162, 0.5);
      padding-inline: 12px;
      height: var(--pill-height, 36px);
      transition: border-color 0.15s ease, box-shadow 0.15s ease;

      &:active {
        box-shadow:
          inset 3px 3px 8px rgba(0, 0, 0, 0.5),
          inset -2px -2px 5px rgba(255, 255, 255, 0.4);
        border-color: rgba(30, 150, 130, 0.7);
      }
    }

    .button-glow__text {
      color: #03020e;
      letter-spacing: -0.42px;
    }
  }
}
</style>
