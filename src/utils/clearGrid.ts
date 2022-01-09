import { allCells } from '../constants/elements'
import control from './control'

const clearGrid = (callBack: (arg: boolean) => void) => {
  control.stop(callBack)

  Array.from(allCells).forEach(item => {
    item.classList.remove('live', 'ghost')
  })
}

export default clearGrid
