import React from 'react'
import { createGlobalStyle } from 'styled-components'

/* Components */
import Home from 'pages/Home'

function App() {
  const GlobalStyle = createGlobalStyle`
    a {
      text-decoration: nono;
    }
  `

  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  )
}

export default App
