import { canvasWidth, canvasHeight } from './util';

class Background {
  constructor(ctx) {
    this.ctx = ctx;

    let layer1 = new Image();
    layer1.src = './assets/background/l1.png';
    let layer2 = new Image();
    layer2.src = './assets/background/l2.png';
    let layer3 = new Image();
    layer3.src = './assets/background/l3.png';
    let layer4 = new Image();
    layer4.src = './assets/background/l4.png';
    let layer5 = new Image();
    layer5.src = './assets/background/l5.png';
    let layer6 = new Image();
    layer6.src = './assets/background/l6.png';
    let layer7 = new Image();
    layer7.src = './assets/background/l7.png';
    let layer8 = new Image();
    layer8.src = './assets/background/l8.png';

    this.layers = [layer8, layer7, layer6, layer5, layer4, layer3, layer2, layer1];
    this.pos = 0;
  }

  render() {
    this.layers.forEach((layer, idx) => {
      let pos = idx * this.posX;
      if (idx === 0 || idx === 1) {
        this.ctx.drawImage(layer, 0, 0, canvasWidth, canvasHeight);
      } else {
        let pos = ((idx - 1) * this.pos) % canvasWidth;
        this.ctx.drawImage(layer, pos, 0, canvasWidth, canvasHeight);
        this.ctx.drawImage(layer, pos + canvasWidth, 0, canvasWidth, canvasHeight);
      }
    });
    this.pos--;
    Math.abs(this.pos) >= canvasWidth && (this.pos = 0);
  }
}

// class Layer {
//   constructor (layer) {
//
//     this.posX
//     this.speed =
//   }
//
//   render () {
//
//   }
// }

export default Background;
