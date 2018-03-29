/* global Hower */
import { Howl } from 'howler'

const bgMusic = new Howl({
  autoplay: true,
  loop: true,
  src: '../assets/sound/bensound-epic.mp3'
})


document.addEventListener('DOMContentLoaded', () => {
  bgMusic.play()

})
