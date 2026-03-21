<template>
  <div class="border border-white/10 rounded-[32px] p-[13px] flex flex-col gap-3 w-full max-w-[331px]">
    <!-- Capital + price -->
    <div class="px-3 flex flex-col gap-3">
      <div class="flex items-center justify-between h-12">
        <span class="text-[32px] text-white font-normal leading-[1.6]">{{ capital }}</span>
        <span class="bg-white/4 text-white text-xs rounded-full px-3 py-2">Simulated Capital</span>
      </div>
      <div class="flex items-center gap-8 justify-center">
        <span class="text-white/50 text-lg line-through">{{ originalPrice }}</span>
        <span class="text-white">→</span>
        <span class="text-white text-[32px] font-bold uppercase tracking-[-0.64px]">{{ salePrice }}</span>
      </div>
      <p class="text-white text-xs text-center">Save <strong>{{ save }}</strong> with our code on first order</p>
    </div>

    <!-- CTA area -->
    <div class="bg-white/6 rounded-lg flex flex-col gap-3 pt-3 pb-1 px-2">
      <div class="flex items-center gap-2 justify-center">
        <img src="/images/icon-check.svg" alt="check" class="w-[18px] h-[18px]" />
        <span class="text-[#cfcfcf] text-sm">No Activation Fee</span>
      </div>
      <!-- Get Started button -->
      <AtomicButtonGlow variant="salmon" label="GET STARTED" :block="true" />
      <!-- Objectives -->
      <div class="flex flex-col gap-5 pb-1 px-2">
        <p class="text-white text-sm font-medium text-center uppercase">Challenge objectives</p>
        <div class="flex flex-col gap-[18px] text-xs">
          <div v-for="obj in objectives" :key="obj.label" class="flex items-center justify-between">
            <span class="text-white/60">{{ obj.label }}</span>
            <span class="text-white font-bold">{{ obj.value }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Performance account link -->
    <div class="flex">
      <AtomicButtonSecondary label="PERFORMANCE ACCOUNT" class="flex-1" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  capital: string
  originalPrice: string
  salePrice: string
  save: string
  objectives: { label: string; value: string }[]
}>()
</script>
