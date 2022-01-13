import React, { FunctionComponent } from 'react'
import Cell from './Cell'

const Grid: FunctionComponent = () => {
  const createGrid = () => {
    const gridSize = 100
    const cells = []

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const id = `${i}-${j}`

        cells.push(<Cell key={id} id={id} />)
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
