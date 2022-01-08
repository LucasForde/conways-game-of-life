import addClassName from './addClassName'
import clearGrid from './clearGrid'

const presetState = (preset, callBack: () => void) => {
  const { liveCellIds, ghostCellIds } = preset
  clearGrid(callBack)

  addClassName(liveCellIds, 'live')
  addClassName(ghostCellIds, 'ghost')
}

export default presetState
