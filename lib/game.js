import Johan from './johan'

class Game {
  constructor () {
    this.canvasUI = document.querySelector('canvas-UI')
    this.canvasGame = document.querySelector('canvas-game')
    this.gameCtx = this.canvasGame.getContext('2d')
    this.uiCtx = this.canvasUI.getContext('2d')

    this.johan = new Johan(this.gameCtx)
    this.johan.init()
  }

  render () {
    this.johan.render()
  }
}

export default Game
