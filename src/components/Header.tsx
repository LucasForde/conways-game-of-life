import React, { FunctionComponent, useContext } from 'react'
import { MdInfoOutline } from 'react-icons/md'
import { AppContext } from '../AppContext'
import * as patterns from '../constants/patterns'
import randomPattern from '../utils/randomPattern'
import presetPattern from '../utils/presetPattern'
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

        <div className='patterns'>
          <div onClick={() => randomPattern(setRunning)}>Random State</div>
          <div onClick={() => presetPattern(patterns.glidersSpaceships, setRunning)}>Gliders &amp; Spaceships</div>
          <div onClick={() => presetPattern(patterns.gliderGuns, setRunning)}>Glider Guns</div>
          <div onClick={() => presetPattern(patterns.oscillator, setRunning)}>Oscillator</div>
          <div onClick={() => presetPattern(patterns.rPentomino, setRunning)}>R-Pentomino</div>
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
