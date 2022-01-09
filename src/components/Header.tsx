import React, { FunctionComponent, useContext } from 'react'
import { MdInfoOutline } from 'react-icons/md'
import { AppContext } from '../AppContext'
import Controls from './Controls'
import PatternsMenu from './PatternsMenu'

const Header: FunctionComponent = () => {
  const { running, setRunning } = useContext(AppContext)

  return (
    <div className='header'>
      <div className='header-left'>
        <Controls running={running} setRunning={setRunning} />
        <PatternsMenu setRunning={setRunning} />
      </div>

      <a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life" target='blank'>
        <MdInfoOutline className='icon' size={24} />
      </a>
    </div>
  )
}

export default Header
