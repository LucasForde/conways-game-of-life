import React, { FunctionComponent } from 'react'
import { MdInfo, MdPlayCircle, MdStopCircle } from 'react-icons/md'
import grid from '../constants/grid'
import * as presets from '../constants/presets'

const MainComponent: FunctionComponent = () => {
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
      const thisCellInfo = liveCellNeighbours[i].split(',')
      const liveCellId = thisCellInfo[0]
      const neighbourCountInt = parseInt(thisCellInfo[1], 10)

      liveCellCleanup.push(liveCellId)

      if (neighbourCountInt < 2 || neighbourCountInt > 3) {
        document.getElementById(liveCellId).classList.remove('live')
        document.getElementById(liveCellId).classList.add('ghost')
      }
    }

    for (let i = 0; i < ghostCellNeighbours.length; i++) {
      const thisCellInfo = ghostCellNeighbours[i].split(',')
      const ghostCellId = thisCellInfo[0]
      const neighbourCountInt = parseInt(thisCellInfo[1], 10)

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
      const thisCellInfo = liveCellCleanupNeighbours[i].split(',')
      const liveCellCleanupId = thisCellInfo[0]
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

    for (let i = 0; i < cellCollection.length; i++) {
      cellCollection[i].classList.remove('live', 'ghost')
    }
  }

  const cellClick = (thisId) => {
    run.stop()

    if (document.getElementById(thisId).classList.contains('live')) {
      document.getElementById(thisId).classList.add('ghost')
      document.getElementById(thisId).classList.remove('live')
    } else {
      document.getElementById(thisId).classList.add('live')
      document.getElementById(thisId).classList.remove('ghost')

      const neighbours = getNeighbours(thisId)

      for (let i = 0; i < neighbours.length; i++) {
        if (document.getElementById(neighbours[i]) != null && !document.getElementById(neighbours[i]).classList.contains('live')) {
          document.getElementById(neighbours[i]).classList.add('ghost')
        }
      }
    }
  }

  const randomState = () => {
    run.stop()

    for (let i = 0; i < cellCollection.length; i++) {
      cellCollection[i].classList.remove('live', 'ghost')

      var x = Math.floor((Math.random() * 4) + 1)

      if (x === 4) {
        cellCollection[i].classList.add('live')
      }
    }
  }

  const glidersSpaceships = () => {
    clearGrid()

    for (let i = 0; i < presets.glidersSpaceships[0].length; i++) {
      document.getElementById(presets.glidersSpaceships[0][i]).classList.add('live')
    }

    for (let i = 0; i < presets.glidersSpaceships[1].length; i++) {
      document.getElementById(presets.glidersSpaceships[1][i]).classList.add('ghost')
    }
  }

  const gliderGun = () => {
    clearGrid()

    for (let i = 0; i < presets.gliderGun[0].length; i++) {
      document.getElementById(presets.gliderGun[0][i]).classList.add('live')
    }

    for (let i = 0; i < presets.gliderGun[1].length; i++) {
      document.getElementById(presets.gliderGun[1][i]).classList.add('ghost')
    }
  }

  const oscillator = () => {
    clearGrid()

    for (let i = 0; i < presets.oscillator[0].length; i++) {
      document.getElementById(presets.oscillator[0][i]).classList.add('live')
    }

    for (let i = 0; i < presets.oscillator[1].length; i++) {
      document.getElementById(presets.oscillator[1][i]).classList.add('ghost')
    }
  }

  const rPentomino = () => {
    clearGrid()

    for (let i = 0; i < presets.rPentomino[0].length; i++) {
      document.getElementById(presets.rPentomino[0][i]).classList.add('live')
    }

    for (let i = 0; i < presets.rPentomino[1].length; i++) {
      document.getElementById(presets.rPentomino[1][i]).classList.add('ghost')
    }
  }

  const nextGeneration = () => {
    run.stop()

    iteration()
  }

  const getNeighbours = (thisId) => {
    const thisIdSplit = thisId.split('-')
    const thisIdSplitIntFirst = parseInt(thisIdSplit[0], 10)
    const thisIdSplitIntSecond = parseInt(thisIdSplit[1], 10)
    const neighbours = []

    neighbours.push((thisIdSplitIntFirst - 1) + '-' + thisIdSplit[1])
    neighbours.push((thisIdSplitIntFirst - 1) + '-' + (thisIdSplitIntSecond + 1))
    neighbours.push(thisIdSplit[0] + '-' + (thisIdSplitIntSecond + 1))
    neighbours.push((thisIdSplitIntFirst + 1) + '-' + (thisIdSplitIntSecond + 1))
    neighbours.push((thisIdSplitIntFirst + 1) + '-' + thisIdSplit[1])
    neighbours.push((thisIdSplitIntFirst + 1) + '-' + (thisIdSplitIntSecond - 1))
    neighbours.push(thisIdSplit[0] + '-' + (thisIdSplitIntSecond - 1))
    neighbours.push((thisIdSplitIntFirst - 1) + '-' + (thisIdSplitIntSecond - 1))

    return neighbours
  }

  const getNeighboursOfCollection = (thisCollection, classIdentifier) => {
    const neighboursOfCollection = []

    for (let i = 0; i < thisCollection.length; i++) {
      const neighbours = getNeighbours(thisCollection[i].id)

      const neighboursCount = []

      for (let i = 0; i < neighbours.length; i++) {
        if (document.getElementById(neighbours[i]) != null && document.getElementById(neighbours[i]).classList.contains(classIdentifier)) {
          neighboursCount.push(i + 1)
        }
      }

      neighboursOfCollection.push(thisCollection[i].id + ',' + neighboursCount.length)
    }

    return neighboursOfCollection
  }

  const createGrid = () => {
    let cells = []

    for (let i = 0; i < grid.rows; i++) {
      for (let j = 0; j < grid.cols; j++) {
        const cellId = i + '-' + j

        cells = [...cells, <div className='cell' id={cellId} key={cellId} onClick={cellClick.bind(this, cellId)} />]
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
          <button onClick={randomState.bind(this)}>Random State</button>
          <button onClick={glidersSpaceships.bind(this)}>Gliders &amp; Spaceships</button>
          <button onClick={gliderGun.bind(this)}>Glider Guns</button>
          <button onClick={oscillator.bind(this)}>Oscillator</button>
          <button onClick={rPentomino.bind(this)}>R-Pentomino</button>
          <button onClick={nextGeneration.bind(this)}>Next Generation</button>
          <button onClick={clearGrid.bind(this)}>Clear Grid</button>
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

export default MainComponent
