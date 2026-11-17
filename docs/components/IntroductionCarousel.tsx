import { useEffect, useId, useRef, useState } from 'react'

import type { LocaleDirection } from '../i18n/locales'
import type {
  IntroductionArt,
  IntroductionGuideMessages,
} from '../i18n/introduction-guide'

function Arrow({ x1, x2, y }: { x1: number; x2: number; y: number }) {
  return (
    <path
      className="clc-guide-art__line"
      d={`M${x1} ${y}H${x2}m-7-6 7 6-7 6`}
    />
  )
}

function Chip({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <rect className="clc-guide-art__card" height="22" width="70" x={x} y={y} />
      <text className="clc-guide-art__label" textAnchor="middle" x={x + 35} y={y + 15}>
        {label}
      </text>
    </g>
  )
}

function Person({ x, y }: { x: number; y: number }) {
  return (
    <g className="clc-guide-art__line">
      <circle cx={x + 18} cy={y + 13} r="8" />
      <path d={`M${x + 5} ${y + 38}c2-14 24-14 26 0`} />
    </g>
  )
}

function Qr({ x, y }: { x: number; y: number }) {
  return (
    <g className="clc-guide-art__qr">
      <path d={`M${x} ${y}h16v16H${x}zM${x + 32} ${y}h16v16h-16zM${x} ${y + 32}h16v16H${x}z`} />
      <path d={`M${x + 22} ${y + 22}h7v7h-7zM${x + 36} ${y + 25}h6v10h-6zM${x + 22} ${y + 37}h10v6H${x + 22}zM${x + 38} ${y + 40}h10v8H${x + 38}z`} />
    </g>
  )
}

function GuideArtwork({ name }: { name: IntroductionArt }) {
  let art

  switch (name) {
    case 'network':
      art = (
        <>
          <path className="clc-guide-art__dash" d="M64 43 150 80 64 121M236 43 150 80l86 41" />
          <rect className="clc-guide-art__card" height="44" width="44" x="42" y="21" />
          <path className="clc-guide-art__line" d="M51 43h26M54 43v13h20V43m-22-8h24l-4 8H56z" />
          <rect className="clc-guide-art__card" height="44" width="44" x="42" y="99" />
          <Person x={46} y={100} />
          <rect className="clc-guide-art__card" height="44" width="44" x="214" y="21" />
          <path className="clc-guide-art__line" d="M223 40h26l-3 16h-20zM229 40l4-8m10 8-4-8" />
          <rect className="clc-guide-art__card" height="44" width="44" x="214" y="99" />
          <path className="clc-guide-art__line" d="M221 127c9-9 18-9 29-2m-27-9 9-7 16 5m-19 11 7 6" />
          <image height="58" href="/icons/CLC-logo.svg" width="58" x="121" y="51" />
        </>
      )
      break
    case 'voucher':
      art = (
        <>
          <rect className="clc-guide-art__card" height="44" width="44" x="15" y="58" />
          <path className="clc-guide-art__line" d="M24 80h26m-23 0v13h20V80m-22-8h24l-4 8H29z" />
          <Arrow x1={66} x2={91} y={80} />
          <rect className="clc-guide-art__card" height="76" width="116" x="94" y="42" />
          <text className="clc-guide-art__label clc-guide-art__label--accent" x="107" y="68">BAKE</text>
          <path className="clc-guide-art__dash" d="M180 42v76" />
          <path className="clc-guide-art__muted" d="M107 86h55v6h-55zm0 14h38v6h-38z" />
          <path className="clc-guide-art__line" d="m186 79 6 6 12-15" />
          <Arrow x1={217} x2={241} y={80} />
          <rect className="clc-guide-art__card" height="44" width="44" x="243" y="58" />
          <path className="clc-guide-art__line" d="M253 86c5-15 18-15 24 0M258 76h14" />
        </>
      )
      break
    case 'offer':
      art = (
        <>
          <rect className="clc-guide-art__card" height="142" width="150" x="75" y="9" />
          <rect className="clc-guide-art__muted" height="60" width="134" x="83" y="17" />
          <path className="clc-guide-art__line" d="M137 59c4-20 22-20 27 0m-22-10h17" />
          <path className="clc-guide-art__muted" d="M84 90h103v7H84zm0 14h72v7H84z" />
          <Chip label="BAKE" x={84} y={121} />
          <path className="clc-guide-art__line" d="M194 137h22m-19 0v10h16v-10m-18-7h20l-3 7h-14z" />
        </>
      )
      break
    case 'pool':
      art = (
        <>
          <Chip label="BAKE" x={8} y={69} />
          <Arrow x1={83} x2={102} y={80} />
          <rect className="clc-guide-art__card" height="134" width="90" x="105" y="13" />
          <Chip label="BAKE" x={115} y={31} />
          <Chip label="FARM" x={115} y={69} />
          <Chip label="RIDE" x={115} y={107} />
          <Arrow x1={201} x2={222} y={80} />
          <Chip label="FARM" x={224} y={69} />
        </>
      )
      break
    case 'send':
      art = (
        <>
          <rect className="clc-guide-art__card" height="48" width="48" x="25" y="56" />
          <path className="clc-guide-art__line" d="M34 69h28v23H34zm4-6h20v6" />
          <Chip label="20 BAKE" x={112} y={48} />
          <Arrow x1={81} x2={220} y={89} />
          <rect className="clc-guide-art__card" height="48" width="48" x="228" y="56" />
          <Person x={234} y={61} />
        </>
      )
      break
    case 'receive':
      art = (
        <>
          <rect className="clc-guide-art__card" height="112" width="112" x="40" y="24" />
          <Qr x={72} y={56} />
          <Arrow x1={165} x2={215} y={80} />
          <rect className="clc-guide-art__card clc-guide-art__card--accent" height="50" width="50" x="223" y="55" />
          <path className="clc-guide-art__line clc-guide-art__line--inverse" d="M233 70h30v23h-30zm4-6h22v6" />
        </>
      )
      break
    case 'wallet':
      art = (
        <>
          <rect className="clc-guide-art__card clc-guide-art__dash" height="100" width="160" x="22" y="30" />
          <image height="30" href="/icons/CLC-logo.svg" width="30" x="32" y="40" />
          <rect className="clc-guide-art__card" height="56" width="56" x="116" y="40" />
          <Qr x={120} y={44} />
          <path className="clc-guide-art__muted" d="M32 98h62v6H32zm0 13h42v6H32z" />
          <rect className="clc-guide-art__card clc-guide-art__card--accent" height="52" width="52" x="216" y="27" />
          <path className="clc-guide-art__line clc-guide-art__line--inverse" d="M226 42h32v24h-32zm4-6h24v6" />
          <Chip label="BAKE" x={207} y={93} />
          <Chip label="FARM" x={207} y={121} />
        </>
      )
      break
  }

  return (
    <div className="clc-guide-art" aria-hidden="true" data-art={name}>
      <svg viewBox="0 0 300 160">{art}</svg>
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
