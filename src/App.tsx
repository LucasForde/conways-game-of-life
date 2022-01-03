import React, { FunctionComponent } from 'react'
import { AppProvider } from './AppContext'
import Header from './components/Header'
import Grid from './components/Grid'

const App: FunctionComponent = () => {
  return (
    <AppProvider>
      <Header />
      <Grid />
    </AppProvider>
  )
}

export default App
