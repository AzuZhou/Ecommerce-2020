import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Switch, Route } from 'react-router-dom'

/* Components */
import Home from 'pages/Home'

function App() {
  const GlobalStyle = createGlobalStyle`
    a {
      text-decoration: none;
    }

    button {
      cursor: pointer;
    }
  `

  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        <Route exact path={'/'} component={Home} />
      </Switch>
    </div>
  )
}

export default App
