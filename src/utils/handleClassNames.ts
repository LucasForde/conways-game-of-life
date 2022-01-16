export const setClassNames = (id: string, className: 'live' | 'ghost', action: 'add' | 'remove' | 'toggle') => {
  const cell = document.getElementById(id)
  if (cell && action === 'add') {
    cell.classList.add(className)
  } else if (cell && action === 'remove') {
    cell.classList.remove(className)
  } else if (cell && action === 'toggle') {
    cell.classList.remove(className === 'live' ? 'ghost' : 'live')
    cell.classList.add(className === 'live' ? 'live' : 'ghost')
  }
}

export const cellIsLive = (id: string) => {
  const cell = document.getElementById(id)
  return cell && cell.classList.contains('live')
}
