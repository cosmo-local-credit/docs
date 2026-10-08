import { Fragment, type CSSProperties, type ReactNode } from 'react'

import { LOCALE_BY_CODE, type SupportedLocale } from '../i18n/locales'
import type { SplashMessages } from '../i18n/messages'
import { LandingControls } from './LandingControls'

const statistics = [
  { value: 745, key: 'vouchers', tone: 'orange' },
  { value: 188, key: 'pools', tone: 'deep-green' },
  { value: 26367, key: 'users', tone: 'gold' },
  { value: 285197, key: 'exchanges', tone: 'earth-green' },
] as const

const roles = [
  { id: 'stewards', icon: '/about/home/stewards-icon.png', color: '#004844' },
  {
    id: 'service-providers',
    icon: '/about/home/service-providers-icon.png',
    color: '#8a9129',
  },
  {
    id: 'voucher-users',
    icon: '/about/home/voucher-users-icon.png',
    color: '#9ca332',
  },
  { id: 'supporters', icon: '/about/home/supporters-icon.png', color: '#e86a2c' },
] as const

const sections = [
  {
    id: 'stewards',
    accent: '#004844',
    image: '/about/home/community-collab-image.png',
    width: 3344,
    height: 2312,
    imageSide: 'right',
    cta: 'https://cosmolocal.credit/pools/create/pool',
  },
  {
    id: 'service-providers',
    accent: '#8a9129',
    image: '/about/home/service-providers-image.png',
    width: 3348,
    height: 2320,
    imageSide: 'left',
    cta: 'https://cosmolocal.credit/vouchers/create/voucher',
  },
  {
    id: 'voucher-users',
    accent: '#9ca332',
    image: '/about/home/community-vouchers-image.png',
    width: 3345,
    height: 2319,
    imageSide: 'right',
    cta: 'https://cosmolocal.credit/vouchers',
  },
  {
    id: 'supporters',
    accent: '#e86a2c',
    image: '/about/home/supporters-image.png',
    width: 3350,
    height: 1913,
    imageSide: 'left',
    cta: 'https://cosmolocal.credit/pools',
  },
] as const

const supportTags = [
  { value: 'Agriculture', href: 'https://cosmolocal.credit/pools?tags=Agriculture' },
  { value: 'Art', href: 'https://cosmolocal.credit/pools?tags=Art' },
  { value: 'Biodiversity', href: 'https://cosmolocal.credit/pools?tags=Biodiversity' },
  { value: 'Education', href: 'https://cosmolocal.credit/pools?tags=Education' },
  { value: 'Youth', href: 'https://cosmolocal.credit/pools?tags=Youth' },
] as const

const mediaPartners = [
  {
    name: 'BBC News',
    logo: '/about/media/bbc.png',
    link: 'https://www.bbc.co.uk/programmes/p05zw020',
    width: 200,
    height: 128,
  },
  {
    name: 'Al Jazeera',
    logo: '/about/media/aljazeera.png',
    link: 'https://www.youtube.com/watch?v=UpCr8-3K05E',
    width: 199,
    height: 67,
  },
  {
    name: 'Bloomberg',
    logo: '/about/media/bloomberg.png',
    link: 'https://www.bloomberg.com/news/features/2018-10-31/closing-the-cash-gap-with-cryptocurrency',
    width: 199,
    height: 37,
  },
] as const

const organizationalPartners = [
  {
    name: 'Mustard Seed Trust',
    logo: '/about/partners/mustardseed.png',
    link: 'https://mustardseedtrust.org/',
    width: 200,
    height: 84,
  },
  {
    name: 'Kenya Red Cross',
    logo: '/about/partners/kenya-red-cross.png',
    link: 'https://www.redcross.or.ke/',
    width: 200,
    height: 83,
  },
  {
    name: 'Schumacher Center for New Economics',
    logo: '/about/partners/schumacher-center.png',
    link: 'https://www.schumachercenter.org/',
    width: 198,
    height: 50,
  },
] as const

function formatMessage(template: string, values: Record<string, string>): string {
  return template.replace(/\{([^}]+)\}/g, (_, key: string) => values[key] ?? `{${key}}`)
}

function richMessage(template: string, values: Record<string, ReactNode>): ReactNode[] {
  return template.split(/(\{[^}]+\})/g).map((part, index) => {
    const match = part.match(/^\{([^}]+)\}$/)
    return <span key={`${part}-${index}`}>{match ? values[match[1]] : part}</span>
  })
}

