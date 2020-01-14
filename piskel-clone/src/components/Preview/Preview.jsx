import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { saveAs } from 'file-saver';
import './Preview.scss';
import GIF from 'gif.js.optimized';
import canvas from '../../util/canvas';

function Preview({ frames, frameRate, setFrameRate }) {
  const [gifSrc, setGifSrc] = useState('');
  const [isFullscreen, setFullscreen] = useState(false);

  function createPreview(save = false) {
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
      gif.addFrame(img, {
        delay: 1000 / frameRate,
      });
    });

    gif.on('finished', (blob) => {
      const url = URL.createObjectURL(blob);
      if (save) {
        saveAs(url);
      }
      setGifSrc(url);
    });

    gif.render();
  }

  useEffect(() => {
    if (canvas.canvas && frames.length && canvas.canvas.width > 0 && canvas.canvas.height > 0) {
      createPreview();
    }
  }, [frames, frameRate]);

  useEffect(() => {
    function listener(e) {
      setFullscreen(e.key !== 'Escape' && isFullscreen);
    }
    document.addEventListener('keydown', listener);

    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, [isFullscreen]);

  return (
    <div className="Preview">
      <div className={`fullscreen-modal ${isFullscreen ? 'open' : 'closed'}`}>
        <p>Press ESC to exit fullscreen mode</p>
        <img src={gifSrc} alt="" />
      </div>
      <img className="gif" src={isFullscreen ? '' : gifSrc} alt="Gif" />
      <label htmlFor="frameRateInput" className="frameRate-input-label">
        Frames Per Second
        <input
          id="frameRateInput"
          className="frameRateInput"
          type="number"
          min={1}
          max={24}
          step={1}
          defaultValue={frameRate}
          onChange={(e) => {
            setFrameRate(e.nativeEvent.target.value);
          }}
        />
      </label>
      <div className="buttons">
        <button type="button" id="createPreview" onClick={createPreview}>Create Preview</button>
        <button type="button" onClick={createPreview.bind(this, true)}>Download Gif</button>
        <button type="button" onClick={createPreview.bind(this, true)}>Download Apng</button>
        <button type="button" onClick={setFullscreen.bind(this, true)}>FullScreen</button>
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
