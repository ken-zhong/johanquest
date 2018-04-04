import { canvasWidth, canvasHeight } from './util'

class Johan {
  constructor (ctx) {
    this.ctx = ctx
    this.posX = 100
    this.posY = canvasHeight - 150
    this.sizeX = 113 / 1.5
    this.sizeY = 176 / 1.5
    this.isJumping = false

    this.johanSprite = new Image()
    this.johanSprite.src = './assets/player_sprite/johan_1.png'

    this.deathFlag = false

    this.callCount = 0
    this.frameCount = 0
  }

  init () {
    document.addEventListener('keydown', e => {
      if (e.keyCode === 32) this.isJumping = true
    })
    document.addEventListener('keyup', e => {
      if (e.keyCode === 32) this.isJumping = false
    })
  }

  calculateJump () {
    if (this.isJumping) {
      this.posY -= 2
    } else {
      if (this.posY < canvasHeight - 150) this.posY += 2
    }
  }

  renderDeath () {

  }

  render () {
    if (this.deathFlag) return renderDeath()

    this.callCount++
    if ( this.callCount % 1 === 0 ) this.frameCount++

    this.calculateJump()
    // Sprite size = 6x7, 678x1232, 113x176


    let frame = this.frameCount % 42

    // 0,0 - 1,0, 2,0 -

    let x = frame % 6
    let y = parseInt(frame / 6)
    // console.log(`${x}, ${y}`);
    let options = [
      this.johanSprite,
      x * 113,
      y * 176,
      113,
      176,
      this.posX,
      this.posY,
      this.sizeX,
      this.sizeY
    ]

    this.ctx.drawImage(...options)

    if (this.frameCount === 42000) this.frameCount = 0
  }
}

export default Johan
