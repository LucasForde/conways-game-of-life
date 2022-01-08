import { allCells } from '../constants/elements'
import clearGrid from './clearGrid'
import generation from './generation'

const randomState = (callBack: () => void) => {
  clearGrid(callBack)

  Array.from(allCells).forEach(item => {
    if (Math.random() < 0.18) {
      item.classList.add('live')
    }
  })

  generation()
}

export default randomState
