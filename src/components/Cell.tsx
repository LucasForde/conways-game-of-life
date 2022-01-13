import React, { FunctionComponent } from 'react'
import cellClick from '../utils/cellClick'

interface IProps {
  id: string
}

const Cell: FunctionComponent<IProps> = ({ id }: IProps) => {
  return <div className='cell' id={id} key={id} onClick={() => cellClick(id)} />
}

export default Cell
