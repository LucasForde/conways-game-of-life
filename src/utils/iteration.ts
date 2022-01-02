import { liveCells, ghostCells } from '../constants/elements'
import { getNeighbourCells, getAllNeighbourCells } from './neighbourCells'

const iteration = () => {
  const liveNeighbourCells = getAllNeighbourCells(liveCells, 'live')
  const ghostNeighbourCells = getAllNeighbourCells(ghostCells, 'live')
  const cleanup = []

  for (let i = 0; i < liveNeighbourCells.length; i++) {
    const cellInfo = liveNeighbourCells[i].split(',')
    const liveCellId = cellInfo[0]
    const neighbourCellCount = Number(cellInfo[1])

    cleanup.push(liveCellId)

    if (neighbourCellCount < 2 || neighbourCellCount > 3) {
      document.getElementById(liveCellId).classList.remove('live')
      document.getElementById(liveCellId).classList.add('ghost')
    }
  }

  for (let i = 0; i < ghostNeighbourCells.length; i++) {
    const cellInfo = ghostNeighbourCells[i].split(',')
    const ghostCellId = cellInfo[0]
    const neighbourCellCount = Number(cellInfo[1])

    if (neighbourCellCount === 3) {
      document.getElementById(ghostCellId).classList.remove('ghost')
      document.getElementById(ghostCellId).classList.add('live')

      cleanup.push(ghostCellId)

      const neighbourCells = getNeighbourCells(ghostCellId)

      for (let i = 0; i < neighbourCells.length; i++) {
        if (document.getElementById(neighbourCells[i]) != null && !document.getElementById(neighbourCells[i]).classList.contains('live')) {
          document.getElementById(neighbourCells[i]).classList.add('ghost')
        }
      }
    } else if (neighbourCellCount === 0) {
      document.getElementById(ghostCellId).classList.remove('ghost')
    }
  }

  const cleanupCollection = []

  for (let i = 0; i < cleanup.length; i++) {
    cleanupCollection.push(document.getElementById(cleanup[i]))
  }

  const cleanupNeighbourCells = getAllNeighbourCells(cleanupCollection, 'live')

  for (let i = 0; i < cleanupNeighbourCells.length; i++) {
    const cellInfo = cleanupNeighbourCells[i].split(',')
    const cleanupId = cellInfo[0]
    const neighbourCells = getNeighbourCells(cleanupId)

    for (let i = 0; i < neighbourCells.length; i++) {
      if (document.getElementById(neighbourCells[i]) != null && !document.getElementById(neighbourCells[i]).classList.contains('live')) {
        document.getElementById(neighbourCells[i]).classList.add('ghost')
      }
    }
  }
}

export default iteration
