import { useCallback, useEffect, useState } from 'react'

const LIGHT_QUERY = '(prefers-color-scheme: light)'

function readTheme() {
  const set = document.documentElement.getAttribute('data-theme')
  if (set === 'light' || set === 'dark') return set
  return window.matchMedia(LIGHT_QUERY).matches ? 'light' : 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState(readTheme)

  useEffect(() => {
    const query = window.matchMedia(LIGHT_QUERY)
    const onChange = () => setTheme(readTheme())
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  const toggle = useCallback(() => {
    const next = readTheme() === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      // storage can be blocked; the theme still changes for this visit
    }
    setTheme(next)
  }, [])

  return { theme, toggle }
}