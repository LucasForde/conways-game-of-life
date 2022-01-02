import React, { FunctionComponent } from 'react'
import { MdPlayArrow, MdStop, MdSkipNext, MdOutlineClear } from 'react-icons/md'
import clearGrid from '../utils/clearGrid'
import run from '../utils/run'

const Controls: FunctionComponent = () => {
  return (
    <>
      <MdPlayArrow
        onClick={() => run.start()}
        className='icon'
        size={24}
      />
      <MdStop
        onClick={() => run.stop()}
        className='icon'
        size={24}
      />
      <MdSkipNext
        onClick={() => run.step()}
        className='icon'
        size={24}
      />
      <MdOutlineClear
        onClick={() => clearGrid()}
        className='icon'
        size={24}
      />
    </>
  )
}

export default Controls
