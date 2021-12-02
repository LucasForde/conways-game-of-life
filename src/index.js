import React from 'react'
import ReactDom from 'react-dom'
import './styles/app.scss'

const App = () => {
  return (
    <main>
      <h1>Hello World!</h1>
      <p>This is a React boilerplate</p>
    </main>
  )
}

ReactDom.render(<App />, document.getElementById('root'))
