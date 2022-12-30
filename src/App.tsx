import { ThemeProvider } from 'styled-components'
import Landing from './pages/Landing'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Landing />
    </ThemeProvider>
  )
}

export default App
