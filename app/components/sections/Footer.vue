<template>
  <footer class="bg-[#000504] px-20 py-20 flex flex-col gap-16">
    <div class="flex gap-4 items-center">
      <div class="flex-1 h-px bg-white/16"></div>
      <span class="text-white text-sm">+</span>
      <div class="flex-1 h-px bg-white/16"></div>
    </div>

    <div class="flex gap-4 items-start">
      <!-- Left: brand -->
      <div class="w-[632px] flex flex-col gap-6">
        <div class="flex items-center gap-2">
          <img src="/images/logo-e8markets-footer.svg" alt="E8Markets" class="h-8 w-auto" />
        </div>
        <p class="text-white/80 text-sm max-w-[416px] leading-relaxed">
          Get in contact with us directly from this site with our live customer support or at our help center
        </p>
        <!-- Trustpilot -->
        <div class="flex flex-col gap-4 mt-auto">
          <div class="flex items-center gap-1">
            <div v-for="i in 4" :key="i" class="w-8 h-8 bg-[#219653] flex items-center justify-center">
              <span class="text-white text-lg">★</span>
            </div>
            <div class="w-8 h-8 flex items-center justify-center" style="background: linear-gradient(90deg, #219653 50%, #d9d9d9 50%)">
              <span class="text-white text-lg">★</span>
            </div>
          </div>
          <p class="text-white/80 text-sm">Rated 4.5/5.0</p>
        </div>
      </div>

      <!-- Right: link columns -->
      <div class="flex gap-4">
        <!-- Quick links -->
        <div class="w-[200px] flex flex-col gap-5">
          <p class="text-white text-sm font-medium">Quick links</p>
          <div class="flex flex-col gap-3 text-sm text-white/60">
            <a v-for="link in quickLinks" :key="link.label" href="#" class="hover:text-white transition-colors flex items-center gap-2">
              {{ link.label }}
              <span v-if="link.external" class="text-xs">↗</span>
            </a>
          </div>
        </div>
        <!-- Legal -->
        <div class="w-[200px] flex flex-col gap-5">
          <p class="text-white text-sm font-medium">Legal</p>
          <div class="flex flex-col gap-3 text-sm text-white/60">
            <a href="#" class="hover:text-white transition-colors">Privacy policy</a>
            <a href="#" class="hover:text-white transition-colors">Terms & conditions</a>
          </div>
        </div>
        <!-- Socials -->
        <div class="w-[200px] flex flex-col gap-5">
          <p class="text-white text-sm font-medium">Socials</p>
          <div class="flex flex-col gap-3 text-sm text-white/60">
            <a v-for="social in socials" :key="social" href="#" class="hover:text-white transition-colors">{{ social }}</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Divider + other links -->
    <div class="flex flex-col gap-6">
      <div class="flex gap-4 items-center">
        <div class="flex-1 h-px bg-white/16"></div>
        <span class="text-white text-sm">+</span>
        <div class="flex-1 h-px bg-white/16"></div>
      </div>
      <div class="flex items-center justify-between">
        <a v-for="link in otherLinks" :key="link" href="#" class="flex items-center gap-2 text-white font-bold text-sm uppercase flex-1 justify-center hover:opacity-70 transition-opacity">
          {{ link }} →
        </a>
      </div>
      <div class="flex gap-4 items-center">
        <div class="flex-1 h-px bg-white/16"></div>
        <span class="text-white text-sm">+</span>
        <div class="flex-1 h-px bg-white/16"></div>
      </div>
    </div>

    <!-- Legal text -->
    <div class="flex flex-col gap-6 text-xs text-white/80">
      <div>
        <p class="text-white text-sm mb-1">Website Ownership</p>
        <p class="italic leading-relaxed">This website is subject to the internal rules and policies of Digital Renaissance LLC, a company incorporated under the laws of Puerto Rico.</p>
      </div>
      <div>
        <p class="text-white text-sm mb-1">E8 Funding LLC</p>
        <p class="italic leading-relaxed">E8 Funding is a technology and education company located at: 4101 McEwen Rd #205, Dallas, TX 75244. E8 Funding provides access to trading accounts within a simulated environment for educational use only.</p>
      </div>
      <div>
        <p class="text-white text-sm mb-1">Educational Use Only</p>
        <p class="italic leading-relaxed">All content provided by E8 Funding LLC is intended strictly for informational and educational purposes. The content does not constitute investment advice or personal recommendations.</p>
      </div>
      <div>
        <p class="text-white text-sm mb-1">Hypothetical Performance Disclosure – CFTC Rule 4.41</p>
        <p class="italic leading-relaxed">Simulated or hypothetical trading results have inherent limitations. No representation is being made that any account will achieve profits or losses similar to those displayed.</p>
      </div>
    </div>

    <div class="flex gap-4 items-center">
      <div class="flex-1 h-px bg-white/16"></div>
      <span class="text-white text-sm">+</span>
      <div class="flex-1 h-px bg-white/16"></div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const quickLinks = [
  { label: 'Meet E8' },
  { label: 'Trading symbols' },
  { label: 'Affiliate program' },
  { label: 'Contact' },
  { label: 'About us' },
  { label: 'Help center', external: true },
  { label: 'E8X dashboard', external: true },
  { label: 'Careers' }
]
const socials = ['Discord', 'Youtube', 'X', 'Instagram']
const otherLinks = ['Other links', 'Trial account', 'Discounts', 'Education']
</script>
