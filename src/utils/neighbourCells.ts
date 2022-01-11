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

export const getAllNeighbourCells = (cells: HTMLElement[], className: string) => {
  const allNeighbourCells = []

  for (let i = 0; i < cells.length; i++) {
    const neighbourCells = getNeighbourCells(cells[i].id)

    const neighbourCellsCount = []

    for (let i = 0; i < neighbourCells.length; i++) {
      if (document.getElementById(neighbourCells[i]) != null && document.getElementById(neighbourCells[i]).classList.contains(className)) {
        neighbourCellsCount.push(i + 1)
      }
    }

    allNeighbourCells.push(cells[i].id + ',' + neighbourCellsCount.length)
  }

  return allNeighbourCells
}
