import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Settings.scss';

function Settings({
  isOpen, setOpen, scale, setScale, penSize, setPenSize, eraserSize, setEraserSize, frameRate, setFrameRate,
}) {
  return (
    <div
      className={`Settings ${isOpen ? 'open' : 'closed'}`}
      id="modal"
      onClick={(e) => {
        setOpen(e.nativeEvent.target.id !== 'modal');
      }}
    >
      <div className="content">
        <div className="canvas-size">
          <p>Canvas Size</p>
          <div className="container" onClick={(e) => setScale(512 / e.nativeEvent.target.value)}>
            <button type="button">32x32</button>
            <button type="button">128x128</button>
            <button type="button">512x512</button>
          </div>
        </div>
        <div className="pen-size">
          <label htmlFor="penSize">Pen Size</label>
          <input
            type="number"
            defaultValue={penSize}
            min={1}
            max={32}
            onChange={(e) => setPenSize(e.nativeEvent.target.value)}
          />
        </div>
        <div className="eraser-size">
          <label htmlFor="eraserSize">Eraser Size</label>
          <input
            type="number"
            id="eraserSize"
            defaultValue={eraserSize}
            min={1}
            max={32}
            onChange={(e) => setEraserSize(e.nativeEvent.target.value)}
          />
        </div>
        <div className="frame-rate">
          <label htmlFor="frameRate">Frame Rate</label>
          <input
            type="number"
            id="frameRate"
            defaultValue={frameRate}
            min={1}
            max={25}
            onChange={((e) => {
              setFrameRate(e.nativeEvent.target.value);
            })}
          />
        </div>
      </div>
    </div>
  );
}

Settings.propTypes = {
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func,
  scale: PropTypes.number,
  setScale: PropTypes.func,
  penSize: PropTypes.number,
  setPenSize: PropTypes.func,
  eraserSize: PropTypes.number,
  setEraserSize: PropTypes.func,
  frameRate: PropTypes.number,
  setFrameRate: PropTypes.func,
};

Settings.defaultProps = {
  isOpen: false,
  setOpen: () => {},
  scale: 1,
  setScale: () => {},
  penSize: 1,
  setPenSize: () => {},
  eraserSize: 1,
  setEraserSize: () => {},
  frameRate: 7,
  setFrameRate: () => {},
};

export default Settings;
