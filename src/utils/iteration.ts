import { liveCells, ghostCells } from '../constants/elements'
import { getNeighbours, getAllNeighbours } from './neighbours'

const iteration = () => {
  const liveCellNeighbours = getAllNeighbours(liveCells, 'live')
  const ghostCellNeighbours = getAllNeighbours(ghostCells, 'live')
  const liveCellCleanup = []

  for (let i = 0; i < liveCellNeighbours.length; i++) {
    const cellInfo = liveCellNeighbours[i].split(',')
    const liveCellId = cellInfo[0]
    const neighbourCountInt = Number(cellInfo[1])

    liveCellCleanup.push(liveCellId)

    if (neighbourCountInt < 2 || neighbourCountInt > 3) {
      document.getElementById(liveCellId).classList.remove('live')
      document.getElementById(liveCellId).classList.add('ghost')
    }
  }

  for (let i = 0; i < ghostCellNeighbours.length; i++) {
    const cellInfo = ghostCellNeighbours[i].split(',')
    const ghostCellId = cellInfo[0]
    const neighbourCountInt = Number(cellInfo[1])

    if (neighbourCountInt === 3) {
      document.getElementById(ghostCellId).classList.remove('ghost')
      document.getElementById(ghostCellId).classList.add('live')

      liveCellCleanup.push(ghostCellId)

      const neighbours = getNeighbours(ghostCellId)

      for (let i = 0; i < neighbours.length; i++) {
        if (document.getElementById(neighbours[i]) != null && !document.getElementById(neighbours[i]).classList.contains('live')) {
          document.getElementById(neighbours[i]).classList.add('ghost')
        }
      }
    } else if (neighbourCountInt === 0) {
      document.getElementById(ghostCellId).classList.remove('ghost')
    }
  }

  const liveCellCleanupCollection = []

  for (let i = 0; i < liveCellCleanup.length; i++) {
    liveCellCleanupCollection.push(document.getElementById(liveCellCleanup[i]))
  }

  const liveCellCleanupNeighbours = getAllNeighbours(liveCellCleanupCollection, 'live')

  for (let i = 0; i < liveCellCleanupNeighbours.length; i++) {
    const cellInfo = liveCellCleanupNeighbours[i].split(',')
    const liveCellCleanupId = cellInfo[0]
    const neighbours = getNeighbours(liveCellCleanupId)

    for (let i = 0; i < neighbours.length; i++) {
      if (document.getElementById(neighbours[i]) != null && !document.getElementById(neighbours[i]).classList.contains('live')) {
        document.getElementById(neighbours[i]).classList.add('ghost')
      }
    }
  }
}

export default iteration
