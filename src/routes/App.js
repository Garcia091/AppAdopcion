import React from "react"
import theme from '../styles/theme'

import { ChakraProvider } from "@chakra-ui/react"
import AdopcionHome from '../continer/AdopcionHome'
import {BrowserRouter as Router,
        Route,
        Switch
} from 'react-router-dom'

function App() {

  return (
    <ChakraProvider theme={theme}>
      <Router>
          <Switch>
                <Route exact path="/" component={AdopcionHome}/>
          </Switch>
      </Router>
    </ChakraProvider>
  )
}
export default App