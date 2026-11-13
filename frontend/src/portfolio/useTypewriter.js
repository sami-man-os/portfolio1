import { useEffect, useState } from 'react'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

export default function useTypewriter(text, speed = 70) {
  const reduceMotion =
    typeof window !== 'undefined' && window.matchMedia(REDUCED_MOTION_QUERY).matches
  const [typed, setTyped] = useState({ text, value: '' })

  useEffect(() => {
    if (reduceMotion) return undefined

    let index = 0
    let timer

    const typeNextCharacter = () => {
      timer = window.setTimeout(() => {
        index += 1
        setTyped({ text, value: text.slice(0, index) })
        if (index < text.length) typeNextCharacter()
      }, speed)
    }

    typeNextCharacter()
    return () => window.clearTimeout(timer)
  }, [reduceMotion, speed, text])

  if (reduceMotion) return text
  return typed.text === text ? typed.value : ''
}
