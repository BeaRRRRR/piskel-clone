import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { saveAs } from 'file-saver';
import './Preview.scss';
import GIF from 'gif.js.optimized';
import canvas from '../../util/canvas';

function Preview({ frames }) {
  const [gifSrc, setGifSrc] = useState('');
  const [fps, setFps] = useState(6);

  function createPreview(save = false, fullscreen = false) {
    const gif = new GIF({
      workers: 2,
      quality: 10,
      workerScript: './gif.worker.js',
      background: '#ffffff',
      transparent: '#ffffff',
    });

    frames.forEach((f) => {
      const img = new Image();
      img.src = f;
      console.log(1000 / fps);
      gif.addFrame(img, {
        delay: 1000 / fps,
      });
    });

    gif.on('finished', (blob) => {
      const url = URL.createObjectURL(blob);
      if (save) {
        saveAs(url);
      }
      if (fullscreen) {
        window.open(url);
      }
      setGifSrc(url);
    });

    gif.render();
  }

  useEffect(() => {
    if (canvas.canvas && frames.length) {
      createPreview();
    }
  }, [frames]);

  return (
    <div className="Preview">
      <img className="gif" src={gifSrc} alt="Gif" />
      <label htmlFor="fpsInput" className="fps-input-label">
        Frames Per Second
        <input
          id="fpsInput"
          className="fpsInput"
          type="number"
          min={1}
          max={24}
          step={1}
          onChange={(e) => {
            setFps(e.nativeEvent.target.value);
          }}
        />
      </label>
      <div className="buttons">
        <button type="button" id="createPreview" onClick={createPreview}>Create Preview</button>
        <button type="button" onClick={createPreview.bind(this, true)}>Download Gif</button>
        <button type="button" onClick={createPreview.bind(this, true)}>Download Apng</button>
        <button type="button" onClick={createPreview.bind(this, true, true)}>FullScreen</button>
      </div>
    </div>
  );
}

Preview.propTypes = {
  frames: PropTypes.arrayOf(PropTypes.string),
};

Preview.defaultProps = {
  frames: [],
};

export default Preview;
