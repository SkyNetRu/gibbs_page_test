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
          <AtomicScrollIndicator />
          <p class="text-white text-sm italic leading-relaxed">
            E8 Markets operates in a simulated trading environment.<br>
            Payouts are discretionary and based on simulated performance under defined program parameters.<br>
            No live capital is deployed. No investment services are offered.
          </p>
        </div>
      </div>

      <!-- Right side: FAQ accordion -->
      <div class="max-w-[640px] w-full">
        <UAccordion
          :items="faqs"
          :ui="{
            root: 'flex flex-col gap-3',
            item: 'backdrop-blur-[20px] bg-white/1 border border-white/8 rounded-xl shadow-[inset_0_-4px_48px_rgba(255,255,255,0.08)]',
            trigger: 'cursor-pointer p-6 text-white text-lg hover:bg-white/5 transition-colors rounded-xl w-full text-left',
            trailingIcon: 'text-white size-6',
            content: 'overflow-hidden',
            body: 'px-6 pb-6 text-white/70 text-sm leading-6'
          }"
        >
          <template #body="{ item }">
            <div class="flex flex-col gap-3">
              <template
                v-for="(block, i) in item.blocks"
                :key="i"
              >
                <p v-if="block.type === 'p'">
                  {{ block.text }}
                </p>
                <ul
                  v-else-if="block.type === 'bullets'"
                  class="flex flex-col gap-2"
                >
                  <li
                    v-for="bullet in block.items"
                    :key="bullet"
                    class="flex items-center gap-3"
                  >
                    <span class="w-1.5 h-1.5 rounded-full bg-[#19f3cb] shrink-0" />
                    {{ bullet }}
                  </li>
                </ul>
              </template>
            </div>
          </template>
        </UAccordion>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface FaqBlock {
  type: 'p' | 'bullets'
  text?: string
  items?: string[]
}

interface FaqItem {
  label: string
  blocks: FaqBlock[]
}

const faqs: FaqItem[] = [
  {
    label: 'What do I actually get when I sign up for the E8 Challenge?',
    blocks: [
      { type: 'p', text: 'You\'re not buying capital — you\'re gaining access to a professional simulation environment designed to build discipline and real trader psychology.' },
      { type: 'p', text: 'You get:' },
      { type: 'bullets', items: ['Simulated capital up to $400K', 'Real-time rule-based dashboards', 'Performance analytics', 'Access to real payouts based on your results'] }
    ]
  },
  {
    label: 'How does the payout system work if I\'m not trading real money?',
    blocks: [
      { type: 'p', text: 'You trade simulated capital, but the results you generate are real — and measurable.' },
      { type: 'p', text: 'When you pass, E8 processes your payout based on the percentage of simulated profit you choose to request. That percentage unlocks a payout linked to your performance data, not actual profits in a real account.' },
      { type: 'p', text: 'You earn based on your trading skill and data — not on speculation.' },
      { type: 'bullets', items: ['No clawbacks', 'No holdbacks', 'No surprises'] }
    ]
  },
  {
    label: 'How long does it take to get paid after passing the challenge?',
    blocks: [
      { type: 'p', text: 'Once you pass and meet payout conditions, most requests are processed within 1–2 business days.' },
      { type: 'p', text: 'Funds typically arrive in your account within 2–5 business days depending on the method you choose.' },
      { type: 'p', text: 'You can also control how much you wish to request and keep the rest locked in.' }
    ]
  },
  {
    label: 'What trading strategies are allowed in the challenge phase?',
    blocks: [
      { type: 'p', text: 'You can use almost any strategy that reflects your true trading style, including:' },
      { type: 'bullets', items: ['News trading', 'Discretionary and swing trading', 'Scalping', 'EAs (one unique per account)'] },
      { type: 'p', text: 'What\'s not allowed:' },
      { type: 'bullets', items: ['Copy trading between accounts', 'Hedging across multiple funded profiles'] }
    ]
  },
  {
    label: 'Is this a real brokerage or investment product?',
    blocks: [
      { type: 'p', text: 'No. E8 Markets is not a broker or financial institution.' },
      { type: 'p', text: 'We do not take deposits, manage capital, or offer investment products.' },
      { type: 'p', text: 'We are an educational and performance-based challenge platform that rewards traders for skill and structure — not luck or leverage.' }
    ]
  },
  {
    label: 'Do I own the data I generate during trading?',
    blocks: [
      { type: 'p', text: 'Yes. As long as you\'re active on the platform, you\'ll have full visibility into your:' },
      { type: 'bullets', items: ['Trade history', 'Analytics', 'Risk tracking', 'Payout records'] },
      { type: 'p', text: 'You can export this data for personal learning and review purposes.' },
      { type: 'p', text: 'We reserve the right to use anonymized data to improve our challenge systems, trader dashboards, and platform insights.' },
      { type: 'p', text: 'We never sell personal data or link it to third-party marketers.' }
    ]
  }
]
</script>
