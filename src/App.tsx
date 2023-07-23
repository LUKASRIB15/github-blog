import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/defaultTheme'
import { GlobalStyle } from './styles/global.styled'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { BlogContextProvider } from './contexts/BlogContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BlogContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </BlogContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
