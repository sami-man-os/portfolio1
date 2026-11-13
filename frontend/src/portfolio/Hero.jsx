import Button from '../design/Button'
import useTypewriter from './useTypewriter'

export default function Hero({ identity, hero }) {
  const roleText = `${identity.role}.`
  const typedRole = useTypewriter(roleText)
  const [firstWord, ...remainingWords] = identity.name.split(/\s+/)
  const remainingName = remainingWords.join(' ')

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden border-b border-line bg-canvas px-4 py-20 md:px-8 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
        }}
      />
      <div className="mx-auto max-w-6xl">
        {identity.available && (
          <p className="eyebrow mb-8 inline-flex items-center gap-2 rounded-full border border-green px-4 py-2 text-green">
            <span className="h-2 w-2 rounded-full bg-green" aria-hidden="true" />
            {identity.availabilityLabel}
          </p>
        )}

        <h1 className="max-w-full break-words font-display font-extrabold leading-[0.95] tracking-tight text-ink [font-size:clamp(2.5rem,10.5vw,7.6rem)]">
          <span className="block">{firstWord}</span>
          {remainingName && <span className="outline-text block break-words">{remainingName}</span>}
        </h1>

        <p className="eyebrow mt-8 min-h-6 text-accent" aria-live="polite">
          <span className="sr-only">{roleText}</span>
          <span aria-hidden="true">{typedRole}</span>
          <span className="ml-1 inline-block animate-pulse" aria-hidden="true">
            |
          </span>
        </p>
        <p className="mt-5 max-w-2xl text-lg text-muted md:text-xl">{hero.summary}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#work" variant="primary">
            Selected work &rarr;
          </Button>
          <Button href={hero.cvUrl} variant="ghost">
            &darr; Download CV
          </Button>
        </div>
      </div>
    </section>
  )
}
