import { canvasWidth, canvasHeight } from './util'

class Johan {
  constructor (ctx) {
    this.ctx = ctx
    this.posX = 100
    this.posY = canvasHeight - 150
    this.sizeX = 113 / 1.5
    this.sizeY = 176 / 1.5
    
    this.groundLevel = canvasHeight - 150
    this.jumpVelocity = 9       // will want to create a function b/c parabola.
    this.fallVelocity = 9
    this.maxJumpTime = 25
    this.onGround = true
    this.isRising = false
    this.isFalling = false
    this.timeRising = 0
    this.spaceBarDown = false
    this.numJumpsDone = 0

    this.johanSprite = new Image()
    this.johanSprite.src = './assets/player_sprite/johan_2.png'
    this.johanJump = new Image()
    this.johanJump.src = './assets/player_sprite/johan_jump.png'

    this.deathFlag = false

    this.callCount = 0
    this.frameCount = 0
  }

  init () {
    document.addEventListener('keydown', e => {
      if (e.keyCode === 32) this.spaceBarDown = true
    })
    document.addEventListener('keyup', e => {
      if (e.keyCode === 32) this.spaceBarDown = false
    })
  }

  /**
   * I added three properties: isRising, isFalling, and onGround.
   * I also changed isJumping to spaceBarDown.
   * I added timeRising.
   * I added groundLevel.
   * I added jumpVelocity and fallVelocity. 
   */
  calculateJump () {
    if (this.spaceBarDown) {                    // rising.
      if (this.onGround === true && this.numJumpsDone === 0) {
        this.isRising = true
        this.isFalling = false
        this.onGround = false
      }
      if (this.timeRising < this.maxJumpTime &&
      this.numJumpsDone === 0) {   // still rising.
        this.posY -= this.jumpVelocity
        this.timeRising += 1
      } else {                          // done rising.
        if (this.posY < this.groundLevel) {            // falling.
          this.isRising = false
          this.isFalling = true
          this.onGround = false
          this.posY += this.fallVelocity
          this.numJumpsDone = 1
        } else if (this.posY === this.groundLevel) {  // on ground.
          this.isRising = false
          this.isFalling = false
          this.onGround = true
          this.timeRising = 0   // resets timeRising.
        }
      }
    } else {
      if (this.posY < this.groundLevel) {             // falling.
        this.isRising = false
        this.isFalling = true
        this.onGround = false
        this.posY += this.fallVelocity
        this.numJumpsDone = 1
      } else if (this.posY === this.groundLevel) {    // on ground.
        this.isRising = false
        this.isFalling = false
        this.onGround = true
        this.timeRising = 0     // resets timeRising.
        this.numJumpsDone = 0   // resets numJumpsDone.
      }
    }
  }

  renderDeath () {
    console.log('placeholder');
  }

  renderJump () {
    let options = [
      this.johanJump,
      this.posX,
      this.posY,
      this.sizeX,
      this.sizeY
    ]
    this.ctx.drawImage(...options)
  }

  renderRun () {
    if ( this.callCount % 1 === 0 ) this.frameCount++

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
  }

  render () {
    if (this.deathFlag) return renderDeath()
    this.callCount++
    this.calculateJump()

    if (this.onGround === false) {
      this.renderJump()
    } else {
      this.renderRun()
    }


    if (this.frameCount === 42000) this.frameCount = 0
  }
}

export default Johan
