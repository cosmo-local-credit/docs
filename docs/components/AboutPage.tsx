import type { CSSProperties, ReactNode } from 'react'

import { LandingThemeToggle } from './LandingThemeToggle'

const statistics = [
  { value: '745', label: 'Unique active vouchers', tone: 'orange' },
  { value: '188', label: 'Unique active Commitment Pools', tone: 'deep-green' },
  { value: '26,367', label: 'Users', tone: 'gold' },
  { value: '285,197', label: 'Exchanges between users', tone: 'earth-green' },
] as const

const roles = [
  {
    id: 'stewards',
    icon: '/about/home/stewards-icon.png',
    title: 'Pool Stewards',
    description: 'I want to create or manage a Pool',
    color: '#004844',
  },
  {
    id: 'service-providers',
    icon: '/about/home/service-providers-icon.png',
    title: 'Voucher creators',
    description: 'I want to promote goods or services with a voucher',
    color: '#8a9129',
  },
  {
    id: 'voucher-users',
    icon: '/about/home/voucher-users-icon.png',
    title: 'Voucher users',
    description: 'I want to find, send, exchange or use vouchers',
    color: '#9ca332',
  },
  {
    id: 'supporters',
    icon: '/about/home/supporters-icon.png',
    title: 'Supporters',
    description: 'I want to support a Commitment Pool',
    color: '#e86a2c',
  },
] as const

const howItWorks = [
  {
    number: '01',
    title: 'Create a voucher',
    description:
      'Describe your goods or services and explain how people can use the voucher.',
  },
  {
    number: '02',
    title: 'Build a curated Pool',
    description:
      'A Pool Steward selects the vouchers people can exchange and publishes the Pool’s rules.',
  },
  {
    number: '03',
    title: 'Send or exchange',
    description:
      'Send vouchers directly to other people or exchange supported vouchers through a Pool.',
  },
  {
    number: '04',
    title: 'Use the voucher',
    description:
      'Use it with its issuer for the goods or services described in its terms.',
  },
] as const

