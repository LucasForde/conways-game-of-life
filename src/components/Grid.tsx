import React, { FunctionComponent, useState } from 'react'
import cellToggle from '../utils/cellToggle'
import Cell from './Cell'

const Grid: FunctionComponent = () => {
  const [mouseDown, setMouseDown] = useState<boolean>(false)

  const onCellToggle = (id: string, event: 'down' | 'over') => {
    if (mouseDown || event === 'down') {
      cellToggle(id)
    }
  }

  const createGrid = () => {
    const gridSize = 100
    const cells = []

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const id = `${i}-${j}`

        cells.push(<Cell key={id} id={id} onCellToggle={(id, event) => onCellToggle(id, event)} />)
      }
    }

    return cells
  }

  return (
    <div
      className='grid'
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
      onMouseLeave={() => setMouseDown(false)}
    >
      {createGrid()}
    </div>
  )
}

export default Grid
