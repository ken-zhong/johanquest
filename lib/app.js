/* global Hower */
import { Howl } from 'howler'
import Game from './game'

const bgMusic = new Howl({
  autoplay: true,
  loop: true,
  src: './assets/sound/bensound-epic.mp3'
})


document.addEventListener('DOMContentLoaded', () => {
  // window.setTimeout(bgMusic.play, 0)
  let game = new Game()
  
  game.init()
})
