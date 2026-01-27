import { createElement, Fragment } from 'react'
import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Cosmo-Local Credit',
  description: 'cosmo-local credit',
  iconUrl: '/icons/favicon.ico',
  head: createElement(
    Fragment,
    null,
    createElement('link', {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/icons/apple-touch-icon.png',
    }),
    createElement('link', {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      href: '/icons/favicon-96x96.png',
    }),
    createElement('link', {
      rel: 'manifest',
      href: '/icons/site.webmanifest',
    }),
  ),
  theme: {
    accentColor: '#10b981',
  },
  socials: [
    {
      icon: 'github',
      link: 'https://github.com/cosmo-local-credit',
    },
    {
      icon: 'x',
      link: 'https://x.com/grassEcon',
    },
    {
      icon: 'discord',
      link: 'https://discord.gg/xayVsrkHPQ',
    },
  ],
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Example',
      link: '/example',
    },
  ],
})
