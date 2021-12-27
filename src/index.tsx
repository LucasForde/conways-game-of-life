import React from 'react'
import ReactDom from 'react-dom'
import MainComponent from './components/MainComponent'
import './styles/app.scss'

const App = () => {
  return (
    <MainComponent />
  )
}

ReactDom.render(<App />, document.getElementById('root'))
