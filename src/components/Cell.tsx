import React, { FunctionComponent } from 'react'
import cellClick from '../utils/cellClick'

interface CellProps {
  cellId: string
}

const Cell: FunctionComponent<CellProps> = ({ cellId }: CellProps) => {
  return <div className='cell' id={cellId} key={cellId} onClick={() => cellClick(cellId)} />
}

export default Cell
