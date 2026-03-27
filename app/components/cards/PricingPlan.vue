<template>
  <div class="border border-white/10 rounded-[32px] p-3 flex flex-col gap-3 w-full max-w-[311px]">
    <!-- Capital + price -->
    <div class="px-3 flex flex-col gap-3">
      <div class="flex items-center justify-between">
        <span class="text-[32px] text-white font-normal leading-[1.6]">{{ capital }}</span>
        <span class="font-schibsted text-xs bg-white/4 text-white text-base rounded-full px-3 py-2">Simulated Capital</span>
      </div>
      <div class="flex items-center gap-3 justify-center">
        <span class="text-white/50 text-lg line-through">{{ originalPrice }}</span>
        <span class="text-white">→</span>
        <span class="text-white text-[32px] font-bold uppercase tracking-[-0.64px]">{{ salePrice }}</span>
      </div>
      <p class="text-white text-base text-center">
        Save <strong>{{ save }}</strong> with our code on first order
      </p>
    </div>

    <!-- CTA area -->
    <div class="bg-white/6 rounded-lg flex flex-col gap-3 pt-3 pb-3 px-3">
      <div class="flex items-center gap-2 justify-center">
        <img src="/images/icon-check.svg" alt="check" class="w-4.5 h-4.5">
        <span class="text-[#cfcfcf] text-sm">No Activation Fee</span>
      </div>
      <AtomicButtonGlow variant="salmon" label="GET STARTED" href="https://e8x.e8markets.com" :block="true" />

      <!-- Objectives flip block -->
      <div class="objectives-flip" :class="{ 'is-flipped': isFlipped }">
        <!-- Front: Challenge -->
        <div class="objectives-face objectives-face--front flex flex-col gap-5 pb-3 px-3">
          <p class="text-white text-sm font-schibsted font-medium text-center uppercase">
            Challenge objectives
          </p>
          <div class="flex flex-col gap-4.5 text-base">
            <div v-for="obj in objectives" :key="obj.label" class="flex items-center justify-between">
              <span class="text-white/60">{{ obj.label }}</span>
              <span class="text-white font-bold">{{ obj.value }}</span>
            </div>
          </div>
        </div>
        <!-- Back: Performance -->
        <div class="objectives-face objectives-face--back flex flex-col gap-5 pb-3 px-3">
          <p class="text-white text-sm font-schibsted font-medium text-center uppercase">
            Performance objectives
          </p>
          <div class="flex flex-col gap-4.5 text-base">
            <div v-for="obj in performanceObjectives" :key="obj.label" class="flex items-center justify-between">
              <span class="text-white/60">{{ obj.label }}</span>
              <span class="text-white font-bold">{{ obj.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Toggle button -->
    <div class="flex">
      <AtomicButtonSecondary
        :label="isFlipped ? 'CHALLENGE OBJECTIVES' : 'PERFORMANCE ACCOUNT'"
        class="flex-1"
        @click="isFlipped = !isFlipped"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const isFlipped = ref(false)

defineProps<{
  capital: string
  originalPrice: string
  salePrice: string
  save: string
  objectives: { label: string, value: string }[]
  performanceObjectives: { label: string, value: string }[]
}>()
</script>

<style scoped>
.objectives-flip {
  display: grid;
  grid-template-areas: "obj";
  perspective: 800px;
}

.objectives-face {
  grid-area: obj;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
}

.objectives-face--front {
  transform: rotateY(0deg);
}

.objectives-face--back {
  transform: rotateY(180deg);
}

.objectives-flip.is-flipped .objectives-face--front {
  transform: rotateY(-180deg);
}

.objectives-flip.is-flipped .objectives-face--back {
  transform: rotateY(0deg);
}
</style>
