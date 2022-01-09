import { allCells } from '../constants/elements'
import clearGrid from './clearGrid'
import generation from './generation'

const randomPattern = (callBack: (arg: boolean) => void) => {
  clearGrid(callBack)

  Array.from(allCells).forEach(item => {
    if (Math.random() < 0.18) {
      item.classList.add('live')
    }
  })

  generation()
}

export default randomPattern
