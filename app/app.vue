<template>
  <UApp :toaster="{ position: 'top-right' }">
    <NuxtPage />
  </UApp>
</template>

<script setup lang="ts">
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
    { name: 'robots', content: 'index, follow' },
    { name: 'theme-color', content: '#1F1D17' },
    { name: 'application-name', content: 'E8 Markets' },
    { name: 'msapplication-TileColor', content: '#000' },
    { name: 'apple-mobile-web-app-capable', content: 'no' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    { name: 'apple-mobile-web-app-title', content: 'E8 Markets' },
    { name: 'mobile-web-app-capable', content: 'no' }
  ],
  htmlAttrs: { lang: 'en' },
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'icon', type: 'image/x-icon', href: '/meta/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/meta/favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/meta/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/meta/favicon-48x48.png' },
    { rel: 'apple-touch-icon', sizes: '57x57', href: '/meta/apple-touch-icon-57x57.png' },
    { rel: 'apple-touch-icon', sizes: '60x60', href: '/meta/apple-touch-icon-60x60.png' },
    { rel: 'apple-touch-icon', sizes: '72x72', href: '/meta/apple-touch-icon-72x72.png' },
    { rel: 'apple-touch-icon', sizes: '76x76', href: '/meta/apple-touch-icon-76x76.png' },
    { rel: 'apple-touch-icon', sizes: '114x114', href: '/meta/apple-touch-icon-114x114.png' },
    { rel: 'apple-touch-icon', sizes: '120x120', href: '/meta/apple-touch-icon-120x120.png' },
    { rel: 'apple-touch-icon', sizes: '144x144', href: '/meta/apple-touch-icon-144x144.png' },
    { rel: 'apple-touch-icon', sizes: '152x152', href: '/meta/apple-touch-icon-152x152.png' },
    { rel: 'apple-touch-icon', sizes: '167x167', href: '/meta/apple-touch-icon-167x167.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/meta/apple-touch-icon-180x180.png' },
    { rel: 'apple-touch-icon', sizes: '1024x1024', href: '/meta/apple-touch-icon-1024x1024.png' },
    { rel: 'canonical', href: 'https://e8markets.com/' },
    { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/SchibstedGrotesk-latin.woff2', crossorigin: 'anonymous' },
    { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/SchibstedGrotesk-latin-ext.woff2', crossorigin: 'anonymous' }
  ],
  script: [{
    key: 'json-ld',
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://e8markets.com/#organization',
          'name': 'E8 Markets',
          'url': 'https://e8markets.com',
          'logo': 'https://e8markets.com/images/logo-e8markets.svg',
          'description': 'E8 Markets – the best prop firm for traders. Pass our funded challenge, trade up to $1M in capital, enjoy 100% profit splits, zero hidden fees, fast payouts.',
          'sameAs': [
            'https://discord.gg/e8markets',
            'https://youtube.com/@e8markets',
            'https://twitter.com/e8markets',
            'https://instagram.com/e8markets'
          ]
        },
        {
          '@type': 'WebSite',
          '@id': 'https://e8markets.com/#website',
          'url': 'https://e8markets.com',
          'name': 'E8 Markets',
          'publisher': { '@id': 'https://e8markets.com/#organization' }
        },
        {
          '@type': 'FAQPage',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': 'What do I actually get when I sign up for the E8 Challenge?',
              'acceptedAnswer': { '@type': 'Answer', 'text': 'You get access to a simulated trading environment with up to $1M in capital. Pass the evaluation phase with consistent performance and qualify for the SimFi™ certification and performance-based payouts.' }
            },
            {
              '@type': 'Question',
              'name': 'How does the payout system work if I\'m not trading real money?',
              'acceptedAnswer': { '@type': 'Answer', 'text': 'E8 Markets licenses your simulated performance data. When you meet the payout criteria, you receive discretionary payments based on your documented performance. Payouts are contingent on E8\'s acceptance of your performance data.' }
            },
            {
              '@type': 'Question',
              'name': 'How long does it take to get paid after passing the challenge?',
              'acceptedAnswer': { '@type': 'Answer', 'text': 'Payout processing typically takes 1–5 business days after approval. E8 Markets aims to process all approved payouts quickly and efficiently.' }
            },
            {
              '@type': 'Question',
              'name': 'What trading strategies are allowed in the evaluation phase?',
              'acceptedAnswer': { '@type': 'Answer', 'text': 'Most standard trading strategies are permitted, including day trading, swing trading, and algorithmic approaches. High-frequency and news-spike exploitation strategies may be restricted. Refer to the program rules for full details.' }
            },
            {
              '@type': 'Question',
              'name': 'What happens if I break a rule or stop trading?',
              'acceptedAnswer': { '@type': 'Answer', 'text': 'Violating program rules — such as exceeding drawdown limits — results in account termination. Inactive accounts may be placed on hold. You can re-enroll by purchasing a new challenge.' }
            },
            {
              '@type': 'Question',
              'name': 'Is this a real brokerage or investment product?',
              'acceptedAnswer': { '@type': 'Answer', 'text': 'No. E8 Markets is a SaaS educational simulation platform. It is not a brokerage, investment advisor, or financial service provider. No real capital is deployed and no investment services are offered.' }
            },
            {
              '@type': 'Question',
              'name': 'Do I own the data I generate during trading?',
              'acceptedAnswer': { '@type': 'Answer', 'text': 'E8 Markets licenses your performance data as part of the program agreement. Please review the Terms & Conditions for full details on data ownership and usage rights.' }
            }
          ]
        }
      ]
    })
  }]
})

useSeoMeta({
  title: 'E8 Markets: Best Prop Firm & Funded Accounts | E8 Markets',
  description: 'E8 Markets – the best prop firm for traders. Pass our funded challenge, trade up to $1M in capital, enjoy 100% profit splits, zero hidden fees, fast payouts.',
  ogType: 'website',
  ogTitle: 'E8 Markets: Best Prop Firm & Funded Accounts',
  ogDescription: 'E8 Markets – the best prop firm for traders. Pass our funded challenge, trade up to $1M in capital, enjoy 100% profit splits, zero hidden fees, fast payouts.',
  ogUrl: 'https://e8markets.com/',
  ogSiteName: 'E8 Markets',
  ogImage: 'https://e8markets.com/meta/og-image.jpg',
  ogImageWidth: 1562,
  ogImageHeight: 608,
  twitterCard: 'summary_large_image',
  twitterTitle: 'E8 Markets: Best Prop Firm & Funded Accounts',
  twitterDescription: 'E8 Markets – the best prop firm for traders. Pass our funded challenge, trade up to $1M in capital, enjoy 100% profit splits, zero hidden fees, fast payouts.',
  twitterImage: 'https://e8markets.com/meta/og-image.jpg'
})
</script>
