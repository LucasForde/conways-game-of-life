import React, { FunctionComponent } from 'react'
import cellToggle from '../utils/cellToggle'

interface IProps {
  id: string
}

const Cell: FunctionComponent<IProps> = ({ id }: IProps) => {
  return <div className='cell' id={id} key={id} onClick={() => cellToggle(id)} />
}

export default Cell
