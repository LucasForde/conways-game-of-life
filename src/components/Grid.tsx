import React, { FunctionComponent } from 'react'
import cellClick from '../utils/cellClick'

const Grid: FunctionComponent = () => {
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
    <div className='grid'>
      {createGrid()}
    </div>
  )
}

export default Grid
