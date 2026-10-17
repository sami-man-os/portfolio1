import { useState } from 'react'

const swatches = [
  ['canvas', 'bg-canvas'],
  ['surface', 'bg-surface'],
  ['ink', 'bg-ink'],
  ['muted', 'bg-muted'],
  ['line', 'bg-line'],
  ['accent', 'bg-accent'],
  ['blue', 'bg-blue'],
  ['green', 'bg-green'],
]

function currentTheme() {
  return (
    document.documentElement.getAttribute('data-theme') ||
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
  )
}

export default function App() {
  const [theme, setTheme] = useState(currentTheme)

  const flip = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      // storage can be blocked; the theme still changes for this visit
    }
    setTheme(next)
  }

  return (
    <main className="min-h-screen bg-canvas p-6 font-body text-ink md:p-16">
      <div className="mx-auto max-w-5xl space-y-12">
        <header className="flex items-center justify-between gap-4">
          <p className="eyebrow text-accent">Design system · Task 3A</p>
          <button
            type="button"
            onClick={flip}
            className="rounded-lg border border-line bg-surface px-4 py-2 text-sm"
          >
            Theme: {theme}
          </button>
        </header>

        <h1 className="font-display text-4xl font-extrabold leading-none tracking-tight md:text-8xl">
          Samuel <span className="outline-text block">Minwagaw</span>
        </h1>

        <p className="max-w-xl text-lg text-muted">
          Body text in Space Grotesk. Headings use Unbounded, and small labels use JetBrains Mono.
        </p>

        <div className="flex flex-wrap gap-3">
          <button type="button" className="eyebrow rounded-lg bg-accent px-6 py-3 font-medium text-accent-ink">
            Primary button
          </button>
          <button type="button" className="eyebrow rounded-lg border border-line bg-surface px-6 py-3">
            Secondary button
          </button>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {swatches.map(([name, cls]) => (
            <li key={name} className="rounded-xl border border-line bg-surface p-3">
              <div className={`h-12 rounded-lg border border-line ${cls}`} />
              <p className="eyebrow mt-2 text-muted">{name}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}