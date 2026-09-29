import type { CSSProperties, ReactNode } from 'react'

import { LandingThemeToggle } from './LandingThemeToggle'

const statistics = [
  { value: '752', label: 'Vouchers', tone: 'orange' },
  { value: '141', label: 'Pools', tone: 'deep-green' },
  { value: '3,540', label: 'Active Members', tone: 'gold' },
  { value: '271,144', label: 'P2P Exchanges', tone: 'earth-green' },
] as const

const roles = [
  {
    id: 'stewards',
    icon: '/about/home/stewards-icon.png',
    title: 'Stewards',
    description: 'I want to create a commitment pool',
    color: '#004844',
  },
  {
    id: 'service-providers',
    icon: '/about/home/service-providers-icon.png',
    title: 'Service Providers',
    description: 'I want to create Vouchers to offer my goods or services',
    color: '#8a9129',
  },
  {
    id: 'voucher-users',
    icon: '/about/home/voucher-users-icon.png',
    title: 'Voucher Users',
    description: 'I want to send, swap or redeem my Vouchers',
    color: '#9ca332',
  },
  {
    id: 'supporters',
    icon: '/about/home/supporters-icon.png',
    title: 'Supporters',
    description: 'I want to support a commitment pool',
    color: '#e86a2c',
  },
] as const

const howItWorks = [
  {
    number: '01',
    title: 'Join or Create',
    description:
      'Join an existing commitment Pool or create your own with customizable rules and governance.',
  },
  {
    number: '02',
    title: 'Issue & Exchange',
    description:
      'Issue or receive redeemable commitments, then send, swap or redeem them with other community members.',
  },
  {
    number: '03',
    title: 'Build Networks',
    description:
      'Connect with other communities to expand exchange opportunities and strengthen bioregional economies.',
  },
  {
    number: '04',
    title: 'Measure Impact',
    description:
      'Account for community health, exchange activity and social impact through public records and shared reporting.',
  },
] as const

