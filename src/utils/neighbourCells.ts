export const getNeighbourCells = (id: string) => {
  const idSplit = id.split('-')
  const row = Number(idSplit[0])
  const col = Number(idSplit[1])
  const neighbourCells = []

  neighbourCells.push((row - 1) + '-' + col)
  neighbourCells.push((row - 1) + '-' + (col + 1))
  neighbourCells.push(row + '-' + (col + 1))
  neighbourCells.push((row + 1) + '-' + (col + 1))
  neighbourCells.push((row + 1) + '-' + col)
  neighbourCells.push((row + 1) + '-' + (col - 1))
  neighbourCells.push(row + '-' + (col - 1))
  neighbourCells.push((row - 1) + '-' + (col - 1))

  return neighbourCells
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
