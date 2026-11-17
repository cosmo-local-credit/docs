import { useEffect, useId, useRef, useState } from 'react'

import { CLCLogo } from './CLCAppLogo'
import type { LocaleDirection } from '../i18n/locales'
import type {
  IntroductionArt,
  IntroductionGuideMessages,
} from '../i18n/introduction-guide'

const ICON_PATHS = {
  cake: 'M15.5 2C17.433 2 19 3.567 19 5.5C19 5.72679 18.9784 5.94854 18.9372 6.16332L18.9223 6.22941C20.7106 6.82471 22 8.51178 22 10.5C22 12.3741 20.8544 13.9806 19.2253 14.6574L18.1393 21.1644C18.0589 21.6466 17.6417 22 17.1529 22H6.84713C6.35829 22 5.9411 21.6466 5.86073 21.1644L4.832 14.994C3.24892 14.9037 2 13.5977 2 12C2 10.6926 2.83627 9.5806 4.00306 9.16963L4 9C4 5.68629 6.68629 3 10 3C10.9212 3 11.794 3.20761 12.574 3.5786C13.1984 2.62849 14.2758 2 15.5 2ZM9 15H6.86L7.694 20H9V15ZM13 15H11V20H13V15ZM17.139 15H15V20H16.305L17.139 15ZM10 5C7.8578 5 6.10892 6.68397 6.0046 8.76748L5.99967 8.96394L6.00273 9.13357C6.0173 9.94127 5.54534 10.6726 4.8166 10.9967L4.6675 11.056C4.27121 11.1956 4 11.5722 4 12C4 12.5523 4.44772 13 5 13H17.5C18.8807 13 20 11.8807 20 10.5C20 9.11929 18.8807 8 17.5 8C17.1643 8 16.8417 8.06519 16.5442 8.18959L16.3688 8.27129C15.4021 8.76932 14.2253 8.40165 13.7059 7.46716L13.6362 7.32984C12.9876 5.92108 11.5778 5 10 5ZM15.5 4C14.9536 4 14.4755 4.29211 14.2132 4.72868C14.7264 5.2345 15.1481 5.83144 15.4529 6.49336C15.8966 6.26481 16.3838 6.10867 16.8988 6.03984C16.9645 5.87263 17 5.69046 17 5.5C17 4.67157 16.3284 4 15.5 4Z',
  check: 'M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z',
  handCoin: 'M5.00488 9.00281C5.55717 9.00281 6.00488 9.45052 6.00488 10.0028C7.63965 10.0028 9.14352 10.5632 10.3349 11.5023L12.5049 11.5028C13.8375 11.5028 15.0348 12.0821 15.8588 13.0025L19.0049 13.0028C20.9972 13.0028 22.7173 14.1681 23.521 15.8542C21.1562 18.9748 17.3268 21.0028 13.0049 21.0028C10.2142 21.0028 7.85466 20.3996 5.944 19.3449C5.80557 19.7284 5.43727 20.0028 5.00488 20.0028H2.00488C1.4526 20.0028 1.00488 19.5551 1.00488 19.0028V10.0028C1.00488 9.45052 1.4526 9.00281 2.00488 9.00281H5.00488ZM6.00589 12.0028L6.00488 17.0248L6.05024 17.0573C7.84406 18.3177 10.183 19.0028 13.0049 19.0028C16.0089 19.0028 18.8035 17.8472 20.84 15.8734L20.9729 15.7398L20.8537 15.6394C20.3897 15.2764 19.8205 15.0512 19.2099 15.0097L19.0049 15.0028L16.8934 15.0028C16.9664 15.3244 17.0049 15.6591 17.0049 16.0028V17.0028H8.00488V15.0028L14.7949 15.0018L14.7605 14.9233C14.38 14.1297 13.593 13.5681 12.6693 13.5081L12.5049 13.5028L9.57547 13.5027C8.66823 12.5773 7.40412 12.0031 6.00589 12.0028ZM4.00488 11.0028H3.00488V18.0028H4.00488V11.0028ZM18.0049 5.00281C19.6617 5.00281 21.0049 6.34595 21.0049 8.00281C21.0049 9.65966 19.6617 11.0028 18.0049 11.0028C16.348 11.0028 15.0049 9.65966 15.0049 8.00281C15.0049 6.34595 16.348 5.00281 18.0049 5.00281ZM18.0049 7.00281C17.4526 7.00281 17.0049 7.45052 17.0049 8.00281C17.0049 8.55509 17.4526 9.00281 18.0049 9.00281C18.5572 9.00281 19.0049 8.55509 19.0049 8.00281C19.0049 7.45052 18.5572 7.00281 18.0049 7.00281ZM11.0049 2.00281C12.6617 2.00281 14.0049 3.34595 14.0049 5.00281C14.0049 6.65966 12.6617 8.00281 11.0049 8.00281C9.34803 8.00281 8.00488 6.65966 8.00488 5.00281C8.00488 3.34595 9.34803 2.00281 11.0049 2.00281ZM11.0049 4.00281C10.4526 4.00281 10.0049 4.45052 10.0049 5.00281C10.0049 5.55509 10.4526 6.00281 11.0049 6.00281C11.5572 6.00281 12.0049 5.55509 12.0049 5.00281C12.0049 4.45052 11.5572 4.00281 11.0049 4.00281Z',
  basket: 'M12.0049 2C15.3186 2 18.0049 4.68629 18.0049 8V9H22.0049V11H20.8379L20.0813 20.083C20.0381 20.6013 19.6048 21 19.0847 21H4.92502C4.40493 21 3.97166 20.6013 3.92847 20.083L3.17088 11H2.00488V9H6.00488V8C6.00488 4.68629 8.69117 2 12.0049 2ZM18.8309 11H5.17788L5.84488 19H18.1639L18.8309 11ZM13.0049 13V17H11.0049V13H13.0049ZM9.00488 13V17H7.00488V13H9.00488ZM17.0049 13V17H15.0049V13H17.0049ZM12.0049 4C9.86269 4 8.1138 5.68397 8.00978 7.80036L8.00488 8V9H16.0049V8C16.0049 5.8578 14.3209 4.10892 12.2045 4.0049L12.0049 4Z',
  store: 'M21 13.2422V20H22V22H2V20H3V13.2422C1.79401 12.435 1 11.0602 1 9.5C1 8.67286 1.22443 7.87621 1.63322 7.19746L4.3453 2.5C4.52393 2.1906 4.85406 2 5.21132 2H18.7887C19.1459 2 19.4761 2.1906 19.6547 2.5L22.3575 7.18172C22.7756 7.87621 23 8.67286 23 9.5C23 11.0602 22.206 12.435 21 13.2422ZM19 13.9725C18.8358 13.9907 18.669 14 18.5 14C17.2409 14 16.0789 13.478 15.25 12.6132C14.4211 13.478 13.2591 14 12 14C10.7409 14 9.5789 13.478 8.75 12.6132C7.9211 13.478 6.75911 14 5.5 14C5.331 14 5.16417 13.9907 5 13.9725V20H19V13.9725ZM5.78865 4L3.35598 8.21321C3.12409 8.59843 3 9.0389 3 9.5C3 10.8807 4.11929 12 5.5 12C6.53096 12 7.44467 11.3703 7.82179 10.4295C8.1574 9.59223 9.3426 9.59223 9.67821 10.4295C10.0553 11.3703 10.969 12 12 12C13.031 12 13.9447 11.3703 14.3218 10.4295C14.6574 9.59223 15.8426 9.59223 16.1782 10.4295C16.5553 11.3703 17.469 12 18.5 12C19.8807 12 21 10.8807 21 9.5C21 9.0389 20.8759 8.59843 20.6347 8.19746L18.2113 4H5.78865Z',
  user: 'M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z',
  wallet: 'M22.0049 6.99979H23.0049V16.9998H22.0049V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V6.99979ZM20.0049 16.9998H14.0049C11.2435 16.9998 9.00488 14.7612 9.00488 11.9998C9.00488 9.23836 11.2435 6.99979 14.0049 6.99979H20.0049V4.99979H4.00488V18.9998H20.0049V16.9998ZM21.0049 14.9998V8.99979H14.0049C12.348 8.99979 11.0049 10.3429 11.0049 11.9998C11.0049 13.6566 12.348 14.9998 14.0049 14.9998H21.0049ZM14.0049 10.9998H17.0049V12.9998H14.0049V10.9998Z',
} as const

