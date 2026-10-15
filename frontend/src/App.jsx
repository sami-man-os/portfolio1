import { useEffect, useState } from 'react'
import { getHealth } from './api/health'

export default function App() {
  const [state, setState] = useState({ status: 'loading' })

  useEffect(() => {
    getHealth()
      .then((data) => setState({ status: 'done', data }))
      .catch((error) => setState({ status: 'failed', data: error.response?.data }))
  }, [])

  let message = 'Checking backend...'
  if (state.status === 'done') {
    message = `Backend: ${state.data.status} · Database: ${state.data.database}`
  } else if (state.status === 'failed') {
    message = state.data
      ? `Backend reachable · Database: ${state.data.database}`
      : 'Backend not reachable'
  }

  return (
    <main className="min-h-screen grid place-items-center bg-[#080A0E] text-white">
      <p className="text-xl font-semibold text-orange-500">{message}</p>
    </main>
  )
}