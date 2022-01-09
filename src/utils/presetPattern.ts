import addClassName from './addClassName'
import clearGrid from './clearGrid'

const presetPattern = (preset, callBack: (arg: boolean) => void) => {
  const { liveCellIds, ghostCellIds } = preset
  clearGrid(callBack)

  addClassName(liveCellIds, 'live')
  addClassName(ghostCellIds, 'ghost')
}

export default presetPattern
