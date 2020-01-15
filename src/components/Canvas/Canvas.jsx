import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Canvas.scss';
import canvas from '../../util/canvas';

function Canvas({
  handleClick, handleDrawingLines, frames, setFrames, currentFrame,
}) {
  useEffect(() => {
    /* Setting the canvas element for our helper class when the canvas is rendered,
       i.e. document.getElementById('canvas') isn't null
    */
    const canvasElement = document.getElementById('canvas');
    if (canvasElement.width === 512 && canvasElement.height === 512) {
      canvas.setCanvas(canvasElement);
    }
    if (!frames.length) setFrames([canvas.canvas.toDataURL()]);
  }, []);


  useEffect(() => {
    canvas.clear();
    canvas.loadFromUrl(frames[currentFrame]);
  }, [currentFrame, frames]);

  return (
    <div className="Canvas">
      <canvas
        id="canvas"
        height="512"
        width="512"
        onClick={handleClick}
        onMouseDown={handleDrawingLines}
        onMouseUp={handleDrawingLines}
        onMouseMove={handleDrawingLines}
      />
    </div>
  );
}

Canvas.propTypes = {
  handleClick: PropTypes.func,
  handleDrawingLines: PropTypes.func,
  frames: PropTypes.arrayOf(PropTypes.string),
  setFrames: PropTypes.func,
  currentFrame: PropTypes.number,
};

Canvas.defaultProps = {
  handleClick: () => {},
  handleDrawingLines: () => {},
  frames: [],
  setFrames: () => {},
  currentFrame: 0,
};

export default Canvas;
