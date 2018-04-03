class Johan {
  constructor (ctx) {
    this.ctx = ctx
    this.posX = 10
    this.posY = 10
    this.sizeX = 20
    this.sizeY = 60
    this.isJumping = false
  }

  init () {
    document.addEventListener('keydown', e => {
      if (e.keyCode === 32) this.isJumping = true
    })
    document.addEventListener('keyup', e => {
      if (e.keyCode === 32) this.isJumping = false
    })
  }

  calculateMovement () {
    if (this.isJumping) {
      this.posY++
    } else {
      if (this.posY > 10) this.posY--
    }
  }

  render () {
    this.ctx.fillStyle = 'red'
    this.ctx.fillRect(this.posX, this.posY, this.sizeX, this.sizeY)
  }
}

export default Johan
