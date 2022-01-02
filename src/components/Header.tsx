import React, { FunctionComponent } from 'react'
import { MdInfoOutline } from 'react-icons/md'
import * as presets from '../constants/presets'
import randomState from '../utils/randomState'
import presetState from '../utils/presetState'
import Controls from './Controls'

const Header: FunctionComponent = () => {
  return (
    <header>
      <Controls />

      <nav>
        <div onClick={() => randomState()}>Random State</div>
        <div onClick={() => presetState(presets.glidersSpaceships)}>Gliders &amp; Spaceships</div>
        <div onClick={() => presetState(presets.gliderGuns)}>Glider Guns</div>
        <div onClick={() => presetState(presets.oscillator)}>Oscillator</div>
        <div onClick={() => presetState(presets.rPentomino)}>R-Pentomino</div>
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
