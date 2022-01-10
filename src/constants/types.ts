export interface IControlProps {
  running?: boolean
  setRunning?: () => void
}

export interface IPattern {
  liveCellIds: string[]
  ghostCellIds: string[]
}
