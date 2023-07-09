import generation from './generation'

const control = {
  start: function (callBack: (arg: boolean) => void) {
    callBack(true)
    this.interval = setInterval(generation, 35)
  },
  stop: function (callBack: (arg: boolean) => void) {
    callBack(false)
    clearInterval(this.interval)
  },
  step: function (callBack: (arg: boolean) => void) {
    this.stop(callBack)
    generation()
  }
}

export default control
