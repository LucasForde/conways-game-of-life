import React, { FunctionComponent } from 'react'
import { MdPlayArrow, MdStop, MdSkipNext, MdOutlineClear } from 'react-icons/md'
import { IControlProps } from '../constants/types'
import clearGrid from '../utils/clearGrid'
import control from '../utils/control'

const Controls: FunctionComponent<IControlProps> = ({ running, setRunning }: IControlProps) => {
  return (
    <>
      {!running ? (
        <MdPlayArrow
          onClick={() => control.start(setRunning)}
          className='icon'
          size={24}
        />
      ) : (
        <MdStop
          onClick={() => control.stop(setRunning)}
          className='icon'
          size={24}
        />
      )}
      <MdSkipNext
        onClick={() => control.step(setRunning)}
        className='icon'
        size={24}
      />
      <MdOutlineClear
        onClick={() => clearGrid(setRunning)}
        className='icon'
        size={24}
      />
    </>
  )
}

export default Controls
