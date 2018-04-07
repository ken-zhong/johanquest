import Johan from './johan'
import Background from './background'
import { canvasWidth, canvasHeight } from './util'

class Game {
  constructor () {
    // this.canvasUI = document.querySelector('#canvas-UI')
    this.canvasGame = document.querySelector('#canvas-game')
    this.gameCtx = this.canvasGame.getContext('2d')
    // this.uiCtx = this.canvasUI.getContext('2d')

    this.background = new Background(this.gameCtx)
    this.johan = new Johan(this.gameCtx)
    this.johan.init()

    this.scores = {score: 0, hiScore: parseInt(window.localStorage.hiScore)}
  }

  init () {
    this.render()
  }

  render () {
    this.gameCtx.clearRect(0, 0, canvasWidth, canvasHeight)

    this.background.render()
    this.johan.render()

    window.requestAnimationFrame(this.render.bind(this))
  }
}

export default Game
