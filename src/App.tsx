import React, { FunctionComponent } from 'react'
import { MdInfo, MdPlayCircle, MdStopCircle } from 'react-icons/md'
import * as presets from './constants/presets'

const App: FunctionComponent = () => {
  const cellCollection = document.getElementsByClassName('cell')
  const liveCellCollection = document.getElementsByClassName('live')
  const ghostCellCollection = document.getElementsByClassName('ghost')
  const speed = 25

  const run = {
    start: function () {
      this.interval = setInterval(iteration, speed)
    },
    stop: function () {
      clearInterval(this.interval)
    }
  }

  const iteration = () => {
    const liveCellNeighbours = getNeighboursOfCollection(liveCellCollection, 'live')
    const ghostCellNeighbours = getNeighboursOfCollection(ghostCellCollection, 'live')
    const liveCellCleanup = []

    for (let i = 0; i < liveCellNeighbours.length; i++) {
      const cellInfo = liveCellNeighbours[i].split(',')
      const liveCellId = cellInfo[0]
      const neighbourCountInt = Number(cellInfo[1])

      liveCellCleanup.push(liveCellId)

      if (neighbourCountInt < 2 || neighbourCountInt > 3) {
        document.getElementById(liveCellId).classList.remove('live')
        document.getElementById(liveCellId).classList.add('ghost')
      }
    }

    for (let i = 0; i < ghostCellNeighbours.length; i++) {
      const cellInfo = ghostCellNeighbours[i].split(',')
      const ghostCellId = cellInfo[0]
      const neighbourCountInt = Number(cellInfo[1])

      if (neighbourCountInt === 3) {
        document.getElementById(ghostCellId).classList.remove('ghost')
        document.getElementById(ghostCellId).classList.add('live')

        liveCellCleanup.push(ghostCellId)

        const neighbours = getNeighbours(ghostCellId)

        for (let i = 0; i < neighbours.length; i++) {
          if (document.getElementById(neighbours[i]) != null && !document.getElementById(neighbours[i]).classList.contains('live')) {
            document.getElementById(neighbours[i]).classList.add('ghost')
          }
        }
      } else if (neighbourCountInt === 0) {
        document.getElementById(ghostCellId).classList.remove('ghost')
      }
    }

    const liveCellCleanupCollection = []

    for (let i = 0; i < liveCellCleanup.length; i++) {
      liveCellCleanupCollection.push(document.getElementById(liveCellCleanup[i]))
    }

    const liveCellCleanupNeighbours = getNeighboursOfCollection(liveCellCleanupCollection, 'live')

    for (let i = 0; i < liveCellCleanupNeighbours.length; i++) {
      const cellInfo = liveCellCleanupNeighbours[i].split(',')
      const liveCellCleanupId = cellInfo[0]
      const neighbours = getNeighbours(liveCellCleanupId)

      for (let i = 0; i < neighbours.length; i++) {
        if (document.getElementById(neighbours[i]) != null && !document.getElementById(neighbours[i]).classList.contains('live')) {
          document.getElementById(neighbours[i]).classList.add('ghost')
        }
      }
    }
  }

  const clearGrid = () => {
    run.stop()

    Array.from(cellCollection).forEach(item => {
      item.classList.remove('live', 'ghost')
    })
  }

  const cellClick = (id) => {
    run.stop()

    if (document.getElementById(id).classList.contains('live')) {
      document.getElementById(id).classList.add('ghost')
      document.getElementById(id).classList.remove('live')
    } else {
      document.getElementById(id).classList.add('live')
      document.getElementById(id).classList.remove('ghost')

      const neighbours = getNeighbours(id)

      for (let i = 0; i < neighbours.length; i++) {
        if (document.getElementById(neighbours[i]) != null && !document.getElementById(neighbours[i]).classList.contains('live')) {
          document.getElementById(neighbours[i]).classList.add('ghost')
        }
      }
    }
  }

  const randomState = () => {
    clearGrid()

    Array.from(cellCollection).forEach(item => {
      const x = Math.floor(Math.random() * 4) + 1

      if (x === 4) {
        item.classList.add('live')
      }
    })
  }

  const addClassNames = (cellIds, className) => {
    cellIds.forEach(item => {
      document.getElementById(item).classList.add(className)
    })
  }

  const presetInitialState = (preset) => {
    const { liveCellIds, ghostCellIds } = preset
    clearGrid()

    addClassNames(liveCellIds, 'live')
    addClassNames(ghostCellIds, 'ghost')
  }

  const nextGeneration = () => {
    run.stop()
    iteration()
  }

  const getNeighbours = (id) => {
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

  const getNeighboursOfCollection = (collection, className) => {
    const neighboursOfCollection = []

    for (let i = 0; i < collection.length; i++) {
      const neighbours = getNeighbours(collection[i].id)

      const neighboursCount = []

      for (let i = 0; i < neighbours.length; i++) {
        if (document.getElementById(neighbours[i]) != null && document.getElementById(neighbours[i]).classList.contains(className)) {
          neighboursCount.push(i + 1)
        }
      }

      neighboursOfCollection.push(collection[i].id + ',' + neighboursCount.length)
    }

    return neighboursOfCollection
  }

  const createGrid = () => {
    const gridSize = 100
    let cells = []

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const cellId = `${i}-${j}`

        cells = [...cells, <div className='cell' id={cellId} key={cellId} onClick={() => cellClick(cellId)} />]
      }
    }

    return cells
  }

  return (
    <>
      <header>
        <MdPlayCircle
          onClick={() => run.start()}
          id='run'
          className='icon'
          size={24}
        />
        <MdStopCircle
          onClick={() => run.stop()}
          id='stop'
          className='icon'
          size={24}
        />

        <nav>
          <button onClick={() => randomState()}>Random State</button>
          <button onClick={() => presetInitialState(presets.glidersSpaceships)}>Gliders &amp; Spaceships</button>
          <button onClick={() => presetInitialState(presets.gliderGuns)}>Glider Guns</button>
          <button onClick={() => presetInitialState(presets.oscillator)}>Oscillator</button>
          <button onClick={() => presetInitialState(presets.rPentomino)}>R-Pentomino</button>
          <button onClick={() => nextGeneration()}>Next Generation</button>
          <button onClick={() => clearGrid()}>Clear Grid</button>
        </nav>

        <a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life" target='blank'>
          <MdInfo
            className='icon'
            size={24}
          />
        </a>
      </header>

      <div className='grid'>
        {createGrid()}
      </div>
    </>
  )
}

export default App
