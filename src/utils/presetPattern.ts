import { IPattern } from '../constants/types'
import { setClassNames } from './handleClassNames'
import clearGrid from './clearGrid'

const presetPattern = (pattern: IPattern, callBack: (arg: boolean) => void) => {
  const { liveCellIds, ghostCellIds } = pattern

  clearGrid(callBack)

  liveCellIds.forEach(id => {
    setClassNames(id, 'live', 'add')
  })
  ghostCellIds.forEach(id => {
    setClassNames(id, 'ghost', 'add')
  })
}

export default presetPattern
