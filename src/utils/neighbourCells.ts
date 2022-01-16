import { cellIsLive } from './handleClassNames'

export const getNeighbourCells = (id: string) => {
  const idSplit = id.split('-')
  const thisRow = Number(idSplit[0])
  const thisCol = Number(idSplit[1])
  const prevRow = thisRow - 1
  const nextRow = thisRow + 1
  const prevCol = thisCol - 1
  const nextCol = thisCol + 1

  return [
    `${prevRow}-${prevCol}`,
    `${prevRow}-${thisCol}`,
    `${prevRow}-${nextCol}`,
    `${thisRow}-${prevCol}`,
    `${thisRow}-${nextCol}`,
    `${nextRow}-${prevCol}`,
    `${nextRow}-${thisCol}`,
    `${nextRow}-${nextCol}`
  ]
}

export const getAllNeighbourCells = (cells: any[]) => {
  return cells.map(item => {
    let liveNeighbourCount = 0

    getNeighbourCells(item.id).forEach(id => {
      if (cellIsLive(id)) {
        liveNeighbourCount++
      }
    })

    return {
      id: item.id,
      liveNeighbourCount
    }
  })
}
