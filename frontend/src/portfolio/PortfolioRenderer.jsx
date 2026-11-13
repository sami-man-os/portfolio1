import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import PlaceholderSection from './PlaceholderSection'
import SkillsSection from './SkillsSection'

export default function PortfolioRenderer({ data, renderSkillsStage }) {
  const { identity, hero, nav, sections, social, skills } = data

  return (
    <>
      <Header identity={identity} nav={nav} />
      <main>
        <Hero identity={identity} hero={hero} />
        {sections.map((section) =>
          section.id === 'skills' && skills ? (
            <SkillsSection key={section.id} section={section} skills={skills} renderStage={renderSkillsStage} />
          ) : (
            <PlaceholderSection key={section.id} {...section} />
          ),
        )}
      </main>
      <Footer identity={identity} social={social} />
    </>
  )
}