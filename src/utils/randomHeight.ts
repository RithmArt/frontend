const heights = [300, 500, 200, 100, 250, 600, 350, 450, 400, 650, 550];
// this function selects a random height from heights array
export const randomHeight = () =>
  heights[Math.floor(Math.random() * heights.length)];
