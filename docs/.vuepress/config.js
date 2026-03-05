import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'INET Gateway Docs',
  description: 'Live Rail Data, Smarter Decisions',

  theme: defaultTheme({
    logo: '/images/INET Logo.png',

    navbar: ['/', '/get-started'],

    sidebar: [
      {
        text: 'Get Started',
        children: [
          '/login'
        ]
      },
      {
        text: 'CRBill',
        children: [
          '/CRBill/overview',
          '/CRBill/parts',
          '/CRBill/carmaster',
          '/CRBill/pricemaster',
          '/CRBill/vendor',
          '/CRBill/customer',
          '/CRBill/brc',
          '/CRBill/auditrules',
          '/CRBill/templates'
        ]
      }
    ]
  }),

  bundler: viteBundler(),
})