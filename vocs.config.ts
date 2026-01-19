import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Cosmo-Local Credit',
  description: 'cosmo-local credit',
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
