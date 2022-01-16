import { allCells } from '../constants/elements'
import clearGrid from './clearGrid'
import generation from './generation'
import { setClassNames } from './handleClassNames'

const randomPattern = (callBack: (arg: boolean) => void) => {
  clearGrid(callBack)

  Array.from(allCells).forEach(item => {
    setClassNames(item.id, 'ghost', 'add')
    if (Math.random() < 0.18) {
      setClassNames(item.id, 'live', 'toggle')
    }
  })

  generation()
}

export default randomPattern
