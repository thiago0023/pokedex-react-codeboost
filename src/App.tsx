import { ThemeProvider } from 'styled-components'
import Landing from './pages/Landing'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
        <div style={{minWidth: "100vw", minHeight: "100vh", backgroundColor: "#7C7C8A" }}>
          <Landing />
        </div>
    </ThemeProvider>
  )
}

export default App
