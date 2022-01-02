export const getNeighbourCells = (id) => {
  const idSplit = id.split('-')
  const idSplitIntFirst = Number(idSplit[0])
  const idSplitIntSecond = Number(idSplit[1])
  const neighbourCells = []

  neighbourCells.push((idSplitIntFirst - 1) + '-' + idSplit[1])
  neighbourCells.push((idSplitIntFirst - 1) + '-' + (idSplitIntSecond + 1))
  neighbourCells.push(idSplit[0] + '-' + (idSplitIntSecond + 1))
  neighbourCells.push((idSplitIntFirst + 1) + '-' + (idSplitIntSecond + 1))
  neighbourCells.push((idSplitIntFirst + 1) + '-' + idSplit[1])
  neighbourCells.push((idSplitIntFirst + 1) + '-' + (idSplitIntSecond - 1))
  neighbourCells.push(idSplit[0] + '-' + (idSplitIntSecond - 1))
  neighbourCells.push((idSplitIntFirst - 1) + '-' + (idSplitIntSecond - 1))

  return neighbourCells
}

export const getAllNeighbourCells = (cells, className) => {
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
