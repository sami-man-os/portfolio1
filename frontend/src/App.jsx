import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import PublicPage from './pages/PublicPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}