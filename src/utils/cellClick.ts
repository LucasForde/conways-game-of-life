import { getNeighbourCells } from './neighbourCells'

const cellClick = (id) => {
  if (document.getElementById(id).classList.contains('live')) {
    document.getElementById(id).classList.add('ghost')
    document.getElementById(id).classList.remove('live')
  } else {
    document.getElementById(id).classList.add('live')
    document.getElementById(id).classList.remove('ghost')

    const neighbourCells = getNeighbourCells(id)

    for (let i = 0; i < neighbourCells.length; i++) {
      if (document.getElementById(neighbourCells[i]) != null && !document.getElementById(neighbourCells[i]).classList.contains('live')) {
        document.getElementById(neighbourCells[i]).classList.add('ghost')
      }
    }
  }
}

export default cellClick
