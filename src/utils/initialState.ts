import addClassName from './addClassName'
import clearGrid from './clearGrid'

const initialState = (initialState, callBack: () => void) => {
  const { liveCellIds, ghostCellIds } = initialState
  clearGrid(callBack)

  addClassName(liveCellIds, 'live')
  addClassName(ghostCellIds, 'ghost')
}

export default initialState