type IconName = keyof typeof ICON_PATHS

function Icon({ name, x, y, size, inverse = false, accent = false }: {
  name: IconName
  x: number
  y: number
  size: number
  inverse?: boolean
  accent?: boolean
}) {
  const className = inverse
    ? 'clc-guide-art__icon clc-guide-art__icon--inverse'
    : accent
      ? 'clc-guide-art__icon clc-guide-art__icon--accent'
      : 'clc-guide-art__icon'
  return (
    <svg className={className} height={size} viewBox="0 0 24 24" width={size} x={x} y={y}>
      <path d={ICON_PATHS[name]} />
    </svg>
  )
}

function Node({ x, y, icon, primary = false, size = 40 }: {
  x: number
  y: number
  icon: IconName
  primary?: boolean
  size?: number
}) {
  return (
    <g>
      <rect className={primary ? 'clc-guide-art__node--primary' : 'clc-guide-art__card'} height={size} width={size} x={x} y={y} />
      <Icon inverse={primary} name={icon} size={size / 2} x={x + size / 4} y={y + size / 4} />
    </g>
  )
}

function Arrow({ x1, x2, y, primary = false }: { x1: number; x2: number; y: number; primary?: boolean }) {
  return (
    <path
      className={primary ? 'clc-guide-art__line clc-guide-art__line--accent' : 'clc-guide-art__line'}
      d={`M${x1} ${y}H${x2}M${x2 - 6} ${y - 5}L${x2} ${y}L${x2 - 6} ${y + 5}`}
    />
  )
}

