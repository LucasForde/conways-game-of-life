import React, { createContext, FunctionComponent, useState, ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

export const AppContext = createContext({
  running: undefined,
  setRunning: undefined
})

export const AppProvider: FunctionComponent = (props: IProps) => {
  const [running, setRunning] = useState<boolean>(false)

  return (
    <AppContext.Provider value={{
      running,
      setRunning
    }}>
      {props.children}
    </AppContext.Provider>
  )
}
