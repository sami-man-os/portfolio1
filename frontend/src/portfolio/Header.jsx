import { useMemo } from 'react'
import Button from '../design/Button'
import ThemeToggle from '../design/ThemeToggle'
import { useActiveSection } from './useActiveSection'

export default function Header({ identity, nav }) {
  const ids = useMemo(() => nav.map((item) => item.id), [nav])
  const active = useActiveSection(ids)

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-canvas/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {identity.available && (
          <p className="eyebrow flex items-center gap-2 py-1.5">
            <span className="h-2 w-2 rounded-full bg-green" aria-hidden="true" />
            <span className="text-green">{identity.availabilityLabel}</span>
          </p>
        )}

        <div className="flex flex-wrap items-center gap-3 pb-2 md:h-14 md:flex-nowrap md:pb-0">
          <a href="#home" className="flex items-center gap-2 font-bold">
            <span className="h-6 w-6 rounded-md bg-accent" aria-hidden="true" />
            {identity.shortName}
          </a>

          <nav
            aria-label="Primary"
            className="order-3 -mx-4 flex w-full gap-5 overflow-x-auto px-4 pb-1 md:order-none md:mx-auto md:w-auto md:overflow-visible md:pb-0"
          >
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={active === item.id ? 'true' : undefined}
                className={`eyebrow whitespace-nowrap border-b-2 py-1 ${
                  active === item.id ? 'border-accent text-ink' : 'border-transparent text-muted hover:text-ink'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 md:ml-0">
            <ThemeToggle />
            <Button href="#contact" size="sm">
              Hire me
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}