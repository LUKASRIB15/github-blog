import { ThemeProvider } from "styled-components";
import {BrowserRouter} from "react-router-dom"
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./Router";
import { BlogContextProvider } from "./contexts/BlogContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <BlogContextProvider>
        <Router/>
      </BlogContextProvider>
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

