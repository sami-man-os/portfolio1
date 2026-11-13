export default function SkillList({ groups, items, pinnedId, onHover, onPin }) {
  return (
    <div>
      {groups.map((group) => (
        <div key={group.id} className="mb-6">
          <h3 className="eyebrow mb-3 flex items-center gap-2 text-muted">
            <span className="h-2 w-2 rounded-full" style={{ background: group.color }} aria-hidden="true" />
            {group.label}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {items
              .filter((item) => item.group === group.id)
              .map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    aria-pressed={pinnedId === item.id}
                    onMouseEnter={() => onHover(item.id)}
                    onMouseLeave={() => onHover(null)}
                    onFocus={() => onHover(item.id)}
                    onBlur={() => onHover(null)}
                    onClick={() => onPin(item.id)}
                    className={`rounded-lg border px-3 py-1.5 text-sm ${
                      pinnedId === item.id ? 'border-accent text-accent' : 'border-line bg-surface hover:border-accent'
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  )
}