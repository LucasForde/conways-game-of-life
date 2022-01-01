import React, { FunctionComponent } from 'react'
import { getNeighbours } from './utils/neighbours'
import run from './utils/run'
import Header from './components/Header'

const App: FunctionComponent = () => {
  const cellClick = (id) => {
    run.stop()

    if (document.getElementById(id).classList.contains('live')) {
      document.getElementById(id).classList.add('ghost')
      document.getElementById(id).classList.remove('live')
    } else {
      document.getElementById(id).classList.add('live')
      document.getElementById(id).classList.remove('ghost')

      const neighbours = getNeighbours(id)

      for (let i = 0; i < neighbours.length; i++) {
        if (document.getElementById(neighbours[i]) != null && !document.getElementById(neighbours[i]).classList.contains('live')) {
          document.getElementById(neighbours[i]).classList.add('ghost')
        }
      }
    }
  }

  const createGrid = () => {
    const gridSize = 100
    let cells = []

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const cellId = `${i}-${j}`

        cells = [...cells, <div className='cell' id={cellId} key={cellId} onClick={() => cellClick(cellId)} />]
      }
    }

    return cells
  }

  return (
    <>
      <Header />

      <div className='grid'>
        {createGrid()}
      </div>
    </>
  )
}

export default App
