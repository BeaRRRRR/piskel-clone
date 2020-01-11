import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { saveAs } from 'file-saver';
import './Preview.scss';
import GIF from 'gif.js.optimized';
import canvas from '../../util/canvas';

function Preview({ frames }) {
  const [gifSrc, setGifSrc] = useState('');

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
      gif.addFrame(img);
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
    console.log(frames);
    if (canvas.canvas && frames.length) {
      createPreview();
    }
  }, [frames]);

  return (
    <div className="Preview">
      <img className="gif" src={gifSrc} alt="Gif" />
      <div className="buttons">
        <button type="button" id="createPreview" onClick={createPreview}>Create Preview</button>
        <button type="button" onClick={createPreview.bind(this, true)}>Download Gif</button>
        <button type="button" onClick={createPreview.bind(this, true)}>Download Apng</button>
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
