import React from 'react'
import { MdInfo, MdPlayCircle } from 'react-icons/md'
import * as presetStates from '../constants/presetStates'

class TempComponent extends React.Component {
  constructor (props) {
    super(props)

    this.squares = []
    this.squareCollection = document.getElementsByTagName('li')
    this.liveSquareCollection = document.getElementsByClassName('live')
    this.ghostSquareCollection = document.getElementsByClassName('ghost')

    this.playing = null

    this.state = {
      speed: 25,
      rows: 100,
      cols: 100
    }
  }

  squareClick (thisId) {
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

    for (let i = 0; i < this.squareCollection.length; i++) {
      this.squareCollection[i].classList.remove('live', 'ghost')

      var x = Math.floor((Math.random() * 4) + 1)

      if (x === 4) {
        this.squareCollection[i].classList.add('live')
      }
    }
  }

  glidersSpaceships () {
    this.clearGrid()

    for (let i = 0; i < presetStates.glidersSpaceshipsSquares[0].length; i++) {
      document.getElementById(presetStates.glidersSpaceshipsSquares[0][i]).classList.add('live')
    }

    for (let i = 0; i < presetStates.glidersSpaceshipsSquares[1].length; i++) {
      document.getElementById(presetStates.glidersSpaceshipsSquares[1][i]).classList.add('ghost')
    }
  }

  gliderGun () {
    this.clearGrid()

    for (let i = 0; i < presetStates.gliderGunSquares[0].length; i++) {
      document.getElementById(presetStates.gliderGunSquares[0][i]).classList.add('live')
    }

    for (let i = 0; i < presetStates.gliderGunSquares[1].length; i++) {
      document.getElementById(presetStates.gliderGunSquares[1][i]).classList.add('ghost')
    }
  }

  oscillator () {
    this.clearGrid()

    for (let i = 0; i < presetStates.oscillatorSquares[0].length; i++) {
      document.getElementById(presetStates.oscillatorSquares[0][i]).classList.add('live')
    }

    for (let i = 0; i < presetStates.oscillatorSquares[1].length; i++) {
      document.getElementById(presetStates.oscillatorSquares[1][i]).classList.add('ghost')
    }
  }

  rPentomino () {
    this.clearGrid()

    for (let i = 0; i < presetStates.rPentominoSquares[0].length; i++) {
      document.getElementById(presetStates.rPentominoSquares[0][i]).classList.add('live')
    }

    for (let i = 0; i < presetStates.rPentominoSquares[1].length; i++) {
      document.getElementById(presetStates.rPentominoSquares[1][i]).classList.add('ghost')
    }
  }

  nextGeneration () {
    this.stop()

    this.iteration()
  }

  clearGrid () {
    this.stop()

    for (let i = 0; i < this.squareCollection.length; i++) {
      this.squareCollection[i].classList.remove('live', 'ghost')
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
    const liveSquareNeighbours = this.getNeighboursOfCollection(this.liveSquareCollection, 'live')
    const ghostSquareNeighbours = this.getNeighboursOfCollection(this.ghostSquareCollection, 'live')
    const liveSquareCleanup = []

    for (let i = 0; i < liveSquareNeighbours.length; i++) {
      const thisSquareInfo = liveSquareNeighbours[i].split(',')
      const liveSquareId = thisSquareInfo[0]
      const neighbourCountInt = parseInt(thisSquareInfo[1], 10)

      liveSquareCleanup.push(liveSquareId)

      if (neighbourCountInt < 2 || neighbourCountInt > 3) {
        document.getElementById(liveSquareId).classList.remove('live')
        document.getElementById(liveSquareId).classList.add('ghost')
      }
    }

    for (let i = 0; i < ghostSquareNeighbours.length; i++) {
      const thisSquareInfo = ghostSquareNeighbours[i].split(',')
      const ghostSquareId = thisSquareInfo[0]
      const neighbourCountInt = parseInt(thisSquareInfo[1], 10)

      if (neighbourCountInt === 3) {
        document.getElementById(ghostSquareId).classList.remove('ghost')
        document.getElementById(ghostSquareId).classList.add('live')

        liveSquareCleanup.push(ghostSquareId)

        const neighbours = this.getNeighbours(ghostSquareId)

        for (let i = 0; i < neighbours.length; i++) {
          if (document.getElementById(neighbours[i]) != null && !document.getElementById(neighbours[i]).classList.contains('live')) {
            document.getElementById(neighbours[i]).classList.add('ghost')
          }
        }
      } else if (neighbourCountInt === 0) {
        document.getElementById(ghostSquareId).classList.remove('ghost')
      }
    }

    const liveSquareCleanupCollection = []

    for (let i = 0; i < liveSquareCleanup.length; i++) {
      liveSquareCleanupCollection.push(document.getElementById(liveSquareCleanup[i]))
    }

    const liveSquareCleanupNeighbours = this.getNeighboursOfCollection(liveSquareCleanupCollection, 'live')

    for (let i = 0; i < liveSquareCleanupNeighbours.length; i++) {
      const thisSquareInfo = liveSquareCleanupNeighbours[i].split(',')
      const liveSquareCleanupId = thisSquareInfo[0]
      const neighbours = this.getNeighbours(liveSquareCleanupId)

      for (let i = 0; i < neighbours.length; i++) {
        if (document.getElementById(neighbours[i]) != null && !document.getElementById(neighbours[i]).classList.contains('live')) {
          document.getElementById(neighbours[i]).classList.add('ghost')
        }
      }
    }
  }

  createGrid () {
    let squareId = ''

    for (let i = 0; i < this.state.rows; i++) {
      for (let j = 0; j < this.state.cols; j++) {
        squareId = i + '-' + j

        this.squares.push(<li id={squareId} key={squareId} onClick={this.squareClick.bind(this, squareId)} />)
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

        <ul className='grid'>
          {this.squares}
        </ul>
      </>
    )
  }
}

export default TempComponent
