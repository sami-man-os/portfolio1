export default function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-8">
      {eyebrow && <p className="eyebrow mb-3 text-accent">{eyebrow}</p>}
      <h2 className="max-w-[20ch] font-display text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
        {title}
      </h2>
    </div>
  )
}