import { IPattern } from '../constants/types'
import addClassName from './addClassName'
import clearGrid from './clearGrid'

const presetPattern = (pattern: IPattern, callBack: (arg: boolean) => void) => {
  const { liveCellIds, ghostCellIds } = pattern

  clearGrid(callBack)
  addClassName(liveCellIds, 'live')
  addClassName(ghostCellIds, 'ghost')
}

export default presetPattern
