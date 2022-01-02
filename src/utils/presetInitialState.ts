import addClassName from './addClassName'
import clearGrid from './clearGrid'

const presetInitialState = (preset) => {
  const { liveCellIds, ghostCellIds } = preset
  clearGrid()

  addClassName(liveCellIds, 'live')
  addClassName(ghostCellIds, 'ghost')
}

export default presetInitialState
