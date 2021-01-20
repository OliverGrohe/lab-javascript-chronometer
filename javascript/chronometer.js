class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    setInterval(() =>{
      this.currentTime += 1
      callback()
  }, 1000)
  }
  getMinutes() {
    let minutes = this.currentTime / 60
    return Math.floor(minutes)
  }
  getSeconds() {
    let seconds = 0
      if (this.currentTime < 60) {
        return this.currentTime
      }
      else if (this.currentTime > 60) {
        return this.currentTime - 60
      }
  }
  twoDigitsNumber(time) {
    if (time < 10) {
        return '0' + time
    }
    else if (time >= 10) {
        return time.toString()
    }
  }
  stopClick() {
    clearInterval(this.intervalID)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    let min = this.getMinutes()
    let sec = this.getSeconds()

    min = this.twoDigitsNumber(min)
    sec = this.twoDigitsNumber(sec)
    return `${min}:${sec}`
  }
}
