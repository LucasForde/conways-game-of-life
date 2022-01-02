import generation from './generation'

const run = {
  start: function () {
    this.interval = setInterval(generation, 25)
  },
  stop: function () {
    clearInterval(this.interval)
  },
  step: function () {
    this.stop()
    generation()
  }
}

export default run
