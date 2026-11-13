import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import PlaceholderSection from './PlaceholderSection'

export default function PortfolioRenderer({ data }) {
  const { identity, nav, social, hero, sections } = data

  return (
    <>
      <Header identity={identity} nav={nav} />
      <main>
        <Hero identity={identity} hero={hero} />
        {sections.map((section) => (
          <PlaceholderSection key={section.id} {...section} />
        ))}
      </main>
      <Footer identity={identity} social={social} />
    </>
  )
}
