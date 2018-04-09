import Johan from './johan';
import Background from './background';
import Exxon from './exxon';
import { canvasWidth, canvasHeight } from './util';

class Game {
  constructor () {
    // this.canvasUI = document.querySelector('#canvas-UI')
    this.canvasGame = document.querySelector('#canvas-game');
    this.gameCtx = this.canvasGame.getContext('2d');
    // this.uiCtx = this.canvasUI.getContext('2d')

    this.background = new Background(this.gameCtx);
    this.johan = new Johan(this.gameCtx);
    this.johan.init();

    this.exxons = [];
    this.obstacles = [];

    this.scores = {score: 0, hiScore: parseInt(window.localStorage.hiScore)};

    this.tick = 0;
  }

  init () {
    this.render();
  }

  cleanUp () {
    this.exxons = this.exxons.filter(exxon => !exxon.deathFlag);
    this.obstacles = this.obstacles.filter(obstacle => !obstacle.deathFlag);
  }

  render () {
    // potentially computationally expensive operations don't need to be run every frame
    if (this.tick % 5 === 0) this.cleanUp();
    if (this.tick === 360) {
      this.exxons.push(new Exxon(this.gameCtx));
      this.tick = 0;
    }
    this.tick++;

    this.gameCtx.clearRect(0, 0, canvasWidth, canvasHeight);

    this.background.render();
    this.johan.render();
    this.exxons.forEach(exxon => exxon.render());

    window.requestAnimationFrame(this.render.bind(this));
  }
}

export default Game;
