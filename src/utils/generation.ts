import { liveCells, ghostCells } from '../constants/elements'
import { getNeighbourCells, getAllNeighbourCells } from './neighbourCells'

const generation = () => {
  const liveNeighbourCells = getAllNeighbourCells(Array.from(liveCells))
  const ghostNeighbourCells = getAllNeighbourCells(Array.from(ghostCells))
  const cleanup = []

  liveNeighbourCells.forEach(item => {
    cleanup.push(item.id)

    if (item.liveNeighbourCount < 2 || item.liveNeighbourCount > 3) {
      document.getElementById(item.id).classList.remove('live')
      document.getElementById(item.id).classList.add('ghost')
    }
  })

  ghostNeighbourCells.forEach(item => {
    if (item.liveNeighbourCount === 3) {
      document.getElementById(item.id).classList.remove('ghost')
      document.getElementById(item.id).classList.add('live')

      cleanup.push(item.id)

      getNeighbourCells(item.id).forEach(id => {
        if (document.getElementById(id) && !document.getElementById(id).classList.contains('live')) {
          document.getElementById(id).classList.add('ghost')
        }
      })
    } else if (item.liveNeighbourCount === 0) {
      document.getElementById(item.id).classList.remove('ghost')
    }
  })

  const cleanupCollection = []

  cleanup.forEach(id => {
    cleanupCollection.push(document.getElementById(id))
  })

  getAllNeighbourCells(cleanupCollection).forEach(item => {
    getNeighbourCells(item.id).forEach(id => {
      if (document.getElementById(id) && !document.getElementById(id).classList.contains('live')) {
        document.getElementById(id).classList.add('ghost')
      }
    })
  })
}

export default generation
