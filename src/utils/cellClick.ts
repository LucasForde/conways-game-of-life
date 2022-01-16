import { setClassNames } from './handleClassNames'
import { getNeighbourCells } from './neighbourCells'

const cellClick = (id: string) => {
  if (document.getElementById(id).classList.contains('live')) {
    setClassNames(id, 'ghost', 'toggle')
  } else {
    setClassNames(id, 'live', 'toggle')

    getNeighbourCells(id).forEach(item => {
      if (document.getElementById(item) && !document.getElementById(item).classList.contains('live')) {
        setClassNames(item, 'ghost', 'add')
      }
    })
  }
}

export default cellClick
