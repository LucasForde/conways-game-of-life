import { allCells } from '../constants/elements'
import clearGrid from './clearGrid'

const randomState = () => {
  clearGrid()

  Array.from(allCells).forEach(item => {
    const x = Math.floor(Math.random() * 4) + 1

    if (x === 4) {
      item.classList.add('live')
    }
  })
}

export default randomState
