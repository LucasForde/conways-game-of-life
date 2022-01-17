import React, { FunctionComponent } from 'react'

interface IProps {
  id: string
  onCellToggle: (id: string, event: 'down' | 'over') => void
}

const Cell: FunctionComponent<IProps> = ({ id, onCellToggle }: IProps) => {
  return (
    <div
      className='cell'
      id={id}
      onMouseDown={() => onCellToggle(id, 'down')}
      onMouseOver={() => onCellToggle(id, 'over')}
    />
  )
}

export default Cell
