<template>
  <section class="bg-[#000504] border-t border-l border-r border-white/16 px-5 py-10 lg:p-20">
    <div class="max-w-[1280px] mx-auto flex gap-20 flex-col lg:flex-row">
      <!-- Left side -->
      <div class="flex-1 flex flex-col gap-12">
        <h2 class="text-[56px] text-white leading-[1.2]">
          Frequently asked<br>
          questions
        </h2>
        <div class="flex flex-col gap-6">
          <inline-svg src="/images/icon-scroll-down.svg" class="w-[10px] h-[13px] rotate-180" />
          <p class="text-white text-sm italic leading-relaxed">
            E8 Markets operates in a simulated trading environment.<br>
            Payouts are discretionary and based on simulated performance under defined program parameters.<br>
            No live capital is deployed. No investment services are offered.
          </p>
        </div>
      </div>

      <!-- Right side: FAQ list -->
      <div class="max-w-[640px] w-full flex flex-col gap-3">
        <div
          v-for="(faq, i) in faqs"
          :key="i"
          class="backdrop-blur-[20px] bg-white/1 border border-white/8 rounded-xl p-6 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors shadow-[inset_0_-4px_48px_rgba(255,255,255,0.08)]"
          @click="toggleFaq(i)"
        >
          <p class="text-white text-lg flex-1 pr-6">{{ faq.question }}</p>
          <span class="text-white text-xl flex-shrink-0 w-6 text-center">{{ openFaq === i ? '×' : '+' }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import InlineSvg from 'vue-inline-svg'
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => {
  openFaq.value = openFaq.value === i ? null : i
}

const faqs = [
  { question: 'What do I actually get when I sign up for the E8 Challenge?' },
  { question: "How does the payout system work if I'm not trading real money?" },
  { question: 'How long does it take to get paid after passing the challenge?' },
  { question: 'What trading strategies are allowed in the evaluation phase?' },
  { question: 'What happens if I break a rule or stop trading?' },
  { question: 'Is this a real brokerage or investment product?' },
  { question: 'Do I own the data I generate during trading?' }
]
</script>
