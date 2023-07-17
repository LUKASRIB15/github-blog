import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Repository } from './pages/Repository'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/repository/:id" element={<Repository />} />
      </Route>
    </Routes>
  )
}
