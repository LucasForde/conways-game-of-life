import React, { FunctionComponent } from 'react'
import { MdPlayCircle, MdStopCircle } from 'react-icons/md'
import run from '../utils/run'

const Controls: FunctionComponent = () => {
  return (
    <>
      <MdPlayCircle
        onClick={() => run.start()}
        id='run'
        className='icon'
        size={24}
      />
      <MdStopCircle
        onClick={() => run.stop()}
        id='stop'
        className='icon'
        size={24}
      />
    </>
  )
}

export default Controls
