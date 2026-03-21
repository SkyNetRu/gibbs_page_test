<template>
  <div class="rounded-[20px] overflow-hidden w-full max-w-[416px] h-[570px] relative flex flex-col">
    <img
      :src="bg"
      alt=""
      class="absolute inset-0 w-full h-full object-cover"
    >

    <!-- ─── Content ─── -->
    <div class="relative flex flex-col gap-6 z-10 px-[35px] pt-[34px]">
      <h3 class="text-white text-2xl font-medium whitespace-nowrap">
        {{ title }}
      </h3>

      <!-- Bullet points -->
      <ul
        v-if="showBullets !== false"
        class="flex flex-col gap-3"
      >
        <li
          v-for="point in points"
          :key="point"
          class="flex items-center gap-6"
        >
          <span class="relative flex-shrink-0 w-0 h-3">
            <span class="absolute top-[-100%] right-[-13px] bottom-[-100%] left-[-12px]">
              <img
                src="/images/cert-bullet.svg"
                alt=""
                class="block max-w-none w-full h-full"
              >
            </span>
          </span>
          <p class="text-white/80 text-base leading-[1.4] font-schibsted">
            {{ point }}
          </p>
        </li>
      </ul>

      <!-- Plain description (no bullets) -->
      <p
        v-else
        class="text-white/80 text-base leading-[1.4] font-schibsted whitespace-pre-line"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  bg: string
  title: string
  points?: string[]
  description?: string
  showBullets?: boolean
}>()
</script>
