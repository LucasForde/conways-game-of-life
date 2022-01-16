import { liveCells, ghostCells } from '../constants/elements'
import { getNeighbourCells, getAllNeighbourCells } from './neighbourCells'
import handleClassNames from './handleClassNames'

const generation = () => {
  const liveNeighbourCells = getAllNeighbourCells(Array.from(liveCells))
  const ghostNeighbourCells = getAllNeighbourCells(Array.from(ghostCells))
  const missingGhostCells = []

  liveNeighbourCells.forEach(item => {
    if (item.liveNeighbourCount < 2 || item.liveNeighbourCount > 3) {
      handleClassNames(item.id, 'ghost', 'toggle')
    }
  })

  ghostNeighbourCells.forEach(item => {
    if (item.liveNeighbourCount === 3) {
      handleClassNames(item.id, 'live', 'toggle')
      missingGhostCells.push(document.getElementById(item.id))
    } else if (item.liveNeighbourCount === 0) {
      handleClassNames(item.id, 'ghost', 'remove')
    }
  })

  getAllNeighbourCells(missingGhostCells).forEach(item => {
    getNeighbourCells(item.id).forEach(id => {
      if (document.getElementById(id) && !document.getElementById(id).classList.contains('live')) {
        handleClassNames(id, 'ghost', 'add')
      }
    })
  })
}

export default generation
