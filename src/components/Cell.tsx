import React, { FunctionComponent } from 'react'
import cellClick from '../utils/cellClick'

interface CellProps {
  id: string
}

const Cell: FunctionComponent<CellProps> = ({ id }: CellProps) => {
  return <div className='cell' id={id} key={id} onClick={() => cellClick(id)} />
}

export default Cell
