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
    {
      text: 'History',
      link: '/history',
    },
    {
      text: 'White Paper',
      link: '/white-paper',
      items: [
        {
          text: 'Executive Summary',
          link: '/white-paper/executive-summary',
        },
        {
          text: '1. Commitment Pooling Protocol (CPP)',
          link: '/white-paper/chapter-01-commitment-pooling-protocol-cpp-the-core-primitive',
        },
        {
          text: '2. The Accounting Shift',
          link: '/white-paper/chapter-02-the-accounting-shift-from-assets-to-trust',
        },
        {
          text: '3. Velocity of Settlement',
          link: '/white-paper/chapter-03-velocity-of-settlement-why-liquidity-providers-should-care',
        },
        {
          text: '4. Reusable Forward-Style Collateral',
          link: '/white-paper/chapter-04-reusable-forward-style-collateral',
        },
        {
          text: '5. From Isolated Pools to a Federated Network',
          link: '/white-paper/chapter-05-from-isolated-pools-to-a-federated-network',
        },
        {
          text: '6. Network-Level Liquidity & Governance',
          link: '/white-paper/chapter-06-the-missing-piece-network-level-liquidity-governance',
        },
        {
          text: '7. The CLC DAO and the CLC Token',
          link: '/white-paper/chapter-07-the-clc-dao-and-the-clc-token',
        },
        {
          text: '8. Technical Scope & Growth',
          link: '/white-paper/chapter-08-technical-scope-growth',
        },
        {
          text: '9. Economics for LPs',
          link: '/white-paper/chapter-09-economics-for-lps',
        },
        {
          text: '10. Comprehensive Risk Framework',
          link: '/white-paper/chapter-10-comprehensive-risk-framework',
        },
        {
          text: '11. Governance Mechanics',
          link: '/white-paper/chapter-11-governance-mechanics',
        },
        {
          text: '12. LP Term Sheet',
          link: '/white-paper/chapter-12-lp-term-sheet-non-binding-outline',
        },
        {
          text: '13. Glossary',
          link: '/white-paper/chapter-13-jargon-plain-language-glossary',
        },
        {
          text: '14. KPIs & Health Indicators',
          link: '/white-paper/chapter-14-kpis-health-indicators',
        },
        {
          text: '15. Roadmap',
          link: '/white-paper/chapter-15-roadmap-indicative',
        },
        {
          text: '16. Values & Evaluation Template',
          link: '/white-paper/chapter-16-values-evaluation-template-for-listings-liquidity-mandates',
        },
        {
          text: '17. Legal & Compliance Note',
          link: '/white-paper/chapter-17-legal-compliance-note',
        },
        {
          text: '18. Conclusion',
          link: '/white-paper/chapter-18-conclusion',
        },
        {
          text: 'Appendix',
          link: '/white-paper/appendix',
        },
        {
          text: 'Appendix A. Math Box',
          link: '/white-paper/appendix-a-math-box',
        },
        {
          text: 'Appendix B. Fee Waterfall',
          link: '/white-paper/appendix-b-fee-waterfall',
        },
        {
          text: 'Appendix C. KPI Definitions',
          link: '/white-paper/appendix-c-kpi-definitions',
        },
        {
          text: 'Appendix D. Launch Parameters',
          link: '/white-paper/appendix-d-launch-parameters',
        },
        {
          text: 'Appendix F. Worked Example',
          link: '/white-paper/appendix-f-worked-example',
        },
        {
          text: 'Appendix F. Dataroom Checklist',
          link: '/white-paper/appendix-f-dataroom-checklist',
        },
      ],
    },
  ],
})
