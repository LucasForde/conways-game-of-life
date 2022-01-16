import { setClassNames } from './handleClassNames'
import { getNeighbourCells } from './neighbourCells'

const cellClick = (id: string) => {
  if (document.getElementById(id).classList.contains('live')) {
    handleClassNames(id, 'ghost', 'toggle')
  } else {
    handleClassNames(id, 'live', 'toggle')

    getNeighbourCells(id).forEach(item => {
      if (document.getElementById(item) && !document.getElementById(item).classList.contains('live')) {
        handleClassNames(item, 'ghost', 'add')
      }
    })
  }
}

export default cellClick
