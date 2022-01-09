import React, { FunctionComponent } from 'react'
import Cell from './Cell'

const Grid: FunctionComponent = () => {
  const createGrid = () => {
    const gridSize = 100
    const cells = []

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const cellId = `${i}-${j}`

        cells.push(<Cell key={cellId} cellId={cellId} />)
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
