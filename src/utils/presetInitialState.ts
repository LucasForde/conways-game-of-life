import { addClassNames } from './helpers'
import clearGrid from './clearGrid'

const presetInitialState = (preset) => {
  const { liveCellIds, ghostCellIds } = preset
  clearGrid()

  addClassNames(liveCellIds, 'live')
  addClassNames(ghostCellIds, 'ghost')
}

export default presetInitialState
