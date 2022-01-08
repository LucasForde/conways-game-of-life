import React, { FunctionComponent, useContext } from 'react'
import { MdInfoOutline } from 'react-icons/md'
import { AppContext } from '../AppContext'
import * as presets from '../constants/presets'
import randomState from '../utils/randomState'
import presetState from '../utils/presetState'
import Controls from './Controls'

const Header: FunctionComponent = () => {
  const { running, setRunning } = useContext(AppContext)

  return (
    <header>
      <Controls
        running={running}
        setRunning={setRunning}
      />

      <nav>
        <div onClick={() => randomState(setRunning)}>Random State</div>
        <div onClick={() => presetState(presets.glidersSpaceships, setRunning)}>Gliders &amp; Spaceships</div>
        <div onClick={() => presetState(presets.gliderGuns, setRunning)}>Glider Guns</div>
        <div onClick={() => presetState(presets.oscillator, setRunning)}>Oscillator</div>
        <div onClick={() => presetState(presets.rPentomino, setRunning)}>R-Pentomino</div>
      </nav>

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