const features = [
  {
    number: '01',
    title: 'Curated marketplaces',
    description:
      'Each Pool brings selected vouchers together and publishes the rules for exchanging them.',
  },
  {
    number: '02',
    title: 'Clear terms and rules',
    description:
      'Voucher creators explain what they offer. Pool Stewards publish the rules for each Pool.',
  },
  {
    number: '03',
    title: 'Easy to access',
    description:
      'Use the CLC App on a phone or computer. QR codes and printable paper wallets provide additional ways to take part.',
  },
  {
    number: '04',
    title: 'Open and adaptable',
    description:
      'CLC is built openly so others can inspect it, use it and help improve it.',
  },
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

type AudienceSectionProps = {
  id: string
  title: string
  accent: string
  tagline: string
  description: string
  image: {
    src: string
    alt: string
    width: number
    height: number
  }
  imageSide: 'left' | 'right'
  cardTitle: string
  cardSubtitle?: string
  items: readonly string[]
  badges?: readonly string[]
  footer?: ReactNode
  cta: {
    href: string
    label: string
  }
}

function AudienceSection({
  id,
  title,
  accent,
  tagline,
  description,
  image,
  imageSide,
  cardTitle,
  cardSubtitle,
  items,
  badges,
  footer,
  cta,
}: AudienceSectionProps) {
  const visual = (
    <div className="about-role-visual">
      <img
        alt={image.alt}
        height={image.height}
        loading="lazy"
        src={image.src}
        width={image.width}
      />
    </div>
  )

  const card = (
    <div className="about-action-card">
      <h3>{cardTitle}</h3>
      {cardSubtitle ? <p className="about-action-card__subtitle">{cardSubtitle}</p> : null}
      {badges ? (
        <div className="about-badges" aria-label="Example Pool themes">
          {badges.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </div>
      ) : null}
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {footer ? <div className="about-action-card__footer">{footer}</div> : null}
      <a className="about-button about-button--primary" href={cta.href} rel="noreferrer" target="_blank">
        {cta.label}
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

export function AboutPage() {
  return (
    <main className="about-page">
      <LandingThemeToggle portalToDesktopNav />

      <div className="about-migration-wrap about-shell">
        <div className="about-migration-note">
          <span className="about-migration-note__label">From Sarafu Network to Cosmo-Local Credit</span>
          <p>
            Cosmo-Local Credit builds on what we learned from Sarafu Network. The CLC App is a new
            service, so past Sarafu accounts, vouchers and obligations did not automatically move
            to it. <a href="/introduction/history">Read our history.</a>
          </p>
        </div>
      </div>

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
              <p className="about-overview__description">
                Cosmo-Local Credit helps people and organizations promote goods and services with
                vouchers. A voucher works much like a gift card. Its creator explains what it can
                be used for. A Commitment Pool works like a curated marketplace where people can
                exchange selected vouchers under clear rules.
              </p>
            </div>
          </div>

          <nav className="about-overview__actions" aria-label="Cosmo-Local Credit resources">
            <a
              className="about-button about-button--primary about-overview__button"
              href="https://cosmolocal.credit"
              rel="noreferrer"
              target="_blank"
            >
              Open App →
            </a>
            <a className="about-button about-button--secondary about-overview__button" href="#about">
              About
            </a>
            <a
              className="about-button about-button--secondary about-overview__button"
              href="/introduction/getting-started"
            >
              Get Started
            </a>
            <a
              className="about-button about-button--secondary about-overview__button"
              href="/protocol/overview"
            >
              Protocol
            </a>
            <a
              className="about-button about-button--secondary about-overview__button"
              href="/white-paper"
            >
              White Paper
            </a>
          </nav>

          <div className="about-overview__feature-grid">
            <article className="about-overview__feature-card">
              <h2>Create vouchers</h2>
              <p>Create a voucher to promote your goods or services. Add clear terms so people know what it offers and how to use it.</p>
            </article>
            <article className="about-overview__feature-card">
              <h2>Exchange through Pools</h2>
              <p>A Commitment Pool is a curated place to exchange selected vouchers. Its Steward chooses which vouchers it supports and publishes its rules.</p>
            </article>
            <article className="about-overview__feature-card">
              <h2>Share and use vouchers</h2>
              <p>Send vouchers to other people, exchange supported vouchers through a Pool, or use them with their issuer.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-hero about-section" id="about" aria-labelledby="about-title">
        <div className="about-shell about-hero__grid">
          <div className="about-hero__content">
            <h2 id="about-title">
              Empowering communities through <span>commitment pooling</span>
            </h2>
            <p className="about-hero__lead">
              Commitment pooling brings selected vouchers into curated marketplaces where
              communities can exchange them. People can then use the vouchers for the goods or
              services described in their terms.
            </p>
          </div>

          <div
            aria-label="Illustration of communities connecting through vouchers and Pools"
            className="about-network-graphic"
            role="img"
          >
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
              <p className="about-video__label">See commitment pooling in action</p>
              <div className="about-video__frame">
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  src="https://www.youtube-nocookie.com/embed/gn4mMspXlF0"
                  title="See commitment pooling in action"
                />
              </div>
            </div>

            <dl className="about-stats">
              {statistics.map((stat) => (
                <div className={`about-stat about-stat--${stat.tone}`} key={stat.label}>
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>
            <p className="about-stats-source">
              Historical Sarafu Network activity, 5 July 2023 to 20 July 2025.{' '}
              <a
                href="https://dune.com/grassrootseconomics/sarafu-network"
                rel="noreferrer"
                target="_blank"
              >
                View the source data.
              </a>
            </p>
          </div>
        </div>

        <div className="about-shell about-role-selector">
          <div className="about-section-heading">
            <h2>What would you like to do?</h2>
            <p>
              Create or manage a Pool, promote goods or services with a voucher, exchange and use
              vouchers, or support a Pool.
            </p>
          </div>
          <nav className="about-role-grid" aria-label="Explore Cosmo-Local Credit by role">
            {roles.map((role) => (
              <a
                className="about-role-card"
                href={`#${role.id}`}
                key={role.id}
                style={{ '--about-role-color': role.color } as CSSProperties}
              >
                <img alt="" aria-hidden="true" height="80" src={role.icon} width="80" />
                <h3>{role.title}</h3>
                <p>{role.description}</p>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="about-section about-how" aria-label="How it works">
        <div className="about-shell about-how__layout">
          <div className="about-how__visual">
            <img
              alt="Creating and exchanging vouchers through a Pool"
              height="473"
              loading="lazy"
              src="/about/home/how-it-works.png"
              width="300"
            />
          </div>
          <div className="about-step-grid">
            {howItWorks.map((step, index) => (
              <article className={`about-step-card about-step-card--${index + 1}`} key={step.number}>
                <div className="about-card-number">{step.number}</div>
                <h2>{step.title}</h2>
                <p>{step.description}</p>
                {index < 3 ? <span className="about-step-arrow" aria-hidden="true">→</span> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <AudienceSection
        accent="#004844"
        cardTitle="Create a Pool"
        cta={{ href: 'https://cosmolocal.credit/pools/create/pool', label: 'Create a Pool' }}
        description="A Pool Steward creates a curated marketplace for vouchers. The Steward chooses which vouchers the Pool supports, publishes its rules, limits and fees, and keeps its information up to date. A Steward can be a person, organization or other accountable group."
        id="stewards"
        image={{
          src: '/about/home/community-collab-image.png',
          alt: 'Hands adding grain to a shared bowl',
          width: 3344,
          height: 2312,
        }}
        imageSide="right"
        items={[
          'Describe the Pool’s purpose',
          'Choose the vouchers it supports',
          'Publish its exchange rules, limits and fees',
          'Share the Pool with others',
          'Keep its information up to date',
        ]}
        tagline="Create and manage a Pool."
        title="Pool Stewards"
      />

      <RoleSeparator />

      <AudienceSection
        accent="#8a9129"
        cardTitle="Create a voucher"
        cta={{ href: 'https://cosmolocal.credit/vouchers/create/voucher', label: 'Create a voucher' }}
        description="Create a voucher for what you offer and publish clear terms. When you create a voucher, you are its issuer. You are responsible for providing what the voucher promises."
        id="service-providers"
        image={{
          src: '/about/home/service-providers-image.png',
          alt: 'People raising their hands to share what they offer',
          width: 3348,
          height: 2320,
        }}
        imageSide="left"
        items={[
          'Describe what your voucher offers',
          'Explain where, when and how it can be used',
          'Share it with customers and your community',
          'See which Pools support it',
          'Honor the voucher according to its terms',
        ]}
        tagline="Promote your goods or services."
        title="Voucher creators"
      />

      <RoleSeparator />

      <AudienceSection
        accent="#9ca332"
        cardTitle="Explore vouchers"
        cta={{ href: 'https://cosmolocal.credit/vouchers', label: 'Explore vouchers' }}
        description="A voucher works much like a gift card. It represents goods or services offered by its issuer. Read its terms before you receive, send, exchange or use it."
        id="voucher-users"
        image={{
          src: '/about/home/community-vouchers-image.png',
          alt: 'People exchanging vouchers for goods and services',
          width: 3345,
          height: 2319,
        }}
        imageSide="right"
        items={[
          'See what each voucher offers',
          'Read where, when and how to use it',
          'Find Pools where it can be exchanged',
          'Send it to another person',
          'Exchange it or use it with its issuer',
        ]}
        tagline="Find vouchers for goods and services."
        title="Voucher users"
      />

      <RoleSeparator />

      <AudienceSection
        accent="#e86a2c"
        badges={['Community needs', 'Environment', 'Women-led', 'Education', 'Agriculture']}
        cardSubtitle="Explore Pools"
        cardTitle="Find a Pool to support"
        cta={{ href: 'https://cosmolocal.credit/pools', label: 'Explore Pools' }}
        description="Read a Pool’s purpose, rules and terms before you support it. Available support methods and any rewards depend on each Pool’s terms."
        footer={<p>Each Pool publishes its own support options and terms.</p>}
        id="supporters"
        image={{
          src: '/about/home/supporters-image.png',
          alt: 'People planning how to support a shared project',
          width: 3350,
          height: 1913,
        }}
        imageSide="left"
        items={[
          'Learn what the Pool is for',
          'Read its rules and terms',
          'Choose a Pool you want to support',
          'Follow its updates and activity',
        ]}
        tagline="Support a Pool you care about."
        title="Supporters"
      />

      <section className="about-section about-impact" id="impact" aria-label="Community impact">
        <div className="about-shell about-impact__card">
          <div className="about-impact__image">
            <img
              alt="Community member standing in front of Sarafu Network information posters"
              height="4000"
              loading="lazy"
              src="/about/home/testimonial-image.jpg"
              width="6000"
            />
          </div>
          <figure>
            <blockquote>
              “Sarafu has transformed how our community trades and supports each other. Even during
              tough times, we can continue commerce and help our neighbors. The Vouchers keep value
              circulating within our community.”
            </blockquote>
            <figcaption>
              <strong>Joseph Kimani</strong>
              <span>Community leader and local business owner</span>
              <small>Using Sarafu Network since 2019</small>
            </figcaption>
            <div className="about-badges">
              <span>Community markets</span>
              <span>Vulnerable projects</span>
              <span>Local trade</span>
            </div>
          </figure>
        </div>
      </section>

      <section className="about-section about-features" id="features">
        <div className="about-shell">
          <div className="about-section-heading">
            <h2>Why use Cosmo-Local Credit?</h2>
            <p>Simple tools for creating, sharing and exchanging vouchers.</p>
          </div>
          <div className="about-features__layout">
            <div className="about-feature-grid">
              {features.map((feature) => (
                <article className="about-feature-card" key={feature.number}>
                  <div className="about-card-number">{feature.number}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
            <div className="about-features__visual">
              <img
                alt="People and places connected through vouchers and Pools"
                height="1718"
                loading="lazy"
                src="/about/home/features-image.png"
                width="1116"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about-section about-partners" aria-label="Coverage and partners">
        <div className="about-shell">
          <p className="about-logo-heading">Sarafu Network in the media</p>
          <div className="about-logo-row about-logo-row--media">
            {mediaPartners.map((partner) => (
              <a
                aria-label={`View ${partner.name} coverage`}
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

          <div className="about-partner-separator" aria-hidden="true"><span /></div>

          <p className="about-logo-heading">Our partners</p>
          <div className="about-logo-row">
            {organizationalPartners.map((partner) => (
              <a
                aria-label={`Visit ${partner.name}`}
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
          <h2>Ready to explore?</h2>
          <p>
            Open the CLC App to explore vouchers and the curated Pools where they can be exchanged.
            Subscribe for project news and updates.
          </p>
          <div className="about-cta__buttons">
            <a
              className="about-button about-button--primary"
              href="https://cosmolocal.credit"
              rel="noreferrer"
              target="_blank"
            >
              Open the CLC App
            </a>
            <a
              className="about-button about-button--secondary"
              href="https://grassecon.substack.com"
              rel="noreferrer"
              target="_blank"
            >
              Get news and updates
            </a>
          </div>
        </div>
      </section>

      <footer className="about-footer">
        <div className="about-shell about-footer__content">
          <p>© 2026 Cosmo-Local Credit. Built on lessons from Sarafu Network.</p>
          <nav aria-label="Legal">
            <a
              href="https://docs.cosmolocal.credit/governance/terms"
              rel="noreferrer"
              target="_blank"
            >
              Terms of Service
            </a>
            <a href="https://docs.grassecon.org/commons/data_policy/" rel="noreferrer" target="_blank">
              Data Policy
            </a>
          </nav>
        </div>
      </footer>
    </main>
  )
}