function Chip({ x, y, label, primary = false, width = 64 }: {
  x: number
  y: number
  label: string
  primary?: boolean
  width?: number
}) {
  return (
    <g>
      <rect className={primary ? 'clc-guide-art__chip--primary' : 'clc-guide-art__card'} height="20" width={width} x={x} y={y} />
      <text className={primary ? 'clc-guide-art__label clc-guide-art__label--accent' : 'clc-guide-art__label'} textAnchor="middle" x={x + width / 2} y={y + 14}>
        {label}
      </text>
    </g>
  )
}

function Logo({ x, y, size, sharp = false }: { x: number; y: number; size: number; sharp?: boolean }) {
  return (
    <svg height={size} width={size} x={x} y={y}>
      <CLCLogo sharp={sharp} />
    </svg>
  )
}

function Qr({ x, y, size, seed }: { x: number; y: number; size: number; seed: number }) {
  const modules = 25
  const moduleSize = size / modules
  let state = seed
  const next = () => {
    state = (state * 9301 + 49297) % 233280
    return state / 233280
  }
  const square = (column: number, row: number, span: number) =>
    `M${x + column * moduleSize} ${y + row * moduleSize}h${span * moduleSize}v${span * moduleSize}h${-span * moduleSize}z`
  const inFinder = (row: number, column: number) =>
    (row < 8 && column < 8) || (row < 8 && column >= modules - 8) || (row >= modules - 8 && column < 8)
  let path = ''
  for (let row = 0; row < modules; row += 1) {
    for (let column = 0; column < modules; column += 1) {
      if (!inFinder(row, column) && next() < 0.48) path += square(column, row, 1)
    }
  }
  for (const [column, row] of [[0, 0], [modules - 7, 0], [0, modules - 7]] as const) {
    path += square(column, row, 7) + square(column + 1, row + 1, 5) + square(column + 2, row + 2, 3)
  }
  return <path className="clc-guide-art__qr" d={path} fillRule="evenodd" />
}

