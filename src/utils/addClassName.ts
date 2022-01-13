const addClassName = (ids: string[], className: string) => {
  ids.forEach(item => {
    document.getElementById(item).classList.add(className)
  })
}

export default addClassName
