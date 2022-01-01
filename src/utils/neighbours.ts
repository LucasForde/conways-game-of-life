export const getNeighbours = (id) => {
  const idSplit = id.split('-')
  const idSplitIntFirst = Number(idSplit[0])
  const idSplitIntSecond = Number(idSplit[1])
  const neighbours = []

  neighbours.push((idSplitIntFirst - 1) + '-' + idSplit[1])
  neighbours.push((idSplitIntFirst - 1) + '-' + (idSplitIntSecond + 1))
  neighbours.push(idSplit[0] + '-' + (idSplitIntSecond + 1))
  neighbours.push((idSplitIntFirst + 1) + '-' + (idSplitIntSecond + 1))
  neighbours.push((idSplitIntFirst + 1) + '-' + idSplit[1])
  neighbours.push((idSplitIntFirst + 1) + '-' + (idSplitIntSecond - 1))
  neighbours.push(idSplit[0] + '-' + (idSplitIntSecond - 1))
  neighbours.push((idSplitIntFirst - 1) + '-' + (idSplitIntSecond - 1))

  return neighbours
}

export const getAllNeighbours = (cells, className) => {
  const allNeighbours = []

  for (let i = 0; i < cells.length; i++) {
    const neighbours = getNeighbours(cells[i].id)

    const neighboursCount = []

    for (let i = 0; i < neighbours.length; i++) {
      if (document.getElementById(neighbours[i]) != null && document.getElementById(neighbours[i]).classList.contains(className)) {
        neighboursCount.push(i + 1)
      }
    }

    allNeighbours.push(cells[i].id + ',' + neighboursCount.length)
  }

  return allNeighbours
}