function GuideArtwork({ name }: { name: IntroductionArt }) {
  let art

  switch (name) {
    case 'network':
      art = (
        <>
          <path className="clc-guide-art__dash" d="M56 40L150 80M56 120L150 80M244 40L150 80M244 120L150 80" />
          <Node icon="store" x={36} y={20} />
          <Node icon="user" x={36} y={100} />
          <Node icon="basket" x={224} y={20} />
          <Node icon="handCoin" x={224} y={100} />
          <Logo sharp size={56} x={122} y={52} />
        </>
      )
      break
    case 'voucher':
      art = (
        <>
          <Node icon="store" x={14} y={60} />
          <Arrow x1={60} x2={86} y={80} />
          <rect className="clc-guide-art__card" height="72" width="112" x="94" y="44" />
          <path className="clc-guide-art__dash" d="M178 44V116" />
          <text className="clc-guide-art__label clc-guide-art__label--accent" x="106" y="70">BAKE</text>
          <rect className="clc-guide-art__muted" height="5" width="56" x="106" y="84" />
          <rect className="clc-guide-art__muted" height="5" width="38" x="106" y="96" />
          <Icon accent name="check" size={18} x={183} y={71} />
          <Arrow x1={214} x2={240} y={80} />
          <Node icon="cake" x={246} y={60} />
        </>
      )
      break
    case 'offer':
      art = (
        <>
          <rect className="clc-guide-art__card" height="140" width="150" x="75" y="10" />
          <rect className="clc-guide-art__media" height="62" width="134" x="83" y="18" />
          <Icon name="cake" size={28} x={136} y={35} />
          <rect className="clc-guide-art__muted" height="6" width="104" x="83" y="90" />
          <rect className="clc-guide-art__muted" height="6" width="72" x="83" y="102" />
          <Chip label="BAKE" primary width={60} x={83} y={120} />
          <Icon name="store" size={18} x={195} y={121} />
        </>
      )
      break
    case 'pool':
      art = (
        <>
          <Chip label="BAKE" x={10} y={70} />
          <Arrow x1={78} x2={100} y={80} />
          <rect className="clc-guide-art__card" height="132" width="88" x="106" y="14" />
          <Chip label="BAKE" x={118} y={32} />
          <Chip label="FARM" primary x={118} y={70} />
          <Chip label="RIDE" x={118} y={108} />
          <Arrow x1={200} x2={222} y={80} />
          <Chip label="FARM" primary x={226} y={70} />
        </>
      )
      break
    case 'send':
      art = (
        <>
          <Node icon="wallet" size={44} x={26} y={58} />
          <Chip label="20 BAKE" primary width={76} x={112} y={52} />
          <Arrow primary x1={80} x2={220} y={86} />
          <Node icon="user" size={44} x={230} y={58} />
        </>
      )
      break
    case 'receive':
      art = (
        <>
          <rect className="clc-guide-art__card" height="112" width="112" x="40" y="14" />
          <Qr seed={5} size={96} x={48} y={22} />
          <Arrow x1={162} x2={214} y={70} />
          <Node icon="wallet" primary size={44} x={222} y={48} />
        </>
      )
      break
    case 'wallet':
      art = (
        <>
          <rect className="clc-guide-art__card clc-guide-art__card--dashed" height="100" width="160" x="22" y="30" />
          <Logo size={30} x={32} y={40} />
          <rect className="clc-guide-art__muted" height="6" width="62" x="32" y="96" />
          <rect className="clc-guide-art__muted" height="6" width="40" x="32" y="108" />
          <rect className="clc-guide-art__card" height="56" width="56" x="116" y="40" />
          <Qr seed={9} size={48} x={120} y={44} />
          <Node icon="wallet" primary size={52} x={214} y={26} />
          <Chip label="BAKE" width={68} x={206} y={90} />
          <Chip label="FARM" width={68} x={206} y={116} />
        </>
      )
      break
  }

  return (
    <div className="clc-guide-art" aria-hidden="true" data-art={name} dir="ltr">
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 300 160">{art}</svg>
    </div>
  )
}

export function IntroductionCarousel({
  direction,
  messages,
}: {
  direction: LocaleDirection
  messages: IntroductionGuideMessages
}) {
  const [index, setIndex] = useState(0)
  const labelId = useId()
  const regionRef = useRef<HTMLDivElement>(null)
  const count = messages.slides.length

  const goBack = () => setIndex((current) => Math.max(0, current - 1))
  const goNext = () => setIndex((current) => Math.min(count - 1, current + 1))

  useEffect(() => {
    const region = regionRef.current
    if (!region) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        direction === 'rtl' ? goNext() : goBack()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        direction === 'rtl' ? goBack() : goNext()
      }
    }
    region.addEventListener('keydown', onKeyDown)
    return () => region.removeEventListener('keydown', onKeyDown)
  }, [direction, count])

  return (
    <div
      aria-labelledby={labelId}
      aria-roledescription="carousel"
      className="clc-guide"
      dir={direction}
      ref={regionRef}
      role="region"
    >
      <h3 className="clc-guide__heading" id={labelId}>{messages.label}</h3>
      <div className="clc-guide__viewport">
        <div
          className="clc-guide__track"
          dir="ltr"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {messages.slides.map((slide, slideIndex) => (
            <article
              aria-hidden={slideIndex !== index}
              className="clc-guide__slide"
              dir={direction}
              inert={slideIndex !== index ? true : undefined}
              key={slide.art}
            >
              <div className="clc-guide__copy">
                <h4>{slide.title}</h4>
                <p>
                  {slide.body}
                  {slideIndex === 0 ? <>{' '}<a href="#features">{messages.about}</a></> : null}
                </p>
              </div>
              <GuideArtwork name={slide.art} />
            </article>
          ))}
        </div>

        <button
          aria-label={messages.back}
          className="clc-guide__arrow clc-guide__arrow--back"
          disabled={index === 0}
          onClick={goBack}
          type="button"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          aria-label={messages.next}
          className="clc-guide__arrow clc-guide__arrow--next"
          disabled={index === count - 1}
          onClick={goNext}
          type="button"
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>

      <div className="clc-guide__progress" role="group" aria-label={messages.label}>
        {messages.slides.map((slide, slideIndex) => (
          <button
            aria-current={slideIndex === index ? 'step' : undefined}
            aria-label={slide.title}
            className="clc-guide__segment"
            data-state={slideIndex === index ? 'active' : slideIndex < index ? 'visited' : 'idle'}
            key={slide.art}
            onClick={() => setIndex(slideIndex)}
            type="button"
          />
        ))}
      </div>
    </div>
  )
}
