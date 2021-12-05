import React from 'react'

class TempComponent extends React.Component {
  constructor (props) {
    super(props)

    this.squares = []
    this.squareCollection = document.getElementsByTagName('li')
    this.liveSquareCollection = document.getElementsByClassName('live')
    this.ghostSquareCollection = document.getElementsByClassName('ghost')
    this.glidersSpaceshipsSquares = [
      ['2-5', '2-14', '2-23', '2-32', '2-41', '3-3', '3-5', '3-12', '3-14', '3-21', '3-23', '3-30', '3-32', '3-39', '3-41', '4-4', '4-5', '4-13', '4-14', '4-22', '4-23', '4-31', '4-32', '4-40', '4-41', '22-4', '22-5', '22-6', '22-7', '23-3', '23-7', '24-7', '25-3', '25-6', '29-4', '29-5', '29-6', '29-7', '30-3', '30-7', '31-7', '32-3', '32-6', '36-4', '36-5', '36-6', '36-7', '37-3', '37-7', '38-7', '39-3', '39-6'],
      ['1-4', '1-5', '1-6', '1-13', '1-14', '1-15', '1-22', '1-23', '1-24', '1-31', '1-32', '1-33', '1-40', '1-41', '1-42', '2-2', '2-3', '2-4', '2-6', '2-11', '2-12', '2-13', '2-15', '2-20', '2-21', '2-22', '2-24', '2-29', '2-30', '2-31', '2-33', '2-38', '2-39', '2-40', '2-42', '3-2', '3-4', '3-6', '3-11', '3-13', '3-15', '3-20', '3-22', '3-24', '3-29', '3-31', '3-33', '3-38', '3-40', '3-42', '4-2', '4-3', '4-6', '4-11', '4-12', '4-15', '4-20', '4-21', '4-24', '4-29', '4-30', '4-33', '4-38', '4-39', '4-42', '5-3', '5-4', '5-5', '5-6', '5-12', '5-13', '5-14', '5-15', '5-21', '5-22', '5-23', '5-24', '5-30', '5-31', '5-32', '5-33', '5-39', '5-40', '5-41', '5-42', '21-3', '21-4', '21-5', '21-6', '21-7', '21-8', '22-2', '22-3', '22-8', '23-2', '23-4', '23-5', '23-6', '23-8', '24-2', '24-3', '24-4', '24-5', '24-6', '24-8', '25-2', '25-4', '25-5', '25-7', '25-8', '26-2', '26-3', '26-4', '26-5', '26-6', '26-7', '28-3', '28-4', '28-5', '28-6', '28-7', '28-8', '29-2', '29-3', '29-8', '30-2', '30-4', '30-5', '30-6', '30-8', '31-2', '31-3', '31-4', '31-5', '31-6', '31-8', '32-2', '32-4', '32-5', '32-7', '32-8', '33-2', '33-3', '33-4', '33-5', '33-6', '33-7', '35-3', '35-4', '35-5', '35-6', '35-7', '35-8', '36-2', '36-3', '36-8', '37-2', '37-4', '37-5', '37-6', '37-8', '38-2', '38-3', '38-4', '38-5', '38-6', '38-8', '39-2', '39-4', '39-5', '39-7', '39-8', '40-2', '40-3', '40-4', '40-5', '40-6', '40-7']
    ]
    this.gliderGunSquares = [
      ['5-47', '6-45', '6-47', '7-35', '7-36', '7-43', '7-44', '7-57', '7-58', '8-34', '8-38', '8-43', '8-44', '8-57', '8-58', '9-23', '9-24', '9-33', '9-39', '9-43', '9-44', '10-23', '10-24', '10-33', '10-37', '10-39', '10-40', '10-45', '10-47', '11-33', '11-39', '11-47', '12-34', '12-38', '13-35', '13-36', '25-62', '25-63', '26-60', '26-64', '27-51', '27-59', '27-65', '28-51', '28-53', '28-58', '28-59', '28-61', '28-65', '28-74', '28-75', '29-54', '29-55', '29-59', '29-65', '29-74', '29-75', '30-40', '30-41', '30-54', '30-55', '30-60', '30-64', '31-40', '31-41', '31-54', '31-55', '31-62', '31-63', '32-51', '32-53', '33-51'],
      ['4-46', '4-47', '4-48', '5-44', '5-45', '5-46', '5-48', '6-34', '6-35', '6-36', '6-37', '6-42', '6-43', '6-44', '6-46', '6-48', '6-56', '6-57', '6-58', '6-59', '7-33', '7-34', '7-37', '7-38', '7-39', '7-42', '7-45', '7-46', '7-47', '7-48', '7-56', '7-59', '8-22', '8-23', '8-24', '8-25', '8-32', '8-33', '8-35', '8-36', '8-37', '8-39', '8-40', '8-42', '8-45', '8-56', '8-59', '9-22', '9-25', '9-32', '9-34', '9-35', '9-36', '9-37', '9-38', '9-40', '9-41', '9-42', '9-45', '9-46', '9-47', '9-48', '9-56', '9-57', '9-58', '9-59', '10-22', '10-25', '10-32', '10-34', '10-36', '10-38', '10-41', '10-42', '10-43', '10-44', '10-46', '10-48', '11-22', '11-23', '11-24', '11-25', '11-32', '11-34', '11-35', '11-36', '11-37', '11-38', '11-40', '11-41', '11-44', '11-45', '11-46', '11-48', '12-32', '12-33', '12-35', '12-36', '12-37', '12-39', '12-40', '12-46', '12-47', '12-48', '13-33', '13-34', '13-37', '13-38', '13-39', '14-34', '14-35', '14-36', '14-37', '24-61', '24-62', '24-63', '24-64', '25-59', '25-60', '25-61', '25-64', '25-65', '26-50', '26-51', '26-52', '26-58', '26-59', '26-61', '26-62', '26-63', '26-65', '26-66', '27-50', '27-52', '27-53', '27-54', '27-57', '27-58', '27-60', '27-61', '27-62', '27-63', '27-64', '27-66', '27-73', '27-74', '27-75', '27-76', '28-50', '28-52', '28-54', '28-55', '28-56', '28-57', '28-60', '28-62', '28-64', '28-66', '28-73', '28-76', '29-39', '29-40', '29-41', '29-42', '29-50', '29-51', '29-52', '29-53', '29-56', '29-57', '29-58', '29-60', '29-61', '29-62', '29-63', '29-64', '29-66', '29-73', '29-76', '30-39', '30-42', '30-53', '30-56', '30-58', '30-59', '30-61', '30-62', '30-63', '30-65', '30-66', '30-73', '30-74', '30-75', '30-76', '31-39', '31-42', '31-50', '31-51', '31-52', '31-53', '31-56', '31-59', '31-60', '31-61', '31-64', '31-65', '32-39', '32-40', '32-41', '32-42', '32-50', '32-52', '32-54', '32-55', '32-56', '32-61', '32-62', '32-63', '32-64', '33-50', '33-52', '33-53', '33-54', '34-50', '34-51', '34-52']
    ]
    this.oscillatorSquares = [
      ['12-51', '13-50', '13-52', '14-49', '14-50', '15-49', '15-50', '16-49', '16-50', '16-52', '16-53', '17-51', '17-52', '17-53', '18-43', '18-44', '19-40', '19-43', '19-44', '20-39', '20-44', '21-40', '21-41', '21-42', '21-43', '22-41', '22-42', '22-43', '22-55', '22-56', '22-57', '23-55', '23-56', '23-57', '23-58', '24-54', '24-59', '25-54', '25-55', '25-58', '26-54', '26-55', '27-45', '27-46', '27-47', '28-45', '28-46', '28-48', '28-49', '29-48', '29-49', '30-48', '30-49', '31-46', '31-48', '32-47'],
      ['11-50', '11-51', '11-52', '12-49', '12-50', '12-52', '12-53', '13-48', '13-49', '13-51', '13-53', '14-48', '14-51', '14-52', '14-53', '15-48', '15-51', '15-52', '15-53', '15-54', '16-48', '16-51', '16-54', '17-42', '17-43', '17-44', '17-45', '17-48', '17-49', '17-50', '17-54', '18-39', '18-40', '18-41', '18-42', '18-45', '18-50', '18-51', '18-52', '18-53', '18-54', '19-38', '19-39', '19-41', '19-42', '19-45', '20-38', '20-40', '20-41', '20-42', '20-43', '20-45', '21-38', '21-39', '21-44', '21-45', '21-54', '21-55', '21-56', '21-57', '21-58', '22-39', '22-40', '22-44', '22-54', '22-58', '22-59', '23-40', '23-41', '23-42', '23-43', '23-44', '23-53', '23-54', '23-59', '23-60', '24-53', '24-55', '24-56', '24-57', '24-58', '24-60', '25-53', '25-56', '25-57', '25-59', '25-60', '26-44', '26-45', '26-46', '26-47', '26-48', '26-53', '26-56', '26-57', '26-58', '26-59', '27-44', '27-48', '27-49', '27-50', '27-53', '27-54', '27-55', '27-56', '28-44', '28-47', '28-50', '29-44', '29-45', '29-46', '29-47', '29-50', '30-45', '30-46', '30-47', '30-50', '31-45', '31-47', '31-49', '31-50', '32-45', '32-46', '32-48', '32-49', '33-46', '33-47', '33-48']
    ]
    this.rPentominoSquares = [
      ['22-49', '22-50', '23-48', '23-49', '24-49'],
      ['21-48', '21-49', '21-50', '21-51', '22-47', '22-48', '22-51', '23-47', '23-50', '23-51', '24-47', '24-48', '24-50', '25-48', '25-49', '25-50']
    ]
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

    for (let i = 0; i < this.glidersSpaceshipsSquares[0].length; i++) {
      document.getElementById(this.glidersSpaceshipsSquares[0][i]).classList.add('live')
    }

    for (let i = 0; i < this.glidersSpaceshipsSquares[1].length; i++) {
      document.getElementById(this.glidersSpaceshipsSquares[1][i]).classList.add('ghost')
    }
  }

