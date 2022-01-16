export const handleClassNames = (id: string, className: 'live' | 'ghost', action: 'add' | 'remove' | 'toggle') => {
  if (action === 'add') {
    document.getElementById(id).classList.add(className)
  } else if (action === 'remove') {
    document.getElementById(id).classList.remove(className)
  } else if (action === 'toggle') {
    document.getElementById(id).classList.remove(className === 'live' ? 'ghost' : 'live')
    document.getElementById(id).classList.add(className === 'live' ? 'live' : 'ghost')
  }
}
