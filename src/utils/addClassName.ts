const addClassName = (cellIds, className) => {
  cellIds.forEach(item => {
    document.getElementById(item).classList.add(className)
  })
}

export default addClassName
