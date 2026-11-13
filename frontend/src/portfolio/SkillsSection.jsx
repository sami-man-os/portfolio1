import { useState } from 'react'
import SectionHeading from '../design/SectionHeading'
import SkillInspector from './SkillInspector'
import SkillList from './SkillList'

export default function SkillsSection({ section, skills, renderStage }) {
  const [hoverId, setHoverId] = useState(null)
  const [pinnedId, setPinnedId] = useState(null)

  const activeId = hoverId ?? pinnedId
  const skill = skills.items.find((item) => item.id === activeId) ?? null
  const group = skill ? skills.groups.find((entry) => entry.id === skill.group) : null
  const togglePin = (id) => setPinnedId((current) => (current === id ? null : id))

  return (
    <section id={section.id} className="border-b border-line px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={section.eyebrow} title={section.title} />
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_17rem]">
          <div className="relative h-[26rem] overflow-hidden rounded-2xl border border-line bg-surface md:h-[32rem]">
            {renderStage ? (
              renderStage({ skills, activeId, onHover: setHoverId, onPin: togglePin })
            ) : (
              <p className="eyebrow grid h-full place-items-center px-6 text-center text-muted">
                3D skill orbit arrives in the next step
              </p>
            )}
            <SkillInspector skill={skill} group={group} />
          </div>
          <SkillList
            groups={skills.groups}
            items={skills.items}
            pinnedId={pinnedId}
            onHover={setHoverId}
            onPin={togglePin}
          />
        </div>
      </div>
    </section>
  )
}