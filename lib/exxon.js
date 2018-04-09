import { canvasWidth, canvasHeight, GROUND_LEVEL, randomInt } from './util';

class Exxon {
  constructor(ctx) {
    this.ctx = ctx;
    this.sprite = new Image();
    this.sprite.src = './assets/exxon.png';

    this.width = 100;
    this.height = 40;

    this.speedX = randomInt(4, 9);

    this.posX = canvasWidth;
    this.posY = randomInt(0, GROUND_LEVEL - this.height);

    // flag for deletion if off map or if Johan collects
    this.deathFlag = false;
  }

  render () {
    this.ctx.drawImage(this.sprite, this.posX, this.posY, this.width, this.height);
    this.posX -= this.speedX;

    // flag for deletion if off screen 
    if (this.posX <= (-this.width)) this.deathFlag = true;
  }


}

export default Exxon;
