import React, { FunctionComponent, useContext } from 'react'
import { AppContext } from '../AppContext'
import control from '../utils/control'

const GridOverlay: FunctionComponent = () => {
  const { running, setRunning } = useContext(AppContext)

  return (
    <>
      {running && (
        <div
          className='grid-overlay'
          onClick={() => control.stop(setRunning)}
        />
      )}
    </>
  )
}

export default GridOverlay
