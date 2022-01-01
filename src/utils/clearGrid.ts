import { allCells } from '../constants/elements'
import run from './run'

const clearGrid = () => {
  run.stop()

  Array.from(allCells).forEach(item => {
    item.classList.remove('live', 'ghost')
  })
}

export default clearGrid
