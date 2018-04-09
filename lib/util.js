export const canvasWidth = 768;
export const canvasHeight = 432;
export const GROUND_LEVEL = canvasHeight - 150;
export const TERMINAL_VELOCITY = 0;     // for later!

export const randomInt = (min, max) => {
  return Math.random() * (max - min) + min;
};
