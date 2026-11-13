export default function SkillInspector({ skill, group }) {
  return (
    <div
      aria-live="polite"
      className="absolute bottom-4 left-4 w-[min(22rem,calc(100%-2rem))] rounded-xl border border-line bg-surface/90 p-4 backdrop-blur"
    >
      {skill && group ? (
        <>
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-bold">{skill.name}</h3>
            <span className="eyebrow rounded border px-2 py-0.5" style={{ borderColor: group.color }}>
              {group.label} orbit
            </span>
          </div>
          <p className="mt-1 text-muted">{skill.description}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {skill.tags.map((tag) => (
              <li key={tag} className="eyebrow rounded border border-line px-2 py-0.5">
                {tag}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h3 className="text-lg font-bold">Skill inspector</h3>
          <p className="text-muted">Hover or tap a skill to inspect it.</p>
        </>
      )}
    </div>
  )
}