import React, { FunctionComponent, useContext } from 'react'
import { MdPlayArrow, MdStop, MdSkipNext, MdOutlineClear } from 'react-icons/md'
import { AppContext } from '../AppContext'
import clearGrid from '../utils/clearGrid'
import run from '../utils/run'

const Controls: FunctionComponent = () => {
  const { running, setRunning } = useContext(AppContext)

  return (
    <>
      {!running ? (
        <MdPlayArrow
          onClick={() => {
            run.start()
            setRunning(true)
          }}
          className='icon'
          size={24}
        />
      ) : (
        <MdStop
          onClick={() => {
            run.stop()
            setRunning(false)
          }}
          className='icon'
          size={24}
        />
      )}
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
