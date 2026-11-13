import Button from '../design/Button'

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-4 py-16 text-center">
      <div>
        <p className="eyebrow mb-3 text-accent">Error 404</p>
        <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
          Page not found
        </h1>
        <div className="mt-8">
          <Button href="/" variant="primary">
            Back to home
          </Button>
        </div>
      </div>
    </main>
  )
}
