import run from './run'
import iteration from './iteration'

const nextGeneration = () => {
  run.stop()
  iteration()
}

export default nextGeneration
