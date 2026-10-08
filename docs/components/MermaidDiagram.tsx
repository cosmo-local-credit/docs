import { useEffect, useId, useRef, useState } from 'react'

type DiagramTheme = 'default' | 'dark'

let renderCount = 0

function activeTheme(): DiagramTheme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'default'
}

export function MermaidDiagram({
  chart,
  errorMessage = 'The diagram could not be rendered',
  label,
  minWidth = 720,
  scrollMessage = 'Scroll horizontally to view the full diagram.',
}: {
  chart: string
  errorMessage?: string
  label: string
  minWidth?: number
  scrollMessage?: string
}) {
  const reactId = useId()
  const containerRef = useRef<HTMLDivElement>(null)
  const [theme, setTheme] = useState<DiagramTheme>('dark')
  const [error, setError] = useState<string>()

  useEffect(() => {
    const updateTheme = () => setTheme(activeTheme())
    const observer = new MutationObserver(updateTheme)

    updateTheme()
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let active = true
    const container = containerRef.current
    const diagramId = `mermaid-${reactId.replace(/[^a-zA-Z0-9_-]/g, '')}-${++renderCount}`

    setError(undefined)

    void import('mermaid')
      .then(async ({ default: mermaid }) => {
        mermaid.initialize({
          securityLevel: 'strict',
          startOnLoad: false,
          theme,
        })
        const { svg, bindFunctions } = await mermaid.render(diagramId, chart)
        if (!active || !container) return

        container.innerHTML = svg
        const renderedSvg = container.querySelector('svg')
        if (renderedSvg) {
          renderedSvg.setAttribute('aria-hidden', 'true')
          renderedSvg.setAttribute('focusable', 'false')
          renderedSvg.style.height = 'auto'
          renderedSvg.style.maxWidth = 'none'
          renderedSvg.style.minWidth = `${minWidth}px`
          renderedSvg.style.width = '100%'
        }
        bindFunctions?.(container)
      })
      .catch((cause: unknown) => {
        if (!active) return
        setError(cause instanceof Error ? cause.message : String(cause))
      })

    return () => {
      active = false
      container?.replaceChildren()
    }
  }, [chart, label, minWidth, reactId, theme])

  if (error) {
    return (
      <pre role="alert">
        {errorMessage}: {error}
      </pre>
    )
  }

  return (
    <figure style={{ margin: '1rem 0' }}>
      <figcaption
        style={{ color: 'var(--vocs-color_text3)', fontSize: '0.8rem', marginBottom: '0.5rem' }}
      >
        {scrollMessage}
      </figcaption>
      <div
        ref={containerRef}
        aria-label={label}
        data-mermaid-diagram
        role="img"
        style={{ overflowX: 'auto', paddingBottom: '0.5rem' }}
        tabIndex={0}
      />
    </figure>
  )
}
