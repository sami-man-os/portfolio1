import Button from './design/Button'
import Card from './design/Card'
import SectionHeading from './design/SectionHeading'
import Footer from './portfolio/Footer'
import Header from './portfolio/Header'
import { defaultPortfolio } from './portfolio/defaultData'

export default function App() {
  const { identity, nav, social } = defaultPortfolio

  return (
    <>
      <Header identity={identity} nav={nav} />
      <main>
        {nav.map((item) => (
          <section key={item.id} id={item.id} className="min-h-[70vh] border-b border-line px-4 py-16 md:px-8">
            <div className="mx-auto max-w-6xl">
              <SectionHeading eyebrow={item.label} title={`${item.label} section`} />
              <Card className="max-w-md">
                <p className="text-muted">Placeholder card for the {item.label} section.</p>
                <div className="mt-4 flex gap-3">
                  <Button size="sm">Primary</Button>
                  <Button size="sm" variant="secondary">
                    Secondary
                  </Button>
                </div>
              </Card>
            </div>
          </section>
        ))}
      </main>
      <Footer identity={identity} social={social} />
    </>
  )
}