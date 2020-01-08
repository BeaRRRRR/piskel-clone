import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Canvas.scss';
import canvas from '../../util/canvas';

function Canvas({
  handleClick, handleDrawingLines, frames, setFrames,
}) {
  useEffect(() => {
    /* Setting the canvas element for our helper class when the canvas is rendered,
       i.e. document.getElementById('canvas') isn't null
    */
    canvas.setCanvas(document.getElementById('canvas'));
    if (!frames) setFrames(canvas.canvas.toDataURL());
    else canvas.loadFromUrl(frames[0]);
  }, [frames, setFrames]);

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
};

Canvas.defaultProps = {
  handleClick: () => {},
  handleDrawingLines: () => {},
  frames: [],
  setFrames: () => {},
};

export default Canvas;
