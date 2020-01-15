/**
 * Draws a line between two point using bresenham's algorithm
 * @param {number} x0 - The x coordinate of the first point
 * @param {number} y0 - The y coordinate of the first point
 * @param {number} x1 - The x coordinate of the second point
 * @param {number} y1 - The y coordinate of the second point
 * @param {number} scale - The amount by which the size of 'unit' should be multiplied,
 * e.g on if the canvas size is 32by32 and the size of the canvas element is 512x512
 * each unit should be 4px
 * @param {string} color - The HEX string representing the color of the line
 * @param {Object} ctx - 2d context of the canvas element
 * @param {boolean} erase - Whether we should erase pixels instead of drawing,
 * used to implement the eraser functionality
 * @param {number} size - either pen or eraser size, default is 1 unit
 * */
export default function (x0, y0, x1, y1, scale = 1, color, ctx, erase = false, size = 1) {
  const dx = Math.abs(x1 - x0);
  const dy = Math.abs(y1 - y0);
  const sx = (x0 < x1) ? 1 : -1;
  const sy = (y0 < y1) ? 1 : -1;
  let err = dx - dy;

  while (true) {
    if (erase) {
      ctx.clearRect(x0 * scale, y0 * scale, scale * size, scale * size);
    } else {
      ctx.fillRect(x0 * scale, y0 * scale, scale * size, scale * size);
      ctx.fillStyle = color;
    }

    if ((x0 === x1) && (y0 === y1)) break;
    const e2 = 2 * err;
    if (e2 > -dy) {
      err -= dy;
      x0 += sx;
    }
    if (e2 < dx) {
      err += dx;
      y0 += sy;
    }
  }
}
