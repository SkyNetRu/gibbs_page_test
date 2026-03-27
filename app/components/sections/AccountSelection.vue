<template>
  <section class="bg-[#000504] py-20">
    <div class=" mx-auto flex flex-col">
      <!-- Headline -->
      <div class="flex flex-col items-center gap-8">
        <h2 class="text-5xl text-white text-center leading-[1.6]">
          Choose your E8 Challenge
        </h2>
        <p class="text-white/80 text-base font-medium text-center ">
          Select your market and account. Your enrollment cost scales with the simulation size you select.
        </p>
        <!-- Market tabs -->
        <UTabs
          v-model="activeMarket"
          :items="marketTabs"
          variant="link"
          color="neutral"
          :ui="{
            list: 'market-tabs-list p-0 gap-0 ',
            indicator: 'hidden',
            trigger: 'market-tab px-10 py-3.5 text-base font-bold capitalize text-white rounded-none data-[state=inactive]:text-white data-[state=inactive]:opacity-100 data-[state=active]:text-white',
            content: 'hidden'
          }"
        />
      </div>

      <!-- Container -->
      <div class="border-t border-white/16 px-5 lg:px-20 pt-12 flex flex-col gap-13.5">
        <!-- Account type selector -->
        <div class="flex flex-col items-center gap-3">
          <p class="text-white/80 text-sm font-medium">
            Accounts
          </p>
          <div class="border border-white/10 rounded-full p-1 flex">
            <button
              v-for="account in accounts"
              :key="account"
              class="px-10 py-3.5 text-base font-bold capitalize rounded-full border border-transparent transition-[background,box-shadow]"
              :class="activeAccount === account
                ? 'bg-white/8 border-white/16 shadow-[inset_0_-4px_24px_rgba(255,255,255,0.16)] text-white'
                : 'text-white'"
              @click="activeAccount = account"
            >
              {{ account }}
            </button>
          </div>
        </div>

        <div class="flex flex-col gap-8">
          <!-- Description -->
          <p class="text-white/80 text-base text-center">
            Our most popular account — designed for traders who want flexibility and high earnings.
          </p>

          <!-- Pricing cards -->
          <div class="flex flex-wrap gap-3 justify-center">
            <CardsPricingPlan
              v-for="plan in plans"
              :key="plan.capital"
              v-bind="plan"
            />
          </div>
        </div>

        <!-- Email promo -->
        <div class="flex flex-col items-center gap-6">
          <div
            class="md:border md:border-white/10 rounded-[123px] p-3 flex flex-col items-center gap-6 md:flex-row md:gap-6">
            <p class="border border-white/10 rounded-[123px] p-4 md:border-0 md:p-0 text-white/60 text-base pl-3">
              Save up to 50% with our code
            </p>
            <AtomicEmailInput/>
          </div>
          <div class="flex flex-col items-center gap-6">
            <AtomicScrollIndicator/>
            <p class="text-white text-sm italic text-center">
              You're purchasing access to an educational simulation & assessment. Any payout is discretionary,<br>
              not guaranteed, and requires E8's acceptance & licensing of your performance data.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface MarketTab {
  label: string
  value: string
  disabled?: boolean
}

interface Objective {
  label: string
  value: string
}

interface PricingPlan {
  capital: string
  originalPrice: string
  salePrice: string
  save: string
  objectives: Objective[]
  performanceObjectives: Objective[]
}

const marketTabs: MarketTab[] = [
  { label: 'Futures', value: 'Futures' },
  { label: 'Forex', value: 'Forex' },
  { label: 'Crypto', value: 'Crypto', disabled: true }
]
const accounts = ['E8 One', 'E8 Signature']
const activeMarket = ref('Futures')
const activeAccount = ref('E8 One')

const plans: PricingPlan[] = [
  {
    capital: '$25,000', originalPrice: '$119', salePrice: '$55', save: '$55',
    objectives: [
      { label: 'Profit target', value: '$1,500 (6%)' },
      { label: 'Max drawdown', value: '$1,000 (4%)' },
      { label: 'Drawdown type', value: 'EOD' },
      { label: 'Pass in as little as', value: '1 Day' },
      { label: 'Payout share', value: '80%' }
    ],
    performanceObjectives: [
      { label: 'Max drawdown', value: '$1,000 (4%)' },
      { label: 'Drawdown type', value: 'EOD' },
      { label: 'Daily pause', value: '$500 (2%)' },
      { label: 'Consistency rule', value: '35%' },
      { label: 'First payout in as little as', value: '3 Days' },
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
    ],
    performanceObjectives: [
      { label: 'Max drawdown', value: '$2,000 (4%)' },
      { label: 'Drawdown type', value: 'EOD' },
      { label: 'Daily pause', value: '$1,000 (2%)' },
      { label: 'Consistency rule', value: '35%' },
      { label: 'First payout in as little as', value: '3 Days' },
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
    ],
    performanceObjectives: [
      { label: 'Max drawdown', value: '$3,000 (3%)' },
      { label: 'Drawdown type', value: 'EOD' },
      { label: 'Daily pause', value: '$2,000 (2%)' },
      { label: 'Consistency rule', value: '35%' },
      { label: 'First payout in as little as', value: '3 Days' },
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
    ],
    performanceObjectives: [
      { label: 'Max drawdown', value: '$4,500 (3%)' },
      { label: 'Drawdown type', value: 'EOD' },
      { label: 'Daily pause', value: '$3,000 (2%)' },
      { label: 'Consistency rule', value: '35%' },
      { label: 'First payout in as little as', value: '3 Days' },
      { label: 'Payout share', value: '80%' }
    ]
  }
]
</script>

<style lang="scss" scoped>
:deep(.market-tab) {
  transition: background 0.2s, color 0.2s;
  border-bottom: 1px solid transparent;
}

:deep(.market-tab[data-state=active]) {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.16) 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
}

:deep(.market-tab[disabled]) {
  opacity: 0.3;
  cursor: not-allowed;
}
</style>
