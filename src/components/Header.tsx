import React, { FunctionComponent, useContext } from 'react'
import { MdInfoOutline } from 'react-icons/md'
import { AppContext } from '../AppContext'
import * as initialStates from '../constants/initialStates'
import randomState from '../utils/randomState'
import initialState from '../utils/initialState'
import Controls from './Controls'

const Header: FunctionComponent = () => {
  const { running, setRunning } = useContext(AppContext)

  return (
    <header>
      <div className='header-left'>
        <Controls
          running={running}
          setRunning={setRunning}
        />

        <div className='initialStates'>
          <div onClick={() => randomState(setRunning)}>Random State</div>
          <div onClick={() => initialState(initialStates.glidersSpaceships, setRunning)}>Gliders &amp; Spaceships</div>
          <div onClick={() => initialState(initialStates.gliderGuns, setRunning)}>Glider Guns</div>
          <div onClick={() => initialState(initialStates.oscillator, setRunning)}>Oscillator</div>
          <div onClick={() => initialState(initialStates.rPentomino, setRunning)}>R-Pentomino</div>
        </div>
      </div>

      <a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life" target='blank'>
        <MdInfoOutline
          className='icon'
          size={24}
        />
      </a>
    </header>
  )
}

export default Header
