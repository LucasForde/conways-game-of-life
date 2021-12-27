import React from 'react'
import { MdInfo, MdPlayCircle } from 'react-icons/md'
import * as initialState from '../constants/initialState'

class TempComponent extends React.Component {
  constructor (props) {
    super(props)

    this.cells = []
    this.cellCollection = document.getElementsByClassName('cell')
    this.liveCellCollection = document.getElementsByClassName('live')
    this.ghostCellCollection = document.getElementsByClassName('ghost')

    this.playing = null

    this.state = {
      speed: 100,
      rows: 100,
      cols: 100
    }
  }

  cellClick (thisId) {
    this.stop()

    if (document.getElementById(thisId).classList.contains('live')) {
      document.getElementById(thisId).classList.add('ghost')
      document.getElementById(thisId).classList.remove('live')
    } else {
      document.getElementById(thisId).classList.add('live')
      document.getElementById(thisId).classList.remove('ghost')

      const neighbours = this.getNeighbours(thisId)

      for (let i = 0; i < neighbours.length; i++) {
        if (document.getElementById(neighbours[i]) != null && !document.getElementById(neighbours[i]).classList.contains('live')) {
          document.getElementById(neighbours[i]).classList.add('ghost')
        }
      }
    }
  }

  randomState () {
    this.stop()

    for (let i = 0; i < this.cellCollection.length; i++) {
      this.cellCollection[i].classList.remove('live', 'ghost')

      var x = Math.floor((Math.random() * 4) + 1)

      if (x === 4) {
        this.cellCollection[i].classList.add('live')
      }
    }
  }

  glidersSpaceships () {
    this.clearGrid()

    for (let i = 0; i < initialState.glidersSpaceships[0].length; i++) {
      document.getElementById(initialState.glidersSpaceships[0][i]).classList.add('live')
    }

    for (let i = 0; i < initialState.glidersSpaceships[1].length; i++) {
      document.getElementById(initialState.glidersSpaceships[1][i]).classList.add('ghost')
    }
  }

  gliderGun () {
    this.clearGrid()

    for (let i = 0; i < initialState.gliderGun[0].length; i++) {
      document.getElementById(initialState.gliderGun[0][i]).classList.add('live')
    }

    for (let i = 0; i < initialState.gliderGun[1].length; i++) {
      document.getElementById(initialState.gliderGun[1][i]).classList.add('ghost')
    }
  }

  oscillator () {
    this.clearGrid()

    for (let i = 0; i < initialState.oscillator[0].length; i++) {
      document.getElementById(initialState.oscillator[0][i]).classList.add('live')
    }

    for (let i = 0; i < initialState.oscillator[1].length; i++) {
      document.getElementById(initialState.oscillator[1][i]).classList.add('ghost')
    }
  }

  rPentomino () {
    this.clearGrid()

    for (let i = 0; i < initialState.rPentomino[0].length; i++) {
      document.getElementById(initialState.rPentomino[0][i]).classList.add('live')
    }

    for (let i = 0; i < initialState.rPentomino[1].length; i++) {
      document.getElementById(initialState.rPentomino[1][i]).classList.add('ghost')
    }
  }

  nextGeneration () {
    this.stop()

    this.iteration()
  }

  clearGrid () {
    this.stop()

    for (let i = 0; i < this.cellCollection.length; i++) {
      this.cellCollection[i].classList.remove('live', 'ghost')
    }
  }

  play () {
    const { speed } = this.state

    // document.getElementById('play').classList.add('hide')
    // document.getElementById('stop').classList.remove('hide')

    this.playing = setInterval(this.iteration.bind(this), speed)
  }

  stop () {
    // document.getElementById('play').classList.remove('hide')
    // document.getElementById('stop').classList.add('hide')

    clearInterval(this.playing)
  }

  getNeighbours (thisId) {
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

  getNeighboursOfCollection (thisCollection, classIdentifier) {
    const neighboursOfCollection = []

    for (let i = 0; i < thisCollection.length; i++) {
      const neighbours = this.getNeighbours(thisCollection[i].id)

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

  iteration () {
    const liveCellNeighbours = this.getNeighboursOfCollection(this.liveCellCollection, 'live')
    const ghostCellNeighbours = this.getNeighboursOfCollection(this.ghostCellCollection, 'live')
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

        const neighbours = this.getNeighbours(ghostCellId)

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

    const liveCellCleanupNeighbours = this.getNeighboursOfCollection(liveCellCleanupCollection, 'live')

    for (let i = 0; i < liveCellCleanupNeighbours.length; i++) {
      const thisCellInfo = liveCellCleanupNeighbours[i].split(',')
      const liveCellCleanupId = thisCellInfo[0]
      const neighbours = this.getNeighbours(liveCellCleanupId)

      for (let i = 0; i < neighbours.length; i++) {
        if (document.getElementById(neighbours[i]) != null && !document.getElementById(neighbours[i]).classList.contains('live')) {
          document.getElementById(neighbours[i]).classList.add('ghost')
        }
      }
    }
  }

  createGrid () {
    for (let i = 0; i < this.state.rows; i++) {
      for (let j = 0; j < this.state.cols; j++) {
        const cellId = i + '-' + j

        this.cells.push(<div className='cell' id={cellId} key={cellId} onClick={this.cellClick.bind(this, cellId)} />)
      }
    }
  }

  render () {
    this.createGrid()

    return (
      <>
        <header>
          <MdPlayCircle
            onClick={this.play.bind(this)}
            id='play'
            className='icon'
            size={24}
          />
          {/* <MdStopCircle
            onClick={this.stop.bind(this)}
            id='stop'
            className='icon'
            size={24}
          /> */}

          <nav>
            <button onClick={this.randomState.bind(this)}>Random State</button>
            <button onClick={this.glidersSpaceships.bind(this)}>Gliders &amp; Spaceships</button>
            <button onClick={this.gliderGun.bind(this)}>Glider Guns</button>
            <button onClick={this.oscillator.bind(this)}>Oscillator</button>
            <button onClick={this.rPentomino.bind(this)}>R-Pentomino</button>
            <button onClick={this.nextGeneration.bind(this)}>Next Generation</button>
            <button onClick={this.clearGrid.bind(this)}>Clear Grid</button>
          </nav>

          <a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life" target='blank'>
            <MdInfo
              className='icon'
              size={24}
            />
          </a>
        </header>

        <div className='grid'>
          {this.cells}
        </div>
      </>
    )
  }
}

export default TempComponent
