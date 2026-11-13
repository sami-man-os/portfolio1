import Card from '../design/Card'
import SectionHeading from '../design/SectionHeading'

export default function PlaceholderSection({ id, eyebrow, title, note }) {
  return (
    <section id={id} className="min-h-[60vh] border-b border-line px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <Card className="max-w-2xl">
          <p className="text-muted">{note}</p>
        </Card>
      </div>
    </section>
  )
}
