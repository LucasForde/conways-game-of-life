import { IPattern } from '../constants/types'
import { handleClassNames } from './handleClassNames'
import clearGrid from './clearGrid'

const presetPattern = (pattern: IPattern, callBack: (arg: boolean) => void) => {
  const { liveCellIds, ghostCellIds } = pattern

  clearGrid(callBack)

  liveCellIds.forEach(id => {
    handleClassNames(id, 'live', 'add')
  })
  ghostCellIds.forEach(id => {
    handleClassNames(id, 'ghost', 'add')
  })
}

export default presetPattern
