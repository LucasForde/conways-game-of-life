import iteration from './iteration'

const run = {
  start: function () {
    this.interval = setInterval(iteration, 25)
  },
  stop: function () {
    clearInterval(this.interval)
  }
}

export default run
