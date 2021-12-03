import React from 'react'
import ReactDom from 'react-dom'
import TempComponent from './components/TempComponent'
import './styles/app.scss'

const App = () => {
  return (
    <TempComponent />
  )
}

ReactDom.render(<App />, document.getElementById('root'))
