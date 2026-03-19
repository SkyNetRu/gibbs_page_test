<template>
  <section class="bg-[#000504] py-20">
    <div class="max-w-[1440px] mx-auto flex flex-col gap-8">
      <!-- Headline -->
      <div class="flex flex-col items-center gap-8">
        <h2 class="text-[48px] text-white text-center leading-[1.6]">
          <span class="font-normal">Choose</span> your E8 Challenge
        </h2>
        <p class="text-white/80 text-base font-medium text-center">
          Select your market and account. Your enrollment cost scales with the simulation size you select.
        </p>
        <!-- Market tabs -->
        <div class="flex border-b border-white/16">
          <button
            v-for="market in markets"
            :key="market"
            @click="activeMarket = market"
            class="px-10 py-3.5 text-base font-bold capitalize transition-colors"
            :class="activeMarket === market
              ? 'text-white border-b-2 border-white'
              : market === 'Crypto' ? 'text-white/30' : 'text-white'"
          >{{ market }}</button>
        </div>
      </div>

      <!-- Container -->
      <div class="border-t border-white/16 px-20 pt-12 flex flex-col gap-14">
        <!-- Account type selector -->
        <div class="flex flex-col items-center gap-3">
          <p class="text-white/80 text-sm font-medium">Accounts</p>
          <div class="border border-white/10 rounded-full p-1 flex">
            <button
              v-for="account in accounts"
              :key="account"
              @click="activeAccount = account"
              class="px-10 py-3 text-base font-bold capitalize rounded-full transition-all"
              :class="activeAccount === account
                ? 'bg-white/8 border border-white/16 shadow-[inset_0px_-4px_24px_rgba(255,255,255,0.16)] text-white'
                : 'text-white'"
            >{{ account }}</button>
          </div>
        </div>

        <!-- Description -->
        <p class="text-white/80 text-base text-center">
          Our most popular account — designed for traders who want flexibility and high earnings.
        </p>

        <!-- Pricing cards -->
        <div class="grid grid-cols-4 gap-3">
          <div
            v-for="plan in plans"
            :key="plan.capital"
            class="border border-white/10 rounded-[32px] p-[13px] flex flex-col gap-3"
          >
            <!-- Capital + price -->
            <div class="px-3 flex flex-col gap-3">
              <div class="flex items-center justify-between h-12">
                <span class="text-[32px] text-white font-normal leading-[1.6]">{{ plan.capital }}</span>
                <span class="bg-white/4 text-white text-xs rounded-full px-3 py-2">Simulated Capital</span>
              </div>
              <div class="flex items-center gap-8">
                <span class="text-white/50 text-lg line-through">{{ plan.originalPrice }}</span>
                <span class="text-white">→</span>
                <span class="text-white text-[32px] font-bold uppercase tracking-[-0.64px]">{{ plan.salePrice }}</span>
              </div>
              <p class="text-white text-xs">Save <strong>{{ plan.save }}</strong> with our code on first order</p>
            </div>

            <!-- CTA area -->
            <div class="bg-white/6 rounded-lg flex flex-col gap-3 pt-3 pb-1 px-2">
              <div class="flex items-center gap-2">
                <img src="https://www.figma.com/api/mcp/asset/fa9f1a77-097b-4f1f-a719-1c61b11e1b8c" alt="check" class="w-[18px] h-[18px]" />
                <span class="text-[#cfcfcf] text-sm">No Activation Fee</span>
              </div>
              <!-- Get Started button -->
              <button class="w-full py-3 rounded-full font-bold text-sm text-[#441306] uppercase tracking-[-0.28px] hover:opacity-90 transition-opacity"
                style="background: linear-gradient(90deg, #ffbfa4, #ffbfa4); box-shadow: inset 0px 3.345px 14.134px 0px #ff6f1f">
                GET STARTED
              </button>
              <!-- Objectives -->
              <div class="flex flex-col gap-5 pb-1 px-2">
                <p class="text-white text-sm font-medium text-center uppercase">Challenge objectives</p>
                <div class="flex flex-col gap-[18px] text-xs">
                  <div v-for="obj in plan.objectives" :key="obj.label" class="flex items-center justify-between">
                    <span class="text-white/60">{{ obj.label }}</span>
                    <span class="text-white font-bold">{{ obj.value }}</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Performance account link -->
            <button class="w-full border border-white/24 rounded-[99px] h-12 text-white text-sm font-bold uppercase tracking-[-0.28px] hover:bg-white/10 transition-colors">
              PERFORMANCE ACCOUNT
            </button>
          </div>
        </div>

        <!-- Email promo -->
        <div class="flex flex-col items-center gap-6">
          <div class="border border-white/10 rounded-full px-6 py-3 flex items-center gap-8">
            <p class="text-white/60 text-base">Save <span class="lowercase">up to 50% with our code</span></p>
            <div class="flex items-center bg-white/10 border border-white/10 rounded-full pl-4 pr-1 py-1">
              <input type="email" placeholder="YOUR EMAIL" class="bg-transparent text-[#6d6d6d] text-sm uppercase tracking-tight outline-none w-[100px]" />
              <button class="bg-[#19f3cb] text-[#03020e] text-sm font-bold uppercase rounded-full px-4 py-2">GET CODE</button>
            </div>
          </div>
          <p class="text-white text-sm italic text-center">
            You're purchasing access to an educational simulation & assessment. Any payout is discretionary,<br>
            not guaranteed, and requires E8's acceptance & licensing of your performance data.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const markets = ['Futures', 'Forex', 'Crypto']
const accounts = ['E8 One', 'E8 Signature']
const activeMarket = ref('Futures')
const activeAccount = ref('E8 One')

const plans = [
  {
    capital: '$25,000', originalPrice: '$119', salePrice: '$55', save: '$55',
    objectives: [
      { label: 'Profit target', value: '$1,500 (6%)' },
      { label: 'Max drawdown', value: '$1,000 (4%)' },
      { label: 'Drawdown type', value: 'EOD' },
      { label: 'Pass in as little as', value: '1 Day' },
      { label: 'Payout share', value: '80%' }
    ]
  },
  {
    capital: '$50,000', originalPrice: '$150', salePrice: '$75', save: '$75',
    objectives: [
      { label: 'Profit target', value: '$3,000 (6%)' },
      { label: 'Max drawdown', value: '$2,000 (4%)' },
      { label: 'Drawdown type', value: 'EOD' },
      { label: 'Pass in as little as', value: '1 Day' },
      { label: 'Payout share', value: '80%' }
    ]
  },
  {
    capital: '$100,000', originalPrice: '$260', salePrice: '$130', save: '$130',
    objectives: [
      { label: 'Profit target', value: '$6,000 (6%)' },
      { label: 'Max drawdown', value: '$3,000 (3%)' },
      { label: 'Drawdown type', value: 'EOD' },
      { label: 'Pass in as little as', value: '1 Day' },
      { label: 'Payout share', value: '80%' }
    ]
  },
  {
    capital: '$150,000', originalPrice: '$390', salePrice: '$195', save: '$195',
    objectives: [
      { label: 'Profit target', value: '$9,000 (6%)' },
      { label: 'Max drawdown', value: '$4,500 (3%)' },
      { label: 'Drawdown type', value: 'EOD' },
      { label: 'Pass in as little as', value: '1 Day' },
      { label: 'Payout share', value: '80%' }
    ]
  }
]
</script>
