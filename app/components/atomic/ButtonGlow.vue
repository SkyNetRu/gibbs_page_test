<template>
  <div
    :class="['relative', block ? 'flex' : 'inline-flex', `button-glow--${variant}`]"
    :style="`--pill-height: ${pillHeight}px`"
  >
    <!-- Gradient border via CSS mask -->
    <div class="button-glow__border absolute inset-0 rounded-[835.498px]" />

    <!-- Inner wrapper -->
    <div
      class="button-glow__inner relative rounded-[835.498px] p-[3.345px] transition-all duration-200"
      :class="block ? 'flex flex-1' : 'inline-flex'"
    >
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
        class="button-glow__pill-wrap flex items-center justify-center rounded-[835.498px]"
        :class="block ? 'flex-1' : ''"
      >
        <UButton
          :href="href"
          :to="to"
          :class="block ? 'w-full' : ''"
          :ui="{ base: 'button-glow__pill relative inline-flex items-center justify-center rounded-full overflow-hidden cursor-pointer transition-colors' }"
        >
          <!-- Salmon glow overlay -->
          <span
            v-if="variant === 'salmon'"
            class="button-glow__salmon-overlay"
          >
            <img
              :src="salmonGlow"
              alt=""
              class="button-glow__salmon-overlay-img"
            >
          </span>
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
import { computed } from 'vue'
import glowOrange1 from '~/assets/svg/button-glow-1.svg'
import glowOrange2 from '~/assets/svg/button-glow-2.svg'
import glowTeal1 from '~/assets/svg/button-glow-teal-1.svg'
import glowTeal2 from '~/assets/svg/button-glow-teal-2.svg'
import salmonGlow from '~/assets/svg/button-glow-salmon.svg'

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
</script>

<style lang="scss" scoped>
.button-glow {
  // ─── Border ───
  &__border {
    padding: 0.84px;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
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

    .button-glow__border {
      background: linear-gradient(90deg, rgba(255, 105, 0, 0) 0%, rgba(255, 105, 0, 0.64) 100%);
    }

    .button-glow__inner {
      background: transparent;
    }

    :deep(.button-glow__pill) {
      background: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.5);
      padding-inline: 33px;
      height: var(--pill-height, 42px);

      &:hover {
        background: rgba(255, 255, 255, 0.9);
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

    .button-glow__border {
      background: linear-gradient(90deg, rgba(255, 105, 0, 0) 0%, rgba(255, 105, 0, 0.32) 100%);
    }

    .button-glow__inner {
      background: transparent;
    }

    :deep(.button-glow__pill) {
      background: #ffbfa4;
      padding-inline: 33px;
      height: var(--pill-height, 42px);
      box-shadow: inset 0 3.345px 14.134px 0 #ff6f1f;

      &:hover {
        background: rgba(255, 191, 164, 0.8);
      }
    }

    .button-glow__text {
      color: #441306;
      text-shadow: none;
    }

    .button-glow__salmon-overlay {
      position: absolute;
      pointer-events: none;
      left: calc(50% + 100.04px);
      top: calc(50% + 1.24px);
      transform: translate(-50%, -50%);
      width: 185.666px;
      height: 185.666px;
    }

    .button-glow__salmon-overlay-img {
      position: absolute;
      display: block;
      max-width: none;
      top: -28.83%;
      left: -28.83%;
      width: 157.66%;
      height: 157.66%;
    }
  }

  // ─── Teal variant ───
  &--teal {
    .button-glow__pill-wrap {
      padding: 0;
    }

    .button-glow__border {
      background: linear-gradient(90deg, rgba(66, 181, 161, 0) 0%, rgba(66, 181, 161, 0.64) 100%);
    }

    .button-glow__inner {
      background: linear-gradient(90deg, rgba(66, 182, 162, 0.32) 0%, rgba(66, 184, 162, 0.32) 100%);
    }

    :deep(.button-glow__pill) {
      background: #19f3cb;
      border: 1px solid rgba(66, 182, 162, 0.5);
      padding-inline: 12px;
      height: var(--pill-height, 36px);

      &:hover {
        background: rgba(25, 243, 203, 0.7);
      }
    }

    .button-glow__text {
      color: #03020e;
      letter-spacing: -0.42px;
    }
  }
}
</style>
