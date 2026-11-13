import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import StageErrorBoundary from './StageErrorBoundary'

const SkillOrbit = lazy(() => import('./SkillOrbit'))

function webglAvailable() {
  try {
    const canvas = document.createElement('canvas')
    return Boolean(window.WebGLRenderingContext && (canvas.getContext('webgl2') || canvas.getContext('webgl')))
  } catch {
    return false
  }
}

function useInView(ref, margin) {
  const [inView, setInView] = useState(false)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
        if (entry.isIntersecting) setSeen(true)
      },
      { rootMargin: margin },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [ref, margin])

  return [inView, seen]
}

function Message({ children }) {
  return <p className="eyebrow grid h-full place-items-center px-6 text-center text-muted">{children}</p>
}

export default function SkillStage({ skills, activeId, onHover, onPin }) {
  const ref = useRef(null)
  const [supported] = useState(webglAvailable)
  const [inView, seen] = useInView(ref, '300px 0px')

  let content = null
  if (!supported) {
    content = <Message>3D view is not available on this device. Use the skill list.</Message>
  } else if (seen) {
    content = (
      <StageErrorBoundary fallback={<Message>The 3D view could not load. Use the skill list.</Message>}>
        <Suspense fallback={<Message>Loading 3D orbit...</Message>}>
          <SkillOrbit skills={skills} activeId={activeId} onHover={onHover} onPin={onPin} active={inView} />
        </Suspense>
      </StageErrorBoundary>
    )
  }

  return (
    <div ref={ref} className="absolute inset-0 isolate">
      {content}
    </div>
  )
}