  gliderGun () {
    this.clearGrid()

    for (let i = 0; i < this.gliderGunSquares[0].length; i++) {
      document.getElementById(this.gliderGunSquares[0][i]).classList.add('live')
    }

    for (let i = 0; i < this.gliderGunSquares[1].length; i++) {
      document.getElementById(this.gliderGunSquares[1][i]).classList.add('ghost')
    }
  }

  oscillator () {
    this.clearGrid()

    for (let i = 0; i < this.oscillatorSquares[0].length; i++) {
      document.getElementById(this.oscillatorSquares[0][i]).classList.add('live')
    }

    for (let i = 0; i < this.oscillatorSquares[1].length; i++) {
      document.getElementById(this.oscillatorSquares[1][i]).classList.add('ghost')
    }
  }

  rPentomino () {
    this.clearGrid()

    for (let i = 0; i < this.rPentominoSquares[0].length; i++) {
      document.getElementById(this.rPentominoSquares[0][i]).classList.add('live')
    }

    for (let i = 0; i < this.rPentominoSquares[1].length; i++) {
      document.getElementById(this.rPentominoSquares[1][i]).classList.add('ghost')
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

    document.getElementById('play').classList.add('hide')
    document.getElementById('stop').classList.remove('hide')

    this.playing = setInterval(this.iteration.bind(this), speed)
  }

  stop () {
    document.getElementById('play').classList.remove('hide')
    document.getElementById('stop').classList.add('hide')

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
      <main>

        <header>

          <div className='header-left'>

            <a onClick={this.play.bind(this)} id='play' className='fa-button fa fa-play-circle' />
            <a onClick={this.stop.bind(this)} id='stop' className='fa-button hide fa fa-stop-circle' />

            <nav>

              <button onClick={this.randomState.bind(this)}>Random State</button>
              <button onClick={this.glidersSpaceships.bind(this)}>Gliders &amp; Spaceships</button>
              <button onClick={this.gliderGun.bind(this)}>Glider Guns</button>
              <button onClick={this.oscillator.bind(this)}>Oscillator</button>
              <button onClick={this.rPentomino.bind(this)}>R-Pentomino</button>
              <button onClick={this.nextGeneration.bind(this)}>Next Generation</button>
              <button onClick={this.clearGrid.bind(this)}>Clear Grid</button>

            </nav>

          </div>

          <div className='header-right'>

            <a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life" target='blank' className='fa-button fa fa-info-circle' />

          </div>

        </header>

        <ul className='grid'>
          {this.squares}
        </ul>

      </main>
    )
  }
}

export default TempComponent
