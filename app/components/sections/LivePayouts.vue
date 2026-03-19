<template>
  <section class="bg-white py-[124px]">
    <div class="max-w-[1440px] mx-auto px-20 flex flex-col items-center gap-16">
      <h2 class="text-[32px] text-[#000504] text-center max-w-[622px] leading-[1.2]">
        Over $60 <span class="lowercase font-normal">million paid out to traders who chose the smarter way to trade</span>
      </h2>
      <div class="flex items-center justify-between w-full max-w-[1280px]">
        <div v-for="badge in badges" :key="badge.caption" class="flex flex-col items-center gap-4 max-w-[231px] flex-1">
          <div class="h-20 flex items-center justify-center w-full">
            <img :src="badge.img" :alt="badge.caption" class="max-h-full max-w-full object-contain" />
          </div>
          <p class="text-[#717173] text-base font-medium text-center" v-html="badge.caption"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const badges = [
  { img: 'https://www.figma.com/api/mcp/asset/eb427e4d-6627-4ca9-918b-30dd79934e30', caption: '#3 most downloaded finance<br>app' },
  { img: 'https://www.figma.com/api/mcp/asset/fb7add92-2faf-4156-a7dd-4257c79ac78c', caption: '4.7 out of 5 on Trustpilot' },
  { img: 'https://www.figma.com/api/mcp/asset/127b0f56-048b-4881-bd66-7de0f53e0959', caption: 'Best International Payments<br>Provider 2025' },
  { img: 'https://www.figma.com/api/mcp/asset/1de04d64-77c2-4173-95be-e2c888b3aa64', caption: 'Best Consumer Banking Mobile<br>App 2025' }
]
</script>
