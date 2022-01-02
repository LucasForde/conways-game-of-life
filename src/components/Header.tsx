import React, { FunctionComponent } from 'react'
import { MdInfo } from 'react-icons/md'
import * as presets from '../constants/presets'
import run from '../utils/run'
import randomState from '../utils/randomState'
import presetState from '../utils/presetState'
import clearGrid from '../utils/clearGrid'
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
        <div onClick={() => run.step()}>Next Generation</div>
        <div onClick={() => clearGrid()}>Clear Grid</div>
      </nav>

      <a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life" target='blank'>
        <MdInfo
          className='icon'
          size={24}
        />
      </a>
    </header>
  )
}

export default Header
