const addClassName = (cellIds: string[], className: string) => {
  cellIds.forEach(item => {
    document.getElementById(item).classList.add(className)
  })
}

export default addClassName
