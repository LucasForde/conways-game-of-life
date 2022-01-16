import { getNeighbourCells } from './neighbourCells'

const cellClick = (id: string) => {
  if (document.getElementById(id).classList.contains('live')) {
    document.getElementById(id).classList.add('ghost')
    document.getElementById(id).classList.remove('live')
  } else {
    document.getElementById(id).classList.add('live')
    document.getElementById(id).classList.remove('ghost')

    getNeighbourCells(id).forEach(item => {
      if (document.getElementById(item) && !document.getElementById(item).classList.contains('live')) {
        document.getElementById(item).classList.add('ghost')
      }
    })
  }
}

export default cellClick
