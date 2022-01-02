import React, { FunctionComponent } from 'react'
import { getNeighbourCells } from './utils/neighbourCells'
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

      const neighbourCells = getNeighbourCells(id)

      for (let i = 0; i < neighbourCells.length; i++) {
        if (document.getElementById(neighbourCells[i]) != null && !document.getElementById(neighbourCells[i]).classList.contains('live')) {
          document.getElementById(neighbourCells[i]).classList.add('ghost')
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
