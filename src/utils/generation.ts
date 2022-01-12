import { liveCells, ghostCells } from '../constants/elements'
import { getNeighbourCells, getAllNeighbourCells } from './neighbourCells'

const generation = () => {
  const liveNeighbourCells = getAllNeighbourCells(Array.from(liveCells), 'live')
  const ghostNeighbourCells = getAllNeighbourCells(Array.from(ghostCells), 'live')
  const cleanup = []

  for (let i = 0; i < liveNeighbourCells.length; i++) {
    const liveCellId = liveNeighbourCells[i].cellId
    const neighbourCount = liveNeighbourCells[i].neighbourCount

    cleanup.push(liveCellId)

    if (neighbourCount < 2 || neighbourCount > 3) {
      document.getElementById(liveCellId).classList.remove('live')
      document.getElementById(liveCellId).classList.add('ghost')
    }
  }

  for (let i = 0; i < ghostNeighbourCells.length; i++) {
    const ghostCellId = ghostNeighbourCells[i].cellId
    const neighbourCount = ghostNeighbourCells[i].neighbourCount

    if (neighbourCount === 3) {
      document.getElementById(ghostCellId).classList.remove('ghost')
      document.getElementById(ghostCellId).classList.add('live')

      cleanup.push(ghostCellId)

      const neighbourCells = getNeighbourCells(ghostCellId)

      for (let i = 0; i < neighbourCells.length; i++) {
        if (document.getElementById(neighbourCells[i]) != null && !document.getElementById(neighbourCells[i]).classList.contains('live')) {
          document.getElementById(neighbourCells[i]).classList.add('ghost')
        }
      }
    } else if (neighbourCount === 0) {
      document.getElementById(ghostCellId).classList.remove('ghost')
    }
  }

  const cleanupCollection = []

  for (let i = 0; i < cleanup.length; i++) {
    cleanupCollection.push(document.getElementById(cleanup[i]))
  }

  const cleanupNeighbourCells = getAllNeighbourCells(cleanupCollection, 'live')

  for (let i = 0; i < cleanupNeighbourCells.length; i++) {
    const cleanupId = cleanupNeighbourCells[i].cellId
    const neighbourCells = getNeighbourCells(cleanupId)

    for (let i = 0; i < neighbourCells.length; i++) {
      if (document.getElementById(neighbourCells[i]) != null && !document.getElementById(neighbourCells[i]).classList.contains('live')) {
        document.getElementById(neighbourCells[i]).classList.add('ghost')
      }
    }
  }
}

export default generation
