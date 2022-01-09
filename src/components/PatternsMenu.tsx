import React, { FunctionComponent } from 'react'
import { ControlProps } from '../constants/types'
import * as patterns from '../constants/patterns'
import randomPattern from '../utils/randomPattern'
import presetPattern from '../utils/presetPattern'

const PatternsMenu: FunctionComponent<ControlProps> = ({ setRunning }: ControlProps) => {
  return (
    <div className='patterns'>
      <div onClick={() => randomPattern(setRunning)}>Random State</div>
      <div onClick={() => presetPattern(patterns.glidersSpaceships, setRunning)}>Gliders &amp; Spaceships</div>
      <div onClick={() => presetPattern(patterns.gliderGuns, setRunning)}>Glider Guns</div>
      <div onClick={() => presetPattern(patterns.oscillator, setRunning)}>Oscillator</div>
      <div onClick={() => presetPattern(patterns.rPentomino, setRunning)}>R-Pentomino</div>
    </div>
  )
}

export default PatternsMenu
