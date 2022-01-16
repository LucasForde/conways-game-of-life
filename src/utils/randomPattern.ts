import { allCells } from '../constants/elements'
import clearGrid from './clearGrid'
import generation from './generation'
import handleClassNames from './handleClassNames'

const randomPattern = (callBack: (arg: boolean) => void) => {
  clearGrid(callBack)

  Array.from(allCells).forEach(item => {
    handleClassNames(item.id, 'ghost', 'add')
    if (Math.random() < 0.18) {
      handleClassNames(item.id, 'live', 'toggle')
    }
  })

  generation()
}

export default randomPattern
