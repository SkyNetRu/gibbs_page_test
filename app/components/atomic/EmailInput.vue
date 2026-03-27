<template>
  <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-4 sm:justify-center w-full lg:w-auto">
    <div
      class="flex items-center min-h-[52.5px] rounded-full border-[0.585px] pl-4.5 pr-3 py-1 flex-1 min-w-full sm:min-w-0 transition-colors duration-200"
      :class="error ? 'bg-red-500/10 border-red-500/50' : 'bg-white/10 border-white/10'"
    >
      <input
        v-model="email"
        type="email"
        placeholder="YOUR EMAIL"
        class="bg-transparent text-[#6d6d6d] text-sm uppercase tracking-[-0.42px] outline-none w-full min-w-0 [font-family:'Inter',sans-serif] [font-feature-settings:'cv09'_1,'ss11'_1,'calt'_0,'liga'_0]"
        @keydown.enter="handleSubmit"
        @input="error = false"
      >
    </div>
    <AtomicButtonGlow
      label="GET CODE"
      variant="teal"
      :pill-height="36"
      @click="handleSubmit"
    />
  </div>
</template>

<script setup lang="ts">
const email = ref('')
const error = ref(false)
const toast = useToast()

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function handleSubmit() {
  if (!isValidEmail(email.value)) {
    error.value = true
    return
  }
  error.value = false
  toast.add({
    title: 'Code sent!',
    description: `Discount code sent to ${email.value}`,
    color: 'success'
  })
  email.value = ''
}
</script>
