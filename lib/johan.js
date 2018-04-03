import { canvasWidth, canvasHeight } from './util'

class Johan {
  constructor (ctx) {
    this.ctx = ctx
    this.posX = 100
    this.posY = canvasHeight - 100
    this.sizeX = 20
    this.sizeY = 60
    this.isJumping = false
  }

  init () {
    document.addEventListener('keydown', e => {
      console.log('hit');
      if (e.keyCode === 32) this.isJumping = true
    })
    document.addEventListener('keyup', e => {
      if (e.keyCode === 32) this.isJumping = false
    })
  }

  calculateMovement () {
    if (this.isJumping) {
      this.posY -= 2
    } else {
      if (this.posY < canvasHeight - 100) this.posY += 2
    }
  }

  render () {
    this.calculateMovement()
    this.ctx.fillStyle = 'red'
    this.ctx.fillRect(this.posX, this.posY, this.sizeX, this.sizeY)
  }
}

export default Johan
