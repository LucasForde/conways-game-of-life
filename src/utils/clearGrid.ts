import { allCells } from '../constants/elements'
import control from './control'

const clearGrid = () => {
  control.stop()

  Array.from(allCells).forEach(item => {
    item.classList.remove('live', 'ghost')
  })
}

export default clearGrid
