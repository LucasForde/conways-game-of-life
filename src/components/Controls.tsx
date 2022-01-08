import React, { FunctionComponent, useContext } from 'react'
import { MdPlayArrow, MdStop, MdSkipNext, MdOutlineClear } from 'react-icons/md'
import { AppContext } from '../AppContext'
import clearGrid from '../utils/clearGrid'
import control from '../utils/control'

const Controls: FunctionComponent = () => {
  const { running, setRunning } = useContext(AppContext)

  return (
    <>
      {!running ? (
        <MdPlayArrow
          onClick={() => {
            control.start()
            setRunning(true)
          }}
          className='icon'
          size={24}
        />
      ) : (
        <MdStop
          onClick={() => {
            control.stop()
            setRunning(false)
          }}
          className='icon'
          size={24}
        />
      )}
      <MdSkipNext
        onClick={() => control.step()}
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