const features = [
  {
    number: '01',
    title: 'Community Driven',
    description:
      'Built by communities, for communities. Local governance and decision-making put power in the hands of users.',
  },
  {
    number: '02',
    title: 'Open-Source & Public-Benefit',
    description:
      'Sarafu Network was built and stewarded by Grassroots Economics Foundation. Cosmo-Local Credit carries that transparent, open-source foundation forward.',
  },
  {
    number: '03',
    title: 'Last-Mile',
    description:
      'Cosmo-Local Credit is a mobile-first PWA with QR flows and printable paper wallets. Sarafu’s earlier last-mile work also included NFC cards.',
  },
  {
    number: '04',
    title: 'Secure & Transparent',
    description:
      'Public blockchain records make exchanges and community operations inspectable, while published Voucher terms and Pool rules keep responsibilities clear.',
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
          <span className="about-migration-note__label">Sarafu Network has migrated</span>
          <p>
            Sarafu Network’s community, history, figures, partners and commitment-pooling work
            continue as <strong>Cosmo-Local Credit</strong> at{' '}
            <a href="https://cosmolocal.credit" rel="noreferrer" target="_blank">
              cosmolocal.credit
            </a>
            . <a href="/introduction/history">Read the history</a>.
          </p>
        </div>
      </div>

      <section className="about-overview" aria-labelledby="overview-title">
        <div className="about-shell">
          <div className="about-overview__intro">
            <img
              alt="Cosmo-Local Credit logo"
              className="about-overview__logo"
              height="128"
              loading="eager"
              src="/icons/CLC-logo.svg"
              width="128"
            />
            <div>
              <h1 id="overview-title">Cosmo-Local Credit</h1>
              <p className="about-overview__description">
                Cosmo-Local Credit is a live progressive web app and open protocol for creating
                and exchanging redeemable commitments—such as vouchers, service credits, and
                delivery claims—through independently curated Pools.
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
              About CLC
            </a>
            <a
              className="about-button about-button--secondary about-overview__button"
              href="/introduction/getting-started"
            >
              Get Started
            </a>
            <a className="about-button about-button--secondary about-overview__button" href="/white-paper">
              Read White Paper →
            </a>
          </nav>

          <div className="about-overview__feature-grid">
            <article className="about-overview__feature-card">
              <h2>Redeemable Commitments</h2>
              <p>Issuers publish what each Voucher represents and how, where, and when a Holder can redeem it.</p>
            </article>
            <article className="about-overview__feature-card">
              <h2>Curated Pools</h2>
              <p>Pool Stewards publish accepted assets, valuations, fees, limits, controls, and any specifically scoped guarantee.</p>
            </article>
            <article className="about-overview__feature-card">
              <h2>Accountable Exchange</h2>
              <p>Users inspect Voucher terms, Pool rules, and transaction details before exchanging assets on a public blockchain.</p>
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
              Commitment pooling enables communities to create, manage and connect their own
              economic systems, fostering local trade and resilience.
            </p>
            <div className="about-video">
              <p className="about-video__label">Learn more about commitment pooling</p>
              <div className="about-video__frame">
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  src="https://www.youtube-nocookie.com/embed/gn4mMspXlF0"
                  title="Learn more about commitment pooling"
                />
              </div>
            </div>

            <dl className="about-stats">
              {statistics.map((stat) => (
                <div className={`about-stat about-stat--${stat.tone}`} key={stat.label}>
                  <dd>{stat.value}</dd>
                  <dt>{stat.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          <div
            aria-label="Three stages of communities connecting through the Cosmo-Local Credit network"
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
        </div>

        <div className="about-shell about-role-selector">
          <div className="about-section-heading">
            <h2>What brings you to Cosmo-Local Credit?</h2>
            <p>
              Offerings, registered as Vouchers with published redemption terms, come together in
              shared commitment Pools that work like virtual marketplaces. Accountable Stewards
              curate those Pools so communities can exchange valuable goods and services.
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
              alt="How commitment pooling works"
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
        cardTitle="Create your Pool"
        cta={{ href: 'https://cosmolocal.credit/pools/create/pool', label: 'Start Now' }}
        description="Stewards curate which Vouchers and issuers are allowed into the Pool, set reasonable limits, help members onboard and redeem Vouchers, reward supporters, and connect with other Pools sharing common Vouchers. In return for their services, Stewards may set and collect small membership or transaction fees."
        id="stewards"
        image={{
          src: '/about/home/community-collab-image.png',
          alt: 'Hands contributing to a shared bowl, representing collective resource pooling',
          width: 3344,
          height: 2312,
        }}
        imageSide="right"
        items={[
          'Publish a Pool: name, description and governance',
          'Curate and approve Vouchers',
          'Set values, limits and fees',
          'Launch, share and invite supporters',
          'Start swapping',
        ]}
        tagline="A Pool Steward is a trusted, accountable coordinator who manages and maintains a Pool."
        title="Stewards"
      />

      <RoleSeparator />

      <AudienceSection
        accent="#8a9129"
        cardTitle="Create your Voucher"
        cta={{ href: 'https://cosmolocal.credit/vouchers/create/voucher', label: 'Start Now' }}
        description="Whether you’re offering food, education, mobile repair or another useful commitment, you can issue Vouchers with clear terms, receive support and build trust over time."
        id="service-providers"
        image={{
          src: '/about/home/service-providers-image.png',
          alt: 'Community members raising their hands to share services and offerings',
          width: 3348,
          height: 2320,
        }}
        imageSide="left"
        items={[
          'Create Vouchers for your services or products',
          'Publish your terms and redemption rules',
          'Build trust through community verification',
          'Access exchange opportunities through Pool participation',
          'Start accepting Vouchers for services',
        ]}
        tagline="Turn your skills or services into value."
        title="Service Providers"
      />

      <RoleSeparator />

      <AudienceSection
        accent="#9ca332"
        cardTitle="What’s Available Near You"
        cta={{ href: 'https://cosmolocal.credit/vouchers', label: 'Explore Vouchers' }}
        description="You can think of a Voucher as a gift card or digital credit representing a redeemable commitment within a community. Members receive Vouchers for goods or services and use them to access other members’ offerings. Vouchers keep value circulating locally and strengthen community trade."
        id="voucher-users"
        image={{
          src: '/about/home/community-vouchers-image.png',
          alt: 'Community members exchanging Vouchers for local goods and services',
          width: 3345,
          height: 2319,
        }}
        imageSide="right"
        items={[
          'Browse Vouchers and their published redemption terms',
          'See the Pools that accept each Voucher',
          'Send, swap, redeem or gift Vouchers forward',
        ]}
        tagline="Swap your Vouchers in Pools, redeem them for local products, or gift them forward."
        title="Voucher Users"
      />

      <RoleSeparator />

      <AudienceSection
        accent="#e86a2c"
        badges={['Urgent', 'Eco', 'Women-led', 'Education', 'Agriculture']}
        cardSubtitle="Explore Local Projects"
        cardTitle="Real communities, real impact"
        cta={{ href: 'https://cosmolocal.credit/pools', label: 'Explore Pools' }}
        description="Browse impact-driven Pools and choose how you’d like to support. Some Pools offer rewards; others focus on pure impact. Either way, you’ll get updates and insights along the way."
        footer={<p>Support can use card or crypto, with or without rewards, according to each Pool’s published terms.</p>}
        id="supporters"
        image={{
          src: '/about/home/supporters-image.png',
          alt: 'Community supporters and stakeholders planning for shared impact',
          width: 3350,
          height: 1913,
        }}
        imageSide="left"
        items={[
          'Review each Pool’s purpose, governance and accepted assets',
          'Choose communities and commitments you want to support',
          'Follow activity and impact through transparent records',
        ]}
        tagline="Your support fuels local change."
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
              <span>Community Leader &amp; Local Business Owner</span>
              <small>Using Sarafu Network since 2019</small>
            </figcaption>
            <div className="about-badges">
              <span>Community Markets</span>
              <span>Vulnerable Projects</span>
              <span>Local Trade</span>
            </div>
          </figure>
        </div>
      </section>

      <section className="about-section about-features" id="features">
        <div className="about-shell">
          <div className="about-section-heading">
            <h2>Why Cosmo-Local Credit?</h2>
            <p>
              Cosmo-Local Credit carries Sarafu Network’s work forward, helping communities build
              stronger, more resilient commons.
            </p>
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
                alt="Illustration of Cosmo-Local Credit network features"
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
          <p className="about-logo-heading">The Sarafu and Cosmo-Local Credit lineage—as seen in</p>
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

          <p className="about-logo-heading">Our Partners</p>
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
          <h2>Ready to transform your community?</h2>
          <p>
            Join thousands of community members building stronger local economies through
            redeemable commitments and shared commitment Pools.
          </p>
          <div className="about-cta__buttons">
            <a
              className="about-button about-button--primary"
              href="https://cosmolocal.credit"
              rel="noreferrer"
              target="_blank"
            >
              Open Cosmo-Local Credit
            </a>
            <a
              className="about-button about-button--secondary"
              href="https://grassecon.substack.com"
              rel="noreferrer"
              target="_blank"
            >
              Subscribe to Our Newsletter
            </a>
          </div>
        </div>
      </section>

      <footer className="about-footer">
        <div className="about-shell about-footer__content">
          <p>© 2026 Cosmo-Local Credit. Sarafu Network’s history continues here.</p>
          <nav aria-label="Legal">
            <a href="https://grassecon.org/pages/terms-and-conditions" rel="noreferrer" target="_blank">
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
