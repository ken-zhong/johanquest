import Johan from './johan'
import { canvasWidth, canvasHeight } from './util'

class Game {
  constructor () {
    // this.canvasUI = document.querySelector('#canvas-UI')
    this.canvasGame = document.querySelector('#canvas-game')
    this.gameCtx = this.canvasGame.getContext('2d')
    // this.uiCtx = this.canvasUI.getContext('2d')

    this.johan = new Johan(this.gameCtx)
    this.johan.init()
  }

  init () {
    this.render()
  }

  render () {
    this.gameCtx.clearRect(0, 0, canvasWidth, canvasHeight)
    this.johan.render()
    window.requestAnimationFrame(this.render.bind(this))
  }
}

export default Game
