export const canvasWidth = 768;
export const canvasHeight = 432;
export const GROUND_LEVEL = canvasHeight - 150;
export const TERMINAL_VELOCITY = 0;     // for later!

export const randomInt = (min, max) => {
  return Math.random() * (max - min) + min;
}

export const checkCollision = (obj1, obj2) => {
  if (obj1.posY + obj1.height < obj2.posY || obj1.posY > obj2.posY + obj2.height ||
    obj1.posX + obj1.width < obj2.posX || obj1.posX > obj2.posX + obj2.width) {
    return false
  } else {
    return true
  }
}
