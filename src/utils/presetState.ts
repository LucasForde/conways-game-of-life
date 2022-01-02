import addClassName from './addClassName'
import clearGrid from './clearGrid'

const presetState = (preset) => {
  const { liveCellIds, ghostCellIds } = preset
  clearGrid()

  addClassName(liveCellIds, 'live')
  addClassName(ghostCellIds, 'ghost')
}

export default presetState
