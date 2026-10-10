import en from './navigation/en.json'
import de from './navigation/de.json'
import es from './navigation/es.json'
import fr from './navigation/fr.json'
import it from './navigation/it.json'
import pt from './navigation/pt.json'
import sw from './navigation/sw.json'
import uk from './navigation/uk.json'
import {
  DOCUMENTATION_LOCALES,
  hasLocalizedDocumentation,
  type SupportedLocale,
} from './locales'
import { localizedPath } from './routes'

type NavigationMessages = typeof en

export const navigationMessages: Record<SupportedLocale, NavigationMessages> = {
  ar: en,
  de,
  dz: en,
  en,
  es,
  fr,
  it,
  pt,
  sr: en,
  sw,
  uk,
}

const whitePaperItems = [
  ['executiveSummary', '/white-paper/executive-summary'],
  ['chapter01', '/white-paper/chapter-01-commitment-pooling-protocol-cpp-the-core-primitive'],
  ['chapter02', '/white-paper/chapter-02-the-accounting-shift-from-assets-to-trust'],
  ['chapter03', '/white-paper/chapter-03-velocity-of-settlement-why-liquidity-providers-should-care'],
  ['chapter04', '/white-paper/chapter-04-reusable-forward-style-collateral'],
  ['chapter05', '/white-paper/chapter-05-from-isolated-pools-to-a-federated-network'],
  ['chapter06', '/white-paper/chapter-06-the-missing-piece-network-level-liquidity-governance'],
  ['chapter07', '/white-paper/chapter-07-clc-stewardship-and-the-clc-token'],
  ['chapter08', '/white-paper/chapter-08-technical-scope-growth'],
  ['chapter09', '/white-paper/chapter-09-economics-for-lps'],
  ['chapter10', '/white-paper/chapter-10-comprehensive-risk-framework'],
  ['chapter11', '/white-paper/chapter-11-governance-mechanics'],
  ['chapter12', '/white-paper/chapter-12-lp-term-sheet-non-binding-outline'],
  ['chapter13', '/white-paper/chapter-13-jargon-plain-language-glossary'],
  ['chapter14', '/white-paper/chapter-14-kpis-health-indicators'],
  ['chapter15', '/white-paper/chapter-15-roadmap-indicative'],
  ['chapter16', '/white-paper/chapter-16-values-evaluation-template-for-listings-liquidity-mandates'],
  ['chapter17', '/white-paper/chapter-17-legal-compliance-note'],
  ['chapter18', '/white-paper/chapter-18-conclusion'],
  ['appendixA', '/white-paper/appendix-a-math-box'],
  ['appendixB', '/white-paper/appendix-b-fee-waterfall'],
  ['appendixC', '/white-paper/appendix-c-kpi-definitions'],
  ['appendixD', '/white-paper/appendix-d-launch-parameters'],
  ['appendixE', '/white-paper/appendix-e-worked-example'],
  ['appendixF', '/white-paper/appendix-f-dataroom-checklist'],
] as const

export type SidebarItem = {
  text: string
  link?: string
  items?: SidebarItem[]
}

export function sidebarForLocale(locale: SupportedLocale): SidebarItem[] {
  const documentationLocale = hasLocalizedDocumentation(locale) ? locale : 'en'
  const messages = navigationMessages[documentationLocale]
  const link = (path: string) => localizedPath(path, documentationLocale)
  return [
    {
      text: messages.groups.introduction,
      items: [
        { text: messages.items.gettingStarted, link: link('/introduction/getting-started') },
        { text: messages.items.concepts, link: link('/introduction/concepts') },
        { text: messages.items.example, link: link('/introduction/example') },
        { text: messages.items.history, link: link('/introduction/history') },
      ],
    },
    {
      text: messages.groups.protocol,
      items: [
        { text: messages.items.overview, link: link('/protocol/overview') },
        { text: messages.items.smartContracts, link: link('/protocol/smart-contracts') },
        { text: messages.items.networkArchitecture, link: link('/protocol/network') },
      ],
    },
    {
      text: messages.groups.governance,
      items: [
        { text: messages.items.governanceMechanics, link: link('/governance/mechanics') },
        { text: messages.items.terms, link: link('/governance/terms') },
      ],
    },
    {
      text: messages.groups.whitePaper,
      link: link('/white-paper'),
      items: whitePaperItems.map(([key, path]) => ({
        text: messages.items[key],
        link: link(path),
      })),
    },
  ]
}

export const localizedSidebars = Object.fromEntries(
  DOCUMENTATION_LOCALES.map((code) => [
    code === 'en' ? '/' : `/${code}/`,
    sidebarForLocale(code),
  ]),
) as Record<string, SidebarItem[]>
