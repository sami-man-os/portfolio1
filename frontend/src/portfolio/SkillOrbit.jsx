import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { useTheme } from '../design/useTheme'

const RINGS = [
  { radius: 2.6, tilt: [0.3, 0], speed: 0.12 },
  { radius: 3.4, tilt: [-0.45, 0.3], speed: -0.1 },
  { radius: 4.1, tilt: [0.7, -0.3], speed: 0.08 },
  { radius: 4.7, tilt: [-0.2, -0.6], speed: -0.06 },
]

function readColors(theme) {
  const style = getComputedStyle(document.documentElement)
  return {
    theme,
    core: style.getPropertyValue('--blue').trim() || '#3b82f6',
    inner: style.getPropertyValue('--accent').trim() || '#ff4b2b',
  }
}

function useReducedMotion() {
  const query = '(prefers-reduced-motion: reduce)'
  const [reduce, setReduce] = useState(() => window.matchMedia(query).matches)

  useEffect(() => {
    const media = window.matchMedia(query)
    const onChange = () => setReduce(media.matches)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  return reduce
}

function SkillNode({ item, group, position, active, onHover, onPin }) {
  return (
    <group position={position}>
      <Html center zIndexRange={[5, 0]}>
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          onPointerEnter={() => onHover(item.id)}
          onPointerLeave={() => onHover(null)}
          onClick={() => onPin(item.id)}
          className="whitespace-nowrap rounded-md border-2 px-2.5 py-1 text-xs font-bold"
          style={{
            borderColor: group.color,
            background: active ? group.color : 'var(--surface)',
            color: active ? '#080a0e' : 'var(--ink)',
          }}
        >
          {item.name}
        </button>
      </Html>
    </group>
  )
}

function OrbitScene({ skills, activeId, onHover, onPin, animate, colors }) {
  const root = useRef(null)
  const core = useRef(null)
  const inner = useRef(null)
  const spinners = useRef([])

  useFrame((state, delta) => {
    if (!animate) return
    if (core.current) core.current.rotation.y += delta * 0.2
    if (inner.current) inner.current.rotation.y -= delta * 0.3
    if (!activeId) {
      spinners.current.forEach((spinner, index) => {
        if (spinner) spinner.rotation.y += delta * RINGS[index % RINGS.length].speed
      })
    }
    if (root.current) {
      root.current.rotation.y += (state.pointer.x * 0.5 - root.current.rotation.y) * 0.05
      root.current.rotation.x += (0.35 - state.pointer.y * 0.25 - root.current.rotation.x) * 0.05
    }
  })

  return (
    <group ref={root} rotation={[0.35, 0, 0]}>
      <mesh ref={core}>
        <icosahedronGeometry args={[1.3, 2]} />
        <meshBasicMaterial color={colors.core} wireframe />
      </mesh>
      <mesh ref={inner}>
        <icosahedronGeometry args={[0.85, 1]} />
        <meshBasicMaterial color={colors.inner} wireframe transparent opacity={0.5} />
      </mesh>
      <Html center zIndexRange={[5, 0]}>
        <span className="eyebrow pointer-events-none rounded bg-surface/80 px-2 py-1 text-ink">Full Stack</span>
      </Html>

      {skills.groups.map((group, groupIndex) => {
        const ring = RINGS[groupIndex % RINGS.length]
        const items = skills.items.filter((item) => item.group === group.id)

        return (
          <group key={group.id} rotation={[ring.tilt[0], 0, ring.tilt[1]]}>
            <group
              ref={(element) => {
                spinners.current[groupIndex] = element
              }}
            >
              <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[ring.radius, 0.012, 8, 128]} />
                <meshBasicMaterial color={group.color} transparent opacity={0.35} />
              </mesh>
              {items.map((item, index) => {
                const angle = (index / items.length) * Math.PI * 2 + groupIndex
                return (
                  <SkillNode
                    key={item.id}
                    item={item}
                    group={group}
                    active={activeId === item.id}
                    position={[Math.cos(angle) * ring.radius, 0, Math.sin(angle) * ring.radius]}
                    onHover={onHover}
                    onPin={onPin}
                  />
                )
              })}
            </group>
          </group>
        )
      })}
    </group>
  )
}

export default function SkillOrbit({ skills, activeId, onHover, onPin, active }) {
  const { theme } = useTheme()
  const reduce = useReducedMotion()
  const colors = useMemo(() => readColors(theme), [theme])

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 40 }}
      dpr={[1, 2]}
      frameloop={reduce ? 'demand' : active ? 'always' : 'never'}
      gl={{ antialias: true, alpha: true }}
    >
      <OrbitScene
        skills={skills}
        activeId={activeId}
        onHover={onHover}
        onPin={onPin}
        animate={!reduce && active}
        colors={colors}
      />
    </Canvas>
  )
}