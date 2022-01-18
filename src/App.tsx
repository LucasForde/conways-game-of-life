import React, { FunctionComponent } from 'react'
import { AppProvider } from './AppContext'
import Header from './components/Header'
import GridOverlay from './components/GridOverlay'
import Grid from './components/Grid'

const App: FunctionComponent = () => {
  return (
    <AppProvider>
      <Header />
      <GridOverlay />
      <Grid />
    </AppProvider>
  )
}

export default App
