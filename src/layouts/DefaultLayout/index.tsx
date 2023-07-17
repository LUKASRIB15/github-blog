import { HeaderLayout } from './styles'
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <HeaderLayout>
      <Outlet />
    </HeaderLayout>
  )
}
