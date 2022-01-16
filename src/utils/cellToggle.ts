import { setClassNames, cellIsLive } from './handleClassNames'
import { getNeighbourCells } from './neighbourCells'

const cellToggle = (id: string) => {
  if (cellIsLive(id)) {
    setClassNames(id, 'ghost', 'toggle')
  } else {
    setClassNames(id, 'live', 'toggle')

    getNeighbourCells(id).forEach(item => {
      if (!cellIsLive(item)) {
        setClassNames(item, 'ghost', 'add')
      }
    })
  }
}

export default cellToggle
