export const addClassNames = (cellIds, className) => {
  cellIds.forEach(item => {
    document.getElementById(item).classList.add(className)
  })
}