type AudienceSectionProps = {
  id: string
  accent: string
  image: string
  imageAlt: string
  width: number
  height: number
  imageSide: 'left' | 'right'
  title: string
  tagline: string
  description: string
  cardTitle: string
  cardSubtitle?: string
  items: readonly string[]
  badgesLabel?: string
  badges?: readonly string[]
  badgeLinkLabel?: string
  footer?: string
  ctaHref: string
  ctaLabel: string
}

function AudienceSection(props: AudienceSectionProps) {
  const {
    id,
    accent,
    image,
    imageAlt,
    width,
    height,
    imageSide,
    title,
    tagline,
    description,
    cardTitle,
    cardSubtitle,
    items,
    badgesLabel,
    badges,
    badgeLinkLabel,
    footer,
    ctaHref,
    ctaLabel,
  } = props

  const visual = (
    <div className="about-role-visual">
      <img alt={imageAlt} height={height} loading="lazy" src={image} width={width} />
    </div>
  )

  const card = (
    <div className="about-action-card">
      <h3>{cardTitle}</h3>
      {cardSubtitle ? <p className="about-action-card__subtitle">{cardSubtitle}</p> : null}
      {badges && badgesLabel && badgeLinkLabel ? (
        <div className="about-badges" aria-label={badgesLabel}>
          {badges.map((badge, index) => (
            <a
              aria-label={formatMessage(badgeLinkLabel, { category: badge })}
              href={supportTags[index].href}
              key={supportTags[index].value}
              rel="noreferrer"
              target="_blank"
            >
              {badge}
            </a>
          ))}
        </div>
      ) : null}
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {footer ? (
        <div className="about-action-card__footer">
          <p>{footer}</p>
        </div>
      ) : null}
      <a
        className="about-button about-button--primary"
        href={ctaHref}
        rel="noreferrer"
        target="_blank"
      >
        {ctaLabel}
      </a>
    </div>
  )

  return (
    <section
      className="about-section about-role-section"
      id={id}
      style={{ '--about-section-accent': accent } as CSSProperties}
    >
      <div className="about-shell">
        <div className="about-section-heading">
          <h2>{title}</h2>
          <p className="about-section-tagline">{tagline}</p>
          <p>{description}</p>
        </div>
        <div className={`about-role-layout about-role-layout--image-${imageSide}`}>
          {imageSide === 'left' ? visual : card}
          {imageSide === 'left' ? card : visual}
        </div>
      </div>
    </section>
  )
}

function RoleSeparator() {
  return (
    <div className="about-role-separator" aria-hidden="true">
      <span />
      <i />
      <span />
    </div>
  )
}

type AboutPageProps = {
  locale: SupportedLocale
  messages: SplashMessages
}

