import colors from './colors';
import line from './algorithms/bresenham';

/* A helper class representing the canvas */
class Canvas {
  constructor() {
    this.down = false;
    this.cords;

    this.eventTypes = {
      mousedown: (event, scale) => {
        this.down = true;
        this.cords = {
          col: Math.floor(event.nativeEvent.offsetX / (scale ** 2)),
          row: Math.floor(event.nativeEvent.offsetY / (scale ** 2)),
        };
      },
      mousemove: (event, scale, color) => {
        if (this.down) {
          const col = Math.floor(event.nativeEvent.offsetX / (scale ** 2));
          const row = Math.floor(event.nativeEvent.offsetY / (scale ** 2));
          line(this.cords.col, this.cords.row, col, row, scale, color, this.ctx);
          this.cords.col = col;
          this.cords.row = row;
        }
      },
      mouseup: () => {
        this.down = false;
      },
    };

    return this;
  }

  setCanvas(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
  }

  clear() {
    this.ctx.clearRect(0, 0, 512, 512);
  }

  loadFromUrl(url) {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      this.ctx.drawImage(img, 0, 0, 512, 512);
    };
  }

  drawOnePixel(col, row, color, scale) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(col * scale, row * scale, scale, scale);
  }

  handleDrawingLines(event, color, scale) {
    this.eventTypes[event.nativeEvent.type](event, scale, color);
  }
}

const canvas = new Canvas();

export default canvas;