export function AboutPage({ locale, messages }: AboutPageProps) {
  const numberFormatter = new Intl.NumberFormat(LOCALE_BY_CODE[locale].intlLocale)
  const supportSection = messages.sections[3]

  return (
    <main className="about-page">
      <LandingControls locale={locale} messages={messages.controls} />

      <section className="about-overview" aria-labelledby="overview-title">
        <div className="about-shell">
          <div className="about-overview__intro">
            <img
              alt=""
              className="about-overview__logo"
              height="128"
              loading="eager"
              src="/icons/CLC-logo.svg"
              width="128"
            />
            <div>
              <h1 id="overview-title">Cosmo-Local Credit</h1>
              <div className="about-overview__description">
                {messages.overview.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <nav className="about-overview__actions" aria-label={messages.overview.resourceLabel}>
            <a
              className="about-button about-button--primary about-overview__button"
              href="https://cosmolocal.credit"
              rel="noreferrer"
              target="_blank"
            >
              {messages.overview.actions.openApp}{' '}
              <span aria-hidden="true" className="about-button__arrow">
                →
              </span>
            </a>
            <a className="about-button about-button--secondary about-overview__button" href="#about">
              {messages.overview.actions.about}
            </a>
            <a
              className="about-button about-button--secondary about-overview__button"
              href="/introduction/getting-started"
              hrefLang="en"
            >
              {messages.overview.actions.getStarted}
            </a>
            <a
              className="about-button about-button--secondary about-overview__button"
              href="/protocol/overview"
              hrefLang="en"
            >
              {messages.overview.actions.protocol}
            </a>
            <a
              className="about-button about-button--secondary about-overview__button"
              href="/white-paper"
              hrefLang="en"
            >
              {messages.overview.actions.whitePaper}
            </a>
          </nav>

          {locale !== 'en' ? <p className="about-english-notice">{messages.englishDocsNotice}</p> : null}

          <div className="about-overview__feature-grid">
            {messages.overview.cards.map((card) => (
              <article className="about-overview__feature-card" key={card.title}>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-hero about-section" id="about" aria-labelledby="about-title">
        <div className="about-shell about-hero__grid">
          <div className="about-hero__content">
            <h2 id="about-title">
              {messages.hero.titleLead} <span>{messages.hero.titleAccent}</span>
            </h2>
            <p className="about-hero__lead">{messages.hero.lead}</p>
          </div>

          <div aria-label={messages.hero.networkAlt} className="about-network-graphic" role="img">
            <img
              alt=""
              className="about-network-frame about-network-frame--one"
              fetchPriority="high"
              height="2480"
              src="/about/home/network-graphic-1.png"
              width="3508"
            />
            <img
              alt=""
              aria-hidden="true"
              className="about-network-frame about-network-frame--two"
              height="2480"
              loading="lazy"
              src="/about/home/network-graphic-2.png"
              width="3508"
            />
            <img
              alt=""
              aria-hidden="true"
              className="about-network-frame about-network-frame--three"
              height="2480"
              loading="lazy"
              src="/about/home/network-graphic-3.png"
              width="3508"
            />
          </div>

          <div className="about-hero__evidence">
            <div className="about-video">
              <p className="about-video__label">{messages.hero.videoLabel}</p>
              <div className="about-video__frame">
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  src="https://www.youtube-nocookie.com/embed/gn4mMspXlF0"
                  title={messages.hero.videoTitle}
                />
              </div>
            </div>

            <dl className="about-stats">
              {statistics.map((stat) => (
                <div className={`about-stat about-stat--${stat.tone}`} key={stat.key}>
                  <dt>{messages.hero.statistics[stat.key]}</dt>
                  <dd>{numberFormatter.format(stat.value)}</dd>
                </div>
              ))}
            </dl>
            <p className="about-stats-source">
              {messages.hero.statistics.source}{' '}
              <a
                href="https://dune.com/grassrootseconomics/sarafu-network"
                rel="noreferrer"
                target="_blank"
              >
                {messages.hero.statistics.sourceLink}
              </a>
            </p>
          </div>
        </div>

        <div className="about-shell about-role-selector">
          <div className="about-section-heading">
            <h2>{messages.audiences.heading}</h2>
            <p>{messages.audiences.intro}</p>
          </div>
          <nav className="about-role-grid" aria-label={messages.audiences.navLabel}>
            {roles.map((role, index) => (
              <a
                className="about-role-card"
                href={`#${role.id}`}
                key={role.id}
                style={{ '--about-role-color': role.color } as CSSProperties}
              >
                <img alt="" aria-hidden="true" height="80" src={role.icon} width="80" />
                <h3>{messages.audiences.roles[index].title}</h3>
                <p>{messages.audiences.roles[index].description}</p>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="about-section about-how" aria-label={messages.howItWorks.label}>
        <div className="about-shell about-how__layout">
          <div className="about-how__visual">
            <img
              alt={messages.howItWorks.imageAlt}
              height="473"
              loading="lazy"
              src="/about/home/how-it-works.png"
              width="300"
            />
          </div>
          <div className="about-step-grid">
            {messages.howItWorks.steps.map((step, index) => (
              <article className={`about-step-card about-step-card--${index + 1}`} key={step.title}>
                <div className="about-card-number">{String(index + 1).padStart(2, '0')}</div>
                <h2>{step.title}</h2>
                <p>{step.description}</p>
                {index < 3 ? (
                  <span className="about-step-arrow" aria-hidden="true">
                    →
                  </span>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      {sections.map((section, index) => {
        const copy = messages.sections[index]
        return (
          <Fragment key={section.id}>
            {index > 0 ? <RoleSeparator /> : null}
            <AudienceSection
              accent={section.accent}
              badgeLinkLabel={index === 3 ? supportSection.badgeLinkLabel : undefined}
              badges={index === 3 ? supportSection.badges : undefined}
              badgesLabel={index === 3 ? supportSection.badgesLabel : undefined}
              cardSubtitle={copy.cardSubtitle}
              cardTitle={copy.cardTitle}
              ctaHref={section.cta}
              ctaLabel={copy.cta}
              description={copy.description}
              footer={copy.footer}
              height={section.height}
              id={section.id}
              image={section.image}
              imageAlt={copy.imageAlt}
              imageSide={section.imageSide}
              items={copy.items}
              tagline={copy.tagline}
              title={copy.title}
              width={section.width}
            />
          </Fragment>
        )
      })}

      <section
        className="about-section about-impact"
        id="impact"
        aria-label={messages.testimonial.label}
      >
        <div className="about-shell about-impact__card">
          <div className="about-impact__image">
            <img
              alt={messages.testimonial.imageAlt}
              height="4000"
              loading="lazy"
              src="/about/home/testimonial-image.jpg"
              width="6000"
            />
          </div>
          <figure>
            <blockquote>{messages.testimonial.quote}</blockquote>
            <figcaption>
              <strong>{messages.testimonial.name}</strong>
              <span>{messages.testimonial.role}</span>
              <small>{messages.testimonial.since}</small>
            </figcaption>
            <div className="about-badges">
              {messages.testimonial.badges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
          </figure>
        </div>
      </section>

      <section className="about-section about-features" id="features">
        <div className="about-shell">
          <div className="about-section-heading">
            <h2>{messages.features.heading}</h2>
            <div className="about-features__intro">
              <p>{messages.features.intro[0]}</p>
              <p>{messages.features.intro[1]}</p>
              <p>
                {richMessage(messages.features.intro[2], {
                  organization: (
                    <a href="https://grassrootseconomics.org/" rel="noreferrer" target="_blank">
                      {messages.features.organization}
                    </a>
                  ),
                })}
              </p>
              <p>
                <a href="/introduction/history" hrefLang="en">
                  {messages.features.historyLink}
                </a>
              </p>
            </div>
          </div>
          <div className="about-features__layout">
            <div className="about-feature-grid">
              {messages.features.cards.map((feature, index) => (
                <article className="about-feature-card" key={feature.title}>
                  <div className="about-card-number">{String(index + 1).padStart(2, '0')}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
            <div className="about-features__visual">
              <img
                alt={messages.features.imageAlt}
                height="1718"
                loading="lazy"
                src="/about/home/features-image.png"
                width="1116"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about-section about-partners" aria-label={messages.partners.sectionLabel}>
        <div className="about-shell">
          <p className="about-logo-heading">{messages.partners.mediaHeading}</p>
          <div className="about-logo-row about-logo-row--media">
            {mediaPartners.map((partner) => (
              <a
                aria-label={formatMessage(messages.partners.mediaLinkLabel, { name: partner.name })}
                className="about-logo-link"
                href={partner.link}
                key={partner.name}
                rel="noreferrer"
                target="_blank"
              >
                <img
                  alt={partner.name}
                  height={partner.height}
                  loading="lazy"
                  src={partner.logo}
                  width={partner.width}
                />
              </a>
            ))}
          </div>

          <div className="about-partner-separator" aria-hidden="true">
            <span />
          </div>

          <p className="about-logo-heading">{messages.partners.partnersHeading}</p>
          <div className="about-logo-row">
            {organizationalPartners.map((partner) => (
              <a
                aria-label={formatMessage(messages.partners.partnerLinkLabel, { name: partner.name })}
                className="about-logo-link"
                href={partner.link}
                key={partner.name}
                rel="noreferrer"
                target="_blank"
              >
                <img
                  alt={partner.name}
                  height={partner.height}
                  loading="lazy"
                  src={partner.logo}
                  width={partner.width}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-shell">
          <h2>{messages.cta.heading}</h2>
          <p>{messages.cta.body}</p>
          <div className="about-cta__buttons">
            <a
              className="about-button about-button--primary"
              href="https://cosmolocal.credit"
              rel="noreferrer"
              target="_blank"
            >
              {messages.cta.openApp}
            </a>
            <a
              className="about-button about-button--secondary"
              href="https://grassecon.substack.com"
              rel="noreferrer"
              target="_blank"
            >
              {messages.cta.updates}
            </a>
          </div>
        </div>
      </section>

      <footer className="about-footer">
        <div className="about-shell about-footer__content">
          <p>{messages.footer.lineage}</p>
          <nav aria-label={messages.footer.legalLabel}>
            <a
              href="https://docs.cosmolocal.credit/governance/terms"
              hrefLang="en"
              rel="noreferrer"
              target="_blank"
            >
              {messages.footer.terms}
            </a>
            <a
              href="https://docs.grassecon.org/commons/data_policy/"
              hrefLang="en"
              rel="noreferrer"
              target="_blank"
            >
              {messages.footer.dataPolicy}
            </a>
          </nav>
        </div>
      </footer>
    </main>
  )
}
